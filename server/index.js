const fs = require('fs');
const http = require('http');
const https = require('https');
const path = require('path');
const crypto = require('crypto');
const nodemailer = require('nodemailer');

const root = path.resolve(__dirname, '..');
const buildDirectory = path.join(root, 'build');

function loadEnvironment(filename) {
  if (!fs.existsSync(filename)) return;

  fs.readFileSync(filename, 'utf8').split(/\r?\n/).forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) return;
    const separator = trimmed.indexOf('=');
    if (separator === -1) return;
    const key = trimmed.slice(0, separator).trim();
    let value = trimmed.slice(separator + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    if (!process.env[key]) process.env[key] = value;
  });
}

loadEnvironment(path.join(root, '.env'));

const requiredConfiguration = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS', 'SMTP_TO'];
const missingConfiguration = requiredConfiguration.filter((key) => !process.env[key]);
if (missingConfiguration.length) {
  console.error(`Missing mail configuration: ${missingConfiguration.join(', ')}`);
}

const requiredNewsletterConfiguration = [
  'GOOGLE_SHEET_ID',
  'GOOGLE_SHEET_NAME',
  'GOOGLE_SERVICE_ACCOUNT_EMAIL',
  'GOOGLE_PRIVATE_KEY',
];
const missingNewsletterConfiguration = requiredNewsletterConfiguration.filter((key) => !process.env[key]);
if (missingNewsletterConfiguration.length) {
  console.error(`Missing newsletter configuration: ${missingNewsletterConfiguration.join(', ')}`);
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 465),
  secure: String(process.env.SMTP_SECURE || 'true').toLowerCase() === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const attempts = new Map();
const RATE_WINDOW = 15 * 60 * 1000;
const RATE_LIMIT = 5;

function isRateLimited(ip, bucket = 'contact', limit = RATE_LIMIT) {
  const now = Date.now();
  const key = `${bucket}:${ip}`;
  const recent = (attempts.get(key) || []).filter((time) => now - time < RATE_WINDOW);
  recent.push(now);
  attempts.set(key, recent);
  return recent.length > limit;
}

function respondJson(response, status, payload) {
  response.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
  });
  response.end(JSON.stringify(payload));
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function clean(value, limit) {
  return String(value || '').trim().slice(0, limit);
}

let googleAccessToken = null;
let googleAccessTokenExpiresAt = 0;

function requestJson(url, options = {}) {
  return new Promise((resolve, reject) => {
    const requestBody = options.body || '';
    const outgoingRequest = https.request(url, {
      method: options.method || 'GET',
      headers: {
        ...(options.headers || {}),
        ...(requestBody ? { 'Content-Length': Buffer.byteLength(requestBody) } : {}),
      },
    }, (incomingResponse) => {
      let responseBody = '';
      incomingResponse.setEncoding('utf8');
      incomingResponse.on('data', (chunk) => {
        responseBody += chunk;
      });
      incomingResponse.on('end', () => {
        let result = {};
        try {
          result = responseBody ? JSON.parse(responseBody) : {};
        } catch {
          result = {};
        }

        resolve({
          ok: incomingResponse.statusCode >= 200 && incomingResponse.statusCode < 300,
          status: incomingResponse.statusCode,
          result,
        });
      });
    });

    outgoingRequest.on('error', reject);
    if (requestBody) outgoingRequest.write(requestBody);
    outgoingRequest.end();
  });
}

function encodeBase64Url(value) {
  return Buffer.from(value)
    .toString('base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
}

function normalizeGoogleConfigValue(value) {
  let normalized = String(value || '').trim();

  if (normalized.endsWith(',')) normalized = normalized.slice(0, -1).trim();

  if (normalized.startsWith('\\"') && normalized.endsWith('\\"')) {
    normalized = normalized.slice(2, -2);
  } else if (
    (normalized.startsWith('"') && normalized.endsWith('"'))
    || (normalized.startsWith("'") && normalized.endsWith("'"))
  ) {
    normalized = normalized.slice(1, -1);
  }

  return normalized;
}

function normalizePrivateKey(value) {
  const privateKey = normalizeGoogleConfigValue(value);

  return privateKey.replace(/\\n/g, '\n');
}

async function getGoogleAccessToken() {
  if (googleAccessToken && Date.now() < googleAccessTokenExpiresAt - 60000) {
    return googleAccessToken;
  }

  const now = Math.floor(Date.now() / 1000);
  const header = encodeBase64Url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
  const claim = encodeBase64Url(JSON.stringify({
    iss: normalizeGoogleConfigValue(process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL),
    scope: 'https://www.googleapis.com/auth/spreadsheets',
    aud: 'https://oauth2.googleapis.com/token',
    iat: now,
    exp: now + 3600,
  }));
  const unsignedToken = `${header}.${claim}`;
  const privateKey = normalizePrivateKey(process.env.GOOGLE_PRIVATE_KEY);
  const signature = crypto.sign('RSA-SHA256', Buffer.from(unsignedToken), privateKey);
  const assertion = `${unsignedToken}.${encodeBase64Url(signature)}`;

  const tokenResponse = await requestJson('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion,
    }).toString(),
  });
  const tokenResult = tokenResponse.result;

  if (!tokenResponse.ok || !tokenResult.access_token) {
    throw new Error(tokenResult.error_description || 'Google authentication failed.');
  }

  googleAccessToken = tokenResult.access_token;
  googleAccessTokenExpiresAt = Date.now() + Number(tokenResult.expires_in || 3600) * 1000;
  return googleAccessToken;
}

async function googleSheetsRequest(range, options = {}) {
  const accessToken = await getGoogleAccessToken();
  const query = options.query ? `?${new URLSearchParams(options.query)}` : '';
  const action = options.action || '';
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${encodeURIComponent(process.env.GOOGLE_SHEET_ID)}/values/${encodeURIComponent(range)}${action}${query}`;
  const sheetsResponse = await requestJson(url, {
    method: options.method || 'GET',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      ...(options.body ? { 'Content-Type': 'application/json' } : {}),
    },
    body: options.body ? JSON.stringify(options.body) : '',
  });
  const result = sheetsResponse.result;

  if (!sheetsResponse.ok) {
    throw new Error(result.error?.message || 'Google Sheets request failed.');
  }

  return result;
}

async function appendNewsletterSubscriber(email, page) {
  const sheetName = `'${process.env.GOOGLE_SHEET_NAME.replace(/'/g, "''")}'`;
  const headerRange = `${sheetName}!A1:C1`;
  const header = await googleSheetsRequest(headerRange);

  if (!header.values?.length) {
    await googleSheetsRequest(headerRange, {
      method: 'PUT',
      query: { valueInputOption: 'RAW' },
      body: { values: [['Email', 'Subscribed At', 'Source']] },
    });
  }

  await googleSheetsRequest(`${sheetName}!A:C`, {
    method: 'POST',
    action: ':append',
    query: { valueInputOption: 'RAW', insertDataOption: 'INSERT_ROWS' },
    body: { values: [[email, new Date().toISOString(), page || 'Website']] },
  });
}

async function handleNewsletter(request, response) {
  const ip = request.headers['x-forwarded-for']?.split(',')[0].trim() || request.socket.remoteAddress || 'unknown';
  if (isRateLimited(ip, 'newsletter', 10)) {
    respondJson(response, 429, { message: 'Too many subscription attempts. Please try again later.' });
    return;
  }

  let body = '';
  request.on('data', (chunk) => {
    body += chunk;
    if (body.length > 8192) request.destroy();
  });

  request.on('end', async () => {
    let payload;
    try {
      payload = JSON.parse(body || '{}');
    } catch {
      respondJson(response, 400, { message: 'Invalid newsletter submission.' });
      return;
    }

    const email = clean(payload.email, 254).replace(/[\r\n]/g, '').toLowerCase();
    const page = clean(payload.page, 500);
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      respondJson(response, 400, { message: 'Please enter a valid email address.' });
      return;
    }

    if (missingNewsletterConfiguration.length) {
      respondJson(response, 503, { message: 'Newsletter signup is not configured yet.' });
      return;
    }

    try {
      await appendNewsletterSubscriber(email, page);
      respondJson(response, 200, { message: 'Thank you for subscribing.' });
    } catch (error) {
      console.error('Newsletter storage failed:', error.message);
      respondJson(response, 502, { message: 'We could not add your email. Please try again.' });
    }
  });
}

async function handleContact(request, response) {
  const ip = request.headers['x-forwarded-for']?.split(',')[0].trim() || request.socket.remoteAddress || 'unknown';
  if (isRateLimited(ip)) {
    respondJson(response, 429, { message: 'Too many messages. Please try again in 15 minutes.' });
    return;
  }

  let body = '';
  request.on('data', (chunk) => {
    body += chunk;
    if (body.length > 32768) request.destroy();
  });

  request.on('end', async () => {
    let payload;
    try {
      payload = JSON.parse(body || '{}');
    } catch {
      respondJson(response, 400, { message: 'Invalid form submission.' });
      return;
    }

    const name = clean(payload.name, 120);
    const company = clean(payload.company, 160);
    const email = clean(payload.email, 254).replace(/[\r\n]/g, '');
    const message = clean(payload.message, 5000);
    const page = clean(payload.page, 300);
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !company || !emailPattern.test(email)) {
      respondJson(response, 400, { message: 'Please complete Name, Company and a valid Email.' });
      return;
    }

    if (missingConfiguration.length) {
      respondJson(response, 503, { message: 'Email delivery is not configured yet. Please contact us directly.' });
      return;
    }

    const subjectName = name.replace(/[\r\n]/g, ' ');
    const text = [
      `Name: ${name}`,
      `Company: ${company}`,
      `Email: ${email}`,
      `Page: ${page || 'Unknown'}`,
      '',
      'Message:',
      message || '(No message supplied)',
    ].join('\n');

    try {
      await transporter.sendMail({
        from: `BOXCOM Africa Website <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
        to: process.env.SMTP_TO,
        replyTo: email,
        subject: `Website enquiry from ${subjectName}`,
        text,
        html: `
          <h2>New website enquiry</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Company:</strong> ${escapeHtml(company)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Page:</strong> ${escapeHtml(page || 'Unknown')}</p>
          <h3>Message</h3>
          <p>${escapeHtml(message || '(No message supplied)').replace(/\n/g, '<br>')}</p>
        `,
      });
      respondJson(response, 200, { message: 'Thank you. Your message has been sent.' });
    } catch (error) {
      console.error('SMTP delivery failed:', error.message);
      respondJson(response, 502, { message: 'We could not send your message. Please try again or email us directly.' });
    }
  });
}

const mimeTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.md': 'text/markdown; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
};

function serveBuild(request, response) {
  const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
  const relativePath = pathname === '/' ? 'index.html' : pathname.replace(/^\/+/, '');
  const requestedPath = path.resolve(buildDirectory, relativePath);
  const safePath = requestedPath.startsWith(`${buildDirectory}${path.sep}`) ? requestedPath : path.join(buildDirectory, 'index.html');
  const filePath = fs.existsSync(safePath) && fs.statSync(safePath).isFile() ? safePath : path.join(buildDirectory, 'index.html');

  if (!fs.existsSync(filePath)) {
    respondJson(response, 404, { message: 'Build not found. Run npm run build first.' });
    return;
  }

  response.writeHead(200, { 'Content-Type': mimeTypes[path.extname(filePath).toLowerCase()] || 'application/octet-stream' });
  fs.createReadStream(filePath).pipe(response);
}

const server = http.createServer((request, response) => {
  const pathname = new URL(request.url, 'http://localhost').pathname;
  if (request.method === 'POST' && pathname === '/api/contact') {
    handleContact(request, response);
    return;
  }
  if (request.method === 'POST' && pathname === '/api/newsletter') {
    handleNewsletter(request, response);
    return;
  }
  if (request.method === 'GET' && pathname === '/api/health') {
    respondJson(response, 200, {
      status: 'ok',
      smtpConfigured: !missingConfiguration.length,
      newsletterConfigured: !missingNewsletterConfiguration.length,
    });
    return;
  }
  if (request.method === 'GET' || request.method === 'HEAD') {
    serveBuild(request, response);
    return;
  }
  respondJson(response, 405, { message: 'Method not allowed.' });
});

const port = Number(process.env.MAIL_SERVER_PORT || process.env.PORT || 3001);
server.listen(port, () => {
  console.log(`BOXCOM Africa mail server listening on http://localhost:${port}`);
});

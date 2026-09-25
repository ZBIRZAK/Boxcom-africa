const crypto = require('crypto');

const requiredConfiguration = [
  'GOOGLE_SHEET_ID',
  'GOOGLE_SHEET_NAME',
  'GOOGLE_SERVICE_ACCOUNT_EMAIL',
  'GOOGLE_PRIVATE_KEY',
];

function clean(value, limit) {
  return String(value || '').trim().slice(0, limit);
}

function getPayload(request) {
  if (request.body && typeof request.body === 'object') return request.body;

  try {
    return JSON.parse(request.body || '{}');
  } catch {
    return null;
  }
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
  return normalizeGoogleConfigValue(value).replace(/\\n/g, '\n');
}

function encodeBase64Url(value) {
  return Buffer.from(value)
    .toString('base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
}

async function requestJson(url, options = {}) {
  const response = await fetch(url, options);
  const result = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(result.error?.message || result.error_description || 'Google API request failed.');
  }

  return result;
}

async function getGoogleAccessToken() {
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
  const signature = crypto.sign(
    'RSA-SHA256',
    Buffer.from(unsignedToken),
    normalizePrivateKey(process.env.GOOGLE_PRIVATE_KEY),
  );
  const assertion = `${unsignedToken}.${encodeBase64Url(signature)}`;

  const tokenResult = await requestJson('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion,
    }).toString(),
  });

  if (!tokenResult.access_token) throw new Error('Google authentication did not return an access token.');
  return tokenResult.access_token;
}

async function googleSheetsRequest(accessToken, range, options = {}) {
  const query = options.query ? `?${new URLSearchParams(options.query)}` : '';
  const action = options.action || '';
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${encodeURIComponent(process.env.GOOGLE_SHEET_ID)}/values/${encodeURIComponent(range)}${action}${query}`;

  return requestJson(url, {
    method: options.method || 'GET',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      ...(options.body ? { 'Content-Type': 'application/json' } : {}),
    },
    ...(options.body ? { body: JSON.stringify(options.body) } : {}),
  });
}

async function appendNewsletterSubscriber(email, page) {
  const accessToken = await getGoogleAccessToken();
  const sheetName = `'${process.env.GOOGLE_SHEET_NAME.replace(/'/g, "''")}'`;
  const headerRange = `${sheetName}!A1:C1`;
  const header = await googleSheetsRequest(accessToken, headerRange);

  if (!header.values?.length) {
    await googleSheetsRequest(accessToken, headerRange, {
      method: 'PUT',
      query: { valueInputOption: 'RAW' },
      body: { values: [['Email', 'Subscribed At', 'Source']] },
    });
  }

  await googleSheetsRequest(accessToken, `${sheetName}!A:C`, {
    method: 'POST',
    action: ':append',
    query: { valueInputOption: 'RAW', insertDataOption: 'INSERT_ROWS' },
    body: { values: [[email, new Date().toISOString(), page || 'Website']] },
  });
}

module.exports = async function newsletterHandler(request, response) {
  response.setHeader('Cache-Control', 'no-store');

  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return response.status(405).json({ message: 'Method not allowed.' });
  }

  const payload = getPayload(request);
  if (!payload) return response.status(400).json({ message: 'Invalid newsletter submission.' });

  const email = clean(payload.email, 254).replace(/[\r\n]/g, '').toLowerCase();
  const page = clean(payload.page, 500);
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    return response.status(400).json({ message: 'Please enter a valid email address.' });
  }

  const missingConfiguration = requiredConfiguration.filter((key) => !process.env[key]);
  if (missingConfiguration.length) {
    console.error(`Missing newsletter configuration: ${missingConfiguration.join(', ')}`);
    return response.status(503).json({ message: 'Newsletter signup is not configured yet.' });
  }

  try {
    await appendNewsletterSubscriber(email, page);
    return response.status(200).json({ message: 'Thank you for subscribing.' });
  } catch (error) {
    console.error('Newsletter storage failed:', error.message);
    return response.status(502).json({ message: 'We could not add your email. Please try again.' });
  }
};

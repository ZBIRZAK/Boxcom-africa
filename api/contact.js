const nodemailer = require('nodemailer');

const requiredConfiguration = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS', 'SMTP_TO'];

function clean(value, limit) {
  return String(value || '').trim().slice(0, limit);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function getPayload(request) {
  if (request.body && typeof request.body === 'object') return request.body;

  try {
    return JSON.parse(request.body || '{}');
  } catch {
    return null;
  }
}

module.exports = async function contactHandler(request, response) {
  response.setHeader('Cache-Control', 'no-store');

  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return response.status(405).json({ message: 'Method not allowed.' });
  }

  const payload = getPayload(request);
  if (!payload) {
    return response.status(400).json({ message: 'Invalid form submission.' });
  }

  const name = clean(payload.name, 120);
  const company = clean(payload.company, 160);
  const email = clean(payload.email, 254).replace(/[\r\n]/g, '');
  const message = clean(payload.message, 5000);
  const page = clean(payload.page, 300);
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !company || !emailPattern.test(email)) {
    return response.status(400).json({ message: 'Please complete Name, Company and a valid Email.' });
  }

  const missingConfiguration = requiredConfiguration.filter((key) => !process.env[key]);
  if (missingConfiguration.length) {
    console.error(`Missing contact form configuration: ${missingConfiguration.join(', ')}`);
    return response.status(503).json({
      message: 'Email delivery is not configured yet. Please email contact@box-com.com directly.',
    });
  }

  const port = Number(process.env.SMTP_PORT);
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: String(process.env.SMTP_SECURE || port === 465).toLowerCase() === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
  });

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
      from: `BOXCOM Africa Website <${process.env.SMTP_USER}>`,
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

    return response.status(200).json({ message: 'Thank you. Your message has been sent.' });
  } catch (error) {
    console.error('Contact form SMTP delivery failed:', error.code || error.message);
    return response.status(502).json({
      message: 'We could not send your message. Please try again or email contact@box-com.com directly.',
    });
  }
};

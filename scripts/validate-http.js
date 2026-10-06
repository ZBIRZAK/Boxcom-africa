const http = require('http');
const path = require('path');
const { spawn } = require('child_process');

const root = path.resolve(__dirname, '..');
// Use a dedicated validation port so a running development server cannot make
// the acceptance suite test the wrong process.
const port = Number(process.env.HTTP_VALIDATION_PORT || 3107);
const productionDomain = 'https://www.boxcomafrica.com';
const userAgents = ['Mozilla/5.0', 'Googlebot', 'GPTBot', 'ChatGPT-User', 'ClaudeBot'];
const pageExpectations = {
  '/': { lang: 'fr', h1: 'Agence RP au Maroc tournée vers l’Afrique' },
  '/en': { lang: 'en', h1: 'PR Agency in Morocco for Africa' },
  '/about': { lang: 'fr', h1: 'À propos de BOXCOM Africa' },
  '/en/about': { lang: 'en', h1: 'Who We Are' },
  '/services': { lang: 'fr', h1: "Services RP au Maroc, tournés vers l'Afrique" },
  '/en/services': { lang: 'en', h1: 'PR Services in Morocco for Africa' },
  '/services/media-relations': { lang: 'fr', h1: 'Relations médias' },
  '/en/services/media-relations': { lang: 'en', h1: 'Media Relations' },
  '/services/communication-de-crise': { lang: 'fr', h1: 'Communication de crise' },
  '/en/services/crisis-communication': { lang: 'en', h1: 'Crisis Communication' },
  '/en/projects': { lang: 'en', h1: 'Our Projects' },
  '/en/blog': { lang: 'en', h1: 'Our Blog' },
  '/en/blog/what-makes-a-journalist-take-your-call': { lang: 'en', h1: 'What Makes a Journalist Take Your Call?' },
  '/blog': { lang: 'fr', h1: 'Notre Blog' },
  '/blog/what-makes-a-journalist-take-your-call': { lang: 'fr', h1: 'Qu’est-ce qui pousse un journaliste à décrocher ?' },
};

const server = spawn(process.execPath, [path.join(root, 'server', 'index.js')], {
  cwd: root,
  env: { ...process.env, MAIL_SERVER_PORT: String(port), PORT: String(port) },
  stdio: ['ignore', 'pipe', 'pipe'],
});

function request(pathname, { method = 'GET', userAgent = 'Mozilla/5.0' } = {}) {
  return new Promise((resolve, reject) => {
    const outgoing = http.request({
      hostname: '127.0.0.1', port, path: pathname, method, headers: { 'User-Agent': userAgent },
    }, (response) => {
      let body = '';
      response.setEncoding('utf8');
      response.on('data', (chunk) => { body += chunk; });
      response.on('end', () => resolve({ status: response.statusCode, headers: response.headers, body }));
    });
    outgoing.on('error', reject);
    outgoing.end();
  });
}

function visibleText(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<!--.*?-->/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function extract(html, pattern, label, pathname) {
  const match = html.match(pattern);
  if (!match) throw new Error(`${pathname} has no ${label}`);
  return visibleText(match[1]);
}

const ready = new Promise((resolve, reject) => {
  const timeout = setTimeout(() => reject(new Error('HTTP validation server did not start on localhost:3000')), 10000);
  server.stdout.on('data', (chunk) => {
    if (chunk.toString().includes('listening')) {
      clearTimeout(timeout);
      resolve();
    }
  });
  server.on('exit', (code) => {
    clearTimeout(timeout);
    reject(new Error(`HTTP validation server exited with code ${code}`));
  });
});

(async () => {
  try {
    await ready;

    for (const [pathname, expected] of Object.entries(pageExpectations)) {
      let browserCoreContent = null;
      for (const userAgent of userAgents) {
        const response = await request(pathname, { userAgent });
        if (response.status !== 200) throw new Error(`${pathname} returned ${response.status} to ${userAgent}`);
        if (!/text\/html/.test(response.headers['content-type'] || '')) throw new Error(`${pathname} has the wrong content type`);
        if (/<div id="root"><\/div>/.test(response.body)) throw new Error(`${pathname} returned an empty React root`);

        const title = extract(response.body, /<title>([\s\S]*?)<\/title>/i, 'title', pathname);
        const h1 = extract(response.body, /<h1\b[^>]*>([\s\S]*?)<\/h1>/i, 'H1', pathname);
        const canonical = response.body.match(/<link rel="canonical" href="([^"]+)"/i)?.[1];
        const language = response.body.match(/<html lang="([^"]+)"/i)?.[1];
        const coreContent = visibleText(response.body.match(/<div id="root">([\s\S]*?)<\/div><\/body>/i)?.[1] || '');

        if (!title || (title === 'PR Agency in Morocco for Africa | BOXCOM Africa' && pathname !== '/en')) {
          throw new Error(`${pathname} returned the homepage title to ${userAgent}`);
        }
        if (canonical !== `${productionDomain}${pathname}`) throw new Error(`${pathname} has canonical ${canonical}`);
        if (language !== expected.lang) throw new Error(`${pathname} has lang=${language}`);
        if (!h1.includes(expected.h1)) throw new Error(`${pathname} has unexpected H1: ${h1}`);
        if (coreContent.length < 300) throw new Error(`${pathname} lacks meaningful initial content`);
        if (browserCoreContent === null) browserCoreContent = coreContent;
        else if (coreContent !== browserCoreContent) throw new Error(`${pathname} serves different core content to ${userAgent}`);
      }
    }

    for (const userAgent of userAgents) {
      const missing = await request('/definitely-missing-987', { userAgent });
      if (missing.status !== 404 || !missing.body.includes('content="noindex"')) throw new Error(`Unknown route failed for ${userAgent}`);
    }

    const resources = {
      '/robots.txt': 'text/plain', '/sitemap.xml': 'application/xml', '/llms.txt': 'text/plain', '/rss.xml': 'application/rss+xml',
    };
    for (const [pathname, contentType] of Object.entries(resources)) {
      const response = await request(pathname);
      if (response.status !== 200) throw new Error(`${pathname} returned ${response.status}`);
      if (!(response.headers['content-type'] || '').startsWith(contentType)) {
        throw new Error(`${pathname} returned ${response.headers['content-type']} instead of ${contentType}`);
      }
      if (response.body.includes('https://boxcom-africa.com')) throw new Error(`${pathname} contains the obsolete domain`);
      if (!response.body.includes(productionDomain)) throw new Error(`${pathname} does not contain the production domain`);
    }

    const redirect = await request('/about/?source=test');
    if (redirect.status !== 308 || redirect.headers.location !== '/about?source=test') throw new Error('Trailing-slash redirects are not canonical');

    const frenchRedirect = await request('/fr/about?source=test');
    if (frenchRedirect.status !== 308 || frenchRedirect.headers.location !== '/about?source=test') {
      throw new Error('Legacy French routes do not redirect to the new canonical URL');
    }

    const legacyFrenchBlog = await request('/fr/blog/what-makes-a-journalist-take-your-call?source=test');
    if (legacyFrenchBlog.status !== 308 || legacyFrenchBlog.headers.location !== '/blog/what-makes-a-journalist-take-your-call?source=test') {
      throw new Error('Legacy French blog URLs do not redirect to the canonical French articles');
    }

    const attributedContact = await request('/contact?from=crisis');
    const attributedCanonical = attributedContact.body.match(/<link rel="canonical" href="([^"]+)"/i)?.[1];
    if (attributedContact.status !== 200 || attributedCanonical !== `${productionDomain}/contact`) {
      throw new Error('Attributed contact URL does not preserve the parameter-free canonical');
    }

    const attributedEnglishContact = await request('/en/contact?from=crisis');
    const attributedEnglishCanonical = attributedEnglishContact.body.match(/<link rel="canonical" href="([^"]+)"/i)?.[1];
    if (attributedEnglishContact.status !== 200 || attributedEnglishCanonical !== `${productionDomain}/en/contact`) {
      throw new Error('Attributed English contact URL does not preserve the parameter-free canonical');
    }

    const crisisPage = await request('/services/communication-de-crise');
    const crisisCtas = crisisPage.body.match(/href="\/contact\?from=crisis"/g) || [];
    if (crisisCtas.length !== 2 || !crisisPage.body.includes('name="from" value="crisis"')) {
      throw new Error('Crisis CTAs or hidden attribution field are not configured correctly');
    }

    const head = await request('/en/services', { method: 'HEAD' });
    if (head.status !== 200 || head.body) throw new Error('HEAD /en/services returned an invalid response');

    console.log(`HTTP acceptance tests passed on localhost:${port} for ${Object.keys(pageExpectations).length} pages and ${userAgents.length} user agents.`);
  } finally {
    server.kill('SIGTERM');
  }
})().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});

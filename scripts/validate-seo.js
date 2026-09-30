const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const buildDirectory = path.join(root, 'build');
const routes = require(path.join(root, 'config', 'public-routes.json'));
const siteUrl = (process.env.SITE_URL || 'https://www.boxcomafrica.com').replace(/\/$/, '');

function fail(message) {
  throw new Error(`SEO validation failed: ${message}`);
}

function routeFile(route) {
  return route === '/'
    ? path.join(buildDirectory, 'index.html')
    : path.join(buildDirectory, route.replace(/^\//, ''), 'index.html');
}

routes.forEach((route) => {
  const filename = routeFile(route);
  if (!fs.existsSync(filename)) fail(`${route} has no pre-rendered HTML file`);
  if (route !== '/' && !fs.existsSync(path.join(buildDirectory, `${route.replace(/^\//, '')}.html`))) {
    fail(`${route} has no Vercel clean-URL HTML file`);
  }
  const html = fs.readFileSync(filename, 'utf8');
  const expectedLanguage = route === '/fr' || route.startsWith('/fr/') ? 'fr' : 'en';
  const text = html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  if (!/<div id="root">.+<\/div><\/body>/s.test(html)) fail(`${route} has an empty application root`);
  if (!/<h1\b/i.test(html)) fail(`${route} has no H1`);
  if (text.length < 300) fail(`${route} exposes too little text without JavaScript`);
  if (!html.includes(`<html lang="${expectedLanguage}">`)) fail(`${route} has the wrong document language`);
  if (!html.includes(`rel="canonical" href="${siteUrl}${route}"`)) fail(`${route} has the wrong canonical URL`);
  if (!html.includes('name="description"')) fail(`${route} has no description`);
  if (!html.includes('property="og:title"') || !html.includes('name="twitter:card"')) fail(`${route} lacks social metadata`);
  if (html.includes('href="#/') || html.includes('undefined/assets/')) fail(`${route} contains an obsolete or invalid URL`);

  const structuredData = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  if (!structuredData) fail(`${route} has no JSON-LD`);
  JSON.parse(structuredData[1]);

  for (const image of html.matchAll(/<img\b[^>]*>/gi)) {
    const tag = image[0];
    if (!/\balt="[^"]*"/.test(tag)) fail(`${route} contains an image without alt text: ${tag}`);
    if (/\balt=""/.test(tag) && !/\baria-hidden="true"/.test(tag)) {
      fail(`${route} contains an unmarked decorative image: ${tag}`);
    }
  }
});

const sitemap = fs.readFileSync(path.join(buildDirectory, 'sitemap.xml'), 'utf8');
const sitemapUrls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
if (sitemapUrls.length !== routes.length) fail('sitemap route count does not match the public route inventory');
routes.forEach((route) => {
  if (!sitemapUrls.includes(`${siteUrl}${route}`)) fail(`sitemap is missing ${route}`);
});

const rss = fs.readFileSync(path.join(buildDirectory, 'rss.xml'), 'utf8');
const postCount = fs.readdirSync(path.join(root, 'posts')).filter((name) => name.endsWith('.md') && !name.startsWith('_')).length;
if ((rss.match(/<item>/g) || []).length !== postCount) fail('RSS item count does not match published posts');

const llms = fs.readFileSync(path.join(buildDirectory, 'llms.txt'), 'utf8');
routes.forEach((route) => {
  if (!llms.includes(`${siteUrl}${route}`)) fail(`llms.txt is missing ${route}`);
});

const notFound = fs.readFileSync(path.join(buildDirectory, '404.html'), 'utf8');
if (!notFound.includes('name="robots" content="noindex"')) fail('404 page is not marked noindex');

console.log(`SEO validation passed for ${routes.length} pre-rendered routes and ${postCount} RSS posts.`);

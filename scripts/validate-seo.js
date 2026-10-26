const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const buildDirectory = path.join(root, 'build');
const routes = require(path.join(root, 'config', 'public-routes.json'));
const siteUrl = (process.env.SITE_URL || 'https://www.boxcomafrica.com').replace(/\/$/, '');
const pageSocialImages = {
  '/about': '/og-image.jpg',
  '/en/about': '/og-image.jpg',
  '/services': 'services-v4.jpg',
  '/en/services': 'services-v4.jpg',
  '/services/media-relations': 'media-relations-v4.jpg',
  '/en/services/media-relations': 'media-relations-v4.jpg',
  '/services/media-events': 'media-events-v4.jpg',
  '/en/services/media-events': 'media-events-v4.jpg',
  '/services/media-monitoring': 'media-monitoring-v4.jpg',
  '/en/services/media-monitoring': 'media-monitoring-v4.jpg',
  '/services/social-pr': 'social-pr-v4.jpg',
  '/en/services/social-pr': 'social-pr-v4.jpg',
  '/services/pr-content-creation': 'pr-content-creation-v4.jpg',
  '/en/services/pr-content-creation': 'pr-content-creation-v4.jpg',
  '/services/influencer-relations': 'influencer-relations-v4.jpg',
  '/en/services/influencer-relations': 'influencer-relations-v4.jpg',
  '/services/communication-de-crise': 'crisis-communication-v4.jpg',
  '/en/services/crisis-communication': 'crisis-communication-v4.jpg',
  '/projects': 'projects-v4.jpg',
  '/en/projects': 'projects-v4.jpg',
};

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
  const expectedLanguage = route === '/en' || route.startsWith('/en/') ? 'en' : 'fr';
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
  if (!html.includes(`hreflang="${expectedLanguage}" href="${siteUrl}${route}"`)) {
    fail(`${route} has no self-referencing ${expectedLanguage} hreflang`);
  }
  if (!html.includes('hreflang="x-default"')) fail(`${route} has no x-default hreflang`);
  if (!html.includes('name="description"')) fail(`${route} has no description`);
  if (!html.includes('property="og:title"') || !html.includes('name="twitter:card"')) fail(`${route} lacks social metadata`);
  if (html.includes('href="#/') || html.includes('undefined/assets/')) fail(`${route} contains an obsolete or invalid URL`);

  if (route === '/blog' || route === '/en/blog' || /^(?:\/en)?\/blog\//.test(route)) {
    const ogImage = html.match(/<meta property="og:image" content="([^"]+)"/i)?.[1];
    const imageUrl = html.match(/<meta property="og:image:url" content="([^"]+)"/i)?.[1];
    const secureImage = html.match(/<meta property="og:image:secure_url" content="([^"]+)"/i)?.[1];
    const twitterImage = html.match(/<meta name="twitter:image" content="([^"]+)"/i)?.[1];
    const featuredSlug = html.match(/class="blog-featured__image" href="[^"]*\/([^/"]+)"/i)?.[1];
    const socialSlug = route === '/blog' || route === '/en/blog'
      ? featuredSlug
      : route.split('/').pop();
    const expectedSocialImage = socialSlug
      ? `${siteUrl}/assets/social/blog/${socialSlug}-v3.jpg`
      : null;
    const expectedImageFile = socialSlug
      ? path.join(root, 'public', 'assets', 'social', 'blog', `${socialSlug}-v3.jpg`)
      : null;

    if (!ogImage || !twitterImage) fail(`${route} has incomplete social image metadata`);
    if (ogImage.includes('favicon-b.png') || twitterImage.includes('favicon-b.png')) {
      fail(`${route} uses the favicon as its social image`);
    }
    if (!expectedSocialImage || ogImage !== expectedSocialImage || imageUrl !== expectedSocialImage
      || secureImage !== expectedSocialImage || twitterImage !== expectedSocialImage) {
      fail(`${route} social metadata does not use its ${route.endsWith('/blog') ? 'featured' : 'article'} image`);
    }
    if (!expectedImageFile || !fs.existsSync(expectedImageFile)) fail(`${route} social image file is missing`);
    if (!html.includes('<meta property="og:image:type" content="image/jpeg" />')) fail(`${route} social image has no JPEG type`);
    if (!html.includes('<meta property="og:image:width" content="1200" />')
      || !html.includes('<meta property="og:image:height" content="627" />')) {
      fail(`${route} social image has incorrect or missing dimensions`);
    }
  }

  if (pageSocialImages[route]) {
    const socialImagePath = pageSocialImages[route];
    const expectedWidth = socialImagePath === 'social-pr-v4.jpg'
      ? 1536
      : (socialImagePath === 'pr-content-creation-v4.jpg' ? 2000 : (socialImagePath.endsWith('-v4.jpg') ? 2200 : 1200));
    const expectedHeight = socialImagePath === '/og-image.jpg'
      ? 630
      : (socialImagePath === 'social-pr-v4.jpg'
        ? 804
        : (socialImagePath === 'pr-content-creation-v4.jpg' ? 1046 : (socialImagePath.endsWith('-v4.jpg') ? 1150 : 628)));
    const expectedSocialImage = socialImagePath.startsWith('/')
      ? `${siteUrl}${socialImagePath}`
      : `${siteUrl}/assets/social/pages/${socialImagePath}`;
    const expectedImageFile = socialImagePath.startsWith('/')
      ? path.join(root, 'public', socialImagePath.slice(1))
      : path.join(root, 'public', 'assets', 'social', 'pages', socialImagePath);
    const ogImage = html.match(/<meta property="og:image" content="([^"]+)"/i)?.[1];
    const imageUrl = html.match(/<meta property="og:image:url" content="([^"]+)"/i)?.[1];
    const secureImage = html.match(/<meta property="og:image:secure_url" content="([^"]+)"/i)?.[1];
    const twitterImage = html.match(/<meta name="twitter:image" content="([^"]+)"/i)?.[1];

    if (ogImage !== expectedSocialImage || imageUrl !== expectedSocialImage
      || secureImage !== expectedSocialImage || twitterImage !== expectedSocialImage) {
      fail(`${route} does not use its dedicated social image`);
    }
    if (!fs.existsSync(expectedImageFile)) fail(`${route} dedicated social image file is missing`);
    if (!html.includes('<meta property="og:image:type" content="image/jpeg" />')) fail(`${route} social image has no JPEG type`);
    if (!html.includes(`<meta property="og:image:width" content="${expectedWidth}" />`)
      || !html.includes(`<meta property="og:image:height" content="${expectedHeight}" />`)) {
      fail(`${route} social image has incorrect or missing dimensions`);
    }
  }

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

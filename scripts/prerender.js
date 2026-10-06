const fs = require('fs');
const path = require('path');
const babel = require('@babel/core');

const root = path.resolve(__dirname, '..');
const buildDirectory = path.join(root, 'build');
const routes = require(path.join(root, 'config', 'public-routes.json'));
const routeSet = new Set(routes);
process.env.PUBLIC_URL = process.env.PUBLIC_URL || '';

require.extensions['.css'] = () => {};
require.extensions['.svg'] = (module, filename) => {
  module.exports = filename;
};

const originalJavaScriptLoader = require.extensions['.js'];
require.extensions['.js'] = (module, filename) => {
  if (filename.includes(`${path.sep}node_modules${path.sep}`)) {
    originalJavaScriptLoader(module, filename);
    return;
  }

  const transformed = babel.transformFileSync(filename, {
    babelrc: false,
    configFile: false,
    presets: [
      [require.resolve('@babel/preset-env'), { modules: 'commonjs', targets: { node: 'current' } }],
      [require.resolve('@babel/preset-react'), { runtime: 'automatic' }],
    ],
  });
  module._compile(transformed.code, filename);
};

const React = require('react');
const { renderToString } = require('react-dom/server');
const App = require(path.join(root, 'src', 'App.js')).default;
const blogPosts = require(path.join(root, 'src', 'content', 'generatedBlogPosts.js')).default;
const templateCachePath = path.join(buildDirectory, '.prerender-template.html');
const template = fs.readFileSync(
  fs.existsSync(templateCachePath) ? templateCachePath : path.join(buildDirectory, 'index.html'),
  'utf8'
);
const siteUrl = (process.env.SITE_URL || 'https://www.boxcomafrica.com').replace(/\/$/, '');

if (!template.includes('<div id="root"></div>')) {
  throw new Error('Cannot pre-render: build/index.html does not contain an empty React root.');
}
fs.writeFileSync(templateCachePath, template);

function decodeHtml(value) {
  return value
    .replace(/<!--.*?-->/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function escapeAttribute(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function escapeXml(value) {
  return escapeAttribute(String(value)).replace(/'/g, '&apos;');
}

function routeMetadata(route, markup) {
  const headingMatch = markup.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i);
  const heading = headingMatch ? decodeHtml(headingMatch[1]) : 'BOXCOM Africa';
  const contentAfterHeading = headingMatch ? markup.slice(headingMatch.index + headingMatch[0].length) : markup;
  const paragraphs = [...contentAfterHeading.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/gi)]
    .map((match) => decodeHtml(match[1]))
    .filter(Boolean);
  const fallbackDescription = 'BOXCOM Africa is a Casablanca-based PR agency serving brands across Morocco and Africa.';
  const extractedDescription = paragraphs.find((paragraph) => paragraph.length >= 80) || paragraphs[0] || fallbackDescription;
  const description = (extractedDescription || fallbackDescription).slice(0, 160).replace(/\s+\S*$/, '').trim();
  const isHome = route === '/' || route === '/en';

  const explicitMetadata = {
    '/services/communication-de-crise': {
      title: 'Communication de crise au Maroc | BOXCOM Africa',
      description: 'BOXCOM Africa, agence RP au Maroc, surveille, évalue et répond aux crises médiatiques 24h/24, avec des relations presse construites avant la crise.',
    },
    '/en/services/crisis-communication': {
      title: 'Crisis Communication in Morocco | BOXCOM Africa',
      description: 'BOXCOM Africa, a PR agency in Morocco, monitors, assesses and responds to media crises 24/7, with press relations built before the crisis.',
    },
  }[route];

  return {
    title: explicitMetadata?.title || (isHome
      ? (route === '/' ? 'Agence de relations presse au Maroc | BOXCOM Africa' : 'PR Agency in Morocco for Africa | BOXCOM Africa')
      : `${heading} | BOXCOM Africa`),
    description: explicitMetadata?.description || description,
    language: route === '/en' || route.startsWith('/en/') ? 'en' : 'fr',
    type: route.startsWith('/en/blog/') || route.startsWith('/blog/') ? 'article' : 'website',
  };
}

function extractFaqItems(markup) {
  const items = [];
  const pattern = /<button[^>]*class="[^"]*(?:faq-item__button|internal-faq__button)[^"]*"[^>]*>([\s\S]*?)<\/button><\/h3><div[^>]*class="[^"]*(?:faq-item__panel|internal-faq__answer)[^"]*"[^>]*>([\s\S]*?)<\/div>/gi;
  let match = pattern.exec(markup);

  while (match) {
    const questionMatch = match[1].match(/<span[^>]*>([\s\S]*?)<\/span>/i);
    const question = decodeHtml(questionMatch ? questionMatch[1] : match[1]);
    const answer = decodeHtml(match[2]);
    if (question && answer) items.push({ question, answer });
    match = pattern.exec(markup);
  }

  return items;
}

function structuredData(route, metadata, markup) {
  const url = `${siteUrl}${route}`;
  const organizationId = `${siteUrl}/#organization`;
  const graph = [{
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: metadata.title,
    description: metadata.description,
    inLanguage: metadata.language,
    isPartOf: { '@id': `${siteUrl}/#website` },
    about: { '@id': organizationId },
  }];

  if (route === '/') {
    graph.push(
      {
        '@type': 'Organization',
        '@id': organizationId,
        name: 'BOXCOM Africa',
        url: siteUrl,
        logo: `${siteUrl}/favicon-b.png`,
        email: 'contact@box-com.com',
        telephone: '+212522219933',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '3 Rue El Jihani, Quartier Racine',
          addressLocality: 'Casablanca',
          postalCode: '20250',
          addressCountry: 'MA',
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: 'BOXCOM Africa',
        publisher: { '@id': organizationId },
        inLanguage: ['en', 'fr'],
      }
    );
  }

  if (/^(?:\/en)?\/services\//.test(route)) {
    graph.push({
      '@type': 'Service',
      name: metadata.title.replace(/ \| BOXCOM Africa$/, ''),
      description: metadata.description,
      url,
      provider: { '@id': organizationId },
      areaServed: ['Morocco', 'Africa'],
    });
  }

  if (route.startsWith('/en/blog/')) {
    graph.push({
      '@type': 'Article',
      headline: metadata.title.replace(/ \| BOXCOM Africa$/, ''),
      description: metadata.description,
      mainEntityOfPage: { '@id': `${url}#webpage` },
      author: { '@type': 'Organization', '@id': organizationId, name: 'BOXCOM Africa' },
      publisher: { '@id': organizationId },
      image: `${siteUrl}/favicon-b.png`,
    });
  }

  const pathParts = route.split('/').filter(Boolean);
  if (pathParts.length) {
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'BOXCOM Africa', item: `${siteUrl}/` },
        ...pathParts.map((part, index) => ({
          '@type': 'ListItem',
          position: index + 2,
          name: index === pathParts.length - 1
            ? metadata.title.replace(/ \| BOXCOM Africa$/, '')
            : part.replace(/-/g, ' ').replace(/\b\w/g, (letter) => letter.toUpperCase()),
          item: `${siteUrl}/${pathParts.slice(0, index + 1).join('/')}`,
        })),
      ],
    });
  }

  const faqItems = extractFaqItems(markup);
  if (faqItems.length) {
    graph.push({
      '@type': 'FAQPage',
      mainEntity: faqItems.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
      })),
    });
  }

  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c');
}

function applyMetadata(html, route, markup, metadata) {
  const canonicalUrl = `${siteUrl}${route}`;
  const title = escapeAttribute(metadata.title);
  const description = escapeAttribute(metadata.description);
  const socialImage = `${siteUrl}/favicon-b.png`;
  const languagePairs = {
    '/services/communication-de-crise': '/en/services/crisis-communication',
    '/en/services/crisis-communication': '/services/communication-de-crise',
  };
  const englishRoute = route === '/services/communication-de-crise'
    ? languagePairs[route]
    : route === '/en' || route.startsWith('/en/')
    ? route
    : route === '/' ? '/en' : `/en${route}`;
  const frenchRoute = route === '/en/services/crisis-communication'
    ? languagePairs[route]
    : route === '/en'
    ? '/'
    : route.startsWith('/en/') ? route.slice(3) : route;
  const hasLanguagePair = routeSet.has(englishRoute) && routeSet.has(frenchRoute);
  const languageAlternates = hasLanguagePair ? [
    `<link rel="alternate" hreflang="en" href="${siteUrl}${englishRoute}" />`,
    `<link rel="alternate" hreflang="fr" href="${siteUrl}${frenchRoute}" />`,
    `<link rel="alternate" hreflang="x-default" href="${siteUrl}${frenchRoute}" />`,
  ] : [
    `<link rel="alternate" hreflang="${metadata.language}" href="${canonicalUrl}" />`,
    `<link rel="alternate" hreflang="x-default" href="${canonicalUrl}" />`,
  ];
  const tags = [
    `<link rel="canonical" href="${canonicalUrl}" />`,
    `<link rel="alternate" type="application/rss+xml" title="BOXCOM Africa Insights" href="${siteUrl}/rss.xml" />`,
    ...languageAlternates,
    '<meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />',
    `<meta property="og:type" content="${metadata.type}" />`,
    '<meta property="og:site_name" content="BOXCOM Africa" />',
    `<meta property="og:locale" content="${metadata.language === 'fr' ? 'fr_FR' : 'en_US'}" />`,
    `<meta property="og:title" content="${title}" />`,
    `<meta property="og:description" content="${description}" />`,
    `<meta property="og:url" content="${canonicalUrl}" />`,
    `<meta property="og:image" content="${socialImage}" />`,
    '<meta name="twitter:card" content="summary_large_image" />',
    `<meta name="twitter:title" content="${title}" />`,
    `<meta name="twitter:description" content="${description}" />`,
    `<meta name="twitter:image" content="${socialImage}" />`,
    `<script type="application/ld+json">${structuredData(route, metadata, markup)}</script>`,
  ].join('');

  return html
    .replace(/<html lang="[^"]*">/, `<html lang="${metadata.language}">`)
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`)
    .replace(/<meta name="description" content="[^"]*"\s*\/>/, `<meta name="description" content="${description}"/>`)
    .replace('</head>', `${tags}</head>`);
}

const renderedRoutes = [];
routes.forEach((route) => {
  globalThis.__BOXCOM_PRERENDER_ROUTE__ = route;
  const markup = renderToString(React.createElement(App));
  const metadata = routeMetadata(route, markup);
  const renderedHtml = template.replace('<div id="root"></div>', `<div id="root">${markup}</div>`);
  const html = applyMetadata(renderedHtml, route, markup, metadata);
  const outputDirectory = route === '/'
    ? buildDirectory
    : path.join(buildDirectory, route.replace(/^\//, ''));

  fs.mkdirSync(outputDirectory, { recursive: true });
  fs.writeFileSync(path.join(outputDirectory, 'index.html'), html);
  if (route !== '/') {
    fs.writeFileSync(path.join(buildDirectory, `${route.replace(/^\//, '')}.html`), html);
  }
  renderedRoutes.push({ route, ...metadata });
});

delete globalThis.__BOXCOM_PRERENDER_ROUTE__;

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...routes.map((route) => `  <url><loc>${siteUrl}${route}</loc></url>`),
  '</urlset>',
  '',
].join('\n');
fs.writeFileSync(path.join(buildDirectory, 'sitemap.xml'), sitemap);

const rss = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
  '<channel>',
  '  <title>BOXCOM Africa Insights</title>',
  `  <link>${siteUrl}/en/blog</link>`,
  '  <description>PR, media relations and African market insights from BOXCOM Africa.</description>',
  '  <language>en</language>',
  `  <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />`,
  ...blogPosts.flatMap((post) => {
    const url = `${siteUrl}/en/blog/${post.slug}`;
    return [
      '  <item>',
      `    <title>${escapeXml(post.title)}</title>`,
      `    <link>${url}</link>`,
      `    <guid isPermaLink="true">${url}</guid>`,
      `    <pubDate>${new Date(`${post.sortDate}T12:00:00Z`).toUTCString()}</pubDate>`,
      `    <description>${escapeXml(post.excerpt)}</description>`,
      `    <category>${escapeXml(post.category)}</category>`,
      '  </item>',
    ];
  }),
  '</channel>',
  '</rss>',
  '',
].join('\n');
fs.writeFileSync(path.join(buildDirectory, 'rss.xml'), rss);

const llms = [
  '# BOXCOM Africa',
  '',
  '> BOXCOM Africa is a Casablanca-based public relations agency serving brands in Morocco and across African markets.',
  '',
  `Canonical website: ${siteUrl}/`,
  `Sitemap: ${siteUrl}/sitemap.xml`,
  `Blog feed: ${siteUrl}/rss.xml`,
  '',
  '## French pages',
  '',
  ...renderedRoutes
    .filter(({ route }) => route !== '/en' && !route.startsWith('/en/'))
    .map(({ route, title, description }) => `- [${title.replace(/ \| BOXCOM Africa$/, '')}](${siteUrl}${route}): ${description}`),
  '',
  '## English pages',
  '',
  ...renderedRoutes
    .filter(({ route }) => route === '/en' || route.startsWith('/en/'))
    .map(({ route, title, description }) => `- [${title.replace(/ \| BOXCOM Africa$/, '')}](${siteUrl}${route}): ${description}`),
  '',
].join('\n');
fs.writeFileSync(path.join(buildDirectory, 'llms.txt'), llms);

console.log(`Pre-rendered ${routes.length} routes and generated sitemap.xml, rss.xml, and llms.txt.`);

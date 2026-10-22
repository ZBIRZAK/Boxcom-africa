const fs = require('fs');
const path = require('path');

const sourceDirectory = process.argv[2];
const outputPath = process.argv[3] || path.resolve(__dirname, '../src/content/frenchCaseStudies.generated.json');
const cardOutputPath = process.argv[4] || path.resolve(__dirname, '../src/content/frenchProjectCards.generated.json');

if (!sourceDirectory) {
  throw new Error('Usage: node scripts/generate-french-case-study-content.js <source-directory> [output-path]');
}

const slugs = [
  'agriedge',
  'defacto',
  'dilitrust',
  'elm',
  'eqdom',
  'everis',
  'garena',
  'gwm',
  'indrive',
  'mifa',
  'modanisa',
  'ntt-data',
  'samsung',
];

const cards = {};
const content = Object.fromEntries(slugs.map((slug) => {
  const sourcePath = path.join(sourceDirectory, `${slug}.txt`);
  let paragraphs = fs.readFileSync(sourcePath, 'utf8')
    .split(/\r?\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  const articleTagIndex = paragraphs.findIndex((paragraph, index) => index > 0 && paragraph.includes(' | '));
  const articleStart = articleTagIndex > 0 ? articleTagIndex - 1 : 0;
  const cardParagraphs = paragraphs.slice(0, articleStart);
  paragraphs = paragraphs.slice(articleStart);

  if (cardParagraphs.length >= 3) {
    cards[slug] = {
      industry: cardParagraphs[0],
      name: cardParagraphs[1],
      description: cardParagraphs[2],
    };
    if (cardParagraphs.length >= 5) {
      cards[slug].results = cardParagraphs.slice(3, 5).map((metric) => {
        const parts = metric.match(/^([0-9][0-9.,+]*(?:\s*(?:K|M|K\$|M\$|€|\$))?)\s+(.*)$/i);
        return parts
          ? { value: parts[1], label: parts[2] }
          : { value: metric, label: '' };
      });
    }
  } else if (cardParagraphs.length === 1) {
    cards[slug] = { description: cardParagraphs[0] };
  }

  // The Modanisa document ends with the site's shared contact call-to-action.
  // It is rendered by the shared French contact component, not inside Results.
  if (slug === 'modanisa') paragraphs = paragraphs.slice(0, -2);

  return [slug, paragraphs];
}));

fs.writeFileSync(outputPath, `${JSON.stringify(content, null, 2)}\n`);
fs.writeFileSync(cardOutputPath, `${JSON.stringify(cards, null, 2)}\n`);

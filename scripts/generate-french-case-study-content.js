const fs = require('fs');
const path = require('path');

const sourceDirectory = process.argv[2];
const outputPath = process.argv[3] || path.resolve(__dirname, '../src/content/frenchCaseStudies.generated.json');

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

const content = Object.fromEntries(slugs.map((slug) => {
  const sourcePath = path.join(sourceDirectory, `${slug}.txt`);
  let paragraphs = fs.readFileSync(sourcePath, 'utf8')
    .split(/\r?\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  // This document starts with a five-paragraph cover summary before repeating
  // the title and beginning the complete case study.
  if (slug === 'garena') paragraphs = paragraphs.slice(5);

  // The Modanisa document ends with the site's shared contact call-to-action.
  // It is rendered by the shared French contact component, not inside Results.
  if (slug === 'modanisa') paragraphs = paragraphs.slice(0, -2);

  return [slug, paragraphs];
}));

fs.writeFileSync(outputPath, `${JSON.stringify(content, null, 2)}\n`);

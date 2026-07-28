const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const postsDirectory = path.join(root, 'posts');
const publicDirectory = path.join(root, 'public', 'generated-posts');
const manifestPath = path.join(root, 'src', 'content', 'generatedBlogPosts.js');

const readValue = (value) => {
  const trimmed = value.trim();
  if (trimmed === 'true') return true;
  if (trimmed === 'false') return false;
  if ((trimmed.startsWith('"') && trimmed.endsWith('"')) || (trimmed.startsWith("'") && trimmed.endsWith("'"))) {
    return trimmed.slice(1, -1);
  }
  return trimmed;
};

const parsePost = (filename) => {
  const source = fs.readFileSync(path.join(postsDirectory, filename), 'utf8').replace(/\r/g, '');
  const frontmatter = source.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);

  if (!frontmatter) {
    throw new Error(`${filename}: missing front matter. Start the file with --- metadata ---.`);
  }

  const metadata = {};
  frontmatter[1].split('\n').forEach((line) => {
    if (!line.trim() || line.trim().startsWith('#')) return;
    const separator = line.indexOf(':');
    if (separator === -1) return;
    metadata[line.slice(0, separator).trim()] = readValue(line.slice(separator + 1));
  });

  ['title', 'date', 'excerpt', 'image'].forEach((field) => {
    if (!metadata[field]) throw new Error(`${filename}: required front matter field "${field}" is missing.`);
  });

  const slug = metadata.slug || filename.replace(/\.md$/i, '');
  const displayDate = metadata.displayDate || new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(new Date(`${metadata.date}T12:00:00`)).replace(/ /g, ' ');

  fs.writeFileSync(path.join(publicDirectory, `${slug}.md`), frontmatter[2].trimStart());

  return {
    slug,
    title: metadata.title,
    date: displayDate,
    sortDate: metadata.date,
    excerpt: metadata.excerpt,
    image: metadata.image,
    imageAlt: metadata.imageAlt || metadata.title,
    author: metadata.author || 'BOXCOM Africa Team',
    featured: metadata.featured === true,
    markdown: `/generated-posts/${slug}.md`,
  };
};

fs.mkdirSync(postsDirectory, { recursive: true });
fs.rmSync(publicDirectory, { recursive: true, force: true });
fs.mkdirSync(publicDirectory, { recursive: true });

const posts = fs.readdirSync(postsDirectory)
  .filter((filename) => filename.endsWith('.md') && !filename.startsWith('_'))
  .map(parsePost)
  .sort((a, b) => {
    if (a.featured !== b.featured) return a.featured ? -1 : 1;
    return b.sortDate.localeCompare(a.sortDate);
  });

const manifest = `// Generated from /posts by scripts/generate-blog-posts.js. Do not edit manually.\n` +
  `const posts = ${JSON.stringify(posts, null, 2)};\n\nexport default posts;\n`;

fs.writeFileSync(manifestPath, manifest);
console.log(`Generated ${posts.length} blog post${posts.length === 1 ? '' : 's'} from /posts.`);

const fs = require('fs');
const path = require('path');
const { spawn, spawnSync } = require('child_process');

const root = path.resolve(__dirname, '..');
const generator = path.join(__dirname, 'generate-blog-posts.js');
const postsDirectory = path.join(root, 'posts');
const reactScripts = require.resolve('react-scripts/bin/react-scripts.js');

const generate = () => {
  const result = spawnSync(process.execPath, [generator], {
    cwd: root,
    stdio: 'inherit',
  });

  if (result.status !== 0) {
    console.error('Blog post generation failed. Fix the Markdown front matter and save again.');
  }
};

generate();

let timer;
fs.watch(postsDirectory, (eventType, filename) => {
  if (!filename || !filename.endsWith('.md')) return;
  clearTimeout(timer);
  timer = setTimeout(generate, 120);
});

const developmentServer = spawn(process.execPath, [reactScripts, 'start'], {
  cwd: root,
  stdio: 'inherit',
});

const stop = (signal) => {
  developmentServer.kill(signal);
};

process.on('SIGINT', () => stop('SIGINT'));
process.on('SIGTERM', () => stop('SIGTERM'));
developmentServer.on('exit', (code) => process.exit(code || 0));

// Sync public content from the second-brain repo into this site's content/ folder.
// Run automatically before dev/build (see package.json). Safe to re-run: it mirrors
// the selected source files and is idempotent.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const siteRoot = path.resolve(scriptDir, '..');
const source =
  process.env.SECOND_BRAIN_DIR ||
  path.resolve(siteRoot, '..', 'second-brain');

// [sourceSubdir, destSubdir, filterFn(filename, fullPath)]
const TARGETS = [
  ['journal', 'journal', (f) => f.endsWith('.md')],
  [
    'decisions',
    'decisions',
    (f, fullPath) => {
      if (!f.endsWith('.md') || /^000-/.test(f)) return false;
      try {
        const text = fs.readFileSync(fullPath, 'utf8');
        return !/status:\s*["']?internal["']?/i.test(text);
      } catch {
        return true;
      }
    },
  ],
  ['knowledge/engineering', 'engineering', (f) => f.endsWith('.md')],
];

function copyDir(srcDir, destDir, filter) {
  if (!fs.existsSync(srcDir)) {
    console.warn(`  ⚠ source missing, skipped: ${srcDir}`);
    return 0;
  }
  fs.mkdirSync(destDir, { recursive: true });
  let count = 0;
  for (const name of fs.readdirSync(srcDir)) {
    const fullPath = path.join(srcDir, name);
    if (!filter(name, fullPath)) continue;
    fs.copyFileSync(fullPath, path.join(destDir, name));
    count++;
  }
  return count;
}

if (!fs.existsSync(source)) {
  console.warn(`⚠ second-brain source not found: ${source}`);
  console.warn('  Skipping sync — using content/ already committed to this repo.');
  process.exit(0);
}

console.log(`Syncing content from ${source}`);
let total = 0;
for (const [src, dest, filter] of TARGETS) {
  const n = copyDir(
    path.join(source, src),
    path.join(siteRoot, 'content', dest),
    filter,
  );
  console.log(`  ${dest}/  ${n} file(s)`);
  total += n;
}
console.log(`✓ Synced ${total} file(s).`);

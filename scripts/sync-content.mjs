// Sync public content from the second-brain repo into this site's content/ folder
// (generated, git-ignored). Run automatically before dev/build (see package.json).
// Safe to re-run: it mirrors the selected source files and is idempotent.
// Without ../second-brain, set SECOND_BRAIN_DIR=fixtures/second-brain for sample content.
//
// Privacy boundary: everything synced ends up on the public site, so this filter is
// fail-closed. A file is copied only when its YAML frontmatter carries a status
// on the target's allowlist; everything else stays private and is pruned.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// [sourceSubdir, destSubdir, allowed frontmatter statuses]
const TARGETS = [
  ['decisions', 'decisions', ['accepted', 'superseded']],
  ['knowledge/engineering', 'engineering', ['published']],
  ['knowledge/blog', 'blog', ['published']],
];

export function isPublic(text, allowed) {
  const frontmatter = text.match(/^﻿?---\r?\n([\s\S]*?)\r?\n---/);
  if (!frontmatter) return false;
  const status = frontmatter[1].match(/^status:\s*["']?([\w-]+)["']?\s*(?:#.*)?$/m);
  // Case-sensitive, like the content schema: "Accepted" stays private instead of failing the build.
  return Boolean(status) && allowed.includes(status[1]);
}

export function copyDir(srcDir, destDir, allowed) {
  if (!fs.existsSync(srcDir)) {
    console.warn(`  ⚠ source missing, skipped: ${srcDir}`);
    return 0;
  }
  fs.mkdirSync(destDir, { recursive: true });
  const validFiles = new Set();
  const skipped = [];
  for (const name of fs.readdirSync(srcDir)) {
    if (!name.endsWith('.md')) continue;
    const fullPath = path.join(srcDir, name);
    if (!isPublic(fs.readFileSync(fullPath, 'utf8'), allowed)) {
      skipped.push(name);
      continue;
    }
    fs.copyFileSync(fullPath, path.join(destDir, name));
    validFiles.add(name);
  }
  if (skipped.length) console.log(`    not public (${allowed.join('|')}): ${skipped.join(', ')}`);
  // Prune files in destination that are no longer public in source
  for (const name of fs.readdirSync(destDir)) {
    if (name.endsWith('.md') && !validFiles.has(name)) {
      fs.unlinkSync(path.join(destDir, name));
    }
  }
  return validFiles.size;
}

function main() {
  const siteRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
  const source = process.env.SECOND_BRAIN_DIR || path.resolve(siteRoot, '..', 'second-brain');

  // Fail on a missing or partial source rather than build stale content/: on the VPS that would
  // deploy the wrong site.
  const missing = TARGETS.map(([src]) => src).filter((src) => !fs.existsSync(path.join(source, src)));
  if (missing.length) {
    console.error(`✗ second-brain source incomplete: ${missing.join(', ')} missing in ${source}`);
    console.error('  Clone it next to this repo, or set SECOND_BRAIN_DIR (fixtures/second-brain for sample content).');
    process.exitCode = 1;
    return;
  }

  console.log(`Syncing content from ${source}`);
  let total = 0;
  for (const [src, dest, allowed] of TARGETS) {
    const n = copyDir(path.join(source, src), path.join(siteRoot, 'content', dest), allowed);
    console.log(`  ${dest}/  ${n} file(s)`);
    total += n;
  }
  console.log(`✓ Synced ${total} file(s).`);
}

// realpath: import.meta.url is symlink-resolved, argv[1] is not.
if (process.argv[1] && fs.realpathSync(process.argv[1]) === fileURLToPath(import.meta.url)) main();

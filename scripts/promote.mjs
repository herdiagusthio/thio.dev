import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

// Paths
const BRAIN_DIR = path.resolve('/home/thiohermes/code-storage/second-brain/knowledge');
const SITE_CONTENT_DIR = path.resolve('/home/thiohermes/code-storage/thio.dev/content');

const CATEGORY_MAP = {
  'decisions': 'engineering',
  'learning-log': 'engineering',
  'journal': 'journal',
  'execution-plans': 'engineering'
};

async function promote() {
  const targetFile = process.argv[2];
  if (!targetFile) {
    console.error('Usage: node promote.mjs <path-to-brain-file>');
    process.exit(1);
  }

  const sourcePath = path.resolve(BRAIN_DIR, targetFile);
  if (!fs.existsSync(sourcePath)) {
    console.error(`Error: File not found at ${sourcePath}`);
    process.exit(1);
  }

  // READ SOURCE
  const rawContent = fs.readFileSync(sourcePath, 'utf8');
  
  // SECURITY GATE: Prevent promoting sensitive directories
  const sensitiveDirs = ['ideation', 'brainstorming', 'private', 'secrets'];
  if (sensitiveDirs.some(dir => sourcePath.includes(dir))) {
    console.error('CRITICAL SECURITY ERROR: This file is in a sensitive directory and cannot be promoted to public.');
    process.exit(1);
  }

  // Determine destination
  const relativePath = path.relative(BRAIN_DIR, sourcePath);
  const dirName = relativePath.split(path.sep)[0];
  const fileName = path.basename(sourcePath);
  
  let destDir = 'engineering'; // default
  if (CATEGORY_MAP[dirName]) {
    destDir = CATEGORY_MAP[dirName];
  }

  const destinationPath = path.join(SITE_CONTENT_DIR, destDir, fileName);

  // TRANSFORM TO PUBLIC SCHEMA
  // We use a "draft" status by default to force human review before it hits the live site.
  const publicContent = `---
title: "PROMOTED: ${fileName.replace('.md', '')}"
date: ${new Date().toISOString().split('T')[0]}
category: "${destDir}"
status: "draft" 
tags: []
---

${rawContent}
`;

  fs.writeFileSync(destinationPath, publicContent);
  console.log(`Successfully promoted to: ${destinationPath}`);
  console.log('Status set to "draft" — please review and update metadata before publishing.');
}

promote();

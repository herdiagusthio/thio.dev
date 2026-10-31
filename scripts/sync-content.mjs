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

// ADRs are numbered (001-...). Pipeline tickets (sdlc-*, goai-*) live in decisions/ too and may say
// status: accepted, but they are internal working notes with server paths: never publish them.
export const NUMBERED_ADR = /^\d{3}-/;

// [sourceSubdir, destSubdir, allowed frontmatter statuses, required file name pattern]
const TARGETS = [
  ['decisions', 'decisions', ['accepted', 'superseded'], NUMBERED_ADR],
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

export function copyDir(srcDir, destDir, allowed, namePattern = /^/) {
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
    if (!namePattern.test(name) || !isPublic(fs.readFileSync(fullPath, 'utf8'), allowed)) {
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
  for (const [src, dest, allowed, namePattern] of TARGETS) {
    const n = copyDir(path.join(source, src), path.join(siteRoot, 'content', dest), allowed, namePattern);
    console.log(`  ${dest}/  ${n} file(s)`);
    total += n;
  }

  // Sync sanitized public infrastructure catalog when available in second-brain
  const catalogPath = path.join(source, 'infrastructure', 'catalog.json');
  if (fs.existsSync(catalogPath)) {
    const rawCatalog = JSON.parse(fs.readFileSync(catalogPath, 'utf8'));
    const publicCatalog = sanitizeCatalogForPublic(rawCatalog);
    const dataDir = path.join(siteRoot, 'src', 'data');
    fs.mkdirSync(dataDir, { recursive: true });
    fs.writeFileSync(path.join(dataDir, 'infrastructure.json'), JSON.stringify(publicCatalog, null, 2) + '\n');
    console.log(`  src/data/infrastructure.json  (${publicCatalog.applications.length} public apps synced)`);
  }

  console.log(`✓ Synced ${total} file(s).`);
}

export function sanitizeCatalogForPublic(raw) {
  const host = raw.host || {};
  const apps = Array.isArray(raw.applications) ? raw.applications : [];
  const publicApps = apps
    .filter((a) => a.visibility === 'public')
    .map((app) => ({
      id: app.id,
      name: app.name,
      title: app.title,
      category: app.category,
      purpose: app.purpose,
      tech_stack: app.tech_stack || [],
      public_domain: app.public_domain?.startsWith('https://') ? app.public_domain : 'Internal Loopback Service',
      public_routes: (app.public_routes || []).map((r) => ({
        domain: r.domain?.startsWith('127.') ? 'Loopback-Only' : r.domain,
        path: r.path || '/*',
        protocol: r.protocol || 'HTTPS',
      })),
      databases: (app.databases || []).map((db) => ({
        id: db.id,
        name: db.name,
        engine: String(db.engine || '').replace(/\s*\(127\.0\.0\.1[^)]*\)/g, '').trim(),
        public_summary: db.public_summary || '',
        tables: (db.tables || []).map((t) => ({
          name: t.name,
          description: t.description || '',
          columns: t.columns || [],
        })),
      })),
    }));

  return {
    schema_version: raw.schema_version || 1,
    updated_at: raw.updated_at || new Date().toISOString(),
    host: {
      name: host.name || 'HermesHost',
      os: host.os || 'Ubuntu 24.04 LTS',
      cpu: host.cpu || '1 vCore',
      ram_mb: host.ram_mb || 1922,
      swap_mb: host.swap_mb || 4096,
      ram_headroom_policy: host.ram_headroom_policy || '>= 500 MB effective headroom',
      edge_proxy: {
        name: host.edge_proxy?.name || 'Caddy v2.11 TLS Reverse Proxy',
        public_ports: host.edge_proxy?.public_ports || [80, 443],
        security_policy: host.edge_proxy?.security_policy || 'Strict loopback isolation for all backend services',
      },
    },
    applications: publicApps,
  };
}

// realpath: import.meta.url is symlink-resolved, argv[1] is not.
if (process.argv[1] && fs.realpathSync(process.argv[1]) === fileURLToPath(import.meta.url)) main();

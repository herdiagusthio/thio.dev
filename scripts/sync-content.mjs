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

  // Infrastructure page data: always rewritten, so a missing catalog never leaves a stale snapshot.
  const infra = loadPublicCatalog(path.join(source, 'infrastructure', 'catalog.json'));
  fs.mkdirSync(path.join(siteRoot, 'content'), { recursive: true });
  fs.writeFileSync(path.join(siteRoot, 'content', 'infrastructure.json'), JSON.stringify(infra, null, 2) + '\n');
  console.log(`  infrastructure.json  ${infra.applications.length} public app(s), ${infra.internal_services.length} internal`);

  console.log(`✓ Synced ${total} file(s).`);
}

// Infrastructure catalog -> public projection. The catalog is private (paths, ports, IPs, schemas),
// so the projection is built field by field from an allowlist: nothing in the input is passed through.
// visibility "public": full card; "internal": name and purpose only; anything else: omitted.
const SLUG = /^[a-z0-9][a-z0-9-]{0,63}$/;
// A DNS name whose last label starts with a letter: no IP literals, no "localhost", no "Loopback-Only".
const HOSTNAME = /^(?=.{1,253}$)(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z](?:[a-z0-9-]{0,61}[a-z0-9])?$/;
const PRIVATE_TLD = /\.(?:internal|local|lan|localdomain|localhost|home\.arpa|corp|intranet|private)$/;
const URL_PATH = /^\/(?!.*\.\.)[A-Za-z0-9\-._~/*]{0,200}$/;
const TIMESTAMP = /^\d{4}-\d{2}-\d{2}(?:[T ][\d:.]+(?:Z|[+-]\d{2}:?\d{2})?)?$/;
// Reads as a location: IPv4, host:port, IPv6, a path, a domain with a path, a URI scheme, a backslash.
const LOCATION =
  /\d{1,3}(?:\.\d{1,3}){3}|[\w.-]+:\d{2,5}\b|::|\[[\da-f:.]*\]|(?:^|[\s(])(?:~|\.{0,2}\/)\S|\b[a-z0-9-]+(?:\.[a-z0-9-]+)*\.[a-z]{2,}\/|\\|\b[a-z][\w+.-]*:\/|\b(?:unix|file|sqlite|postgres(?:ql)?|mysql|redis|mongodb):/i;

const isObject = (v) => v !== null && typeof v === 'object' && !Array.isArray(v);
// Free text is author-controlled, so it is scrubbed too: a parenthetical holding a location goes whole,
// any other word that reads as one goes on its own. "PostgreSQL 16 (127.0.0.1:5432)" -> "PostgreSQL 16".
const scrub = (s) =>
  s
    .replace(/\([^)]*\)/g, (group) => (LOCATION.test(group) ? ' ' : group))
    .split(' ')
    .filter((word) => !LOCATION.test(word))
    .join(' ');
const text = (v, max = 160) =>
  typeof v === 'string' || typeof v === 'number'
    ? scrub(String(v).replace(/\s+/g, ' ')).replace(/\s+/g, ' ').trim().slice(0, max)
    : '';
const texts = (v) => (Array.isArray(v) ? v.map((x) => text(x, 60)).filter(Boolean).slice(0, 20) : []);
const count = (v) => (Number.isInteger(v) && v >= 0 ? v : null);

// IPv4 addresses a host embeds the way nip.io / sslip.io read them: dotted or dashed across labels
// ("10.0.0.1", "app-10-0-0-1", overlapping runs too) and 8-digit hex segments ("app-0a000001").
const EMBEDDED_IPV4 = /(?<!\d)(?=(\d{1,3})[.-](\d{1,3})[.-](\d{1,3})[.-](\d{1,3})(?!\d))/g;
function embeddedIPv4s(host) {
  const dotted = [...host.matchAll(EMBEDDED_IPV4)].map((m) => m.slice(1, 5).map(Number));
  const hex = host
    .split(/[.-]/)
    .filter((part) => /^[0-9a-f]{8}$/.test(part))
    .map((part) => part.match(/../g).map((byte) => parseInt(byte, 16)));
  return [...dotted, ...hex].filter((ip) => ip.every((n) => n <= 255));
}

// Not internet-routable: 0/8, 10/8, 100.64/10, 127/8, 169.254/16, 172.16/12, 192.0.0/24, 192.0.2/24,
// 192.168/16, 198.18/15, 198.51.100/24, 203.0.113/24, and 224/4 + 240/4 (multicast, reserved).
function isNonPublicIPv4([a, b, c]) {
  return (
    a === 0 || a === 10 || a === 127 || a >= 224 ||
    (a === 100 && b >= 64 && b <= 127) ||
    (a === 169 && b === 254) ||
    (a === 172 && b >= 16 && b <= 31) ||
    (a === 192 && (b === 168 || (b === 0 && (c === 0 || c === 2)))) ||
    (a === 198 && (b === 18 || b === 19 || (b === 51 && c === 100))) ||
    (a === 203 && b === 0 && c === 113)
  );
}

// "a.example.com" or "https://a.example.com/..." -> "a.example.com"; anything else -> null.
function publicHost(value) {
  if (typeof value !== 'string') return null;
  let host = value.trim().toLowerCase();
  if (host.includes('://')) {
    let url;
    try {
      url = new URL(host);
    } catch {
      return null;
    }
    if (url.protocol !== 'https:' || url.port || url.username || url.password) return null;
    host = url.hostname;
  }
  if (!HOSTNAME.test(host) || host.startsWith('127.') || PRIVATE_TLD.test(host)) return null;
  // sslip.io writes IPv6 with dashes ("fe80--1"); only punycode labels may contain "--".
  if (host.split('.').some((label) => label.includes('--') && !label.startsWith('xn--'))) return null;
  return embeddedIPv4s(host).some(isNonPublicIPv4) ? null : host;
}

function publicRoute(r) {
  if (!isObject(r) || !/\bhttps\b/i.test(text(r.protocol))) return null;
  const domain = publicHost(r.domain);
  const routePath = r.path == null ? '/*' : r.path;
  if (!domain || typeof routePath !== 'string' || !URL_PATH.test(routePath)) return null;
  return { domain, path: routePath, protocol: 'HTTPS' };
}

function publicDatabase(db) {
  if (!isObject(db)) return null;
  const tableCount = Number.isInteger(db.table_count) && db.table_count >= 0 ? db.table_count : null;
  return {
    name: text(db.name, 120),
    engine: text(db.engine, 80),
    summary: text(db.public_summary, 600),
    table_count: tableCount ?? (Array.isArray(db.tables) ? db.tables.length : 0),
  };
}

function minimalEntry(app) {
  return {
    id: app.id,
    name: text(app.name, 80),
    title: text(app.title),
    category: text(app.category, 80),
    purpose: text(app.purpose, 600),
    tech_stack: texts(app.tech_stack),
  };
}

function publicHostFacts(host) {
  const edge = isObject(host.edge_proxy) ? host.edge_proxy : {};
  const ports = Array.isArray(edge.public_ports) ? edge.public_ports : [];
  return {
    name: text(host.name, 80),
    // No kernel: drop "(Linux 6.8)", ", kernel 6.8.0-45", "Linux 6.8" and a trailing "6.8.0-45-generic".
    os: text(host.os, 200)
      .replace(/\s*\([^)]*\)/g, '')
      .replace(/[,;]?\s*\b(?:kernel\b.*|linux\s+v?\d.*)$/i, '')
      .replace(/\s*[-,;]?\s*\b\d+\.\d+\.\d+[-\w.]*$/, '')
      .trim()
      .slice(0, 80),
    cpu: text(host.cpu, 80),
    ram_mb: count(host.ram_mb),
    swap_mb: count(host.swap_mb),
    edge_proxy: {
      name: text(edge.name, 80),
      public_ports: ports.filter((p) => Number.isInteger(p) && p > 0 && p <= 65535),
    },
  };
}

// Throws on a catalog with the wrong shape, so a broken catalog fails the build.
export function sanitizeCatalogForPublic(raw) {
  if (!isObject(raw) || !Array.isArray(raw.applications) || (raw.host != null && !isObject(raw.host))) {
    throw new Error('infrastructure catalog: expected an object with an applications array (and an optional host object)');
  }
  const seen = new Set(); // a duplicate id keeps its first entry only
  const apps = raw.applications.filter(
    (a) => isObject(a) && typeof a.id === 'string' && SLUG.test(a.id) && !seen.has(a.id) && seen.add(a.id),
  );
  return {
    schema_version: 2,
    updated_at: typeof raw.updated_at === 'string' && TIMESTAMP.test(raw.updated_at.trim()) ? raw.updated_at.trim() : null,
    host: raw.host == null ? null : publicHostFacts(raw.host),
    applications: apps
      .filter((a) => a.visibility === 'public')
      .map((app) => {
        const domain = typeof app.public_domain === 'string' && /^https:\/\//i.test(app.public_domain.trim()) ? publicHost(app.public_domain) : null;
        return {
          ...minimalEntry(app),
          public_domain: domain ? `https://${domain}` : null,
          public_routes: (Array.isArray(app.public_routes) ? app.public_routes : []).map(publicRoute).filter(Boolean),
          databases: (Array.isArray(app.databases) ? app.databases : []).map(publicDatabase).filter(Boolean),
        };
      }),
    internal_services: apps.filter((a) => a.visibility === 'internal').map(minimalEntry),
  };
}

// A missing catalog publishes nothing; one that exists but is unreadable or malformed fails the build.
export function loadPublicCatalog(file) {
  if (!fs.existsSync(file)) return sanitizeCatalogForPublic({ applications: [] });
  try {
    return sanitizeCatalogForPublic(JSON.parse(fs.readFileSync(file, 'utf8')));
  } catch (err) {
    throw new Error(`invalid infrastructure catalog ${file}: ${err.message}`);
  }
}

// realpath: import.meta.url is symlink-resolved, argv[1] is not.
if (process.argv[1] && fs.realpathSync(process.argv[1]) === fileURLToPath(import.meta.url)) main();

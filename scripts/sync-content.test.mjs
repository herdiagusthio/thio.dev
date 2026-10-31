import { test } from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { copyDir, isPublic, loadPublicCatalog, NUMBERED_ADR, sanitizeCatalogForPublic } from './sync-content.mjs';

const PUBLISHED = ['published'];
const ADR = ['accepted', 'superseded'];

test('isPublic: only frontmatter status on the allowlist passes', () => {
  const cases = [
    ['unquoted published', '---\ntitle: A\nstatus: published\n---\nbody', PUBLISHED, true],
    ['double-quoted', '---\nstatus: "published"\n---\n', PUBLISHED, true],
    ['single-quoted', "---\nstatus: 'accepted'\n---\n", ADR, true],
    // Case-sensitive like the content schema: syncing "Accepted" would fail the build after content/ changed.
    ['mixed case stays private', '---\nstatus: Accepted\n---\n', ADR, false],
    ['superseded ADR', '---\nstatus: superseded\n---\n', ADR, true],
    ['CRLF line endings', '---\r\ntitle: A\r\nstatus: published\r\n---\r\nbody', PUBLISHED, true],
    ['BOM before frontmatter', '﻿---\nstatus: published\n---\n', PUBLISHED, true],
    ['trailing YAML comment', '---\nstatus: accepted # was proposed\n---\n', ADR, true],
    ['internal', '---\nstatus: internal\n---\n', PUBLISHED, false],
    ['proposed ADR', '---\nstatus: proposed\n---\n', ADR, false],
    ['published is not an ADR status', '---\nstatus: published\n---\n', ADR, false],
    ['no frontmatter', '# Title\n\nbody', PUBLISHED, false],
    ['status only in body bullet', '# ADR\n- **Status:** Accepted\n', ADR, false],
    ['status only in body section', '# ADR\n\n## Status\nAccepted\n', ADR, false],
    ['status line below frontmatter', '---\ntitle: A\n---\nstatus: published\n', PUBLISHED, false],
    ['frontmatter not at file start', 'intro\n---\nstatus: published\n---\n', PUBLISHED, false],
    ['prefix match is not enough', '---\nstatus: published-draft\n---\n', PUBLISHED, false],
  ];
  for (const [name, text, allowed, want] of cases) {
    assert.equal(isPublic(text, allowed), want, name);
  }
});

test('copyDir: copies public files and prunes everything else from the destination', () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'sync-content-'));
  try {
    const src = path.join(tmp, 'src');
    const dest = path.join(tmp, 'dest');
    fs.mkdirSync(src);
    fs.mkdirSync(dest);
    fs.writeFileSync(path.join(src, 'public.md'), '---\nstatus: published\n---\nhi');
    fs.writeFileSync(path.join(src, 'private.md'), '---\nstatus: internal\n---\nsecret');
    fs.writeFileSync(path.join(src, 'notes.txt'), 'not markdown');
    fs.writeFileSync(path.join(dest, 'private.md'), 'synced before it went private');
    fs.writeFileSync(path.join(dest, 'removed.md'), 'deleted from source');
    fs.writeFileSync(path.join(dest, 'keep.txt'), 'non-markdown is left alone');

    assert.equal(copyDir(src, dest, ['published']), 1);
    assert.deepEqual(fs.readdirSync(dest).sort(), ['keep.txt', 'public.md']);
    assert.equal(copyDir(path.join(tmp, 'missing'), dest, ['published']), 0);
    assert.deepEqual(fs.readdirSync(dest).sort(), ['keep.txt', 'public.md'], 'missing source leaves dest untouched');
  } finally {
    fs.rmSync(tmp, { recursive: true, force: true });
  }
});

test('copyDir: decisions publish only numbered ADRs, whatever a generated file claims as status', () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'sync-content-'));
  try {
    const src = path.join(tmp, 'src');
    const dest = path.join(tmp, 'dest');
    fs.mkdirSync(src);
    fs.writeFileSync(path.join(src, '016-real-decision.md'), '---\nstatus: accepted\n---\nADR');
    // Pipeline tickets (sdlc-*, goai-*) can carry status: accepted but are internal working notes.
    fs.writeFileSync(path.join(src, 'sdlc-1025-dfc7-adr.md'), '---\nstatus: accepted\n---\n/home/user/code-storage/project');
    fs.writeFileSync(path.join(src, 'goai-spec.md'), '---\nstatus: accepted\n---\nspec');
    fs.writeFileSync(path.join(src, '000-template.md'), '---\nstatus: proposed\n---\ntemplate');

    assert.equal(copyDir(src, dest, ADR, NUMBERED_ADR), 1);
    assert.deepEqual(fs.readdirSync(dest), ['016-real-decision.md']);
  } finally {
    fs.rmSync(tmp, { recursive: true, force: true });
  }
});

test('main: a missing or incomplete source fails instead of building whatever content/ holds', () => {
  const script = fileURLToPath(new URL('./sync-content.mjs', import.meta.url));
  const sync = (dir) =>
    spawnSync(process.execPath, [script], { env: { ...process.env, SECOND_BRAIN_DIR: dir }, encoding: 'utf8' });

  const missing = sync(path.join(os.tmpdir(), 'no-such-second-brain'));
  assert.equal(missing.status, 1);
  assert.match(missing.stderr, /second-brain source incomplete: .*decisions/);

  // A partial clone: two of the three source folders. It must fail before touching content/.
  const partial = fs.mkdtempSync(path.join(os.tmpdir(), 'sync-partial-'));
  try {
    fs.mkdirSync(path.join(partial, 'decisions'));
    fs.mkdirSync(path.join(partial, 'knowledge', 'engineering'), { recursive: true });
    const run = sync(partial);
    assert.equal(run.status, 1);
    assert.match(run.stderr, /second-brain source incomplete: .*knowledge\/blog/);
    assert.doesNotMatch(run.stderr, /decisions/);
  } finally {
    fs.rmSync(partial, { recursive: true, force: true });
  }
});

// --- Infrastructure catalog: second-brain/infrastructure/catalog.json -> content/infrastructure.json ---

const app = (over = {}) => ({
  id: 'site',
  name: 'site',
  title: 'Site',
  category: 'Web',
  purpose: 'Serves the site.',
  tech_stack: ['Astro'],
  visibility: 'public',
  ...over,
});
const catalog = (applications, over = {}) => ({ schema_version: 1, updated_at: '2026-10-31T15:00:00Z', applications, ...over });
const sanitizeApps = (applications) => sanitizeCatalogForPublic(catalog(applications));
const EMPTY = { schema_version: 2, updated_at: null, host: null, applications: [], internal_services: [] };

test('sanitizeCatalogForPublic: visibility "public" is a full card, "internal" a minimal entry, anything else private', () => {
  const cases = [
    ['public', 'public', 1, 0],
    ['internal', 'internal', 0, 1],
    ['missing', undefined, 0, 0],
    ['private', 'private', 0, 0],
    ['case-sensitive', 'Public', 0, 0],
    ['boolean', true, 0, 0],
    ['empty', '', 0, 0],
  ];
  for (const [name, visibility, apps, internal] of cases) {
    const out = sanitizeApps([app({ visibility })]);
    assert.equal(out.applications.length, apps, name);
    assert.equal(out.internal_services.length, internal, name);
  }
});

test('sanitizeCatalogForPublic: ids must be lowercase slugs, or the entry is dropped', () => {
  const cases = [
    ['a', true],
    ['nikahyuk-api', true],
    ['9router', true],
    ['a'.repeat(64), true],
    ['a'.repeat(65), false],
    ['-leading-dash', false],
    ['Upper', false],
    ['under_score', false],
    ['x" onclick="y', false],
    ['', false],
    [42, false],
    [undefined, false],
  ];
  for (const [id, kept] of cases) {
    assert.equal(sanitizeApps([app({ id })]).applications.length, kept ? 1 : 0, String(id));
    assert.equal(sanitizeApps([app({ id, visibility: 'internal' })]).internal_services.length, kept ? 1 : 0, String(id));
  }
});

test('sanitizeCatalogForPublic: builds every entry by allowlist, never passing input fields through', () => {
  const out = sanitizeApps([
    app({
      repo_path: '/home/me/site',
      internal_bind: '127.0.0.1:3000',
      port: 3000,
      systemd_service: 'site.service',
      public_domain: 'https://site.example.com',
      public_routes: [{ domain: 'site.example.com', path: '/*', protocol: 'HTTPS', target: '127.0.0.1:3000' }],
      databases: [
        {
          id: 'db',
          name: 'Store',
          engine: 'SQLite 3',
          public_summary: 'What it holds.',
          sqlite_path: '/home/me/site.db',
          tables: [{ name: 'users', description: 'Accounts', columns: ['email', 'password'] }],
        },
      ],
    }),
    app({ id: 'worker', visibility: 'internal', public_domain: 'https://admin.example.com', public_routes: [{ domain: 'admin.example.com', protocol: 'HTTPS' }], databases: [{ name: 'Jobs' }] }),
  ]);
  assert.deepEqual(out, {
    schema_version: 2,
    updated_at: '2026-10-31T15:00:00Z',
    host: null,
    applications: [
      {
        id: 'site',
        name: 'site',
        title: 'Site',
        category: 'Web',
        purpose: 'Serves the site.',
        tech_stack: ['Astro'],
        public_domain: 'https://site.example.com',
        public_routes: [{ domain: 'site.example.com', path: '/*', protocol: 'HTTPS' }],
        databases: [{ name: 'Store', engine: 'SQLite 3', summary: 'What it holds.', table_count: 1 }],
      },
    ],
    internal_services: [
      { id: 'worker', name: 'site', title: 'Site', category: 'Web', purpose: 'Serves the site.', tech_stack: ['Astro'] },
    ],
  });
  assert.doesNotMatch(JSON.stringify(out), /users|email|password|admin\.example|127\.0\.0\.1|\/home/);
});

test('sanitizeCatalogForPublic: strings are coerced and capped, arrays mapped to strings, nothing shared by reference', () => {
  const stack = ['Go', 42, { leak: 'secret' }, ['nested'], null, '  Bun  '];
  const input = app({ name: { leak: 'secret' }, title: 7, purpose: 'x'.repeat(5000), tech_stack: stack });
  const out = sanitizeApps([input]).applications[0];
  assert.equal(out.name, '');
  assert.equal(out.title, '7');
  assert.ok(out.purpose.length <= 600, `purpose capped, got ${out.purpose.length}`);
  assert.deepEqual(out.tech_stack, ['Go', '42', 'Bun']);
  assert.notEqual(out.tech_stack, stack);
  stack.push('added later');
  assert.deepEqual(out.tech_stack, ['Go', '42', 'Bun'], 'output does not alias the input array');
  assert.deepEqual(sanitizeApps([app({ tech_stack: 'Go' })]).applications[0].tech_stack, [], 'non-array becomes []');
  assert.doesNotMatch(JSON.stringify(out), /secret|nested/);
});

test('sanitizeCatalogForPublic: public_domain keeps only https://<host>', () => {
  const cases = [
    ['https://thio.example.com', 'https://thio.example.com'],
    ['https://thio.example.com/', 'https://thio.example.com'],
    ['https://thio.example.com/admin?x=1', 'https://thio.example.com'],
    ['https://103.217.144.64.nip.io', 'https://103.217.144.64.nip.io'],
    ['HTTPS://Thio.Example.com', 'https://thio.example.com'],
    ['http://thio.example.com', null],
    ['https://127.0.0.1:8080', null],
    ['https://103.217.144.64', null],
    ['https://localhost', null],
    ['https://thio.example.com:8443', null],
    ['https://user:pass@thio.example.com', null],
    ['Internal Loopback (127.0.0.1:3040)', null],
    ['Internal SSOT & MCP Stdio', null],
    ['javascript:alert(1)', null],
    ['', null],
    [undefined, null],
    [{ href: 'https://x.example.com' }, null],
  ];
  for (const [input, want] of cases) {
    assert.equal(sanitizeApps([app({ public_domain: input })]).applications[0].public_domain, want, String(input));
  }
});

test('sanitizeCatalogForPublic: public_routes keep only real https hosts', () => {
  const route = (over) => ({ domain: 'a.example.com', path: '/*', protocol: 'HTTPS Reverse Proxy', ...over });
  const cases = [
    ['https host', route(), { domain: 'a.example.com', path: '/*', protocol: 'HTTPS Reverse Proxy' }],
    ['url form is reduced to the host', route({ domain: 'https://a.example.com/x' }), { domain: 'a.example.com', path: '/*', protocol: 'HTTPS Reverse Proxy' }],
    ['missing path means /*', route({ path: undefined }), { domain: 'a.example.com', path: '/*', protocol: 'HTTPS Reverse Proxy' }],
    ['loopback ip', route({ domain: '127.0.0.1:3040', protocol: 'Loopback HTTP' }), null],
    ['loopback over https', route({ domain: '127.0.0.1' }), null],
    ['Loopback label', route({ domain: 'Loopback-Only' }), null],
    ['Internal label', route({ domain: 'Internal service' }), null],
    ['raw public ip', route({ domain: '103.217.144.64' }), null],
    ['localhost', route({ domain: 'localhost' }), null],
    ['host with port', route({ domain: 'a.example.com:8443' }), null],
    ['not https', route({ protocol: 'Loopback HTTP' }), null],
    ['git source is not a host', route({ domain: 'second-brain.git', path: 'infrastructure/', protocol: 'Git + Build Pipeline' }), null],
    ['no protocol', route({ protocol: undefined }), null],
    ['path that is not a path', route({ path: 'infrastructure/ + decisions/' }), null],
    ['object domain', route({ domain: { host: 'a.example.com' } }), null],
    ['not an object', 'a.example.com', null],
  ];
  for (const [name, input, want] of cases) {
    assert.deepEqual(sanitizeApps([app({ public_routes: [input] })]).applications[0].public_routes, want ? [want] : [], name);
  }
  assert.deepEqual(sanitizeApps([app({ public_routes: 'a.example.com' })]).applications[0].public_routes, [], 'non-array');
});

test('sanitizeCatalogForPublic: databases publish name, engine, summary and a table count, never tables or columns', () => {
  const cases = [
    ['loopback port', 'PostgreSQL 16 (127.0.0.1:5432)', 'PostgreSQL 16'],
    ['home path', 'Local JSON State (~/.9router)', 'Local JSON State'],
    ['bare loopback', 'PostgreSQL on 127.0.0.1:5432', 'PostgreSQL on'],
    ['absolute path', 'SQLite 3 /home/me/data/app.db', 'SQLite 3'],
    ['tilde path', 'JSON files in ~/state', 'JSON files in'],
    ['harmless parenthetical stays', 'SQLite 3 (WAL Mode)', 'SQLite 3 (WAL Mode)'],
    ['spaced slashes are not paths', 'Git YAML / JSON / Markdown', 'Git YAML / JSON / Markdown'],
    ['non-string', { name: 'pg' }, ''],
  ];
  for (const [name, engine, want] of cases) {
    assert.equal(sanitizeApps([app({ databases: [{ name: 'db', engine }] })]).applications[0].databases[0].engine, want, name);
  }

  const db = (over) => sanitizeApps([app({ databases: [{ name: 'Store', ...over }] })]).applications[0].databases[0];
  assert.equal(db({ tables: [{ name: 'a' }, { name: 'b' }] }).table_count, 2, 'counts tables');
  assert.equal(db({ table_count: 18, tables: [{ name: 'a' }] }).table_count, 18, 'explicit count wins');
  assert.equal(db({ table_count: '18' }).table_count, 0, 'count must be a number');
  assert.equal(db({ table_count: -1 }).table_count, 0, 'count must be >= 0');
  assert.equal(db({ public_summary: 'Holds orders.', summary: 'private summary' }).summary, 'Holds orders.');
  assert.equal(db({ summary: 'private summary' }).summary, '', 'only public_summary is published');
  assert.deepEqual(Object.keys(db({ tables: [{ name: 'users', columns: ['email'] }] })).sort(), ['engine', 'name', 'summary', 'table_count']);
  assert.deepEqual(sanitizeApps([app({ databases: ['x', null, 3] })]).applications[0].databases, [], 'non-objects dropped');
});

test('sanitizeCatalogForPublic: host keeps sizing facts only, os without the kernel', () => {
  const host = {
    name: 'HermesHost',
    ip: '103.217.144.64',
    os: 'Ubuntu 24.04 LTS (Linux 6.8)',
    cpu: '1 vCore',
    ram_mb: 1922,
    swap_mb: 4096,
    ram_headroom_policy: '>= 500 MB',
    edge_proxy: {
      name: 'Caddy',
      config_path: '/etc/caddy/Caddyfile',
      admin_socket: 'unix//var/lib/caddy/admin.sock',
      public_ports: [80, 443, '22', 70000, 1.5],
      security_policy: 'prose',
    },
  };
  assert.deepEqual(sanitizeCatalogForPublic(catalog([], { host })).host, {
    name: 'HermesHost',
    os: 'Ubuntu 24.04 LTS',
    cpu: '1 vCore',
    ram_mb: 1922,
    swap_mb: 4096,
    edge_proxy: { name: 'Caddy', public_ports: [80, 443] },
  });
  const os = (value) => sanitizeCatalogForPublic(catalog([], { host: { os: value } })).host.os;
  assert.equal(os('Ubuntu 24.04 LTS, kernel 6.8.0-45-generic'), 'Ubuntu 24.04 LTS');
  assert.equal(os('Ubuntu 24.04 LTS Linux 6.8'), 'Ubuntu 24.04 LTS');
  const sizing = sanitizeCatalogForPublic(catalog([], { host: { ram_mb: '1922', swap_mb: Infinity } })).host;
  assert.equal(sizing.ram_mb, null);
  assert.equal(sizing.swap_mb, null);
  assert.deepEqual(sizing.edge_proxy, { name: '', public_ports: [] });
  assert.equal(sanitizeCatalogForPublic(catalog([])).host, null);
});

test('sanitizeCatalogForPublic: updated_at is the catalog string or null', () => {
  assert.equal(sanitizeCatalogForPublic(catalog([], { updated_at: 1730000000 })).updated_at, null);
  assert.equal(sanitizeCatalogForPublic({ applications: [] }).updated_at, null);
});

test('sanitizeCatalogForPublic: a catalog with the wrong shape throws', () => {
  for (const bad of [null, undefined, 'x', 42, [], {}, { applications: {} }, { applications: [], host: 'x' }, { applications: [], host: [] }]) {
    assert.throws(() => sanitizeCatalogForPublic(bad), /catalog/, JSON.stringify(bad) ?? String(bad));
  }
  assert.deepEqual(sanitizeApps(['x', null, 7]), { ...EMPTY, updated_at: '2026-10-31T15:00:00Z' }, 'non-object apps are dropped');
});

test('loadPublicCatalog: missing file is an empty projection, invalid JSON or shape throws', () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'sync-infra-'));
  try {
    assert.deepEqual(loadPublicCatalog(path.join(tmp, 'missing.json')), EMPTY);
    const bad = path.join(tmp, 'bad.json');
    fs.writeFileSync(bad, '{ "applications": [');
    assert.throws(() => loadPublicCatalog(bad), /bad\.json/);
    fs.writeFileSync(bad, '{ "applications": {} }');
    assert.throws(() => loadPublicCatalog(bad), /bad\.json/);
    const good = path.join(tmp, 'good.json');
    fs.writeFileSync(good, JSON.stringify(catalog([app()])));
    assert.equal(loadPublicCatalog(good).applications[0].id, 'site');
  } finally {
    fs.rmSync(tmp, { recursive: true, force: true });
  }
});

test('loadPublicCatalog: the fixture catalog keeps every PRIVATE-FIXTURE sample out', () => {
  const fixture = fileURLToPath(new URL('../fixtures/second-brain/infrastructure/catalog.json', import.meta.url));
  const out = loadPublicCatalog(fixture);
  assert.deepEqual(out.applications.map((a) => a.id), ['sample-site']);
  assert.deepEqual(out.internal_services.map((a) => a.id), ['sample-worker']);
  assert.equal(out.applications[0].databases[0].table_count, 1);
  assert.doesNotMatch(JSON.stringify(out), /private-fixture/i);
});

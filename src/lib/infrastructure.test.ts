import { test } from 'node:test';
import assert from 'node:assert/strict';
import { diagramModel, EMPTY_PROJECTION, fit, infraCounts, LABEL_CHARS, type Projection, type PublicApp } from './infrastructure.ts';

const app = (over: Partial<PublicApp> = {}): PublicApp => ({
  id: 'site',
  name: 'site',
  title: 'Site',
  category: 'Web',
  purpose: 'Serves the site.',
  tech_stack: ['Astro'],
  public_domain: null,
  public_routes: [],
  databases: [],
  ...over,
});
const route = (domain: string, path = '/*') => ({ domain, path, protocol: 'HTTPS' });
const db = { name: 'Store', engine: 'SQLite 3', summary: '', table_count: 2 };

test('infraCounts: every number on the page comes from the projection', () => {
  const projection: Projection = {
    ...EMPTY_PROJECTION,
    applications: [
      app({ id: 'site', public_domain: 'https://a.example.com', public_routes: [route('a.example.com'), route('api.a.example.com', '/office')], databases: [db] }),
      app({ id: 'api', public_domain: 'https://b.example.com', public_routes: [route('b.example.com')], databases: [db, db] }),
      app({ id: 'static', public_domain: 'https://c.example.com' }),
      app({ id: 'unrouted' }),
    ],
    internal_services: [{ id: 'worker', name: 'worker', title: '', category: '', purpose: '', tech_stack: [] }],
  };
  assert.deepEqual(infraCounts(projection), { publicApps: 4, internalServices: 1, publicHosts: 4, databases: 3 });
});

test('infraCounts: an empty projection counts zero', () => {
  assert.deepEqual(infraCounts(EMPTY_PROJECTION), { publicApps: 0, internalServices: 0, publicHosts: 0, databases: 0 });
});

const internalService = (id: string) => ({ id, name: id, title: '', category: '', purpose: '', tech_stack: [] });

test('fit: truncates to the character budget with an ellipsis', () => {
  assert.equal(fit('short', 10), 'short');
  assert.equal(fit('exactly10!', 10), 'exactly10!');
  assert.equal(fit('this is too long', 10), 'this is t…');
  assert.equal(fit('this is too long', 10).length, 10);
});

test('diagramModel: one row per public app linking to its card; internal services are one grouped node', () => {
  const longHost = 'a-very-long-subdomain-name.example.com';
  const { rows, internal } = diagramModel({
    ...EMPTY_PROJECTION,
    applications: [
      app({
        id: 'site',
        name: 'site',
        tech_stack: ['Astro', 'TypeScript', 'Three.js'],
        public_domain: 'https://a.example.com',
        public_routes: [route('a.example.com'), route('api.a.example.com', '/office')],
        databases: [db, { ...db, engine: '', name: 'Files' }],
      }),
      app({ id: 'long', name: 'a-really-long-application-name', public_routes: [route(longHost), route('b.example.com'), route('c.example.com')] }),
      app({ id: 'unrouted' }),
    ],
    internal_services: [internalService('worker'), internalService('router')],
  });
  assert.deepEqual(rows[0], {
    id: 'site',
    href: '#app-site',
    host: 'a.example.com',
    hostNote: '+1 more host',
    name: 'site',
    stack: 'Astro · TypeScript',
    data: { label: 'SQLite 3', note: '2 DBs · 4 tables' },
  });
  assert.equal(rows[1].host, fit(longHost, LABEL_CHARS.host));
  assert.ok(rows[1].host!.length <= LABEL_CHARS.host && rows[1].host!.endsWith('…'));
  assert.equal(rows[1].hostNote, '+2 more hosts');
  assert.ok(rows[1].name.length <= LABEL_CHARS.name);
  assert.equal(rows[1].data, null, 'no database, no data node');
  assert.equal(rows[2].host, null, 'no public host, no ingress node');
  assert.deepEqual(rows.map((r) => r.id), ['site', 'long', 'unrouted'], 'internal services never get a row or an ingress node');
  assert.deepEqual(internal, { href: '#internal-services', label: '2 internal services', note: 'not publicly routed' });
});

test('diagramModel: no internal node without internal services, singular label for one', () => {
  assert.equal(diagramModel(EMPTY_PROJECTION).internal, null);
  assert.equal(diagramModel({ ...EMPTY_PROJECTION, internal_services: [internalService('x')] }).internal?.label, '1 internal service');
});

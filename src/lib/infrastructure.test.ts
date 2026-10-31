import { test } from 'node:test';
import assert from 'node:assert/strict';
import { EMPTY_PROJECTION, infraCounts, type Projection, type PublicApp } from './infrastructure.ts';

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

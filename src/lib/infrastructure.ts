// /infrastructure data: the public projection that scripts/sync-content.mjs (sanitizeCatalogForPublic)
// writes to content/infrastructure.json. Pure helpers only (no astro:*), so node:test can import them.

export interface PublicApp {
  id: string;
  name: string;
  title: string;
  category: string;
  purpose: string;
  tech_stack: string[];
  public_domain: string | null; // "https://<host>"
  public_routes: { domain: string; path: string; protocol: string }[];
  databases: { name: string; engine: string; summary: string; table_count: number }[];
}

export interface InternalService {
  id: string;
  name: string;
  title: string;
  category: string;
  purpose: string;
  tech_stack: string[];
}

export interface Projection {
  updated_at: string | null;
  host: {
    name: string;
    os: string;
    cpu: string;
    ram_mb: number | null;
    swap_mb: number | null;
    edge_proxy: { name: string; public_ports: number[] };
  } | null;
  applications: PublicApp[];
  internal_services: InternalService[];
}

export const EMPTY_PROJECTION: Projection = { updated_at: null, host: null, applications: [], internal_services: [] };

// Public HTTPS hosts of one app: its public_domain and route domains, deduplicated.
export function appHosts(app: PublicApp): string[] {
  const hosts = app.public_domain ? [app.public_domain.replace(/^https:\/\//, '')] : [];
  return [...new Set([...hosts, ...app.public_routes.map((r) => r.domain)])];
}

export function infraCounts(p: Projection) {
  return {
    publicApps: p.applications.length,
    internalServices: p.internal_services.length,
    publicHosts: new Set(p.applications.flatMap(appHosts)).size,
    databases: p.applications.reduce((n, app) => n + app.databases.length, 0),
  };
}

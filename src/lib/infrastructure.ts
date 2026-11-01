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

// Card links: the public domain, then each route; "/*" means the whole host.
export function appLinks(app: PublicApp): { href: string; label: string }[] {
  const routes = app.public_domain ? [{ domain: app.public_domain.replace(/^https:\/\//, ''), path: '/*' }] : [];
  const links = [...routes, ...app.public_routes].map(({ domain, path }) => {
    const shown = path === '/*' || path === '/' ? '' : path;
    return { href: `https://${domain}${shown.replace(/\*$/, '') || '/'}`, label: `${domain}${shown}` };
  });
  return links.filter((link, i) => links.findIndex((l) => l.href === link.href) === i);
}

export function infraCounts(p: Projection) {
  return {
    publicApps: p.applications.length,
    internalServices: p.internal_services.length,
    publicHosts: new Set(p.applications.flatMap(appHosts)).size,
    databases: p.applications.reduce((n, app) => n + app.databases.length, 0),
  };
}

export const plural = (n: number, word: string) => `${n} ${word}${n === 1 ? '' : 's'}`;

export const fit = (text: string, max: number) => (text.length <= max ? text : `${text.slice(0, max - 1)}…`);

// Characters that fit each diagram label at its font size (src/pages/infrastructure.astro): the SVG
// cannot wrap text, so labels are cut here and the card below has the full value.
export const LABEL_CHARS = { host: 29, name: 21, stack: 24, data: 19 };

export interface DiagramRow {
  id: string;
  href: string;
  host: string | null; // null: not publicly routed, so no ingress node and no path through Caddy
  hostNote: string;
  name: string;
  stack: string;
  data: { label: string; note: string } | null;
}

// Public apps get a row each; internal services collapse into one node with no public path.
export function diagramModel(p: Projection) {
  const rows: DiagramRow[] = p.applications.map((app) => {
    const hosts = appHosts(app);
    const tables = app.databases.reduce((n, d) => n + d.table_count, 0);
    const first = app.databases[0];
    return {
      id: app.id,
      href: `#app-${app.id}`,
      host: hosts.length ? fit(hosts[0], LABEL_CHARS.host) : null,
      hostNote: hosts.length > 1 ? `+${plural(hosts.length - 1, 'more host')}` : hosts.length ? 'HTTPS' : '',
      name: fit(app.name, LABEL_CHARS.name),
      stack: fit(app.tech_stack.slice(0, 2).join(' · '), LABEL_CHARS.stack),
      data: first
        ? { label: fit(first.engine || first.name, LABEL_CHARS.data), note: `${plural(app.databases.length, 'DB')} · ${plural(tables, 'table')}` }
        : null,
    };
  });
  const n = p.internal_services.length;
  return {
    rows,
    internal: n ? { href: '#internal-services', label: plural(n, 'internal service'), note: 'not publicly routed' } : null,
  };
}

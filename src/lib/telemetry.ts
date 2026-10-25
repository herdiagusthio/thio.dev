export function getPulseData() {
  return {
    active: true,
    signal: 'SYSTEM ACTIVE',
    auth_level: 'SYS_ADMIN',
    timestamp: new Date().toISOString().replace(/\.\d{3}Z$/, 'Z'),
    host: 'VPS-MAIN',
    proxy: 'Caddy v2 (TCP BBR)',
    runtime: 'Go 1.23 / Bun 1.4 / Astro 7 SSG',
    memoryGuard: 'RAM <= 1.9GB (Headroom >= 500MB)',
  };
}

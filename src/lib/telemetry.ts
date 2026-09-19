export interface AgentInfo {
  id: string;
  name: string;
  role: string;
  focus: string;
  status: 'ONLINE' | 'ACTIVE' | 'STANDBY';
  modelTier: string;
}

export function getPulseData() {
  return {
    active: true,
    signal: 'SYSTEM ACTIVE',
    auth_level: 'PRINCIPAL',
    timestamp: new Date().toISOString().replace(/\.\d{3}Z$/, 'Z'),
    host: 'VPS 103.217.144.64',
    proxy: 'Caddy v2',
    runtime: 'Go 1.23 / Bun 1.4 / Astro SSG',
    memoryGuard: 'RAM <= 1.9GB (Headroom >= 500MB)',
  };
}

export function resolveMetadata(component: string) {
  return {
    component_id: component,
    rendered_at: new Date().toISOString().split('T')[0],
  };
}

export function getAgentFleet(): AgentInfo[] {
  return [
    { id: 'leadya', name: 'LEADYA', role: 'Chief Orchestrator / CEO', focus: 'Autonomous Org Execution & Alignment', status: 'ACTIVE', modelTier: 'Fast/Standard' },
    { id: 'prime', name: 'Prime', role: 'Principal Technical Architect', focus: 'System Architecture & Review Gate', status: 'ONLINE', modelTier: 'Standard' },
    { id: 'goder', name: 'Goder', role: 'Senior Go Backend Engineer', focus: 'High Concurrency & Scatter-Gather APIs', status: 'ONLINE', modelTier: 'Standard' },
    { id: 'sysca', name: 'Sysca', role: 'Infraguard / DevOps & Reliability', focus: 'Linux VPS, Caddy & Memory Guard', status: 'ONLINE', modelTier: 'Standard' },
    { id: 'pixel', name: 'Pixel', role: 'Frontend & UI/UX Architect', focus: 'Astro SSG & System Console Tokens', status: 'ONLINE', modelTier: 'Standard' },
    { id: 'lexa', name: 'Lexa', role: 'Technical Narrative & Case Studies', focus: 'Architecture Documentation & RFCs', status: 'ONLINE', modelTier: 'Standard' },
    { id: 'luna', name: 'Luna', role: 'Product Strategist & PRD Architect', focus: 'Product Requirements & User Flows', status: 'ONLINE', modelTier: 'Standard' },
  ];
}

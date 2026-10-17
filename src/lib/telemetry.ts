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
    auth_level: 'SYS_ADMIN',
    timestamp: new Date().toISOString().replace(/\.\d{3}Z$/, 'Z'),
    host: 'VPS-MAIN',
    proxy: 'Caddy v2 (TCP BBR)',
    runtime: 'Go 1.23 / Bun 1.4 / Astro 7 SSG',
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
    { id: 'root', name: 'LEADYA', role: 'CEO & Chief Orchestrator', focus: 'Autonomous Org Execution & Alignment', status: 'ACTIVE', modelTier: 'Frontier Reasoning' },
    { id: 'prime', name: 'Prime', role: 'Principal Engineer & Head of Eng', focus: 'System Architecture, ADRs & Review Gate', status: 'ONLINE', modelTier: 'Fast Standard' },
    { id: 'agy', name: 'Antigravity', role: 'Lead Agentic Engineer (Full-Stack)', focus: 'Go, TypeScript/Bun, Astro & TDD Verification', status: 'ACTIVE', modelTier: 'AGY Engine' },
    { id: 'infraguard', name: 'Sysca', role: 'Infraguard / DevOps & Reliability', focus: 'Linux VPS, Caddy, Systemd Slices & RAM Guard', status: 'ONLINE', modelTier: 'Fast Standard' },
    { id: 'luna', name: 'Luna', role: 'Product Owner & Manager', focus: 'PRDs, Feature ROI & UX Information Architecture', status: 'ONLINE', modelTier: 'Fast Standard' },
    { id: 'lexa', name: 'Lexa', role: 'Content & Narrative Specialist', focus: 'Technical Blogging, AI SEO & JSON-LD Schema', status: 'ONLINE', modelTier: 'Fast Standard' },
    { id: 'caren', name: 'Caren', role: 'Personal Executive Assistant', focus: 'Financial Intelligence, Schedule & Workspace Ops', status: 'ONLINE', modelTier: 'Balanced Standard' },
  ];
}

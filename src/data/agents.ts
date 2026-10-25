// Single roster for the 7-agent fleet: the About page and the office's static fallback.
// Roles and models mirror the live API (api.<site>/office), which overrides them when reachable;
// mission, skills and focus exist only here.

export interface AgentColors {
  hair: string;
  skin: string;
  shirt: string;
  pants: string;
}

export interface Agent {
  id: string;
  name: string;
  role: string;
  focus: string;
  avatar: string;
  seat: number;
  model: string;
  state: string; // Working | Reviewing | Collaborating | Idle | Offline
  room: string; // Workspace | Lounge
  currentTask: string;
  recentActivity: string;
  activityLabel: string;
  mission: string;
  skills: string[];
  colors: AgentColors;
}

export const AGENTS: Agent[] = [
  {
    id: 'root',
    name: 'LEADYA',
    role: 'CEO & Chief Orchestrator',
    focus: 'Autonomous Org Execution & Alignment',
    avatar: '👑',
    seat: 1,
    model: 'ChatGPT Plus (agenticprojectcombo)',
    state: 'Working',
    room: 'Workspace',
    currentTask: 'Orchestrating engineering workstreams & review gates',
    recentActivity: 'Verified architecture review gate for Go AI verification stream',
    activityLabel: 'Orchestrating mission-critical sprint workstreams',
    mission: 'Executive orchestration between Founder intent and specialist engineering workforce. Decomposes high-leverage roadmaps, delegates implementation with isolated contexts, reviews technical outcomes, and enforces system integrity.',
    skills: ['workstream-decomposition', 'delegation-protocol', 'cost-model-optimization', 'outcome-verification', 'memory-governance'],
    colors: { hair: '#1d293c', skin: '#fed7aa', shirt: '#e6b34e', pants: '#1e3a8a' },
  },
  {
    id: 'prime',
    name: 'Prime',
    role: 'Head of Engineering & Principal Architect',
    focus: 'System Architecture, ADRs & Review Gate',
    avatar: '📐',
    seat: 2,
    model: 'Gemini 3.1 Flash-Lite (Fast)',
    state: 'Working',
    room: 'Workspace',
    currentTask: 'Authoring Architecture ADRs & gating code reviews',
    recentActivity: 'Drafted ADR in second-brain/decisions for modular architecture',
    activityLabel: 'Authoring architecture ADR & review gate',
    mission: 'Lead engineering excellence, author ADRs/RFCs, enforce architectural purity, manage technical task decomposition, and conduct rigorous code and MR reviews before merging.',
    skills: ['architecture-governance', 'adr-rfc-authoring', 'code-review-gatekeeper', 'concurrency-design', 'domain-driven-design'],
    colors: { hair: '#11151c', skin: '#e9b57d', shirt: '#5a8dee', pants: '#36475d' },
  },
  {
    id: 'agy',
    name: 'Antigravity',
    role: 'Lead Agentic Engineer (AGY)',
    focus: 'Go, TypeScript/Bun, Astro & TDD Verification',
    avatar: '⚡',
    seat: 3,
    model: 'Google Antigravity Engine',
    state: 'Working',
    room: 'Workspace',
    currentTask: 'Autonomous Full-Stack Implementation & Verification',
    recentActivity: 'Executing implementation across frontend and backend in isolated sandbox',
    activityLabel: 'Active code generation session',
    mission: 'Primary engineering builder: executes end-to-end full-stack code implementation across backend services (Go, Python, TypeScript, SQLite) and frontend systems (Astro, React, Tailwind CSS, Three.js) with test-driven verification and zero regressions.',
    skills: ['full-stack-engineering', 'table-driven-tests', 'refactoring', 'architecture-verification', 'ci-cd-automation'],
    colors: { hair: '#0f172a', skin: '#e2e8f0', shirt: '#38bdf8', pants: '#0369a1' },
  },
  {
    id: 'infraguard',
    name: 'Sysca',
    role: 'DevOps & Infrastructure Specialist',
    focus: 'Linux VPS, Caddy, Systemd Slices & RAM Guard',
    avatar: '🛡️',
    seat: 4,
    model: 'Gemini 3.1 Flash-Lite (Fast)',
    state: 'Working',
    room: 'Workspace',
    currentTask: 'Auditing host memory headroom (>= 500MB)',
    recentActivity: 'Audited Caddy reverse proxy and automated log rotations',
    activityLabel: 'Monitoring VPS telemetry & infrastructure',
    mission: 'Maintain 100% uptime, robust security, and optimal resource performance for the host VPS, Caddy reverse proxy, systemd services, and local inference routing. Enforces >= 500 MB RAM headroom invariant.',
    skills: ['vps-telemetry', 'caddy-tls-proxy', 'systemd-lifecycle', 'memory-guardrail', 'network-hygiene', 'automated-backups'],
    colors: { hair: '#2f4f3a', skin: '#f1c9a0', shirt: '#70bdcb', pants: '#374052' },
  },
  {
    id: 'luna',
    name: 'Luna',
    role: 'Product Owner & Manager',
    focus: 'PRDs, Feature ROI & UX Information Architecture',
    avatar: '🎯',
    seat: 5,
    model: 'Gemini 3.1 Flash-Lite (Fast)',
    state: 'Idle',
    room: 'Lounge',
    currentTask: 'Synthesizing product roadmaps and user specifications',
    recentActivity: 'Compiled acceptance criteria and PRD milestone roadmap',
    activityLabel: 'On standby · Lounge',
    mission: 'Own product vision, feature prioritization (ROI), PRDs, roadmaps, and UX research synthesis. Bridge technical capabilities with high-leverage outcomes.',
    skills: ['prd-authoring', 'backlog-prioritization', 'ux-journey-mapping', 'product-roadmaps', 'feature-roi-analysis'],
    colors: { hair: '#8b5a2b', skin: '#dca06e', shirt: '#8f7ae6', pants: '#2f3a44' },
  },
  {
    id: 'lexa',
    name: 'Lexa',
    role: 'Content & Narrative Specialist',
    focus: 'Technical Blogging, AI SEO & JSON-LD Schema',
    avatar: '✍️',
    seat: 6,
    model: 'Gemini 3.1 Flash-Lite (Fast)',
    state: 'Idle',
    room: 'Lounge',
    currentTask: 'Drafting engineering case studies for thio.dev/blog',
    recentActivity: 'Structured JSON-LD schema markup for engineering architecture series',
    activityLabel: 'On standby · Lounge',
    mission: "Create and maintain technical copy, AI search optimization (AI SEO), JSON-LD schema, and technical blogging (thio.dev/blog). Guardian of Thio's authentic software engineering voice.",
    skills: ['technical-blogging', 'ai-seo-optimization', 'json-ld-schema', 'architecture-case-studies', 'canonical-attribution'],
    colors: { hair: '#b54b45', skin: '#f1c9a0', shirt: '#e76f51', pants: '#3d2f4a' },
  },
  {
    id: 'caren',
    name: 'Caren',
    role: 'Personal Executive Assistant',
    focus: 'Financial Intelligence, Schedule & Workspace Ops',
    avatar: '💼',
    seat: 7,
    model: 'ChatGPT Plus (agenticprojectcombo)',
    state: 'Idle',
    room: 'Lounge',
    currentTask: 'Coordinating engineering calendar & workout routines',
    recentActivity: 'Synchronized weekly engineering milestones with training schedule',
    activityLabel: 'On standby · Lounge',
    mission: "Manage Thio's financial intelligence, health and fitness programs, and schedule operations as a proactive personal executive assistant.",
    skills: ['calendar-coordination', 'financial-intelligence', 'habit-tracking', 'executive-ops', 'proactive-alerts'],
    colors: { hair: '#c9a24a', skin: '#a8714a', shirt: '#4f9c7a', pants: '#36475d' },
  },
];

export interface VerifiedProject {
  name: string;
  kind: string;
  description: string;
  href: string;
  evidence?: string;
}

export interface TimelineEntry {
  label: string;
  title: string;
  description: string;
}

export const verifiedProjects: VerifiedProject[] = [
  {
    name: 'Hermes AI Organization',
    kind: 'multi-agent systems',
    description: 'A specialist agent organization with explicit roles, orchestration, and operational guardrails.',
    href: '/showcase/autonomous-agent-office',
  },
];

export const engineeringPrinciples = [
  'Make boundaries explicit before making systems bigger.',
  'Prefer boring primitives that remain observable under failure.',
  'Treat verification, security, and memory limits as design inputs.',
];

export const timeline: TimelineEntry[] = [
  { label: '01', title: 'Server', description: 'Operating reliable services and infrastructure under real constraints.' },
  { label: '02', title: 'AI agent', description: 'Turning repeatable engineering work into bounded, inspectable tools.' },
  { label: '03', title: 'Multi-agent organization', description: 'Coordinating specialist agents with roles, evidence, and human review.' },
];

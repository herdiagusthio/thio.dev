// Pure helpers for the office client (no DOM, so node:test can load them): HTML escaping and
// validation of the live API snapshot before any of it reaches innerHTML.

import type { Agent, AgentColors } from '../data/agents';

// --- HTML ------------------------------------------------------------------------------------

class SafeHtml {
  value: string;
  constructor(value: string) {
    this.value = value;
  }
}

/** Trusted markup that `html` interpolates as-is. */
export const raw = (value: string) => new SafeHtml(value);

const ESCAPES: Record<string, string> = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };

function render(value: unknown): string {
  if (value instanceof SafeHtml) return value.value;
  if (Array.isArray(value)) return value.map(render).join('');
  if (value === null || value === undefined || value === false) return '';
  return String(value).replace(/[&<>"']/g, (c) => ESCAPES[c]);
}

/** Template tag: every interpolation is escaped unless it is `raw()` or a nested `html` result. */
export function html(strings: TemplateStringsArray, ...values: unknown[]): SafeHtml {
  return new SafeHtml(strings.reduce((out, s, i) => out + render(values[i - 1]) + s));
}

/** State as a class-name suffix: `Working` -> `working`. */
export const stateClass = (state: string) => state.toLowerCase().replace(/[^a-z]/g, '');

// --- Live snapshot ---------------------------------------------------------------------------

export interface Activity {
  icon: string;
  agent: string;
  action: string;
  timeAgo: string;
}

export interface Channel {
  name: string;
  target: string;
}

export interface Summary {
  totalAgents: number;
  active: number;
  idle: number;
  offline: number;
}

/** The AI-DLC run in flight: fixed stage labels and counts, never what it is about. */
export interface Pipeline {
  stage: string;
  ticketsDone: number;
  ticketsTotal: number;
  waitingForOwner: boolean;
}

export interface Snapshot {
  agents: Agent[];
  activities: Activity[] | null; // null: the live feed is empty
  channels: Channel[] | null;
  channelStatus: string | null;
  pipeline: Pipeline | null;
  summary: Summary | null;
  updatedAt: string | null;
}

const DEFAULT_COLORS: AgentColors = { hair: '#18181b', skin: '#fed7aa', shirt: '#3b82f6', pants: '#1e3a8a' };
const HEX = /^#[0-9a-f]{3,8}$/i;
// id and state are identifiers (map keys, class names, 3D animation switches), never free text.
const ID = /^[\w-]+$/;
const STATES = ['Working', 'Reviewing', 'Collaborating', 'Idle', 'Offline'];
const LAST_ACTIVE = ['today', 'this week', 'dormant'];

const isRecord = (v: unknown): v is Record<string, unknown> => typeof v === 'object' && v !== null && !Array.isArray(v);
const str = (v: unknown) => (typeof v === 'string' ? v : undefined);
const num = (v: unknown) => (typeof v === 'number' && Number.isFinite(v) ? v : undefined);

// Colors land in a style attribute, where escaping does not stop CSS injection: hex only.
function colorsOf(v: unknown): AgentColors | undefined {
  if (!isRecord(v)) return undefined;
  const { hair, skin, shirt, pants } = v;
  const all = [hair, skin, shirt, pants];
  return all.every((c) => typeof c === 'string' && HEX.test(c)) ? (v as unknown as AgentColors) : undefined;
}

function toAgent(raw: unknown, roster: Agent[]): Agent | null {
  if (!isRecord(raw)) return null;
  const id = str(raw.id);
  const name = str(raw.name);
  const state = str(raw.state);
  const room = str(raw.room);
  const seat = Number.isInteger(raw.seat) ? (raw.seat as number) : undefined;
  if (!id || !ID.test(id) || !name || !state || !STATES.includes(state) || !room || seat === undefined) return null;

  const known = roster.find((a) => a.id === id);
  return {
    id,
    name,
    state,
    room,
    seat,
    role: str(raw.role) ?? known?.role ?? '',
    avatar: str(raw.avatar) ?? known?.avatar ?? '🤖',
    currentTask: str(raw.currentTask) ?? '',
    recentActivity: str(raw.recentActivity) ?? '',
    activityLabel: str(raw.activityLabel) ?? '',
    lastActive: LAST_ACTIVE.find((v) => v === raw.lastActive),
    colors: colorsOf(raw.colors) ?? known?.colors ?? DEFAULT_COLORS,
    // Not exposed by the public API.
    focus: known?.focus ?? '',
    mission: known?.mission ?? '',
    skills: known?.skills ?? [],
  };
}

// The API publishes category slugs only; what each channel is for is written here.
const CHANNEL_NOTES: Record<string, string> = {
  'engineering-architecture': 'Go systems, concurrency patterns, ADR review gate',
  'tech-intelligence': 'AI breakthroughs, distributed systems radar',
  'systems-reliability': 'VPS telemetry, Caddy proxy, memory guardrail',
  'content-narrative': 'Technical blogging, case studies, JSON-LD schema',
  'financial-intelligence': 'Portfolio and market briefs',
  'general-operations': 'Coordination and daily operations',
};

function toChannel(t: unknown): Channel | null {
  if (typeof t === 'string') return { name: t, target: t };
  if (!isRecord(t)) return null;
  const name = str(t.name);
  const category = str(t.category);
  if (!name && !category) return null;
  const slug = category ?? name!.toLowerCase().replace(/\s+/g, '-');
  return { name: `#${slug}`, target: (category && CHANNEL_NOTES[category]) ?? name ?? slug };
}

function toPipeline(v: unknown): Pipeline | null {
  if (!isRecord(v)) return null;
  const stage = str(v.stage);
  const ticketsDone = num(v.ticketsDone);
  const ticketsTotal = num(v.ticketsTotal);
  if (!stage || ticketsDone === undefined || ticketsTotal === undefined || typeof v.waitingForOwner !== 'boolean') return null;
  return { stage, ticketsDone, ticketsTotal, waitingForOwner: v.waitingForOwner };
}

/** Validate the public API payload; null means "use the static fallback". */
export function normalizeSnapshot(data: unknown, roster: Agent[]): Snapshot | null {
  if (!isRecord(data)) return null;
  const stations = data.agents ?? data.stations;
  if (!Array.isArray(stations)) return null;
  const agents = stations.map((s) => toAgent(s, roster)).filter((a): a is Agent => a !== null);
  if (agents.length === 0) return null;

  const activity = Array.isArray(data.liveActivity) && data.liveActivity.length > 0 ? data.liveActivity : null;
  const topics = isRecord(data.channels) && Array.isArray(data.channels.topics) ? data.channels.topics : null;
  const s = isRecord(data.summary) ? data.summary : null;
  const totalAgents = num(s?.totalAgents);
  const active = num(s?.active) ?? num(s?.working);
  const idle = num(s?.idle);
  const offline = num(s?.offline) ?? 0;

  return {
    agents,
    activities:
      activity?.filter(isRecord).map((a) => ({
        icon: str(a.icon) ?? '⚡',
        agent: str(a.agent) ?? '',
        action: str(a.action) ?? '',
        timeAgo: str(a.timeAgo) ?? 'recently',
      })) ?? null,
    channels: topics?.map(toChannel).filter((c): c is Channel => c !== null) ?? null,
    channelStatus: isRecord(data.channels) ? (str(data.channels.status) ?? null) : null,
    pipeline: toPipeline(data.pipeline),
    summary: totalAgents !== undefined && active !== undefined && idle !== undefined ? { totalAgents, active, idle, offline } : null,
    updatedAt: str(data.updatedAt) ?? str(data.fetchedAt) ?? null,
  };
}

// --- Static channel list (configuration, shown until the API answers) -------------------------

export const STATIC_CHANNELS: Channel[] = Object.entries(CHANNEL_NOTES).map(([slug, note]) => ({ name: `#${slug}`, target: note }));

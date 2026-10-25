// Live Office client — /office. Paints the static roster immediately, then refreshes from the
// sanitized public API every 30s; any network or shape failure keeps the static fallback.
// Every API value is validated by normalizeSnapshot, then escaped by `html` (2D); the 3D bundle
// writes its labels with textContent.

import { AGENTS as ROSTER, type Agent } from '../data/agents';
import { html, normalizeSnapshot, stateClass, STATIC_ACTIVITIES, STATIC_CHANNELS, type Activity, type Channel, type Summary } from './office-data';

declare global {
  interface Window {
    // Prebuilt from ../vps-dashboard/src/office3d.ts, loaded as a classic script before this module.
    Office3D?: {
      init(container: HTMLElement, onSelect: (station: Agent) => void): unknown;
      update(stations: Agent[], isNight: boolean): void;
    };
  }
}

const LIVE_API_URL = `https://api.${new URL(import.meta.env.SITE).host}/office`;
const FETCH_TIMEOUT_MS = 4000;
const REFRESH_INTERVAL_MS = 30000;
const ACTIVE_STATES = ['Working', 'Reviewing', 'Collaborating'];

let agents: Agent[] = ROSTER;
let activities: Activity[] = STATIC_ACTIVITIES;
let channels: Channel[] = STATIC_CHANNELS;
let isLive = false;
let lastUpdatedAt: string | null = null;
let currentRoom: 'workspace' | 'lounge' = 'workspace';
let office3DInitialized = false;

const $ = (id: string) => document.getElementById(id);

// --- Live state ------------------------------------------------------------------------------

async function refreshLiveState() {
  let snapshot = null;
  try {
    const res = await fetch(LIVE_API_URL, {
      cache: 'no-cache',
      signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
      headers: { Accept: 'application/json' },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    snapshot = normalizeSnapshot(await res.json(), ROSTER);
    if (!snapshot) throw new Error('Invalid snapshot shape');
  } catch (e) {
    console.warn('[Office] Live state unavailable, using static fallback:', e);
  }

  isLive = snapshot !== null;
  agents = snapshot?.agents ?? ROSTER;
  activities = snapshot?.activities ?? STATIC_ACTIVITIES;
  channels = snapshot?.channels ?? STATIC_CHANNELS;
  lastUpdatedAt = snapshot ? (snapshot.updatedAt ?? new Date().toISOString()) : null;
  updateHudStatus(snapshot?.summary ?? null);
  updateFreshness();
}

function updateFreshness() {
  const label = $('freshnessLabel');
  if (!label) return;
  if (!isLive || !lastUpdatedAt) {
    label.textContent = isLive ? 'Updated just now' : 'Static Fallback';
    return;
  }
  const elapsedSec = Math.max(0, Math.floor((Date.now() - new Date(lastUpdatedAt).getTime()) / 1000));
  if (elapsedSec < 10) label.textContent = 'Updated just now';
  else if (elapsedSec < 60) label.textContent = `Updated ${elapsedSec}s ago`;
  else if (elapsedSec < 3600) label.textContent = `Updated ${Math.floor(elapsedSec / 60)}m ago`;
  else label.textContent = `Updated ${Math.floor(elapsedSec / 3600)}h ago`;
}

function updateHudStatus(summary: Summary | null) {
  const pill = $('gatewayPill');
  pill?.classList.toggle('live', isLive);
  pill?.classList.toggle('static', !isLive);
  const pillText = $('gatewayStatusText');
  if (pillText) pillText.textContent = isLive ? 'Swarm Fleet — Live Telemetry' : 'Swarm Fleet — Static Fallback';

  const monoLabels = document.querySelectorAll('.mono-label');
  if (monoLabels[0]) monoLabels[0].textContent = isLive ? '[SWARM_TELEMETRY: LIVE]' : '[SWARM_TELEMETRY: STATIC FALLBACK]';
  if (summary && monoLabels[1]) monoLabels[1].textContent = `[AGENTS: ${summary.totalAgents} TRACKED · ${summary.active} ACTIVE]`;

  const working = $('officeHeaderWorkingCount');
  if (working) working.textContent = String(summary ? summary.active : agents.filter((a) => ACTIVE_STATES.includes(a.state)).length);
  const idle = $('officeHeaderIdleCount');
  if (idle) idle.textContent = String(summary ? summary.idle : agents.filter((a) => a.state === 'Idle').length);
}

// --- 2D render -------------------------------------------------------------------------------

// Clickable agents carry data-agent-id; one delegated listener opens the dossier.
const agentAttrs = (a: Agent) => html`data-agent-id="${a.id}" role="button" tabindex="0"`;

const pixelCharacter = (a: Agent, state = a.state) => html`
  <div class="pixel-character state-${stateClass(state)}" style="--hair: ${a.colors.hair}; --skin: ${a.colors.skin}; --shirt: ${a.colors.shirt}; --pants: ${a.colors.pants};">
    <span class="character-hair"></span>
    <span class="character-head"><i></i><b></b></span>
    <span class="character-torso"></span>
    <span class="character-arm left"></span>
    <span class="character-arm right"></span>
    <span class="character-leg left"></span>
    <span class="character-leg right"></span>
  </div>`;

function deskCell(deskNum: number, workspace: Agent[]) {
  const agent = workspace.find((a) => a.seat === deskNum);
  const on = agent ? 'occupied' : 'vacant';
  return html`
    <div class="office-desk-cell" ${agent ? agentAttrs(agent) : ''} title="${agent ? `Workstation #${deskNum}: ${agent.name} (${agent.state})` : `Available Hot-Desk #${deskNum}`}">
      ${agent ? html`
        <div class="desk-speech-bubble" title="${agent.currentTask}">
          <span class="speech-text">${agent.currentTask}</span>
          <span class="speech-badge badge-${stateClass(agent.state)}">${agent.state} · ${agent.name}</span>
        </div>
        ${pixelCharacter(agent)}` : ''}
      <div class="office-desk-furniture ${on}">
        <div class="monitor-screen">
          <div class="screen-content ${agent ? 'screen-on' : 'screen-standby'}">
            ${agent ? html`<div class="code-stream"></div>` : html`<div class="standby-dot"></div>`}
          </div>
          <div class="monitor-stand"></div>
        </div>
        <div class="desk-surface">
          <div class="keyboard"></div>
        </div>
        <div class="desk-legs">
          <div class="leg"></div>
          <div class="pc-tower"><span class="pc-led ${agent ? 'blinking' : ''}"></span></div>
          <div class="leg"></div>
        </div>
        <div class="desk-chair ${agent ? 'occupied' : ''}"></div>
      </div>
      <div class="desk-slot-label">Desk #${deskNum}${agent ? ` · ${agent.name}` : ''}</div>
    </div>`;
}

function setHtml(id: string, content: { value: string }) {
  const el = $(id);
  if (el) el.innerHTML = content.value;
}

function renderOffice2D() {
  const workspace = agents.filter((a) => a.room === 'Workspace');
  const lounge = agents.filter((a) => a.room === 'Lounge');

  setHtml('desksRowTop', html`${[1, 2, 3, 4, 5, 6].map((n) => deskCell(n, workspace))}`);
  setHtml('desksRowBottom', html`${[7, 8, 9, 10, 11, 12].map((n) => deskCell(n, workspace))}`);

  const lead = lounge.find((a) => a.id === 'root');
  setHtml(
    'loungeArmchairSlot',
    lead
      ? html`
        <div style="position: relative; display: flex; flex-direction: column; align-items: center;" ${agentAttrs(lead)} title="Inspect ${lead.name} (Armchair)">
          <div style="position: absolute; bottom: 36px; z-index: 10;">${pixelCharacter(lead, 'idle')}</div>
          <div class="lounge-armchair"></div>
          <div class="seated-agent-tag" style="margin-top: 4px;">${lead.name}</div>
        </div>`
      : html`<div class="lounge-armchair" title="Reserved for Executive Lead"></div>`,
  );

  setHtml(
    'loungeSofaCrew',
    html`${lounge
      .filter((a) => a !== lead)
      .map((a) => html`
        <div class="lounge-seated-agent" ${agentAttrs(a)} title="Inspect ${a.name} (Standby on sofa)">
          <div class="seated-char-wrap">${pixelCharacter(a, 'idle')}</div>
          <div class="seated-agent-tag">${a.name}</div>
        </div>`)}`,
  );

  setHtml(
    'agentRosterChips',
    html`${agents.map((a) => html`
      <div class="agent-chip-item" ${agentAttrs(a)} title="Inspect ${a.name}">
        <span class="chip-avatar">${a.avatar}</span>
        <div class="chip-details">
          <strong>${a.name}</strong>
          <small>${a.role}</small>
        </div>
        <span class="badge ${ACTIVE_STATES.includes(a.state) ? 'active' : 'standby'}">${a.state}</span>
      </div>`)}`,
  );

  setHtml(
    'sidebarActivityList',
    html`${activities.map((item) => html`
      <div class="sidebar-activity-item">
        <div class="activity-top">
          <span class="activity-agent">${item.icon} ${item.agent}</span>
          <span class="activity-time">${item.timeAgo}</span>
        </div>
        <div class="activity-action">${item.action}</div>
      </div>`)}`,
  );

  setHtml(
    'sidebarChannelsList',
    html`${channels.map((c) => html`
      <div class="sidebar-channel-row">
        <div class="channel-left">
          <div class="channel-dot"></div>
          <div class="channel-info-wrap">
            <strong>${c.name}</strong>
            <small>${c.target}</small>
          </div>
        </div>
        <span class="badge active" style="font-size: 9px;">CONNECTED</span>
      </div>`)}`,
  );
}

// --- Clock, rooms, 2D/3D, dossier ------------------------------------------------------------

function updateClockAndLighting() {
  const now = new Date();
  const wib = new Date(now.getTime() + now.getTimezoneOffset() * 60000 + 7 * 3600000);
  const time = `${String(wib.getHours()).padStart(2, '0')}:${String(wib.getMinutes()).padStart(2, '0')}`;
  const clock = $('clockDigits');
  if (clock) clock.textContent = time;
  const loungeClock = document.querySelector('.clock-digits-lounge');
  if (loungeClock) loungeClock.textContent = time;

  const isNight = wib.getHours() < 6 || wib.getHours() >= 18;
  const pill = $('officeDayNightPill');
  if (pill) {
    pill.textContent = isNight ? '🌙 nighttime' : '☀️ daytime';
    pill.className = `day-night-chip ${isNight ? 'night' : 'day'}`;
  }
  document.querySelectorAll('.office-room-stage').forEach((stage) => stage.classList.toggle('is-night', isNight));

  if (office3DInitialized) window.Office3D?.update(agents, isNight);
}

// Showing clears the inline display so the stylesheet's value (e.g. flex) applies.
function show(id: string, visible: boolean) {
  const el = $(id);
  if (el) el.style.display = visible ? '' : 'none';
}

function switchRoom(room: 'workspace' | 'lounge') {
  currentRoom = room;
  const isWorkspace = room === 'workspace';
  show('officeWorkspaceRoom', isWorkspace);
  show('officeLoungeRoom', !isWorkspace);
  const title = $('officeRoomTitle');
  if (title) title.textContent = isWorkspace ? 'Workspace' : 'Lounge';
  const count = $('officeRoomCount');
  if (count) count.textContent = String(agents.filter((a) => a.room === (isWorkspace ? 'Workspace' : 'Lounge')).length);
  $('dotWorkspace')?.classList.toggle('active', isWorkspace);
  $('dotLounge')?.classList.toggle('active', !isWorkspace);
}

function switchOfficeMode(mode: '2D' | '3D') {
  const is3D = mode === '3D';
  $('toggleView2D')?.classList.toggle('active', !is3D);
  $('toggleView3D')?.classList.toggle('active', is3D);
  show('virtualOffice2DStage', !is3D);
  show('virtualOffice3DStage', is3D);
  show('roomNavControlWrap', !is3D);
  show('roomNavDotsWrap', !is3D);

  const stage3D = $('virtualOffice3DStage');
  if (is3D) {
    if (!office3DInitialized && window.Office3D && stage3D) {
      window.Office3D.init(stage3D, (station) => openDossierModal(station.id));
      office3DInitialized = true;
    }
    updateClockAndLighting();
  }
}

function openDossierModal(agentId: string) {
  const agent = agents.find((a) => a.id === agentId);
  const modal = $('stationDetailModal');
  if (!agent || !modal) return;

  const text: Record<string, string> = {
    modalAvatar: agent.avatar,
    modalAgentName: agent.name,
    modalAgentRole: agent.role,
    modalStateVal: agent.state,
    modalRoomVal: `${agent.room} (Desk #${agent.seat})`,
    modalModelVal: agent.model,
    modalCurrentTask: agent.currentTask,
    modalRecentActivity: agent.recentActivity,
    modalMission: agent.mission,
  };
  for (const [id, value] of Object.entries(text)) {
    const el = $(id);
    if (el) el.textContent = value;
  }
  setHtml(
    'modalSkills',
    html`${agent.skills.map((s) => html`
      <span class="badge" style="background: rgba(56, 189, 248, 0.15); color: #38bdf8; border: 1px solid rgba(56, 189, 248, 0.3); font-size: 11px;">#${s}</span>`)}`,
  );
  modal.style.display = 'flex';
}

function closeDossierModal() {
  const modal = $('stationDetailModal');
  if (modal) modal.style.display = 'none';
}

async function refreshAndRender() {
  await refreshLiveState();
  renderOffice2D();
  switchRoom(currentRoom);
  updateClockAndLighting();
}

// --- Init (module scripts run after the document is parsed) ---------------------------------

renderOffice2D();
updateClockAndLighting();
updateHudStatus(null);
refreshAndRender();

setInterval(updateClockAndLighting, 5000);
setInterval(updateFreshness, 5000);
setInterval(refreshAndRender, REFRESH_INTERVAL_MS); // aligned with the API's 30s TTL

const agentTarget = (e: Event) => (e.target as Element).closest<HTMLElement>('[data-agent-id]')?.dataset.agentId;
document.addEventListener('click', (e) => {
  const id = agentTarget(e);
  if (id) openDossierModal(id);
});
document.addEventListener('keydown', (e) => {
  const id = (e.key === 'Enter' || e.key === ' ') && agentTarget(e);
  if (id) {
    e.preventDefault();
    openDossierModal(id);
  }
  if (e.key === 'Escape') closeDossierModal();
});

const toggleRoom = () => switchRoom(currentRoom === 'workspace' ? 'lounge' : 'workspace');
$('officeNavPrev')?.addEventListener('click', toggleRoom);
$('officeNavNext')?.addEventListener('click', toggleRoom);
$('dotWorkspace')?.addEventListener('click', () => switchRoom('workspace'));
$('dotLounge')?.addEventListener('click', () => switchRoom('lounge'));
$('toggleView2D')?.addEventListener('click', () => switchOfficeMode('2D'));
$('toggleView3D')?.addEventListener('click', () => switchOfficeMode('3D'));
$('closeStationModalBtn')?.addEventListener('click', closeDossierModal);
$('stationDetailModal')?.addEventListener('click', (e) => {
  if ((e.target as HTMLElement).id === 'stationDetailModal') closeDossierModal();
});
$('refreshOfficeBtn')?.addEventListener('click', refreshAndRender);

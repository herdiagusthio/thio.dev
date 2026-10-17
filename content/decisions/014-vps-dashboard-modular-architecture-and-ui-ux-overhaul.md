# ADR 014: VPS Dashboard Modular Architecture, Host-Aware Sentinel & UI/UX Overhaul

- **Date:** 2026-10-17
- **Status:** Accepted & Implemented (2026-10-17)
- **Authors:** Prime (`prime`) & Antigravity (`agy`)
- **Approved By:** Thio (Founder)

---

## Context
`vps-dashboard` (`~/code-storage/vps-dashboard`, serving `https://vps.103.217.144.64.nip.io` on `127.0.0.1:3030`) acts as the unified mission control plane for `HermesHost` and the 7-agent AI organization (`LEADYA`, `Prime`, `Antigravity`, `Sysca`, `Luna`, `Lexa`, `Caren`).

During a comprehensive backend and UI/UX audit, we identified several structural gaps:
1. **Memory Sentinel Blindspot (`lib/sentinel.ts`):** The sentinel only monitored `process.memoryUsage().rss` (`~49 MB`) against `384 MB` / `450 MB` thresholds. It never checked host available memory (`/proc/meminfo` `MemAvailable`), meaning host RAM could drop below our `500 MB` invariant while `alertLevel` remained `"normal"`.
2. **Sequential Subprocess Bottleneck (`/api/services`):** Querying systemd service status spawned sequential subprocesses per service (`~3.5s` latency) and omitted systemd cgroup memory limits (`MemoryCurrent`, `MemoryHigh`, `MemoryMax`).
3. **Roster Drift (`gosenior` / `pixel`):** Both `lib/comms.ts` and the Agent Comms UI (`public/index.html`, `public/js/app.js`) still referenced retired agents (`Goder` and `Pixel`) instead of `Antigravity (AGY)` and `Caren`, and the Virtual Office HTML hardcoded `"9 crew members"`.
4. **Frontend UX Friction:**
   - 10 flat sidebar tabs + 7 buried subtabs with broken URL `#hash` restoration on page reload.
   - Global `#refreshBtn` only refreshed the process table (`loadProcesses()`) regardless of which tab the operator was viewing.
   - `setInterval(loadProcesses, 8000)` polled unconditionally even when `#tab-system` was inactive or `document.hidden` was true.
   - Native blocking `window.prompt()` / `window.confirm()` dialogs for editing `.env` secrets and confirming actions.
   - Unescaped DOM strings (`p.command`, `v.value`) and missing Kanban drag-and-drop / keyboard navigation (`Cmd+K`).

---

## Decision
1. **Host-Aware Memory Sentinel (`lib/sentinel.ts`):**
   - Combine `/proc/meminfo` (`MemAvailable`, `MemTotal`) with `process.memoryUsage().rss` and systemd cgroup limits (`MemoryHigh=160M`, `MemoryMax=200M`).
   - Trigger `"warning"` when host available RAM `< 500 MB` (or process RSS `> 150 MB`) and `"critical"` when host available RAM `< 350 MB` (or process RSS `> 185 MB`).
2. **Parallel Systemd Telemetry & Hardening Observability:**
   - Parallelize `/api/services` status queries via `Promise.all` (`< 250ms` response time) and surface per-service `MemoryCurrent`, `MemoryHigh`, and `MemoryMax` cgroup progress bars in the UI.
   - Expose TCP congestion control (`bbr`), `earlyoom`, and `fail2ban` status in `/api/system`.
3. **Full 7-Agent Roster Synchronization:**
   - Standardize `AGENT_META`, quick filter chips, Comms stat cards, and Virtual Office counters on the 7 active agents (`root`, `prime`, `agy`, `infraguard`, `luna`, `lexa`, `caren`), while retaining read-only display labels for historical `gosenior`/`pixel` database rows.
4. **Operator-First UI/UX Overhaul:**
   - Group sidebar navigation into **AI Command**, **Platform & Hub**, and **VPS Operations**.
   - Implement full URL `#hash` routing (`#kanban`, `#office`, `#hermes/comms`) on initial load and `hashchange`.
   - Make `#refreshBtn` refresh the active tab and pause background polling when `document.hidden` or tab is inactive.
   - Replace `window.prompt()` / `window.confirm()` with in-app glassmorphic modals (`#cyberDialogModal`), escape all dynamic DOM fields (`escapeHtml`), add Kanban HTML5 drag-and-drop + search filtering, and provide a `Cmd/Ctrl + K` command palette.

---

## Consequences
- **Positive:**
  - Real-time alignment with the `>= 500 MB` host RAM invariant and systemd cgroup memory caps.
  - `>10x` faster `/api/services` loading (`~3.5s` → `<250ms`) and lower background CPU/network overhead when switching tabs.
  - Zero dead agent references, bookmarkable/refresh-safe tab URLs, drag-and-drop Kanban workflow, and keyboard-first `Cmd+K` navigation.
- **Risks & Mitigations:**
  - UI/JS refactoring could introduce regressions if not snapshot-protected. Mitigated via pre-execution git tag `pre-overhaul-20261017`, saved working-tree diff patch, automated `rollback.sh`, and `bun test` + `sdlc-scanner.sh` gates.

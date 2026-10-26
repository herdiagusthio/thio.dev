# thio.dev homepage narrative package

Status: draft copy and taxonomy. Scope: content only; no production code changes.

## Positioning

**Short:** Engineering systems, decisions, and working notes by Herdi Agusthio.

**Hero headline:** I build backend systems, then write down why they work.

**Hero body:** Software engineer and systems architect working across high-concurrency Go services, distributed systems, infrastructure, and autonomous engineering workflows. This site is the notebook: shipped systems, architectural decisions, and lessons from operating them.

**Primary actions:** `Explore systems` → `/showcase` · `Read the notebook` → `/blog`

**Optional status line:** `ENGINEERING NOTEBOOK / SYSTEMS IN PROGRESS`

**Avoid:** unverified seniority, employer history, years of experience, uptime, throughput, memory, or fleet-size claims in the hero. Existing repository copy mentions Flip, ByteDance, Tokopedia, GoTo, and “nearly a decade”; confirm current public wording before retaining.

## Principles

1. **Evidence before adjectives.** Each capability points to code, a case study, or an ADR.
2. **Boundaries earn their keep.** Keep domain logic independent from transport, storage, and orchestration concerns.
3. **Boring is a feature.** Prefer designs that remain understandable during incidents and handoffs.
4. **Make trade-offs explicit.** Record why a system is shaped this way, not only what it does.
5. **Operate within constraints.** Resource budgets, security boundaries, and rollback paths belong in the design.
6. **Verify the change.** Tests, review, and observable failure modes are part of delivery.

## Featured systems

Use cards with the contract below. Keep facts attached to repository evidence; show “metric pending confirmation” rather than a number.

### Flight Search Aggregator
**One-line:** A Go scatter-gather engine for aggregating flight search results.
**Evidence:** `content/engineering/gold-standard-flight-aggregation.md`, `content/engineering/scatter-gather-aggregation.md`, `execution-plans/flight-search/plan`.
**Tags:** `go` `concurrency` `distributed-systems` `aggregation`
**Metric:** Confirm production status, latency, throughput, provider count, and repository URL before publishing.

### Hexagonal Domain Refactor
**One-line:** A refactor that keeps domain rules separate from adapters and delivery mechanisms.
**Evidence:** `content/engineering/gold-standard-hexagonal-refactor.md`, `content/engineering/preventing-domain-leakage.md`, `content/engineering/primitive-obsession-hexagonal.md`.
**Tags:** `architecture` `ddd` `hexagonal` `domain-design`
**Metric:** No metric claim proposed; confirm project scope and shipped status.

### cbmem
**One-line:** A queryable codebase-impact memory layer connecting symbols, dependencies, and architectural decisions.
**Evidence:** second-brain `execution-plans/codebase-memory-system/task_plan`, `progress`; repository reference in brain: `https://github.com/herdiagusthio/cbmem/releases/tag/v0.1.0`.
**Tags:** `go` `sqlite` `code-intelligence` `developer-tools`
**Known fact:** brain records v0.1.0, 11M binary, `vet 0`, and an internal progress entry with `flight-search-system: 300 symbols 124 edges 40 files <1s`; confirm whether these are public, current, and safe to expose.

### Autonomous Engineering Office
**One-line:** A public, sanitized view of an autonomous engineering workflow, with 2D and 3D telemetry surfaces.
**Evidence:** `content/engineering/autonomous-agent-office.md`, `/office`, second-brain `knowledge/engineering/autonomous-agent-office`, ADR 015.
**Tags:** `agents` `telemetry` `threejs` `observability`
**Metric:** Do not publish roster count or memory-headroom claims until Prime confirms the current data contract; source documents conflict between 7-agent and 8-agent descriptions.

## Engineering timeline

Use an evidence-led timeline. Dates below are content/repository dates, not employment history.

- **2025-06 → 2025-08 — Writing foundations:** published reflections on engineering craft, learning, architecture, Go concurrency, and distributed systems. Evidence: `content/blog/`.
- **2026-07-19 — Durable knowledge:** ADR 001 records Git + Markdown for the second brain. Evidence: `content/decisions/001-use-git-markdown-for-second-brain.md`.
- **2026-07-25 — Site architecture:** ADR 002 defines thio.dev as a personal engineering platform and system console; later superseded. Evidence: second-brain `decisions/002-personal-website-architecture`.
- **2026-09-14 — Codebase memory:** cbmem implementation plan/progress records the codebase-impact graph and language indexers. Evidence: second-brain `execution-plans/codebase-memory-system/*`.
- **2026-10-02 — Public office concept:** second-brain records the autonomous multi-agent office and telemetry architecture. Evidence: `content/engineering/autonomous-agent-office.md`.
- **2026-10-17 — Site reader/system work:** ADR 015 records resilient content parsing, JSON-LD, reader UX, and sanitized office sync. Evidence: second-brain `decisions/015-thio-dev-architecture-seo-jsonld-and-live-office-sync`.

Do not label these as roles, employers, launches, or production milestones without confirmation.

## Writing taxonomy

Primary sections:

- **Systems** — architecture, distributed systems, concurrency, persistence, integration patterns.
- **Operations** — VPS, Linux, systemd, resource limits, deployment, observability, recovery.
- **Agents** — autonomous workflows, orchestration, context, verification, human/agent boundaries.
- **Decisions** — ADRs, trade-offs, constraints, reversals, and consequences.
- **Craft** — debugging, testing, refactoring, domain modeling, engineering judgment.
- **Career notes** — reflective writing about learning and software work; keep distinct from technical case studies.

Recommended metadata shape for Prime’s content/data contract:

```yaml
kind: blog | engineering | decision
category: systems | operations | agents | decisions | craft | career
status: draft | published | accepted | superseded
featured: false
summary: string
problem: string
decision: string
outcome: string
constraints: [string]
evidence: [{ label: string, url: string }]
metric_status: confirmed | pending
```

Compatibility: existing collections use `title`, `date`, `tags`, `status`, `summary`; new fields should be optional and additive. Prime should own schema validation and mapping. Homepage cards should consume normalized fields, not parse body text.

## About / contact

**About:** I am Herdi Agusthio, a software engineer focused on backend systems, architecture, and the practical work around operating software. thio.dev collects the public trail: systems I have built or studied, decisions behind them, and notes written while learning. The goal is not a résumé mirror. It is a compact record of engineering judgment.

**Contact:** For architecture work, backend systems, infrastructure, or a technical conversation, reach out through the public channel linked below. Include the problem, constraints, and what has already been tried.

**Contact CTA:** `Start a technical conversation` → **[CONFIRM PUBLIC CONTACT URL]**

**Do not publish yet:** employer list, exact tenure, location, personal/family details, email address, or social handles until confirmed by Thio.

## Prime coordination / component contract

Prime owns the engineering component/data contract. Content package supplies normalized narrative fields only. Required homepage view-model fields:

```ts
type HomepageNarrative = {
  hero: { eyebrow: string; title: string; body: string; actions: { label: string; href: string }[] };
  principles: { title: string; body: string; evidence?: string }[];
  systems: { slug: string; title: string; summary: string; tags: string[]; href: string; evidence: { label: string; href: string }[]; metricStatus: 'confirmed' | 'pending' }[];
  timeline: { date: string; title: string; summary: string; evidence: { label: string; href: string }[] }[];
  writingCategories: { slug: string; label: string; description: string; href: string }[];
  about: { body: string; contactLabel: string; contactHref: string | null };
};
```

Rules: no invented metrics; null contact until confirmed; preserve existing route names; Prime maps `kind` to collection and handles missing optional fields.

## Unresolved fact questions

1. What exact public title should replace “Software Engineer & Systems Architect”? Is “Principal” approved?
2. Are Flip, ByteDance, Tokopedia, and GoTo current, public, and ordered correctly?
3. Is the public contact URL an email, GitHub, LinkedIn, or form? Is direct email allowed?
4. Which systems are shipped, prototypes, internal tools, or architectural studies?
5. Which cbmem figures are public and current: v0.1.0, 11M binary, `vet 0`, 300 symbols, 124 edges, 40 files, `<1s`?
6. What is the canonical current agent roster? Source documents conflict on seven versus eight; should the homepage show roles, names, or only “agent workflows”?
7. Is `RAM >= 500 MB` a current public invariant? Confirm before publishing.
8. What canonical production URL should evidence links use: `thio.dev`, current nip.io host, GitHub repositories, or second-brain links?
9. Which timeline entries represent public work versus internal planning? Confirm before using “built,” “shipped,” or “production.”

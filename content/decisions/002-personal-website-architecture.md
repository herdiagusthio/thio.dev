# ADR: 002: Personal Website Concept & Architecture
- **Date:** 2026-07-25
- **Status:** Proposed

## Context
Thio (Herdi Agusthio) wants to design and build a personal website that is highly unique, personal, and represents his background as a backend engineer operating in the fintech/AI sector. The site should be cost-effective ($0 hosting on platforms like Vercel or GitHub Pages) and act as a professional developer profile that avoids generic resume templates. Family details are excluded from the public scope for privacy.

## Alternatives Considered
- **Generic resume/portfolio template:** Rejected — fails the "highly unique and personal" requirement; blends in with every other developer profile.
- **Blog-only site:** Rejected — good for writing but weak at showcasing engineering decisions and system thinking at a glance.
- **Interactive dashboard from scratch (custom backend):** Rejected for v1 — conflicts with the $0-hosting constraint and adds an operational/security burden not justified for a personal profile.

## Decision
We proposed the **"System Changelog & Telemetry Console"** architecture — a static, three-column developer profile whose content is generated at build time from markdown.

### Technical Decisions
- **Hosting & build target:** Static site (SSG). Primary target is **GitHub Pages** to guarantee $0 hosting; Vercel is an acceptable fallback. No runtime server.
- **Content source:** The changelog/learning feed is generated **at build time** from markdown logs (journal/learning-log entries) in a dedicated public content path — never from the private second-brain notes. This keeps a hard boundary between public and private content.
- **Telemetry panel:** Rendered as **static illustration** (curated snapshot data committed to the repo), *not* live infrastructure metrics. This avoids exposing a real API/endpoint and the associated security surface, while preserving the visual concept.

### Key Components
1. **System Telemetry Panel (Left column):** A stylized, static illustration of the tech stack (e.g. VPS, Docker Swarm, Go/Fiber services) as a personal-branding motif. Includes a signature accent-color theme switcher; the specific hex value is a personal branding accent to be finalized during design.
2. **Dynamic Changelog & Learning Feed (Center column):** The main portfolio interface. Instead of a static "About Me", it displays a chronological feed of logged problems, evidence-based evaluations, and architectural resolutions, parsed at build time from public markdown logs.
3. **Architecture Blueprint (Right column):** Visualizes clean-code architecture layers and links to short articles on comparative religion, philosophy, and ethics.

## Consequences
- **Pros:**
  - Highlights precise engineering decisions, structured logic, and evidence-based analysis.
  - Easy to update by pushing markdown files — no CMS or manual HTML.
  - 100% cost-free hosting with full version history via Git.
  - Static-only design keeps the public/private content boundary and attack surface minimal.
- **Cons:**
  - Requires consistent log updates to keep the portfolio feed active.
  - Couples the site's build pipeline to the markdown log format; format changes require build-script updates.
  - Static telemetry must be refreshed manually to stay representative.

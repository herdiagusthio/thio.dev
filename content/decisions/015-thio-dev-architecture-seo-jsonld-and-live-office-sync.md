# ADR 015: `thio.dev` Content Sync Resilience, AI SEO (JSON-LD) & Reader UX Overhaul

- **Date:** 2026-10-17
- **Status:** Accepted
- **Authors:** Prime (`prime`), Antigravity (`agy`), Lexa (`lexa`), Luna (`luna`)
- **Approved By:** Thio (Founder)

## Context
`thio.dev` (`https://thio.103.217.144.64.nip.io`) is Herdi Agusthio's static engineering platform served by Caddy from `/var/www/thio.dev` (`0 MB` runtime memory overhead). During our October 17, 2026 deep review, we identified several structural gaps:
1. **Unprotected Static App Directory (`/k8s`)**: `k8s/index.html` (`KubeQuest`) existed at the repository root instead of `public/k8s/index.html`, meaning `./ship.sh` (`rsync -avz --delete dist/ /var/www/thio.dev/`) would delete `/var/www/thio.dev/k8s/` on deployment.
2. **Rigid Frontmatter ADR Parsing**: `src/lib/feed.ts` and `src/pages/decisions/[slug].astro` ignored ADRs whose status (`## Status\nAccepted` or `- **Status:** Accepted`) and title (`# ADR ...`) were declared in Markdown rather than YAML frontmatter, silently dropping ADRs `008` through `014`.
3. **Missing AI SEO & JSON-LD Schema**: Pages lacked `<script type="application/ld+json">` (`WebSite`, `Person`, `BlogPosting`, `TechArticle`), canonical URLs, and OpenGraph metadata.
4. **7-Agent Roster & Live Office Telemetry Alignment**: `thio.dev/office` and `src/lib/telemetry.ts` still referenced `8 ACTIVE` agents and retired profiles (`Goder`, `Pixel`), and required the sanitized `/api/public/office` endpoint on `vps-dashboard` (`127.0.0.1:3030`).
5. **Reader & Discovery UX**: Markdown tables lacked CSS styling in `.prose`, `/showcase` lacked an ADR index and links to interactive labs (`/office`, `/k8s`), and articles lacked reading time, progress bars, and copy-code buttons.

## Decision
1. **Static Asset Safety**: Move `k8s/index.html` into `public/k8s/index.html` so Astro bundles it into `dist/k8s/index.html` on every build. Prune broken/unused files (`src/pages/admin/curate.astro`, `scripts/promote.*`, `src/content.config.ts`).
2. **Resilient Second-Brain Parser (`src/lib/feed.ts`)**: Parse both YAML frontmatter and Markdown heading/bullet metadata (`# Title`, `- **Date:**`, `- **Status:**`, `## Status`) and compute reading time (`readingTimeMinutes`) across all blog posts, engineering case studies, and ADRs.
3. **Structured AI SEO (`src/components/SeoHead.astro`)**: Emit JSON-LD schema (`Person`, `WebSite`, `BlogPosting`, `TechArticle`), OpenGraph tags, and canonical URLs on every route.
4. **Sanitized Live Office Endpoint (`GET /api/public/office`)**: Expose a read-only, sanitized 7-agent snapshot in `vps-dashboard` with CORS restricted to `https://thio.103.217.144.64.nip.io` and align `thio.dev/office` with the 7-agent organization.
5. **Reader & Discovery UX**: Add client-side search & tag filtering on `/blog` and `/showcase`, surface Interactive Labs (`/office`, `/k8s`) and the full ADR catalog on `/showcase`, and add table styling, reading progress bar, copy-code buttons, and prev/next navigation to all article pages.

## Consequences
- **Zero Runtime RAM Impact**: All SEO, JSON-LD, and content enhancements compile at build time into static HTML served by Caddy (`0 MB` daemon RAM).
- **100% Second-Brain Visibility**: Every accepted ADR (`001`–`015`) and published blog post in `second-brain` automatically syncs and renders on `thio.dev`.

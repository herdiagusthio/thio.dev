# `thio.dev` — Personal Engineering Console, Blog, Showcase & Live Agent Office

Static engineering platform, architecture lab, and live 2D/3D Agent Command Bridge for **Herdi Agusthio**, built with **Astro 7 SSG** and served directly by **Caddy** from `/var/www/thio.dev` (`0 MB` runtime daemon memory).

---

## 🌐 Live Public Routes

- **System Console (Home)**: [`https://thio.103.217.144.64.nip.io/`](https://thio.103.217.144.64.nip.io/)
- **Engineering Blog & Reflections**: [`/blog`](https://thio.103.217.144.64.nip.io/blog) · RSS: [`/rss.xml`](https://thio.103.217.144.64.nip.io/rss.xml)
- **Architecture Showcase, Labs & ADRs**: [`/showcase`](https://thio.103.217.144.64.nip.io/showcase)
- **Autonomous 7-Agent Command Bridge (2D/3D Live Office)**: [`/office`](https://thio.103.217.144.64.nip.io/office)
- **KubeQuest Interactive Kubernetes Odyssey**: [`/k8s/`](https://thio.103.217.144.64.nip.io/k8s/)
- **Sanitized Public Telemetry Bridge API**: [`https://api.thio.103.217.144.64.nip.io/office`](https://api.thio.103.217.144.64.nip.io/office)
- **Crawlers**: [`/sitemap-index.xml`](https://thio.103.217.144.64.nip.io/sitemap-index.xml) · [`/robots.txt`](https://thio.103.217.144.64.nip.io/robots.txt)

---

## 🛠️ Commands

```bash
npm run dev      # sync content from ../second-brain, then astro dev
npm run build    # sync content from ../second-brain, astro build, then verify dist/ CSP
npx astro build  # build from the current content/ without re-syncing
SECOND_BRAIN_DIR=fixtures/second-brain npm run dev   # no second-brain checkout: sample content
npm run check    # astro check (type errors)
npm test         # node:test unit tests (sync allowlist, text helpers, office data)
./ship.sh        # VPS deploy: npm ci → test → build → verify → rsync to /var/www/thio.dev → smoke check
```

CI (`.github/workflows/ci.yml`) runs `npm ci`, `check`, `test` and `build` on every push and PR, building from the sample second-brain in `fixtures/second-brain/`, and fails if any of its `PRIVATE-FIXTURE` files reaches `dist/`. It does not deploy: only `ship.sh` builds the real site from second-brain.

## 📝 Content Flow

```
second-brain (private) ──sync allowlist──▶ content/ (generated, git-ignored) ──content collections──▶ static pages
```

- `scripts/sync-content.mjs` copies a file only when its YAML frontmatter `status` is public: `published` for `knowledge/blog` and `knowledge/engineering`, `accepted` or `superseded` for `decisions`, which must also be numbered ADRs (`NNN-*.md`; pipeline tickets like `sdlc-*` never sync). Everything else stays private and is pruned from `content/`.
- `src/content.config.ts` enforces the frontmatter: `title`, `date` (`YYYY-MM-DD`), `tags` (at least one), `status`, and for blog posts and case studies a `summary` of at least 40 characters. Optional: `lang: id` for Indonesian posts, `featured: true` for homepage case studies. Bad frontmatter fails the build.
- Write content in second-brain, never directly in `content/` — the sync deletes anything that is not in the source.
- `/infrastructure` reads `content/infrastructure.json`, which the sync rewrites on every run from `infrastructure/catalog.json` through `sanitizeCatalogForPublic`. It builds each field from an allowlist: apps with `visibility: public` get a full card, `internal` ones only their name, purpose and stack, and anything else is left out. No IPs, paths, kernel, or table and column names. A missing catalog gives an empty page; a malformed one fails the sync.

**Release order:** when a change needs second-brain frontmatter (e.g. a new required field), merge and pull second-brain on the VPS before shipping thio.dev, otherwise the build fails on the affected entries.

## 🧊 3D Office Bundle

`public/js/office3d.bundle.js` is prebuilt from the sibling `vps-dashboard` repo:

```bash
cd ../vps-dashboard && bun run build:3d   # src/office3d.ts → public/js/office3d.bundle.js
cp public/js/office3d.bundle.js ../thio.dev/public/js/
```

It exposes `window.Office3D.{init, update, destroy}`; `src/scripts/office.ts` loads it on the first switch to 3D and drives it with validated agents (labels are written with `textContent`). The toolbar's icons come from the `#i-*` sprite in `src/pages/office.astro`: if a new build uses another `spriteIcon('<name>')`, copy that `<symbol>` from vps-dashboard's `public/index.html`.

## ✅ Verify Live

`ship.sh` ends with `scripts/smoke-check.sh`: every page in `dist/`'s sitemap plus the RSS, robots, sitemap index, `/k8s/`, og image and 3D bundle must return 200 from the live site, and the live homepage must be byte-identical to `dist/index.html` (so Caddy is serving this build). Re-run it on the VPS after a deploy, or pass a base URL that serves `dist/` as-is (e.g. `python3 -m http.server 8000 -d dist`, then `scripts/smoke-check.sh http://localhost:8000`; `astro dev`/`preview` inject scripts, so the homepage check fails there).

```bash
curl -s https://api.thio.103.217.144.64.nip.io/office | jq .summary   # live office API
```

### Content-Security-Policy (CSP)

- Astro 7's `security.csp` (`astro.config.mjs`) emits `<meta http-equiv="content-security-policy">` in every built page's `<head>`, and standalone `public/k8s/index.html` carries its own hashed `<meta http-equiv="content-security-policy">` policy using delegated click listeners instead of inline `onclick=` attributes.
- `node scripts/verify-csp.mjs` runs automatically at the end of `npm run build` to verify `src/**/*.astro` (no `<script is:inline>`, no unhoisted executable scripts, no inline `on*=` handlers) and every `dist/**/*.html` file against the target directives (requiring `dist/index.html` and `dist/k8s/index.html`, rejecting unhashed inline scripts, `'unsafe-inline'`/`'unsafe-eval'` in `script-src`, or inline `on*=` attributes), then prints the canonical Caddy header.
- Per the W3C CSP specification, browsers enforce `frame-ancestors 'none'` only via HTTP response headers (while `<meta>` enforces all other directives). Configure Caddy with the exact `header Content-Security-Policy "..."` directive printed by `node scripts/verify-csp.mjs`:

```caddyfile
header Content-Security-Policy "default-src 'self'; img-src 'self' data:; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'; font-src 'self'; script-src 'self' 'sha256-toBSqga4y2QKBsOaasMfwRpPkvwfaNppkcU/NwGe3co=' 'sha256-7/JBIo5kGUP/NlQQfBSkn5nCaltLDEHZDWhfk8BR8AM=' 'sha256-/RlTZ7FXuzPC/nCKIhm1+lPF+/fly1fx75EsKyucWCs=' 'sha256-xIb/Pa7FUshAu4ihwjchYcQpyCI8eS8kt40GpOAYCz8=' 'sha256-1BvDVWLr3QCC20uHhUDi27eDFVJpk1uMQJGIWKUks2I=' 'sha256-kmZE/W8I1iuTnl1b3yqzv9/DQZenPngd3NjSKMQl7y0=' 'sha256-Y8t0ntteBwH+PqGKUyjWW3CAk+BNJKSoQc0xZ68FjhM=' 'sha256-0O7iB6zr9x0r6X6eWYITC9V5q+yWCGAoFvcysBGbY9Q='; style-src 'self' 'unsafe-inline'"
```

Security & quality gate: `/home/thiohermes/.hermes/scripts/sdlc-scanner.sh ~/code-storage/thio.dev`

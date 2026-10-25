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
npm run build    # sync content from ../second-brain, then astro build
npx astro build  # build from the committed content/ without syncing
npm run check    # astro check (type errors)
npm test         # node:test unit tests (sync allowlist, text helpers, office data)
./ship.sh        # VPS deploy: npm ci → test → build → verify → rsync to /var/www/thio.dev → smoke check
```

CI (`.github/workflows/ci.yml`) runs `npm ci`, `check`, `test` and `build` on every push and PR. It does not deploy: only `ship.sh` builds from fresh second-brain content.

## 📝 Content Flow

```
second-brain (private) ──sync allowlist──▶ content/ (committed) ──content collections──▶ static pages
```

- `scripts/sync-content.mjs` copies a file only when its YAML frontmatter `status` is public: `published` for `knowledge/blog` and `knowledge/engineering`, `accepted` or `superseded` for `decisions`. Everything else stays private and is pruned from `content/`.
- `src/content.config.ts` enforces the frontmatter: `title`, `date` (`YYYY-MM-DD`), `tags` (at least one), `status`; `summary` is optional. Bad frontmatter fails the build.
- Write content in second-brain, never directly in `content/` — the sync deletes anything that is not in the source.

**Release order:** when a change needs second-brain frontmatter (e.g. a new required field), merge and pull second-brain on the VPS before shipping thio.dev, otherwise the affected entries are skipped.

## 🧊 3D Office Bundle

`public/js/office3d.bundle.js` is prebuilt from the sibling `vps-dashboard` repo:

```bash
cd ../vps-dashboard && bun run build:3d   # src/office3d.ts → public/js/office3d.bundle.js
cp public/js/office3d.bundle.js ../thio.dev/public/js/
```

It exposes `window.Office3D.{init, update, destroy}`; `src/scripts/office.ts` drives it with validated agents (labels are written with `textContent`). The toolbar's icons come from the `#i-*` sprite in `src/pages/office.astro`: if a new build uses another `spriteIcon('<name>')`, copy that `<symbol>` from vps-dashboard's `public/index.html`.

## ✅ Verify Live

`ship.sh` ends with `scripts/smoke-check.sh`: every page in `dist/`'s sitemap plus the RSS, robots, sitemap index, `/k8s/`, og image and 3D bundle must return 200 from the live site, and the live homepage must be byte-identical to `dist/index.html` (so Caddy is serving this build). Re-run it on the VPS after a deploy, or pass a base URL that serves `dist/` as-is (e.g. `python3 -m http.server 8000 -d dist`, then `scripts/smoke-check.sh http://localhost:8000`; `astro dev`/`preview` inject scripts, so the homepage check fails there).

```bash
curl -s https://api.thio.103.217.144.64.nip.io/office | jq .summary   # live office API
```

Security & quality gate: `/home/thiohermes/.hermes/scripts/sdlc-scanner.sh ~/code-storage/thio.dev`

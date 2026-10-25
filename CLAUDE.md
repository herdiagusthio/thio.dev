# thio.dev

Astro 7 static site — Herdi Agusthio's personal engineering console (blog, case studies, ADRs, live agent office). Output is plain HTML served by Caddy from `/var/www/thio.dev` on a VPS; no server runtime. See README.md for routes and commands.

## Commands

- `npm run build` / `npm run dev` run `scripts/sync-content.mjs` first, which mirrors `../second-brain` (or `$SECOND_BRAIN_DIR`) into `content/` and **deletes** `content/**/*.md` not public in the source. Use `npx astro build` to build without touching `content/`.
- `npm run check` (astro check) and `npm test` (node:test over `scripts/*.test.mjs`, `src/**/*.test.ts`) must stay green; CI runs both plus the build. CI never deploys — `./ship.sh` on the VPS does, then runs `scripts/smoke-check.sh` (every sitemap page returns 200 live, and the live homepage is byte-identical to `dist/index.html`).

## Content pipeline

- Privacy boundary = the sync allowlist (`isPublic` in `scripts/sync-content.mjs`): frontmatter `status: published` (blog, engineering) or `accepted|superseded` (decisions). `content/` is committed to a public repo, so keep it fail-closed.
- Quality gate = `src/content.config.ts` (glob-loader collections, strict schema: `title`, `date` YYYY-MM-DD, `tags` ≥1, `status`). Fix bad frontmatter in second-brain, not in `content/`.
- `src/lib/content.ts` `getEntries(kind)` is the only content API (view model + per-kind summary fallback); pure helpers live in `src/lib/text.ts` so node:test can import them without `astro:*`.
- Markdown uses Astro's Satteri processor with an mdast plugin dropping the body's first H1 (`astro.config.mjs`); smart punctuation and syntax highlighting are off on purpose.
- Routes: `blog/[slug]` ← blog, `showcase/[slug]` ← engineering, `decisions/[slug]` ← decisions; all render through `src/layouts/ArticleLayout.astro`. Every page uses `src/layouts/BaseLayout.astro`.

## Office page

- `src/scripts/office.ts` (bundled module) renders the 2D office; data comes from `src/data/agents.ts` (single roster, also used by /about) and the live API `https://api.<site host>/office`, validated by `normalizeSnapshot` in `src/scripts/office-data.ts`.
- All HTML built from data must go through the `html` tag in `office-data.ts` (escapes every interpolation); colors are hex-validated because they land in `style`; `id`/`state` must be identifiers. Clicks use `data-agent-id` delegation — no inline handlers.
- The 3D bundle writes agent labels with `textContent`; its toolbar icons need the matching `#i-<name>` symbols in the sprite in `office.astro` (copied from vps-dashboard's `public/index.html`).
- The API only allows the production origin (CORS), so local runs show the static fallback; mock `fetch` to test live mode.
- `public/js/office3d.bundle.js` is prebuilt from `../vps-dashboard` (`bun run build:3d`); `public/k8s/index.html` is a standalone game.

## Config

- `site` in `astro.config.mjs` (override `SITE_URL`) is the single origin: canonicals, JSON-LD, sitemap, RSS and the office API host derive from it. Canonical URLs have no trailing slash; the sitemap and RSS match.
- Blog-post voice and structure: `.agents/skills/tulisan-si-thio/SKILL.md`.

# thio.dev

Astro 7 static site — Herdi Agusthio's personal engineering console (blog, case studies, ADRs, live agent office). Output is plain HTML served by Caddy from `/var/www/thio.dev` on a VPS; no server runtime.

## Commands

- `npm run build` — runs `scripts/sync-content.mjs` first: mirrors `../second-brain` (or `$SECOND_BRAIN_DIR`) into `content/` and **deletes** any `content/**/*.md` not present in the source. To build without touching `content/`: `npx astro build`.
- `npm run check` — `astro check`. Only known errors are in `src/lib/links.ts` (dead code, see below).
- `./ship.sh` — the real deploy path: build, verify `dist/index.html` + `dist/k8s/index.html`, rsync to `/var/www/thio.dev`. Run on the VPS.
- `.github/workflows/deploy.yml` is broken: pnpm with no `pnpm-lock.yaml`, Node 20 (Astro needs >=22.12), no deploy step. The working npm/Node 22/scp version is in commit `a026a4d`.

## Content pipeline

- `content/` is generated from second-brain but committed, so builds work when the sibling repo is absent.
- `src/lib/feed.ts` is the only content layer: reads `content/*` with `fs` at build time, gray-matter for frontmatter, marked for HTML. Astro content collections are **not** used — `src/lib/links.ts` and `src/lib/schema.ts` import `astro:content` but nothing imports them.
- Routes: `blog/[slug]` ← `content/blog`, `showcase/[slug]` ← `content/engineering`, `decisions/[slug]` ← `content/decisions`. `content/journal` is synced but never rendered (`parseJournal`/`getFeed` have no callers).
- Metadata fallback order: frontmatter → `- **Status:**` / `- **Date:**` bullets → `## Status` section → first `202x-xx-xx` anywhere in the body → file mtime. The sync's `copyFileSync` resets mtime, so an undated file gets re-dated to the build day — always set `date:` in frontmatter.
- Decisions: `000-*` and `goai-*` are skipped; numbered `0NN-*` files are always shown unless status contains `internal`/`rejected`; every shown ADR is labelled "Accepted".

## Pages worth knowing

- `src/pages/office.astro` — client-side app: fetches `https://api.thio.103.217.144.64.nip.io/office` every 30s, spreads live stations over `STATIC_AGENTS`, renders with `innerHTML`. Pass every API field through the script's `escapeHtml` before interpolating.
- `public/js/office3d.bundle.js` — prebuilt Three.js bundle exposing `window.Office3D.{init,update,destroy}`; its source lives outside this repo. `public/k8s/index.html` — standalone KubeQuest game, served as-is.
- Canonical origin is hardcoded in `src/components/SeoHead.astro` (`siteOrigin`). `astro.config.mjs` `site` is unused and `base` only affects the favicon; nav links are absolute `/`.
- Blog-post voice and structure: `.agents/skills/tulisan-si-thio/SKILL.md`.

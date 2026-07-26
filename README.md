# thio.dev

Personal website of **Herdi Agusthio (Thio)** — a *System Changelog & Telemetry Console*.

Instead of a static resume, the site is a live changelog of engineering
decisions and work sessions, generated at build time from markdown in the
`second-brain` repo. See [ADR 002](https://github.com/) for the concept.

## Stack

- [Astro](https://astro.build) — static site generator (ships ~zero JS)
- Plain CSS (dark "console" theme, cyan accent)
- Deployed free on GitHub Pages via GitHub Actions

## How it works

```
second-brain/journal/*.md      ─┐
second-brain/decisions/*.md    ─┤  npm run sync   →  content/
                                └─────────────────────┘
                                          │  astro build
                                          ▼
                                  src/lib/feed.ts  →  chronological feed  →  dist/
```

- `scripts/sync-content.mjs` copies public markdown from `../second-brain`
  into `content/`. It's non-fatal if the source is missing (CI uses the
  committed `content/`). Override the source with `SECOND_BRAIN_DIR`.
- `src/lib/feed.ts` parses journal days and ADRs into a sorted feed at build time.

## Develop

```bash
npm install
npm run dev        # sync + astro dev at http://localhost:4321
npm run build      # sync + astro build → dist/
npm run preview    # serve the built dist/
```

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and
publishes to GitHub Pages. Enable **Settings → Pages → Source: GitHub Actions**.

- **Custom domain** (`thio.dev`): leave `BASE_PATH` unset (base `/`) and add a
  `CNAME` file / configure the domain in repo settings.
- **Project page** (`<user>.github.io/thio.dev`): set `BASE_PATH: /thio.dev` in
  the workflow's build step.

## Roadmap

- **v1 (done):** center-column changelog feed
- **v2:** Architecture Blueprint column (ADR layer visualization)
- **v3:** static Telemetry panel + accent-color theme switcher

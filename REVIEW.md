# Review standards

## Failure modes
- Content sync leaks private material or rejects valid frontmatter: run `npm test`, `npm run check`, and `npm run build` with the documented fixture.
- Astro/build output drift: inspect generated routes, sitemap, RSS, and asset references; do not hand-edit `content/`.
- Deploy partial failure: require locked install, tests, build assertions, rsync result, and live smoke-check result.
- Office/API integration failure: validate sanitized payloads, HTTP status handling, and 2D/3D fallback behavior.

## Security, data loss, deploy
- Treat `scripts/sync-content.mjs`, `src/content.config.ts`, `src/pages/`, `src/scripts/office.ts`, `public/js/office3d.bundle.js`, `ship.sh`, and `scripts/smoke-check.sh` as risk-sensitive.
- Public content must pass the sync allowlist; never publish secrets, private notes, telemetry internals, or unreviewed second-brain files. Use `textContent`, escaping, and strict URL validation for remote data.
- Keep deploy atomic enough to recover: preserve the prior site, verify required files, run smoke checks, and document rollback before changing `/var/www/thio.dev`.
- Do not modify Caddy/systemd routing silently; verify only intended public routes and no new backend listener.

## Evidence gate
Record HEAD SHA, diff/stat, `npm ci --no-audit --no-fund`, `npm test`, `npm run check`, `npm run build`, private-fixture exclusion result, scanner output, and live smoke-check output when deployed. List route/content changes and rollback location.

## Exclusions
Ignore generated/dependency/runtime artifacts: `node_modules/`, `.astro/`, `dist/`, `content/`, generated sitemap/RSS/types, copied 3D bundles unless intentionally rebuilt, `.env*` (except examples), logs, and local scratch files. Generated output requires reproducible source/build evidence.
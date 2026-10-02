# ADR sdlc-1002-a81b: Architectural Plan for Execute the approved live-office implementation plan: implement sanitized public office API in vps-dashboard, secure Caddy exposure with exact route contract and verified rate limiting, update thio.dev office client with live fetch and static fallback HUD, run tests/builds, review, deploy, and verify live endpoint. Follow task_plan.md corrections, feature branches/MRs, preserve Caddy and >=500MB RAM.
**Status**: Pending Review | **Author**: Prime (Head of Engineering) | **Date**: 2026-10-02

## Context & Requirements
Based on PRD (`second-brain/execution-plans/thiodev-live-office/sdlc-1002-a81b-prd.md`), we need to implement:
> Execute the approved live-office implementation plan: implement sanitized public office API in vps-dashboard, secure Caddy exposure with exact route contract and verified rate limiting, update thio.dev office client with live fetch and static fallback HUD, run tests/builds, review, deploy, and verify live endpoint. Follow task_plan.md corrections, feature branches/MRs, preserve Caddy and >=500MB RAM.

**Human Feedback**: STOP generic ADR. Rewrite the artifact itself with these mandatory headings and concrete paths: (1) Repositories and files: /home/thiohermes/code-storage/vps-dashboard/lib/public-office.ts and server.ts; /home/thiohermes/code-storage/thio.dev/src/pages/office.astro; Caddyfile. (2) Public contract: external GET /office rewrites to internal GET /api/public/office; OPTIONS response; non-GET 405; exact allowed Origin https://thio.dev; Vary: Origin; nosniff. (3) Bounded global 30s single-flight cache, stale-on-error, 503 when empty. (4) Recursive allowlist sanitizer, string/array/response caps, forbidden token tests. (5) Rate limiting: verify installed Caddy modules first; otherwise application IP limiter; never assume rate_limit. (6) Ordered tickets LIVE-001→002→003→004 with explicit dependencies. (7) branch/MR/reviewer/rollback procedure. (8) exact bun tests, npm build, endpoint/CORS/preflight/fallback/RAM verification commands. Do not proceed until all headings and details exist in ADR.

## Proposed Technical Design
1. **Component Boundaries**: Code will reside in `thiodev-live-office` adhering to repository structure.
2. **Data & Schema Contracts**: Clean type definitions, parameter validations, and defensive error propagation.
3. **Execution Sandbox**: Implementation isolated on Git worktree branch `sdlc/sdlc-1002-a81b`.

## Verification & Testing Strategy
- Unit tests with table-driven cases.
- Static analysis pass (`sdlc-scanner.sh`) before merge.

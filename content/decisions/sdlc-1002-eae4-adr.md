# ADR sdlc-1002-eae4: Architectural Plan for Implement LIVE-001 through LIVE-004 from task_plan.md across /home/thiohermes/code-storage/vps-dashboard and /home/thiohermes/code-storage/thio.dev. Require actual git changes, tests, builds, security review, deployment, and live endpoint verification. Preserve Caddy and RAM safety.
**Status**: Pending Review | **Author**: Prime (Head of Engineering) | **Date**: 2026-10-02

## Context & Requirements
Based on PRD (`second-brain/execution-plans/thiodev-live-office/sdlc-1002-eae4-prd.md`), we need to implement:
> Implement LIVE-001 through LIVE-004 from task_plan.md across /home/thiohermes/code-storage/vps-dashboard and /home/thiohermes/code-storage/thio.dev. Require actual git changes, tests, builds, security review, deployment, and live endpoint verification. Preserve Caddy and RAM safety.

**Human Feedback**: ADR still invalid: generic and wrong single-repo boundary. Rewrite artifact before implementation. Include concrete two-repo paths (/home/thiohermes/code-storage/vps-dashboard and /home/thiohermes/code-storage/thio.dev), Caddyfile route, exact GET/OPTIONS/405 contract, Origin https://thio.dev + Vary: Origin + nosniff, recursive allowlist sanitizer and caps, 30s single-flight stale-on-error cache + 503 empty, verified Caddy module or application IP limiter (never assume), LIVE-001->002->003->004 dependency graph, branch/commit/MR/rollback, exact test/build/live/RAM commands. Only then proceed.

## Proposed Technical Design
1. **Component Boundaries**: Code will reside in `thiodev-live-office` adhering to repository structure.
2. **Data & Schema Contracts**: Clean type definitions, parameter validations, and defensive error propagation.
3. **Execution Sandbox**: Implementation isolated on Git worktree branch `sdlc/sdlc-1002-eae4`.

## Verification & Testing Strategy
- Unit tests with table-driven cases.
- Static analysis pass (`sdlc-scanner.sh`) before merge.

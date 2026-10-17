# ADR sdlc-1016-49db: Architectural Plan for Initialize and deploy Go-based link shortener. Scope: 1) Repo setup at ~/code-storage/golinks; 2) Go backend (net/http + SQLite) with /:alias (302) and POST /api/links; 3) 1-file UI; 4) TDD tests; 5) systemd service on port 3040; 6) Caddy reverse proxy at /go. Constraint: <30MB RAM. Run 6-stage Guardi SDLC with human approval gates.
**Status**: Pending Review | **Author**: Prime (Head of Engineering) | **Date**: 2026-10-16

## Context & Requirements
Based on PRD (`second-brain/execution-plans/golinks/sdlc-1016-49db-prd.md`), we need to implement:
> Initialize and deploy Go-based link shortener. Scope: 1) Repo setup at ~/code-storage/golinks; 2) Go backend (net/http + SQLite) with /:alias (302) and POST /api/links; 3) 1-file UI; 4) TDD tests; 5) systemd service on port 3040; 6) Caddy reverse proxy at /go. Constraint: <30MB RAM. Run 6-stage Guardi SDLC with human approval gates.

## Proposed Technical Design
1. **Component Boundaries**: Code will reside in `golinks` adhering to repository structure.
2. **Data & Schema Contracts**: Clean type definitions, parameter validations, and defensive error propagation.
3. **Execution Sandbox**: Implementation isolated on Git worktree branch `sdlc/sdlc-1016-49db`.

## Verification & Testing Strategy
- Unit tests with table-driven cases.
- Static analysis pass (`sdlc-scanner.sh`) before merge.

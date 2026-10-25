---
title: "ADR: Verification Harness Architecture"
date: "2026-10-10"
status: accepted
tags: ["architecture", "adr", "systems"]
---

# ADR: Verification Harness Architecture
- **Date:** 2026-10-10
- **Status:** Accepted

## Context
The verification harness (from t_cc1989b1) needs a defined architecture to integrate Go-based tooling into Thio's AI Org (the "Verification Harness"). Current verification is manual/ad-hoc; need standardized, automated gating for code changes to ensure safety before MRs.

## Decision
1. **Component-Based Harness**: The harness will operate as a standalone binary (`goverifier`) triggered by the SDLC automation loop.
2. **Integration Path**: Use `hermes-sdlc.py` hooks to invoke `goverifier` before any `git push` or PR merge.
3. **Data/State**: Harness persists results in `~/.hermes/cache/verify/` using JSON manifests.
4. **Tooling**: Strict adherence to Go stdlib (avoiding external deps where possible to fit 2GB RAM ceiling).
5. **Quality Gate**: Reject build if tests fail or linting fails (golangci-lint).

## Consequences
- **Trade-offs**: Increases build pipeline latency slightly. Improves binary-level confidence before merging code.
- **Constraints**: Must fit within the 2GB VPS RAM ceiling.
- **Maintenance**: `goverifier` binary must be compiled and deployed via `sysca` CI pipeline in `t_cc1989b1` context.

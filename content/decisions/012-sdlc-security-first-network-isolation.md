# ADR 012: SDLC Security-First Network Isolation & Localhost Invariant

## Context
During SDLC run `sdlc-1016-49db` (GoLinks microservice), the service was built and deployed listening on `0.0.0.0:3040` (`:3040`). This exposed port 3040 directly to the public internet on `http://103.217.144.64:3040`, bypassing reverse proxy authorization and security controls. The VPS Cockpit dashboard detected the listening socket and flagged it as `Rogue / Unprotected`.

## Decision
Enforce a non-negotiable **Security Invariant (Highest Priority)** across all agent workflows, SDLC stages, and service implementations:

1. **Strict Localhost Network Binding**:
   - ALL backend services, APIs, and microservices MUST bind strictly to `127.0.0.1` (loopback).
   - NEVER bind to `0.0.0.0`, `::`, or `:<port>` directly.
   - Public access is permitted ONLY through Caddy reverse proxy (`/etc/caddy/Caddyfile`).

2. **Automated Pre-Review Security Gate (`sdlc-scanner.sh`)**:
   - Added rule `SECURITY_WILDCARD_NETWORK_BINDING` (HIGH severity).
   - Scans for `0.0.0.0`, `fmt.Sprintf(":%s")`, `ListenAndServe(":")`, and wildcard host assignments.
   - Any `HIGH` severity finding hard-blocks approval at Gate 2 (`05_code_review`).

3. **Post-Deployment Port Hygiene Verification**:
   - `hermes-sdlc.py` automatically inspects `ss -tulpn` after service reload.
   - Any service detected listening on `0.0.0.0` or wildcard interfaces triggers an immediate critical security alert.

4. **Zero Untracked / Committed Build Artifacts**:
   - Compiled binaries and SQLite database files (`*.db`) must be excluded via `.gitignore` and never committed into Git branches.

## Status
Accepted and Enforced across `GEMINI.md`, `agent-profiles.md`, `sdlc/SKILL.md`, and `sdlc-scanner.sh`.

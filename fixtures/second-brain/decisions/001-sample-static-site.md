---
title: "ADR 001: Sample — Serve the Site as Static Files"
date: "2026-01-10"
status: accepted
tags: ["architecture", "adr", "sample"]
---

# ADR 001: Sample — Serve the Site as Static Files

## Context
Sample ADR for CI builds. A personal site needs no server runtime, so pages are built once and served as plain files.

## Decision
Build with Astro SSG and serve `dist/` from Caddy.

## Consequences
- Zero runtime memory; every content change needs a rebuild.

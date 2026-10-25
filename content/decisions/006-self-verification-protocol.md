---
title: "ADR 006: Mandatory Self-Verification Protocol"
date: "2026-09-20"
status: accepted
tags: ["architecture", "adr", "systems"]
---

# ADR 006: Mandatory Self-Verification Protocol

## Status
Accepted

## Context
Engineering agents (Goder, Pixel, Sysca, Prime) were occasionally handing off work with syntax errors, lint failures, or broken builds, requiring manual intervention/re-prompting.

## Decision
Embed a mandatory "Self-Verification Protocol" into the `SOUL.md` of every engineering profile. This protocol enforces a "test-before-complete" gate.

## Protocol
1. Before marking any task complete, execute relevant test/lint runner.
2. If tests fail, self-correct and re-test before completing.
3. Never hand off unverified changes to the orchestrator or user.

## Consequences
- Increased reliability of handoffs.
- Reduced "ping-pong" between agents and orchestrator.
- Slightly higher token/time cost per task due to mandatory verification steps.

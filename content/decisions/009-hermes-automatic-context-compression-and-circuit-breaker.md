---
title: "ADR 009: Hermes Automated Context Compression & Anti-Thrash Breaker Management"
date: "2026-09-29"
status: accepted
tags: ["architecture", "adr", "systems"]
---

# ADR 009: Hermes Automated Context Compression & Anti-Thrash Breaker Management

## Status
Accepted

## Context
1. Hermes Agent operations in long-running messaging channels (e.g., Telegram forum topics, direct chats, Discord channels) continuously accumulate conversational context across turns.
2. The legacy configuration retained a restrictive token ceiling:
   - `compression.threshold_tokens: 35000` (inherited from early 32k/64k token models).
   - `compression.protect_last_n: 8` (protecting the most recent 8 messages from compaction).
3. Baseline token usage for Hermes agents (system instructions, persona prompts, and 50+ tool schemas) already consumes ~20,000 to ~25,000 tokens before any conversation occurs.
4. Because the remaining compressible turns could not reduce total token counts below the 35,000-token ceiling, Hermes's internal anti-thrash circuit breaker tripped after two unsuccessful attempts (`compression_ineffective_count = 2`).
5. Once tripped, Hermes marked the session as "ineffective" in SQLite (`state.db`) and halted further automatic compaction attempts to avoid burning tokens in infinite loops. This produced recurring warning banners across Telegram channels:
   `⚠ Context is over the compression threshold (~39,354 tokens >= 35,000) but compression is currently blocked (ineffective). Run /new to start a fresh session or /compress to retry immediately.`
6. Relying on manual `/compress` or `/new` commands interrupts autonomous agent operations and degrades the user experience.

## Decision
1. **Rely on Native Preflight Auto-Compression**:
   - Confirm that Hermes possesses native, fully automated compression that executes in `turn_preflight.py` (`run_preflight_compression`) prior to every model invocation whenever request pressure exceeds `threshold_tokens`.
   - Ensure zero manual intervention (`/compress` or `/new`) is required during standard operations.

2. **Elevate Context Compression Thresholds**:
   - Raise `compression.threshold_tokens` from `35000` to `100000` (100k) across root `config.yaml` and all profile overrides (`prime`, `gosenior`, `pixel`, `lexa`, `luna`, `infraguard`, `caren`).
   - This provides extensive runway while staying safely within the 256k context window of the tier-1 model (`cx/gpt-5.6-luna`).
   - Increase `compression.proactive_prune_tokens` from `25000` to `50000`.

3. **Tune Compaction Tail Retention**:
   - Lower `compression.protect_last_n` from `8` to `4`.
   - This provides the summarizer sufficient older conversational turns to synthesize into compact summaries while preserving recent turn context.

4. **Maintain Channel Communication Hygiene**:
   - Keep `compression.progress_notices: false` so that background preflight summarization executes silently without injecting status notices into Telegram topics.

5. **Operational Circuit Breaker Disarming Procedure**:
   - Establish a standard reset query for SQLite session stores when breaker states trip:
     ```sql
     UPDATE sessions
     SET compression_ineffective_count = 0,
         compression_fallback_streak = 0,
         compression_failure_cooldown_until = NULL,
         compression_recovery_deadline = NULL;
     ```

## Consequences
- **Fully Autonomous Context Lifecycle**: Hermes monitors token pressure and silently condenses older context turns into high-density summaries automatically before querying the LLM.
- **Elimination of Warning Clutter**: The "compression blocked (ineffective)" alert is permanently resolved across all Telegram topics.
- **Context Preservation**: Conversations span hundreds of turns without losing key decisions or requiring manual session resets.
- **Consistent Token Economics**: Compactions complete in 2–3 seconds via 9Router Codex backend without consuming metered developer API credits.

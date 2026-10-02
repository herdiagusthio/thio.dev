# ADR 007: Hermes Agent Token Optimization & Channel Direct Answer Protocol

## Status
Accepted

## Context
When interacting across messaging channels (Telegram, Discord, Slack, A2A), Hermes agents were generating extensive internal reasoning/thinking tokens (`reasoning_effort: medium` / `low`) and streaming interim assistant messages to chat channels (`interim_assistant_messages: true`). This led to:
1. Significant completion token consumption and costs.
2. Truncated responses hitting output token limits (`finish_reason='length'`).
3. Excessive noise and chain-of-thought scratchpad dumps in communication channels.

## Decision
1. **Disable Model Reasoning Tokens**: Configure `reasoning_effort: none` in the root `config.yaml` and all profile configurations (`prime`, `gosenior`, `pixel`, `infraguard`, `luna`, `lexa`, `caren`). This instructs LLM providers to disable thinking budgets/reasoning overhead.
2. **Channel Display Hygiene**:
   - Set `display.show_reasoning: false` globally and across all platform overrides.
   - Set `display.interim_assistant_messages: false` globally and across all platform overrides to suppress intermediate commentary chatter.
   - Set `display.tool_progress: off` to avoid noisy tool execution cards in channels.
3. **Agent SOUL Governance**: Add explicit directives in `SOUL.md` requiring agents to provide direct, high-signal responses immediately without dumping internal scratchpads.

## Consequences
- Massive reduction in completion token usage per turn.
- Elimination of token truncation errors (`finish_reason='length'`).
- Immediate, clear, and high-signal responses across all messaging channels.

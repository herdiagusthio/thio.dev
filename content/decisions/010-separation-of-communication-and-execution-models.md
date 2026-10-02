# ADR 010: Separation of Communication, Execution, and Background Inference Workloads

## Status
Accepted

## Context
1. **Single Model Bottleneck**: Hermes Agent instances were previously configured to route conversational traffic, scheduled crons, and background agent loops through a single 9Router endpoint (`agentcombo` -> `agenticprojectcombo`).
2. **Quota Exhaustion**: The primary model in `agenticprojectcombo` is ChatGPT Plus (`cx/gpt-5.6-luna`), which operates under a rolling 3-hour consumer usage cap. Autonomous execution loops (e.g. Kanban tasks iterating 40+ tool calls) and recurring morning crons (Daily Tech Briefing, Sharia Portfolio Analyst, Content Radar) rapidly depleted this quota, generating `HTTP 429: The usage limit has been reached`.
3. **vLLM / Pydantic Fallback Crash**: When 9Router attempted failover down the combo list to `openai/gpt-oss-20b` (served via vLLM / NVIDIA NIM), requests crashed with:
   ```
   HTTP 400: {"error":{"message":"1 validation error:\n  {'type': 'literal_error', 'loc': ('body', 'reasoning_effort'), 'msg': \"Input should be 'low', 'medium' or 'high'\", 'input': 'none'..."}}
   ```
   Hermes's custom model provider forwarded `reasoning_effort: "none"`, which vLLM's strict Pydantic validator rejected. Hermes treated HTTP 400 as a fatal client error, causing Kanban tasks (such as `t_cc1989b1`) to fail repeatedly and route to `TRIAGE`.
4. **Architectural Need**: High-reasoning frontier models (ChatGPT Plus) should be reserved for human interaction and top-level executive orchestration, while execution loops, heavy coding, and background scheduled jobs must use dedicated, cost-effective, or self-hosted models.

## Decision

### 1. Three-Tier Workload Specialization
We establish a strict 3-tier operational separation across the organization:
- **Tier 1: Human Communication & Orchestration (ChatGPT Plus / `agenticprojectcombo`)**
  - Exclusively dedicated to direct interaction with Thio on Telegram (LEADYA and direct chats).
  - High conversational fidelity, natural voice, and strategic alignment.
  - Prohibited from executing background crons or unattended multi-iteration coding loops.
- **Tier 2: Heavy Coding & Deep Refactoring (Antigravity CLI / `agy`)**
  - Dedicated to full codebase refactoring, multi-file code generation, automated test execution, and low-level Linux/VPS operations.
  - Runs in ephemeral terminal sessions with strict memory headroom enforcement (`free -m >= 500 MB`) and immediate teardown upon task completion.
- **Tier 3: Background Crons & Auxiliary Tasks (`croncombo`)**
  - Dedicated 9Router combo for recurring scheduled tasks and background utility workloads:
    1. `gemini/gemini-3.1-flash-lite-preview` (Fast, high token throughput, cost-free)
    2. `gemini/gemini-3-flash-preview`
    3. `nvidia/openai/gpt-oss-20b` (NVIDIA NIM / vLLM fallback)
    4. `cf/@cf/qwen/qwen2.5-coder-32b-instruct` (Cloudflare Workers AI)
    5. `cf/@cf/zai-org/glm-4.7-flash` (Cloudflare Workers AI)
  - Configured with `context_length: 256000` to satisfy Hermes's 64k token validation floor.
  - Assigned to all daily crons in `~/.hermes/cron/jobs.json`.
  - Assigned to `auxiliary` subsystems in `~/.hermes/config.yaml` (`compression`, `title_generation`, `web_extract`).

### 2. vLLM / OpenAI API Compatibility Hardening
- **Parameter Stripping**: Patched `~/.hermes/hermes-agent/plugins/model-providers/custom/__init__.py` to omit `reasoning_effort: "none"` for OpenAI-compatible and 9Router endpoints. Only endpoints explicitly targeting Ollama retain this parameter.
- **Error Classifier Resiliency**: Updated `~/.hermes/hermes-agent/agent/error_classifier.py` to recognize Pydantic validation errors (`loc: ('body', 'reasoning_effort')`, `literal_error`) under `_REASONING_PARAM_REJECTION`. Any future rejection of reasoning parameters by downstream providers automatically strips the parameter and retries the turn instead of failing.

### 3. Telegram Forum Topic Routing Hygiene
- Scheduled jobs must strictly target designated Telegram forum topics:
  - Topic 7 (News & Tech Intelligence): `telegram:-1003956602182:7`
  - Topic 145 (Engineering): `telegram:-1003956602182:145`
  - Topic 165 (Finance & Portfolio): `telegram:-1003956602182:165`
  - Topic 176 (Content & Blog Ideation): `telegram:-1003956602182:176`

## Consequences
- **ChatGPT Quota Protection**: Zero ChatGPT message quota is consumed by background cron dispatches, automated context summarization, or title generation. The 3-hour rolling limit remains entirely available for direct human conversations.
- **High Cron Reliability**: Scheduled tasks execute in under 5 seconds via Gemini Flash-Lite without throttling or rate limit conflicts.
- **Resilient Multi-Provider Failover**: The Hermes-to-9Router pipeline seamlessly cascades through Gemini, NVIDIA NIM, and Cloudflare Workers AI without tripping HTTP 400 Pydantic schema validation failures.
- **Autonomous Recovery**: The Kanban task dispatcher can process queue items and background operations reliably without human intervention.

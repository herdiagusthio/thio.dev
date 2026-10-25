---
title: "ADR 008: ChatGPT Subscription Routing via 9Router Codex OAuth"
date: "2026-09-29"
status: accepted
tags: ["architecture", "adr", "systems"]
---

# ADR 008: ChatGPT Subscription Routing via 9Router Codex OAuth

## Status
Accepted

## Context
1. Hermes Agent operations, autonomous scheduled cronjobs (Engineering Brief, Sharia Portfolio, Content Radar), and engineering specialists rely on uninterrupted LLM access.
2. Metered API providers encountered frequent service interruptions:
   - Google Gemini monthly spending caps depleted (`429 RESOURCE_EXHAUSTED`).
   - Cloudflare Workers AI free neuron quotas reached daily limits (`429 AiError`).
   - NVIDIA NIM inference gateways experienced intermittent connection timeouts (`502 Bad Gateway`).
   - OpenAI API platform account ran out of pre-paid developer credits.
3. The founder maintains an active consumer **ChatGPT Plus / Go subscription** with flat monthly pricing and high-capacity access to state-of-the-art models (`gpt-5.6-luna`, `gpt-6-luna`, `gpt-5.6-terra`).
4. 9Router possesses a native Codex transport interface (`codex_cli_rs`) designed to connect to OpenAI's Codex backend without a metered developer API key.

## Decision
1. **Adopt Codex OAuth as SSOT Consumer Gateway**:
   - Authenticate the ChatGPT Plus subscription via OpenAI Codex PKCE OAuth flow using client ID `app_EMoamEEZ73f0CkXaXp7hrann`.
   - Store long-lived `refreshToken` and session tokens inside `~/.9router/db/data.sqlite` (`providerConnections: provider='codex', authType='oauth'`).
   - Rely on 9Router's built-in background refresher to rotate access tokens every 10 days automatically without manual re-authentication.
2. **Prioritize Codex Models in `agenticprojectcombo`**:
   - Update 9Router's primary model combo (`agenticprojectcombo`) to order `cx/gpt-5.6-luna`, `cx/gpt-6-luna`, and `cx/gpt-5.6-terra` as the tier-1 models.
   - Maintain Cloudflare AI and Google Gemini as tier-2 / tier-3 fallbacks.
3. **Headless VPS Automation Tooling**:
   - Provide and track [`scripts/chatgpt-oauth.py`](file:///home/thiohermes/code-storage/second-brain/scripts/chatgpt-oauth.py) as the standard tool for initiating OAuth and exchanging codes on headless Linux VPS environments.

## Consequences
- **Zero Metered API Costs**: Routine agent tasks, scheduled cronjobs, and pair programming avoid pay-per-token API credit depletion.
- **High Reliability & Uptime**: Morning briefings and portfolio analysis run reliably on high-reasoning frontier models (`gpt-5.6-luna`).
- **Headless Maintenance**: If OAuth credentials ever require manual re-issuance, running `chatgpt-oauth.py --generate` and `--exchange` takes under 30 seconds.
- **Resource Discipline**: Host available memory remains `>= 500 MB` throughout all operations.

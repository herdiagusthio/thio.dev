---
title: "PROMOTED: scatter-gather-aggregation"
date: 2026-09-12
category: "engineering"
status: "draft" 
tags: []
---

# Case Study: implementing the Scatter-Gather Pattern for High-Latency API Aggregation

## The Problem
When aggregating data from multiple external providers (e.g., flight search), the total response time is limited by the slowest provider. A sequential approach is unacceptable for user experience, and a naive parallel approach can lead to "resource exhaustion" if too many providers hang or panic.

## The Engineering Solution
Implemented a robust **Scatter-Gather Pattern** in Go.
- **Scatter**: Launched independent goroutines for each provider, each wrapped in its own `context.WithTimeout` to ensure a single slow provider cannot block the entire request.
- **Resilience**: Integrated a **Panic Recovery** mechanism within each goroutine to prevent a single provider's failure from crashing the entire orchestrator.
- **Reliability**: Implemented a custom **Exponential Backoff with Jitter** retry loop. This prevents "thundering herd" problems when a provider is momentarily overwhelmed.
- **Gather**: Used a buffered channel and a `sync.WaitGroup` to aggregate results, with a global timeout acting as a final circuit breaker.

## Key Takeaway
When aggregating data from unreliable external systems, the goal is **Graceful Degradation**. By combining concurrency, strict timeouts, and jittered retries, you can provide the best possible result in the shortest amount of time, even when some providers fail.


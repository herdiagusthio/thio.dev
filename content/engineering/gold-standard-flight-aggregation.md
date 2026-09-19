---
title: "Fault-Tolerant Flight Aggregation Engine in Go"
date: "2026-09-12"
category: "engineering"
status: "published"
tags: ["golang","distributed-systems","scatter-gather","resilience","chaos-testing"]
summary: "Production-grade aggregation engine with financial precision value objects, panic recovery, and chaos testing under slow provider degradation."
---

## Context
A flight search system querying 4 external providers with varying reliability. The original implementation used sequential requests, `float64` for pricing, and had no concept of partial failure—one slow or broken API would fail the entire user request.

## Solution
Implemented a **production-grade aggregation engine** using Go concurrency patterns and Domain-Driven Design.

### 1. Domain Hardening: Financial Precision & Invariants
- Replaced `float64` pricing with `int64` cents via `PriceInfo` value object.
- Enforced invariants at construction via `FlightFactory`:
  ```go
  func NewFlight(id FlightNumber, origin, dest AirportCode, price PriceInfo) (Flight, error)
  ```
- Strong types for `AirportCode`, `Currency`, `FlightNumber` prevent invalid data from entering the domain.

### 2. Resilience: Scatter-Gather with Partial Success
```go
func (uc *FlightSearchUseCase) Search(ctx context.Context, req SearchRequest) (SearchResult, error) {
    // Scatter: fan out to providers
    // Gather: collect via buffered channel
    // Policy: return success if >= 1 provider succeeds
}
```
- **Per-provider timeout** (2s) prevents stragglers.
- **Global timeout** (5s) bounds total latency.
- **Panic recovery** in each worker isolates provider crashes.

### 3. Error Taxonomy: Semantic Failure Handling
```go
type ErrorCategory int
const (
    CategoryTransient ErrorCategory = iota // retryable: timeout, 5xx
    CategoryPermanent                     // non-retryable: 4xx, validation
    CategoryCritical                      // system-level: config, auth
)
```
Enables intelligent retry logic: `if IsTransient(err) { retry() }`.

### 4. Verification: Chaos Testing Suite
Created `ChaosProvider` to inject faults:
- **Panic injection**: verifies orchestrator survives provider crashes.
- **Timeout injection**: verifies partial results returned under latency.
- **Malformed data**: verifies normalization layer rejects bad payloads.

### 5. Strict Normalization: The Quality Wall
All 4 providers (AirAsia, Batik Air, Garuda, Lion Air) now map through strict normalizers using domain factories. Invalid external data is rejected at the boundary—domain layer never sees raw JSON.

## Impact
| Metric | Before | After |
|--------|--------|-------|
| Pricing bugs | Possible (float64) | Impossible (int64 cents) |
| Single provider outage | Total failure | Graceful degradation |
| Avg latency | Sum of all providers | Max of fastest provider |
| Test coverage | Happy path only | Chaos + Integration |

## Transferable Pattern
This architecture applies to any **multi-provider aggregation** system:
- Payment gateway routing
- Hotel/flight/car meta-search
- Microservice fan-out patterns
- Any system where "partial success > total failure"

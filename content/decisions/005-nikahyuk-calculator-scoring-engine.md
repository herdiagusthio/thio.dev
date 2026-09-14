# ADR: Scoring-Based Wedding Calculator Engine with 20/60/10/10 Budget Allocation
- **Date:** 2026-08-22
- **Status:** Accepted
- **PRD Reference:** PRD v3 Feature #6
- **TDD Reference:** TDD v3.1 §5.1

## Context
The legacy calculator algorithm used a sequential first-match filter (`Venue 25%` $\rightarrow$ `Catering 60%` $\rightarrow$ `Decor 10%` $\rightarrow$ `Other 5%`) with strict partner-vendor locking. This often failed to find valid packages, produced rigid single-option recommendations, and couldn't handle multi-category services effectively.

## Decision
We decided to overhaul the Calculator Engine:
1. **New Allocation Ratio**: `Venue 20% / Catering 60% / Decoration 10% / Other 10%` (must total 100%).
2. **Category Evaluation Order**: `Venue` $\rightarrow$ `Catering` $\rightarrow$ `Decoration` $\rightarrow$ `Makeup` $\rightarrow$ `Music` $\rightarrow$ `Tailor` $\rightarrow$ `Documentation`.
3. **Combined Budget Pools**: Multi-category services (packages) evaluate against the combined budget pool of all covered categories (e.g., a Venue+Catering service uses 20%+60% = 80% pool).
4. **Filter $\rightarrow$ Score $\rightarrow$ Selection Pipeline**:
   - Filter active services matching region and pax capacity.
   - Score candidates based on budget utilization, price fit, and category coverage.
   - Select candidates using weighted/randomized selection.
5. **Multi-Plan Output**: Generate up to 3 diversified plans by applying score penalties to services selected in prior plans.
6. **Partner Dependencies Removed**: Partner vendor lock filtering is removed from the MVP.

## Consequences
**Pros:**
- Higher recommendation success rate.
- Returns up to 3 distinct options giving users real choices.
- Seamlessly handles multi-category bundled services.

**Cons:**
- Requires careful tuning of scoring weights during development.
- CPU-intensive for large candidate pools (mitigated by rate limiting and database candidate indexing).

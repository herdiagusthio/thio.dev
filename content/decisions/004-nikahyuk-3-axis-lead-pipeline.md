# ADR: 3-Axis Lead Model vs Linear Quote Statuses
- **Date:** 2026-08-22
- **Status:** Accepted
- **PRD Reference:** PRD v3 Feature #8
- **TDD Reference:** TDD v3.1 §5.2

## Context
Earlier designs used a single linear status pipeline (`NEW` $\rightarrow$ `LOCKED` $\rightarrow$ `UNLOCKED` $\rightarrow$ `CONTACTED` $\rightarrow$ `DEAL` $\rightarrow$ `INVALID` $\rightarrow$ `CLOSED`). This forced artificial ordering constraints (e.g. a vendor couldn't classify a lead as `HOT` or `INVALID` before unlocking it, or transition back from `DEAL` if a deal fell through). Additionally, Midtrans payment was tightly coupled to lead unlocking.

## Decision
We decided to replace the linear status model with **3 Independent Axes**:
1. **Lifecycle Axis** (`NEW` $\rightarrow$ `CONTACTED` $\rightarrow$ `CLOSED`): Tracks the linear interaction lifecycle.
2. **Classification Axis** (`COLD` $\leftrightarrow$ `WARM` $\leftrightarrow$ `HOT` $\leftrightarrow$ `DEAL` $\leftrightarrow$ `INVALID`): Represents vendor lead qualification. Vendors can transition freely between classifications. Marking a lead as `INVALID` requires a mandatory `invalid_reason`.
3. **Unlock Status Axis** (`LOCKED` $\rightarrow$ `UNLOCKED`): Binary unlock state. For MVP, lead unlock is **free (Rp0)**, removing Midtrans payment dependency.

We also enforced:
- **Data Masking**: Contact PII is masked (`A***a`, `08****`) when `LOCKED` and exposed when `UNLOCKED`.
- **Duplicate Lead Prevention**: Partial unique index `idx_leads_active_dedup` on `(user_id, saved_plan_id, vendor_id)` where `lifecycle != 'CLOSED'`.
- **6-Month Cooldown**: Prevents resubmitting a lead to the same vendor for the same plan within 6 months of closure.

## Consequences
**Pros:**
- Complete flexibility for vendors to manage and classify leads without rigid state transition blocks.
- Completely decouples payment gateway from core lead dispatching in MVP.
- Prevents database-level duplicate leads and race conditions.

**Cons:**
- Vendors must manage two separate dropdowns/states (Lifecycle and Classification) in the dashboard.

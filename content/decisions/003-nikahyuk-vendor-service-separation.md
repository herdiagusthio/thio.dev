# ADR: Separate Vendor Profile from Services in Nikah Yuk Marketplace
- **Date:** 2026-08-22
- **Status:** Accepted
- **PRD Reference:** PRD v3 Feature #5
- **TDD Reference:** TDD v3.1 §4.2

## Context
In PRD v1/v2, vendors were directly tied to a single category and base price (`vendors.category`, `vendors.base_price`), with `vendor_packages` as sub-items. This model proved inflexible because real wedding vendors often offer multiple distinct services across different categories (e.g., a hotel providing both venue and catering) or serve multiple geographic regions with different pricing models (`BASE` vs `PER_PAX`).

## Decision
We decided to decouple **Vendor Profile** from **Services**:
1. `vendors` is now a pure business profile containing business name, description, address, WhatsApp number, and gallery. It has NO category and NO base price.
2. `services` is the primary marketplace unit. Each service belongs to a vendor and defines its own:
   - Pricing Model: `BASE` (fixed total) or `PER_PAX` (price per guest).
   - Pax Limit (`max_pax`).
   - Availability (`ACTIVE` / `INACTIVE`).
   - Multi-category support via `service_categories` junction table.
   - Multi-region coverage via `service_regions` junction table.
3. Multi-category services are automatically treated as packages in the marketplace without requiring a separate "package" entity.

## Consequences
**Pros:**
- High flexibility: Vendors can list individual services or bundled multi-category packages.
- Accurate pricing: Clear distinction between fixed base pricing and per-guest pricing.
- Granular regional availability per service rather than per vendor.

**Cons:**
- Increased schema complexity (requires `services`, `service_categories`, and `service_regions`).
- Requires composite indexing (`idx_services_calc_matching`, `idx_service_categories_lookup`, `idx_service_regions_lookup`) for performance.

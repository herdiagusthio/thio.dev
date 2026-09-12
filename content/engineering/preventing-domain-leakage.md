---
title: "PROMOTED: preventing-domain-leakage"
date: 2026-09-12
category: "engineering"
status: "draft" 
tags: []
---

# Case Study: Preventing Domain Leakage via Hexagonal Architecture

## The Problem
In many Go applications, the "service" layer becomes tightly coupled with the database library (e.g., GORM). When the database schema changes or when you need to switch persistence layers, you are forced to rewrite large portions of your business logic. This is known as "Domain Leakage."

## The Engineering Solution
Implemented a strict **Hexagonal Architecture** (Ports and Adapters). 
- **The Port**: Defined a `Repository` interface in the business layer. The business logic only knows that a user can be "found by ID"; it has no knowledge of SQL, GORM, or connection strings.
- **The Adapter**: Implemented a `GormRepository` that fulfills the interface. All GORM-specific logic and database tags are contained entirely within this adapter.
- **The Translation**: Implemented an error translation layer that maps `gorm.ErrRecordNotFound` to a domain-specific `ErrUserNotFound`.

## Key Takeaway
By treating the database as a "plugin" (Adapter) rather than the foundation of the app, you isolate the most volatile part of your system. This results in a core that is 100% testable in isolation and immune to infrastructure changes.


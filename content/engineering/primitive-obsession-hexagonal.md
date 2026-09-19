---
title: "Value Object Modeling in Domain-Driven Design"
date: "2026-09-12"
category: "engineering"
status: "published"
tags: ["golang","domain-driven-design","value-objects","architecture"]
summary: "Encapsulating validation rules within dedicated value types to eliminate primitive obsession and scattered validator checks."
---

# Case Study: Eliminating Primitive Obsession in Domain-Driven Design

## The Problem
In many Go projects, domain models rely heavily on primitive types (e.g., `string` for emails, `int` for IDs). This leads to "Primitive Obsession," where validation logic is scattered across controllers and services. If a `string` is passed as an email, the system has no guarantee that it is actually a valid email until it reaches the database or a validator function.

## The Engineering Solution
Implemented a **Value Object** pattern within a Hexagonal Architecture. Instead of using `string`, I introduced dedicated types:
- `type Email string`
- `type Username string`

By creating constructor functions (e.g., `NewEmail()`) that return both the type and an error, I ensured that **it is impossible to instantiate a User object with invalid data**. The validation is now baked into the type itself.

## Key Takeaway
Moving validation from the "edge" (controllers) to the "core" (value objects) reduces bugs and simplifies the business logic. It transforms the code from "checking if data is valid" to "working with data that is guaranteed to be valid."


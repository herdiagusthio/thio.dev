---
title: "Should Your Microservices Dance Together, or Follow a Conductor?"
date: "2025-07-07"
category: "blog"
status: "published"
tags: ["microservices", "architecture", "orchestration", "choreography", "distributed-systems"]
summary: "Should your microservices dance or follow a conductor? A deep dive into the Saga Pattern, explaining Choreography vs. Orchestration for distributed systems."
canonical_url: "https://www.linkedin.com/pulse/should-your-microservices-dance-together-follow-putra-darmawan-njdac"
---

# Should Your Microservices Dance Together, or Follow a Conductor?

> *Originally published on [LinkedIn Pulse](https://www.linkedin.com/pulse/should-your-microservices-dance-together-follow-putra-darmawan-njdac) on 2025-07-07.*

This was the question that stuck in my mind after a deep dive into the Saga Pattern.

As a backend engineer, I used to love the simplicity of monolithic transactions.

One database. One COMMIT. If anything breaks, just ROLLBACK.

But in the world of microservices, things get complicated.

Every service has its own database. Each part of a business flow living in isolation. There's no global transaction. So how do you ensure consistency across systems—like processing an order, charging a payment, and reducing inventory?

That’s when I discovered Saga—a new way to think about distributed transactions.

### 🔄 What is a Saga?

A Saga breaks down one big operation into a series of local transactions across services.

Each service performs its part and then passes control to the next step. If anything fails along the way, it doesn’t undo—it compensates.

🛒 Let's say the steps in an order process are:

- Order Service creates the order

- Payment Service charges the customer

- Inventory Service reduces the stock

- Order Service finalizes the order

But what if step 3 fails due to insufficient stock?

→ The Saga asks Payment to issue a refund

→ Then tells Order to mark it as cancelled

Instead of atomicity, we get eventual consistency.

And that’s okay—as long as the system is designed for it.

From my research, I found that there are two main ways to implement a Saga.

And the metaphors helped me understand them best:

### 🩰 Option 1: Choreography — The Dance

Imagine a well-rehearsed dance.

Each service finishes its part and sends an event that tells the next service to begin.

📡 For example:

→ OrderCreated event → triggers Payment

→ PaymentProcessed event → triggers Inventory

→ and so on.

It’s beautiful, decentralized, and loosely coupled.

✅ Pros:

- High autonomy between services

- No central dependency

❌ Cons:

- Hard to trace

- Debugging gets tricky as the system scales

If something fails (e.g., InventoryFailed), each service listens to failure events and performs its own rollback (e.g., refund, cancel order). It's like a reverse dance routine—elegant but hard to control.

### 🎼 Option 2: Orchestration — The Conductor

Now imagine an orchestra.

Instead of services signaling each other, There’s a central conductor (an orchestrator) telling each service when it’s their turn.

🎯 For example:

→ Orchestrator tells Payment: “Proceed”

→ Once done, it tells Inventory: “Go”

→ If anything fails, the orchestrator coordinates compensations

✅ Pros:

- Clear control flow

- Easier to monitor and debug

❌ Cons:

- Centralized logic can become a bottleneck

- More coupling to the orchestrator

### 🔍 My Takeaway

This learning wasn't just about a new pattern.

It was a lesson in philosophy and trade-offs.

There’s no single “best” answer.

- Choreography is elegant and decentralized—great for simple flows

- Orchestration is controlled and observable—ideal for complex logic

But the real job of an engineer?

> Not just to build systems…                                                                      But to choose the right coordination model for the problem.

And perhaps the biggest insight?

> Distributed systems don’t have to be fragile.                                               They just need to be designed with failure in mind.

How about you?

When handling distributed transactions—do your services dance freely, or follow a conductor?

Let’s share thoughts in the comments👇

#TulisanSiThio #SoftwareArchitecture #SystemDesign #Microservices #SagaPattern #DeveloperJourney #DistributedSystems

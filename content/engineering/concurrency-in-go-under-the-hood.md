---
title: "Concurrency in Go always felt ‘magical’—until I asked what’s really happening inside."
date: "2025-08-04"
category: "engineering"
status: "published"
tags: ["golang", "concurrency", "runtime", "goroutines", "distributed-systems"]
summary: "Go"
canonical_url: "https://www.linkedin.com/pulse/concurrency-go-always-felt-magicaluntil-i-asked-whats-putra-darmawan-isiuc"
---

# Concurrency in Go always felt ‘magical’—until I asked what’s really happening inside.

> *Originally published on [LinkedIn Pulse](https://www.linkedin.com/pulse/concurrency-go-always-felt-magicaluntil-i-asked-whats-putra-darmawan-isiuc) on 2025-08-04.*

When I first learned Go, one of its biggest selling points was how simple concurrency felt.

Just add go in front of a function—and boom, it runs in the background. No complicated thread management. No messy locks.

It felt like magic.

And honestly, I ran with that magic for a while.

But as engineers, we know—there's no such thing as magic. Only well-designed abstractions.

So, I decided to dig deeper.

Here are my notes from that journey into Go’s concurrency model.

##
📝 Note #1: Concurrency ≠ Parallelism

The first thing I had to unlearn:

Concurrency is not the same as parallelism.

This is foundational. The analogy that made it click for me was a chef in a kitchen:

- 👨🍳 Concurrency is like one chef juggling multiple tasks—stirring a pot, chopping veggies, and answering the phone. It's about structuring work to handle many things at once.

- 🧑🍳 Parallelism is like having several chefs, each cooking a different dish at the same time. It's about executing work simultaneously.

Go is designed to help us write concurrent code easily.

Then the Go runtime steps in to execute that work in parallel across available CPU cores.

That’s the beauty of it—it separates how we write from how it runs.

##
📝 Note #2: Goroutines Aren’t Threads—They’re Smarter

At first, I thought goroutines were just lightweight threads. Turns out, they’re much more than that. They're managed by the Go runtime using a smart scheduler called the GMP model:

- G for goroutine (the task)

- M for machine thread (the OS thread)

- P for processor (the scheduler’s token)

The restaurant analogy helped me visualize it:

- P is a restaurant table (processor)

- G is a dish ready to be served (goroutine)

- M is the waiter (a thread) delivering that dish

Only as many waiters as there are tables (GOMAXPROCS) can serve at once. This is how Go runs thousands of goroutines efficiently without overwhelming the system.

It’s not magic—it’s smart design.

##
📝 Note #3: Go’s Philosophy—“Pass Notes, Don’t Fight Over the Whiteboard”

Here’s where things got really interesting.

In many languages, concurrency is all about sharing memory safely. Think of multiple engineers trying to write on the same whiteboard. To avoid chaos, you introduce locks, mutexes, and stress.

Go flips that entirely with its famous philosophy:

> “Don’t communicate by sharing memory. Share memory by communicating.”

Imagine each goroutine is an engineer working in their own space. When they need to talk, they don’t touch shared data. Instead, they pass notes (messages) through channels (safe tubes).

No locking, no shouting across the room. Just clear, explicit communication.

The magic isn’t in a complex locking system—

It’s in the simplicity of the communication model itself.

##
💡 My Takeaway

Go’s concurrency isn’t magic. It’s a philosophy. A thoughtful design that hides complexity behind clean syntax—so we can write clearer, safer code.

It taught me to shift from a defensive mindset of:

> “How do I protect this data?”

to a proactive one of:

> “How do I design a clean flow of communication?”

That’s a shift I’m still learning, but it’s made me a better engineer.

What about you? If you’ve worked with Go, what was your "aha" moment with its concurrency model?

💬 Let’s talk in the comments!

#TulisanSiThio #GoLang #Concurrency #DeveloperJourney #SystemDesign #SoftwareArchitecture

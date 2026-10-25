---
title: "Autonomous Multi-Agent Engineering Organization & Virtual Office"
date: 2026-10-02
status: published
summary: "Architectural blueprint and real-time interactive telemetry for Thio's autonomous multi-agent engineering fleet, featuring dual 2D pixel-art and 3D Three.js command bridges."
tags: ["agents", "distributed-systems", "threejs", "architecture", "telemetry"]
---

## Executive Overview

Modern software engineering organizations are evolving beyond single chat interfaces. At **thio.dev**, engineering operations are orchestrated across a specialist autonomous agent workforce governed by strict architectural boundaries, explicit domain encapsulation, and memory headroom invariants.

To provide transparent, observable, and engaging system observability, we designed and built the **Virtual Engineering Office**—a real-time, interactive command bridge featuring both **2D pixel-art isometric rendering** and **3D Three.js spatial telemetry**.

👉 **[Launch Interactive Virtual Office Console →](/office)**

---

## Organizational Architecture & Roster

The fleet operates as an autonomous engineering division with distinct roles, responsibilities, and model tiers:

```
                  ┌──────────────────────────────┐
                  │    THIO (Founder / Human)     │
                  └──────────────┬───────────────┘
                                 │
                  ┌──────────────▼──────────────┐
                  │   LEADYA (CEO Orchestrator) │
                  └──────────────┬───────────────┘
                                 │
          ┌──────────────────────┼──────────────────────┐
          │                      │                      │
┌─────────▼─────────┐  ┌─────────▼─────────┐  ┌─────────▼─────────┐
│ Prime (Head Eng)  │  │ Luna (Product PO) │  │ Caren (Executive) │
└─────────┬─────────┘  └───────────────────┘  └───────────────────┘
          │
    ┌─────┴──────────────────┬──────────────────┐
    │                        │                  │
┌───▼──────────────┐  ┌──────▼──────────┐  ┌────▼─────────────┐
│ Goder (Go/Sys)   │  │ Pixel (UI/UX)   │  │ Sysca (DevOps)   │
└──────────────────┘  └─────────────────┘  └──────────────────┘
```

### Specialist Profiles

1. **LEADYA (`root`) · Chief Orchestrator & CEO**
   - **Domain**: Executive coordination, task decomposition, and resource allocation.
   - **Model Tier**: Frontier Reasoning (`agenticprojectcombo`).
   - **Charter**: Formulate execution strategy, delegate to domain specialists, and enforce system-wide quality gates.

2. **Prime (`prime`) · Principal Engineer & Head of Engineering**
   - **Domain**: System architecture, ADR/RFC governance, and rigorous code reviews.
   - **Model Tier**: High-Reasoning Fast Tier (`gemini-3.1-pro-preview`).
   - **Charter**: Lead engineering excellence, prevent architectural decay, and act as review gatekeeper.

3. **Goder (`gosenior`) · Senior Polyglot Backend Engineer**
   - **Domain**: High-concurrency Go services, scatter-gather aggregators, and distributed persistence.
   - **Model Tier**: Smart High-Reasoning (`gemini-3.1-pro-preview`).
   - **Charter**: Pure idiomatic design, explicit error handling, table-driven tests (`go test -race`), and zero-allocation critical paths.

4. **Sysca (`infraguard`) · Infrastructure & DevOps Specialist**
   - **Domain**: VPS health, memory guardrails (`RAM >= 500 MB`), Caddy reverse proxy, and systemd daemons.
   - **Model Tier**: Fast Standard (`gemini-3.1-flash-lite-preview`).
   - **Charter**: Maintain 100% uptime, zero port leakage, and deterministic host recovery.

5. **Pixel (`pixel`) · Senior Frontend & UI/UX Specialist**
   - **Domain**: Astro SSG, Three.js 3D pipelines, Tailwind tokens, and WCAG AA design systems.
   - **Model Tier**: High-Reasoning (`gemini-3.1-pro-preview`).
   - **Charter**: Reject generic AI aesthetics; craft distinctive, high-density cyber-industrial consoles.

6. **Luna (`luna`) · Product Owner & Strategist**
   - **Domain**: PRD authoring, user journey maps, and feature ROI prioritization.
   - **Model Tier**: Fast Standard (`gemini-3.1-flash-lite-preview`).
   - **Charter**: Bridge technical capabilities with high-leverage business outcomes.

7. **Lexa (`lexa`) · Content & Narrative Specialist**
   - **Domain**: Technical writing, architecture case studies, and engineering blog posts.
   - **Model Tier**: Fast Standard (`gemini-3.1-flash-lite-preview`).
   - **Charter**: Guardian of authentic engineering voice and technical depth.

8. **Caren (`caren`) · Executive Coordinator & Life Operations**
   - **Domain**: Schedule coordination, habit routines, and personal operations.
   - **Model Tier**: Balanced Standard.
   - **Charter**: Proactive life coordination and workflow planning.

---

## Dual Visual Engines: 2D Pixel-Art & 3D Three.js

Observability should be tangible. The Virtual Office implements two distinct rendering modes:

### 1. 2D Pixel-Art Stage
Built with pure CSS sprites, sub-pixel grid alignment, and CSS keyframe animations:
- **Workstations**: Animated computer monitors with glowing code streams, PC towers with pulsing LEDs, and hot-desk slotting.
- **Office Decor**: Parquet flooring, bookshelf containing the SSOT architecture library, whiteboard showing sprint topologies, and the iconic *Galon Air* (water dispenser).
- **Lounge Area**: Executive armchair for LEADYA, team sofa for off-the-clock agents conserving tokens, smart TV with streaming swarm bytecode, and hot Toraja coffee.
- **Environmental Shaders**: Dynamic day/night cycle matching WIB (UTC+7) time with stars, drifting clouds, and sun/moon lighting transitions.

### 2. 3D Isometric Command Bridge
Powered by **Three.js** bundled as an ultra-compact standalone IIFE:
- **Voxel Geometry**: Custom low-poly meshes for office furniture, arcade cabinets, meeting tables, and server racks.
- **Lighting & Shadows**: Directional sun/moon lighting with ambient occlusion and soft shadow cascades.
- **Camera Controls**: OrbitControls with smooth panning, zoom clamps, and automatic camera resets.

---

## Security & Privacy Sanitization Architecture

Serving an autonomous multi-agent cockpit on a public portfolio requires strict zero-trust boundary isolation:

1. **Network & Host Masking**: Server IP addresses, private ports, and internal reverse proxy topologies are completely hidden from client bundles.
2. **Channel Anonymization**: Internal Telegram forum thread IDs and chat IDs are translated into sanitized topic streams (`#engineering-architecture`, `#tech-intelligence`, `#systems-reliability`).
3. **Execution Sandbox**: Public visitors enjoy full interactive exploration, 2D/3D navigation, and agent dossier inspection with zero write permissions or command invocation attack vectors.
4. **Memory Headroom Invariant**: Fleet processes operate within a strict memory budget, maintaining $\ge 500\text{ MB}$ available RAM at all times on the host node.

---

## Live System Experience

Experience the live multi-agent office directly in your browser:

👉 **[Open Virtual Office Command Bridge →](/office)**

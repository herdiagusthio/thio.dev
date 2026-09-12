---
title: "Use Git + Markdown for Second Brain"
date: 2026-07-19
category: "engineering"
status: "published"
tags: ["architecture", "knowledge-management"]
---
# ADR: Use Git + Markdown for Second Brain

## Context
We need a structure for our 'second brain' that ensures high portability, longevity, and easy parsing for LLMs without vendor lock-in. We evaluated several alternatives including Obsidian, Notion, vendor-locked LLM memory systems, and SQLite databases.

## Decision
We decided to use a standard Git repository containing Markdown files. 

## Consequences
**Pros:**
- **LLM Portability:** Markdown is natively and perfectly understood by all LLMs. 
- **No Vendor Lock-in:** Git and Markdown are universal standards.
- **Versioning:** We get complete version history and backup for free through Git.

**Cons:**
- We lack out-of-box UI features (like Notion's databases or Obsidian's graph view) and need to build any required automations or integrations manually.

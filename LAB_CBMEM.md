# Codebase Impact Graph: Lab

## Interface
- Query: `/api/cbmem/query?q=<symbol>`
- Visualizer: D3.js force-directed graph linked to symbol metadata.

## Backend
- Indexed symbols: 42
- Indexed files: 19
- DB: SQLite FTS5 (storage: `second-brain/codebase/thio.dev/`)

## Principal Engineer Note (Lexa)
The lab provides a "God-mode" view of our utility stack. By decoupling indexing from the main runtime, we maintain performance while enabling deep impact analysis.

## Implementation Details
- `cbmem` CLI runs as a sidecar.
- Data resides in `code-storage/second-brain/codebase/thio.dev/`.
- Query interface proxies to SQLite for real-time latency.

`ponytail:` Indexer current heuristic-based. Add `tree-sitter` for full AST when logic complexity increases.

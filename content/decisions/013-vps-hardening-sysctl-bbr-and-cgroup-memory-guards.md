---
title: "ADR 013: Single-VPS Resource Hardening, TCP BBR & Cgroup Memory Guardrails"
date: "2026-10-17"
status: accepted
tags: ["architecture", "adr", "systems"]
---

# ADR 013: Single-VPS Resource Hardening, TCP BBR & Cgroup Memory Guardrails

## Context
`HermesHost` (`103.217.144.64`) is a single 1.9 GB RAM KVM VPS running three concurrent workloads:
1. Production web & API services (`thio.dev`, `nikahyuk-api`, `postgresql@16-main`, `golinks`, `caddy`).
2. Autonomous AI Agent & Cockpit services (`hermes-gateway`, `hermes-dashboard`, `9router`, `vps-dashboard`, `gbrain`).
3. On-demand agentic coding and compilation (`agy`, Go build toolchains, Bun/Node test runners).

During the October 17, 2026 comprehensive server audit, we identified:
- **~45 MB RSS wasted** on hardware/desktop daemons inapplicable to a headless KVM guest (`fwupd`, `udisks2`, `open-vm-tools`, `snapd`, `rsyslog`, user `at-spi-dbus-bus` and `dconf`).
- **46.5 MB RSS consumed** by `systemd-journald` due to unbounded journal file mappings (`233 MB` on disk).
- **2.35 GB of disk caches** (`~/.hermes/cache`, `~/.npm`, `~/.cache/go-build`, `~/.hermes/profiles-archived`).
- **TCP SYN backlog bottleneck**: `net.ipv4.tcp_max_syn_backlog` was set to `128` while `net.core.somaxconn` was `4096`, and TCP congestion control defaulted to `cubic` instead of `bbr`.
- **Unbounded user services**: `hermes-dashboard`, `9router`, and `vps-dashboard` had no systemd cgroup `MemoryHigh`/`MemoryMax` limits.

## Decision
1. **Prune Non-KVM & Desktop Daemons**:
   - Disable and mask `fwupd.service`, `udisks2.service`, `rsyslog.service`, and user-level `at-spi-dbus-bus.service` / `dconf.service`.
   - Purge `open-vm-tools`, `open-iscsi`, and empty `snapd`.
2. **Cap `systemd-journald` Footprint**:
   - Enforce `SystemMaxUse=50M`, `SystemMaxFileSize=10M`, and `RuntimeMaxUse=16M` via `/etc/systemd/journald.conf.d/size-limit.conf`.
3. **Kernel & Network `sysctl` Optimization (`/etc/sysctl.d/99-vps-performance.conf`)**:
   - Enable `tcp_bbr` with `fq` queue discipline.
   - Align `net.ipv4.tcp_max_syn_backlog = 4096` with `net.core.somaxconn = 4096` and reduce `tcp_fin_timeout = 15`.
   - Set `vm.dirty_ratio = 10`, `vm.dirty_background_ratio = 5`, and `vm.vfs_cache_pressure = 50` to prevent disk I/O stalls on 1.9 GB RAM.
4. **Cgroup Memory Guardrails & Sub-Second OOM Defense**:
   - Enforce `MemoryHigh`/`MemoryMax` on `hermes-dashboard.service` (`220M`/`280M`), `9router.service` (`180M`/`240M`), and `vps-dashboard.service` (`80M`/`120M`).
   - Add `zram-tools` (25% RAM zstd compressed swap tier) and `earlyoom` (~2 MB RSS) configured to protect critical infrastructure (`sshd`, `caddy`, `postgres`) and preferentially terminate runaway compiler/subagent processes if free memory drops critically.
5. **Deterministic Rollback**:
   - Maintain a self-contained rollback script (`execution-plans/vps-hardening-and-optimization/rollback.sh`) capable of restoring all pre-audit configs in a single command.

## Status
Accepted (2026-10-17). Documented with full rollback runbook prior to execution.

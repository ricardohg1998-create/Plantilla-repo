---
name: feature-flags-rollout
description: "Introduce feature flags and safe rollout patterns (kill-switches, staged enablement) for high-risk features."
version: 1.0.0
allowed-tools: ["Read", "Write", "Edit", "Bash", "Glob", "Grep"]
tags: ["feature", "flags", "rollout"]
---
# Feature Flags + Rollout

## Goal
Ship complex features safely via flags, kill-switches, and staged rollout strategy.

## When to use
- PRODUCTION+.
- Risky feature changes.
- Staged client rollout.

## Minimal inputs (ask only if missing)
- Flag scope (global/tenant/user).
- Default behavior.

## Procedure (MUST)
1) Define minimal flag interface and storage.
2) Implement flag provider.
3) Guard UI + API behaviors.
4) Add kill-switch.
5) Document rollout and rollback triggers.

## Outputs (MUST produce)
- `docs/feature_flags.md`.
- Flag provider implementation.
- Example guarded feature pattern.


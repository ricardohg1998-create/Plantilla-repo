---
name: perf-budget-enforcer
description: "Set and enforce performance budgets; implement list strategies; remove expensive effects."
version: 1.0.0
allowed-tools: ["Read", "Write", "Edit", "Bash", "Glob", "Grep"]
tags: ["perf", "budget", "enforcer"]
---
# Performance Budget Enforcer

## Goal
Maintain fast UX under realistic loads; avoid heavy effects that scream demo UI.

## When to use
- Lists/tables exist.
- Sluggish UI.
- Heavy blur/motion.

## Minimal inputs (ask only if missing)
- Target devices.
- Expected list sizes.

## Procedure (MUST)
1) Define budgets.
2) Pagination/virtualization.
3) Remove heavy blur/shadows/filters.
4) Motion uses transform/opacity.
5) Document mitigations.

## Outputs (MUST produce)
- `docs/perf_budget.md`.
- List strategy implemented.
- Evidence of heavy effects removal.


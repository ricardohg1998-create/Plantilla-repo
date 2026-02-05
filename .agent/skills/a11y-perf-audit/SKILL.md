---
name: a11y-perf-audit
description: "Audit and fix accessibility and performance issues: keyboard nav, focus, contrast, reduced motion, list performance, expensive effects."
version: 1.0.0
allowed-tools: ["Read", "Write", "Edit", "Bash", "Glob", "Grep"]
tags: ["a11y", "perf", "audit"]
---
# A11y + Performance Audit

## Goal
Catch and fix a11y/perf regressions that betray shallow implementations.

## When to use
- Before release.
- After big UI changes.
- Heavy motion/effects present.

## Minimal inputs (ask only if missing)
- Key flows.

## Procedure (MUST)
1) a11y: keyboard, focus, labels, error messaging, contrast, reduced motion.
2) perf: remove heavy blur, avoid layout thrash, list strategy.
3) Document findings and fixes.

## Outputs (MUST produce)
- `docs/a11y_perf_audit.md`.
- Implemented fixes.


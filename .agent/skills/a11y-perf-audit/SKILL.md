---
name: a11y-perf-audit
description: Use when the request requires audit and fix accessibility and performance issues: keyboard nav, focus, contrast, reduced motion, list performance, expensive effects.
---

# A11y + Performance Audit

## Do not use when
- The request is unrelated to this domain or requires a different specialized skill.
- The user asks only for high-level discussion without applying this workflow.
- Another skill has a tighter, more specific trigger for the same request.

## Example user requests
- "Apply a11y perf audit to improve this feature."
- "Use a11y perf audit and give me the concrete deliverables."
- "Can you run a full a11y perf audit pass on this repo?"
- "I need step-by-step execution using a11y perf audit."
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


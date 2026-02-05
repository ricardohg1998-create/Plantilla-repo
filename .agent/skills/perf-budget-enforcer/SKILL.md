---
name: perf-budget-enforcer
description: Use when the request requires set and enforce performance budgets; implement list strategies; remove expensive effects.
---

# Performance Budget Enforcer

## Do not use when
- The request is unrelated to this domain or requires a different specialized skill.
- The user asks only for high-level discussion without applying this workflow.
- Another skill has a tighter, more specific trigger for the same request.

## Example user requests
- "Apply perf budget enforcer to improve this feature."
- "Use perf budget enforcer and give me the concrete deliverables."
- "Can you run a full perf budget enforcer pass on this repo?"
- "I need step-by-step execution using perf budget enforcer."
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


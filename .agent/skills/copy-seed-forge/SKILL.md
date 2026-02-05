---
name: copy-seed-forge
description: Use when the request requires replace generic copy and dead UIs with domain microcopy and realistic seeded datasets.
---

# Copy + Seed Forge

## Do not use when
- The request is unrelated to this domain or requires a different specialized skill.
- The user asks only for high-level discussion without applying this workflow.
- Another skill has a tighter, more specific trigger for the same request.

## Example user requests
- "Apply copy seed forge to improve this feature."
- "Use copy seed forge and give me the concrete deliverables."
- "Can you run a full copy seed forge pass on this repo?"
- "I need step-by-step execution using copy seed forge."
## Goal
Eliminate AI-ish copy and enforce domain realism with seeded data.

## When to use
- Copy is generic.
- UI lacks realistic data.

## Minimal inputs (ask only if missing)
- Entities + statuses.
- Tone constraints.

## Procedure (MUST)
1) Identify entities and states.
2) Write microcopy per screen.
3) Seed dataset (20–60 rows) with realistic distributions.
4) Validate layout under edge values.

## Outputs (MUST produce)
- `docs/microcopy.md`.
- Seed dataset + import notes.


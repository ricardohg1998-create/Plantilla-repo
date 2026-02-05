---
name: design-qa-polish-pass
description: "Run a senior-level design QA pass to eliminate AI-like artifacts: rhythm, alignment, typography, state polish, interaction feedback, and mobile finesse."
version: 1.0.0
allowed-tools: ["Read", "Write", "Edit", "Bash", "Glob", "Grep"]
tags: ["design", "qa", "polish", "pass"]
---
# Design QA + Polish Pass

## Goal
Remove the remaining “AI smell”: subtle inconsistencies, kit artifacts, unfinished states, and copy roughness.

## When to use
- Before final delivery.
- After major UI changes.

## Minimal inputs (ask only if missing)
- Key routes.
- Target devices.

## Procedure (MUST)
1) Audit rhythm/alignment and typography scale.
2) Audit states (empty/loading/error/success) and disabled/focus.
3) Remove kit fingerprints.
4) Improve interaction feedback.
5) Produce punchlist and apply fixes; capture proof.

## Outputs (MUST produce)
- `docs/design_qa.md` with punchlist + fixes.
- Applied polish changes.


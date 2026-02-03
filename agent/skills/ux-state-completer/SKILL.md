---
name: ux-state-completer
description: Implement complete UX states and recovery paths for critical flows.
---

# UX State Completer

## Goal
Eliminate happy-path demos by implementing full state matrices and recovery with domain microcopy.

## When to use
- New screen/flow.
- Missing error/empty/loading/success.

## Minimal inputs (ask only if missing)
- Top 3 flows and expected states.

## Procedure (MUST)
1) Define state matrix.
2) Implement loading/empty/error/success + recovery.
3) Add permission denied + timeout.
4) Ensure domain-specific microcopy.
5) Capture proof.

## Outputs (MUST produce)
- State-complete flows.
- Proof references in walkthrough.


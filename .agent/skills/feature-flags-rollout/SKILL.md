---
name: feature-flags-rollout
description: Use when the request requires introduce feature flags and safe rollout patterns (kill-switches, staged enablement) for high-risk features.
---

# Feature Flags + Rollout

## Do not use when
- The request is unrelated to this domain or requires a different specialized skill.
- The user asks only for high-level discussion without applying this workflow.
- Another skill has a tighter, more specific trigger for the same request.

## Example user requests
- "Apply feature flags rollout to improve this feature."
- "Use feature flags rollout and give me the concrete deliverables."
- "Can you run a full feature flags rollout pass on this repo?"
- "I need step-by-step execution using feature flags rollout."
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


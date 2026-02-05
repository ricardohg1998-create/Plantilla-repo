---
name: stack-architect-selector
description: "Select the best-fit stack and architecture for a client project (marketing/product/SaaS-CRM), with explicit tradeoffs for depth and differentiation."
version: 1.0.0
allowed-tools: ["Read", "Write", "Edit", "Bash", "Glob", "Grep"]
tags: ["stack", "architect", "selector"]
---
# Stack + Architecture Selector

## Goal
Choose a stack and architecture that supports PRODUCTION-depth delivery and avoids default-kit, AI-generic outcomes.

## When to use
- Kickoff when stack is undefined.
- Need to justify deployment, boundaries, or avoid shallow outcomes.

## Minimal inputs (ask only if missing)
- Project class.
- Hosting preference (or propose one).
- Data/auth needs.
- Mobile expectations.

## Procedure (MUST)
1) Enforce rules.
2) Propose 2–3 stacks, score depth/differentiation/ops/time.
3) Choose winner and specify FE/BE/DB/auth/jobs/obs/deploy.
4) Document tradeoffs + rejected options.

## Outputs (MUST produce)
- Update `docs/implementation_plan.md`.
- Create `docs/architecture_decision.md`.


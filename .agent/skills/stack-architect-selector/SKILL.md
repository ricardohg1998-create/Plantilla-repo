---
name: stack-architect-selector
description: Use when the request requires select the best-fit stack and architecture for a client project (marketing/product/SaaS-CRM), with explicit tradeoffs for depth and differentiation.
---

# Stack + Architecture Selector

## Do not use when
- The request is unrelated to this domain or requires a different specialized skill.
- The user asks only for high-level discussion without applying this workflow.
- Another skill has a tighter, more specific trigger for the same request.

## Example user requests
- "Apply stack architect selector to improve this feature."
- "Use stack architect selector and give me the concrete deliverables."
- "Can you run a full stack architect selector pass on this repo?"
- "I need step-by-step execution using stack architect selector."
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


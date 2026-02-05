---
name: authz-policy-engineer
description: Use when the request requires design and implement RBAC/ABAC with tests for denial and escalation.
---

# Authorization Policy Engineer (RBAC/ABAC)

## Do not use when
- The request is unrelated to this domain or requires a different specialized skill.
- The user asks only for high-level discussion without applying this workflow.
- Another skill has a tighter, more specific trigger for the same request.

## Example user requests
- "Apply authz policy engineer to improve this feature."
- "Use authz policy engineer and give me the concrete deliverables."
- "Can you run a full authz policy engineer pass on this repo?"
- "I need step-by-step execution using authz policy engineer."
## Goal
Create enforceable authorization with server-side source-of-truth and UI reflection.

## When to use
- Any authenticated app.
- Any SaaS/CRM.

## Minimal inputs (ask only if missing)
- Roles (or propose minimal).
- Sensitive actions list.

## Procedure (MUST)
1) Enumerate resources/actions.
2) Propose role/attribute policy.
3) Implement centralized enforcement.
4) Reflect in UI.
5) Add tests for escalation attempts.

## Outputs (MUST produce)
- `docs/authz_model.md`.
- Enforcement layer.
- Permission tests.


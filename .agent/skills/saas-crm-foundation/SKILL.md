---
name: saas-crm-foundation
description: Use when the request requires implement SaaS/CRM primitives: tenancy, RBAC, audit, idempotency, integrations readiness.
---

# SaaS/CRM Foundation

## Do not use when
- The request is unrelated to this domain or requires a different specialized skill.
- The user asks only for high-level discussion without applying this workflow.
- Another skill has a tighter, more specific trigger for the same request.

## Example user requests
- "Apply saas crm foundation to improve this feature."
- "Use saas crm foundation and give me the concrete deliverables."
- "Can you run a full saas crm foundation pass on this repo?"
- "I need step-by-step execution using saas crm foundation."
## Goal
Scaffold platform primitives expected from senior SaaS/CRM systems.

## When to use
- Building a CRM/SaaS.
- Need tenancy, permissions, audit, integrations.

## Minimal inputs (ask only if missing)
- Tenancy model (default tenant-ready).
- Role expectations.

## Procedure (MUST)
1) Enforce tenant scoping.
2) Define RBAC/ABAC and enforcement.
3) Implement audit logging.
4) Ensure idempotency for writes/webhooks.
5) Add abuse controls.
6) Document API contracts.

## Outputs (MUST produce)
- Tenancy strategy.
- AuthZ enforced.
- Audit log.
- Integration primitives.


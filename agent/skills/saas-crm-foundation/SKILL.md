---
name: saas-crm-foundation
description: Implement SaaS/CRM primitives: tenancy, RBAC, audit, idempotency, integrations readiness.
---

# SaaS/CRM Foundation

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


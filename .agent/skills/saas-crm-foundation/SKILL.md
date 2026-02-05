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

## Companion files

### `references/*`
- `references/audit-events.md` — Use when… Use when you need domain-specific rules, schemas, or decision criteria.

### `checklists/*`
- _(none in this skill)_

### `templates/*`
- _(none in this skill)_

### `scripts/*`
- _(none in this skill)_

### Quick flow
- Si necesitas contexto o reglas del dominio, abre `references/*`.
- Si necesitas validar calidad antes de cerrar, abre `checklists/*`.
- Si necesitas generar un documento/archivo base rápidamente, abre `templates/*`.
- Si necesitas automatizar o consultar datos estructurados, abre `scripts/*`.

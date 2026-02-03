---
name: data-modeler-crm
description: Design CRM/SaaS data model with constraints, indexes, migrations, and seed strategy.
---

# Data Modeler — CRM/SaaS

## Goal
Design data structures for deep behavior, integrity, and scale.

## When to use
- Starting a CRM/SaaS.
- Schema ad hoc.

## Minimal inputs (ask only if missing)
- Entities and workflows.
- Tenancy requirements.

## Procedure (MUST)
1) Draft ERD-level model.
2) Define constraints/enums.
3) Define indexes.
4) Produce migrations + seed plan.
5) Document invariants.

## Outputs (MUST produce)
- `docs/data_model.md`.
- Migrations (or exact statements).
- Seed dataset strategy.


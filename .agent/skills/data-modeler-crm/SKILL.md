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

## Companion files

### `references/*`
- `references/crm-entities.md` — Use when… Use when you need domain-specific rules, schemas, or decision criteria.

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

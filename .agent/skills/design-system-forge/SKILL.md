---
name: design-system-forge
description: Create or refactor a governed design system: tokens + base UI + non-recognizable kit overrides.
---

# Design System Forge

## Goal
Establish a governed design system and thesis so the UI is authorial, consistent, and scalable.

## When to use
- New UI.
- Kit-default UI.
- Inconsistency across screens.

## Minimal inputs (ask only if missing)
- Domain + product personality (infer if absent).
- Styling approach.
- Light/dark requirement.

## Procedure (MUST)
1) Create/update `docs/design_concept.md`.
2) Define core + semantic tokens.
3) Implement tokens.
4) Build base UI components consuming tokens.
5) If using a kit: override the 6 domains and fill `docs/ui_audit.md`.
6) Apply across ≥3 screens and capture proof.

## Outputs (MUST produce)
- `docs/design_concept.md` (+ `docs/ui_audit.md` if kit).
- Tokens implementation.
- Base UI in `web/components/ui/`.

## Companion files

### `references/*`
- `references/token-taxonomy.md` — Use when… Use when you need domain-specific rules, schemas, or decision criteria.

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

---
name: design-qa-polish-pass
description: Run a senior-level design QA pass to eliminate AI-like artifacts: rhythm, alignment, typography, state polish, interaction feedback, and mobile finesse.
---

# Design QA + Polish Pass

## Goal
Remove the remaining “AI smell”: subtle inconsistencies, kit artifacts, unfinished states, and copy roughness.

## When to use
- Before final delivery.
- After major UI changes.

## Minimal inputs (ask only if missing)
- Key routes.
- Target devices.

## Procedure (MUST)
1) Audit rhythm/alignment and typography scale.
2) Audit states (empty/loading/error/success) and disabled/focus.
3) Remove kit fingerprints.
4) Improve interaction feedback.
5) Produce punchlist and apply fixes; capture proof.

## Outputs (MUST produce)
- `docs/design_qa.md` with punchlist + fixes.
- Applied polish changes.

## Companion files

### `references/*`
- _(none in this skill)_

### `checklists/*`
- `checklists/design-qa-checklist.md` — Use when… Use when you need a step-by-step QA gate before closing the task.

### `templates/*`
- _(none in this skill)_

### `scripts/*`
- _(none in this skill)_

### Quick flow
- Si necesitas contexto o reglas del dominio, abre `references/*`.
- Si necesitas validar calidad antes de cerrar, abre `checklists/*`.
- Si necesitas generar un documento/archivo base rápidamente, abre `templates/*`.
- Si necesitas automatizar o consultar datos estructurados, abre `scripts/*`.

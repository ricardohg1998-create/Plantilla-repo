---
name: repo-scaffold-pro
description: Create a senior-team-grade repository scaffold aligned to the chosen stack, including docs, checks, design system bootstrap, and a first vertical slice.
---

# Repo Scaffold Pro

## Goal
Create a runnable scaffold that forces depth (not UI-only demos).

## When to use
- After stack selection.
- Empty folder start.

## Minimal inputs (ask only if missing)
- Selected stack.
- Package manager (or choose and document).

## Procedure (MUST)
1) Ensure `.agent/` at repo root.
2) Create topology (`web/`, `api/`, `docs/`).
3) Copy templates into `docs/`.
4) Bootstrap tokens + base UI.
5) Add scripts for checks.
6) Implement one vertical slice with persistence + full states.
7) Update walkthrough + decision log.

## Outputs (MUST produce)
- Runnable scaffold.
- Tokens + base UI.
- One vertical slice + proof plan.

## Companion files

### `references/*`
- _(none in this skill)_

### `checklists/*`
- `checklists/scaffold-checklist.md` — Use when… Use when you need a step-by-step QA gate before closing the task.

### `templates/*`
- _(none in this skill)_

### `scripts/*`
- _(none in this skill)_

### Quick flow
- Si necesitas contexto o reglas del dominio, abre `references/*`.
- Si necesitas validar calidad antes de cerrar, abre `checklists/*`.
- Si necesitas generar un documento/archivo base rápidamente, abre `templates/*`.
- Si necesitas automatizar o consultar datos estructurados, abre `scripts/*`.

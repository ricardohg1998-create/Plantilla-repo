---
name: visual-regression-guardian
description: Set up Playwright visual regression testing: baselines, multi-viewport, state coverage, CI integration.
---

# Visual Regression Guardian (Playwright)

## Goal
Prevent visual drift and catch subtle regressions in high-impact UIs.

## When to use
- PRODUCTION+.
- After tokens and signature patterns exist.
- Before client handoff.

## Minimal inputs (ask only if missing)
- Routes to baseline.
- Viewports.
- Light/dark variants.

## Procedure (MUST)
1) Add and configure Playwright.
2) Create `docs/visual_regression.md` from template.
3) Implement visual tests for key routes and critical states.
4) Define snapshot update policy.
5) Integrate into CI.

## Outputs (MUST produce)
- `docs/visual_regression.md`.
- `tests/visual/*.spec.*`.
- Playwright config + report artifacts.

## Notes
Snapshots are reviewed artifacts, not auto-updated noise.

## Companion files

### `references/*`
- _(none in this skill)_

### `checklists/*`
- _(none in this skill)_

### `templates/*`
- `templates/playwright-visual-example.spec.ts` — Use when… Use when you need a ready-to-copy starter file instead of creating one from scratch.

### `scripts/*`
- _(none in this skill)_

### Quick flow
- Si necesitas contexto o reglas del dominio, abre `references/*`.
- Si necesitas validar calidad antes de cerrar, abre `checklists/*`.
- Si necesitas generar un documento/archivo base rápidamente, abre `templates/*`.
- Si necesitas automatizar o consultar datos estructurados, abre `scripts/*`.

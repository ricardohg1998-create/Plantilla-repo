---
name: ci-cd-hardener
description: Add CI pipeline hygiene: caching, parallel checks, and artifact uploads for reports.
---

# CI/CD Hardener

## Goal
Senior baseline CI: deterministic checks, caching, and artifacts for proof.

## When to use
- New repo.
- Before client handoff.

## Minimal inputs (ask only if missing)
- CI provider (default GitHub Actions).
- Package manager.
- Commands for checks.

## Procedure (MUST)
1) Ensure scripts exist.
2) Add CI workflow (install cached, lint/typecheck/test, e2e/visual if configured, upload artifacts).
3) Fail on violations.
4) Document local parity.

## Outputs (MUST produce)
- CI workflow file.
- `docs/ci.md`.

## Companion files

### `references/*`
- _(none in this skill)_

### `checklists/*`
- _(none in this skill)_

### `templates/*`
- `templates/github-actions-ci.yml` — Use when… Use when you need a ready-to-copy starter file instead of creating one from scratch.

### `scripts/*`
- _(none in this skill)_

### Quick flow
- Si necesitas contexto o reglas del dominio, abre `references/*`.
- Si necesitas validar calidad antes de cerrar, abre `checklists/*`.
- Si necesitas generar un documento/archivo base rápidamente, abre `templates/*`.
- Si necesitas automatizar o consultar datos estructurados, abre `scripts/*`.

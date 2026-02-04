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


---
name: design-system-forge
description: Use when the request requires create or refactor a governed design system: tokens + base UI + non-recognizable kit overrides.
---

# Design System Forge

## Do not use when
- The request is unrelated to this domain or requires a different specialized skill.
- The user asks only for high-level discussion without applying this workflow.
- Another skill has a tighter, more specific trigger for the same request.

## Example user requests
- "Apply design system forge to improve this feature."
- "Use design system forge and give me the concrete deliverables."
- "Can you run a full design system forge pass on this repo?"
- "I need step-by-step execution using design system forge."
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


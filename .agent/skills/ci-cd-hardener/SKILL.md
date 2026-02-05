---
name: ci-cd-hardener
description: Use when the request requires add CI pipeline hygiene: caching, parallel checks, and artifact uploads for reports.
---

# CI/CD Hardener

## Do not use when
- The request is unrelated to this domain or requires a different specialized skill.
- The user asks only for high-level discussion without applying this workflow.
- Another skill has a tighter, more specific trigger for the same request.

## Example user requests
- "Apply ci cd hardener to improve this feature."
- "Use ci cd hardener and give me the concrete deliverables."
- "Can you run a full ci cd hardener pass on this repo?"
- "I need step-by-step execution using ci cd hardener."
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


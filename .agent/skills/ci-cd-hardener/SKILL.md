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


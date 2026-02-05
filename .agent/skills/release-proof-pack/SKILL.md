---
name: release-proof-pack
description: "Generate auditable proof: walkthrough + decision log + release checklist confirming gates pass."
version: 1.0.0
allowed-tools: ["Read", "Write", "Edit", "Bash", "Glob", "Grep"]
tags: ["release", "proof", "pack"]
---
# Release Proof Pack

## Goal
Evidence-based DONE: checks + proof + artifacts.

## When to use
- End of any feature/phase.

## Minimal inputs (ask only if missing)
- Commands for build/lint/typecheck/tests (discover if unknown).

## Procedure (MUST)
1) Run checks.
2) Capture proof (flow + states + signature patterns).
3) Update walkthrough + decision log.
4) Create release checklist from template.

## Outputs (MUST produce)
- `docs/release_checklist.md`.
- Updated docs.
- Proof references.


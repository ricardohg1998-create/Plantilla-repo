---
name: authz-policy-engineer
description: "Design and implement RBAC/ABAC with tests for denial and escalation."
version: 1.0.0
allowed-tools: ["Read", "Write", "Edit", "Bash", "Glob", "Grep"]
tags: ["authz", "policy", "engineer"]
---
# Authorization Policy Engineer (RBAC/ABAC)

## Goal
Create enforceable authorization with server-side source-of-truth and UI reflection.

## When to use
- Any authenticated app.
- Any SaaS/CRM.

## Minimal inputs (ask only if missing)
- Roles (or propose minimal).
- Sensitive actions list.

## Procedure (MUST)
1) Enumerate resources/actions.
2) Propose role/attribute policy.
3) Implement centralized enforcement.
4) Reflect in UI.
5) Add tests for escalation attempts.

## Outputs (MUST produce)
- `docs/authz_model.md`.
- Enforcement layer.
- Permission tests.


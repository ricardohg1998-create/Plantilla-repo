---
name: sre-runbook-observability
description: "Create a practical runbook and observability baseline: error boundaries, API error conventions, logging schema, triage and rollback steps."
version: 1.0.0
allowed-tools: ["Read", "Write", "Edit", "Bash", "Glob", "Grep"]
tags: ["sre", "runbook", "observability"]
---
# SRE Runbook + Observability

## Goal
Make the system operable: predictable diagnostics, safe rollbacks, and clear runtime failure behavior.

## When to use
- PRODUCTION+.
- Any app with auth + persistence.
- Integrations/jobs exist.

## Minimal inputs (ask only if missing)
- Hosting target.
- Error reporting preference (or propose).

## Procedure (MUST)
1) Define health checks.
2) Implement frontend error boundaries + API error conventions.
3) Define logging schema (no PII) + correlation IDs where possible.
4) Document triage + rollback steps.
5) Add release operations checklist.

## Outputs (MUST produce)
- `docs/runbook.md`.
- Error boundaries + error conventions.
- Logging schema notes.


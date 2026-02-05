---
name: sre-runbook-observability
description: Use when the request requires create a practical runbook and observability baseline: error boundaries, API error conventions, logging schema, triage and rollback steps.
---

# SRE Runbook + Observability

## Do not use when
- The request is unrelated to this domain or requires a different specialized skill.
- The user asks only for high-level discussion without applying this workflow.
- Another skill has a tighter, more specific trigger for the same request.

## Example user requests
- "Apply sre runbook observability to improve this feature."
- "Use sre runbook observability and give me the concrete deliverables."
- "Can you run a full sre runbook observability pass on this repo?"
- "I need step-by-step execution using sre runbook observability."
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


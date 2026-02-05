---
name: integrations-orchestrator
description: Use when the request requires implement resilient integrations: webhooks, jobs, retries, idempotency, observability.
---

# Integrations Orchestrator

## Do not use when
- The request is unrelated to this domain or requires a different specialized skill.
- The user asks only for high-level discussion without applying this workflow.
- Another skill has a tighter, more specific trigger for the same request.

## Example user requests
- "Apply integrations orchestrator to improve this feature."
- "Use integrations orchestrator and give me the concrete deliverables."
- "Can you run a full integrations orchestrator pass on this repo?"
- "I need step-by-step execution using integrations orchestrator."
## Goal
Integrations that survive retries/failures/out-of-order events.

## When to use
- Adding webhooks/jobs/third-party APIs.

## Minimal inputs (ask only if missing)
- Events/endpoints.
- SLAs (or safe defaults).

## Procedure (MUST)
1) Define event model + idempotency.
2) Implement ingestion with signature verification where applicable.
3) Process via jobs with retries/backoff.
4) Add dead-letter/failure reporting.
5) Add structured logging with context.

## Outputs (MUST produce)
- `docs/integration_design.md`.
- Implemented ingestion + processing.
- Failure handling plan.


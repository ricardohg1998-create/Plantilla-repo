---
name: integrations-orchestrator
description: Implement resilient integrations: webhooks, jobs, retries, idempotency, observability.
---

# Integrations Orchestrator

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


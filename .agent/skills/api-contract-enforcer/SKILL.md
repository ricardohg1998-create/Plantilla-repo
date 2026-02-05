---
name: api-contract-enforcer
description: "Define API contracts and enforce via validation/contract tests and client typing."
version: 1.0.0
allowed-tools: ["Read", "Write", "Edit", "Bash", "Glob", "Grep"]
tags: ["api", "contract", "enforcer"]
---
# API Contract Enforcer

## Goal
Prevent unstable integrations by defining and validating API contracts early.

## When to use
- Any API work.
- Webhooks/integrations.

## Minimal inputs (ask only if missing)
- REST/OpenAPI vs GraphQL.
- Core resources/ops.

## Procedure (MUST)
1) Define contract.
2) Add examples.
3) Generate types.
4) Add contract validation.
5) Document versioning.

## Outputs (MUST produce)
- `docs/api_contract.*`.
- Contract validation/tests.
- Client typing notes.


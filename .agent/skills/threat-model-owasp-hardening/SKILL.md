---
name: threat-model-owasp-hardening
description: Create a lightweight threat model + security checklist; implement mitigations and tests for auth/authZ/data boundaries.
---

# Threat Model + Security Hardening

## Goal
Senior-grade security posture for PRODUCTION+: explicit threats, mitigations, and verifiable enforcement.

## When to use
- Any authenticated app.
- All SaaS/CRM.
- Before client handoff.

## Minimal inputs (ask only if missing)
- Actors/assets/boundaries.
- Sensitive operations list.

## Procedure (MUST)
1) Create `docs/threat_model.md` and `docs/security_checklist.md` from templates.
2) Identify top risks (object access, privilege escalation, tenant leakage, CSRF where applicable, insecure webhook ingestion).
3) Implement mitigations.
4) Add tests asserting denials and boundary enforcement.
5) Record residual risks and monitoring notes.

## Outputs (MUST produce)
- Threat model + checklist docs.
- Implemented mitigations + tests.

## Safety
If real production systems/credentials are involved, REQUEST REVIEW.


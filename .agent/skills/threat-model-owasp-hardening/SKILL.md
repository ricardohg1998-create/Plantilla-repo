---
name: threat-model-owasp-hardening
description: Use when the request requires create a lightweight threat model + security checklist; implement mitigations and tests for auth/authZ/data boundaries.
---

# Threat Model + Security Hardening

## Do not use when
- The request is unrelated to this domain or requires a different specialized skill.
- The user asks only for high-level discussion without applying this workflow.
- Another skill has a tighter, more specific trigger for the same request.

## Example user requests
- "Apply threat model owasp hardening to improve this feature."
- "Use threat model owasp hardening and give me the concrete deliverables."
- "Can you run a full threat model owasp hardening pass on this repo?"
- "I need step-by-step execution using threat model owasp hardening."
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


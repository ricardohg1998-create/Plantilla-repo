---
name: release-proof-pack
description: Use when the request requires generate auditable proof: walkthrough + decision log + release checklist confirming gates pass.
---

# Release Proof Pack

## Do not use when
- The request is unrelated to this domain or requires a different specialized skill.
- The user asks only for high-level discussion without applying this workflow.
- Another skill has a tighter, more specific trigger for the same request.

## Example user requests
- "Apply release proof pack to improve this feature."
- "Use release proof pack and give me the concrete deliverables."
- "Can you run a full release proof pack pass on this repo?"
- "I need step-by-step execution using release proof pack."
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


# Release Checklist (Proof)

## Differentiation gate
- [ ] Design thesis exists + signature patterns implemented
- [ ] Tokens + base UI present
- [ ] UI kit recognizability eliminated (ui_audit complete)
- [ ] Domain-realistic copy + seeded data
- [ ] Key states proven (loading/empty/error/success)

## Depth gate
- [ ] Vertical completeness per feature
- [ ] Horizontal surface area (as applicable)
- [ ] Transversal hardening (a11y/perf/security/observability/docs)

## Security (PRODUCTION+)
- [ ] Threat model completed
- [ ] Security checklist completed
- [ ] Critical auth/authZ reviewed

## Visual regression (PRODUCTION+ when UI changes are significant)
- [ ] Baseline created/updated
- [ ] Visual tests run and summarized

## Engineering proof
- [ ] Build passes
- [ ] Lint/typecheck passes
- [ ] Tests pass

## Artifacts
- [ ] docs/walkthrough.md updated
- [ ] docs/decision_log.md updated
- [ ] Proof images/recording referenced

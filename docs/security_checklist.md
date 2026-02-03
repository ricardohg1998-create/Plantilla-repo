# Security Checklist (Practical)

## Authentication
- [ ] Session/cookie security configured
- [ ] CSRF where applicable
- [ ] Password reset/invite flows safe

## Authorization
- [ ] Server-side enforcement centralized
- [ ] UI reflects permissions
- [ ] No IDOR (object access checks)

## Data safety
- [ ] Input validation at boundaries
- [ ] Output encoding where needed
- [ ] Tenant scoping enforced (if SaaS)

## Secrets & config
- [ ] No secrets in repo
- [ ] Safe env handling documented

## Integrations
- [ ] Webhook signature verification (if applicable)
- [ ] Idempotency keys for event processing
- [ ] Retries with backoff + dead-letter strategy

## Logging & privacy
- [ ] No PII in logs by default
- [ ] Error traces include context without secrets

## Dependency hygiene
- [ ] Lockfile present
- [ ] Known risky packages reviewed (documented)

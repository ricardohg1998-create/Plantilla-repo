# Skills disponibles en `.agent/skills`

Este documento pone en contexto a cualquier LLM sobre las skills disponibles en el repositorio. Incluye:

- Un índice con nombre, descripción y ruta para facilitar el discovery.
- El contenido completo de cada `SKILL.md` para que el modelo pueda aplicar los workflows tal como fueron definidos.

> Nota: Cada skill vive en su carpeta dentro de `.agent/skills` y su ámbito de aplicación está definido en su propio `SKILL.md`.

## Índice resumido

| Carpeta | Nombre (frontmatter) | Descripción | Ruta |
| --- | --- | --- | --- |
| `a11y-perf-audit` | `a11y-perf-audit` | Use when the request requires audit and fix accessibility and performance issues: keyboard nav, focus, contrast, reduced motion, list performance, expensive effects. | `.agent/skills/a11y-perf-audit/SKILL.md` |
| `api-contract-enforcer` | `api-contract-enforcer` | Use when the request requires define API contracts and enforce via validation/contract tests and client typing. | `.agent/skills/api-contract-enforcer/SKILL.md` |
| `authz-policy-engineer` | `authz-policy-engineer` | Use when the request requires design and implement RBAC/ABAC with tests for denial and escalation. | `.agent/skills/authz-policy-engineer/SKILL.md` |
| `ci-cd-hardener` | `ci-cd-hardener` | Use when the request requires add CI pipeline hygiene: caching, parallel checks, and artifact uploads for reports. | `.agent/skills/ci-cd-hardener/SKILL.md` |
| `clean-code` | `clean-code` | Use when the request requires pragmatic coding standards - concise, direct, no over-engineering, no unnecessary comments. | `.agent/skills/clean-code/SKILL.md` |
| `copy-seed-forge` | `copy-seed-forge` | Use when the request requires replace generic copy and dead UIs with domain microcopy and realistic seeded datasets. | `.agent/skills/copy-seed-forge/SKILL.md` |
| `copywriting` | `copywriting` | Use when the request requires >. | `.agent/skills/copywriting/SKILL.md` |
| `data-modeler-crm` | `data-modeler-crm` | Use when the request requires design CRM/SaaS data model with constraints, indexes, migrations, and seed strategy. | `.agent/skills/data-modeler-crm/SKILL.md` |
| `design-qa-polish-pass` | `design-qa-polish-pass` | Use when the request requires run a senior-level design QA pass to eliminate AI-like artifacts: rhythm, alignment, typography, state polish, interaction feedback, and mobile finesse. | `.agent/skills/design-qa-polish-pass/SKILL.md` |
| `design-system-forge` | `design-system-forge` | Use when the request requires create or refactor a governed design system: tokens + base UI + non-recognizable kit overrides. | `.agent/skills/design-system-forge/SKILL.md` |
| `feature-flags-rollout` | `feature-flags-rollout` | Use when the request requires introduce feature flags and safe rollout patterns (kill-switches, staged enablement) for high-risk features. | `.agent/skills/feature-flags-rollout/SKILL.md` |
| `frontend-design` | `frontend-design` | Use when the request requires create distinctive, production-grade frontend interfaces with intentional aesthetics, high craft, and non-generic visual identity. Use when building or styling web UIs, components, pages, dashboards, or frontend applications. | `.agent/skills/frontend-design/SKILL.md` |
| `integrations-orchestrator` | `integrations-orchestrator` | Use when the request requires implement resilient integrations: webhooks, jobs, retries, idempotency, observability. | `.agent/skills/integrations-orchestrator/SKILL.md` |
| `nextjs-app-router-patterns` | `nextjs-app-router-patterns` | Use when the request requires master Next.js 14+ App Router with Server Components, streaming, parallel routes, and advanced data fetching. Use when building Next.js applications, implementing SSR/SSG, or optimizing React Server Components. | `.agent/skills/nextjs-app-router-patterns/SKILL.md` |
| `nextjs-best-practices` | `nextjs-best-practices` | Use when the request requires next.js App Router principles. Server Components, data fetching, routing patterns. | `.agent/skills/nextjs-best-practices/SKILL.md` |
| `onboarding-activation-designer` | `onboarding-activation-designer` | Use when the request requires design onboarding and activation flows (empty-state guidance, quick-start actions). | `.agent/skills/onboarding-activation-designer/SKILL.md` |
| `perf-budget-enforcer` | `perf-budget-enforcer` | Use when the request requires set and enforce performance budgets; implement list strategies; remove expensive effects. | `.agent/skills/perf-budget-enforcer/SKILL.md` |
| `product-depth-expander` | `product-depth-expander` | Use when the request requires expand vague requirements into PRODUCTION-depth IA, flows, branch sets, and cross-cutting requirements. | `.agent/skills/product-depth-expander/SKILL.md` |
| `react-best-practices` | `vercel-react-best-practices` | Use when the request requires react and Next.js performance optimization guidelines from Vercel Engineering. This skill should be used when writing, reviewing, or refactoring React/Next.js code to ensure optimal performance patterns. Triggers on tasks involving React components, Next.js pages, data fetching, bundle optimization, or performance improvements. | `.agent/skills/react-best-practices/SKILL.md` |
| `react-ui-patterns` | `react-ui-patterns` | Use when the request requires modern React UI patterns for loading states, error handling, and data fetching. Use when building UI components, handling async data, or managing UI states. | `.agent/skills/react-ui-patterns/SKILL.md` |
| `release-proof-pack` | `release-proof-pack` | Use when the request requires generate auditable proof: walkthrough + decision log + release checklist confirming gates pass. | `.agent/skills/release-proof-pack/SKILL.md` |
| `repo-scaffold-pro` | `repo-scaffold-pro` | Use when the request requires create a senior-team-grade repository scaffold aligned to the chosen stack, including docs, checks, design system bootstrap, and a first vertical slice. | `.agent/skills/repo-scaffold-pro/SKILL.md` |
| `saas-crm-foundation` | `saas-crm-foundation` | Use when the request requires implement SaaS/CRM primitives: tenancy, RBAC, audit, idempotency, integrations readiness. | `.agent/skills/saas-crm-foundation/SKILL.md` |
| `scroll-experience` | `scroll-experience` | "Use when the request requires expert in building immersive scroll-driven experiences - parallax storytelling, scroll animations, interactive narratives, and cinematic web experiences. Like NY Times interactives, Apple product pages, and award-winning web experiences. Makes websites feel like experiences, not just pages. Use when: scroll animation, parallax, scroll storytelling, interactive story, cinematic website." | `.agent/skills/scroll-experience/SKILL.md` |
| `seo-analytics-instrumentation` | `seo-analytics-instrumentation` | Use when the request requires implement SEO foundations and consent-friendly analytics with event taxonomy. | `.agent/skills/seo-analytics-instrumentation/SKILL.md` |
| `seo-fundamentals` | `seo-fundamentals` | Use when the request requires >. | `.agent/skills/seo-fundamentals/SKILL.md` |
| `signature-patterns-lab` | `signature-patterns-lab` | Use when the request requires create 2–3 repeatable signature patterns that increase authorship and remove kit fingerprints. | `.agent/skills/signature-patterns-lab/SKILL.md` |
| `sre-runbook-observability` | `sre-runbook-observability` | Use when the request requires create a practical runbook and observability baseline: error boundaries, API error conventions, logging schema, triage and rollback steps. | `.agent/skills/sre-runbook-observability/SKILL.md` |
| `stack-architect-selector` | `stack-architect-selector` | Use when the request requires select the best-fit stack and architecture for a client project (marketing/product/SaaS-CRM), with explicit tradeoffs for depth and differentiation. | `.agent/skills/stack-architect-selector/SKILL.md` |
| `tailwind-patterns` | `tailwind-patterns` | Use when the request requires tailwind CSS v4 principles. CSS-first configuration, container queries, modern patterns, design token architecture. | `.agent/skills/tailwind-patterns/SKILL.md` |
| `threat-model-owasp-hardening` | `threat-model-owasp-hardening` | Use when the request requires create a lightweight threat model + security checklist; implement mitigations and tests for auth/authZ/data boundaries. | `.agent/skills/threat-model-owasp-hardening/SKILL.md` |
| `typescript-pro` | `typescript-pro` | Use when the request requires master TypeScript with advanced types, generics, and strict type. | `.agent/skills/typescript-pro/SKILL.md` |
| `ui-ux-pro-max` | `ui-ux-pro-max` | "Use when the request requires uI/UX design intelligence. 50 styles, 21 palettes, 50 font pairings, 20 charts, 9 stacks (React, Next.js, Vue, Svelte, SwiftUI, React Native, Flutter, Tailwind, shadcn/ui). Actions: plan, build, create, design, implement, review, fix, improve, optimize, enhance, refactor, check UI/UX code. Projects: website, landing page, dashboard, admin panel, e-commerce, SaaS, portfolio, blog, mobile app, .html, .tsx, .vue, .svelte. Elements: button, modal, navbar, sidebar, card, table, form, chart. Styles: glassmorphism, claymorphism, minimalism, brutalism, neumorphism, bento grid, dark mode, responsive, skeuomorphism, flat design. Topics: color palette, accessibility, animation, layout, typography, font pairing, spacing, hover, shadow, gradient. Integrations: shadcn/ui MCP for component search and examples." | `.agent/skills/ui-ux-pro-max/SKILL.md` |
| `ux-state-completer` | `ux-state-completer` | Use when the request requires implement complete UX states and recovery paths for critical flows. | `.agent/skills/ux-state-completer/SKILL.md` |
| `visual-regression-guardian` | `visual-regression-guardian` | Use when the request requires set up Playwright visual regression testing: baselines, multi-viewport, state coverage, CI integration. | `.agent/skills/visual-regression-guardian/SKILL.md` |
| `wcag-audit-patterns` | `wcag-audit-patterns` | Use when the request requires conduct WCAG 2.2 accessibility audits with automated testing, manual verification, and remediation guidance. Use when auditing websites for accessibility, fixing WCAG violations, or implementing accessible design patterns. | `.agent/skills/wcag-audit-patterns/SKILL.md` |
| `web-performance-optimization` | `web-performance-optimization` | "Use when the request requires optimize website and web application performance including loading speed, Core Web Vitals, bundle size, caching strategies, and runtime performance." | `.agent/skills/web-performance-optimization/SKILL.md` |

## Detalle por skill

### a11y-perf-audit

**Ruta:** `.agent/skills/a11y-perf-audit/SKILL.md`

<details>
<summary>Ver contenido de SKILL.md</summary>

```markdown
---
name: a11y-perf-audit
description: Use when the request requires audit and fix accessibility and performance issues: keyboard nav, focus, contrast, reduced motion, list performance, expensive effects.
---

# A11y + Performance Audit

## Do not use when
- The request is unrelated to this domain or requires a different specialized skill.
- The user asks only for high-level discussion without applying this workflow.
- Another skill has a tighter, more specific trigger for the same request.

## Example user requests
- "Apply a11y perf audit to improve this feature."
- "Use a11y perf audit and give me the concrete deliverables."
- "Can you run a full a11y perf audit pass on this repo?"
- "I need step-by-step execution using a11y perf audit."
## Goal
Catch and fix a11y/perf regressions that betray shallow implementations.

## When to use
- Before release.
- After big UI changes.
- Heavy motion/effects present.

## Minimal inputs (ask only if missing)
- Key flows.

## Procedure (MUST)
1) a11y: keyboard, focus, labels, error messaging, contrast, reduced motion.
2) perf: remove heavy blur, avoid layout thrash, list strategy.
3) Document findings and fixes.

## Outputs (MUST produce)
- `docs/a11y_perf_audit.md`.
- Implemented fixes.
```
</details>

### api-contract-enforcer

**Ruta:** `.agent/skills/api-contract-enforcer/SKILL.md`

<details>
<summary>Ver contenido de SKILL.md</summary>

```markdown
---
name: api-contract-enforcer
description: Use when the request requires define API contracts and enforce via validation/contract tests and client typing.
---

# API Contract Enforcer

## Do not use when
- The request is unrelated to this domain or requires a different specialized skill.
- The user asks only for high-level discussion without applying this workflow.
- Another skill has a tighter, more specific trigger for the same request.

## Example user requests
- "Apply api contract enforcer to improve this feature."
- "Use api contract enforcer and give me the concrete deliverables."
- "Can you run a full api contract enforcer pass on this repo?"
- "I need step-by-step execution using api contract enforcer."
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
```
</details>

### authz-policy-engineer

**Ruta:** `.agent/skills/authz-policy-engineer/SKILL.md`

<details>
<summary>Ver contenido de SKILL.md</summary>

```markdown
---
name: authz-policy-engineer
description: Use when the request requires design and implement RBAC/ABAC with tests for denial and escalation.
---

# Authorization Policy Engineer (RBAC/ABAC)

## Do not use when
- The request is unrelated to this domain or requires a different specialized skill.
- The user asks only for high-level discussion without applying this workflow.
- Another skill has a tighter, more specific trigger for the same request.

## Example user requests
- "Apply authz policy engineer to improve this feature."
- "Use authz policy engineer and give me the concrete deliverables."
- "Can you run a full authz policy engineer pass on this repo?"
- "I need step-by-step execution using authz policy engineer."
## Goal
Create enforceable authorization with server-side source-of-truth and UI reflection.

## When to use
- Any authenticated app.
- Any SaaS/CRM.

## Minimal inputs (ask only if missing)
- Roles (or propose minimal).
- Sensitive actions list.

## Procedure (MUST)
1) Enumerate resources/actions.
2) Propose role/attribute policy.
3) Implement centralized enforcement.
4) Reflect in UI.
5) Add tests for escalation attempts.

## Outputs (MUST produce)
- `docs/authz_model.md`.
- Enforcement layer.
- Permission tests.
```
</details>

### ci-cd-hardener

**Ruta:** `.agent/skills/ci-cd-hardener/SKILL.md`

<details>
<summary>Ver contenido de SKILL.md</summary>

```markdown
---
name: ci-cd-hardener
description: Use when the request requires add CI pipeline hygiene: caching, parallel checks, and artifact uploads for reports.
---

# CI/CD Hardener

## Do not use when
- The request is unrelated to this domain or requires a different specialized skill.
- The user asks only for high-level discussion without applying this workflow.
- Another skill has a tighter, more specific trigger for the same request.

## Example user requests
- "Apply ci cd hardener to improve this feature."
- "Use ci cd hardener and give me the concrete deliverables."
- "Can you run a full ci cd hardener pass on this repo?"
- "I need step-by-step execution using ci cd hardener."
## Goal
Senior baseline CI: deterministic checks, caching, and artifacts for proof.

## When to use
- New repo.
- Before client handoff.

## Minimal inputs (ask only if missing)
- CI provider (default GitHub Actions).
- Package manager.
- Commands for checks.

## Procedure (MUST)
1) Ensure scripts exist.
2) Add CI workflow (install cached, lint/typecheck/test, e2e/visual if configured, upload artifacts).
3) Fail on violations.
4) Document local parity.

## Outputs (MUST produce)
- CI workflow file.
- `docs/ci.md`.
```
</details>

### clean-code

**Ruta:** `.agent/skills/clean-code/SKILL.md`

<details>
<summary>Ver contenido de SKILL.md</summary>

```markdown
---
name: clean-code
description: Use when the request requires pragmatic coding standards - concise, direct, no over-engineering, no unnecessary comments.
allowed-tools:
  - Read
  - Write
  - Edit
version: 2.0
priority: CRITICAL
---

# Clean Code - Pragmatic AI Coding Standards

## When to use
- The request explicitly matches **clean code** outcomes.
- The user asks for work that aligns with: Use when the request requires pragmatic coding standards - concise, direct, no over-engineering, no unnecessary comments.
- The task needs a repeatable workflow or artifacts defined by this skill.

## Do not use when
- The request is unrelated to this domain or requires a different specialized skill.
- The user asks only for high-level discussion without applying this workflow.
- Another skill has a tighter, more specific trigger for the same request.

## Example user requests
- "Apply clean code to improve this feature."
- "Use clean code and give me the concrete deliverables."
- "Can you run a full clean code pass on this repo?"
- "I need step-by-step execution using clean code."
> **CRITICAL SKILL** - Be **concise, direct, and solution-focused**.

---

## Core Principles

| Principle | Rule |
|-----------|------|
| **SRP** | Single Responsibility - each function/class does ONE thing |
| **DRY** | Don't Repeat Yourself - extract duplicates, reuse |
| **KISS** | Keep It Simple - simplest solution that works |
| **YAGNI** | You Aren't Gonna Need It - don't build unused features |
| **Boy Scout** | Leave code cleaner than you found it |

---

## Naming Rules

| Element | Convention |
|---------|------------|
| **Variables** | Reveal intent: `userCount` not `n` |
| **Functions** | Verb + noun: `getUserById()` not `user()` |
| **Booleans** | Question form: `isActive`, `hasPermission`, `canEdit` |
| **Constants** | SCREAMING_SNAKE: `MAX_RETRY_COUNT` |

> **Rule:** If you need a comment to explain a name, rename it.

---

## Function Rules

| Rule | Description |
|------|-------------|
| **Small** | Max 20 lines, ideally 5-10 |
| **One Thing** | Does one thing, does it well |
| **One Level** | One level of abstraction per function |
| **Few Args** | Max 3 arguments, prefer 0-2 |
| **No Side Effects** | Don't mutate inputs unexpectedly |

---

## Code Structure

| Pattern | Apply |
|---------|-------|
| **Guard Clauses** | Early returns for edge cases |
| **Flat > Nested** | Avoid deep nesting (max 2 levels) |
| **Composition** | Small functions composed together |
| **Colocation** | Keep related code close |

---

## AI Coding Style

| Situation | Action |
|-----------|--------|
| User asks for feature | Write it directly |
| User reports bug | Fix it, don't explain |
| No clear requirement | Ask, don't assume |

---

## Anti-Patterns (DON'T)

| ❌ Pattern | ✅ Fix |
|-----------|-------|
| Comment every line | Delete obvious comments |
| Helper for one-liner | Inline the code |
| Factory for 2 objects | Direct instantiation |
| utils.ts with 1 function | Put code where used |
| "First we import..." | Just write code |
| Deep nesting | Guard clauses |
| Magic numbers | Named constants |
| God functions | Split by responsibility |

---

## 🔴 Before Editing ANY File (THINK FIRST!)

**Before changing a file, ask yourself:**

| Question | Why |
|----------|-----|
| **What imports this file?** | They might break |
| **What does this file import?** | Interface changes |
| **What tests cover this?** | Tests might fail |
| **Is this a shared component?** | Multiple places affected |

**Quick Check:**
```
File to edit: UserService.ts
└── Who imports this? → UserController.ts, AuthController.ts
└── Do they need changes too? → Check function signatures
```

> 🔴 **Rule:** Edit the file + all dependent files in the SAME task.
> 🔴 **Never leave broken imports or missing updates.**

---

## Summary

| Do | Don't |
|----|-------|
| Write code directly | Write tutorials |
| Let code self-document | Add obvious comments |
| Fix bugs immediately | Explain the fix first |
| Inline small things | Create unnecessary files |
| Name things clearly | Use abbreviations |
| Keep functions small | Write 100+ line functions |

> **Remember: The user wants working code, not a programming lesson.**

---

## 🔴 Self-Check Before Completing (MANDATORY)

**Before saying "task complete", verify:**

| Check | Question |
|-------|----------|
| ✅ **Goal met?** | Did I do exactly what user asked? |
| ✅ **Files edited?** | Did I modify all necessary files? |
| ✅ **Code works?** | Did I test/verify the change? |
| ✅ **No errors?** | Lint and TypeScript pass? |
| ✅ **Nothing forgotten?** | Any edge cases missed? |

> 🔴 **Rule:** If ANY check fails, fix it before completing.

---

## Verification Scripts (MANDATORY)

> 🔴 **CRITICAL:** Each agent runs ONLY their own skill's scripts after completing work.

### Agent → Script Mapping

| Agent | Script | Command |
|-------|--------|---------|
| **frontend-specialist** | UX Audit | `python ~/.claude/skills/frontend-design/scripts/ux_audit.py .` |
| **frontend-specialist** | A11y Check | `python ~/.claude/skills/frontend-design/scripts/accessibility_checker.py .` |
| **backend-specialist** | API Validator | `python ~/.claude/skills/api-patterns/scripts/api_validator.py .` |
| **mobile-developer** | Mobile Audit | `python ~/.claude/skills/mobile-design/scripts/mobile_audit.py .` |
| **database-architect** | Schema Validate | `python ~/.claude/skills/database-design/scripts/schema_validator.py .` |
| **security-auditor** | Security Scan | `python ~/.claude/skills/vulnerability-scanner/scripts/security_scan.py .` |
| **seo-specialist** | SEO Check | `python ~/.claude/skills/seo-fundamentals/scripts/seo_checker.py .` |
| **seo-specialist** | GEO Check | `python ~/.claude/skills/geo-fundamentals/scripts/geo_checker.py .` |
| **performance-optimizer** | Lighthouse | `python ~/.claude/skills/performance-profiling/scripts/lighthouse_audit.py <url>` |
| **test-engineer** | Test Runner | `python ~/.claude/skills/testing-patterns/scripts/test_runner.py .` |
| **test-engineer** | Playwright | `python ~/.claude/skills/webapp-testing/scripts/playwright_runner.py <url>` |
| **Any agent** | Lint Check | `python ~/.claude/skills/lint-and-validate/scripts/lint_runner.py .` |
| **Any agent** | Type Coverage | `python ~/.claude/skills/lint-and-validate/scripts/type_coverage.py .` |
| **Any agent** | i18n Check | `python ~/.claude/skills/i18n-localization/scripts/i18n_checker.py .` |

> ❌ **WRONG:** `test-engineer` running `ux_audit.py`
> ✅ **CORRECT:** `frontend-specialist` running `ux_audit.py`

---

### 🔴 Script Output Handling (READ → SUMMARIZE → ASK)

**When running a validation script, you MUST:**

1. **Run the script** and capture ALL output
2. **Parse the output** - identify errors, warnings, and passes
3. **Summarize to user** in this format:

```markdown
## Script Results: [script_name.py]

### ❌ Errors Found (X items)
- [File:Line] Error description 1
- [File:Line] Error description 2

### ⚠️ Warnings (Y items)
- [File:Line] Warning description

### ✅ Passed (Z items)
- Check 1 passed
- Check 2 passed

**Should I fix the X errors?**
```

4. **Wait for user confirmation** before fixing
5. **After fixing** → Re-run script to confirm

> 🔴 **VIOLATION:** Running script and ignoring output = FAILED task.
> 🔴 **VIOLATION:** Auto-fixing without asking = Not allowed.
> 🔴 **Rule:** Always READ output → SUMMARIZE → ASK → then fix.
```
</details>

### copy-seed-forge

**Ruta:** `.agent/skills/copy-seed-forge/SKILL.md`

<details>
<summary>Ver contenido de SKILL.md</summary>

```markdown
---
name: copy-seed-forge
description: Use when the request requires replace generic copy and dead UIs with domain microcopy and realistic seeded datasets.
---

# Copy + Seed Forge

## Do not use when
- The request is unrelated to this domain or requires a different specialized skill.
- The user asks only for high-level discussion without applying this workflow.
- Another skill has a tighter, more specific trigger for the same request.

## Example user requests
- "Apply copy seed forge to improve this feature."
- "Use copy seed forge and give me the concrete deliverables."
- "Can you run a full copy seed forge pass on this repo?"
- "I need step-by-step execution using copy seed forge."
## Goal
Eliminate AI-ish copy and enforce domain realism with seeded data.

## When to use
- Copy is generic.
- UI lacks realistic data.

## Minimal inputs (ask only if missing)
- Entities + statuses.
- Tone constraints.

## Procedure (MUST)
1) Identify entities and states.
2) Write microcopy per screen.
3) Seed dataset (20–60 rows) with realistic distributions.
4) Validate layout under edge values.

## Outputs (MUST produce)
- `docs/microcopy.md`.
- Seed dataset + import notes.
```
</details>

### copywriting

**Ruta:** `.agent/skills/copywriting/SKILL.md`

<details>
<summary>Ver contenido de SKILL.md</summary>

```markdown
---
name: copywriting
description: Use when the request requires >.
  Use this skill when writing, rewriting, or improving marketing copy
  for any page (homepage, landing page, pricing, feature, product, or about page).
  This skill produces clear, compelling, and testable copy while enforcing
  alignment, honesty, and conversion best practices.
---

# Copywriting

## When to use
- The request explicitly matches **copywriting** outcomes.
- The user asks for work that aligns with: Use when the request requires >.
- The task needs a repeatable workflow or artifacts defined by this skill.

## Do not use when
- The request is unrelated to this domain or requires a different specialized skill.
- The user asks only for high-level discussion without applying this workflow.
- Another skill has a tighter, more specific trigger for the same request.

## Example user requests
- "Apply copywriting to improve this feature."
- "Use copywriting and give me the concrete deliverables."
- "Can you run a full copywriting pass on this repo?"
- "I need step-by-step execution using copywriting."
## Purpose

Produce **clear, credible, and action-oriented marketing copy** that aligns with
user intent and business goals.

This skill exists to prevent:
- writing before understanding the audience
- vague or hype-driven messaging
- misaligned CTAs
- overclaiming or fabricated proof
- untestable copy

You may **not** fabricate claims, statistics, testimonials, or guarantees.

---

## Operating Mode

You are operating as an **expert conversion copywriter**, not a brand poet.

- Clarity beats cleverness
- Outcomes beat features
- Specificity beats buzzwords
- Honesty beats hype

Your job is to **help the right reader take the right action**.

---

## Phase 1 — Context Gathering (Mandatory)

Before writing any copy, gather or confirm the following.
If information is missing, ask for it **before proceeding**.

### 1️⃣ Page Purpose
- Page type (homepage, landing page, pricing, feature, about)
- ONE primary action (CTA)
- Secondary action (if any)

### 2️⃣ Audience
- Target customer or role
- Primary problem they are trying to solve
- What they have already tried
- Main objections or hesitations
- Language they use to describe the problem

### 3️⃣ Product / Offer
- What is being offered
- Key differentiator vs alternatives
- Primary outcome or transformation
- Available proof (numbers, testimonials, case studies)

### 4️⃣ Context
- Traffic source (ads, organic, email, referrals)
- Awareness level (unaware, problem-aware, solution-aware, product-aware)
- What visitors already know or expect

---

## Phase 2 — Copy Brief Lock (Hard Gate)

Before writing any copy, you MUST present a **Copy Brief Summary** and pause.

### Copy Brief Summary
Summarize in 4–6 bullets:
- Page goal
- Target audience
- Core value proposition
- Primary CTA
- Traffic / awareness context

### Assumptions
List any assumptions explicitly (e.g. awareness level, urgency, sophistication).

Then ask:

> “Does this copy brief accurately reflect what we’re trying to achieve?
> Please confirm or correct anything before I write copy.”

**Do NOT proceed until confirmation is given.**

---

## Phase 3 — Copywriting Principles

### Core Principles (Non-Negotiable)

- **Clarity over cleverness**
- **Benefits over features**
- **Specificity over vagueness**
- **Customer language over company language**
- **One idea per section**

Always connect:
> Feature → Benefit → Outcome

---

## Writing Style Rules

### Style Guidelines
- Simple over complex
- Active over passive
- Confident over hedged
- Show outcomes instead of adjectives
- Avoid buzzwords unless customers use them

### Claim Discipline
- No fabricated data or testimonials
- No implied guarantees unless explicitly stated
- No exaggerated speed or certainty
- If proof is missing, mark placeholders clearly

---

## Phase 4 — Page Structure Framework

### Above the Fold

**Headline**
- Single most important message
- Specific value proposition
- Outcome-focused

**Subheadline**
- Adds clarity or context
- 1–2 sentences max

**Primary CTA**
- Action-oriented
- Describes what the user gets

---

### Core Sections (Use as Appropriate)

- Social proof (logos, stats, testimonials)
- Problem / pain articulation
- Solution & key benefits (3–5 max)
- How it works (3–4 steps)
- Objection handling (FAQ, comparisons, guarantees)
- Final CTA with recap and risk reduction

Avoid stacking features without narrative flow.

---

## Phase 5 — Writing the Copy

When writing copy, provide:

### Page Copy
Organized by section with clear labels:
- Headline
- Subheadline
- CTAs
- Section headers
- Body copy

### Alternatives
Provide 2–3 options for:
- Headlines
- Primary CTAs

Each option must include a brief rationale.

### Annotations
For key sections, explain:
- Why this copy was chosen
- Which principle it applies
- What alternatives were considered

---

## Testability Guidance

Write copy with testing in mind:
- Clear, isolated value propositions
- Headlines and CTAs that can be A/B tested
- Avoid combining multiple messages into one element

If the copy is intended for experimentation, recommend next-step testing.

---

## Completion Criteria (Hard Stop)

This skill is complete ONLY when:
- Copy brief has been confirmed
- Page copy is delivered in structured form
- Headline and CTA alternatives are provided
- Assumptions are documented
- Copy is ready for review, editing, or testing

---

## Key Principles (Summary)

- Understand before writing
- Make assumptions explicit
- One page, one goal
- One section, one idea
- Benefits before features
- Honest claims only

---

## Final Reminder

Good copy does not persuade everyone.
It persuades **the right person** to take **the right action**.

If the copy feels clever but unclear,  
rewrite it until it feels obvious.
```
</details>

### data-modeler-crm

**Ruta:** `.agent/skills/data-modeler-crm/SKILL.md`

<details>
<summary>Ver contenido de SKILL.md</summary>

```markdown
---
name: data-modeler-crm
description: Use when the request requires design CRM/SaaS data model with constraints, indexes, migrations, and seed strategy.
---

# Data Modeler — CRM/SaaS

## Do not use when
- The request is unrelated to this domain or requires a different specialized skill.
- The user asks only for high-level discussion without applying this workflow.
- Another skill has a tighter, more specific trigger for the same request.

## Example user requests
- "Apply data modeler crm to improve this feature."
- "Use data modeler crm and give me the concrete deliverables."
- "Can you run a full data modeler crm pass on this repo?"
- "I need step-by-step execution using data modeler crm."
## Goal
Design data structures for deep behavior, integrity, and scale.

## When to use
- Starting a CRM/SaaS.
- Schema ad hoc.

## Minimal inputs (ask only if missing)
- Entities and workflows.
- Tenancy requirements.

## Procedure (MUST)
1) Draft ERD-level model.
2) Define constraints/enums.
3) Define indexes.
4) Produce migrations + seed plan.
5) Document invariants.

## Outputs (MUST produce)
- `docs/data_model.md`.
- Migrations (or exact statements).
- Seed dataset strategy.
```
</details>

### design-qa-polish-pass

**Ruta:** `.agent/skills/design-qa-polish-pass/SKILL.md`

<details>
<summary>Ver contenido de SKILL.md</summary>

```markdown
---
name: design-qa-polish-pass
description: Use when the request requires run a senior-level design QA pass to eliminate AI-like artifacts: rhythm, alignment, typography, state polish, interaction feedback, and mobile finesse.
---

# Design QA + Polish Pass

## Do not use when
- The request is unrelated to this domain or requires a different specialized skill.
- The user asks only for high-level discussion without applying this workflow.
- Another skill has a tighter, more specific trigger for the same request.

## Example user requests
- "Apply design qa polish pass to improve this feature."
- "Use design qa polish pass and give me the concrete deliverables."
- "Can you run a full design qa polish pass pass on this repo?"
- "I need step-by-step execution using design qa polish pass."
## Goal
Remove the remaining “AI smell”: subtle inconsistencies, kit artifacts, unfinished states, and copy roughness.

## When to use
- Before final delivery.
- After major UI changes.

## Minimal inputs (ask only if missing)
- Key routes.
- Target devices.

## Procedure (MUST)
1) Audit rhythm/alignment and typography scale.
2) Audit states (empty/loading/error/success) and disabled/focus.
3) Remove kit fingerprints.
4) Improve interaction feedback.
5) Produce punchlist and apply fixes; capture proof.

## Outputs (MUST produce)
- `docs/design_qa.md` with punchlist + fixes.
- Applied polish changes.
```
</details>

### design-system-forge

**Ruta:** `.agent/skills/design-system-forge/SKILL.md`

<details>
<summary>Ver contenido de SKILL.md</summary>

```markdown
---
name: design-system-forge
description: Use when the request requires create or refactor a governed design system: tokens + base UI + non-recognizable kit overrides.
---

# Design System Forge

## Do not use when
- The request is unrelated to this domain or requires a different specialized skill.
- The user asks only for high-level discussion without applying this workflow.
- Another skill has a tighter, more specific trigger for the same request.

## Example user requests
- "Apply design system forge to improve this feature."
- "Use design system forge and give me the concrete deliverables."
- "Can you run a full design system forge pass on this repo?"
- "I need step-by-step execution using design system forge."
## Goal
Establish a governed design system and thesis so the UI is authorial, consistent, and scalable.

## When to use
- New UI.
- Kit-default UI.
- Inconsistency across screens.

## Minimal inputs (ask only if missing)
- Domain + product personality (infer if absent).
- Styling approach.
- Light/dark requirement.

## Procedure (MUST)
1) Create/update `docs/design_concept.md`.
2) Define core + semantic tokens.
3) Implement tokens.
4) Build base UI components consuming tokens.
5) If using a kit: override the 6 domains and fill `docs/ui_audit.md`.
6) Apply across ≥3 screens and capture proof.

## Outputs (MUST produce)
- `docs/design_concept.md` (+ `docs/ui_audit.md` if kit).
- Tokens implementation.
- Base UI in `web/components/ui/`.
```
</details>

### feature-flags-rollout

**Ruta:** `.agent/skills/feature-flags-rollout/SKILL.md`

<details>
<summary>Ver contenido de SKILL.md</summary>

```markdown
---
name: feature-flags-rollout
description: Use when the request requires introduce feature flags and safe rollout patterns (kill-switches, staged enablement) for high-risk features.
---

# Feature Flags + Rollout

## Do not use when
- The request is unrelated to this domain or requires a different specialized skill.
- The user asks only for high-level discussion without applying this workflow.
- Another skill has a tighter, more specific trigger for the same request.

## Example user requests
- "Apply feature flags rollout to improve this feature."
- "Use feature flags rollout and give me the concrete deliverables."
- "Can you run a full feature flags rollout pass on this repo?"
- "I need step-by-step execution using feature flags rollout."
## Goal
Ship complex features safely via flags, kill-switches, and staged rollout strategy.

## When to use
- PRODUCTION+.
- Risky feature changes.
- Staged client rollout.

## Minimal inputs (ask only if missing)
- Flag scope (global/tenant/user).
- Default behavior.

## Procedure (MUST)
1) Define minimal flag interface and storage.
2) Implement flag provider.
3) Guard UI + API behaviors.
4) Add kill-switch.
5) Document rollout and rollback triggers.

## Outputs (MUST produce)
- `docs/feature_flags.md`.
- Flag provider implementation.
- Example guarded feature pattern.
```
</details>

### frontend-design

**Ruta:** `.agent/skills/frontend-design/SKILL.md`

<details>
<summary>Ver contenido de SKILL.md</summary>

```markdown
---
name: frontend-design
description: Use when the request requires create distinctive, production-grade frontend interfaces with intentional aesthetics, high craft, and non-generic visual identity. Use when building or styling web UIs, components, pages, dashboards, or frontend applications.
license: Complete terms in LICENSE.txt
---

# Frontend Design (Distinctive, Production-Grade)

## When to use
- The request explicitly matches **frontend design** outcomes.
- The user asks for work that aligns with: Use when the request requires create distinctive, production-grade frontend interfaces with intentional aesthetics, high craft, and non-generic visual identity. Use when building or styling web UIs, components, pages, dashboards, or frontend applications.
- The task needs a repeatable workflow or artifacts defined by this skill.

## Do not use when
- The request is unrelated to this domain or requires a different specialized skill.
- The user asks only for high-level discussion without applying this workflow.
- Another skill has a tighter, more specific trigger for the same request.

## Example user requests
- "Apply frontend design to improve this feature."
- "Use frontend design and give me the concrete deliverables."
- "Can you run a full frontend design pass on this repo?"
- "I need step-by-step execution using frontend design."
You are a **frontend designer-engineer**, not a layout generator.

Your goal is to create **memorable, high-craft interfaces** that:

* Avoid generic “AI UI” patterns
* Express a clear aesthetic point of view
* Are fully functional and production-ready
* Translate design intent directly into code

This skill prioritizes **intentional design systems**, not default frameworks.

---

## 1. Core Design Mandate

Every output must satisfy **all four**:

1. **Intentional Aesthetic Direction**
   A named, explicit design stance (e.g. *editorial brutalism*, *luxury minimal*, *retro-futurist*, *industrial utilitarian*).

2. **Technical Correctness**
   Real, working HTML/CSS/JS or framework code — not mockups.

3. **Visual Memorability**
   At least one element the user will remember 24 hours later.

4. **Cohesive Restraint**
   No random decoration. Every flourish must serve the aesthetic thesis.

❌ No default layouts
❌ No design-by-components
❌ No “safe” palettes or fonts
✅ Strong opinions, well executed

---

## 2. Design Feasibility & Impact Index (DFII)

Before building, evaluate the design direction using DFII.

### DFII Dimensions (1–5)

| Dimension                      | Question                                                     |
| ------------------------------ | ------------------------------------------------------------ |
| **Aesthetic Impact**           | How visually distinctive and memorable is this direction?    |
| **Context Fit**                | Does this aesthetic suit the product, audience, and purpose? |
| **Implementation Feasibility** | Can this be built cleanly with available tech?               |
| **Performance Safety**         | Will it remain fast and accessible?                          |
| **Consistency Risk**           | Can this be maintained across screens/components?            |

### Scoring Formula

```
DFII = (Impact + Fit + Feasibility + Performance) − Consistency Risk
```

**Range:** `-5 → +15`

### Interpretation

| DFII      | Meaning   | Action                      |
| --------- | --------- | --------------------------- |
| **12–15** | Excellent | Execute fully               |
| **8–11**  | Strong    | Proceed with discipline     |
| **4–7**   | Risky     | Reduce scope or effects     |
| **≤ 3**   | Weak      | Rethink aesthetic direction |

---

## 3. Mandatory Design Thinking Phase

Before writing code, explicitly define:

### 1. Purpose

* What action should this interface enable?
* Is it persuasive, functional, exploratory, or expressive?

### 2. Tone (Choose One Dominant Direction)

Examples (non-exhaustive):

* Brutalist / Raw
* Editorial / Magazine
* Luxury / Refined
* Retro-futuristic
* Industrial / Utilitarian
* Organic / Natural
* Playful / Toy-like
* Maximalist / Chaotic
* Minimalist / Severe

⚠️ Do not blend more than **two**.

### 3. Differentiation Anchor

Answer:

> “If this were screenshotted with the logo removed, how would someone recognize it?”

This anchor must be visible in the final UI.

---

## 4. Aesthetic Execution Rules (Non-Negotiable)

### Typography

* Avoid system fonts and AI-defaults (Inter, Roboto, Arial, etc.)
* Choose:

  * 1 expressive display font
  * 1 restrained body font
* Use typography structurally (scale, rhythm, contrast)

### Color & Theme

* Commit to a **dominant color story**
* Use CSS variables exclusively
* Prefer:

  * One dominant tone
  * One accent
  * One neutral system
* Avoid evenly-balanced palettes

### Spatial Composition

* Break the grid intentionally
* Use:

  * Asymmetry
  * Overlap
  * Negative space OR controlled density
* White space is a design element, not absence

### Motion

* Motion must be:

  * Purposeful
  * Sparse
  * High-impact
* Prefer:

  * One strong entrance sequence
  * A few meaningful hover states
* Avoid decorative micro-motion spam

### Texture & Depth

Use when appropriate:

* Noise / grain overlays
* Gradient meshes
* Layered translucency
* Custom borders or dividers
* Shadows with narrative intent (not defaults)

---

## 5. Implementation Standards

### Code Requirements

* Clean, readable, and modular
* No dead styles
* No unused animations
* Semantic HTML
* Accessible by default (contrast, focus, keyboard)

### Framework Guidance

* **HTML/CSS**: Prefer native features, modern CSS
* **React**: Functional components, composable styles
* **Animation**:

  * CSS-first
  * Framer Motion only when justified

### Complexity Matching

* Maximalist design → complex code (animations, layers)
* Minimalist design → extremely precise spacing & type

Mismatch = failure.

---

## 6. Required Output Structure

When generating frontend work:

### 1. Design Direction Summary

* Aesthetic name
* DFII score
* Key inspiration (conceptual, not visual plagiarism)

### 2. Design System Snapshot

* Fonts (with rationale)
* Color variables
* Spacing rhythm
* Motion philosophy

### 3. Implementation

* Full working code
* Comments only where intent isn’t obvious

### 4. Differentiation Callout

Explicitly state:

> “This avoids generic UI by doing X instead of Y.”

---

## 7. Anti-Patterns (Immediate Failure)

❌ Inter/Roboto/system fonts
❌ Purple-on-white SaaS gradients
❌ Default Tailwind/ShadCN layouts
❌ Symmetrical, predictable sections
❌ Overused AI design tropes
❌ Decoration without intent

If the design could be mistaken for a template → restart.

---

## 8. Integration With Other Skills

* **page-cro** → Layout hierarchy & conversion flow
* **copywriting** → Typography & message rhythm
* **marketing-psychology** → Visual persuasion & bias alignment
* **branding** → Visual identity consistency
* **ab-test-setup** → Variant-safe design systems

---

## 9. Operator Checklist

Before finalizing output:

* [ ] Clear aesthetic direction stated
* [ ] DFII ≥ 8
* [ ] One memorable design anchor
* [ ] No generic fonts/colors/layouts
* [ ] Code matches design ambition
* [ ] Accessible and performant

---

## 10. Questions to Ask (If Needed)

1. Who is this for, emotionally?
2. Should this feel trustworthy, exciting, calm, or provocative?
3. Is memorability or clarity more important?
4. Will this scale to other pages/components?
5. What should users *feel* in the first 3 seconds?

---
```
</details>

### integrations-orchestrator

**Ruta:** `.agent/skills/integrations-orchestrator/SKILL.md`

<details>
<summary>Ver contenido de SKILL.md</summary>

```markdown
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
```
</details>

### nextjs-app-router-patterns

**Ruta:** `.agent/skills/nextjs-app-router-patterns/SKILL.md`

<details>
<summary>Ver contenido de SKILL.md</summary>

```markdown
---
name: nextjs-app-router-patterns
description: Use when the request requires master Next.js 14+ App Router with Server Components, streaming, parallel routes, and advanced data fetching. Use when building Next.js applications, implementing SSR/SSG, or optimizing React Server Components.
---

# Next.js App Router Patterns

## When to use
- The request explicitly matches **nextjs app router patterns** outcomes.
- The user asks for work that aligns with: Use when the request requires master Next.js 14+ App Router with Server Components, streaming, parallel routes, and advanced data fetching. Use when building Next.js applications, implementing SSR/SSG, or optimizing React Server Components.
- The task needs a repeatable workflow or artifacts defined by this skill.

## Do not use when
- The request is unrelated to this domain or requires a different specialized skill.
- The user asks only for high-level discussion without applying this workflow.
- Another skill has a tighter, more specific trigger for the same request.

## Example user requests
- "Apply nextjs app router patterns to improve this feature."
- "Use nextjs app router patterns and give me the concrete deliverables."
- "Can you run a full nextjs app router patterns pass on this repo?"
- "I need step-by-step execution using nextjs app router patterns."
Comprehensive patterns for Next.js 14+ App Router architecture, Server Components, and modern full-stack React development.

## Use this skill when

- Building new Next.js applications with App Router
- Migrating from Pages Router to App Router
- Implementing Server Components and streaming
- Setting up parallel and intercepting routes
- Optimizing data fetching and caching
- Building full-stack features with Server Actions

## Do not use this skill when

- The task is unrelated to next.js app router patterns
- You need a different domain or tool outside this scope

## Instructions

- Clarify goals, constraints, and required inputs.
- Apply relevant best practices and validate outcomes.
- Provide actionable steps and verification.
- If detailed examples are required, open `resources/implementation-playbook.md`.

## Resources

- `resources/implementation-playbook.md` for detailed patterns and examples.
```
</details>

### nextjs-best-practices

**Ruta:** `.agent/skills/nextjs-best-practices/SKILL.md`

<details>
<summary>Ver contenido de SKILL.md</summary>

```markdown
---
name: nextjs-best-practices
description: Use when the request requires next.js App Router principles. Server Components, data fetching, routing patterns.
allowed-tools:
  - Read
  - Write
  - Edit
  - Glob
  - Grep
---

# Next.js Best Practices

## When to use
- The request explicitly matches **nextjs best practices** outcomes.
- The user asks for work that aligns with: Use when the request requires next.js App Router principles. Server Components, data fetching, routing patterns.
- The task needs a repeatable workflow or artifacts defined by this skill.

## Do not use when
- The request is unrelated to this domain or requires a different specialized skill.
- The user asks only for high-level discussion without applying this workflow.
- Another skill has a tighter, more specific trigger for the same request.

## Example user requests
- "Apply nextjs best practices to improve this feature."
- "Use nextjs best practices and give me the concrete deliverables."
- "Can you run a full nextjs best practices pass on this repo?"
- "I need step-by-step execution using nextjs best practices."
> Principles for Next.js App Router development.

---

## 1. Server vs Client Components

### Decision Tree

```
Does it need...?
│
├── useState, useEffect, event handlers
│   └── Client Component ('use client')
│
├── Direct data fetching, no interactivity
│   └── Server Component (default)
│
└── Both? 
    └── Split: Server parent + Client child
```

### By Default

| Type | Use |
|------|-----|
| **Server** | Data fetching, layout, static content |
| **Client** | Forms, buttons, interactive UI |

---

## 2. Data Fetching Patterns

### Fetch Strategy

| Pattern | Use |
|---------|-----|
| **Default** | Static (cached at build) |
| **Revalidate** | ISR (time-based refresh) |
| **No-store** | Dynamic (every request) |

### Data Flow

| Source | Pattern |
|--------|---------|
| Database | Server Component fetch |
| API | fetch with caching |
| User input | Client state + server action |

---

## 3. Routing Principles

### File Conventions

| File | Purpose |
|------|---------|
| `page.tsx` | Route UI |
| `layout.tsx` | Shared layout |
| `loading.tsx` | Loading state |
| `error.tsx` | Error boundary |
| `not-found.tsx` | 404 page |

### Route Organization

| Pattern | Use |
|---------|-----|
| Route groups `(name)` | Organize without URL |
| Parallel routes `@slot` | Multiple same-level pages |
| Intercepting `(.)` | Modal overlays |

---

## 4. API Routes

### Route Handlers

| Method | Use |
|--------|-----|
| GET | Read data |
| POST | Create data |
| PUT/PATCH | Update data |
| DELETE | Remove data |

### Best Practices

- Validate input with Zod
- Return proper status codes
- Handle errors gracefully
- Use Edge runtime when possible

---

## 5. Performance Principles

### Image Optimization

- Use next/image component
- Set priority for above-fold
- Provide blur placeholder
- Use responsive sizes

### Bundle Optimization

- Dynamic imports for heavy components
- Route-based code splitting (automatic)
- Analyze with bundle analyzer

---

## 6. Metadata

### Static vs Dynamic

| Type | Use |
|------|-----|
| Static export | Fixed metadata |
| generateMetadata | Dynamic per-route |

### Essential Tags

- title (50-60 chars)
- description (150-160 chars)
- Open Graph images
- Canonical URL

---

## 7. Caching Strategy

### Cache Layers

| Layer | Control |
|-------|---------|
| Request | fetch options |
| Data | revalidate/tags |
| Full route | route config |

### Revalidation

| Method | Use |
|--------|-----|
| Time-based | `revalidate: 60` |
| On-demand | `revalidatePath/Tag` |
| No cache | `no-store` |

---

## 8. Server Actions

### Use Cases

- Form submissions
- Data mutations
- Revalidation triggers

### Best Practices

- Mark with 'use server'
- Validate all inputs
- Return typed responses
- Handle errors

---

## 9. Anti-Patterns

| ❌ Don't | ✅ Do |
|----------|-------|
| 'use client' everywhere | Server by default |
| Fetch in client components | Fetch in server |
| Skip loading states | Use loading.tsx |
| Ignore error boundaries | Use error.tsx |
| Large client bundles | Dynamic imports |

---

## 10. Project Structure

```
app/
├── (marketing)/     # Route group
│   └── page.tsx
├── (dashboard)/
│   ├── layout.tsx   # Dashboard layout
│   └── page.tsx
├── api/
│   └── [resource]/
│       └── route.ts
└── components/
    └── ui/
```

---

> **Remember:** Server Components are the default for a reason. Start there, add client only when needed.
```
</details>

### onboarding-activation-designer

**Ruta:** `.agent/skills/onboarding-activation-designer/SKILL.md`

<details>
<summary>Ver contenido de SKILL.md</summary>

```markdown
---
name: onboarding-activation-designer
description: Use when the request requires design onboarding and activation flows (empty-state guidance, quick-start actions).
---

# Onboarding + Activation Designer

## Do not use when
- The request is unrelated to this domain or requires a different specialized skill.
- The user asks only for high-level discussion without applying this workflow.
- Another skill has a tighter, more specific trigger for the same request.

## Example user requests
- "Apply onboarding activation designer to improve this feature."
- "Use onboarding activation designer and give me the concrete deliverables."
- "Can you run a full onboarding activation designer pass on this repo?"
- "I need step-by-step execution using onboarding activation designer."
## Goal
Turn UI into a product via onboarding and activation mechanics.

## When to use
- First-time UX unclear.
- Empty dashboards.

## Minimal inputs (ask only if missing)
- Activation moment definition.

## Procedure (MUST)
1) Define activation goal.
2) Guided empty states + quick start.
3) Progressive disclosure.
4) Confirmation + next-step prompts.
5) Instrument key steps (no PII).

## Outputs (MUST produce)
- `docs/onboarding_plan.md`.
- Onboarding + empty-state components.
```
</details>

### perf-budget-enforcer

**Ruta:** `.agent/skills/perf-budget-enforcer/SKILL.md`

<details>
<summary>Ver contenido de SKILL.md</summary>

```markdown
---
name: perf-budget-enforcer
description: Use when the request requires set and enforce performance budgets; implement list strategies; remove expensive effects.
---

# Performance Budget Enforcer

## Do not use when
- The request is unrelated to this domain or requires a different specialized skill.
- The user asks only for high-level discussion without applying this workflow.
- Another skill has a tighter, more specific trigger for the same request.

## Example user requests
- "Apply perf budget enforcer to improve this feature."
- "Use perf budget enforcer and give me the concrete deliverables."
- "Can you run a full perf budget enforcer pass on this repo?"
- "I need step-by-step execution using perf budget enforcer."
## Goal
Maintain fast UX under realistic loads; avoid heavy effects that scream demo UI.

## When to use
- Lists/tables exist.
- Sluggish UI.
- Heavy blur/motion.

## Minimal inputs (ask only if missing)
- Target devices.
- Expected list sizes.

## Procedure (MUST)
1) Define budgets.
2) Pagination/virtualization.
3) Remove heavy blur/shadows/filters.
4) Motion uses transform/opacity.
5) Document mitigations.

## Outputs (MUST produce)
- `docs/perf_budget.md`.
- List strategy implemented.
- Evidence of heavy effects removal.
```
</details>

### product-depth-expander

**Ruta:** `.agent/skills/product-depth-expander/SKILL.md`

<details>
<summary>Ver contenido de SKILL.md</summary>

```markdown
---
name: product-depth-expander
description: Use when the request requires expand vague requirements into PRODUCTION-depth IA, flows, branch sets, and cross-cutting requirements.
---

# Product Depth Expander

## Do not use when
- The request is unrelated to this domain or requires a different specialized skill.
- The user asks only for high-level discussion without applying this workflow.
- Another skill has a tighter, more specific trigger for the same request.

## Example user requests
- "Apply product depth expander to improve this feature."
- "Use product depth expander and give me the concrete deliverables."
- "Can you run a full product depth expander pass on this repo?"
- "I need step-by-step execution using product depth expander."
## Goal
Convert ambiguity into a senior-grade plan: IA, flows, branching, and transversal requirements.

## When to use
- Request is vague.
- Risk of shallow landing output.

## Minimal inputs (ask only if missing)
- Domain + users + primary JTBD.
- Project class + depth profile.

## Procedure (MUST)
1) Enforce Depth Gate.
2) Produce navigation map + top 3 flows.
3) Enumerate branch set for each flow.
4) Add transversal requirements.
5) Define first vertical slice with persistence/integration.

## Outputs (MUST produce)
- Updated implementation plan with IA/flows/branches.
- Phased backlog and DoD evidence plan.
```
</details>

### react-best-practices

**Ruta:** `.agent/skills/react-best-practices/SKILL.md`

<details>
<summary>Ver contenido de SKILL.md</summary>

```markdown
---
name: vercel-react-best-practices
description: Use when the request requires react and Next.js performance optimization guidelines from Vercel Engineering. This skill should be used when writing, reviewing, or refactoring React/Next.js code to ensure optimal performance patterns. Triggers on tasks involving React components, Next.js pages, data fetching, bundle optimization, or performance improvements.
---

# Vercel React Best Practices

## When to use
- The request explicitly matches **vercel react best practices** outcomes.
- The user asks for work that aligns with: Use when the request requires react and Next.js performance optimization guidelines from Vercel Engineering. This skill should be used when writing, reviewing, or refactoring React/Next.js code to ensure optimal performance patterns. Triggers on tasks involving React components, Next.js pages, data fetching, bundle optimization, or performance improvements.
- The task needs a repeatable workflow or artifacts defined by this skill.

## Do not use when
- The request is unrelated to this domain or requires a different specialized skill.
- The user asks only for high-level discussion without applying this workflow.
- Another skill has a tighter, more specific trigger for the same request.

## Example user requests
- "Apply vercel react best practices to improve this feature."
- "Use vercel react best practices and give me the concrete deliverables."
- "Can you run a full vercel react best practices pass on this repo?"
- "I need step-by-step execution using vercel react best practices."
Comprehensive performance optimization guide for React and Next.js applications, maintained by Vercel. Contains 45 rules across 8 categories, prioritized by impact to guide automated refactoring and code generation.

## When to Apply

Reference these guidelines when:
- Writing new React components or Next.js pages
- Implementing data fetching (client or server-side)
- Reviewing code for performance issues
- Refactoring existing React/Next.js code
- Optimizing bundle size or load times

## Rule Categories by Priority

| Priority | Category | Impact | Prefix |
|----------|----------|--------|--------|
| 1 | Eliminating Waterfalls | CRITICAL | `async-` |
| 2 | Bundle Size Optimization | CRITICAL | `bundle-` |
| 3 | Server-Side Performance | HIGH | `server-` |
| 4 | Client-Side Data Fetching | MEDIUM-HIGH | `client-` |
| 5 | Re-render Optimization | MEDIUM | `rerender-` |
| 6 | Rendering Performance | MEDIUM | `rendering-` |
| 7 | JavaScript Performance | LOW-MEDIUM | `js-` |
| 8 | Advanced Patterns | LOW | `advanced-` |

## Quick Reference

### 1. Eliminating Waterfalls (CRITICAL)

- `async-defer-await` - Move await into branches where actually used
- `async-parallel` - Use Promise.all() for independent operations
- `async-dependencies` - Use better-all for partial dependencies
- `async-api-routes` - Start promises early, await late in API routes
- `async-suspense-boundaries` - Use Suspense to stream content

### 2. Bundle Size Optimization (CRITICAL)

- `bundle-barrel-imports` - Import directly, avoid barrel files
- `bundle-dynamic-imports` - Use next/dynamic for heavy components
- `bundle-defer-third-party` - Load analytics/logging after hydration
- `bundle-conditional` - Load modules only when feature is activated
- `bundle-preload` - Preload on hover/focus for perceived speed

### 3. Server-Side Performance (HIGH)

- `server-cache-react` - Use React.cache() for per-request deduplication
- `server-cache-lru` - Use LRU cache for cross-request caching
- `server-serialization` - Minimize data passed to client components
- `server-parallel-fetching` - Restructure components to parallelize fetches
- `server-after-nonblocking` - Use after() for non-blocking operations

### 4. Client-Side Data Fetching (MEDIUM-HIGH)

- `client-swr-dedup` - Use SWR for automatic request deduplication
- `client-event-listeners` - Deduplicate global event listeners

### 5. Re-render Optimization (MEDIUM)

- `rerender-defer-reads` - Don't subscribe to state only used in callbacks
- `rerender-memo` - Extract expensive work into memoized components
- `rerender-dependencies` - Use primitive dependencies in effects
- `rerender-derived-state` - Subscribe to derived booleans, not raw values
- `rerender-functional-setstate` - Use functional setState for stable callbacks
- `rerender-lazy-state-init` - Pass function to useState for expensive values
- `rerender-transitions` - Use startTransition for non-urgent updates

### 6. Rendering Performance (MEDIUM)

- `rendering-animate-svg-wrapper` - Animate div wrapper, not SVG element
- `rendering-content-visibility` - Use content-visibility for long lists
- `rendering-hoist-jsx` - Extract static JSX outside components
- `rendering-svg-precision` - Reduce SVG coordinate precision
- `rendering-hydration-no-flicker` - Use inline script for client-only data
- `rendering-activity` - Use Activity component for show/hide
- `rendering-conditional-render` - Use ternary, not && for conditionals

### 7. JavaScript Performance (LOW-MEDIUM)

- `js-batch-dom-css` - Group CSS changes via classes or cssText
- `js-index-maps` - Build Map for repeated lookups
- `js-cache-property-access` - Cache object properties in loops
- `js-cache-function-results` - Cache function results in module-level Map
- `js-cache-storage` - Cache localStorage/sessionStorage reads
- `js-combine-iterations` - Combine multiple filter/map into one loop
- `js-length-check-first` - Check array length before expensive comparison
- `js-early-exit` - Return early from functions
- `js-hoist-regexp` - Hoist RegExp creation outside loops
- `js-min-max-loop` - Use loop for min/max instead of sort
- `js-set-map-lookups` - Use Set/Map for O(1) lookups
- `js-tosorted-immutable` - Use toSorted() for immutability

### 8. Advanced Patterns (LOW)

- `advanced-event-handler-refs` - Store event handlers in refs
- `advanced-use-latest` - useLatest for stable callback refs

## How to Use

Read individual rule files for detailed explanations and code examples:

```
rules/async-parallel.md
rules/bundle-barrel-imports.md
rules/_sections.md
```

Each rule file contains:
- Brief explanation of why it matters
- Incorrect code example with explanation
- Correct code example with explanation
- Additional context and references

## Full Compiled Document

For the complete guide with all rules expanded: `AGENTS.md`
```
</details>

### react-ui-patterns

**Ruta:** `.agent/skills/react-ui-patterns/SKILL.md`

<details>
<summary>Ver contenido de SKILL.md</summary>

```markdown
---
name: react-ui-patterns
description: Use when the request requires modern React UI patterns for loading states, error handling, and data fetching. Use when building UI components, handling async data, or managing UI states.
---

# React UI Patterns

## When to use
- The request explicitly matches **react ui patterns** outcomes.
- The user asks for work that aligns with: Use when the request requires modern React UI patterns for loading states, error handling, and data fetching. Use when building UI components, handling async data, or managing UI states.
- The task needs a repeatable workflow or artifacts defined by this skill.

## Do not use when
- The request is unrelated to this domain or requires a different specialized skill.
- The user asks only for high-level discussion without applying this workflow.
- Another skill has a tighter, more specific trigger for the same request.

## Example user requests
- "Apply react ui patterns to improve this feature."
- "Use react ui patterns and give me the concrete deliverables."
- "Can you run a full react ui patterns pass on this repo?"
- "I need step-by-step execution using react ui patterns."
## Core Principles

1. **Never show stale UI** - Loading spinners only when actually loading
2. **Always surface errors** - Users must know when something fails
3. **Optimistic updates** - Make the UI feel instant
4. **Progressive disclosure** - Show content as it becomes available
5. **Graceful degradation** - Partial data is better than no data

## Loading State Patterns

### The Golden Rule

**Show loading indicator ONLY when there's no data to display.**

```typescript
// CORRECT - Only show loading when no data exists
const { data, loading, error } = useGetItemsQuery();

if (error) return <ErrorState error={error} onRetry={refetch} />;
if (loading && !data) return <LoadingState />;
if (!data?.items.length) return <EmptyState />;

return <ItemList items={data.items} />;
```

```typescript
// WRONG - Shows spinner even when we have cached data
if (loading) return <LoadingState />; // Flashes on refetch!
```

### Loading State Decision Tree

```
Is there an error?
  → Yes: Show error state with retry option
  → No: Continue

Is it loading AND we have no data?
  → Yes: Show loading indicator (spinner/skeleton)
  → No: Continue

Do we have data?
  → Yes, with items: Show the data
  → Yes, but empty: Show empty state
  → No: Show loading (fallback)
```

### Skeleton vs Spinner

| Use Skeleton When | Use Spinner When |
|-------------------|------------------|
| Known content shape | Unknown content shape |
| List/card layouts | Modal actions |
| Initial page load | Button submissions |
| Content placeholders | Inline operations |

## Error Handling Patterns

### The Error Handling Hierarchy

```
1. Inline error (field-level) → Form validation errors
2. Toast notification → Recoverable errors, user can retry
3. Error banner → Page-level errors, data still partially usable
4. Full error screen → Unrecoverable, needs user action
```

### Always Show Errors

**CRITICAL: Never swallow errors silently.**

```typescript
// CORRECT - Error always surfaced to user
const [createItem, { loading }] = useCreateItemMutation({
  onCompleted: () => {
    toast.success({ title: 'Item created' });
  },
  onError: (error) => {
    console.error('createItem failed:', error);
    toast.error({ title: 'Failed to create item' });
  },
});

// WRONG - Error silently caught, user has no idea
const [createItem] = useCreateItemMutation({
  onError: (error) => {
    console.error(error); // User sees nothing!
  },
});
```

### Error State Component Pattern

```typescript
interface ErrorStateProps {
  error: Error;
  onRetry?: () => void;
  title?: string;
}

const ErrorState = ({ error, onRetry, title }: ErrorStateProps) => (
  <div className="error-state">
    <Icon name="exclamation-circle" />
    <h3>{title ?? 'Something went wrong'}</h3>
    <p>{error.message}</p>
    {onRetry && (
      <Button onClick={onRetry}>Try Again</Button>
    )}
  </div>
);
```

## Button State Patterns

### Button Loading State

```tsx
<Button
  onClick={handleSubmit}
  isLoading={isSubmitting}
  disabled={!isValid || isSubmitting}
>
  Submit
</Button>
```

### Disable During Operations

**CRITICAL: Always disable triggers during async operations.**

```tsx
// CORRECT - Button disabled while loading
<Button
  disabled={isSubmitting}
  isLoading={isSubmitting}
  onClick={handleSubmit}
>
  Submit
</Button>

// WRONG - User can tap multiple times
<Button onClick={handleSubmit}>
  {isSubmitting ? 'Submitting...' : 'Submit'}
</Button>
```

## Empty States

### Empty State Requirements

Every list/collection MUST have an empty state:

```tsx
// WRONG - No empty state
return <FlatList data={items} />;

// CORRECT - Explicit empty state
return (
  <FlatList
    data={items}
    ListEmptyComponent={<EmptyState />}
  />
);
```

### Contextual Empty States

```tsx
// Search with no results
<EmptyState
  icon="search"
  title="No results found"
  description="Try different search terms"
/>

// List with no items yet
<EmptyState
  icon="plus-circle"
  title="No items yet"
  description="Create your first item"
  action={{ label: 'Create Item', onClick: handleCreate }}
/>
```

## Form Submission Pattern

```tsx
const MyForm = () => {
  const [submit, { loading }] = useSubmitMutation({
    onCompleted: handleSuccess,
    onError: handleError,
  });

  const handleSubmit = async () => {
    if (!isValid) {
      toast.error({ title: 'Please fix errors' });
      return;
    }
    await submit({ variables: { input: values } });
  };

  return (
    <form>
      <Input
        value={values.name}
        onChange={handleChange('name')}
        error={touched.name ? errors.name : undefined}
      />
      <Button
        type="submit"
        onClick={handleSubmit}
        disabled={!isValid || loading}
        isLoading={loading}
      >
        Submit
      </Button>
    </form>
  );
};
```

## Anti-Patterns

### Loading States

```typescript
// WRONG - Spinner when data exists (causes flash)
if (loading) return <Spinner />;

// CORRECT - Only show loading without data
if (loading && !data) return <Spinner />;
```

### Error Handling

```typescript
// WRONG - Error swallowed
try {
  await mutation();
} catch (e) {
  console.log(e); // User has no idea!
}

// CORRECT - Error surfaced
onError: (error) => {
  console.error('operation failed:', error);
  toast.error({ title: 'Operation failed' });
}
```

### Button States

```typescript
// WRONG - Button not disabled during submission
<Button onClick={submit}>Submit</Button>

// CORRECT - Disabled and shows loading
<Button onClick={submit} disabled={loading} isLoading={loading}>
  Submit
</Button>
```

## Checklist

Before completing any UI component:

**UI States:**
- [ ] Error state handled and shown to user
- [ ] Loading state shown only when no data exists
- [ ] Empty state provided for collections
- [ ] Buttons disabled during async operations
- [ ] Buttons show loading indicator when appropriate

**Data & Mutations:**
- [ ] Mutations have onError handler
- [ ] All user actions have feedback (toast/visual)

## Integration with Other Skills

- **graphql-schema**: Use mutation patterns with proper error handling
- **testing-patterns**: Test all UI states (loading, error, empty, success)
- **formik-patterns**: Apply form submission patterns
```
</details>

### release-proof-pack

**Ruta:** `.agent/skills/release-proof-pack/SKILL.md`

<details>
<summary>Ver contenido de SKILL.md</summary>

```markdown
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
```
</details>

### repo-scaffold-pro

**Ruta:** `.agent/skills/repo-scaffold-pro/SKILL.md`

<details>
<summary>Ver contenido de SKILL.md</summary>

```markdown
---
name: repo-scaffold-pro
description: Use when the request requires create a senior-team-grade repository scaffold aligned to the chosen stack, including docs, checks, design system bootstrap, and a first vertical slice.
---

# Repo Scaffold Pro

## Do not use when
- The request is unrelated to this domain or requires a different specialized skill.
- The user asks only for high-level discussion without applying this workflow.
- Another skill has a tighter, more specific trigger for the same request.

## Example user requests
- "Apply repo scaffold pro to improve this feature."
- "Use repo scaffold pro and give me the concrete deliverables."
- "Can you run a full repo scaffold pro pass on this repo?"
- "I need step-by-step execution using repo scaffold pro."
## Goal
Create a runnable scaffold that forces depth (not UI-only demos).

## When to use
- After stack selection.
- Empty folder start.

## Minimal inputs (ask only if missing)
- Selected stack.
- Package manager (or choose and document).

## Procedure (MUST)
1) Ensure `.agent/` at repo root.
2) Create topology (`web/`, `api/`, `docs/`).
3) Copy templates into `docs/`.
4) Bootstrap tokens + base UI.
5) Add scripts for checks.
6) Implement one vertical slice with persistence + full states.
7) Update walkthrough + decision log.

## Outputs (MUST produce)
- Runnable scaffold.
- Tokens + base UI.
- One vertical slice + proof plan.
```
</details>

### saas-crm-foundation

**Ruta:** `.agent/skills/saas-crm-foundation/SKILL.md`

<details>
<summary>Ver contenido de SKILL.md</summary>

```markdown
---
name: saas-crm-foundation
description: Use when the request requires implement SaaS/CRM primitives: tenancy, RBAC, audit, idempotency, integrations readiness.
---

# SaaS/CRM Foundation

## Do not use when
- The request is unrelated to this domain or requires a different specialized skill.
- The user asks only for high-level discussion without applying this workflow.
- Another skill has a tighter, more specific trigger for the same request.

## Example user requests
- "Apply saas crm foundation to improve this feature."
- "Use saas crm foundation and give me the concrete deliverables."
- "Can you run a full saas crm foundation pass on this repo?"
- "I need step-by-step execution using saas crm foundation."
## Goal
Scaffold platform primitives expected from senior SaaS/CRM systems.

## When to use
- Building a CRM/SaaS.
- Need tenancy, permissions, audit, integrations.

## Minimal inputs (ask only if missing)
- Tenancy model (default tenant-ready).
- Role expectations.

## Procedure (MUST)
1) Enforce tenant scoping.
2) Define RBAC/ABAC and enforcement.
3) Implement audit logging.
4) Ensure idempotency for writes/webhooks.
5) Add abuse controls.
6) Document API contracts.

## Outputs (MUST produce)
- Tenancy strategy.
- AuthZ enforced.
- Audit log.
- Integration primitives.
```
</details>

### scroll-experience

**Ruta:** `.agent/skills/scroll-experience/SKILL.md`

<details>
<summary>Ver contenido de SKILL.md</summary>

```markdown
---
name: scroll-experience
description: "Use when the request requires expert in building immersive scroll-driven experiences - parallax storytelling, scroll animations, interactive narratives, and cinematic web experiences. Like NY Times interactives, Apple product pages, and award-winning web experiences. Makes websites feel like experiences, not just pages. Use when: scroll animation, parallax, scroll storytelling, interactive story, cinematic website."
source: vibeship-spawner-skills (Apache 2.0)
---

# Scroll Experience

## When to use
- The request explicitly matches **scroll experience** outcomes.
- The user asks for work that aligns with: Use when the request requires expert in building immersive scroll-driven experiences - parallax storytelling, scroll animations, interactive narratives, and cinematic web experiences. Like NY Times interactives, Apple product pages, and award-winning web experiences. Makes websites feel like experiences, not just pages. Use when: scroll animation, parallax, scroll storytelling, interactive story, cinematic website.
- The task needs a repeatable workflow or artifacts defined by this skill.

## Do not use when
- The request is unrelated to this domain or requires a different specialized skill.
- The user asks only for high-level discussion without applying this workflow.
- Another skill has a tighter, more specific trigger for the same request.

## Example user requests
- "Apply scroll experience to improve this feature."
- "Use scroll experience and give me the concrete deliverables."
- "Can you run a full scroll experience pass on this repo?"
- "I need step-by-step execution using scroll experience."
**Role**: Scroll Experience Architect

You see scrolling as a narrative device, not just navigation. You create
moments of delight as users scroll. You know when to use subtle animations
and when to go cinematic. You balance performance with visual impact. You
make websites feel like movies you control with your thumb.

## Capabilities

- Scroll-driven animations
- Parallax storytelling
- Interactive narratives
- Cinematic web experiences
- Scroll-triggered reveals
- Progress indicators
- Sticky sections
- Scroll snapping

## Patterns

### Scroll Animation Stack

Tools and techniques for scroll animations

**When to use**: When planning scroll-driven experiences

```python
## Scroll Animation Stack

### Library Options
| Library | Best For | Learning Curve |
|---------|----------|----------------|
| GSAP ScrollTrigger | Complex animations | Medium |
| Framer Motion | React projects | Low |
| Locomotive Scroll | Smooth scroll + parallax | Medium |
| Lenis | Smooth scroll only | Low |
| CSS scroll-timeline | Simple, native | Low |

### GSAP ScrollTrigger Setup
```javascript
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Basic scroll animation
gsap.to('.element', {
  scrollTrigger: {
    trigger: '.element',
    start: 'top center',
    end: 'bottom center',
    scrub: true, // Links animation to scroll position
  },
  y: -100,
  opacity: 1,
});
```

### Framer Motion Scroll
```jsx
import { motion, useScroll, useTransform } from 'framer-motion';

function ParallaxSection() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <motion.div style={{ y }}>
      Content moves with scroll
    </motion.div>
  );
}
```

### CSS Native (2024+)
```css
@keyframes reveal {
  from { opacity: 0; transform: translateY(50px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-on-scroll {
  animation: reveal linear;
  animation-timeline: view();
  animation-range: entry 0% cover 40%;
}
```
```

### Parallax Storytelling

Tell stories through scroll depth

**When to use**: When creating narrative experiences

```javascript
## Parallax Storytelling

### Layer Speeds
| Layer | Speed | Effect |
|-------|-------|--------|
| Background | 0.2x | Far away, slow |
| Midground | 0.5x | Middle depth |
| Foreground | 1.0x | Normal scroll |
| Content | 1.0x | Readable |
| Floating elements | 1.2x | Pop forward |

### Creating Depth
```javascript
// GSAP parallax layers
gsap.to('.background', {
  scrollTrigger: {
    scrub: true
  },
  y: '-20%', // Moves slower
});

gsap.to('.foreground', {
  scrollTrigger: {
    scrub: true
  },
  y: '-50%', // Moves faster
});
```

### Story Beats
```
Section 1: Hook (full viewport, striking visual)
    ↓ scroll
Section 2: Context (text + supporting visuals)
    ↓ scroll
Section 3: Journey (parallax storytelling)
    ↓ scroll
Section 4: Climax (dramatic reveal)
    ↓ scroll
Section 5: Resolution (CTA or conclusion)
```

### Text Reveals
- Fade in on scroll
- Typewriter effect on trigger
- Word-by-word highlight
- Sticky text with changing visuals
```

### Sticky Sections

Pin elements while scrolling through content

**When to use**: When content should stay visible during scroll

```javascript
## Sticky Sections

### CSS Sticky
```css
.sticky-container {
  height: 300vh; /* Space for scrolling */
}

.sticky-element {
  position: sticky;
  top: 0;
  height: 100vh;
}
```

### GSAP Pin
```javascript
gsap.to('.content', {
  scrollTrigger: {
    trigger: '.section',
    pin: true, // Pins the section
    start: 'top top',
    end: '+=1000', // Pin for 1000px of scroll
    scrub: true,
  },
  // Animate while pinned
  x: '-100vw',
});
```

### Horizontal Scroll Section
```javascript
const sections = gsap.utils.toArray('.panel');

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: 'none',
  scrollTrigger: {
    trigger: '.horizontal-container',
    pin: true,
    scrub: 1,
    end: () => '+=' + document.querySelector('.horizontal-container').offsetWidth,
  },
});
```

### Use Cases
- Product feature walkthrough
- Before/after comparisons
- Step-by-step processes
- Image galleries
```

## Anti-Patterns

### ❌ Scroll Hijacking

**Why bad**: Users hate losing scroll control.
Accessibility nightmare.
Breaks back button expectations.
Frustrating on mobile.

**Instead**: Enhance scroll, don't replace it.
Keep natural scroll speed.
Use scrub animations.
Allow users to scroll normally.

### ❌ Animation Overload

**Why bad**: Distracting, not delightful.
Performance tanks.
Content becomes secondary.
User fatigue.

**Instead**: Less is more.
Animate key moments.
Static content is okay.
Guide attention, don't overwhelm.

### ❌ Desktop-Only Experience

**Why bad**: Mobile is majority of traffic.
Touch scroll is different.
Performance issues on phones.
Unusable experience.

**Instead**: Mobile-first scroll design.
Simpler effects on mobile.
Test on real devices.
Graceful degradation.

## ⚠️ Sharp Edges

| Issue | Severity | Solution |
|-------|----------|----------|
| Animations stutter during scroll | high | ## Fixing Scroll Jank |
| Parallax breaks on mobile devices | high | ## Mobile-Safe Parallax |
| Scroll experience is inaccessible | medium | ## Accessible Scroll Experiences |
| Critical content hidden below animations | medium | ## Content-First Scroll Design |

## Related Skills

Works well with: `3d-web-experience`, `frontend`, `ui-design`, `landing-page-design`
```
</details>

### seo-analytics-instrumentation

**Ruta:** `.agent/skills/seo-analytics-instrumentation/SKILL.md`

<details>
<summary>Ver contenido de SKILL.md</summary>

```markdown
---
name: seo-analytics-instrumentation
description: Use when the request requires implement SEO foundations and consent-friendly analytics with event taxonomy.
---

# SEO + Analytics Instrumentation

## Do not use when
- The request is unrelated to this domain or requires a different specialized skill.
- The user asks only for high-level discussion without applying this workflow.
- Another skill has a tighter, more specific trigger for the same request.

## Example user requests
- "Apply seo analytics instrumentation to improve this feature."
- "Use seo analytics instrumentation and give me the concrete deliverables."
- "Can you run a full seo analytics instrumentation pass on this repo?"
- "I need step-by-step execution using seo analytics instrumentation."
## Goal
Measurable outcomes without performance or privacy regression.

## When to use
- Marketing site.
- Product metrics needed.

## Minimal inputs (ask only if missing)
- Goals.
- Analytics preference (or propose).

## Procedure (MUST)
1) Metadata (title/desc/canonical/OG).
2) Structured headings.
3) Event taxonomy (no PII).
4) Consent-friendly tracking.
5) Document plan.

## Outputs (MUST produce)
- `docs/seo_analytics.md`.
- Implemented metadata + event hooks.
```
</details>

### seo-fundamentals

**Ruta:** `.agent/skills/seo-fundamentals/SKILL.md`

<details>
<summary>Ver contenido de SKILL.md</summary>

```markdown
---
name: seo-fundamentals
description: Use when the request requires >.
  Core principles of SEO including E-E-A-T, Core Web Vitals, technical foundations,
  content quality, and how modern search engines evaluate pages. This skill explains
  *why* SEO works, not how to execute specific optimizations.
allowed-tools:
  - Read
  - Glob
  - Grep
---

---

# SEO Fundamentals

## When to use
- The request explicitly matches **seo fundamentals** outcomes.
- The user asks for work that aligns with: Use when the request requires >.
- The task needs a repeatable workflow or artifacts defined by this skill.

## Do not use when
- The request is unrelated to this domain or requires a different specialized skill.
- The user asks only for high-level discussion without applying this workflow.
- Another skill has a tighter, more specific trigger for the same request.

## Example user requests
- "Apply seo fundamentals to improve this feature."
- "Use seo fundamentals and give me the concrete deliverables."
- "Can you run a full seo fundamentals pass on this repo?"
- "I need step-by-step execution using seo fundamentals."
> **Foundational principles for sustainable search visibility.**
> This skill explains _how search engines evaluate quality_, not tactical shortcuts.

---

## 1. E-E-A-T (Quality Evaluation Framework)

E-E-A-T is **not a direct ranking factor**.
It is a framework used by search engines to **evaluate content quality**, especially for sensitive or high-impact topics.

| Dimension             | What It Represents                 | Common Signals                                      |
| --------------------- | ---------------------------------- | --------------------------------------------------- |
| **Experience**        | First-hand, real-world involvement | Original examples, lived experience, demonstrations |
| **Expertise**         | Subject-matter competence          | Credentials, depth, accuracy                        |
| **Authoritativeness** | Recognition by others              | Mentions, citations, links                          |
| **Trustworthiness**   | Reliability and safety             | HTTPS, transparency, accuracy                       |

> Pages competing in the same space are often differentiated by **trust and experience**, not keywords.

---

## 2. Core Web Vitals (Page Experience Signals)

Core Web Vitals measure **how users experience a page**, not whether it deserves to rank.

| Metric  | Target  | What It Reflects    |
| ------- | ------- | ------------------- |
| **LCP** | < 2.5s  | Loading performance |
| **INP** | < 200ms | Interactivity       |
| **CLS** | < 0.1   | Visual stability    |

**Important context:**

- CWV rarely override poor content
- They matter most when content quality is comparable
- Failing CWV can _hold back_ otherwise good pages

---

## 3. Technical SEO Principles

Technical SEO ensures pages are **accessible, understandable, and stable**.

### Crawl & Index Control

| Element           | Purpose                |
| ----------------- | ---------------------- |
| XML sitemaps      | Help discovery         |
| robots.txt        | Control crawl access   |
| Canonical tags    | Consolidate duplicates |
| HTTP status codes | Communicate page state |
| HTTPS             | Security and trust     |

### Performance & Accessibility

| Factor                 | Why It Matters                |
| ---------------------- | ----------------------------- |
| Page speed             | User satisfaction             |
| Mobile-friendly design | Mobile-first indexing         |
| Clean URLs             | Crawl clarity                 |
| Semantic HTML          | Accessibility & understanding |

---

## 4. Content SEO Principles

### Page-Level Elements

| Element          | Principle                    |
| ---------------- | ---------------------------- |
| Title tag        | Clear topic + intent         |
| Meta description | Click relevance, not ranking |
| H1               | Page’s primary subject       |
| Headings         | Logical structure            |
| Alt text         | Accessibility and context    |

### Content Quality Signals

| Dimension   | What Search Engines Look For |
| ----------- | ---------------------------- |
| Depth       | Fully answers the query      |
| Originality | Adds unique value            |
| Accuracy    | Factually correct            |
| Clarity     | Easy to understand           |
| Usefulness  | Satisfies intent             |

---

## 5. Structured Data (Schema)

Structured data helps search engines **understand meaning**, not boost rankings directly.

| Type           | Purpose                |
| -------------- | ---------------------- |
| Article        | Content classification |
| Organization   | Entity identity        |
| Person         | Author information     |
| FAQPage        | Q&A clarity            |
| Product        | Commerce details       |
| Review         | Ratings context        |
| BreadcrumbList | Site structure         |

> Schema enables eligibility for rich results but does not guarantee them.

---

## 6. AI-Assisted Content Principles

Search engines evaluate **output quality**, not authorship method.

### Effective Use

- AI as a drafting or research assistant
- Human review for accuracy and clarity
- Original insights and synthesis
- Clear accountability

### Risky Use

- Publishing unedited AI output
- Factual errors or hallucinations
- Thin or duplicated content
- Keyword-driven text with no value

---

## 7. Relative Importance of SEO Factors

There is **no fixed ranking factor order**.
However, when competing pages are similar, importance tends to follow this pattern:

| Relative Weight | Factor                      |
| --------------- | --------------------------- |
| Highest         | Content relevance & quality |
| High            | Authority & trust signals   |
| Medium          | Page experience (CWV, UX)   |
| Medium          | Mobile optimization         |
| Baseline        | Technical accessibility     |

> Technical SEO enables ranking; content quality earns it.

---

## 8. Measurement & Evaluation

SEO fundamentals should be validated using **multiple signals**, not single metrics.

| Area        | What to Observe            |
| ----------- | -------------------------- |
| Visibility  | Indexed pages, impressions |
| Engagement  | Click-through, dwell time  |
| Performance | CWV field data             |
| Coverage    | Indexing status            |
| Authority   | Mentions and links         |

---

> **Key Principle:**
> Sustainable SEO is built on _useful content_, _technical clarity_, and _trust over time_.
> There are no permanent shortcuts.
```
</details>

### signature-patterns-lab

**Ruta:** `.agent/skills/signature-patterns-lab/SKILL.md`

<details>
<summary>Ver contenido de SKILL.md</summary>

```markdown
---
name: signature-patterns-lab
description: Use when the request requires create 2–3 repeatable signature patterns that increase authorship and remove kit fingerprints.
---

# Signature Patterns Lab

## Do not use when
- The request is unrelated to this domain or requires a different specialized skill.
- The user asks only for high-level discussion without applying this workflow.
- Another skill has a tighter, more specific trigger for the same request.

## Example user requests
- "Apply signature patterns lab to improve this feature."
- "Use signature patterns lab and give me the concrete deliverables."
- "Can you run a full signature patterns lab pass on this repo?"
- "I need step-by-step execution using signature patterns lab."
## Goal
Implement repeatable signature patterns (navigation/surface/data) that create a unique identity without harming usability/perf.

## When to use
- UI feels generic.
- Before scaling screens.

## Minimal inputs (ask only if missing)
- Primary flows.
- Brand cues or inferred metaphor.

## Procedure (MUST)
1) Ensure design concept exists.
2) Propose 3 candidate patterns.
3) Select 2–3 repeatable patterns.
4) Implement as reusable components/variants.
5) Apply across screens and capture proof.

## Outputs (MUST produce)
- Updated design concept placement rules.
- Reusable pattern implementations.
- Proof references in walkthrough.
```
</details>

### sre-runbook-observability

**Ruta:** `.agent/skills/sre-runbook-observability/SKILL.md`

<details>
<summary>Ver contenido de SKILL.md</summary>

```markdown
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
```
</details>

### stack-architect-selector

**Ruta:** `.agent/skills/stack-architect-selector/SKILL.md`

<details>
<summary>Ver contenido de SKILL.md</summary>

```markdown
---
name: stack-architect-selector
description: Use when the request requires select the best-fit stack and architecture for a client project (marketing/product/SaaS-CRM), with explicit tradeoffs for depth and differentiation.
---

# Stack + Architecture Selector

## Do not use when
- The request is unrelated to this domain or requires a different specialized skill.
- The user asks only for high-level discussion without applying this workflow.
- Another skill has a tighter, more specific trigger for the same request.

## Example user requests
- "Apply stack architect selector to improve this feature."
- "Use stack architect selector and give me the concrete deliverables."
- "Can you run a full stack architect selector pass on this repo?"
- "I need step-by-step execution using stack architect selector."
## Goal
Choose a stack and architecture that supports PRODUCTION-depth delivery and avoids default-kit, AI-generic outcomes.

## When to use
- Kickoff when stack is undefined.
- Need to justify deployment, boundaries, or avoid shallow outcomes.

## Minimal inputs (ask only if missing)
- Project class.
- Hosting preference (or propose one).
- Data/auth needs.
- Mobile expectations.

## Procedure (MUST)
1) Enforce rules.
2) Propose 2–3 stacks, score depth/differentiation/ops/time.
3) Choose winner and specify FE/BE/DB/auth/jobs/obs/deploy.
4) Document tradeoffs + rejected options.

## Outputs (MUST produce)
- Update `docs/implementation_plan.md`.
- Create `docs/architecture_decision.md`.
```
</details>

### tailwind-patterns

**Ruta:** `.agent/skills/tailwind-patterns/SKILL.md`

<details>
<summary>Ver contenido de SKILL.md</summary>

```markdown
---
name: tailwind-patterns
description: Use when the request requires tailwind CSS v4 principles. CSS-first configuration, container queries, modern patterns, design token architecture.
allowed-tools:
  - Read
  - Write
  - Edit
  - Glob
  - Grep
---

# Tailwind CSS Patterns (v4 - 2025)

## When to use
- The request explicitly matches **tailwind patterns** outcomes.
- The user asks for work that aligns with: Use when the request requires tailwind CSS v4 principles. CSS-first configuration, container queries, modern patterns, design token architecture.
- The task needs a repeatable workflow or artifacts defined by this skill.

## Do not use when
- The request is unrelated to this domain or requires a different specialized skill.
- The user asks only for high-level discussion without applying this workflow.
- Another skill has a tighter, more specific trigger for the same request.

## Example user requests
- "Apply tailwind patterns to improve this feature."
- "Use tailwind patterns and give me the concrete deliverables."
- "Can you run a full tailwind patterns pass on this repo?"
- "I need step-by-step execution using tailwind patterns."
> Modern utility-first CSS with CSS-native configuration.

---

## 1. Tailwind v4 Architecture

### What Changed from v3

| v3 (Legacy) | v4 (Current) |
|-------------|--------------|
| `tailwind.config.js` | CSS-based `@theme` directive |
| PostCSS plugin | Oxide engine (10x faster) |
| JIT mode | Native, always-on |
| Plugin system | CSS-native features |
| `@apply` directive | Still works, discouraged |

### v4 Core Concepts

| Concept | Description |
|---------|-------------|
| **CSS-first** | Configuration in CSS, not JavaScript |
| **Oxide Engine** | Rust-based compiler, much faster |
| **Native Nesting** | CSS nesting without PostCSS |
| **CSS Variables** | All tokens exposed as `--*` vars |

---

## 2. CSS-Based Configuration

### Theme Definition

```
@theme {
  /* Colors - use semantic names */
  --color-primary: oklch(0.7 0.15 250);
  --color-surface: oklch(0.98 0 0);
  --color-surface-dark: oklch(0.15 0 0);
  
  /* Spacing scale */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 2rem;
  
  /* Typography */
  --font-sans: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}
```

### When to Extend vs Override

| Action | Use When |
|--------|----------|
| **Extend** | Adding new values alongside defaults |
| **Override** | Replacing default scale entirely |
| **Semantic tokens** | Project-specific naming (primary, surface) |

---

## 3. Container Queries (v4 Native)

### Breakpoint vs Container

| Type | Responds To |
|------|-------------|
| **Breakpoint** (`md:`) | Viewport width |
| **Container** (`@container`) | Parent element width |

### Container Query Usage

| Pattern | Classes |
|---------|---------|
| Define container | `@container` on parent |
| Container breakpoint | `@sm:`, `@md:`, `@lg:` on children |
| Named containers | `@container/card` for specificity |

### When to Use

| Scenario | Use |
|----------|-----|
| Page-level layouts | Viewport breakpoints |
| Component-level responsive | Container queries |
| Reusable components | Container queries (context-independent) |

---

## 4. Responsive Design

### Breakpoint System

| Prefix | Min Width | Target |
|--------|-----------|--------|
| (none) | 0px | Mobile-first base |
| `sm:` | 640px | Large phone / small tablet |
| `md:` | 768px | Tablet |
| `lg:` | 1024px | Laptop |
| `xl:` | 1280px | Desktop |
| `2xl:` | 1536px | Large desktop |

### Mobile-First Principle

1. Write mobile styles first (no prefix)
2. Add larger screen overrides with prefixes
3. Example: `w-full md:w-1/2 lg:w-1/3`

---

## 5. Dark Mode

### Configuration Strategies

| Method | Behavior | Use When |
|--------|----------|----------|
| `class` | `.dark` class toggles | Manual theme switcher |
| `media` | Follows system preference | No user control |
| `selector` | Custom selector (v4) | Complex theming |

### Dark Mode Pattern

| Element | Light | Dark |
|---------|-------|------|
| Background | `bg-white` | `dark:bg-zinc-900` |
| Text | `text-zinc-900` | `dark:text-zinc-100` |
| Borders | `border-zinc-200` | `dark:border-zinc-700` |

---

## 6. Modern Layout Patterns

### Flexbox Patterns

| Pattern | Classes |
|---------|---------|
| Center (both axes) | `flex items-center justify-center` |
| Vertical stack | `flex flex-col gap-4` |
| Horizontal row | `flex gap-4` |
| Space between | `flex justify-between items-center` |
| Wrap grid | `flex flex-wrap gap-4` |

### Grid Patterns

| Pattern | Classes |
|---------|---------|
| Auto-fit responsive | `grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))]` |
| Asymmetric (Bento) | `grid grid-cols-3 grid-rows-2` with spans |
| Sidebar layout | `grid grid-cols-[auto_1fr]` |

> **Note:** Prefer asymmetric/Bento layouts over symmetric 3-column grids.

---

## 7. Modern Color System

### OKLCH vs RGB/HSL

| Format | Advantage |
|--------|-----------|
| **OKLCH** | Perceptually uniform, better for design |
| **HSL** | Intuitive hue/saturation |
| **RGB** | Legacy compatibility |

### Color Token Architecture

| Layer | Example | Purpose |
|-------|---------|---------|
| **Primitive** | `--blue-500` | Raw color values |
| **Semantic** | `--color-primary` | Purpose-based naming |
| **Component** | `--button-bg` | Component-specific |

---

## 8. Typography System

### Font Stack Pattern

| Type | Recommended |
|------|-------------|
| Sans | `'Inter', 'SF Pro', system-ui, sans-serif` |
| Mono | `'JetBrains Mono', 'Fira Code', monospace` |
| Display | `'Outfit', 'Poppins', sans-serif` |

### Type Scale

| Class | Size | Use |
|-------|------|-----|
| `text-xs` | 0.75rem | Labels, captions |
| `text-sm` | 0.875rem | Secondary text |
| `text-base` | 1rem | Body text |
| `text-lg` | 1.125rem | Lead text |
| `text-xl`+ | 1.25rem+ | Headings |

---

## 9. Animation & Transitions

### Built-in Animations

| Class | Effect |
|-------|--------|
| `animate-spin` | Continuous rotation |
| `animate-ping` | Attention pulse |
| `animate-pulse` | Subtle opacity pulse |
| `animate-bounce` | Bouncing effect |

### Transition Patterns

| Pattern | Classes |
|---------|---------|
| All properties | `transition-all duration-200` |
| Specific | `transition-colors duration-150` |
| With easing | `ease-out` or `ease-in-out` |
| Hover effect | `hover:scale-105 transition-transform` |

---

## 10. Component Extraction

### When to Extract

| Signal | Action |
|--------|--------|
| Same class combo 3+ times | Extract component |
| Complex state variants | Extract component |
| Design system element | Extract + document |

### Extraction Methods

| Method | Use When |
|--------|----------|
| **React/Vue component** | Dynamic, JS needed |
| **@apply in CSS** | Static, no JS needed |
| **Design tokens** | Reusable values |

---

## 11. Anti-Patterns

| Don't | Do |
|-------|-----|
| Arbitrary values everywhere | Use design system scale |
| `!important` | Fix specificity properly |
| Inline `style=` | Use utilities |
| Duplicate long class lists | Extract component |
| Mix v3 config with v4 | Migrate fully to CSS-first |
| Use `@apply` heavily | Prefer components |

---

## 12. Performance Principles

| Principle | Implementation |
|-----------|----------------|
| **Purge unused** | Automatic in v4 |
| **Avoid dynamism** | No template string classes |
| **Use Oxide** | Default in v4, 10x faster |
| **Cache builds** | CI/CD caching |

---

> **Remember:** Tailwind v4 is CSS-first. Embrace CSS variables, container queries, and native features. The config file is now optional.
```
</details>

### threat-model-owasp-hardening

**Ruta:** `.agent/skills/threat-model-owasp-hardening/SKILL.md`

<details>
<summary>Ver contenido de SKILL.md</summary>

```markdown
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
```
</details>

### typescript-pro

**Ruta:** `.agent/skills/typescript-pro/SKILL.md`

<details>
<summary>Ver contenido de SKILL.md</summary>

```markdown
---
name: typescript-pro
description: Use when the request requires master TypeScript with advanced types, generics, and strict type.
  safety. Handles complex type systems, decorators, and enterprise-grade
  patterns. Use PROACTIVELY for TypeScript architecture, type inference
  optimization, or advanced typing patterns.
metadata:
  model: opus
---


## When to use
- The request explicitly matches **typescript pro** outcomes.
- The user asks for work that aligns with: Use when the request requires master TypeScript with advanced types, generics, and strict type.
- The task needs a repeatable workflow or artifacts defined by this skill.

## Do not use when
- The request is unrelated to this domain or requires a different specialized skill.
- The user asks only for high-level discussion without applying this workflow.
- Another skill has a tighter, more specific trigger for the same request.

## Example user requests
- "Apply typescript pro to improve this feature."
- "Use typescript pro and give me the concrete deliverables."
- "Can you run a full typescript pro pass on this repo?"
- "I need step-by-step execution using typescript pro."
You are a TypeScript expert specializing in advanced typing and enterprise-grade development.

## Use this skill when

- Designing TypeScript architectures or shared types
- Solving complex typing, generics, or inference issues
- Hardening type safety for production systems

## Do not use this skill when

- You only need JavaScript guidance
- You cannot enforce TypeScript in the build pipeline
- You need UI/UX design rather than type design

## Instructions

1. Define runtime targets and strictness requirements.
2. Model types and contracts for critical surfaces.
3. Implement with compiler and linting safeguards.
4. Validate build performance and developer ergonomics.

## Focus Areas
- Advanced type systems (generics, conditional types, mapped types)
- Strict TypeScript configuration and compiler options
- Type inference optimization and utility types
- Decorators and metadata programming
- Module systems and namespace organization
- Integration with modern frameworks (React, Node.js, Express)

## Approach
1. Leverage strict type checking with appropriate compiler flags
2. Use generics and utility types for maximum type safety
3. Prefer type inference over explicit annotations when clear
4. Design robust interfaces and abstract classes
5. Implement proper error boundaries with typed exceptions
6. Optimize build times with incremental compilation

## Output
- Strongly-typed TypeScript with comprehensive interfaces
- Generic functions and classes with proper constraints
- Custom utility types and advanced type manipulations
- Jest/Vitest tests with proper type assertions
- TSConfig optimization for project requirements
- Type declaration files (.d.ts) for external libraries

Support both strict and gradual typing approaches. Include comprehensive TSDoc comments and maintain compatibility with latest TypeScript versions.
```
</details>

### ui-ux-pro-max

**Ruta:** `.agent/skills/ui-ux-pro-max/SKILL.md`

<details>
<summary>Ver contenido de SKILL.md</summary>

```markdown
---
name: ui-ux-pro-max
description: "Use when the request requires uI/UX design intelligence. 50 styles, 21 palettes, 50 font pairings, 20 charts, 9 stacks (React, Next.js, Vue, Svelte, SwiftUI, React Native, Flutter, Tailwind, shadcn/ui). Actions: plan, build, create, design, implement, review, fix, improve, optimize, enhance, refactor, check UI/UX code. Projects: website, landing page, dashboard, admin panel, e-commerce, SaaS, portfolio, blog, mobile app, .html, .tsx, .vue, .svelte. Elements: button, modal, navbar, sidebar, card, table, form, chart. Styles: glassmorphism, claymorphism, minimalism, brutalism, neumorphism, bento grid, dark mode, responsive, skeuomorphism, flat design. Topics: color palette, accessibility, animation, layout, typography, font pairing, spacing, hover, shadow, gradient. Integrations: shadcn/ui MCP for component search and examples."
---

# UI/UX Pro Max - Design Intelligence

## When to use
- The request explicitly matches **ui ux pro max** outcomes.
- The user asks for work that aligns with: Use when the request requires uI/UX design intelligence. 50 styles, 21 palettes, 50 font pairings, 20 charts, 9 stacks (React, Next.js, Vue, Svelte, SwiftUI, React Native, Flutter, Tailwind, shadcn/ui). Actions: plan, build, create, design, implement, review, fix, improve, optimize, enhance, refactor, check UI/UX code. Projects: website, landing page, dashboard, admin panel, e-commerce, SaaS, portfolio, blog, mobile app, .html, .tsx, .vue, .svelte. Elements: button, modal, navbar, sidebar, card, table, form, chart. Styles: glassmorphism, claymorphism, minimalism, brutalism, neumorphism, bento grid, dark mode, responsive, skeuomorphism, flat design. Topics: color palette, accessibility, animation, layout, typography, font pairing, spacing, hover, shadow, gradient. Integrations: shadcn/ui MCP for component search and examples.
- The task needs a repeatable workflow or artifacts defined by this skill.

## Do not use when
- The request is unrelated to this domain or requires a different specialized skill.
- The user asks only for high-level discussion without applying this workflow.
- Another skill has a tighter, more specific trigger for the same request.

## Example user requests
- "Apply ui ux pro max to improve this feature."
- "Use ui ux pro max and give me the concrete deliverables."
- "Can you run a full ui ux pro max pass on this repo?"
- "I need step-by-step execution using ui ux pro max."
Comprehensive design guide for web and mobile applications. Contains 50+ styles, 97 color palettes, 57 font pairings, 99 UX guidelines, and 25 chart types across 9 technology stacks. Searchable database with priority-based recommendations.

## When to Apply

Reference these guidelines when:
- Designing new UI components or pages
- Choosing color palettes and typography
- Reviewing code for UX issues
- Building landing pages or dashboards
- Implementing accessibility requirements

## Rule Categories by Priority

| Priority | Category | Impact | Domain |
|----------|----------|--------|--------|
| 1 | Accessibility | CRITICAL | `ux` |
| 2 | Touch & Interaction | CRITICAL | `ux` |
| 3 | Performance | HIGH | `ux` |
| 4 | Layout & Responsive | HIGH | `ux` |
| 5 | Typography & Color | MEDIUM | `typography`, `color` |
| 6 | Animation | MEDIUM | `ux` |
| 7 | Style Selection | MEDIUM | `style`, `product` |
| 8 | Charts & Data | LOW | `chart` |

## Quick Reference

### 1. Accessibility (CRITICAL)

- `color-contrast` - Minimum 4.5:1 ratio for normal text
- `focus-states` - Visible focus rings on interactive elements
- `alt-text` - Descriptive alt text for meaningful images
- `aria-labels` - aria-label for icon-only buttons
- `keyboard-nav` - Tab order matches visual order
- `form-labels` - Use label with for attribute

### 2. Touch & Interaction (CRITICAL)

- `touch-target-size` - Minimum 44x44px touch targets
- `hover-vs-tap` - Use click/tap for primary interactions
- `loading-buttons` - Disable button during async operations
- `error-feedback` - Clear error messages near problem
- `cursor-pointer` - Add cursor-pointer to clickable elements

### 3. Performance (HIGH)

- `image-optimization` - Use WebP, srcset, lazy loading
- `reduced-motion` - Check prefers-reduced-motion
- `content-jumping` - Reserve space for async content

### 4. Layout & Responsive (HIGH)

- `viewport-meta` - width=device-width initial-scale=1
- `readable-font-size` - Minimum 16px body text on mobile
- `horizontal-scroll` - Ensure content fits viewport width
- `z-index-management` - Define z-index scale (10, 20, 30, 50)

### 5. Typography & Color (MEDIUM)

- `line-height` - Use 1.5-1.75 for body text
- `line-length` - Limit to 65-75 characters per line
- `font-pairing` - Match heading/body font personalities

### 6. Animation (MEDIUM)

- `duration-timing` - Use 150-300ms for micro-interactions
- `transform-performance` - Use transform/opacity, not width/height
- `loading-states` - Skeleton screens or spinners

### 7. Style Selection (MEDIUM)

- `style-match` - Match style to product type
- `consistency` - Use same style across all pages
- `no-emoji-icons` - Use SVG icons, not emojis

### 8. Charts & Data (LOW)

- `chart-type` - Match chart type to data type
- `color-guidance` - Use accessible color palettes
- `data-table` - Provide table alternative for accessibility

## How to Use

Search specific domains using the CLI tool below.

---

## Prerequisites

Check if Python is installed:

```bash
python3 --version || python --version
```

If Python is not installed, install it based on user's OS:

**macOS:**
```bash
brew install python3
```

**Ubuntu/Debian:**
```bash
sudo apt update && sudo apt install python3
```

**Windows:**
```powershell
winget install Python.Python.3.12
```

---

## How to Use This Skill

When user requests UI/UX work (design, build, create, implement, review, fix, improve), follow this workflow:

### Step 1: Analyze User Requirements

Extract key information from user request:
- **Product type**: SaaS, e-commerce, portfolio, dashboard, landing page, etc.
- **Style keywords**: minimal, playful, professional, elegant, dark mode, etc.
- **Industry**: healthcare, fintech, gaming, education, etc.
- **Stack**: React, Vue, Next.js, or default to `html-tailwind`

### Step 2: Generate Design System (REQUIRED)

**Always start with `--design-system`** to get comprehensive recommendations with reasoning:

```bash
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "<product_type> <industry> <keywords>" --design-system [-p "Project Name"]
```

This command:
1. Searches 5 domains in parallel (product, style, color, landing, typography)
2. Applies reasoning rules from `ui-reasoning.csv` to select best matches
3. Returns complete design system: pattern, style, colors, typography, effects
4. Includes anti-patterns to avoid

**Example:**
```bash
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "beauty spa wellness service" --design-system -p "Serenity Spa"
```

### Step 3: Supplement with Detailed Searches (as needed)

After getting the design system, use domain searches to get additional details:

```bash
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "<keyword>" --domain <domain> [-n <max_results>]
```

**When to use detailed searches:**

| Need | Domain | Example |
|------|--------|---------|
| More style options | `style` | `--domain style "glassmorphism dark"` |
| Chart recommendations | `chart` | `--domain chart "real-time dashboard"` |
| UX best practices | `ux` | `--domain ux "animation accessibility"` |
| Alternative fonts | `typography` | `--domain typography "elegant luxury"` |
| Landing structure | `landing` | `--domain landing "hero social-proof"` |

### Step 4: Stack Guidelines (Default: html-tailwind)

Get implementation-specific best practices. If user doesn't specify a stack, **default to `html-tailwind`**.

```bash
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "<keyword>" --stack html-tailwind
```

Available stacks: `html-tailwind`, `react`, `nextjs`, `vue`, `svelte`, `swiftui`, `react-native`, `flutter`, `shadcn`

---

## Search Reference

### Available Domains

| Domain | Use For | Example Keywords |
|--------|---------|------------------|
| `product` | Product type recommendations | SaaS, e-commerce, portfolio, healthcare, beauty, service |
| `style` | UI styles, colors, effects | glassmorphism, minimalism, dark mode, brutalism |
| `typography` | Font pairings, Google Fonts | elegant, playful, professional, modern |
| `color` | Color palettes by product type | saas, ecommerce, healthcare, beauty, fintech, service |
| `landing` | Page structure, CTA strategies | hero, hero-centric, testimonial, pricing, social-proof |
| `chart` | Chart types, library recommendations | trend, comparison, timeline, funnel, pie |
| `ux` | Best practices, anti-patterns | animation, accessibility, z-index, loading |
| `react` | React/Next.js performance | waterfall, bundle, suspense, memo, rerender, cache |
| `web` | Web interface guidelines | aria, focus, keyboard, semantic, virtualize |
| `prompt` | AI prompts, CSS keywords | (style name) |

### Available Stacks

| Stack | Focus |
|-------|-------|
| `html-tailwind` | Tailwind utilities, responsive, a11y (DEFAULT) |
| `react` | State, hooks, performance, patterns |
| `nextjs` | SSR, routing, images, API routes |
| `vue` | Composition API, Pinia, Vue Router |
| `svelte` | Runes, stores, SvelteKit |
| `swiftui` | Views, State, Navigation, Animation |
| `react-native` | Components, Navigation, Lists |
| `flutter` | Widgets, State, Layout, Theming |
| `shadcn` | shadcn/ui components, theming, forms, patterns |

---

## Example Workflow

**User request:** "Làm landing page cho dịch vụ chăm sóc da chuyên nghiệp"

### Step 1: Analyze Requirements
- Product type: Beauty/Spa service
- Style keywords: elegant, professional, soft
- Industry: Beauty/Wellness
- Stack: html-tailwind (default)

### Step 2: Generate Design System (REQUIRED)

```bash
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "beauty spa wellness service elegant" --design-system -p "Serenity Spa"
```

**Output:** Complete design system with pattern, style, colors, typography, effects, and anti-patterns.

### Step 3: Supplement with Detailed Searches (as needed)

```bash
# Get UX guidelines for animation and accessibility
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "animation accessibility" --domain ux

# Get alternative typography options if needed
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "elegant luxury serif" --domain typography
```

### Step 4: Stack Guidelines

```bash
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "layout responsive form" --stack html-tailwind
```

**Then:** Synthesize design system + detailed searches and implement the design.

---

## Output Formats

The `--design-system` flag supports two output formats:

```bash
# ASCII box (default) - best for terminal display
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "fintech crypto" --design-system

# Markdown - best for documentation
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "fintech crypto" --design-system -f markdown
```

---

## Tips for Better Results

1. **Be specific with keywords** - "healthcare SaaS dashboard" > "app"
2. **Search multiple times** - Different keywords reveal different insights
3. **Combine domains** - Style + Typography + Color = Complete design system
4. **Always check UX** - Search "animation", "z-index", "accessibility" for common issues
5. **Use stack flag** - Get implementation-specific best practices
6. **Iterate** - If first search doesn't match, try different keywords

---

## Common Rules for Professional UI

These are frequently overlooked issues that make UI look unprofessional:

### Icons & Visual Elements

| Rule | Do | Don't |
|------|----|----- |
| **No emoji icons** | Use SVG icons (Heroicons, Lucide, Simple Icons) | Use emojis like 🎨 🚀 ⚙️ as UI icons |
| **Stable hover states** | Use color/opacity transitions on hover | Use scale transforms that shift layout |
| **Correct brand logos** | Research official SVG from Simple Icons | Guess or use incorrect logo paths |
| **Consistent icon sizing** | Use fixed viewBox (24x24) with w-6 h-6 | Mix different icon sizes randomly |

### Interaction & Cursor

| Rule | Do | Don't |
|------|----|----- |
| **Cursor pointer** | Add `cursor-pointer` to all clickable/hoverable cards | Leave default cursor on interactive elements |
| **Hover feedback** | Provide visual feedback (color, shadow, border) | No indication element is interactive |
| **Smooth transitions** | Use `transition-colors duration-200` | Instant state changes or too slow (>500ms) |

### Light/Dark Mode Contrast

| Rule | Do | Don't |
|------|----|----- |
| **Glass card light mode** | Use `bg-white/80` or higher opacity | Use `bg-white/10` (too transparent) |
| **Text contrast light** | Use `#0F172A` (slate-900) for text | Use `#94A3B8` (slate-400) for body text |
| **Muted text light** | Use `#475569` (slate-600) minimum | Use gray-400 or lighter |
| **Border visibility** | Use `border-gray-200` in light mode | Use `border-white/10` (invisible) |

### Layout & Spacing

| Rule | Do | Don't |
|------|----|----- |
| **Floating navbar** | Add `top-4 left-4 right-4` spacing | Stick navbar to `top-0 left-0 right-0` |
| **Content padding** | Account for fixed navbar height | Let content hide behind fixed elements |
| **Consistent max-width** | Use same `max-w-6xl` or `max-w-7xl` | Mix different container widths |

---

## Pre-Delivery Checklist

Before delivering UI code, verify these items:

### Visual Quality
- [ ] No emojis used as icons (use SVG instead)
- [ ] All icons from consistent icon set (Heroicons/Lucide)
- [ ] Brand logos are correct (verified from Simple Icons)
- [ ] Hover states don't cause layout shift
- [ ] Use theme colors directly (bg-primary) not var() wrapper

### Interaction
- [ ] All clickable elements have `cursor-pointer`
- [ ] Hover states provide clear visual feedback
- [ ] Transitions are smooth (150-300ms)
- [ ] Focus states visible for keyboard navigation

### Light/Dark Mode
- [ ] Light mode text has sufficient contrast (4.5:1 minimum)
- [ ] Glass/transparent elements visible in light mode
- [ ] Borders visible in both modes
- [ ] Test both modes before delivery

### Layout
- [ ] Floating elements have proper spacing from edges
- [ ] No content hidden behind fixed navbars
- [ ] Responsive at 375px, 768px, 1024px, 1440px
- [ ] No horizontal scroll on mobile

### Accessibility
- [ ] All images have alt text
- [ ] Form inputs have labels
- [ ] Color is not the only indicator
- [ ] `prefers-reduced-motion` respected
```
</details>

### ux-state-completer

**Ruta:** `.agent/skills/ux-state-completer/SKILL.md`

<details>
<summary>Ver contenido de SKILL.md</summary>

```markdown
---
name: ux-state-completer
description: Use when the request requires implement complete UX states and recovery paths for critical flows.
---

# UX State Completer

## Do not use when
- The request is unrelated to this domain or requires a different specialized skill.
- The user asks only for high-level discussion without applying this workflow.
- Another skill has a tighter, more specific trigger for the same request.

## Example user requests
- "Apply ux state completer to improve this feature."
- "Use ux state completer and give me the concrete deliverables."
- "Can you run a full ux state completer pass on this repo?"
- "I need step-by-step execution using ux state completer."
## Goal
Eliminate happy-path demos by implementing full state matrices and recovery with domain microcopy.

## When to use
- New screen/flow.
- Missing error/empty/loading/success.

## Minimal inputs (ask only if missing)
- Top 3 flows and expected states.

## Procedure (MUST)
1) Define state matrix.
2) Implement loading/empty/error/success + recovery.
3) Add permission denied + timeout.
4) Ensure domain-specific microcopy.
5) Capture proof.

## Outputs (MUST produce)
- State-complete flows.
- Proof references in walkthrough.
```
</details>

### visual-regression-guardian

**Ruta:** `.agent/skills/visual-regression-guardian/SKILL.md`

<details>
<summary>Ver contenido de SKILL.md</summary>

```markdown
---
name: visual-regression-guardian
description: Use when the request requires set up Playwright visual regression testing: baselines, multi-viewport, state coverage, CI integration.
---

# Visual Regression Guardian (Playwright)

## Do not use when
- The request is unrelated to this domain or requires a different specialized skill.
- The user asks only for high-level discussion without applying this workflow.
- Another skill has a tighter, more specific trigger for the same request.

## Example user requests
- "Apply visual regression guardian to improve this feature."
- "Use visual regression guardian and give me the concrete deliverables."
- "Can you run a full visual regression guardian pass on this repo?"
- "I need step-by-step execution using visual regression guardian."
## Goal
Prevent visual drift and catch subtle regressions in high-impact UIs.

## When to use
- PRODUCTION+.
- After tokens and signature patterns exist.
- Before client handoff.

## Minimal inputs (ask only if missing)
- Routes to baseline.
- Viewports.
- Light/dark variants.

## Procedure (MUST)
1) Add and configure Playwright.
2) Create `docs/visual_regression.md` from template.
3) Implement visual tests for key routes and critical states.
4) Define snapshot update policy.
5) Integrate into CI.

## Outputs (MUST produce)
- `docs/visual_regression.md`.
- `tests/visual/*.spec.*`.
- Playwright config + report artifacts.

## Notes
Snapshots are reviewed artifacts, not auto-updated noise.
```
</details>

### wcag-audit-patterns

**Ruta:** `.agent/skills/wcag-audit-patterns/SKILL.md`

<details>
<summary>Ver contenido de SKILL.md</summary>

```markdown
---
name: wcag-audit-patterns
description: Use when the request requires conduct WCAG 2.2 accessibility audits with automated testing, manual verification, and remediation guidance. Use when auditing websites for accessibility, fixing WCAG violations, or implementing accessible design patterns.
---

# WCAG Audit Patterns

## When to use
- The request explicitly matches **wcag audit patterns** outcomes.
- The user asks for work that aligns with: Use when the request requires conduct WCAG 2.2 accessibility audits with automated testing, manual verification, and remediation guidance. Use when auditing websites for accessibility, fixing WCAG violations, or implementing accessible design patterns.
- The task needs a repeatable workflow or artifacts defined by this skill.

## Do not use when
- The request is unrelated to this domain or requires a different specialized skill.
- The user asks only for high-level discussion without applying this workflow.
- Another skill has a tighter, more specific trigger for the same request.

## Example user requests
- "Apply wcag audit patterns to improve this feature."
- "Use wcag audit patterns and give me the concrete deliverables."
- "Can you run a full wcag audit patterns pass on this repo?"
- "I need step-by-step execution using wcag audit patterns."
Comprehensive guide to auditing web content against WCAG 2.2 guidelines with actionable remediation strategies.

## Use this skill when

- Conducting accessibility audits
- Fixing WCAG violations
- Implementing accessible components
- Preparing for accessibility lawsuits
- Meeting ADA/Section 508 requirements
- Achieving VPAT compliance

## Do not use this skill when

- You need legal advice or formal certification
- You only want a quick automated scan without manual verification
- You cannot access the UI or source for remediation work

## Instructions

1. Run automated scans (axe, Lighthouse, WAVE) to collect initial findings.
2. Perform manual checks (keyboard navigation, focus order, screen reader flows).
3. Map each issue to a WCAG criterion, severity, and remediation guidance.
4. Re-test after fixes and document residual risk and compliance status.

Refer to `resources/implementation-playbook.md` for detailed patterns, checklists, and templates.

## Safety

- Avoid claiming legal compliance without expert review.
- Keep evidence of test steps and results for audit trails.

## Resources

- `resources/implementation-playbook.md` for detailed patterns, checklists, and templates.
```
</details>

### web-performance-optimization

**Ruta:** `.agent/skills/web-performance-optimization/SKILL.md`

<details>
<summary>Ver contenido de SKILL.md</summary>

```markdown
---
name: web-performance-optimization
description: "Use when the request requires optimize website and web application performance including loading speed, Core Web Vitals, bundle size, caching strategies, and runtime performance."
---

# Web Performance Optimization

## When to use
- The request explicitly matches **web performance optimization** outcomes.
- The user asks for work that aligns with: Use when the request requires optimize website and web application performance including loading speed, Core Web Vitals, bundle size, caching strategies, and runtime performance.
- The task needs a repeatable workflow or artifacts defined by this skill.

## Do not use when
- The request is unrelated to this domain or requires a different specialized skill.
- The user asks only for high-level discussion without applying this workflow.
- Another skill has a tighter, more specific trigger for the same request.

## Example user requests
- "Apply web performance optimization to improve this feature."
- "Use web performance optimization and give me the concrete deliverables."
- "Can you run a full web performance optimization pass on this repo?"
- "I need step-by-step execution using web performance optimization."
## Overview

Help developers optimize website and web application performance to improve user experience, SEO rankings, and conversion rates. This skill provides systematic approaches to measure, analyze, and improve loading speed, runtime performance, and Core Web Vitals metrics.

## When to Use This Skill

- Use when website or app is loading slowly
- Use when optimizing for Core Web Vitals (LCP, FID, CLS)
- Use when reducing JavaScript bundle size
- Use when improving Time to Interactive (TTI)
- Use when optimizing images and assets
- Use when implementing caching strategies
- Use when debugging performance bottlenecks
- Use when preparing for performance audits

## How It Works

### Step 1: Measure Current Performance

I'll help you establish baseline metrics:
- Run Lighthouse audits
- Measure Core Web Vitals (LCP, FID, CLS)
- Check bundle sizes
- Analyze network waterfall
- Identify performance bottlenecks

### Step 2: Identify Issues

Analyze performance problems:
- Large JavaScript bundles
- Unoptimized images
- Render-blocking resources
- Slow server response times
- Missing caching headers
- Layout shifts
- Long tasks blocking main thread

### Step 3: Prioritize Optimizations

Focus on high-impact improvements:
- Critical rendering path optimization
- Code splitting and lazy loading
- Image optimization
- Caching strategies
- Third-party script optimization

### Step 4: Implement Optimizations

Apply performance improvements:
- Optimize assets (images, fonts, CSS, JS)
- Implement code splitting
- Add caching headers
- Lazy load non-critical resources
- Optimize critical rendering path

### Step 5: Verify Improvements

Measure impact of changes:
- Re-run Lighthouse audits
- Compare before/after metrics
- Monitor real user metrics (RUM)
- Test on different devices and networks

## Examples

### Example 1: Optimizing Core Web Vitals

```markdown
## Performance Audit Results

### Current Metrics (Before Optimization)
- **LCP (Largest Contentful Paint):** 4.2s ❌ (should be < 2.5s)
- **FID (First Input Delay):** 180ms ❌ (should be < 100ms)
- **CLS (Cumulative Layout Shift):** 0.25 ❌ (should be < 0.1)
- **Lighthouse Score:** 62/100

### Issues Identified

1. **LCP Issue:** Hero image (2.5MB) loads slowly
2. **FID Issue:** Large JavaScript bundle (850KB) blocks main thread
3. **CLS Issue:** Images without dimensions cause layout shifts

### Optimization Plan

#### Fix LCP (Largest Contentful Paint)

**Problem:** Hero image is 2.5MB and loads slowly

**Solutions:**
\`\`\`html
<!-- Before: Unoptimized image -->
<img src="/hero.jpg" alt="Hero">

<!-- After: Optimized with modern formats -->
<picture>
  <source srcset="/hero.avif" type="image/avif">
  <source srcset="/hero.webp" type="image/webp">
  <img 
    src="/hero.jpg" 
    alt="Hero"
    width="1200" 
    height="600"
    loading="eager"
    fetchpriority="high"
  >
</picture>
\`\`\`

**Additional optimizations:**
- Compress image to < 200KB
- Use CDN for faster delivery
- Preload hero image: `<link rel="preload" as="image" href="/hero.avif">`

#### Fix FID (First Input Delay)

**Problem:** 850KB JavaScript bundle blocks main thread

**Solutions:**

1. **Code Splitting:**
\`\`\`javascript
// Before: Everything in one bundle
import { HeavyComponent } from './HeavyComponent';
import { Analytics } from './analytics';
import { ChatWidget } from './chat';

// After: Lazy load non-critical code
const HeavyComponent = lazy(() => import('./HeavyComponent'));
const ChatWidget = lazy(() => import('./chat'));

// Load analytics after page interactive
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    import('./analytics').then(({ Analytics }) => {
      Analytics.init();
    });
  });
}
\`\`\`

2. **Remove Unused Dependencies:**
\`\`\`bash
# Analyze bundle
npx webpack-bundle-analyzer

# Remove unused packages
npm uninstall moment  # Use date-fns instead (smaller)
npm install date-fns
\`\`\`

3. **Defer Non-Critical Scripts:**
\`\`\`html
<!-- Before: Blocks rendering -->
<script src="/analytics.js"></script>

<!-- After: Deferred -->
<script src="/analytics.js" defer></script>
\`\`\`

#### Fix CLS (Cumulative Layout Shift)

**Problem:** Images without dimensions cause layout shifts

**Solutions:**
\`\`\`html
<!-- Before: No dimensions -->
<img src="/product.jpg" alt="Product">

<!-- After: With dimensions -->
<img 
  src="/product.jpg" 
  alt="Product"
  width="400" 
  height="300"
  style="aspect-ratio: 4/3;"
>
\`\`\`

**For dynamic content:**
\`\`\`css
/* Reserve space for content that loads later */
.skeleton-loader {
  min-height: 200px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
\`\`\`

### Results After Optimization

- **LCP:** 1.8s ✅ (improved by 57%)
- **FID:** 45ms ✅ (improved by 75%)
- **CLS:** 0.05 ✅ (improved by 80%)
- **Lighthouse Score:** 94/100 ✅
```

### Example 2: Reducing JavaScript Bundle Size

```markdown
## Bundle Size Optimization

### Current State
- **Total Bundle:** 850KB (gzipped: 280KB)
- **Main Bundle:** 650KB
- **Vendor Bundle:** 200KB
- **Load Time (3G):** 8.2s

### Analysis

\`\`\`bash
# Analyze bundle composition
npx webpack-bundle-analyzer dist/stats.json
\`\`\`

**Findings:**
1. Moment.js: 67KB (can replace with date-fns: 12KB)
2. Lodash: 72KB (using entire library, only need 5 functions)
3. Unused code: ~150KB of dead code
4. No code splitting: Everything in one bundle

### Optimization Steps

#### 1. Replace Heavy Dependencies

\`\`\`bash
# Remove moment.js (67KB) → Use date-fns (12KB)
npm uninstall moment
npm install date-fns

# Before
import moment from 'moment';
const formatted = moment(date).format('YYYY-MM-DD');

# After
import { format } from 'date-fns';
const formatted = format(date, 'yyyy-MM-dd');
\`\`\`

**Savings:** 55KB

#### 2. Use Lodash Selectively

\`\`\`javascript
// Before: Import entire library (72KB)
import _ from 'lodash';
const unique = _.uniq(array);

// After: Import only what you need (5KB)
import uniq from 'lodash/uniq';
const unique = uniq(array);

// Or use native methods
const unique = [...new Set(array)];
\`\`\`

**Savings:** 67KB

#### 3. Implement Code Splitting

\`\`\`javascript
// Next.js example
import dynamic from 'next/dynamic';

// Lazy load heavy components
const Chart = dynamic(() => import('./Chart'), {
  loading: () => <div>Loading chart...</div>,
  ssr: false
});

const AdminPanel = dynamic(() => import('./AdminPanel'), {
  loading: () => <div>Loading...</div>
});

// Route-based code splitting (automatic in Next.js)
// pages/admin.js - Only loaded when visiting /admin
// pages/dashboard.js - Only loaded when visiting /dashboard
\`\`\`

#### 4. Remove Dead Code

\`\`\`javascript
// Enable tree shaking in webpack.config.js
module.exports = {
  mode: 'production',
  optimization: {
    usedExports: true,
    sideEffects: false
  }
};

// In package.json
{
  "sideEffects": false
}
\`\`\`

#### 5. Optimize Third-Party Scripts

\`\`\`html
<!-- Before: Loads immediately -->
<script src="https://analytics.com/script.js"></script>

<!-- After: Load after page interactive -->
<script>
  window.addEventListener('load', () => {
    const script = document.createElement('script');
    script.src = 'https://analytics.com/script.js';
    script.async = true;
    document.body.appendChild(script);
  });
</script>
\`\`\`

### Results

- **Total Bundle:** 380KB ✅ (reduced by 55%)
- **Main Bundle:** 180KB ✅
- **Vendor Bundle:** 80KB ✅
- **Load Time (3G):** 3.1s ✅ (improved by 62%)
```

### Example 3: Image Optimization Strategy

```markdown
## Image Optimization

### Current Issues
- 15 images totaling 12MB
- No modern formats (WebP, AVIF)
- No responsive images
- No lazy loading

### Optimization Strategy

#### 1. Convert to Modern Formats

\`\`\`bash
# Install image optimization tools
npm install sharp

# Conversion script (optimize-images.js)
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimizeImage(inputPath, outputDir) {
  const filename = path.basename(inputPath, path.extname(inputPath));
  
  // Generate WebP
  await sharp(inputPath)
    .webp({ quality: 80 })
    .toFile(path.join(outputDir, \`\${filename}.webp\`));
  
  // Generate AVIF (best compression)
  await sharp(inputPath)
    .avif({ quality: 70 })
    .toFile(path.join(outputDir, \`\${filename}.avif\`));
  
  // Generate optimized JPEG fallback
  await sharp(inputPath)
    .jpeg({ quality: 80, progressive: true })
    .toFile(path.join(outputDir, \`\${filename}.jpg\`));
}

// Process all images
const images = fs.readdirSync('./images');
images.forEach(img => {
  optimizeImage(\`./images/\${img}\`, './images/optimized');
});
\`\`\`

#### 2. Implement Responsive Images

\`\`\`html
<!-- Responsive images with modern formats -->
<picture>
  <!-- AVIF for browsers that support it (best compression) -->
  <source 
    srcset="
      /images/hero-400.avif 400w,
      /images/hero-800.avif 800w,
      /images/hero-1200.avif 1200w
    "
    type="image/avif"
    sizes="(max-width: 768px) 100vw, 50vw"
  >
  
  <!-- WebP for browsers that support it -->
  <source 
    srcset="
      /images/hero-400.webp 400w,
      /images/hero-800.webp 800w,
      /images/hero-1200.webp 1200w
    "
    type="image/webp"
    sizes="(max-width: 768px) 100vw, 50vw"
  >
  
  <!-- JPEG fallback -->
  <img 
    src="/images/hero-800.jpg"
    srcset="
      /images/hero-400.jpg 400w,
      /images/hero-800.jpg 800w,
      /images/hero-1200.jpg 1200w
    "
    sizes="(max-width: 768px) 100vw, 50vw"
    alt="Hero image"
    width="1200"
    height="600"
    loading="lazy"
  >
</picture>
\`\`\`

#### 3. Lazy Loading

\`\`\`html
<!-- Native lazy loading -->
<img 
  src="/image.jpg" 
  alt="Description"
  loading="lazy"
  width="800"
  height="600"
>

<!-- Eager loading for above-the-fold images -->
<img 
  src="/hero.jpg" 
  alt="Hero"
  loading="eager"
  fetchpriority="high"
>
\`\`\`

#### 4. Next.js Image Component

\`\`\`javascript
import Image from 'next/image';

// Automatic optimization
<Image
  src="/hero.jpg"
  alt="Hero"
  width={1200}
  height={600}
  priority  // For above-the-fold images
  quality={80}
/>

// Lazy loaded
<Image
  src="/product.jpg"
  alt="Product"
  width={400}
  height={300}
  loading="lazy"
/>
\`\`\`

### Results

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| Total Image Size | 12MB | 1.8MB | 85% reduction |
| LCP | 4.5s | 1.6s | 64% faster |
| Page Load (3G) | 18s | 4.2s | 77% faster |
```

## Best Practices

### ✅ Do This

- **Measure First** - Always establish baseline metrics before optimizing
- **Use Lighthouse** - Run audits regularly to track progress
- **Optimize Images** - Use modern formats (WebP, AVIF) and responsive images
- **Code Split** - Break large bundles into smaller chunks
- **Lazy Load** - Defer non-critical resources
- **Cache Aggressively** - Set proper cache headers for static assets
- **Minimize Main Thread Work** - Keep JavaScript execution under 50ms chunks
- **Preload Critical Resources** - Use `<link rel="preload">` for critical assets
- **Use CDN** - Serve static assets from CDN for faster delivery
- **Monitor Real Users** - Track Core Web Vitals from real users

### ❌ Don't Do This

- **Don't Optimize Blindly** - Measure first, then optimize
- **Don't Ignore Mobile** - Test on real mobile devices and slow networks
- **Don't Block Rendering** - Avoid render-blocking CSS and JavaScript
- **Don't Load Everything Upfront** - Lazy load non-critical resources
- **Don't Forget Dimensions** - Always specify image width/height
- **Don't Use Synchronous Scripts** - Use async or defer attributes
- **Don't Ignore Third-Party Scripts** - They often cause performance issues
- **Don't Skip Compression** - Always compress and minify assets

## Common Pitfalls

### Problem: Optimized for Desktop but Slow on Mobile
**Symptoms:** Good Lighthouse score on desktop, poor on mobile
**Solution:**
- Test on real mobile devices
- Use Chrome DevTools mobile throttling
- Optimize for 3G/4G networks
- Reduce JavaScript execution time
```bash
# Test with throttling
lighthouse https://yoursite.com --throttling.cpuSlowdownMultiplier=4
```

### Problem: Large JavaScript Bundle
**Symptoms:** Long Time to Interactive (TTI), high FID
**Solution:**
- Analyze bundle with webpack-bundle-analyzer
- Remove unused dependencies
- Implement code splitting
- Lazy load non-critical code
```bash
# Analyze bundle
npx webpack-bundle-analyzer dist/stats.json
```

### Problem: Images Causing Layout Shifts
**Symptoms:** High CLS score, content jumping
**Solution:**
- Always specify width and height
- Use aspect-ratio CSS property
- Reserve space with skeleton loaders
```css
img {
  aspect-ratio: 16 / 9;
  width: 100%;
  height: auto;
}
```

### Problem: Slow Server Response Time
**Symptoms:** High TTFB (Time to First Byte)
**Solution:**
- Implement server-side caching
- Use CDN for static assets
- Optimize database queries
- Consider static site generation (SSG)
```javascript
// Next.js: Static generation
export async function getStaticProps() {
  const data = await fetchData();
  return {
    props: { data },
    revalidate: 60 // Regenerate every 60 seconds
  };
}
```

## Performance Checklist

### Images
- [ ] Convert to modern formats (WebP, AVIF)
- [ ] Implement responsive images
- [ ] Add lazy loading
- [ ] Specify dimensions (width/height)
- [ ] Compress images (< 200KB each)
- [ ] Use CDN for delivery

### JavaScript
- [ ] Bundle size < 200KB (gzipped)
- [ ] Implement code splitting
- [ ] Lazy load non-critical code
- [ ] Remove unused dependencies
- [ ] Minify and compress
- [ ] Use async/defer for scripts

### CSS
- [ ] Inline critical CSS
- [ ] Defer non-critical CSS
- [ ] Remove unused CSS
- [ ] Minify CSS files
- [ ] Use CSS containment

### Caching
- [ ] Set cache headers for static assets
- [ ] Implement service worker
- [ ] Use CDN caching
- [ ] Cache API responses
- [ ] Version static assets

### Core Web Vitals
- [ ] LCP < 2.5s
- [ ] FID < 100ms
- [ ] CLS < 0.1
- [ ] TTFB < 600ms
- [ ] TTI < 3.8s

## Performance Tools

### Measurement Tools
- **Lighthouse** - Comprehensive performance audit
- **WebPageTest** - Detailed waterfall analysis
- **Chrome DevTools** - Performance profiling
- **PageSpeed Insights** - Real user metrics
- **Web Vitals Extension** - Monitor Core Web Vitals

### Analysis Tools
- **webpack-bundle-analyzer** - Visualize bundle composition
- **source-map-explorer** - Analyze bundle size
- **Bundlephobia** - Check package sizes before installing
- **ImageOptim** - Image compression tool

### Monitoring Tools
- **Google Analytics** - Track Core Web Vitals
- **Sentry** - Performance monitoring
- **New Relic** - Application performance monitoring
- **Datadog** - Real user monitoring

## Related Skills

- `@react-best-practices` - React performance patterns
- `@frontend-dev-guidelines` - Frontend development standards
- `@systematic-debugging` - Debug performance issues
- `@senior-architect` - Architecture for performance

## Additional Resources

- [Web.dev Performance](https://web.dev/performance/)
- [Core Web Vitals](https://web.dev/vitals/)
- [Lighthouse Documentation](https://developers.google.com/web/tools/lighthouse)
- [MDN Performance Guide](https://developer.mozilla.org/en-US/docs/Web/Performance)
- [Next.js Performance](https://nextjs.org/docs/advanced-features/measuring-performance)
- [Image Optimization Guide](https://web.dev/fast/#optimize-your-images)

---

**Pro Tip:** Focus on Core Web Vitals (LCP, FID, CLS) first - they have the biggest impact on user experience and SEO rankings!
```
</details>

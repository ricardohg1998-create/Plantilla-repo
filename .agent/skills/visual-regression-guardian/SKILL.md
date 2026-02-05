---
name: visual-regression-guardian
description: "Set up Playwright visual regression testing: baselines, multi-viewport, state coverage, CI integration."
version: 1.0.0
allowed-tools: ["Read", "Write", "Edit", "Bash", "Glob", "Grep"]
tags: ["visual", "regression", "guardian"]
---
# Visual Regression Guardian (Playwright)

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


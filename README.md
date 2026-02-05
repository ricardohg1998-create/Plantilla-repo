# AG_PRO_TEMPLATE — Project Bootstrap

This folder is a **project template** for Google Antigravity that forces:
- Non-generic UI (design thesis + signature patterns + no default kit)
- Depth (vertical/horizontal/transversal)
- Evidence (walkthrough + decision log + release checklist)
- Senior hardening (CI, threat model, visual regression, runbook)

## How to start a new client project
1) Copy this folder to a new directory (rename it).
2) Fill `PROJECT_BRIEF.md`.
3) Open the folder as a workspace in Antigravity.
4) In chat, run: `/kickoff`
5) Follow the generated `docs/implementation_plan.md`, then `/scaffold`.

## Pasos rápidos recomendados (orden sugerido)
1) Copia esta plantilla a un nuevo directorio y renómbralo.
2) Completa [`PROJECT_BRIEF.md`](PROJECT_BRIEF.md).
3) Ejecuta `/kickoff` para generar y completar los docs clave: [`docs/implementation_plan.md`](docs/implementation_plan.md) y [`docs/design_concept.md`](docs/design_concept.md).
4) Verifica que ambos documentos estén completos y continúa con `/scaffold`.

## Recommended workflow sequence (PRODUCTION)
- /kickoff
- /scaffold
- /ci_setup
- /security_harden
- /visual_regress
- /qa_polish
- /release_proof

## Notes
- Keep global `~/.gemini/GEMINI.md` short; use `.agent/rules/agent_rules.md` for the heavy rules.
- Skills can stay global at `~/.gemini/antigravity/skills/`.
- Índice de documentación y orden recomendado: ver `docs/README.md`.

## Política de comportamiento del agente
- El agente debe detectar y aplicar skills relevantes automáticamente sin necesidad de mención explícita del usuario.
- Si una tarea coincide claramente con el propósito de una skill disponible, la skill se debe activar como parte del flujo normal de ejecución.
- Si hay múltiples skills potenciales, se debe priorizar el conjunto mínimo que cubra la necesidad del usuario.

### Ejemplos de disparadores
- Si el usuario pide crear una skill nueva o actualizar una existente, usar `skill-creator`.
- Si el usuario pide listar, instalar o actualizar skills, usar `skill-installer`.

## Skills metadata
- Esquema oficial de metadatos: `.agent/skills/_schema.md`.
- Lint estático: `python scripts/lint_skills_metadata.py`.

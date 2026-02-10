# Índice de documentación

Esta carpeta contiene los documentos de trabajo del proyecto. Se van rellenando a medida que avanza el proyecto siguiendo los workflows.

## Orden recomendado

| # | Archivo | Cuándo se rellena | Para qué sirve |
|---|---------|-------------------|----------------|
| 1 | `../PROJECT_BRIEF.md` | Antes de empezar | Información del cliente y objetivos |
| 2 | `../CLIENTE_CHECKLIST.md` | Antes de empezar | Material que necesitas del cliente |
| 3 | `design_concept.md` | Durante `/kickoff` | Paleta, tipografía, patrones de firma, narrativa |
| 4 | `implementation_plan.md` | Durante `/kickoff` | Plan de páginas, secciones y funcionalidades |
| 5 | `architecture_decision.md` | Durante `/kickoff` | Stack tecnológico elegido y por qué |
| 6 | `decision_log.md` | Durante todo el proyecto | Registro de decisiones importantes |
| 7 | `design_qa.md` | Durante `/qa_polish` | Resultado de la revisión de calidad visual |
| 8 | `walkthrough.md` | Durante `/preview` | Capturas y recorrido visual del resultado |
| 9 | `release_checklist.md` | Durante `/release_proof` | Checklist final de entrega |

## Documentos opcionales

Estos se usan solo si el proyecto lo necesita (backend, datos sensibles, proyecto grande):

| Archivo | Cuándo usarlo |
|---------|---------------|
| `ci.md` | Si configuras CI/CD (`/ci_setup`) |
| `security_checklist.md` | Si hay backend o datos de usuarios (`/security_harden`) |
| `threat_model.md` | Si hay autenticación o pagos (`/security_harden`) |
| `ui_audit.md` | Si usas un UI kit y quieres verificar que no se reconoce |
| `visual_regression.md` | Si configuras tests visuales automáticos (`/visual_regress`) |

## Plantillas

Las plantillas en `docs/_templates/` son el punto de partida para crear los documentos. Al ejecutar los workflows, se rellenan automáticamente.

| Plantilla | Genera |
|-----------|--------|
| `design_concept.template.md` | `design_concept.md` |
| `implementation_plan.template.md` | `implementation_plan.md` |
| `design_library.template.md` | Referencia de patrones por sector (no se copia, se consulta) |
| `architecture_decision.template.md` | `architecture_decision.md` |
| `decision_log.template.md` | `decision_log.md` |
| `release_checklist.template.md` | `release_checklist.md` |
| `design_qa.template.md` | `design_qa.md` |
| `walkthrough.template.md` | `walkthrough.md` |
| `ui_audit.template.md` | `ui_audit.md` |
| `ci.template.md` | `ci.md` |
| `security_checklist.template.md` | `security_checklist.md` |
| `threat_model.template.md` | `threat_model.md` |
| `visual_regression.template.md` | `visual_regression.md` |

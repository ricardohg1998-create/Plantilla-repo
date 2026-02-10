---
description: Modelo de amenazas y checklist de seguridad (opcional). Solo para proyectos con backend o datos sensibles.
---

> ⚠️ Este workflow es OPCIONAL. No es necesario para webs corporativas sin backend.
> Úsalo si el proyecto maneja datos de usuarios, pagos, o autenticación.

1. Análisis de seguridad
   Crear `docs/threat_model.md` y `docs/security_checklist.md`.
   Usar la skill `threat-model-owasp-hardening` como guía.

2. Registrar riesgos residuales
   Actualizar `docs/decision_log.md` con riesgos aceptados y plan de monitorización.

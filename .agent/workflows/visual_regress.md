---
description: Tests de regresión visual con Playwright (opcional). Solo para proyectos grandes con muchos cambios visuales.
---

> ⚠️ Este workflow es OPCIONAL. No es necesario para la mayoría de webs de PYMEs.
> Úsalo si el proyecto tiene muchas páginas y quieres detectar roturas visuales automáticamente.

1. Configurar tests visuales
   Crear tests de regresión visual con Playwright.
   Capturar baselines en múltiples viewports.
   Usar la skill `visual-regression-guardian` como guía.

2. Integrar en CI
   Si `/ci_setup` está configurado, añadir los tests visuales al pipeline.

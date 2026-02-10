---
description: Ejecuta build, lint y tests para verificar que el código es correcto. Resumen de resultados.
---

1. Detectar herramientas
   Identificar el gestor de paquetes (npm/pnpm) y los scripts disponibles en `package.json`.

2. Ejecutar comprobaciones
   Correr en orden:
   - `npm run build` (o equivalente)
   - `npm run lint` (si existe)
   - `npx tsc --noEmit` (si usa TypeScript)
   - `npm test` (si hay tests configurados)
   Capturar un resumen del resultado de cada uno.

3. Documentar resultados
   Actualizar `docs/walkthrough.md` con los comandos ejecutados y sus resultados.
   Si hay errores, listarlos con contexto para poder corregirlos.

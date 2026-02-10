---
description: Arranca un proyecto de cliente. Investiga el sector, define diseño, plan y estructura.
---
// turbo-all

1. Verificar el brief
   Lee `PROJECT_BRIEF.md` completo. Si faltan campos marcados con ⭐, pregunta al usuario antes de continuar.

2. Revisar material del cliente
   Comprueba `CLIENTE_CHECKLIST.md`. Identifica qué material real tienes (logo, fotos, textos) y qué habrá que generar.

3. Investigar el sector
   Busca online 3-5 webs del mismo sector del cliente. Analiza qué funciona, qué es genérico y qué te gustaría superar.

4. Consultar la biblioteca de patrones
   Lee `docs/_templates/design_library.template.md` y selecciona el sector que más se aproxime al cliente. Usa las recomendaciones como base.

5. Definir concepto de diseño
   Genera `docs/design_concept.md` con:
   - Narrativa de marca y metáfora visual
   - Paleta de colores (principal, acento, neutros)
   - Pareja tipográfica (titulares + cuerpo)
   - 2-3 patrones de firma (elementos visuales únicos)
   - Estructura narrativa de cada página

6. Elegir stack
   Ejecuta la skill `stack-architect-selector` y documenta en `docs/architecture_decision.md`.

7. Crear plan de ejecución
   Genera `docs/implementation_plan.md` con la estructura de páginas, secciones por página, y checklist de funcionalidades.

8. Proponer patrones de firma
   Ejecuta `signature-patterns-lab` para definir 2-3 patrones visuales únicos que den autoría al proyecto.

9. Presentar al usuario
   Muestra un resumen visual del concepto: paleta, tipografía, estructura y patrones propuestos. Espera aprobación antes de continuar con `/scaffold`.

---
description: Revisión de calidad visual y pulido final del diseño.
---

1. Revisar en navegador (Desktop)
   Abrir cada página y comprobar:
   - Jerarquía visual clara (los títulos destacan, el texto es legible).
   - Espaciados consistentes entre secciones.
   - Colores y contrastes correctos (texto legible sobre fondos).
   - Imágenes cargando y con tamaño correcto.
   - Modo oscuro (si aplica) funcionando.

2. Revisar en navegador (Móvil)
   Redimensionar el navegador a 375px de ancho y comprobar:
   - El menú hamburguesa funciona y se anima.
   - Las secciones se apilan correctamente.
   - Los CTAs son tocables con el pulgar.
   - Las imágenes no se desbordan.
   - Los textos no se cortan ni son demasiado pequeños.

3. Verificar interacciones
   - Todos los botones reaccionan al hover con efecto elegante.
   - Los elementos aparecen suavemente al hacer scroll.
   - Los links llevan a donde deben.
   - Los formularios validan correctamente.

4. Comprobar contenido
   - No hay textos placeholder ("Lorem ipsum", "Tu texto aquí", etc.).
   - Los testimonios tienen nombre y contexto.
   - Las cifras y datos son coherentes.
   - Los CTAs son claros y específicos (no "Leer más").

5. Test anti-genérico
   Revisa tu trabajo con ojo crítico:
   - ¿Se parece a una web hecha con un template? Si sí, pulir.
   - ¿Los patrones de firma están presentes y son únicos?
   - ¿La tipografía tiene personalidad?
   - ¿El color es intencional y no es un default de framework?

6. Aplicar skills de pulido
   Ejecutar `design-qa-polish-pass` y `frontend-design` para verificación automática.
   Documentar hallazgos y correcciones en `docs/design_qa.md`.

---
description: Crea la estructura del proyecto y la primera página funcional.
---
// turbo-all

1. Crear el proyecto
   Inicializa el proyecto con el stack elegido en `/kickoff` (Next.js con App Router, o Vite si se decidió proyecto simple).
   - Instalar dependencias base: tailwindcss, framer-motion, lucide-react.
   - Configurar tipografías de Google Fonts.

2. Implementar el sistema de diseño
   Configura los tokens de diseño según `docs/design_concept.md`:
   - Colores personalizados en tailwind.config (NO usar los defaults).
   - Tipografía con pesos y escalas definidas.
   - Sombras, radios y espaciado personalizados.
   - Ejecutar `design-system-forge` para asegurar tokens completos.

3. Crear componentes base reutilizables
   - Navbar con navegación responsive y menú hamburguesa animado.
   - Footer limpio con contacto, redes y legal.
   - Botones con micro-interacciones de hover.
   - Sección/Container con variantes de ancho y padding.

4. Construir la página de inicio completa
   Implementar la Home con la estructura narrativa definida en el brief:
   - Hero impactante (NO centrado con gradiente genérico).
   - Sección de credibilidad/servicios.
   - Prueba social (testimonios, cifras).
   - CTA final.
   - Aplicar patrones de firma.

5. Verificar en navegador
   Arrancar el servidor de desarrollo, abrir la web y comprobar:
   - Se renderiza correctamente en desktop.
   - Se ve bien en móvil.
   - Las animaciones funcionan.
   - El contenido no tiene placeholders.

6. Documentar
   Actualizar `docs/walkthrough.md` y `docs/decision_log.md` con lo implementado.

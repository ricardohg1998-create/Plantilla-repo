# Signature Patterns

> Estos 3 patrones son la "firma" de la agencia. Deben implementarse en `shared/ui` y usarse consistentemente para dar cohesión al producto.

## 1. Navegación Inmersiva ("Mega Menu" con Personalidad)

No es solo una lista de links. Es un mapa del sitio visual.

### Concepto
Al hacer click en "Menú" (o hover en desktop), se despliega un panel completo (full-screen o half-screen) que no solo tiene enlaces, sino contexto.

### Estructura
- **Izquierda**: Enlaces principales (Home, Servicios, Proyectos) en tipografía GIGANTE (4rem+), hover revela imagen de fondo.
- **Derecha**: Datos de contacto rápidos, dirección, "Call to Action" secundario ("Hablemos").
- **Fondo**: Backdrop blur con un tinte del color primario.

### A11y & Motion
- **Teclado**: `FocusTrap` dentro del menú. `Esc` para cerrar.
- **Motion**: `AnimatePresence`. Slide down suave.
- **Reduced Motion**: Fade in simple.

---

## 2. Dynamic Bento Grid

Para mostrar características, servicios o proyectos. Rompe la monodia de las filas y columnas iguales.

### Concepto
Una rejilla CSS (`display: grid`) donde las celdas ocupan diferentes tamaños (1x1, 2x1, 2x2, 1x3).

### Estructura
- **Card A (Principal)**: 2x2. Título grande + Imagen/Video.
- **Card B (Dato)**: 1x1. Número grande ("+500") + Label pequeño.
- **Card C (Acción)**: 1x1. Solo un icono de flecha o botón.
- **Card D (Visual)**: 2x1. Imagen abstracta o textura.

### Reglas
- Gap consistente (1rem o 1.5rem).
- Bordes redondeados sutiles.
- Hover en cada celda afecta a las demás (ej: reduce opacidad de las otras) para foco.

---

## 3. Footer Narrativo

El footer no es un cementerio de links. Es la última oportunidad de convencer.

### Concepto
Un footer masivo que actúa como una sección de cierre ("Outro").

### Estructura
1.  **CTA Gigante**: "¿Listo para empezar?" con tipografía display que ocupa el 100% del ancho (text-fill-transparent con outline, o sólido).
2.  **Grid de Navegación**: Enlaces organizados por intención, no solo por página.
3.  **Credenciales**: Logos de certificaciones, ISO, premios.
4.  **Legal discreto**: En una línea final, casi invisible contraste bajo.

### A11y
- Contraste suficiente en los textos legales.
- Estructura de encabezados correcta (`<h2>` para el CTA).

---

## Implementación Técnica (Notas para el Dev)

Estos patrones deben vivir en `shared/ui/patterns/`:
- `shared/ui/patterns/MegaMenu.tsx`
- `shared/ui/patterns/BentoGrid.tsx`
- `shared/ui/patterns/NarrativeFooter.tsx`

Deben ser **Responsive First**. El Bento Grid colapsa a 1 columna en móvil o un slider horizontal.

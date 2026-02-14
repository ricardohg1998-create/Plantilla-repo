# Tesis de Diseño Anti-Genérico

> **Objetivo**: Eliminar el "olor a IA" y plantilla barata. La web debe parecer hecha a mano por un estudio de diseño boutique.

## 1. Valores de Diseño (The Core 3)

### A. Asimetría Controlada
El ojo humano ignora lo predecible. Las plantillas de IA tienden a la simetría perfecta.
- **Regla**: Evitar centrar todo. Usar layouts de 60/40 o 70/30.
- **Táctica**: Desplazar titulares, superponer imágenes sobre fondos de color sólido, usar márgenes negativos (con cuidado en móvil).

### B. Tipografía con Carácter
La tipografía es el 80% del diseño.
- **Regla**: Prohibido usar fuentes *default* sin tracking o line-height ajustado.
- **Selección**: Usar combinaciones de Serif + Sans geométrica para crear tensión visual.
    - *Ejemplo*: Títulos en "Playfair Display" (escultural) + Cuerpo en "Space Grotesk" (brutalista).

### C. Micro-interacciones con Propósito
Nada es estático, pero nada marea.
- **Regla**: Cada elemento interactivo debe tener un estado `:hover` y `:active` que vaya más allá del cambio de color.
- **Táctica**:
    - Botones: Escala 1.05x, cambio de shadow, flecha que se desplaza.
    - Imágenes: Zoom lento (1.05x) al hacer scroll (Parallax suave).
    - Scroll: Los elementos aparecen (`fade-in-up`) a medida que entran en el viewport.

## 2. Estrategia de Assets Anti-IA

### Fotografía "Imperfecta"
Las imágenes de stock gratuitas (Unsplash genérico) y las generadas por IA (Midjourney v4 style) gritan "falso".
- **Filtros**: Aplicar ruido (grain) sutil (2-3%) a todas las imágenes para unificar texturas.
- **Encuadres**: Preferir recortes audaces (close-ups extremos) a planos generales aburridos.
- **Personas**: Evitar sonrisas forzadas a cámara. Usar fotos de espaldas, manos trabajando, o acción real.

### Copywriting Humano
- **Palabras Prohibidas**: "Innovación", "Soluciones integrales", "Líderes en el sector", "Transformación digital" (sin contexto).
- **Voz**: Conversacional, directa, imperfecta. "Hacemos webs que venden" > "Optimizamos tu presencia digital para maximizar el ROI".

## 3. Patrones Prohibidos (The Ban List)

Cualquier PR que incluya esto será rechazado:

1.  **El "Hero Centrado Genérico"**: Título H1 centrado, subtítulo debajo, botón primario azul, botón secundario outline, fondo con gradiente lineal suave.
    - *Alternativa*: Hero asimétrico, tipografía gigante alineada a la izquierda, imagen recortada a la derecha.
2.  **Las "3 Cards en Fila"**: Icono centrado + Título + Texto de 3 líneas.
    - *Alternativa*: Bento Grid, Carousel horizontal, o lista vertical con imágenes intercaladas.
3.  **Ilustraciones Flat de Stock**: Estilo "Undraw" o "Corporate Memphis" (gente azul con extremidades largas).
    - *Alternativa*: Fotografía real, diagramas técnicos abstractos, o tipografía sola.
4.  **Testimonios Carousel**: "Lorem ipsum" con foto circular de stock.
    - *Alternativa*: Testimonios integrados en el flujo de la página, tweets embebidos, o videos.

## 4. Referencias Visuales (Aspiracional)
- **Awwwards**: Buscar "Site of the Day" para inspiración de layout.
- **Minimalissimo**: Para uso del espacio en blanco.
- **Brutalism**: Para atrevimiento tipográfico (en dosis controladas).

# Performance Budgets & CWV Strategy

## Objetivos (Budgets)

La web debe sentirse **instantánea**. No es una sugerencia, es un requisito.

### Métricas Core Web Vitals (Puntaje 95-100)
- **LCP (Largest Contentful Paint)**: `< 1.2s` (Móvil).
  - *Estrategia*: Imagen de Hero con `priority` + Preload de tipografía crítica (Woff2).
- **INP (Interaction to Next Paint)**: `< 100ms`.
  - *Estrategia*: Evitar hidratación masiva. Usar `IntersectionObserver` para componentes pesados (mapas, sliders).
- **CLS (Cumulative Layout Shift)**: `0.00`.
  - *Estrategia*: `aspect-ratio` en todas las imágenes. Espacios reservados para anuncios/widgets. Skeleton screens para contenido dinámico.

### Peso del Bundle (Gzip)
- **Initial JS**: `< 100KB` (Crítico para móviles 4G).
- **Total CSS**: `< 20KB` (Tailwind purgado o CSS Modules minificado).
- **Total Page Weight**: `< 800KB` (Ideal).

---

## Estrategia de Fuentes (Typography)

**PROHIBIDO**: Usar Google Fonts vía CDN (`<link href="fonts.googleapis.com" ...>`).
**RAZÓN**: Privacidad (GDPR) y Performance (DNS lookup + Render Blocking).

### Solución: Self-Hosting
- **Next.js**: Usar `next/font/google`. Descarga y optimiza automáticamente en build time.
  ```tsx
  import { Inter } from 'next/font/google';
  const inter = Inter({ subsets: ['latin'], display: 'swap' });
  ```
- **Vite**: Usar `@fontsource/variable`.
  ```bash
  npm install @fontsource-variable/inter
  import '@fontsource-variable/inter';
  ```

---

## Estrategia de Imágenes

Usa el componente `shared/ui/OptimizedImage` (o `next/image` directo).

1. **Formatos Modernos**: Siempre servir `AVIF` > `WebP` > `JPG`.
2. **Dimensiones Explícitas**: `width` y `height` obligatorios si no es `fill`.
3. **Lazy Loading**: Por defecto `lazy`.
4. **Hero Image**: SIEMPRE `priority` / `eager`. NUNCA lazy load en el LCP.

---

## Control de Terceros (Third Parties)

Todo script externo (GTM, Chat, Maps) degrada la performance 10x más que tu propio código.
- **Estrategia**: Cargar scripts secundarios con `strategy="lazyOnload"` o `worker`.
- **YouTube**: NUNCA usar `iframe` directo. Usar "Lite YouTube Embed" (imagen fachada + click para cargar).

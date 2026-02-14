# Stack Selection Rubric

Esta rúbrica define qué tecnología base utilizar para cada nuevo proyecto. La decisión no debe basarse en gustos personales, sino en los requisitos objetivos del cliente.

## Regla de Oro
**Ante la duda, usa Next.js.** Es el estándar más robusto y versátil para el 90% de los casos de uso de la agencia.

## Cuándo usar Next.js (Default)
Elige Next.js si se cumple **CUALQUIERA** de las siguientes condiciones:
1.  **SEO Alto**: Necesitas SSR (Server Side Rendering) o ISR para asegurar indexación perfecta y rendimiento en Core Web Vitals.
2.  **Blog / Portal / Contenido Dinámico**: El sitio tiene muchas páginas generadas dinámicamente o requiere un CMS.
3.  **i18n**: El proyecto requiere soporte multiidioma robusto con rutas (`/es/`, `/en/`).
4.  **Escalabilidad de Rutas**: El sitio tendrá más de 10-15 páginas o una estructura de navegación compleja.
5.  **Backend Features**: Necesitas API Routes, autenticación simple, o middleware.

## Cuándo usar Vite (React SPA)
Elige Vite **SOLO** si se cumplen **TODAS** o la mayoría de estas condiciones:
1.  **Landing Page / Microsite**: El proyecto es una sola página o muy pocas (< 5), totalmente estática.
2.  **Máxima Libertad Frontend**: Quieres control total sobre el entry point, sin el "opinionated" router de Next.js (ej: experimentos WebGL puros).
3.  **Hosting Restrictivo**: El cliente *exige* un hosting que solo soporta archivos estáticos `.html`/`.js` sin Node.js (aunque `next export` existe, Vite es más nativo para esto).
4.  **Velocidad de Desarrollo**: Prototipos rápidos donde el SEO no importa nada (ej: herramientas internas, dashboards detrás de login).

## Resumen de Decisión

| Característica | Next.js | Vite |
| :--- | :--- | :--- |
| **Tipo de Web** | Corporativa, Blog, SaaS, E-commerce | Landing, App Interna, Portfolio 3D |
| **SEO** | Nativo (SSR/SSG) | Requiere config extra (Helmet/Prerender) |
| **Routing** | File-system based (App Router) | React Router (Manual) |
| **Deploy** | Vercel (1-click) | Cualquier static host |
| **Curva de Inicio** | Media (Framework) | Baja (Librería) |

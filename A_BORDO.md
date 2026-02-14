# 🚢 A_BORDO.md - Manual de Operaciones

Bienvenido a la Plantilla Madre. Este documento es la verdad absoluta para operar en este repositorio.

## ⚡ Comandos Rápidos

| Comando | Acción |
| :--- | :--- |
| `npm run dev` | Arranca todo el entorno (Next.js + Vite + Shared). |
| `npm run build` | Construye todas las workspaces. |
| `npm run check:content` | **OBLIGATORIO**. Verifica que no hay "Lorem Ipsum" ni content placeholders. |
| `npm run stack:select` | Ejecuta el recomendador de Stack basado en `PROJECT_BRIEF.md`. |

## 🛠 Workflows

### 1. Nuevo Proyecto
1.  Rellena `PROJECT_BRIEF.md` en la raíz.
2.  Ejecuta `node scripts/select-stack.mjs` para decidir tecnología.
3.  (Futuro) Ejecutar `npm run new` para scaffold.

### 2. Desarrollo Diario
- Trabajamos en `starters/next` por defecto.
- Componentes reutilizables van a `shared/`.
- **Regla de Oro**: Si es genérico, extráelo a `shared`.

### 3. Calidad y Checks
- El script `check-content.mjs` es tu "policía de contenido".
- No commitees código con `PENDING` o `DRAFT` si es para producción.

## 📂 Estructura
- `/starters`: Aplicaciones base (Next.js, Vite).
- `/shared`: UI Kit, Utils, Constantes.
- `/docs`: Documentación viva.
- `/scripts`: Automatización.

---
*Mantén este barco limpio.*

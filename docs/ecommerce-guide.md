# Guía de Activación E-commerce (M4b)

Este proyecto viene preparado con módulos de E-commerce "dormidos". Sigue estos pasos para activar la venta online.

## 1. Prerrequisitos
El brief del proyecto debe tener marcada la opción **E-commerce**.

## 2. Instalación de Dependencias
Ejecuta en `shared` o en el starter correspondiente:
```bash
npm install @stripe/stripe-js zustand
```

## 3. Configuración de Variables
Añade a `.env.local`:
```bash
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
```

## 4. Componentes Disponibles
Los siguientes componentes ya están en `shared/ui/ecommerce` y listos para importar:

### `ProductCard`
Tarjeta de producto premade con soporte para imágenes optimizadas y estados de loading.
```tsx
import { ProductCard } from "@plantilla/shared";

<ProductCard 
  title="Camiseta Premium" 
  price={29.99} 
  image="/img/product.jpg" 
  onAddToCart={() => addToCart(product)}
/>
```

### `CartDrawer` (Shell)
Panel lateral para el carrito. Necesita integración con el estado global (Zustand/Context).

---

## 5. Checklist de Lanzamiento Tienda
- [ ] Configurar cuenta de Stripe
- [ ] Definir productos en Stripe Dashboard ó CMS
- [ ] Crear página `/shop`
- [ ] Activar Webhooks para confirmar pagos

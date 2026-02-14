# M4b: E-commerce (Opt-in)

## OBJETIVO (OBJ)
Proveer la capacidad de convertir la web en una tienda online SIN cargar el peso del e-commerce a los usuarios que no lo necesitan (feature flag/módulo opcional).

## ALCANCE (ALC)
- Diseño de arquitectura de e-commerce.
- Integración básica (Stripe/PayPal o Shopify Buy Button).
- Guía de "Activación".

## PASOS
1.  **Arquitectura Modular**:
    - Los componentes de e-commerce (ProductCard, CartDrawer, Checkout) deben vivir en una carpeta aislada o paquete separado.
    - No importar en el bundle principal si `ECOMMERCE_ENABLED = false`.
2.  **Integraciones**:
    - Definir proveedor por defecto: Stripe Checkout (el más simple).
    - Opción "Light": Botones de pago simples.
    - Opción "Full": Carrito de compras con estado global (Zustand/Context).
3.  **Guía de Activación**:
    - Documentar cómo encender el módulo:
        1. Configurar variables de entorno (STRIPE_KEYS).
        2. Habilitar rutas `/shop`, `/product/:slug`.
        3. Descomentar imports en el layout.

## CRITERIOS DE ACEPTACIÓN (AC)
- [ ] El starter NO incluye peso de e-commerce por defecto.
- [ ] Guía paso a paso para activar una tienda demo.
- [ ] Flujo de compra (mock o test mode) funcional cuando se activa.

## EJECUCIÓN (EJ)
Feature flag en `project.config.ts`:
```typescript
export const FEATURES = {
  ecommerce: false, // Cambiar a true para activar
};
```

## RIESGOS
- Seguridad en manejo de pagos (PCI compliance se delega a Stripe/Provider).
- Complejidad en manejo de estado del carrito entre páginas.

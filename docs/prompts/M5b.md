# M5b: Legal / GDPR (España/Europa)

## OBJETIVO (OBJ)
Cumplir con la normativa de protección de datos (RGPD/LSSI) sin llenar la web de popups intrusivos inútiles, usando un enfoque "Compliance by Design".

## ALCANCE (ALC)
- Plantillas de textos legales (Aviso Legal, Privacidad, Cookies).
- Banner de cookies funcional (Bloqueo preventivo).
- Checkboxes de consentimiento en formularios.

## PASOS
1.  **Plantillas Legales**:
    - Crear `docs/legal-templates/` con textos base para España (genericos, CON ADVERTENCIA DE REVISAR CON ABOGADO).
    - Páginas: `/legal`, `/privacidad`, `/cookies`.
2.  **Cookie Consent**:
    - Implementar banner simple y accesible (no intrusivo).
    - Lógica: NO cargar scripts de tracking (Analytics, Pixel) hasta que se acepte.
    - Botones: "Aceptar todas", "Rechazar", "Configurar".
3.  **Formularios**:
    - Añadir checkbox obligatorio (sin marcar por defecto): "He leído y acepto la política de privacidad".
    - Guardar el `consent reference` (fecha/ip/check) en la base de datos o email si es posible (trazabilidad).

## CRITERIOS DE ACEPTACIÓN (AC)
- [ ] Google Analytics NO dispara cookies antes del consentimiento.
- [ ] Páginas legales accesibles desde el footer.
- [ ] Formularios no se envían sin aceptar privacidad.

## EJECUCIÓN (EJ)
Hook `useCookieConsent()` que envuelve la inicialización de GTM/GA4.

## RIESGOS
- Falsa sensación de seguridad legal (los textos deben ser personalizados).
- Pérdida de datos analíticos (muchos usuarios rechazan cookies).

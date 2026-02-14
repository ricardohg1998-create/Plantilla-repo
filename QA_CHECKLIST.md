# ✅ QA Checklist

Utiliza esta lista antes de entregar el proyecto al cliente.

## 🎨 Design QA
- [ ] **Fuentes**: ¿Se están cargando las fuentes correctas? (No Times New Roman/Arial).
- [ ] **Mobile**: ¿El menú hamburguesa funciona bien con scroll lock?
- [ ] **Imágenes**: ¿Tienen todas `alt` text? ¿Se ven bien en pantallas retina?
- [ ] **Dark Mode**: ¿Los textos son legibles en modo oscuro? (Contraste).
- [ ] **Favicon**: ¿Se ha actualizado el favicon por defecto?

## ✍️ Content QA
- [ ] **Placeholders**: Ejecuta `npm run check:content`. **CERO ERRORES PERMITIDOS**.
- [ ] **Contacto**: ¿El email y teléfono son reales?
- [ ] **Legal**: ¿La página de Privacidad existe y es accesible?
- [ ] **Links**: ¿Funcionan todos los enlaces del Footer?

## ⚙️ Tech QA
- [ ] **Build**: Ejecuta `npm run build`. ¿Pasa sin errores?
- [ ] **SEO**: ¿Aparece la meta descripción en `view-source`?
- [ ] **A11y**: ¿Funciona el botón "Skip to Content" con tabulador?
- [ ] **Console**: ¿Hay errores rojos en la consola del navegador?

## 🚀 Launch
- [ ] **Analytics**: ¿Está configurado el ID de GA4/GTM?
- [ ] **Robots.txt**: ¿Está permitiendo el indexado (o bloqueando en staging)?

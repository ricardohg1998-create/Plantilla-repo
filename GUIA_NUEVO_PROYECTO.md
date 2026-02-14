# 🚀 Manual de Vuelo: Tu Nuevo Proyecto Web

> **Bienvenido, Comandante.**
> Este documento es tu copiloto. Síguelo paso a paso y no podrás fallar. Si te pierdes, vuelve aquí.

---

## 📅 Día 0: Preparando el Terreno
*Antes de escribir una sola línea de código.*

### 1. Clona la Plantilla
No trabajes sobre este repositorio "madre". Crea una copia para tu cliente.

1.  Abre tu terminal (PowerShell o CMD).
2.  Copia y pega este comando (cambia `nombre-del-cliente` por el real):
    ```bash
    git clone https://github.com/tu-usuario/plantilla-repo.git nombre-del-cliente
    ```
3.  Entra en la carpeta:
    ```bash
    cd nombre-del-cliente
    ```

### 2. Borra el Rastro (Importante)
Queremos que este sea un *nuevo* proyecto de Git, no una continuación de la plantilla.

1.  Ejecuta esto para borrar el historial antiguo:
    ```bash
    # En Windows (PowerShell)
    Remove-Item .git -Recurse -Force
    ```
2.  Inicia un nuevo historial limpio:
    ```bash
    git init
    ```
    > 💡 **¿Por qué?** Así tu cliente no verá todo el historial de desarrollo de la plantilla, solo SU proyecto.

### 3. Instala el Motor
Descarga todas las herramientas necesarias.
```bash
npm install
```
*(Esto puede tardar unos minutos. Ve a por agua 💧)*

---

## 📅 Día 1: Definiendo la Misión
*El Agente es listo, pero no lee mentes. Dale contexto.*

### 1. El Briefing (Tu Mapa)
1.  Busca el archivo `PROJECT_BRIEF.md` en la carpeta raíz.
2.  Ábrelo y rellénalo. **No seas tímido.**
    - ¿Qué vende el cliente?
    - ¿Quién es su público? (Abuelas, Skaters, Ejecutivos...).
    - ¿Qué colores le gustan?

### 2. El Oráculo Tecnológico
Pregúntale al sistema qué tecnología es mejor para este caso.
```bash
npm run stack:select
```
- Si te dice **Next.js** (el 99% de las veces) -> Estás listo.
- Si te dice **Vite** -> Es para apps internas o dashboards.

---

## 📅 Días 2-N: Construyendo con el Agente
*Aquí ocurre la magia. Tú diriges, la IA construye.*

### 1. Arranca los Motores
Enciende el servidor de desarrollo para ver lo que haces.
```bash
npm run dev
```
Abre `http://localhost:3000` en tu navegador.

### 2. Prompts Maestros (Copia y Pega)
Usa estos textos para pedirle cosas al Agente (Antigravity):

**🎨 Para empezar el diseño:**
> "He rellenado el PROJECT_BRIEF.md. Por favor, lee ese archivo y configura el tema visual en `globals.css` (colores, fuentes). Luego, crea una **Landing Page** impactante en `page.tsx` usando los componentes de `shared/ui` como el `HeroEditorial` y `BentoGrid`."

**📝 Para crear contenido:**
> "Genera los textos de la página 'Sobre Nosotros'. El tono debe ser cercano y profesional. No uses Lorem Ipsum. Basa el contenido en lo que puse en el Briefing."

**🧩 Para añadir secciones:**
> "Necesito una sección de **Testimonios** debajo del Hero. Usa un diseño de carrusel o grid asimétrico. Que parezca premium."

---

## 📅 Día de Entrega: El Control de Calidad
*No entregues basura. Pasa el escáner.*

### 1. La Policía del Contenido
Asegúrate de que no se te ha colado ningún texto de relleno ("Lorem Ipsum").
```bash
npm run check:content
```
- ¿Sale **Verde** ✅? -> Todo limpio.
- ¿Sale **Rojo** ❌? -> El script te dirá dónde está el error. Corrígelo.

### 2. El Examen Final
Construye la versión final de la web para ver si rompe.
```bash
npm run build
```
- Si termina con "Compiled successfully", felicidades. La web es sólida como una roca.

### 3. Checklist Manual
Abre el archivo `QA_CHECKLIST.md` y marca las casillas una a una.
- ¿Funcionan los formularios?
- ¿Se ve bien en el móvil?
- ¿Has puesto el Favicon del cliente?

---
**¡Misión Cumplida! 🚀**
Guarda, sube a Vercel/Netlify, y cobra la factura.

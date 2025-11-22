# Guía: Cómo publicar tu sitio web en GitHub Pages

Tu repositorio incluye una página web completa en la carpeta `web/`. Para que el mundo pueda verla online, utilizaremos **GitHub Pages**.

## ⚠️ Importante: La carpeta "web" vs "docs"

Por defecto, GitHub Pages solo permite publicar desde dos lugares:
1. La carpeta raíz (`/`)
2. La carpeta `/docs`

Como nosotros creamos la carpeta `/web`, la forma más fácil de activarlo es **renombrar** la carpeta `web` a `docs`.

---

## 🚀 Pasos para activar el sitio

### Paso 1: Renombrar la carpeta (Recomendado)
1. En tu ordenador, cambia el nombre de la carpeta `web` a `docs`.
2. Sube este cambio a GitHub:
   ```bash
   git add .
   git commit -m "Renombrar web a docs para GitHub Pages"
   git push
   ```

### Paso 2: Configurar GitHub
1. Ve a tu repositorio en GitHub: [https://github.com/veryimportantpers0n/whoop](https://github.com/veryimportantpers0n/whoop)
2. Haz clic en la pestaña **Settings** (Configuración).
3. En el menú de la izquierda, busca y haz clic en **Pages**.
4. En la sección **Build and deployment**:
   - **Source**: Déjalo en `Deploy from a branch`.
   - **Branch**: Selecciona `main`.
   - **Folder**: Selecciona `/docs` (solo aparecerá si hiciste el Paso 1).
5. Haz clic en **Save**.

### Paso 3: ¡Listo!
GitHub tardará unos minutos. Refresca la página y verás un enlace en la parte superior (algo como `https://veryimportantpers0n.github.io/whoop/`).

¡Ese es el enlace de tu nueva web!

---

## 🔧 Opción Avanzada (Sin renombrar)
Si prefieres mantener la carpeta `web`, debes usar "GitHub Actions":
1. En **Settings > Pages**, cambia **Source** a `GitHub Actions`.
2. Configura un "Static HTML workflow" y ajusta la ruta a `./web`.
*Esta opción es más compleja, por lo que recomiendo el método de la carpeta `docs`.*

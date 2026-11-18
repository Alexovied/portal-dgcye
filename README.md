# Portal de Normativas DGCyE (prototipo)

Buscador de resoluciones, disposiciones y circulares para escuelas técnicas de la Provincia de Buenos Aires.
Proyecto de Implementación de Sitios Web Dinámicos, 7° 2° Grupo B, EEST N.º 1 "Eduardo Ader". Integrante: Oviedo, Alex.

**Sitio publicado:** https://alexovied.github.io/portal-dgcye/

![QR al sitio publicado](docs/qr-portal-dgcye.png)

## Qué hace

- Filtrado en tiempo real, en memoria (`.filter()` + `.includes()`), por texto, tipo y año. No distingue tildes ni mayúsculas.
- Asistente IA con Hugging Face: el modelo `Xenova/paraphrase-multilingual-MiniLM-L12-v2` corre en el navegador con Transformers.js y responde preguntas en lenguaje natural con la normativa más relacionada.
- Diseño adaptable a celular y escritorio.

Los datos son **simulados**, para pruebas: no son normativas oficiales.

## Estructura

```
index.html        Prototipo completo (HTML + CSS + JS)
js/datos.js       Modelo de datos de la Actividad 18
docs/             SRS, informes, mockup, capturas y QR
```

## Despliegue

GitHub Pages desde la rama `main`: cada `git push` publica la nueva versión con HTTPS.

Para probarlo localmente, abrí `index.html` en el navegador. El asistente IA necesita internet la primera vez para bajar el modelo.

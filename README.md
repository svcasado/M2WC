# Misión M2

M2 · Async Odyssey

## Cómo probarlo

Abre `http://localhost:5173` y busca una serie (por ejemplo, `office`).

- **Sin resultados:** busca `zzzz`.
- **Error de red:** DevTools → Network → Offline y vuelve a buscar.

## Estructura

```
src/
├── main.js # eventos: conecta api → datos → ui
├── api.js # fetch a TVMaze y control de errores (response.ok)
├── datos.js # transformación: map, flatMap, reduce, toSorted
├── ui.js # render en el DOM
└── style.css
```

## Uso de IA

Usé Claude Code (modelo Claude Opus 5.5) fase a fase. Claude me ayudó mucho en la parte de estilos, me ayudó bastante con la estructura inicial. Lo he usado para entender lo que iba haciendo mal y ejemplos prácticos. Lo he usado al final de cada fase para comprobar lo que iba haciendo. También lo usé como corrector antes de entregar.

Algún prompt que he usado: "¿Puedes hacer una corrección siguiendo las métricas del documento para que me pueda hacer una idea de qué puedo haber pasado por alto?".

## Autopsia

1. **`fetch` no falla con un 404.** Sin comprobar `response.ok`, un error del servidor pasaba por respuesta válida. Ahora `api.js` lanza un `Error` y `main.js` lo muestra.

2. **Datos incompletos.** Muchas series llegan sin imagen o sin nota y `show.image.medium` rompía la app. Se resolvió en `datos.js` con `?.` y `??`.

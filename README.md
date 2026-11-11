# Tierra Bomba · Tesis de grado, tercer corte

Presentación en 3D de la tesis *Planificación y adaptación territorial frente a la pérdida de suelo costero en Tierra Bomba* (Alejandra Gómez · Ana Casas, Arquitectura y Urbanismo, 2026).

Sitio: https://alejagoguti-cpu.github.io/tesis_tercer_corte/

## Qué cuenta

1. **El problema**: la formulación de la tesis.
2. **Si no se frena la erosión**: la costa retrocede 1,8 m/año (tasa máxima registrada en el proyecto) a 10, 20 y 30 años. Se ve la tierra que se pierde, las viviendas que desaparecen y cómo quedaría la isla.
3. **Las vías**: toda la red vial cartografiada en OpenStreetMap, en 3D sobre el relieve.
4. **Sintaxis espacial**: integración y elección angular de las redes peatonal y de motos, acceso a los muelles, y el cruce de esas redes con la erosión.

## Cómo se hizo la sintaxis espacial

`codigo/scripts/space_syntax.mjs` es una reimplementación en JavaScript del análisis angular de segmentos (Tulip) de [depthmapX](https://github.com/SpaceGroupUCL/depthmapX) (UCL Space Group, GPL-3.0), escrita a partir de `salalib/segmmodules/segmtulip.cpp`.
**No se ejecutó la aplicación depthmapX** y los valores no se compararon con su salida.

- Costo angular con 1024 contenedores de Tulip (90° = 1 unidad) y radios métricos de 400 m, 1,2 km y toda la isla.
- NAIN = NC^1,2 / (TD + 2) y NACH = log(Elección + 1) / log(TD + 3) (Hillier et al., 2012).
- Red peatonal: todas las vías OSM. Red de motos: `residential`, `unclassified`, `service` y `track` (suposición de trabajo, sin verificar en campo).
- Lanchas: no hay una red de lanchas con datos reales. Las dos rutas del archivo son esquemáticas y solo se dibujan. Lo analizado es el acceso de la red peatonal a los muelles mapeados en OSM.

Para recalcular: `cd codigo && npm install && npm run sintaxis` (escribe `public/datos/sintaxis.json`).

## Archivos

- `index.html`, `app/`, `datos/`, `assets/`: el sitio publicado.
- `codigo/`: código fuente (React, Three.js, Tailwind, Vite) y los datos de entrada de la sintaxis.
- `especies.html`: la versión anterior de este repositorio (red de especies de la isla), conservada tal cual.

---

## Versión anterior: Especies de Tierra Bomba
# Especies de Tierra Bomba

Red de especies de la isla de Tierra Bomba (Cartagena) con su materialización sobre el modelo 3D de la isla.

Sitio: https://anasoficasca-code.github.io/tierrabomba/

Abrir directamente en el territorio: https://anasoficasca-code.github.io/tierrabomba/?territorio

# Tierra Bomba · Tesis de grado, tercer corte

Presentación en 3D de la tesis *Planificación y adaptación territorial frente a la pérdida de suelo costero en Tierra Bomba* (Alejandra Gómez · Ana Casas, Arquitectura y Urbanismo, 2026).

Sitio: https://alejagoguti-cpu.github.io/tesis_tercer_corte/

Versión nueva con otro diseño (negro, Inter, acento verde azulado, paneles redondeados): https://alejagoguti-cpu.github.io/tesis_tercer_corte/nuevo/ (código en `nuevo/codigo/`).

## Qué cuenta

1. **El problema**: la formulación de la tesis y una red de relaciones que se revela con cada clic.
2. **Lo social**: percepciones y datos locales en diagramas (encuesta a 238 habitantes, convivencia, escuela y conexiones). Las cifras vienen de las fuentes citadas en la página.
3. **Si no se frena la erosión**: el borde retrocede 1,8 m/año (tasa máxima registrada en el proyecto) y la tierra baja se inunda con el nivel del agua de Cartagena: marea 0,20 m + sobreelevación de tormenta 0,20 m + ascenso del nivel del mar RCP 4.5 (+0,24 m a 2050 desde 2025, interpolado) + subsidencia de 1,78 mm/año, es decir +0,47 m a 10 años, +0,54 m a 20 y +0,61 m a 30 (Orejarena-Rondón, Sayol et al., 2019, Frontiers in Marine Science 6:614). Esos valores son de Cartagena y se aplican a la isla; el relieve (Terrarium, ~30 m) tiene varios metros de error vertical, así que la inundación es indicativa. La silueta de la isla sale de la línea de costa de OpenStreetMap (codigo/scripts/mascara_isla.mjs). Escenarios: marea de leva (agrega oleaje: trepada del 2 % de 1,3 m con olas de 2,3 m y 9 s, pendiente de playa de 8 % supuesta, fórmula de Stockdon et al. 2006), marea y tormenta, nivel manual (de 0,5 a 8 m) y solo retroceso.
4. **Las vías**: toda la red vial cartografiada en OpenStreetMap, en 3D sobre el relieve.
5. **Sintaxis espacial**: integración y elección angular de las redes peatonal y de motos, acceso a los muelles con Cartagena como contexto, y el cruce de esas redes con la erosión.
6. **Plan maestro en 3D**: meseta segura a +22 m (polígono de la tesis), traslado animado de 120 viviendas desde la franja que se pierde, vivienda progresiva, colegio con cubierta captadora y aljibe de 450.000 L, vías y corredores ecológicos, y un parque ecológico en el borde. Sigue un esquema básico en planta y los criterios de diseño. La geometría y las cifras vienen de la tesis (`codigo/src/lib/plan.js`); **la ubicación y el tamaño del parque y del humedal son propuesta de esta presentación y su efecto sobre la erosión no se midió**. No hay árboles dibujados en el plan: solo zonas.
7. **Lo que sigue**: resultados calculados y límites.

En los capítulos 3, 4, 5 y 6 el mapa se puede explorar: botón «Explorar el mapa» (arrastrar para girar, Mayús o clic derecho para mover, rueda o pellizco para acercar), botones +/− y restablecer.

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


## Red de actores de Bavaria Común

Visor interactivo (fondo negro) de la red de actores exportada desde Gephi: https://alejagoguti-cpu.github.io/tesis_tercer_corte/red/ . 57 actores y 120 relaciones. El archivo .gephi guarda el grafo en binario; ed/fuente/leer.mjs lo lee y escribe ed.json, y plantilla.html es la página (d3-force sobre canvas) que se rellena con esos datos. La dirección de cada relación es fuente → destino tal como está en el archivo; los nombres de las redes (OG, OE1–OE3) y de los tipos de relación son descriptivos, deducidos de los códigos y de los actores.

import * as THREE from 'three';
import { Sky } from 'three/examples/jsm/objects/Sky.js';
import { LineSegments2 } from 'three/examples/jsm/lines/LineSegments2.js';
import { LineSegmentsGeometry } from 'three/examples/jsm/lines/LineSegmentsGeometry.js';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';
import { BASE, prepararEspecies, instanciarArboles } from './arboles.js';
import { rampa, percentil } from './paleta.js';
import { MESETA, ESCUELA, VIVIENDAS, PARQUE, HUMEDAL, VIAS, CORREDORES, PROGRAMA, PARQUE_RADIOS, HUMEDAL_RADIOS } from './plan.js';

// =============================================================================
// Escena 3D única de la presentación (Tierra Bomba).
//  - foto satelital z15 + relieve Terrarium + silueta oficial de la isla
//  - erosión: retroceso uniforme de la costa a la tasa máxima registrada (1,8 m/año), calculado con
//    transformada de distancia sobre la silueta; el avance se dibuja en un shader (continuo, sin recalcular texturas)
//  - 2.600 construcciones del archivo de tesis (alturas de referencia, no medidas)
//  - árboles reales (copas detectadas en la foto + modelos escaneados)
//  - vías OSM en 3D coloreadas con los resultados de sintaxis espacial (sintaxis.json)
// =============================================================================

export const TASA = 1.8; // m/año: retroceso del borde (tasa máxima registrada en el proyecto)

// Nivel del agua que alcanza la tierra baja en cada horizonte (años desde hoy), con valores medidos para Cartagena:
//  - marea astronómica de sicigia 0,20 m y sobreelevación de tormenta de 10 años de retorno 0,20 m;
//  - ascenso del nivel del mar RCP 4.5: +0,11 m (2025), +0,24 (2050), +0,38 (2075), +0,52 (2100), contado desde 2025;
//  - subsidencia del terreno de 1,78 mm/año (estación geodésica de Cartagena).
// Fuente: Orejarena-Rondón, Sayol et al. (2019), Frontiers in Marine Science 6:614 (barra de Bocagrande, Cartagena);
// subsidencia: Andrade-Amaya et al. (2017) citado allí. Se aplican a Tierra Bomba por cercanía: no son mediciones de la isla.
export const MAREA_M = 0.2;
export const TORMENTA_M = 0.2;
export const SUBSIDENCIA_M_ANIO = 0.00178;
const SLR_RCP45 = [[0, 0], [25, 0.13], [50, 0.27], [75, 0.41]]; // [años desde 2025, ascenso en m desde 2025]
const slrDelta = (t) => {
  for (let i = 0; i < SLR_RCP45.length - 1; i++) {
    const [t0, v0] = SLR_RCP45[i];
    const [t1, v1] = SLR_RCP45[i + 1];
    if (t <= t1) return v0 + ((v1 - v0) * (t - t0)) / (t1 - t0);
  }
  const [t0, v0] = SLR_RCP45[SLR_RCP45.length - 2];
  const [t1, v1] = SLR_RCP45[SLR_RCP45.length - 1];
  return v1 + ((v1 - v0) * (t - t1)) / (t1 - t0);
};
export const nivelAgua = (t) => MAREA_M + TORMENTA_M + slrDelta(t) + SUBSIDENCIA_M_ANIO * t;

// Marea de leva: oleaje de fondo que trepa por la costa. Ascenso máximo del agua (run-up con 2 % de excedencia)
// con la fórmula empírica de Stockdon et al. (2006), para el temporal de referencia del mismo estudio de Cartagena
// (olas de 2,3 m y 9 s, 8 nov 2010). La pendiente de la playa NO está medida en Tierra Bomba: es un supuesto (8 %).
export const OLEAJE = { hs: 2.3, tp: 9, pendiente: 0.08 };
const calcularRunup = ({ hs, tp, pendiente }) => {
  const L0 = (9.81 * tp * tp) / (2 * Math.PI);
  const setup = 0.35 * pendiente * Math.sqrt(hs * L0);
  const swash = Math.sqrt(hs * L0 * (0.563 * pendiente * pendiente + 0.004));
  return 1.1 * (setup + swash / 2);
};
export const RUNUP_M = calcularRunup(OLEAJE);
/** nivel del agua (m sobre el nivel medio) en el horizonte t para cada escenario: 'tormenta' o 'leva' (con oleaje) */
export const nivelModelo = (t, modelo) => nivelAgua(t) + (modelo === 'leva' ? RUNUP_M : 0);

// inversa tabulada: año en que el nivel del agua alcanza una elevación dada
const TAB_PASO = 0.25;
const TAB_N = 241; // 0..60 años
const TABS = {
  tormenta: Float32Array.from({ length: TAB_N }, (_, i) => nivelModelo(i * TAB_PASO, 'tormenta')),
  leva: Float32Array.from({ length: TAB_N }, (_, i) => nivelModelo(i * TAB_PASO, 'leva')),
};
const anioDeNivel = (L, TAB) => {
  if (L <= TAB[0]) return 0;
  if (L > TAB[TAB_N - 1]) return 999;
  let lo = 0;
  let hi = TAB_N - 1;
  while (hi - lo > 1) { const m = (lo + hi) >> 1; if (TAB[m] >= L) hi = m; else lo = m; }
  return (lo + (L - TAB[lo]) / (TAB[hi] - TAB[lo])) * TAB_PASO;
};
const MOSAICO = { x0: 9502, y0: 15426, nx: 10, ny: 17 };
const VENTANA = { left: 231, top: 1734, w: 1445, h: 2578 };
const EXAG = 2.6;
const DEM = { z: 12, x0: 1187, y0: 1929 };
const CASA_ESCALA = 2.6;

const loadImg = (src) =>
  new Promise((res, rej) => {
    const im = new Image();
    im.onload = () => res(im);
    im.onerror = () => rej(new Error(`No se pudo cargar ${src}`));
    im.src = src;
  });
const smooth = (a, b, x) => {
  const t = Math.max(0, Math.min(1, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
};
const clamp01 = (x) => Math.max(0, Math.min(1, x));
const DT_MAX = Number(new URLSearchParams(window.location.search).get('dt')) || 0.05; // ?dt=0.4 acelera el reloj en equipos lentos (pruebas)

// Transformada de distancia euclidiana (Felzenszwalb): distancia² al píxel de mar más cercano
function edt(width, height, land) {
  const INF = 1e12;
  const f = new Float32Array(width * height);
  for (let i = 0; i < f.length; i++) f[i] = land[i] ? INF : 0;
  const n = Math.max(width, height);
  const d = new Float32Array(n);
  const v = new Int32Array(n);
  const z = new Float32Array(n + 1);
  const line = new Float32Array(n);
  const pass = (len, get, set) => {
    for (let i = 0; i < len; i++) line[i] = get(i);
    let k = 0;
    v[0] = 0;
    z[0] = -INF;
    z[1] = INF;
    for (let q = 1; q < len; q++) {
      let s = (line[q] + q * q - (line[v[k]] + v[k] * v[k])) / (2 * q - 2 * v[k]);
      while (s <= z[k]) {
        k--;
        s = (line[q] + q * q - (line[v[k]] + v[k] * v[k])) / (2 * q - 2 * v[k]);
      }
      k++;
      v[k] = q;
      z[k] = s;
      z[k + 1] = INF;
    }
    k = 0;
    for (let q = 0; q < len; q++) {
      while (z[k + 1] < q) k++;
      d[q] = (q - v[k]) * (q - v[k]) + line[v[k]];
    }
    for (let i = 0; i < len; i++) set(i, d[i]);
  };
  for (let x = 0; x < width; x++) pass(height, (y) => f[y * width + x], (y, val) => { f[y * width + x] = val; });
  for (let y = 0; y < height; y++) pass(width, (x) => f[y * width + x], (x, val) => { f[y * width + x] = val; });
  return f;
}

// Shader: la tierra que se pierde (rojo por tramos de década), frente de erosión y "cómo quedaría"
function parchearTerreno(mat, U) {
  mat.onBeforeCompile = (sh) => {
    sh.uniforms.uLost = U.uLost;
    sh.uniforms.uYear = U.uYear;
    sh.uniforms.uMode = U.uMode;
    sh.uniforms.uDim = U.uDim;
    sh.uniforms.uPlan = U.uPlan;
    sh.uniforms.uPlanAmt = U.uPlanAmt;
    sh.uniforms.uFranja = U.uFranja;
    sh.uniforms.uTime = U.uTime;
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nattribute vec2 aWin;\nvarying vec2 vWin;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvWin = aWin;');
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', '#include <common>\nuniform sampler2D uLost;\nuniform float uYear;\nuniform float uMode;\nuniform float uDim;\nuniform sampler2D uPlan;\nuniform vec3 uPlanAmt;\nuniform float uFranja;\nuniform float uTime;\nvarying vec2 vWin;')
      .replace(
        '#include <map_fragment>',
        `#include <map_fragment>
        vec4 lt = texture2D(uLost, vWin);
        float lostAt = lt.r * 63.75;
        if (lt.g < 0.5) discard;
        bool gone = uYear > 0.001 && lostAt <= uYear;
        if (gone && uMode > 0.5) discard;
        diffuseColor.rgb *= mix(1.0, 0.30, uDim);
        if (gone) {
          vec3 band = lostAt <= 10.0 ? vec3(0.60, 0.09, 0.09) : (lostAt <= 20.0 ? vec3(0.86, 0.15, 0.15) : vec3(0.98, 0.45, 0.42));
          diffuseColor.rgb = mix(diffuseColor.rgb, band, 0.84);
        }
        float front = smoothstep(0.8, 0.0, abs(lostAt - uYear)) * step(0.001, uYear) * (1.0 - uMode);
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(1.0, 0.66, 0.34), front * 0.9);
        // plan maestro: la franja que se pierde pasa de rojo a parque; meseta segura, parque central y humedal
        if (uFranja > 0.001 && uYear > 0.001 && lostAt <= 30.0) {
          float raya = step(0.5, fract((vWin.x * 1.0 + vWin.y * 1.7) * 1100.0));
          vec3 verde = mix(vec3(0.13, 0.50, 0.28), vec3(0.22, 0.66, 0.38), raya);
          diffuseColor.rgb = mix(diffuseColor.rgb, verde, 0.88 * uFranja);
        }
        vec3 pz = texture2D(uPlan, vWin).rgb;
        float pulso = 0.5 + 0.5 * sin(uTime * 2.2);
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.05, 0.62, 0.56), 0.42 * pz.r * uPlanAmt.x);
        diffuseColor.rgb += vec3(0.15, 0.95, 0.80) * (1.0 - smoothstep(0.0, 0.16, abs(pz.r - 0.5))) * uPlanAmt.x * (0.35 + 0.35 * pulso);
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.16, 0.58, 0.30), 0.62 * pz.g * uPlanAmt.y);
        diffuseColor.rgb += vec3(0.30, 0.95, 0.45) * (1.0 - smoothstep(0.0, 0.16, abs(pz.g - 0.5))) * uPlanAmt.y * 0.4;
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.20, 0.62, 0.78), 0.66 * pz.b * uPlanAmt.z);`
      );
  };
  mat.customProgramCacheKey = () => 'erosion-v1';
}

const COLOR_TIPO = {
  residential: '#f4f1ec', unclassified: '#f4f1ec', service: '#9fd3e0', track: '#9fd3e0',
  path: '#e0917a', footway: '#e0917a', steps: '#e0917a', pedestrian: '#e0917a',
};
export const GRUPOS_TIPO = [
  { id: 'calles', nombre: 'Calles y caminos', color: '#f4f1ec', tipos: ['residential', 'unclassified'] },
  { id: 'servicio', nombre: 'Servicio y trochas', color: '#9fd3e0', tipos: ['service', 'track'] },
  { id: 'senderos', nombre: 'Senderos y peatonales', color: '#e0917a', tipos: ['path', 'footway', 'steps', 'pedestrian'] },
];

export async function crearEscena(mount, { onProgreso = () => {} } = {}) {
  const small = window.innerWidth < 768;

  // ---------- renderer ----------
  const renderer = new THREE.WebGLRenderer({ antialias: !small, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, small ? 1.5 : 1.75));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;
  const el = renderer.domElement;
  el.style.cssText = 'display:block;width:100%;height:100%;opacity:0;transition:opacity 1.4s ease';
  mount.appendChild(el);

  const cleanups = [() => { renderer.dispose(); if (el.parentNode === mount) mount.removeChild(el); }];
  let disposed = false;

  // ---------- carga de datos ----------
  const TOTAL = 14;
  let hechas = 0;
  const track = (p) => p.then((r) => { hechas++; onProgreso(0.6 * (hechas / TOTAL), 'Descargando la isla'); return r; });
  const jsonOf = (u) => fetch(u).then((r) => { if (!r.ok) throw new Error(u); return r.json(); });
  const gunzipJSON = async (u) => {
    const buf = await (await fetch(u)).arrayBuffer();
    const u8 = new Uint8Array(buf);
    if (u8[0] === 0x1f && u8[1] === 0x8b) {
      const stream = new Response(buf).body.pipeThrough(new DecompressionStream('gzip'));
      return JSON.parse(await new Response(stream).text());
    }
    return JSON.parse(new TextDecoder().decode(u8));
  };

  const [satImg, maskImg, patchImg, geoRef, veg, construcciones, sintaxis, normalsImg, cartagenaMascaraImg, ...demImgs] = await Promise.all([
    track(loadImg(`${BASE}assets/texturas/sat_base.jpg`)),
    track(loadImg(`${BASE}datos/isla_mascara_osm.png`)),
    track(loadImg(`${BASE}assets/texturas/tierrabomba_satelite.jpg`)),
    track(jsonOf(`${BASE}assets/data/georef.json`)),
    track(jsonOf(`${BASE}assets/data/vegetacion.json`)),
    track(gunzipJSON(`${BASE}datos/construcciones_tierra_bomba.json.gz`)),
    track(jsonOf(`${BASE}datos/sintaxis.json`)),
    track(loadImg(`${BASE}datos/water_normals_fine.jpg`)),
    track(loadImg(`${BASE}datos/cartagena_mascara.png`)),
    track(loadImg(`${BASE}datos/elevacion/1187_1929.png`)),
    track(loadImg(`${BASE}datos/elevacion/1188_1929.png`)),
    track(loadImg(`${BASE}datos/elevacion/1187_1930.png`)),
    track(loadImg(`${BASE}datos/elevacion/1188_1930.png`)),
  ]);
  if (disposed) return null;
  const tick0 = () => new Promise((r) => setTimeout(r, 0));

  // ---------- geometría del mosaico ----------
  const tx0 = MOSAICO.x0 + VENTANA.left / 256;
  const tx1 = MOSAICO.x0 + (VENTANA.left + VENTANA.w) / 256;
  const ty0 = MOSAICO.y0 + VENTANA.top / 256;
  const ty1 = MOSAICO.y0 + (VENTANA.top + VENTANA.h) / 256;
  const n15 = 2 ** 15;
  const latOf = (ty) => (Math.atan(Math.sinh(Math.PI * (1 - (2 * ty) / n15))) * 180) / Math.PI;
  const mpt = (40075016.686 * Math.cos((latOf((ty0 + ty1) / 2) * Math.PI) / 180)) / n15; // metros por tesela z15
  const mpp = mpt / 256;
  const txc = (tx0 + tx1) / 2;
  const tyc = (ty0 + ty1) / 2;
  const toXZ = (tx, ty) => [(tx - txc) * mpt, (ty - tyc) * mpt];
  const lonLatToTile = (lon, lat) => [
    ((lon + 180) / 360) * n15,
    ((1 - Math.log(Math.tan((lat * Math.PI) / 180) + 1 / Math.cos((lat * Math.PI) / 180)) / Math.PI) / 2) * n15,
  ];
  const llToXZ = (lon, lat) => { const [tx, ty] = lonLatToTile(lon, lat); return toXZ(tx, ty); };

  // ---------- silueta de la isla y distancia al mar ----------
  onProgreso(0.62, 'Calculando la costa');
  await tick0();
  const W = VENTANA.w;
  const H = VENTANA.h;
  const maskC = document.createElement('canvas');
  maskC.width = W;
  maskC.height = H;
  const mctx = maskC.getContext('2d', { willReadFrequently: true });
  mctx.drawImage(maskImg, 0, 0);
  const mdata = mctx.getImageData(0, 0, W, H).data;
  const land = new Uint8Array(W * H);
  const maskAlpha = new Uint8Array(W * H);
  let landPx = 0;
  for (let i = 0; i < W * H; i++) {
    const val = mdata[i * 4 + 3] < 255 ? mdata[i * 4 + 3] : mdata[i * 4];
    maskAlpha[i] = val;
    if (val > 127) { land[i] = 1; landPx++; }
  }
  const sq = edt(W, H, land);
  const distM = new Float32Array(W * H);
  for (let i = 0; i < distM.length; i++) distM[i] = land[i] ? Math.sqrt(sq[i]) * mpp : 0;
  if (disposed) return null;

  // textura de pérdida: R = año en que la afectación llega (×4, hasta 63,75), G = silueta
  const lostData = new Uint8Array(W * H * 4);
  for (let i = 0; i < W * H; i++) { lostData[i * 4 + 1] = maskAlpha[i]; lostData[i * 4 + 3] = 255; }
  const lostTex = new THREE.DataTexture(lostData, W, H, THREE.RGBAFormat);
  lostTex.minFilter = lostTex.magFilter = THREE.LinearFilter;
  lostTex.generateMipmaps = false;
  const lostY = new Float32Array(W * H); // año de afectación por píxel (se calcula tras cargar el relieve)
  const cumLostPx = new Float64Array(31);
  const ha = (px) => (px * mpp * mpp) / 10000;

  const distAt = (X, Z) => {
    const fx = ((X / mpt + txc - tx0) / (tx1 - tx0)) * W - 0.5;
    const fy = ((Z / mpt + tyc - ty0) / (ty1 - ty0)) * H - 0.5;
    if (fx < 0 || fy < 0 || fx > W - 1.001 || fy > H - 1.001) return -1;
    const x0 = Math.floor(fx);
    const y0 = Math.floor(fy);
    const ax = fx - x0;
    const ay = fy - y0;
    const i = y0 * W + x0;
    return distM[i] * (1 - ax) * (1 - ay) + distM[i + 1] * ax * (1 - ay) + distM[i + W] * (1 - ax) * ay + distM[i + W + 1] * ax * ay;
  };
  const lostAtXZ = (X, Z) => {
    const fx = ((X / mpt + txc - tx0) / (tx1 - tx0)) * W - 0.5;
    const fy = ((Z / mpt + tyc - ty0) / (ty1 - ty0)) * H - 0.5;
    if (fx < 0 || fy < 0 || fx > W - 1.001 || fy > H - 1.001) return Infinity;
    const x0 = Math.floor(fx);
    const y0 = Math.floor(fy);
    const ax = fx - x0;
    const ay = fy - y0;
    const i = y0 * W + x0;
    return lostY[i] * (1 - ax) * (1 - ay) + lostY[i + 1] * ax * (1 - ay) + lostY[i + W] * (1 - ax) * ay + lostY[i + W + 1] * ax * ay;
  };

  // ---------- relieve ----------
  onProgreso(0.7, 'Levantando el relieve');
  await tick0();
  const SM = 4;
  const smallC = document.createElement('canvas');
  smallC.width = Math.round(W / SM);
  smallC.height = Math.round(H / SM);
  const sctx = smallC.getContext('2d', { willReadFrequently: true });
  sctx.filter = 'blur(2px)';
  sctx.drawImage(maskC, 0, 0, smallC.width, smallC.height);
  const sdata = sctx.getImageData(0, 0, smallC.width, smallC.height).data;
  const smallMask = (u, v) => {
    const x = Math.max(0, Math.min(smallC.width - 1, Math.floor(u * smallC.width)));
    const y = Math.max(0, Math.min(smallC.height - 1, Math.floor(v * smallC.height)));
    const i = (y * smallC.width + x) * 4;
    return (sdata[i + 3] < 255 ? sdata[i + 3] : sdata[i]) / 255;
  };
  const demC = document.createElement('canvas');
  demC.width = demC.height = 512;
  const dctx = demC.getContext('2d', { willReadFrequently: true });
  dctx.drawImage(demImgs[0], 0, 0);
  dctx.drawImage(demImgs[1], 256, 0);
  dctx.drawImage(demImgs[2], 0, 256);
  dctx.drawImage(demImgs[3], 256, 256);
  const ddata = dctx.getImageData(0, 0, 512, 512).data;
  const demPx = (x, y) => {
    x = Math.max(0, Math.min(511, x));
    y = Math.max(0, Math.min(511, y));
    const i = (y * 512 + x) * 4;
    return ddata[i] * 256 + ddata[i + 1] + ddata[i + 2] / 256 - 32768;
  };
  const demAtTile = (tx, ty) => {
    const fx = (tx / 8 - DEM.x0) * 256 - 0.5;
    const fy = (ty / 8 - DEM.y0) * 256 - 0.5;
    const x0 = Math.floor(fx);
    const y0 = Math.floor(fy);
    const ax = fx - x0;
    const ay = fy - y0;
    return demPx(x0, y0) * (1 - ax) * (1 - ay) + demPx(x0 + 1, y0) * ax * (1 - ay) + demPx(x0, y0 + 1) * (1 - ax) * ay + demPx(x0 + 1, y0 + 1) * ax * ay;
  };

  // ---------- cota: el agua llega primero a lo más bajo conectado con el mar ----------
  // Inundación por prioridad sobre una rejilla de ~28 m: nivel mínimo que hay que alcanzar para llegar a cada celda.
  // Año de llegada = año en que el nivel del agua (nivelAgua) alcanza ese nivel. Sigue las curvas de nivel reales (relieve Terrarium, ~30 m de resolución).
  const GR = 6;
  const gw = Math.ceil(W / GR);
  const gh = Math.ceil(H / GR);
  const floodYears = new Float32Array(gw * gh);
  const nivelCelda = new Float32Array(gw * gh); // elevación mínima que el agua debe alcanzar para llegar a cada celda
  {
    const elev = new Float32Array(gw * gh);
    const nivel = nivelCelda.fill(Infinity);
    const cap = gw * gh * 5;
    const hk = new Float32Array(cap);
    const hv = new Int32Array(cap);
    let hn = 0;
    const push = (k, v) => {
      let i = hn++;
      while (i > 0) { const p = (i - 1) >> 1; if (hk[p] <= k) break; hk[i] = hk[p]; hv[i] = hv[p]; i = p; }
      hk[i] = k; hv[i] = v;
    };
    let pk = 0;
    let pv2 = 0;
    const pop = () => {
      pk = hk[0]; pv2 = hv[0];
      hn--;
      if (hn > 0) {
        const k = hk[hn]; const v = hv[hn];
        let i = 0;
        for (;;) {
          let c = 2 * i + 1;
          if (c >= hn) break;
          if (c + 1 < hn && hk[c + 1] < hk[c]) c++;
          if (hk[c] >= k) break;
          hk[i] = hk[c]; hv[i] = hv[c]; i = c;
        }
        hk[i] = k; hv[i] = v;
      }
    };
    for (let gy = 0; gy < gh; gy++) {
      for (let gx = 0; gx < gw; gx++) {
        const px = Math.min(W - 1, gx * GR + (GR >> 1));
        const py = Math.min(H - 1, gy * GR + (GR >> 1));
        const c = gy * gw + gx;
        const tx = tx0 + ((px + 0.5) / W) * (tx1 - tx0);
        const ty = ty0 + ((py + 0.5) / H) * (ty1 - ty0);
        elev[c] = Math.max(0, demAtTile(tx, ty));
        if (!land[py * W + px]) { nivel[c] = 0; push(0, c); }
      }
    }
    while (hn > 0) {
      pop();
      const lv = pk; const c = pv2;
      if (lv > nivel[c]) continue;
      const gx = c % gw;
      const gy = (c / gw) | 0;
      const vec = [gx > 0 ? c - 1 : -1, gx < gw - 1 ? c + 1 : -1, gy > 0 ? c - gw : -1, gy < gh - 1 ? c + gw : -1];
      for (const n of vec) {
        if (n < 0) continue;
        const nl = Math.max(lv, elev[n]);
        if (nl < nivel[n]) { nivel[n] = nl; push(nl, n); }
      }
    }
  }
  let floodModelo = '';
  const calcularFlood = (modelo, nivelM = 2) => {
    if (modelo === 'retroceso') return;
    const clave = modelo === 'manual' ? `manual|${nivelM}` : modelo;
    if (clave === floodModelo) return;
    floodModelo = clave;
    if (modelo === 'manual') {
      // escenario manual: el agua está a +nivelM desde el primer año (lo que queda por debajo se inunda de inmediato)
      for (let c = 0; c < gw * gh; c++) floodYears[c] = Number.isFinite(nivelCelda[c]) && nivelCelda[c] <= nivelM ? 0 : 999;
      return;
    }
    const tab = TABS[modelo] || TABS.tormenta;
    for (let c = 0; c < gw * gh; c++) floodYears[c] = Number.isFinite(nivelCelda[c]) ? anioDeNivel(nivelCelda[c], tab) : 999;
  };

  // año de afectación por píxel: lo que ocurra primero entre el retroceso del borde y la cota que sube
  const calcularPerdida = (modelo, nivelM) => {
    calcularFlood(modelo, nivelM);
    const hist = new Float64Array(31);
    for (let py = 0; py < H; py++) {
      const fy = (py + 0.5) / GR - 0.5;
      const gy0 = Math.max(0, Math.min(gh - 2, Math.floor(fy)));
      const ay = Math.max(0, Math.min(1, fy - gy0));
      for (let px = 0; px < W; px++) {
        const i = py * W + px;
        if (!land[i]) { lostY[i] = 0; lostData[i * 4] = 0; continue; }
        let y = distM[i] / TASA;
        if (modelo !== 'retroceso') {
          const fx = (px + 0.5) / GR - 0.5;
          const gx0 = Math.max(0, Math.min(gw - 2, Math.floor(fx)));
          const ax = Math.max(0, Math.min(1, fx - gx0));
          const c = gy0 * gw + gx0;
          const f = floodYears[c] * (1 - ax) * (1 - ay) + floodYears[c + 1] * ax * (1 - ay) + floodYears[c + gw] * (1 - ax) * ay + floodYears[c + gw + 1] * ax * ay;
          if (f < y) y = f;
        }
        lostY[i] = y;
        lostData[i * 4] = Math.min(255, Math.round(y * 4));
        if (y < 30) hist[Math.floor(y) + 1] += 1;
      }
    }
    cumLostPx[0] = 0;
    for (let k = 1; k <= 30; k++) cumLostPx[k] = cumLostPx[k - 1] + hist[k];
    lostTex.needsUpdate = true;
  };
  calcularPerdida('leva');

  const NX = small ? 130 : 180;
  const NY = Math.round((NX * H) / W);
  const pos = new Float32Array((NX + 1) * (NY + 1) * 3);
  const uvSat = new Float32Array((NX + 1) * (NY + 1) * 2);
  const winUV = new Float32Array((NX + 1) * (NY + 1) * 2);
  const heights = new Float32Array((NX + 1) * (NY + 1));
  {
    let p = 0;
    let q = 0;
    for (let j = 0; j <= NY; j++) {
      for (let i = 0; i <= NX; i++) {
        const u = i / NX;
        const v = j / NY;
        const tx = tx0 + u * (tx1 - tx0);
        const ty = ty0 + v * (ty1 - ty0);
        const [X, Z] = toXZ(tx, ty);
        const landW = smooth(0.3, 0.85, smallMask(u, v));
        const h = Math.max(0, demAtTile(tx, ty)) * EXAG * landW + 0.3 * landW;
        heights[j * (NX + 1) + i] = h;
        pos[p++] = X; pos[p++] = h; pos[p++] = Z;
        uvSat[q] = (tx - MOSAICO.x0) / MOSAICO.nx;
        uvSat[q + 1] = 1 - (ty - MOSAICO.y0) / MOSAICO.ny;
        winUV[q] = u;
        winUV[q + 1] = v;
        q += 2;
      }
    }
  }
  const idx = [];
  for (let j = 0; j < NY; j++) {
    for (let i = 0; i < NX; i++) {
      const a = j * (NX + 1) + i;
      idx.push(a, a + NX + 1, a + 1, a + 1, a + NX + 1, a + NX + 2);
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('uv', new THREE.BufferAttribute(uvSat, 2));
  geo.setAttribute('aWin', new THREE.BufferAttribute(winUV, 2));
  geo.setIndex(idx);
  geo.computeVertexNormals();
  const heightAtUV = (u, v) => {
    const fi = Math.max(0, Math.min(NX - 1e-3, u * NX));
    const fj = Math.max(0, Math.min(NY - 1e-3, v * NY));
    const i = Math.floor(fi);
    const j = Math.floor(fj);
    const ax = fi - i;
    const ay = fj - j;
    const Hh = (a, b) => heights[b * (NX + 1) + a];
    return Hh(i, j) * (1 - ax) * (1 - ay) + Hh(i + 1, j) * ax * (1 - ay) + Hh(i, j + 1) * (1 - ax) * ay + Hh(i + 1, j + 1) * ax * ay;
  };
  const heightAtXZ = (X, Z) => heightAtUV(clamp01((X / mpt + txc - tx0) / (tx1 - tx0)), clamp01((Z / mpt + tyc - ty0) / (ty1 - ty0)));

  const maxTex = renderer.capabilities.maxTextureSize;
  const aniso = Math.min(8, renderer.capabilities.getMaxAnisotropy());
  const textureFrom = (img, maxSide) => {
    const sc = Math.min(1, maxSide / Math.max(img.width, img.height));
    const c = document.createElement('canvas');
    c.width = Math.round(img.width * sc);
    c.height = Math.round(img.height * sc);
    c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace;
    t.anisotropy = aniso;
    return t;
  };
  // zonas del plan maestro dibujadas sobre el terreno (R = meseta, G = parque, B = humedal), en la ventana de la isla
  const PW = Math.round(W / 2);
  const PH = Math.round(H / 2);
  const planCanvas = document.createElement('canvas');
  planCanvas.width = PW;
  planCanvas.height = PH;
  {
    const pc = planCanvas.getContext('2d');
    pc.fillStyle = '#000';
    pc.fillRect(0, 0, PW, PH);
    pc.globalCompositeOperation = 'lighter';
    pc.filter = 'blur(1px)';
    const aPx = (X, Z) => [((X / mpt + txc - tx0) / (tx1 - tx0)) * PW, ((Z / mpt + tyc - ty0) / (ty1 - ty0)) * PH];
    const relleno = (color, pts) => { pc.fillStyle = color; pc.beginPath(); pts.forEach(([X, Z], i) => { const [x, y] = aPx(X, Z); if (i) pc.lineTo(x, y); else pc.moveTo(x, y); }); pc.closePath(); pc.fill(); };
    relleno('rgb(255,0,0)', MESETA.map(([lo, la]) => llToXZ(lo, la)));
    const enXZ = (centro, rx, rz) => { const [cX, cZ] = llToXZ(...centro); return Array.from({ length: 48 }, (_, i) => { const a = (i / 48) * Math.PI * 2; return [cX + rx * Math.cos(a), cZ + rz * Math.sin(a)]; }); };
    relleno('rgb(0,255,0)', enXZ(PARQUE, PARQUE_RADIOS[0], PARQUE_RADIOS[1]));
    relleno('rgb(0,0,255)', enXZ(HUMEDAL, HUMEDAL_RADIOS[0], HUMEDAL_RADIOS[1]));
  }
  const planTex = new THREE.CanvasTexture(planCanvas);
  planTex.flipY = false;
  planTex.minFilter = planTex.magFilter = THREE.LinearFilter;
  planTex.generateMipmaps = false;
  const U = {
    uPlan: { value: planTex }, uPlanAmt: { value: new THREE.Vector3(0, 0, 0) }, uFranja: { value: 0 }, uTime: { value: 0 },
    uLost: { value: lostTex }, uYear: { value: 0 }, uMode: { value: 0 }, uDim: { value: 0 },
  };
  const terrainMat = new THREE.MeshStandardMaterial({ map: textureFrom(satImg, maxTex), roughness: 1, metalness: 0 });
  parchearTerreno(terrainMat, U);
  const terrain = new THREE.Mesh(geo, terrainMat);

  // ---------- detalle del casco urbano (foto z18) ----------
  const PM = geoRef.mosaico;
  const tile18 = PM.px / 256;
  const NP = small ? 100 : 150;
  const ppos = new Float32Array((NP + 1) * (NP + 1) * 3);
  const puv = new Float32Array((NP + 1) * (NP + 1) * 2);
  const pwin = new Float32Array((NP + 1) * (NP + 1) * 2);
  {
    let a = 0;
    let b = 0;
    for (let j = 0; j <= NP; j++) {
      for (let i = 0; i <= NP; i++) {
        const tx = (PM.x0 + (i / NP) * tile18) / 8;
        const ty = (PM.y0 + (j / NP) * tile18) / 8;
        const [X, Z] = toXZ(tx, ty);
        const u = (tx - tx0) / (tx1 - tx0);
        const v = (ty - ty0) / (ty1 - ty0);
        ppos[a++] = X;
        ppos[a++] = heightAtUV(clamp01(u), clamp01(v)) + 0.4;
        ppos[a++] = Z;
        puv[b] = i / NP; puv[b + 1] = 1 - j / NP;
        pwin[b] = u; pwin[b + 1] = v;
        b += 2;
      }
    }
  }
  const pidx = [];
  for (let j = 0; j < NP; j++) {
    for (let i = 0; i < NP; i++) {
      const a = j * (NP + 1) + i;
      pidx.push(a, a + NP + 1, a + 1, a + 1, a + NP + 1, a + NP + 2);
    }
  }
  const pgeo = new THREE.BufferGeometry();
  pgeo.setAttribute('position', new THREE.BufferAttribute(ppos, 3));
  pgeo.setAttribute('uv', new THREE.BufferAttribute(puv, 2));
  pgeo.setAttribute('aWin', new THREE.BufferAttribute(pwin, 2));
  pgeo.setIndex(pidx);
  pgeo.computeVertexNormals();
  const patchMat = new THREE.MeshStandardMaterial({ map: textureFrom(patchImg, maxTex), roughness: 1, metalness: 0 });
  parchearTerreno(patchMat, U);
  const patch = new THREE.Mesh(pgeo, patchMat);

  // ---------- punto de referencia: casco urbano ----------
  const cr = Math.cos(geoRef.rot);
  const sr = Math.sin(geoRef.rot);
  const modelToLL = (x, y) => {
    const px = (x - geoRef.tx) / geoRef.sc;
    const py = (y - geoRef.ty) / geoRef.sc;
    return [geoRef.lon0 + (px * cr + py * sr) / geoRef.kx, geoRef.lat0 + (-px * sr + py * cr) / geoRef.ky];
  };
  const [vlon, vlat] = modelToLL(40, 390);
  const [vx, vz] = llToXZ(vlon, vlat);

  // ---------- árboles reales ----------
  onProgreso(0.78, 'Colocando los árboles reales');
  await tick0();
  const especies = await prepararEspecies();
  if (disposed) return null;
  const treeAll = veg.arboles.map(([x, y, size, dense], i) => {
    const [lo, la] = modelToLL(x, y);
    const [X, Z] = llToXZ(lo, la);
    const d = distAt(X, Z);
    return { X, Z, i, size, dense, d, lostAt: d < 0 ? -1 : lostAtXZ(X, Z), dc: Math.hypot(X - vx, Z - vz) };
  }).filter((t) => t.d > 0)
    .sort((a, b) => a.dc - b.dc)
    .slice(0, small ? 700 : 1800)
    .map((t) => ({
      x: t.X, y: heightAtXZ(t.X, t.Z) + 0.4, z: t.Z,
      rot: ((Math.imul(t.i + 7, 40503) >>> 0) % 628) / 100,
      height: 8.5 * t.size * 1.35 * (t.dense ? 0.92 : 1.05),
      tone: ((Math.imul(t.i + 3, 69069) >>> 0) % 100) / 100,
      lostAt: t.lostAt,
    }));
  let treesGroup = instanciarArboles(especies, treeAll, 60);
  let treesYear = -1;

  // ---------- construcciones ----------
  onProgreso(0.84, 'Colocando las construcciones');
  await tick0();
  const houses = [];
  for (const [, refH, ring] of construcciones.buildings) {
    let cx = 0;
    let cy = 0;
    const pts = ring.map(([lon, lat]) => { const [X, Z] = llToXZ(lon, lat); cx += X; cy += Z; return [X, Z]; });
    cx /= pts.length;
    cy /= pts.length;
    let sxx = 0; let szz = 0; let sxz = 0;
    for (const [X, Z] of pts) { sxx += (X - cx) ** 2; szz += (Z - cy) ** 2; sxz += (X - cx) * (Z - cy); }
    const ang = 0.5 * Math.atan2(2 * sxz, sxx - szz);
    const ca = Math.cos(ang);
    const sa = Math.sin(ang);
    let minA = 1e9; let maxA = -1e9; let minB = 1e9; let maxB = -1e9;
    for (const [X, Z] of pts) {
      const a = (X - cx) * ca + (Z - cy) * sa;
      const b = -(X - cx) * sa + (Z - cy) * ca;
      minA = Math.min(minA, a); maxA = Math.max(maxA, a); minB = Math.min(minB, b); maxB = Math.max(maxB, b);
    }
    const dm = distAt(cx, cy);
    if (dm < 0) continue;
    houses.push({ x: cx, z: cy, ang, w: Math.max(3, maxA - minA), d: Math.max(3, maxB - minB), h: refH || 4, y: heightAtXZ(cx, cy), lostAt: lostAtXZ(cx, cy) });
  }
  const houseGeo = new THREE.BoxGeometry(1, 1, 1);
  houseGeo.translate(0, 0.5, 0);
  const houseMat = new THREE.MeshStandardMaterial({ roughness: 0.85, metalness: 0, transparent: true, opacity: 1 });
  const houseMesh = new THREE.InstancedMesh(houseGeo, houseMat, houses.length);
  houseMesh.frustumCulled = false;
  const m4 = new THREE.Matrix4();
  const qn = new THREE.Quaternion();
  const upV = new THREE.Vector3(0, 1, 0);
  const sv = new THREE.Vector3();
  const pv = new THREE.Vector3();
  const roof = new THREE.Color();
  const RED = new THREE.Color(0xff2a2a);
  const relocP = new Float32Array(PROGRAMA.viviendas); // avance del vuelo de cada vivienda reubicada (0..1)
  const updateHouses = (yr, modo, escala) => {
    houses.forEach((hh, k) => {
      const lost = yr > 0.001 && hh.lostAt <= yr;
      const hide = (lost && modo === 'despues') || (hh.slot !== undefined && relocP[hh.slot] > 0.02);
      qn.setFromAxisAngle(upV, -hh.ang);
      pv.set(hh.x, hh.y, hh.z);
      const s = hide ? 0.0001 : escala;
      sv.set(hh.w * s, hh.h * s, hh.d * s);
      m4.compose(pv, qn, sv);
      houseMesh.setMatrixAt(k, m4);
      if (lost) roof.copy(RED);
      else roof.setHSL(0.09, 0.08 + ((k * 37) % 10) / 100, 0.78 + ((k * 53) % 10) / 100);
      houseMesh.setColorAt(k, roof);
    });
    houseMesh.instanceMatrix.needsUpdate = true;
    if (houseMesh.instanceColor) houseMesh.instanceColor.needsUpdate = true;
  };
  updateHouses(0, 'perdida', CASA_ESCALA);

  // ---------- contexto: Cartagena (todo el mosaico satelital, plano, aparece en el paso de lanchas) ----------
  const cx0 = MOSAICO.x0; const cx1 = MOSAICO.x0 + MOSAICO.nx; const cy0 = MOSAICO.y0; const cy1 = MOSAICO.y0 + MOSAICO.ny;
  const [qx0, qz0] = toXZ(cx0, cy0); const [qx1, qz1] = toXZ(cx1, cy1);
  const ctxGeo = new THREE.BufferGeometry();
  ctxGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array([qx0, 1, qz0, qx1, 1, qz0, qx0, 1, qz1, qx1, 1, qz1]), 3));
  ctxGeo.setAttribute('normal', new THREE.BufferAttribute(new Float32Array([0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0]), 3));
  ctxGeo.setAttribute('uv', new THREE.BufferAttribute(new Float32Array([0, 1, 1, 1, 0, 0, 1, 0]), 2));
  ctxGeo.setIndex([0, 2, 1, 1, 2, 3]);
  // solo la tierra de Cartagena (máscara de la costa de OSM): sin mar, para que no compita con el agua de la escena
  const ctxMask = new THREE.Texture(cartagenaMascaraImg);
  ctxMask.needsUpdate = true;
  const ctxMat = new THREE.MeshStandardMaterial({
    map: terrainMat.map, alphaMap: ctxMask, roughness: 1, metalness: 0, transparent: true, opacity: 0, alphaTest: 0.02,
    polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2,
  });
  const contexto = new THREE.Mesh(ctxGeo, ctxMat);
  contexto.visible = false;
  contexto.renderOrder = 1;

  // ---------- escena, cielo, mar, luces ----------
  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x9fc6d4, 0.000011);
  scene.add(terrain, patch, houseMesh, treesGroup, contexto);
  const sky = new Sky();
  sky.scale.setScalar(450000);
  const su = sky.material.uniforms;
  su.turbidity.value = 2;
  su.rayleigh.value = 2.4;
  su.mieCoefficient.value = 0.004;
  su.mieDirectionalG.value = 0.82;
  const sunDir = new THREE.Vector3().setFromSphericalCoords(1, THREE.MathUtils.degToRad(90 - 38), THREE.MathUtils.degToRad(215));
  su.sunPosition.value.copy(sunDir);
  scene.add(sky);

  const normals = new THREE.Texture(normalsImg);
  normals.wrapS = normals.wrapT = THREE.RepeatWrapping;
  normals.repeat.set(900, 900);
  normals.needsUpdate = true;
  const water = new THREE.Mesh(
    new THREE.PlaneGeometry(200000, 200000),
    new THREE.MeshStandardMaterial({ color: 0x0a4f80, roughness: 0.62, metalness: 0, normalMap: normals, normalScale: new THREE.Vector2(0.35, 0.35) })
  );
  water.rotation.x = -Math.PI / 2;
  scene.add(water);
  const sun = new THREE.DirectionalLight(0xfff0d8, 2.6);
  sun.position.copy(sunDir).multiplyScalar(8000);
  scene.add(sun, new THREE.HemisphereLight(0xcfe6ff, 0x6b5d3a, 0.7));

  const camera = new THREE.PerspectiveCamera(42, 1, 5, 400000);

  // ---------- vías 3D ----------
  onProgreso(0.9, 'Dibujando las vías');
  await tick0();
  const redes = {};
  const matHalo = () => new LineMaterial({ color: 0x05080c, linewidth: 6, transparent: true, opacity: 0, depthWrite: false });
  const matMain = () => new LineMaterial({ linewidth: 3, vertexColors: true, transparent: true, opacity: 0, depthWrite: false });
  const lineMats = [];
  for (const nombre of ['peatonal', 'motos']) {
    const d = sintaxis[nombre];
    const piezas = [];
    for (let s = 0; s < d.segmentos; s++) {
      const [lon1, lat1, lon2, lat2] = d.coords[s];
      const [ax, az] = llToXZ(lon1, lat1);
      const [bx, bz] = llToXZ(lon2, lat2);
      const L = Math.hypot(bx - ax, bz - az);
      const k = Math.max(1, Math.ceil(L / 16));
      for (let j = 0; j < k; j++) {
        const x0 = ax + ((bx - ax) * j) / k; const z0 = az + ((bz - az) * j) / k;
        const x1 = ax + ((bx - ax) * (j + 1)) / k; const z1 = az + ((bz - az) * (j + 1)) / k;
        const mx = (x0 + x1) / 2; const mz = (z0 + z1) / 2;
        piezas.push({ s, x0, z0, x1, z1, mx, mz, largo: L / k, orden: Math.hypot(mx - vx, mz - vz), lostAt: lostAtXZ(mx, mz) });
      }
    }
    piezas.sort((a, b) => a.orden - b.orden); // el trazo crece desde el casco urbano hacia afuera
    const posL = new Float32Array(piezas.length * 6);
    piezas.forEach((p, i) => {
      posL[i * 6] = p.x0; posL[i * 6 + 1] = heightAtXZ(p.x0, p.z0) + 3; posL[i * 6 + 2] = p.z0;
      posL[i * 6 + 3] = p.x1; posL[i * 6 + 4] = heightAtXZ(p.x1, p.z1) + 3; posL[i * 6 + 5] = p.z1;
    });
    const g = new LineSegmentsGeometry();
    g.setPositions(posL);
    g.setColors(new Float32Array(piezas.length * 6).fill(1));
    const halo = new LineSegments2(g, matHalo());
    const main = new LineSegments2(g, matMain());
    halo.renderOrder = 5; main.renderOrder = 6;
    halo.frustumCulled = main.frustumCulled = false;
    halo.visible = main.visible = false;
    lineMats.push(halo.material, main.material);
    scene.add(halo, main);
    const km = d.largo_m.reduce((a, b) => a + b, 0) / 1000;
    const porTipo = {};
    d.tipo.forEach((t, i) => { porTipo[t] = (porTipo[t] || 0) + d.largo_m[i] / 1000; });
    redes[nombre] = { nombre, d, piezas, g, halo, main, op: 0, reveal: 0, firma: '', km, porTipo, N: piezas.length };
  }

  // riesgo de erosión sobre cada red
  const calcularRiesgo = () => {
  const riesgoRed = {};
  for (const [nombre, r] of Object.entries(redes)) {
    const acc = { 10: 0, 20: 0, 30: 0 };
    let tot = 0;
    r.piezas.forEach((p) => { tot += p.largo; for (const y of [10, 20, 30]) if (p.lostAt <= y) acc[y] += p.largo; });
    // elección: ¿cuántos de los ejes de mayor elección (10 % superior, radio n) caen en la franja?
    const nach = r.d.medidas.n.nach;
    const umbral = percentil(nach.filter((_, s) => r.d.comp[s] === r.d.mayor_comp), 0.9);
    const segLost = new Float64Array(r.d.segmentos).fill(Infinity);
    r.piezas.forEach((p) => { if (p.lostAt < segLost[p.s]) segLost[p.s] = p.lostAt; });
    let altos = 0; const altosLost = { 10: 0, 20: 0, 30: 0 };
    for (let s = 0; s < r.d.segmentos; s++) {
      if (nach[s] >= umbral && r.d.comp[s] === r.d.mayor_comp) {
        altos++;
        for (const y of [10, 20, 30]) if (segLost[s] <= y) altosLost[y]++;
      }
    }
    riesgoRed[nombre] = {
      km: tot / 1000,
      pct: { 10: (100 * acc[10]) / tot, 20: (100 * acc[20]) / tot, 30: (100 * acc[30]) / tot },
      km_perdidos: { 10: acc[10] / 1000, 20: acc[20] / 1000, 30: acc[30] / 1000 },
      altos, altosLost,
    };
  }
  return riesgoRed;
  };
  const riesgoRed = calcularRiesgo();

  // ---------- muelles y rutas esquemáticas de lanchas ----------
  const rutasGroup = new THREE.Group();
  rutasGroup.visible = false;
  scene.add(rutasGroup);
  const rutaMats = [];
  const rutasPts = [];
  for (const r of sintaxis.rutas_lanchas) {
    const arr = [];
    for (let i = 0; i < r.puntos.length - 1; i++) {
      const [lon1, lat1] = r.puntos[i];
      const [lon2, lat2] = r.puntos[i + 1];
      const [ax, az] = llToXZ(lon1, lat1);
      const [bx, bz] = llToXZ(lon2, lat2);
      arr.push(ax, 3, az, bx, 3, bz);
      rutasPts.push([ax, az]);
    }
    const g = new LineSegmentsGeometry();
    g.setPositions(arr);
    const m = new LineMaterial({ color: 0x8fd3ee, linewidth: 2.6, transparent: true, opacity: 0, dashed: true, dashSize: 170, gapSize: 130, depthWrite: false });
    const ln = new LineSegments2(g, m);
    ln.computeLineDistances();
    ln.frustumCulled = false;
    ln.renderOrder = 7;
    rutasGroup.add(ln);
    rutaMats.push(m);
  }
  const beamGeo = new THREE.CylinderGeometry(1, 1, 1, 10, 1, true);
  beamGeo.translate(0, 0.5, 0);
  const beamMat = new THREE.MeshBasicMaterial({ color: 0xffb066, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide });
  const beams = [];
  const addBeam = (X, Z, tipo) => {
    const m = new THREE.Mesh(beamGeo, beamMat);
    m.position.set(X, heightAtXZ(X, Z), Z);
    m.userData.tipo = tipo;
    m.frustumCulled = false;
    m.renderOrder = 8;
    rutasGroup.add(m);
    beams.push(m);
  };
  const muelles = sintaxis.muelles;
  muelles.puntos.forEach((p) => { const [X, Z] = llToXZ(p.lon, p.lat); addBeam(X, Z, 'muelle'); });
  for (const r of sintaxis.rutas_lanchas) {
    for (const idxp of [0, r.puntos.length - 1]) { const [X, Z] = llToXZ(...r.puntos[idxp]); addBeam(X, Z, 'embarque'); }
  }

  // etiquetas de contexto (Cartagena, Bocagrande, Tierra Bomba)
  try { await document.fonts.load('600 40px \"Space Grotesk\"'); } catch { /* sin fuente: usa la del sistema */ }
  const etiqueta = (texto, X, Z, alto = 30) => {
    const c = document.createElement('canvas');
    c.width = 640; c.height = 110;
    const g = c.getContext('2d');
    g.font = '600 44px \"Space Grotesk\", system-ui, sans-serif';
    g.textBaseline = 'middle';
    g.shadowColor = 'rgba(0,0,0,0.85)'; g.shadowBlur = 14;
    g.fillStyle = '#ffffff';
    g.fillText(texto, 24, 50);
    g.shadowBlur = 0; g.fillStyle = '#e0917a'; g.fillRect(24, 88, 70, 4);
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false, sizeAttenuation: false, opacity: 0 }));
    sp.scale.set(0.05 * (640 / 110), 0.05, 1);
    sp.center.set(0, 0);
    sp.position.set(X, alto, Z);
    sp.renderOrder = 80;
    return sp;
  };
  const etiquetas = new THREE.Group();
  etiquetas.visible = false;
  {
    const [cX, cZ] = llToXZ(-75.5506, 10.4204);
    const [bX, bZ] = llToXZ(-75.5597, 10.3939);
    etiquetas.add(etiqueta('Cartagena', cX + 120, cZ - 160, 40), etiqueta('Bocagrande · Castillogrande', bX + 120, bZ - 60, 40), etiqueta('Tierra Bomba', vx - 700, vz - 200, 120));
  }
  scene.add(etiquetas);

  // ===========================================================================
  // ---------- plan maestro 3D (geometría de la tesis; parque y humedal: propuesta) ----------
  // ===========================================================================
  const planGroup = new THREE.Group();
  planGroup.visible = false;
  scene.add(planGroup);
  const PLAN_KEYS = ['meseta', 'vuelo', 'viviendas', 'escuela', 'lluvia', 'vias', 'corredores', 'parque', 'humedal', 'franja', 'etiq'];
  const planT = Object.fromEntries(PLAN_KEYS.map((k) => [k, 0]));
  const planC = Object.fromEntries(PLAN_KEYS.map((k) => [k, 0]));
  const dentro = (x, z, poly) => {
    let c = false;
    for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
      const [xi, zi] = poly[i]; const [xj, zj] = poly[j];
      if ((zi > z) !== (zj > z) && x < ((xj - xi) * (z - zi)) / (zj - zi) + xi) c = !c;
    }
    return c;
  };
  const mesetaXZ = MESETA.map(([lo, la]) => llToXZ(lo, la));
  const mCx = mesetaXZ.reduce((s, p) => s + p[0], 0) / mesetaXZ.length;
  const mCz = mesetaXZ.reduce((s, p) => s + p[1], 0) / mesetaXZ.length;
  const [sX, sZ] = llToXZ(...ESCUELA);
  const [vvX, vvZ] = llToXZ(...VIVIENDAS);
  const [pkX, pkZ] = llToXZ(...PARQUE);
  const sY = heightAtXZ(sX, sZ);

  // cifras de la meseta sobre el relieve usado (verificación de la cota +22 m)
  const mesetaInfo = (() => {
    let area = 0;
    for (let i = 0, j = mesetaXZ.length - 1; i < mesetaXZ.length; j = i++) area += (mesetaXZ[j][0] + mesetaXZ[i][0]) * (mesetaXZ[j][1] - mesetaXZ[i][1]);
    area = Math.abs(area) / 2;
    let mn = 1e9; let mx = -1e9; let sum = 0; let n = 0;
    const xs = mesetaXZ.map((p) => p[0]); const zs = mesetaXZ.map((p) => p[1]);
    for (let x = Math.min(...xs); x <= Math.max(...xs); x += 12) {
      for (let z = Math.min(...zs); z <= Math.max(...zs); z += 12) {
        if (!dentro(x, z, mesetaXZ)) continue;
        const e = Math.max(0, demAtTile(x / mpt + txc, z / mpt + tyc));
        mn = Math.min(mn, e); mx = Math.max(mx, e); sum += e; n++;
      }
    }
    return { areaHa: area / 10000, min: mn, max: mx, media: n ? sum / n : 0 };
  })();

  // manzana de 120 viviendas: el paso se reduce hasta que todas quepan dentro de la meseta
  const slotsViv = (() => {
    const candidatos = [[vvX, vvZ], [mCx, mCz]];
    let mejor = [];
    for (const [cx0v, cz0v] of candidatos) {
      for (let paso = 26; paso >= 12; paso -= 2) {
        let arr = [];
        for (let r = -12; r <= 12; r++) {
          for (let c = -14; c <= 14; c++) {
            const x = cx0v + c * paso * 0.85;
            const z = cz0v + r * paso;
            if (dentro(x, z, mesetaXZ) && Math.hypot(x - sX, z - sZ) > 60) arr.push([x, z, r]);
          }
        }
        if (arr.length > mejor.length) mejor = arr;
        if (arr.length >= PROGRAMA.viviendas) {
          arr = arr.sort((a, b) => Math.hypot(a[0] - cx0v, a[1] - cz0v) - Math.hypot(b[0] - cx0v, b[1] - cz0v)).slice(0, PROGRAMA.viviendas);
          const rs = arr.map((a) => a[2]); const r0 = Math.min(...rs); const r1 = Math.max(...rs);
          return arr.map(([x, z, r]) => [x, z, (9 * (r - r0)) / Math.max(1, r1 - r0)]);
        }
      }
    }
    return mejor;
  })();
  const NV = slotsViv.length;
  const wallGeo = new THREE.BoxGeometry(1, 1, 1); wallGeo.translate(0, 0.5, 0);
  const roofGeo = new THREE.ConeGeometry(0.7071, 1, 4); roofGeo.rotateY(Math.PI / 4); roofGeo.translate(0, 0.5, 0);
  const wallMat = new THREE.MeshStandardMaterial({ color: 0xe6d2b0, roughness: 0.9 });
  const roofMat = new THREE.MeshStandardMaterial({ color: 0xc86d51, roughness: 0.8 });
  const nuevasParedes = new THREE.InstancedMesh(wallGeo, wallMat, Math.max(1, NV));
  const nuevosTechos = new THREE.InstancedMesh(roofGeo, roofMat, Math.max(1, NV));
  nuevasParedes.frustumCulled = nuevosTechos.frustumCulled = false;
  const volarMesh = new THREE.InstancedMesh(wallGeo, new THREE.MeshStandardMaterial({ color: 0xff3b30, roughness: 0.6, emissive: 0x551008 }), Math.max(1, NV));
  volarMesh.frustumCulled = false;
  planGroup.add(nuevasParedes, nuevosTechos, volarMesh);

  // viviendas en riesgo (franja a 30 años) más cercanas a la meseta: son las que «viajan»
  const asignarReubicacion = () => {
    houses.forEach((hh) => { hh.slot = undefined; });
    slotCasa.length = 0;
    const cand = houses.map((hh, i) => ({ i, d: Math.hypot(hh.x - vvX, hh.z - vvZ) })).filter((o) => houses[o.i].lostAt <= 30).sort((a, b) => a.d - b.d).slice(0, NV);
    cand.forEach((o, k) => { houses[o.i].slot = k; slotCasa[k] = houses[o.i]; });
    relocP.fill(0);
    return cand.length;
  };
  const slotCasa = [];
  let nVuelan = asignarReubicacion();
  const smoothstep01 = (x) => { const t = clamp01(x); return t * t * (3 - 2 * t); };
  const tmpM = new THREE.Matrix4(); const tmpQ = new THREE.Quaternion(); const tmpS = new THREE.Vector3(); const tmpP = new THREE.Vector3(); const Y = new THREE.Vector3(0, 1, 0);
  let planHouseKey = '';
  const actualizarViviendasPlan = (escala) => {
    const key = `${planC.vuelo.toFixed(3)}|${planC.viviendas.toFixed(3)}|${escala.toFixed(2)}|${nVuelan}`;
    if (key === planHouseKey) return;
    planHouseKey = key;
    let cambioReloc = false;
    for (let k = 0; k < NV; k++) {
      const [x, z, fila] = slotsViv[k];
      const y = heightAtXZ(x, z);
      const origen = slotCasa[k];
      const p = origen ? clamp01(planC.vuelo * 1.45 - 0.45 * (k / NV)) : 0;
      if (Math.abs(relocP[k] - p) > 1e-4) { relocP[k] = p; cambioReloc = true; }
      // vivienda que vuela (copia roja de la original)
      if (origen && p > 0.02 && p < 0.98) {
        const e = smoothstep01(p);
        tmpP.set(origen.x + (x - origen.x) * e, origen.y + (y - origen.y) * e + Math.sin(Math.PI * p) * 70, origen.z + (z - origen.z) * e);
        const w = (origen.w + (6.8 - origen.w) * e) * escala; const hgt = (origen.h * (1 - e) + 3 * e) * escala; const d = (origen.d + (9.2 - origen.d) * e) * escala;
        tmpQ.setFromAxisAngle(Y, -origen.ang * (1 - e));
        tmpS.set(w, hgt, d);
      } else { tmpP.set(x, y, z); tmpQ.identity(); tmpS.set(0.0001, 0.0001, 0.0001); }
      tmpM.compose(tmpP, tmpQ, tmpS); volarMesh.setMatrixAt(k, tmpM);
      // vivienda nueva: núcleo → ampliación → condiciones de habitabilidad (red rizomática de la tesis)
      const aterrizaje = origen ? smoothstep01((p - 0.7) / 0.3) : 0;
      const crecer = clamp01(planC.viviendas * 1.3 - 0.3 * (fila / 9));
      const v = Math.max(crecer * 3, aterrizaje);
      const s1 = clamp01(v); const s2 = clamp01(v - 1); const s3 = clamp01(v - 2);
      const w = (4.6 + 2.2 * smoothstep01(s2)) * s1; const d = (6 + 3.2 * smoothstep01(s2)) * s1; const hgt = 3 * smoothstep01(s1);
      tmpP.set(x, y, z); tmpQ.identity(); tmpS.set(Math.max(1e-4, w), Math.max(1e-4, hgt), Math.max(1e-4, d));
      tmpM.compose(tmpP, tmpQ, tmpS); nuevasParedes.setMatrixAt(k, tmpM);
      tmpP.set(x, y + hgt, z); tmpS.set(Math.max(1e-4, (w + 1.2) * smoothstep01(s3)), Math.max(1e-4, 2.2 * smoothstep01(s3)), Math.max(1e-4, (d + 1.2) * smoothstep01(s3)));
      tmpM.compose(tmpP, tmpQ, tmpS); nuevosTechos.setMatrixAt(k, tmpM);
    }
    nuevasParedes.instanceMatrix.needsUpdate = nuevosTechos.instanceMatrix.needsUpdate = volarMesh.instanceMatrix.needsUpdate = true;
    if (cambioReloc) houseKey = '';
  };

  // complejo educativo: cubierta captadora en V («macro-embudo»), canaleta, aljibe, ágora y dispensario
  const escuelaG = new THREE.Group();
  escuelaG.position.set(sX, sY, sZ);
  planGroup.add(escuelaG);
  {
    const muro = new THREE.Mesh(new THREE.BoxGeometry(70, 6.4, 24), new THREE.MeshStandardMaterial({ color: 0xefe8dc, roughness: 0.9 }));
    muro.position.y = 3.2;
    escuelaG.add(muro);
    const pos4 = new Float32Array([
      -35, 9, -13, 35, 9, -13, 35, 6.2, 0, -35, 6.2, 0,
      -35, 6.2, 0, 35, 6.2, 0, 35, 9, 13, -35, 9, 13,
    ]);
    const rg = new THREE.BufferGeometry();
    rg.setAttribute('position', new THREE.BufferAttribute(pos4, 3));
    rg.setIndex([0, 3, 1, 1, 3, 2, 4, 7, 5, 5, 7, 6]);
    rg.computeVertexNormals();
    const techo = new THREE.Mesh(rg, new THREE.MeshStandardMaterial({ color: 0xa9dcea, roughness: 0.35, metalness: 0.25, side: THREE.DoubleSide, emissive: 0x0c5a78, emissiveIntensity: 0.1 }));
    techo.userData.techo = true;
    escuelaG.add(techo);
    escuelaG.userData.techoMat = techo.material;
    const canaleta = new THREE.Mesh(new THREE.BoxGeometry(70, 0.6, 0.9), new THREE.MeshStandardMaterial({ color: 0x2aa7d8, emissive: 0x1a7aa0, emissiveIntensity: 0.5 }));
    canaleta.position.set(0, 6.15, 0);
    escuelaG.add(canaleta);
    // aljibe de 450.000 L (representación esquemática, en corte: vidrio + nivel de agua)
    const tanque = new THREE.Mesh(new THREE.BoxGeometry(26, 5, 18), new THREE.MeshStandardMaterial({ color: 0x9fd8e6, transparent: true, opacity: 0.22, roughness: 0.1, depthWrite: false }));
    tanque.position.set(0, 2.5, 33);
    escuelaG.add(tanque);
    const agua = new THREE.Mesh(new THREE.BoxGeometry(24.6, 1, 16.6), new THREE.MeshStandardMaterial({ color: 0x2f9fd0, transparent: true, opacity: 0.9, roughness: 0.2 }));
    agua.geometry.translate(0, 0.5, 0);
    agua.position.set(0, 0.2, 33);
    escuelaG.add(agua);
    escuelaG.userData.agua = agua;
    // ágora cubierta de ~400 m² (disco de 11,3 m de radio) y dispensario con 12 tomas
    const agora = new THREE.Mesh(new THREE.CylinderGeometry(11.3, 11.3, 0.5, 40), new THREE.MeshStandardMaterial({ color: 0xd9c7a3 }));
    agora.position.set(52, 0.25, -14);
    const agoraTecho = new THREE.Mesh(new THREE.ConeGeometry(13.5, 4.5, 40), new THREE.MeshStandardMaterial({ color: 0xc86d51, roughness: 0.8 }));
    agoraTecho.position.set(52, 7.2, -14);
    const postes = new THREE.Group();
    for (let i = 0; i < 8; i++) { const a = (i / 8) * Math.PI * 2; const po = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 5, 6), new THREE.MeshStandardMaterial({ color: 0x8a6a4a })); po.position.set(52 + Math.cos(a) * 10, 2.9, -14 + Math.sin(a) * 10); postes.add(po); }
    escuelaG.add(agora, agoraTecho, postes);
    const disp = new THREE.Mesh(new THREE.BoxGeometry(12, 4, 8), new THREE.MeshStandardMaterial({ color: 0xefe8dc }));
    disp.position.set(-46, 2, 34);
    escuelaG.add(disp);
    for (let i = 0; i < PROGRAMA.tomas; i++) {
      const toma = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.45, 1.3, 8), new THREE.MeshStandardMaterial({ color: 0x2aa7d8, emissive: 0x1a7aa0, emissiveIntensity: 0.6 }));
      toma.position.set(-51 + i * 0.9, 0.65, 29);
      escuelaG.add(toma);
    }
  }
  // lluvia: 700 trazos que caen sobre la cubierta
  const NL = 700;
  const lluviaPos = new Float32Array(NL * 6);
  const lluviaVel = new Float32Array(NL);
  const reponer = (i, alto = Math.random() * 130) => {
    const x = sX + (Math.random() - 0.5) * 120; const z = sZ + (Math.random() - 0.5) * 80; const y = sY + 8 + alto;
    lluviaPos.set([x, y, z, x - 0.4, y + 4.5, z], i * 6);
    lluviaVel[i] = 55 + Math.random() * 25;
  };
  for (let i = 0; i < NL; i++) reponer(i);
  const lluviaGeo = new THREE.BufferGeometry();
  lluviaGeo.setAttribute('position', new THREE.BufferAttribute(lluviaPos, 3));
  const lluviaMat = new THREE.LineBasicMaterial({ color: 0xbfe9ff, transparent: true, opacity: 0, depthWrite: false });
  const lluviaLineas = new THREE.LineSegments(lluviaGeo, lluviaMat);
  lluviaLineas.frustumCulled = false;
  lluviaLineas.renderOrder = 9;
  planGroup.add(lluviaLineas);

  // vías del plan (sendas arena) y corredores ecológicos (verde, con flujo)
  const planLineMats = [];
  const planLineas = [];
  const trazoPlan = (pts, color, ancho, opts = {}) => {
    const pos = [];
    for (let i = 0; i < pts.length - 1; i++) {
      const [x0, z0] = pts[i]; const [x1, z1] = pts[i + 1];
      const L = Math.hypot(x1 - x0, z1 - z0); const k = Math.max(1, Math.ceil(L / 10));
      for (let j = 0; j < k; j++) {
        const ax = x0 + ((x1 - x0) * j) / k; const az = z0 + ((z1 - z0) * j) / k;
        const bx = x0 + ((x1 - x0) * (j + 1)) / k; const bz = z0 + ((z1 - z0) * (j + 1)) / k;
        pos.push(ax, heightAtXZ(ax, az) + 2.6, az, bx, heightAtXZ(bx, bz) + 2.6, bz);
      }
    }
    const g = new LineSegmentsGeometry();
    g.setPositions(pos);
    const halo = new LineSegments2(g, new LineMaterial({ color: 0x05080c, linewidth: ancho + 3, transparent: true, opacity: 0, depthWrite: false }));
    const main = new LineSegments2(g, new LineMaterial({ color, linewidth: ancho, transparent: true, opacity: 0, depthWrite: false, ...opts }));
    if (opts.dashed) main.computeLineDistances();
    halo.renderOrder = 12; main.renderOrder = 13;
    halo.frustumCulled = main.frustumCulled = false;
    planGroup.add(halo, main);
    planLineMats.push(halo.material, main.material);
    lineMats.push(halo.material, main.material);
    planLineas.push({ g, halo, main, N: pos.length / 6, dash: !!opts.dashed });
    return planLineas[planLineas.length - 1];
  };
  const trazosVias = VIAS.map((v) => trazoPlan(v.pts.map(([lo, la]) => llToXZ(lo, la)), 0xf5b45a, 5));
  const trazosCorr = CORREDORES.map((c) => trazoPlan([llToXZ(...c.desde), llToXZ(...c.hasta)], 0x35d08a, 4, { dashed: true, dashSize: 14, gapSize: 9 }));

  // etiquetas del plan
  const planEtiquetas = new THREE.Group();
  planGroup.add(planEtiquetas);
  const costaOeste = (() => { for (let dxm = 0; dxm < 1400; dxm += 20) { const X = pkX - dxm; if (distAt(X, pkZ) <= 0.5) return [X + 20, pkZ]; } return [pkX - 400, pkZ]; })();
  const etqPlan = (texto, X, Z, alto, clave) => { const sp = etiqueta(texto, X, Z, alto); sp.userData.clave = clave; sp.material.opacity = 0; planEtiquetas.add(sp); return sp; };
  etqPlan('Meseta segura +22 m', mCx + 150, mCz - 40, 90, 'meseta');
  etqPlan('120 viviendas', mCx - 120, mCz - 40, 60, 'viviendas');
  etqPlan('Complejo educativo', sX + 20, sZ, 55, 'escuela');
  etqPlan('Parque ecológico', pkX + 30, pkZ + 20, 55, 'parque');
  etqPlan('Barrera costera', costaOeste[0], costaOeste[1], 45, 'franja');
  etqPlan('Humedal', ...llToXZ(...HUMEDAL), 40, 'humedal');

  const actualizarPlan = (dt, t, escalaCasas) => {
    for (const k of PLAN_KEYS) planC[k] += (planT[k] - planC[k]) * expo(dt, k === 'vuelo' || k === 'viviendas' ? 9 : 2.4);
    U.uPlanAmt.value.set(planC.meseta, planC.parque, planC.humedal);
    U.uFranja.value = planC.franja;
    U.uTime.value = t;
    const activo = PLAN_KEYS.some((k) => planC[k] > 0.01);
    planGroup.visible = activo;
    if (!activo) return;
    nuevasParedes.visible = nuevosTechos.visible = planC.vuelo > 0.01 || planC.viviendas > 0.01;
    volarMesh.visible = planC.vuelo > 0.01;
    actualizarViviendasPlan(escalaCasas);
    // vías y corredores
    trazosVias.forEach((tr) => {
      tr.main.visible = tr.halo.visible = planC.vias > 0.01;
      tr.g.instanceCount = Math.max(1, Math.floor(tr.N * clamp01(planC.vias)));
      tr.main.material.opacity = clamp01(planC.vias * 1.4); tr.halo.material.opacity = clamp01(planC.vias * 0.8);
    });
    trazosCorr.forEach((tr) => {
      tr.main.visible = tr.halo.visible = planC.corredores > 0.01;
      tr.g.instanceCount = Math.max(1, Math.floor(tr.N * clamp01(planC.corredores)));
      tr.main.material.opacity = clamp01(planC.corredores * 1.4); tr.halo.material.opacity = clamp01(planC.corredores * 0.7);
      tr.main.material.dashOffset -= dt * 9;
    });
    // complejo educativo
    escuelaG.visible = planC.escuela > 0.01;
    const k = clamp01(planC.escuela);
    escuelaG.scale.set(1, Math.max(0.001, smoothstep01(k)), 1);
    // lluvia y llenado del aljibe
    lluviaMat.opacity = clamp01(planC.lluvia) * 0.75;
    lluviaLineas.visible = planC.lluvia > 0.01;
    if (lluviaLineas.visible) {
      for (let i = 0; i < NL; i++) {
        const o = i * 6;
        const dy = lluviaVel[i] * dt;
        lluviaPos[o + 1] -= dy; lluviaPos[o + 4] -= dy;
        if (lluviaPos[o + 1] < sY + 7.5) reponer(i, 110 + Math.random() * 30);
      }
      lluviaGeo.attributes.position.needsUpdate = true;
    }
    const agua = escuelaG.userData.agua;
    agua.scale.y = Math.max(0.001, 4.4 * smoothstep01(planC.lluvia));
    escuelaG.userData.techoMat.emissiveIntensity = 0.1 + 0.5 * clamp01(planC.lluvia) * (0.6 + 0.4 * Math.sin(t * 5));
    // etiquetas
    planEtiquetas.children.forEach((sp) => { sp.material.opacity = clamp01(planC.etiq) * clamp01(planC[sp.userData.clave === 'viviendas' ? 'viviendas' : sp.userData.clave] ?? 0); });
    const hv = planC.vuelo > 0.01 ? 1 : 0;
    planEtiquetas.children.forEach((sp) => { if (sp.userData.clave === 'viviendas') sp.material.opacity = clamp01(planC.etiq) * clamp01(Math.max(planC.viviendas, planC.vuelo) * 2) * (hv || planC.viviendas > 0.01 ? 1 : 0); });
  };
  const planInfo = {
    mesetaInfo,
    viviendasColocadas: NV,
    nVuelan: () => nVuelan,
    areaParqueHa: () => ha(cumLostPx[30]),
  };

  // ---------- capas de color ----------
  const colorTmp = new THREE.Color();
  const gris = new THREE.Color().setRGB(0.30, 0.32, 0.34);
  function colorearRed(red, capa, radio) {
    const { d, piezas, g } = red;
    const out = new Float32Array(piezas.length * 6);
    let norm = null;
    const mayor = d.mayor_comp;
    if (capa === 'nain' || capa === 'nach') {
      const arr = d.medidas[radio][capa];
      const principal = arr.filter((_, s) => d.comp[s] === mayor); // los componentes pequeños inflan la escala
      const lo = percentil(principal, 0.02);
      const hi = percentil(principal, 0.98);
      norm = (s) => (d.comp[s] !== mayor ? -1 : clamp01((arr[s] - lo) / (hi - lo || 1)));
    } else if (capa === 'muelle_dist') {
      const arr = muelles.dist_m;
      const hi = percentil(arr.filter((v) => v >= 0), 0.95) || 1;
      norm = (s) => (arr[s] < 0 ? -1 : 1 - clamp01(arr[s] / hi));
    } else if (capa === 'muelle_ch') {
      const arr = muelles.eleccion;
      norm = (s) => (d.comp[s] !== mayor ? -1 : clamp01(Math.pow(arr[s], 0.45)));
    }
    piezas.forEach((p, i) => {
      if (capa === 'tipo') colorTmp.set(COLOR_TIPO[d.tipo[p.s]] || '#f4f1ec');
      else if (capa === 'riesgo') {
        const y = p.lostAt;
        const hex = y <= 10 ? '#b3261e' : y <= 20 ? '#e0453a' : y <= 30 ? '#f58b7e' : '#aeb8bd';
        colorTmp.set(hex);
      } else {
        const t = norm ? norm(p.s) : 0;
        if (t < 0) colorTmp.copy(gris);
        else rampa(t, colorTmp);
      }
      out[i * 6] = out[i * 6 + 3] = colorTmp.r;
      out[i * 6 + 1] = out[i * 6 + 4] = colorTmp.g;
      out[i * 6 + 2] = out[i * 6 + 5] = colorTmp.b;
    });
    g.setColors(out);
  }

  // ---------- estadísticas globales ----------
  const casasPerdidas = (y) => houses.reduce((n, hh) => n + (hh.lostAt <= y ? 1 : 0), 0);
  const stats = {
    mpp, resolucionM: mpp,
    ha: { total: ha(landPx), 10: ha(cumLostPx[10]), 20: ha(cumLostPx[20]), 30: ha(cumLostPx[30]) },
    pct: { 10: (100 * cumLostPx[10]) / landPx, 20: (100 * cumLostPx[20]) / landPx, 30: (100 * cumLostPx[30]) / landPx },
    casas: { total: houses.length, 10: casasPerdidas(10), 20: casasPerdidas(20), 30: casasPerdidas(30) },
    haAnio: (y) => ha(cumLostPx[Math.max(0, Math.min(30, Math.round(y)))]),
    pctAnio: (y) => (100 * cumLostPx[Math.max(0, Math.min(30, Math.round(y)))]) / landPx,
    casasAnio: (y) => casasPerdidas(y),
    riesgoRed,
    km: { peatonal: redes.peatonal.km, motos: redes.motos.km },
    porTipo: { peatonal: redes.peatonal.porTipo, motos: redes.motos.porTipo },
    modelo: 'leva',
    plan: { meseta: mesetaInfo, viviendasColocadas: NV, parqueHa: 0, casasFranja: 0, reubicadas: 0 },
  };
  let curModelo = 'leva';
  let curNivel = 2;
  let alCambiarModelo = () => {};
  const refrescarStats = () => {
    stats.ha = { total: ha(landPx), 10: ha(cumLostPx[10]), 20: ha(cumLostPx[20]), 30: ha(cumLostPx[30]) };
    stats.pct = { 10: (100 * cumLostPx[10]) / landPx, 20: (100 * cumLostPx[20]) / landPx, 30: (100 * cumLostPx[30]) / landPx };
    stats.casas = { total: houses.length, 10: casasPerdidas(10), 20: casasPerdidas(20), 30: casasPerdidas(30) };
    stats.riesgoRed = calcularRiesgo();
    stats.modelo = curModelo;
    stats.plan.parqueHa = ha(cumLostPx[30]);
    stats.plan.casasFranja = casasPerdidas(30);
    stats.plan.reubicadas = nVuelan;
  };
  stats.plan.parqueHa = ha(cumLostPx[30]);
  stats.plan.casasFranja = casasPerdidas(30);
  stats.plan.reubicadas = nVuelan;
  const recalcularTodo = (modelo, nivelM) => {
    calcularPerdida(modelo, nivelM);
    houses.forEach((hh) => { hh.lostAt = lostAtXZ(hh.x, hh.z); });
    treeAll.forEach((tr) => { tr.lostAt = lostAtXZ(tr.x, tr.z); });
    Object.values(redes).forEach((r) => { r.piezas.forEach((p) => { p.lostAt = lostAtXZ(p.mx, p.mz); }); r.firma = ''; });
    nVuelan = asignarReubicacion();
    planHouseKey = '';
    refrescarStats();
  };

  // ---------- poses de cámara ----------
  const bb = new THREE.Box3();
  rutasPts.forEach(([x, z]) => bb.expandByPoint(new THREE.Vector3(x, 0, z)));
  muelles.puntos.forEach((p) => { const [x, z] = llToXZ(p.lon, p.lat); bb.expandByPoint(new THREE.Vector3(x, 0, z)); });
  const bc = bb.getCenter(new THREE.Vector3());
  const bs = bb.getSize(new THREE.Vector3());
  const bdist = Math.max(bs.x, bs.z) * 1.05 + 2500;
  const dx = () => (window.innerWidth >= 1024 ? -1500 : 0); // en pantallas anchas la isla se corre a la derecha del panel
  const POSES = {
    hero: (t) => {
      const a = THREE.MathUtils.degToRad(205) + Math.sin(t * 0.05) * 0.55;
      return { pos: new THREE.Vector3(vx + Math.sin(a) * 470, 170, vz + Math.cos(a) * 470), look: new THREE.Vector3(vx, -6, vz) };
    },
    casco: () => ({ pos: new THREE.Vector3(vx + 380, 520, vz + 700), look: new THREE.Vector3(vx, 10, vz) }),
    isla: () => ({ pos: new THREE.Vector3(500 + dx(), 7800, 8400), look: new THREE.Vector3(dx(), 0, 300) }),
    problema: () => (window.innerWidth >= 1024
      ? { pos: new THREE.Vector3(-900, 7400, 8000), look: new THREE.Vector3(-2300, 0, 300) }
      : { pos: new THREE.Vector3(500, 7800, 8400), look: new THREE.Vector3(0, 0, 300) }),
    vias: () => ({ pos: new THREE.Vector3(250 + dx(), 5700, 6700), look: new THREE.Vector3(dx(), 0, 250) }),
    lancha: () => ({ pos: new THREE.Vector3(bc.x + bdist * 0.18 + dx() * 1.5, bdist * 0.62, bc.z + bdist * 0.92), look: new THREE.Vector3(bc.x + dx() * 1.5, 0, bc.z) }),
    plan_general: () => ({ pos: new THREE.Vector3(mCx + 260, 1150, mCz + 1350), look: new THREE.Vector3(mCx - 20, 0, mCz + 60) }),
    plan_meseta: () => ({ pos: new THREE.Vector3(mCx + 140, 560, mCz + 700), look: new THREE.Vector3(mCx, 20, mCz) }),
    plan_escuela: () => ({ pos: new THREE.Vector3(sX + 70, sY + 120, sZ + 190), look: new THREE.Vector3(sX, sY + 4, sZ) }),
    plan_vias: () => ({ pos: new THREE.Vector3(mCx + 500, 1900, mCz + 1700), look: new THREE.Vector3(mCx + 150, 0, mCz - 120) }),
    plan_parque: () => ({ pos: new THREE.Vector3(pkX + 240, 700, pkZ + 820), look: new THREE.Vector3(pkX - 20, 0, pkZ - 40) }),
    casco_alto: () => ({ pos: new THREE.Vector3(vx + 250, 1500, vz + 1500), look: new THREE.Vector3(vx, 0, vz) }),
  };

  // ---------- estado objetivo y bucle ----------
  const T = { cam: 'hero', year: 0, modo: 'perdida', red: null, capa: 'tipo', radio: 'n', calles: 0, casas: 1, dim: 0, rutas: 0, contexto: 0, modelo: 'leva', nivelManual: 2, plan: null };
  // vista libre del usuario (zoom, giro, desplazamiento) sobre la pose de cada paso
  const vt = { zoom: 1, az: 0, el: 0, px: 0, pz: 0 };
  const vi = { zoom: 1, az: 0, el: 0, px: 0, pz: 0 };
  let lastBase = 8000;
  const sph = new THREE.Spherical();
  const offV = new THREE.Vector3();
  const dirV2 = new THREE.Vector3();
  const resetVista = () => { vt.zoom = 1; vt.az = 0; vt.el = 0; vt.px = 0; vt.pz = 0; };
  const cur = { year: 0, dim: 0, casas: 1, rutas: 0, contexto: 0, escala: CASA_ESCALA };
  const camPos = POSES.hero(0).pos.clone();
  const camLook = POSES.hero(0).look.clone();
  const mouse = { x: 0, y: 0, sx: 0, sy: 0 };
  const onMove = (e) => { mouse.x = (e.clientX / window.innerWidth - 0.5) * 2; mouse.y = (e.clientY / window.innerHeight - 0.5) * 2; };
  window.addEventListener('pointermove', onMove, { passive: true });
  cleanups.push(() => window.removeEventListener('pointermove', onMove));

  const resize = () => {
    const w = mount.clientWidth || window.innerWidth;
    const h = mount.clientHeight || window.innerHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    lineMats.forEach((m) => m.resolution.set(w, h));
    rutaMats.forEach((m) => m.resolution.set(w, h));
  };
  resize();
  const ro = new ResizeObserver(resize);
  ro.observe(mount);
  cleanups.push(() => ro.disconnect());

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let last = performance.now();
  const t0 = last;
  let raf = 0;
  let pausado = document.hidden;
  const onVis = () => { pausado = document.hidden; last = performance.now(); };
  document.addEventListener('visibilitychange', onVis);
  cleanups.push(() => document.removeEventListener('visibilitychange', onVis));

  let houseKey = '';
  let shown = false;
  const expo = (dt, k) => 1 - Math.exp(-dt * k);

  const tick = (now) => {
    raf = requestAnimationFrame(tick);
    if (pausado || disposed) return;
    const dt = Math.min(DT_MAX, (now - last) / 1000);
    last = now;
    const t = (now - t0) / 1000;

    // modelo de afectación (solo retroceso / retroceso + cota)
    if (T.modelo !== curModelo || (T.modelo === 'manual' && T.nivelManual !== curNivel)) {
      curModelo = T.modelo;
      curNivel = T.nivelManual;
      recalcularTodo(curModelo, curNivel);
      houseKey = '';
      treesYear = -2;
      alCambiarModelo();
    }

    // erosión
    cur.year += (T.year - cur.year) * expo(dt, reduce ? 30 : 5);
    if (Math.abs(T.year - cur.year) < 0.002) cur.year = T.year;
    U.uYear.value = cur.year;
    U.uMode.value = T.modo === 'despues' ? 1 : 0;
    cur.dim += (T.dim - cur.dim) * expo(dt, 3);
    U.uDim.value = cur.dim;

    // cámara
    const pose = POSES[T.cam](t * (reduce ? 0 : 1));
    // en pantallas verticales la isla se aleja y sube, para no quedar bajo el panel inferior
    const aspect = window.innerWidth / window.innerHeight;
    if (aspect < 0.85 && T.cam !== 'hero' && T.cam !== 'casco') {
      const k = Math.min(2.3, 0.95 / aspect);
      const dirV = pose.pos.clone().sub(pose.look).multiplyScalar(k);
      const subir = dirV.length() * 0.2;
      pose.look.z += subir;
      pose.pos = pose.look.clone().add(dirV);
    }
    const kc = expo(dt, reduce ? 30 : 1.7);
    camPos.lerp(pose.pos, kc);
    camLook.lerp(pose.look, kc);
    mouse.sx += (mouse.x - mouse.sx) * 0.05;
    mouse.sy += (mouse.y - mouse.sy) * 0.05;
    // vista libre: zoom, giro y desplazamiento del usuario
    const kv = expo(dt, 9);
    vi.zoom += (vt.zoom - vi.zoom) * kv; vi.az += (vt.az - vi.az) * kv; vi.el += (vt.el - vi.el) * kv;
    vi.px += (vt.px - vi.px) * kv; vi.pz += (vt.pz - vi.pz) * kv;
    offV.copy(camPos).sub(camLook);
    lastBase = Math.max(200, offV.length());
    sph.setFromVector3(offV);
    sph.radius = lastBase * Math.max(vi.zoom, 110 / lastBase);
    sph.theta += vi.az;
    sph.phi = THREE.MathUtils.clamp(sph.phi + vi.el, 0.12, 1.5);
    offV.setFromSpherical(sph);
    const dist = offV.length();
    const libre = Math.abs(vt.zoom - 1) + Math.abs(vt.az) + Math.abs(vt.el) + Math.abs(vt.px) + Math.abs(vt.pz) > 0.001;
    const par = libre ? 0 : 1;
    camera.position.set(camLook.x + vi.px + offV.x + par * mouse.sx * dist * 0.012, camLook.y + offV.y - par * mouse.sy * dist * 0.008, camLook.z + vi.pz + offV.z);
    camera.lookAt(camLook.x + vi.px, camLook.y, camLook.z + vi.pz);
    // plano cercano proporcional a la distancia: evita el parpadeo (z-fighting) de superficies casi coplanares lejos de la cámara
    const nearW = THREE.MathUtils.clamp(dist * 0.02, 5, 250);
    if (Math.abs(nearW - camera.near) / camera.near > 0.1) { camera.near = nearW; camera.updateProjectionMatrix(); }

    // casas
    cur.casas += (T.casas - cur.casas) * expo(dt, 3);
    houseMat.opacity = cur.casas;
    houseMesh.visible = cur.casas > 0.02;
    const want = THREE.MathUtils.clamp(dist / 3800, 1, CASA_ESCALA);
    if (Math.abs(want - cur.escala) / cur.escala > 0.05) cur.escala = want;
    const yk = Math.round(cur.year * 2) / 2;
    const key = `${yk}|${T.modo}|${cur.escala.toFixed(2)}`;
    if (houseMesh.visible && key !== houseKey) { houseKey = key; updateHouses(yk, T.modo, cur.escala); }

    // árboles
    treesGroup.visible = dist < 3500 && cur.casas > 0.5;
    if (T.modo === 'despues' && treesGroup.visible && Math.round(cur.year) !== treesYear) {
      treesYear = Math.round(cur.year);
      scene.remove(treesGroup);
      treesGroup.traverse((o) => { if (o.isInstancedMesh) o.dispose(); });
      treesGroup = instanciarArboles(especies, treeAll.filter((tr) => tr.lostAt > cur.year), 60);
      scene.add(treesGroup);
    } else if (T.modo !== 'despues' && treesYear !== -1) {
      treesYear = -1;
      scene.remove(treesGroup);
      treesGroup.traverse((o) => { if (o.isInstancedMesh) o.dispose(); });
      treesGroup = instanciarArboles(especies, treeAll, 60);
      scene.add(treesGroup);
    }

    // vías
    const uw = clamp01((dist - 900) / 6000);
    for (const [nombre, r] of Object.entries(redes)) {
      const firma = `${T.capa}|${T.radio}`;
      const activa = T.red === nombre && T.calles > 0;
      if (activa && r.firma !== firma) {
        r.firma = firma;
        colorearRed(r, T.capa, T.radio);
        r.reveal = reduce ? 1 : 0;
      }
      const objetivo = activa ? T.calles : 0;
      r.op += (objetivo - r.op) * expo(dt, 4);
      if (activa) r.reveal = Math.min(1, r.reveal + dt * 0.7);
      const vis = r.op > 0.01;
      r.halo.visible = r.main.visible = vis;
      if (vis) {
        r.g.instanceCount = Math.max(1, Math.floor(r.N * r.reveal));
        r.main.material.opacity = r.op;
        r.halo.material.opacity = r.op * 0.55;
        r.main.material.linewidth = THREE.MathUtils.lerp(3.8, 2.3, uw) * (small ? 0.85 : 1);
        r.halo.material.linewidth = THREE.MathUtils.lerp(7.2, 4.6, uw) * (small ? 0.85 : 1);
      }
    }

    // muelles y rutas
    cur.rutas += (T.rutas - cur.rutas) * expo(dt, 3);
    rutasGroup.visible = cur.rutas > 0.01;
    if (rutasGroup.visible) {
      rutaMats.forEach((m) => { m.opacity = cur.rutas * 0.9; });
      beamMat.opacity = cur.rutas * 0.8;
      const h = THREE.MathUtils.clamp(dist * 0.05, 45, 700);
      beams.forEach((b) => { const k = b.userData.tipo === 'embarque' ? 1.5 : 1; b.scale.set(h * 0.011 * k, h * k, h * 0.011 * k); });
    }

    cur.contexto += (T.contexto - cur.contexto) * expo(dt, 2.2);
    contexto.visible = cur.contexto > 0.01;
    ctxMat.opacity = cur.contexto;
    etiquetas.visible = cur.contexto > 0.05;
    etiquetas.children.forEach((s) => { s.material.opacity = cur.contexto; });
    for (const k of PLAN_KEYS) planT[k] = (T.plan && T.plan[k]) || 0;
    actualizarPlan(dt, t, cur.escala);
    renderer.render(scene, camera);
    if (!shown) {
      shown = true;
      el.style.opacity = '1';
    }
  };
  raf = requestAnimationFrame(tick);
  cleanups.push(() => cancelAnimationFrame(raf));
  onProgreso(1, 'Listo');

  return {
    stats,
    datos: sintaxis,
    set(parcial) {
      if (parcial.cam && parcial.cam !== T.cam) resetVista();
      Object.assign(T, parcial);
    },
    alCambiarModelo(fn) { alCambiarModelo = fn; },
    vista: {
      zoom(f) { vt.zoom = THREE.MathUtils.clamp(vt.zoom * f, Math.max(0.01, 110 / lastBase), 1.8); },
      rotar(dx, dy) { vt.az -= dx * 0.006; vt.el -= dy * 0.005; },
      mover(dx, dy) {
        camera.getWorldDirection(dirV2);
        const fl = Math.hypot(dirV2.x, dirV2.z) || 1;
        const fx = dirV2.x / fl; const fz = dirV2.z / fl;
        const rx = -fz; const rz = fx;
        const s = camera.position.distanceTo(camLook) * 0.0016;
        vt.px += (-rx * dx + fx * dy) * s;
        vt.pz += (-rz * dx + fz * dy) * s;
      },
      reset: resetVista,
      activa: () => Math.abs(vt.zoom - 1) + Math.abs(vt.az) + Math.abs(vt.el) + Math.abs(vt.px) + Math.abs(vt.pz) > 0.001,
    },
    estado: T,
    anioActual: () => cur.year,
    dispose() {
      disposed = true;
      cleanups.forEach((fn) => fn());
    },
  };
}


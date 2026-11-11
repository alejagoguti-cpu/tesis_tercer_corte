// Silueta de la isla de Tierra Bomba desde la línea de costa de OpenStreetMap (natural=coastline), a la resolución
// de la ventana de la escena (≈4,7 m/px). Se compara con la silueta anterior (isla_mascara.png).
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import { leerPNG } from './_png.mjs';

const ROOT = path.resolve(import.meta.dirname, '..');
const costa = JSON.parse(fs.readFileSync(path.join(ROOT, 'fuente', 'costa_osm.json'), 'utf8'));
const MOS = { x0: 9502, y0: 15426 };
const WIN = { left: 231, top: 1734, w: 1445, h: 2578 };
const W = WIN.w; const H = WIN.h;
const n15 = 2 ** 15;
const tile = (lon, lat) => [((lon + 180) / 360) * n15, ((1 - Math.log(Math.tan((lat * Math.PI) / 180) + 1 / Math.cos((lat * Math.PI) / 180)) / Math.PI) / 2) * n15];
const px = (lon, lat) => { const [tx, ty] = tile(lon, lat); return [(tx - MOS.x0) * 256 - WIN.left, (ty - MOS.y0) * 256 - WIN.top]; };

// se trabaja sobre el mosaico completo (2560x4352) para que la costa no quede cortada por el borde de la ventana
const MW = 2560; const MH = 4352;
const pm = (lon, lat) => { const [tx, ty] = tile(lon, lat); return [(tx - MOS.x0) * 256, (ty - MOS.y0) * 256]; };
const barrera = new Uint8Array(MW * MH);
const RB = Number(process.argv[3] || 2); // radio del trazo de la barrera (cierra huecos de la costa)
const marca = (x, y) => { for (let dy = -RB; dy <= RB; dy++) for (let dx = -RB; dx <= RB; dx++) { const xx = Math.round(x) + dx; const yy = Math.round(y) + dy; if (xx >= 0 && yy >= 0 && xx < MW && yy < MH) barrera[yy * MW + xx] = 1; } };
for (const w of costa.elements) {
  const g = w.geometry || [];
  for (let i = 0; i < g.length - 1; i++) {
    const [x0, y0] = pm(g[i].lon, g[i].lat); const [x1, y1] = pm(g[i + 1].lon, g[i + 1].lat);
    const n = Math.max(1, Math.ceil(Math.hypot(x1 - x0, y1 - y0)));
    for (let k = 0; k <= n; k++) marca(x0 + ((x1 - x0) * k) / n, y0 + ((y1 - y0) * k) / n);
  }
}
const rellenar = (lleno, semillas, bloqueo) => {
  const pila = []; let total = 0;
  for (const [sx, sy] of semillas) { if (sx >= 0 && sy >= 0 && sx < MW && sy < MH && !bloqueo[sy * MW + sx] && !lleno[sy * MW + sx]) { lleno[sy * MW + sx] = 1; pila.push(sy * MW + sx); } }
  while (pila.length) {
    const c = pila.pop(); total++; const x = c % MW; const y = (c / MW) | 0;
    for (const [nx, ny] of [[x - 1, y], [x + 1, y], [x, y - 1], [x, y + 1]]) {
      if (nx < 0 || ny < 0 || nx >= MW || ny >= MH) continue;
      const m = ny * MW + nx;
      if (!bloqueo[m] && !lleno[m]) { lleno[m] = 1; pila.push(m); }
    }
  }
  return total;
};
// puntos que sabemos que son mar (oeste, este y bahía interior de la isla)
const mar = new Uint8Array(MW * MH);
// puntos de mar abierto, tomados en píxeles de la ventana (lejos de cualquier tierra) y llevados al mosaico
const semMar = [[1100, 1980], [660, 2200], [44, 1980], [1100, 88], [700, 2500], [1380, 2400]].map(([x, y]) => [x + WIN.left, y + WIN.top]);
console.log('mar relleno:', rellenar(mar, semMar, barrera), 'px');
// la isla: componente de tierra que contiene el interior (cerro central)
const noMar = new Uint8Array(MW * MH); for (let i = 0; i < MW * MH; i++) noMar[i] = mar[i];
const isla = new Uint8Array(MW * MH);
const [ix, iy] = pm(-75.572, 10.352).map(Math.round);
if (mar[iy * MW + ix]) throw new Error('la semilla de la isla cayó en el mar');
console.log('isla:', rellenar(isla, [[ix, iy]], noMar), 'px');
const tierra = new Uint8Array(W * H);
let nt = 0;
for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) { const v = isla[(y + WIN.top) * MW + (x + WIN.left)]; tierra[y * W + x] = v; nt += v; }
// el trazo de la barrera mide 2·RB+1 px: se erosiona para dejar el contorno justo sobre la línea de costa
for (let pasada = 0; pasada < RB; pasada++) {
  const copia = tierra.slice();
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    if (!copia[y * W + x]) continue;
    if (x === 0 || y === 0 || x === W - 1 || y === H - 1 || !copia[y * W + x - 1] || !copia[y * W + x + 1] || !copia[(y - 1) * W + x] || !copia[(y + 1) * W + x]) tierra[y * W + x] = 0;
  }
}
nt = 0; for (let i = 0; i < W * H; i++) nt += tierra[i];
console.log(`tierra (OSM): ${nt} px`);
// comparación con la silueta anterior
const vieja = leerPNG(path.join(ROOT, 'public/datos/isla_mascara.png'));
let nv = 0; let inter = 0; let soloVieja = 0; let soloNueva = 0;
const diff = new Uint8Array(W * H * 3);
for (let i = 0; i < W * H; i++) {
  const j = i * vieja.canales;
  const a = vieja.canales === 4 ? (vieja.datos[j + 3] < 255 ? vieja.datos[j + 3] : vieja.datos[j]) : vieja.datos[j];
  const v = a > 127 ? 1 : 0; nv += v;
  if (v && tierra[i]) { inter++; diff[i * 3] = diff[i * 3 + 1] = diff[i * 3 + 2] = 150; }
  else if (v) { soloVieja++; diff[i * 3] = 255; diff[i * 3 + 1] = 40; diff[i * 3 + 2] = 40; }
  else if (tierra[i]) { soloNueva++; diff[i * 3] = 40; diff[i * 3 + 1] = 200; diff[i * 3 + 2] = 255; }
  else { diff[i * 3] = diff[i * 3 + 1] = diff[i * 3 + 2] = 15; }
}
console.log(`silueta anterior: ${nv} px | coinciden: ${inter} | solo anterior (¿mar?): ${soloVieja} (${(100 * soloVieja / nv).toFixed(1)} %) | solo OSM: ${soloNueva}`);

const crc = (() => { const t = new Uint32Array(256); for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1; t[n] = c >>> 0; } return (b) => { let c = 0xffffffff; for (const v of b) c = t[(c ^ v) & 255] ^ (c >>> 8); return (c ^ 0xffffffff) >>> 0; }; })();
const chunk = (tipo, d) => { const len = Buffer.alloc(4); len.writeUInt32BE(d.length); const td = Buffer.concat([Buffer.from(tipo), d]); const c = Buffer.alloc(4); c.writeUInt32BE(crc(td)); return Buffer.concat([len, td, c]); };
const escribir = (ruta, canales, datos, ancho, alto) => {
  const ihdr = Buffer.alloc(13); ihdr.writeUInt32BE(ancho, 0); ihdr.writeUInt32BE(alto, 4); ihdr[8] = 8; ihdr[9] = canales === 3 ? 2 : 0;
  const raw = Buffer.alloc((ancho * canales + 1) * alto);
  for (let y = 0; y < alto; y++) { raw[y * (ancho * canales + 1)] = 0; Buffer.from(datos.buffer, datos.byteOffset + y * ancho * canales, ancho * canales).copy(raw, y * (ancho * canales + 1) + 1); }
  fs.writeFileSync(ruta, Buffer.concat([Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]), chunk('IHDR', ihdr), chunk('IDAT', zlib.deflateSync(raw, { level: 9 })), chunk('IEND', Buffer.alloc(0))]));
};
const gris = new Uint8Array(W * H); for (let i = 0; i < W * H; i++) gris[i] = tierra[i] ? 255 : 0;
escribir(path.join(ROOT, 'public/datos/isla_mascara_osm.png'), 1, gris, W, H);
escribir(path.join(process.argv[2] || ROOT, '_comparacion.png'), 3, diff, W, H);
console.log('escrito isla_mascara_osm.png y _comparacion.png');
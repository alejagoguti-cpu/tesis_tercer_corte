// Máscara de la tierra de Cartagena a partir de la línea de costa de OpenStreetMap (natural=coastline).
// Dibuja la costa como barrera, rellena el mar desde puntos conocidos y conserva solo el continente.
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';

const ROOT = path.resolve(import.meta.dirname, '..');
const RAW = path.join(ROOT, 'fuente', 'costa_osm.json');
const SALIDA = process.argv[2] || path.join(ROOT, 'public', 'datos', 'cartagena_mascara.png');
const MOS = { x0: 9502, y0: 15426, nx: 10, ny: 17 }; // mosaico z15 de la escena
const PPT = 64; // píxeles de máscara por tesela
const W = MOS.nx * PPT;
const H = MOS.ny * PPT;
const n15 = 2 ** 15;
const tile = (lon, lat) => [((lon + 180) / 360) * n15, ((1 - Math.log(Math.tan((lat * Math.PI) / 180) + 1 / Math.cos((lat * Math.PI) / 180)) / Math.PI) / 2) * n15];
const px = (lon, lat) => { const [tx, ty] = tile(lon, lat); return [(tx - MOS.x0) * PPT, (ty - MOS.y0) * PPT]; };
const lonOf = (tx) => (tx / n15) * 360 - 180;
const latOf = (ty) => (Math.atan(Math.sinh(Math.PI * (1 - (2 * ty) / n15))) * 180) / Math.PI;
const bbox = { w: lonOf(MOS.x0) - 0.01, e: lonOf(MOS.x0 + MOS.nx) + 0.01, n: latOf(MOS.y0) + 0.01, s: latOf(MOS.y0 + MOS.ny) - 0.01 };

if (!fs.existsSync(RAW)) {
  const q = `[out:json][timeout:90];way["natural"="coastline"](${bbox.s},${bbox.w},${bbox.n},${bbox.e});out geom;`;
  let ok = false;
  for (const ep of ['https://overpass.kumi.systems/api/interpreter', 'https://overpass-api.de/api/interpreter']) {
    try {
      const r = await fetch(ep, { method: 'POST', headers: { 'User-Agent': 'tesis-tierrabomba-academico/1.0', 'Content-Type': 'application/x-www-form-urlencoded' }, body: 'data=' + encodeURIComponent(q) });
      if (r.ok) { fs.writeFileSync(RAW, await r.text()); ok = true; break; }
    } catch { /* siguiente servidor */ }
  }
  if (!ok) throw new Error('No se pudo descargar la costa de OSM');
}
const costa = JSON.parse(fs.readFileSync(RAW, 'utf8'));
console.log('tramos de costa:', costa.elements.length);

const barrera = new Uint8Array(W * H);
const marca = (x, y) => {
  for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) {
    const xx = Math.round(x) + dx; const yy = Math.round(y) + dy;
    if (xx >= 0 && yy >= 0 && xx < W && yy < H) barrera[yy * W + xx] = 1;
  }
};
for (const w of costa.elements) {
  const g = w.geometry || [];
  for (let i = 0; i < g.length - 1; i++) {
    const [x0, y0] = px(g[i].lon, g[i].lat);
    const [x1, y1] = px(g[i + 1].lon, g[i + 1].lat);
    const n = Math.max(1, Math.ceil(Math.hypot(x1 - x0, y1 - y0)));
    for (let k = 0; k <= n; k++) marca(x0 + ((x1 - x0) * k) / n, y0 + ((y1 - y0) * k) / n);
  }
}

// mar: relleno desde puntos que sabemos que son agua
const mar = new Uint8Array(W * H);
const relleno = (sx, sy) => {
  if (sx < 0 || sy < 0 || sx >= W || sy >= H || barrera[sy * W + sx] || mar[sy * W + sx]) return 0;
  const pila = [sy * W + sx];
  mar[sy * W + sx] = 1;
  let n = 0;
  while (pila.length) {
    const c = pila.pop(); n++;
    const x = c % W; const y = (c / W) | 0;
    for (const [nx, ny] of [[x - 1, y], [x + 1, y], [x, y - 1], [x, y + 1]]) {
      if (nx < 0 || ny < 0 || nx >= W || ny >= H) continue;
      const m = ny * W + nx;
      if (!barrera[m] && !mar[m]) { mar[m] = 1; pila.push(m); }
    }
  }
  return n;
};
const semillasMar = [[-75.605, 10.40], [-75.60, 10.46], [-75.545, 10.395], [-75.52, 10.365], [-75.56, 10.34]];
for (const [lon, lat] of semillasMar) { const [x, y] = px(lon, lat); console.log('mar desde', lon, lat, '->', relleno(Math.round(x), Math.round(y)), 'px'); }

// continente: componente de tierra que contiene un punto tierra adentro de Cartagena
const cont = new Uint8Array(W * H);
{
  const [sx, sy] = px(-75.50, 10.43).map(Math.round);
  const pila = [sy * W + sx];
  if (mar[sy * W + sx]) throw new Error('la semilla de tierra cayó en el mar');
  cont[sy * W + sx] = 1;
  while (pila.length) {
    const c = pila.pop();
    const x = c % W; const y = (c / W) | 0;
    for (const [nx, ny] of [[x - 1, y], [x + 1, y], [x, y - 1], [x, y + 1]]) {
      if (nx < 0 || ny < 0 || nx >= W || ny >= H) continue;
      const m = ny * W + nx;
      if (!mar[m] && !cont[m]) { cont[m] = 1; pila.push(m); }
    }
  }
}
let tierra = 0;
for (let i = 0; i < W * H; i++) tierra += cont[i];
console.log(`tierra de Cartagena: ${(100 * tierra / (W * H)).toFixed(1)} % del mosaico`);

// suavizado leve del borde (caja 3x3) y PNG de 8 bits en gris
const gris = new Uint8Array(W * H);
for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
  let s = 0; let n = 0;
  for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) { const xx = x + dx; const yy = y + dy; if (xx >= 0 && yy >= 0 && xx < W && yy < H) { s += cont[yy * W + xx]; n++; } }
  gris[y * W + x] = Math.round((255 * s) / n);
}
const crc = (() => { const t = new Uint32Array(256); for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1; t[n] = c >>> 0; } return (b) => { let c = 0xffffffff; for (const v of b) c = t[(c ^ v) & 255] ^ (c >>> 8); return (c ^ 0xffffffff) >>> 0; }; })();
const chunk = (tipo, datos) => { const len = Buffer.alloc(4); len.writeUInt32BE(datos.length); const td = Buffer.concat([Buffer.from(tipo), datos]); const c = Buffer.alloc(4); c.writeUInt32BE(crc(td)); return Buffer.concat([len, td, c]); };
const ihdr = Buffer.alloc(13); ihdr.writeUInt32BE(W, 0); ihdr.writeUInt32BE(H, 4); ihdr[8] = 8; ihdr[9] = 0;
const raw = Buffer.alloc((W + 1) * H);
for (let y = 0; y < H; y++) { raw[y * (W + 1)] = 0; Buffer.from(gris.buffer, y * W, W).copy(raw, y * (W + 1) + 1); }
const png = Buffer.concat([Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]), chunk('IHDR', ihdr), chunk('IDAT', zlib.deflateSync(raw, { level: 9 })), chunk('IEND', Buffer.alloc(0))]);
fs.writeFileSync(SALIDA, png);
console.log('escrito', SALIDA, (png.length / 1024).toFixed(0), 'KB');
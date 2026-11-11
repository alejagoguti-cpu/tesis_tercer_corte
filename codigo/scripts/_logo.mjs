import { leerPNG } from './_png.mjs';
const m = leerPNG(process.argv[2]);
const { w, h, canales, datos } = m;
const v = (x, y) => (x < 0 || y < 0 || x >= w || y >= h ? 0 : datos[(y * w + x) * canales] > 127 ? 1 : 0);
let n1 = 0; for (let i = 0; i < w * h; i++) n1 += datos[i * canales] > 127 ? 1 : 0;
console.error('size', w, h, 'frac', (n1 / (w * h)).toFixed(3), 'canales', canales);
// reduce a rejilla 1/6 y toma el mayor componente
const S = 6; const gw = Math.ceil(w / S); const gh = Math.ceil(h / S);
const g = new Uint8Array(gw * gh);
for (let y = 0; y < gh; y++) for (let x = 0; x < gw; x++) g[y * gw + x] = v(x * S + 3, y * S + 3);
const lab = new Int32Array(gw * gh); const tam = [0]; let L = 0;
for (let i = 0; i < g.length; i++) {
  if (!g[i] || lab[i]) continue;
  L++; let t = 0; const pila = [i]; lab[i] = L;
  while (pila.length) { const c = pila.pop(); t++; const x = c % gw; const y = (c / gw) | 0; for (const [a, b] of [[x - 1, y], [x + 1, y], [x, y - 1], [x, y + 1]]) { if (a < 0 || b < 0 || a >= gw || b >= gh) continue; const k = b * gw + a; if (g[k] && !lab[k]) { lab[k] = L; pila.push(k); } } }
  tam[L] = t;
}
let best = 1; for (let i = 1; i <= L; i++) if (tam[i] > tam[best]) best = i;
const f = (x, y) => (x < 0 || y < 0 || x >= gw || y >= gh ? 0 : lab[y * gw + x] === best ? 1 : 0);
// seguimiento de contorno (Moore)
let sx = 0; let sy = 0; outer: for (let y = 0; y < gh; y++) for (let x = 0; x < gw; x++) if (f(x, y)) { sx = x; sy = y; break outer; }
const dirs = [[1, 0], [1, 1], [0, 1], [-1, 1], [-1, 0], [-1, -1], [0, -1], [1, -1]];
const pts = []; let cx = sx; let cy = sy; let d = 6; let guard = 0;
do {
  pts.push([cx, cy]);
  let ok = false;
  for (let k = 0; k < 8; k++) { const nd = (d + 6 + k) % 8; const nx = cx + dirs[nd][0]; const ny = cy + dirs[nd][1]; if (f(nx, ny)) { cx = nx; cy = ny; d = nd; ok = true; break; } }
  if (!ok) break;
} while ((cx !== sx || cy !== sy) && ++guard < 100000);
const dp = (p, e) => {
  if (p.length < 3) return p;
  const [ax, ay] = p[0]; const [bx, by] = p[p.length - 1]; let md = 0; let mi = 0;
  for (let i = 1; i < p.length - 1; i++) { const dd = Math.abs((by - ay) * p[i][0] - (bx - ax) * p[i][1] + bx * ay - by * ax) / (Math.hypot(by - ay, bx - ax) || 1); if (dd > md) { md = dd; mi = i; } }
  if (md > e) return [...dp(p.slice(0, mi + 1), e), ...dp(p.slice(mi), e).slice(1)];
  return [p[0], p[p.length - 1]];
};
const s = dp(pts, 1.4);
const xs = s.map((p) => p[0]); const ys = s.map((p) => p[1]);
const x0 = Math.min(...xs); const x1 = Math.max(...xs); const y0 = Math.min(...ys); const y1 = Math.max(...ys);
const sc = 26 / Math.max(x1 - x0, y1 - y0); const ox = 16 - ((x0 + x1) / 2) * sc; const oy = 16 - ((y0 + y1) / 2) * sc;
console.error('puntos', pts.length, '->', s.length, 'bbox', x1 - x0, y1 - y0);
console.log('M' + s.map(([x, y]) => `${(x * sc + ox).toFixed(1)} ${(y * sc + oy).toFixed(1)}`).join('L') + 'z');

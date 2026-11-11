// =============================================================================
// Sintaxis espacial de Tierra Bomba: análisis angular de segmentos (Tulip)
//
// Implementación propia en JavaScript del algoritmo de depthmapX
// (SpaceGroupUCL/depthmapX, salalib/segmmodules/segmtulip.cpp, GPL-3.0).
// NO se ejecutó la aplicación depthmapX: se reimplementó su lógica leyendo el código fuente.
//   - costo angular: 1024 contenedores de Tulip; 90° = 256 contenedores = 1 unidad
//   - radio métrico medido desde el punto medio del segmento origen hasta el punto medio del destino
//   - Integración angular = NC² / TD ; Elección = recorridos mínimos angulares que pasan por el segmento
//   - NAIN = NC^1,2 / (TD + 2) ; NACH = log(Elección + 1) / log(TD + 3)   (Hillier et al., 2012)
//
// Redes:  peatonal = todas las vías OSM;  motos = calles y caminos carreteables (sin sendas/peatonales/escaleras)
// Muelles: acceso de la red peatonal a los muelles mapeados en OSM (destinos ponderados).
// =============================================================================
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const leerJSON = (p) => JSON.parse(fs.readFileSync(p, 'utf8').replace(/^\uFEFF/, ''));
const FUENTE = path.join(ROOT, 'fuente');
const SALIDA = process.argv[2] || path.join(ROOT, 'public', 'datos', 'sintaxis.json');

const BINS = 1024;
const SEMI = BINS / 2; // 512 contenedores = 180°
const UNIT = SEMI / 2; // 256 contenedores = 90° = 1 unidad
const RADIOS = [400, 1200, -1]; // metros; -1 = global (radio n)

// ---------- proyección local ----------
const LAT0 = 10.35;
const LON0 = -75.575;
const KX = 111320 * Math.cos((LAT0 * Math.PI) / 180);
const KY = 110574;
const toXY = ([lon, lat]) => ({ x: (lon - LON0) * KX, y: (lat - LAT0) * KY });
const toLL = (p) => [LON0 + p.x / KX, LAT0 + p.y / KY];

// ---------- utilidades geométricas ----------
const dist = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);
function dp(pts, tol) {
  if (pts.length < 3) return pts.slice();
  const keep = new Uint8Array(pts.length);
  keep[0] = keep[pts.length - 1] = 1;
  const stack = [[0, pts.length - 1]];
  while (stack.length) {
    const [i, j] = stack.pop();
    let md = 0;
    let mk = -1;
    const a = pts[i];
    const b = pts[j];
    const L = dist(a, b) || 1e-9;
    for (let k = i + 1; k < j; k++) {
      const d = Math.abs((b.x - a.x) * (a.y - pts[k].y) - (a.x - pts[k].x) * (b.y - a.y)) / L;
      if (d > md) { md = d; mk = k; }
    }
    if (md > tol && mk > 0) { keep[mk] = 1; stack.push([i, mk], [mk, j]); }
  }
  return pts.filter((_, i) => keep[i]);
}
function project(p, a, b) {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const L2 = dx * dx + dy * dy || 1e-9;
  let t = ((p.x - a.x) * dx + (p.y - a.y) * dy) / L2;
  t = Math.max(0, Math.min(1, t));
  const q = { x: a.x + t * dx, y: a.y + t * dy };
  return { t, q, d: dist(p, q) };
}

// ---------- 1. lectura y topología de la red ----------
const vias = leerJSON(path.join(FUENTE, 'vias_tierra_bomba.json'));
const ways = vias.roads.map((r, i) => ({
  i, id: r.id, name: r.name || '', type: r.type, pts: dp(r.points.map(toXY), 2.0),
})).filter((w) => w.pts.length >= 2);

// empalmes: los extremos de cada vía se conectan con la vía más cercana (OSM recortada y simplificada)
const SNAP = 3.0;
const VTOL = 1.5;
const inserts = new Map(); // `${wayIdx}:${edgeIdx}` -> [{t,q}]
for (const w of ways) {
  for (const end of [0, w.pts.length - 1]) {
    const p = w.pts[end];
    let best = null;
    for (const o of ways) {
      if (o === w) continue;
      for (let k = 0; k < o.pts.length - 1; k++) {
        const pr = project(p, o.pts[k], o.pts[k + 1]);
        if (pr.d < SNAP && (!best || pr.d < best.d)) best = { ...pr, o, k };
      }
    }
    if (!best) continue;
    const a = best.o.pts[best.k];
    const b = best.o.pts[best.k + 1];
    if (dist(best.q, a) < VTOL) { w.pts[end] = { ...a }; continue; }
    if (dist(best.q, b) < VTOL) { w.pts[end] = { ...b }; continue; }
    w.pts[end] = { ...best.q };
    const key = `${best.o.i}:${best.k}`;
    if (!inserts.has(key)) inserts.set(key, []);
    inserts.get(key).push({ t: best.t, q: { ...best.q } });
  }
}
for (const w of ways) {
  const out = [];
  for (let k = 0; k < w.pts.length; k++) {
    out.push(w.pts[k]);
    const ins = inserts.get(`${w.i}:${k}`);
    if (ins && k < w.pts.length - 1) ins.sort((a, b) => a.t - b.t).forEach((s) => out.push({ ...s.q }));
  }
  w.pts = out;
}

// nodos: agrupar vértices a menos de 1,2 m
const nodes = [];
const grid = new Map();
const CELL = 1.2;
function nodeId(p) {
  const cx = Math.round(p.x / CELL);
  const cy = Math.round(p.y / CELL);
  for (let dx = -1; dx <= 1; dx++) {
    for (let dy = -1; dy <= 1; dy++) {
      const list = grid.get(`${cx + dx}_${cy + dy}`);
      if (!list) continue;
      for (const id of list) if (dist(nodes[id], p) < CELL) return id;
    }
  }
  const id = nodes.length;
  nodes.push({ x: p.x, y: p.y });
  const key = `${cx}_${cy}`;
  if (!grid.has(key)) grid.set(key, []);
  grid.get(key).push(id);
  return id;
}
const allEdges = [];
const seen = new Set();
for (const w of ways) {
  for (let k = 0; k < w.pts.length - 1; k++) {
    const a = nodeId(w.pts[k]);
    const b = nodeId(w.pts[k + 1]);
    if (a === b) continue;
    const key = a < b ? `${a}_${b}` : `${b}_${a}`;
    if (seen.has(key)) continue;
    seen.add(key);
    allEdges.push({ a, b, way: w.i, type: w.type, name: w.name, len: dist(nodes[a], nodes[b]) });
  }
}

// ---------- 2. grafo dual de segmentos y análisis de Tulip ----------
function buildNet(edges) {
  const E = edges.length;
  const inc = new Map(); // nodo -> [edge]
  edges.forEach((e, i) => {
    for (const n of [e.a, e.b]) { if (!inc.has(n)) inc.set(n, []); inc.get(n).push(i); }
  });
  // estado s = 2*e + (dir === +1 ? 0 : 1);  dir +1: a -> b
  const adj = Array.from({ length: 2 * E }, () => []);
  const head = (e, dir) => {
    const A = nodes[edges[e].a];
    const B = nodes[edges[e].b];
    const dx = dir === 1 ? B.x - A.x : A.x - B.x;
    const dy = dir === 1 ? B.y - A.y : A.y - B.y;
    const L = Math.hypot(dx, dy) || 1;
    return [dx / L, dy / L];
  };
  for (let e = 0; e < E; e++) {
    for (const dir of [1, -1]) {
      const exit = dir === 1 ? edges[e].b : edges[e].a;
      const [hx, hy] = head(e, dir);
      for (const f of inc.get(exit)) {
        if (f === e) continue;
        const fdir = edges[f].a === exit ? 1 : -1;
        const [gx, gy] = head(f, fdir);
        const dev = Math.acos(Math.max(-1, Math.min(1, hx * gx + hy * gy))); // 0 = recto
        adj[2 * e + (dir === 1 ? 0 : 1)].push([2 * f + (fdir === 1 ? 0 : 1), Math.floor((dev / Math.PI) * SEMI)]);
      }
    }
  }
  // componentes conexas
  const comp = new Int32Array(E).fill(-1);
  let nc = 0;
  for (let s = 0; s < E; s++) {
    if (comp[s] >= 0) continue;
    const st = [s];
    comp[s] = nc;
    while (st.length) {
      const e = st.pop();
      for (const st2 of [2 * e, 2 * e + 1]) {
        for (const [t] of adj[st2]) {
          const f = t >> 1;
          if (comp[f] < 0) { comp[f] = nc; st.push(f); }
        }
      }
    }
    nc++;
  }
  return { E, edges, adj, comp, nComp: nc };
}

// cola binaria (costo, orden de inserción)
class Heap {
  constructor() { this.h = []; this.seq = 0; }
  push(cost, s, prev, metric) { this.h.push([cost, this.seq++, s, prev, metric]); this._up(this.h.length - 1); }
  pop() {
    const top = this.h[0];
    const last = this.h.pop();
    if (this.h.length) { this.h[0] = last; this._down(0); }
    return top;
  }
  get size() { return this.h.length; }
  _less(i, j) { const a = this.h[i]; const b = this.h[j]; return a[0] < b[0] || (a[0] === b[0] && a[1] < b[1]); }
  _up(i) { while (i > 0) { const p = (i - 1) >> 1; if (!this._less(i, p)) break; [this.h[i], this.h[p]] = [this.h[p], this.h[i]]; i = p; } }
  _down(i) {
    const n = this.h.length;
    for (;;) {
      let m = i;
      const l = 2 * i + 1;
      const r = l + 1;
      if (l < n && this._less(l, m)) m = l;
      if (r < n && this._less(r, m)) m = r;
      if (m === i) break;
      [this.h[i], this.h[m]] = [this.h[m], this.h[i]];
      i = m;
    }
  }
}

// Árbol de recorridos mínimos angulares desde el segmento `root` (equivale a una pasada de SegmentTulip::run)
function tulipTree(net, root, radius) {
  const { E, edges, adj } = net;
  const depth = new Int32Array(2 * E).fill(-1);
  const prev = new Int32Array(2 * E).fill(-1);
  const leaf = new Uint8Array(2 * E).fill(1);
  const done = new Uint8Array(2 * E);
  const heap = new Heap();
  const len0 = edges[root].len;
  // el origen cubre ambos sentidos con profundidad 0
  done[2 * root] = done[2 * root + 1] = 1;
  depth[2 * root] = depth[2 * root + 1] = 0;
  const relax = (s, cost, metric) => {
    for (const [t, bins] of adj[s]) {
      if (done[t]) continue;
      const f = t >> 1;
      if (radius > 0 && metric + edges[f].len * 0.5 > radius) continue;
      heap.push(cost + bins, t, s, metric + edges[f].len);
    }
  };
  relax(2 * root, 0, 0.5 * len0);
  relax(2 * root + 1, 0, 0.5 * len0);
  const order = [];
  while (heap.size) {
    const [cost, , s, p, metric] = heap.pop();
    if (done[s]) continue;
    done[s] = 1;
    depth[s] = cost;
    prev[s] = p;
    if (p >= 0) leaf[p] = 0;
    order.push(s);
    relax(s, cost, metric);
  }
  return { depth, prev, leaf, done, order };
}

function analizar(net, radios) {
  const { E, comp } = net;
  const out = radios.map(() => ({
    nc: new Float64Array(E), td: new Float64Array(E), ch: new Float64Array(E),
  }));
  for (let root = 0; root < E; root++) {
    radios.forEach((radius, ri) => {
      const T = tulipTree(net, root, radius);
      let nc = 1;
      let td = 0;
      const choiceOf = new Float64Array(2 * E);
      const covered = new Uint8Array(2 * E);
      for (let j = 0; j < E; j++) {
        if (j === root) continue;
        const m0 = T.done[2 * j] && T.depth[2 * j] >= 0 && T.prev[2 * j] >= 0;
        const m1 = T.done[2 * j + 1] && T.depth[2 * j + 1] >= 0 && T.prev[2 * j + 1] >= 0;
        if (!m0 && !m1) continue;
        const s = m0 && m1 ? (T.depth[2 * j] < T.depth[2 * j + 1] ? 2 * j : 2 * j + 1) : m0 ? 2 * j : 2 * j + 1;
        nc++;
        td += T.depth[s];
        if (T.leaf[s]) {
          let here = s;
          let cnt = 0;
          while (here >= 0 && (here >> 1) !== root) {
            choiceOf[here] += cnt;
            if (!covered[here]) { cnt++; covered[here] = 1; }
            here = T.prev[here];
          }
        }
      }
      const o = out[ri];
      o.nc[root] = nc;
      o.td[root] = nc > 1 ? td / UNIT : 0;
      for (let j = 0; j < E; j++) o.ch[j] += choiceOf[2 * j] + choiceOf[2 * j + 1];
    });
  }
  const res = radios.map((_, ri) => {
    const o = out[ri];
    const nain = new Float64Array(E);
    const nach = new Float64Array(E);
    for (let e = 0; e < E; e++) {
      if (o.nc[e] > 1 && o.td[e] > 0) {
        nain[e] = Math.pow(o.nc[e], 1.2) / (o.td[e] + 2);
        nach[e] = Math.log(o.ch[e] + 1) / Math.log(o.td[e] + 3);
      }
    }
    return { nc: o.nc, td: o.td, ch: o.ch, nain, nach };
  });
  return res;
}

// ---------- 3. redes ----------
const MOTO = new Set(['residential', 'unclassified', 'service', 'track']);
function subred(filter) {
  const edges = allEdges.filter(filter).map((e) => ({ ...e }));
  return buildNet(edges);
}
const nets = {
  peatonal: subred(() => true),
  motos: subred((e) => MOTO.has(e.type)),
};

function resumenRed(net, res, label) {
  const { edges, comp, nComp } = net;
  const km = edges.reduce((s, e) => s + e.len, 0) / 1000;
  const sizes = Array.from({ length: nComp }, (_, c) => comp.filter((x) => x === c).length);
  console.log(`${label}: ${edges.length} segmentos, ${km.toFixed(2)} km, ${nComp} componentes (mayor: ${Math.max(...sizes)})`);
  return { km, sizes };
}

// ---------- 4. salida ----------
const round = (v, d = 3) => Math.round(v * 10 ** d) / 10 ** d;
const salida = {
  meta: {
    metodo: 'Análisis angular de segmentos (Tulip) reimplementado en JavaScript a partir del código de depthmapX (GPL-3.0). No se ejecutó la aplicación depthmapX.',
    bins: BINS,
    radios_m: RADIOS,
    fuente_vias: vias.source,
    cobertura_vias: vias.coverage,
    fecha_vias: vias.retrieved_at,
    nota_motos: 'Red de motos = calles y caminos con etiqueta OSM residential, unclassified, service y track. No incluye path, footway, steps ni pedestrian.',
    nota_peatonal: 'Red peatonal = todas las vías OSM disponibles.',
  },
};

for (const [modo, net] of Object.entries(nets)) {
  console.log(`\n== ${modo}`);
  const t0 = Date.now();
  const res = analizar(net, RADIOS);
  console.log(`   analizado en ${((Date.now() - t0) / 1000).toFixed(1)} s`);
  const { km, sizes } = resumenRed(net, res, modo);
  const { edges, comp } = net;
  const mayor = sizes.indexOf(Math.max(...sizes));

  // ranking por nombre (media ponderada por longitud) en radio global
  const rg = res[res.length - 1];
  const porNombre = new Map();
  edges.forEach((e, i) => {
    if (!e.name || comp[i] !== mayor) return;
    const o = porNombre.get(e.name) || { len: 0, nain: 0, nach: 0 };
    o.len += e.len; o.nain += rg.nain[i] * e.len; o.nach += rg.nach[i] * e.len;
    porNombre.set(e.name, o);
  });
  const rank = (k) => [...porNombre.entries()].map(([n, o]) => ({ nombre: n, valor: o[k] / o.len, largo: o.len }))
    .filter((r) => r.largo >= 60).sort((a, b) => b.valor - a.valor).slice(0, 5).map((r) => ({ nombre: r.nombre, valor: round(r.valor, 3), largo_m: Math.round(r.largo) }));

  salida[modo] = {
    segmentos: edges.length,
    km: round(km, 2),
    componentes: net.nComp,
    mayor_componente: Math.max(...sizes),
    coords: edges.map((e) => { const A = toLL(nodes[e.a]); const B = toLL(nodes[e.b]); return [round(A[0], 6), round(A[1], 6), round(B[0], 6), round(B[1], 6)]; }),
    tipo: edges.map((e) => e.type),
    nombre: edges.map((e) => e.name),
    largo_m: edges.map((e) => round(e.len, 1)),
    comp: Array.from(comp),
    mayor_comp: mayor,
    medidas: Object.fromEntries(RADIOS.map((r, ri) => [r === -1 ? 'n' : String(r), {
      nain: Array.from(res[ri].nain, (v) => round(v, 3)),
      nach: Array.from(res[ri].nach, (v) => round(v, 3)),
      ch: Array.from(res[ri].ch, (v) => Math.round(v)),
    }])),
    top_integracion: rank('nain'),
    top_eleccion: rank('nach'),
  };
  console.log('   top integración (n):', salida[modo].top_integracion.map((t) => `${t.nombre} ${t.valor}`).join(' | '));
  console.log('   top elección (n):   ', salida[modo].top_eleccion.map((t) => `${t.nombre} ${t.valor}`).join(' | '));
}

// ---------- 5. acceso a muelles (red peatonal, destinos = muelles OSM sobre la isla) ----------
{
  const net = nets.peatonal;
  const { edges, adj, comp } = net;
  const muelles = leerJSON(path.join(FUENTE, 'muelles_osm.json'));
  const dest = [];
  for (const m of muelles) {
    const pts = m.pts.map(toXY);
    let best = null;
    edges.forEach((e, i) => {
      for (const p of pts) {
        const pr = project(p, nodes[e.a], nodes[e.b]);
        if (!best || pr.d < best.d) best = { d: pr.d, i, p, q: pr.q };
      }
    });
    if (best && best.d <= 120) dest.push({ id: m.id, name: m.name || '', seg: best.i, d: best.d, ll: toLL(pts[Math.floor(pts.length / 2)]) });
  }
  const segs = [...new Set(dest.map((d) => d.seg))];
  console.log(`\n== muelles: ${dest.length} de ${muelles.length} quedan a ≤120 m de la red peatonal (${segs.length} segmentos destino)`);

  // distancia métrica mínima y profundidad angular mínima hacia los muelles, y elección hacia muelles
  const E = net.E;
  const dmu = new Float64Array(E).fill(Infinity);
  const adm = new Float64Array(E).fill(Infinity);
  const cmu = new Float64Array(E);
  const nodeEdges = new Map();
  edges.forEach((e, i) => { for (const n of [e.a, e.b]) { if (!nodeEdges.has(n)) nodeEdges.set(n, []); nodeEdges.get(n).push(i); } });
  for (const root of segs) {
    // métrica: Dijkstra por longitud entre puntos medios
    const dm = new Float64Array(E).fill(Infinity);
    dm[root] = 0;
    const heap = new Heap();
    heap.push(0, root, -1, 0);
    while (heap.size) {
      const [c, , s] = heap.pop();
      if (c > dm[s]) continue;
      for (const n of [edges[s].a, edges[s].b]) {
        for (const f of nodeEdges.get(n)) {
          if (f === s) continue;
          const nc2 = c + (edges[s].len + edges[f].len) / 2;
          if (nc2 < dm[f]) { dm[f] = nc2; heap.push(nc2, f, s, 0); }
        }
      }
    }
    // angular + elección (todas las rutas de los orígenes hacia este muelle)
    const T = tulipTree(net, root, -1);
    const sub = new Float64Array(2 * E);
    for (let k = T.order.length - 1; k >= 0; k--) {
      const s = T.order[k];
      sub[s] += 1;
      const p = T.prev[s];
      if (p >= 0 && (p >> 1) !== root) sub[p] += sub[s];
    }
    for (let j = 0; j < E; j++) {
      if (dm[j] < dmu[j]) dmu[j] = dm[j];
      const best = Math.min(T.done[2 * j] ? T.depth[2 * j] : Infinity, T.done[2 * j + 1] ? T.depth[2 * j + 1] : Infinity);
      if (best / UNIT < adm[j]) adm[j] = best / UNIT;
      if (j !== root) cmu[j] += Math.max(0, sub[2 * j] + sub[2 * j + 1] - 1);
    }
  }
  const maxC = Math.max(...cmu) || 1;
  salida.muelles = {
    nota: 'Destinos = muelles/espolones mapeados en OpenStreetMap a ≤120 m de la red peatonal. Acceso medido sobre la red peatonal.',
    puntos: dest.map((d) => ({ id: d.id, nombre: d.name, lon: round(d.ll[0], 6), lat: round(d.ll[1], 6), seg: d.seg })),
    dist_m: Array.from(dmu, (v) => (Number.isFinite(v) ? Math.round(v) : -1)),
    prof_ang: Array.from(adm, (v) => (Number.isFinite(v) ? round(v, 2) : -1)),
    eleccion: Array.from(cmu, (v) => round(v / maxC, 4)),
    eleccion_max: Math.round(maxC),
  };
  const lejos = Array.from(dmu).filter((v) => Number.isFinite(v));
  console.log(`   distancia mediana a muelle: ${Math.round(lejos.sort((a, b) => a - b)[Math.floor(lejos.length / 2)])} m, máx ${Math.round(lejos[lejos.length - 1])} m`);
}

// ---------- 6. rutas esquemáticas de lanchas (solo se dibujan) ----------
const rl = leerJSON(path.join(FUENTE, 'rutas_lanchas_esquematicas.json'));
salida.rutas_lanchas = rl.rutas.map((r) => ({ id: r.id, nombre: r.name, descripcion: r.description, fuente: r.source, puntos: r.points }));
salida.sectores = rl.sectores;

fs.mkdirSync(path.dirname(SALIDA), { recursive: true });
fs.writeFileSync(SALIDA, JSON.stringify(salida));
console.log(`\nescrito ${SALIDA} (${(fs.statSync(SALIDA).size / 1024).toFixed(0)} KB)`);



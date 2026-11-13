// Lector de Workspace_1_graphstore_bytes (Gephi 0.11 GraphStore): nodos y aristas con sus atributos.
// Cadenas: 0x67 + longitud (varint, en caracteres) + caracteres (varint por código). Nulos: byte 0x00.
import fs from 'node:fs';
const b = fs.readFileSync(process.argv[2]);
const start = Number(process.argv[3] || 1466);
const leerStr = (pos) => {
  if (b[pos] !== 0x67) return null;
  let q = pos + 1; let n = 0; let s = 0; let c;
  do { c = b[q++]; n |= (c & 0x7f) << s; s += 7; } while ((c & 0x80) && q < b.length);
  if (n > 500) return null;
  let str = '';
  for (let i = 0; i < n; i++) { let v = 0; let sh = 0; let d; do { d = b[q++]; v |= (d & 0x7f) << sh; sh += 7; } while ((d & 0x80) && q < b.length); str += String.fromCharCode(v); }
  return [str, q];
};
// flujo de elementos: {s:'texto'} o {b:byte}
const items = [];
let p = start;
while (p < b.length) {
  const r = leerStr(p);
  if (r && (r[0] === '' || /[A-Za-z0-9ÁÉÍÓÚáéíóúñÑ(¿¡"«]/.test(r[0][0]))) { items.push({ s: r[0], at: p }); p = r[1]; }
  else { items.push({ b: b[p], at: p }); p++; }
}
const esId = (s) => /^[A-Z]{1,3}-?[A-Z]?\d{1,4}$/.test(s);
const decId = (arr, i) => (arr[i] === 0x0e ? [arr[i + 1] + 5, 2] : [arr[i], 1]);

const nodos = []; const aristas = [];
let i = 0;
const tomar = (n, nombres) => { // llena n campos; una cadena = valor, un 0x00 = nulo
  const o = {};
  for (const k of nombres) {
    const it = items[i];
    if (it && it.s !== undefined) { o[k] = it.s; i++; }
    else if (it && it.b === 0x00) { o[k] = null; i++; }
    else break;
  }
  return o;
};
while (i < items.length) {
  const it = items[i];
  if (it.s === undefined || !esId(it.s)) { i++; continue; }
  // cabecera: id, bytes..., 49 0c (nodo) / 49 0b (arista), id otra vez
  const id = it.s; let j = i + 1; const head = [];
  while (items[j] && items[j].b !== undefined && head.length < 14) { head.push(items[j].b); j++; }
  if (!items[j] || items[j].s !== id) { i++; continue; }
  const esNodo = head.length >= 2 && head[head.length - 2] === 0x49 && head[head.length - 1] === 0x0c;
  const esArista = head.length >= 2 && head[head.length - 2] === 0x49 && head[head.length - 1] === 0x0b;
  if (!esNodo && !esArista) { i++; continue; }
  i = j + 1;
  if (esNodo) {
    const [sid] = decId(head, 0);
    const o = { id, sid, ...tomar(0, ['label']) };
    // timeset (00) y resto
    if (items[i] && items[i].b === 0x00) i++;
    Object.assign(o, tomar(0, ['red', 'tipo_agente', 'nivel', 'decide', 'id_matriz', 'estado', 'espacio_ref', 'latitude', 'longitude']));
    nodos.push(o);
  } else {
    const [src, n1] = decId(head, 0); const [dst] = decId(head, n1);
    const o = { id, src, dst, ...tomar(0, ['label']) };
    // timeset (00) y peso: el bloque <00 31> viene como bytes
    while (items[i] && items[i].b !== undefined && items[i].b !== undefined && (items[i].b === 0x00 || items[i].b === 0x31)) { if (items[i].b === 0x31) o.pesoByte = 0x31; i++; if (o.pesoByte) break; }
    Object.assign(o, tomar(0, ['tag', 'red', 'estado', 'fuente', 'tipo_conexion', 'red_origen', 'red_destino']));
    aristas.push(o);
  }
}
const porSid = new Map(nodos.map((n) => [n.sid, n]));
aristas.forEach((a) => { a.fuenteId = porSid.get(a.src)?.id; a.destinoId = porSid.get(a.dst)?.id; });
fs.writeFileSync(process.argv[4] || 'red.json', JSON.stringify({ nodos, aristas }, null, 1));
console.log('nodos', nodos.length, 'aristas', aristas.length);
console.log('aristas sin nodo:', aristas.filter((a) => !a.fuenteId || !a.destinoId).length);
const cuenta = (arr, k) => arr.reduce((m, x) => ((m[x[k]] = (m[x[k]] || 0) + 1), m), {});
console.log('red nodos', JSON.stringify(cuenta(nodos, 'red')));
console.log('tipo_agente', JSON.stringify(cuenta(nodos, 'tipo_agente')));
console.log('nivel', JSON.stringify(cuenta(nodos, 'nivel')));
console.log('arista tag', JSON.stringify(cuenta(aristas, 'tag')), 'red', JSON.stringify(cuenta(aristas, 'red')));
console.log('tipo_conexion', JSON.stringify(cuenta(aristas, 'tipo_conexion')));

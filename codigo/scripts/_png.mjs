import fs from 'node:fs';
import zlib from 'node:zlib';
// Decodificador mínimo de PNG (8 bits, sin entrelazado): devuelve {w,h,canales,datos}
export function leerPNG(ruta) {
  const b = fs.readFileSync(ruta);
  let p = 8; let w = 0; let h = 0; let ct = 0; let bd = 8; const idat = [];
  while (p < b.length) {
    const len = b.readUInt32BE(p); const tipo = b.toString('ascii', p + 4, p + 8);
    const d = b.subarray(p + 8, p + 8 + len);
    if (tipo === 'IHDR') { w = d.readUInt32BE(0); h = d.readUInt32BE(4); bd = d[8]; ct = d[9]; }
    else if (tipo === 'IDAT') idat.push(d);
    p += 12 + len;
  }
  if (bd !== 8) throw new Error('solo 8 bits');
  const canales = { 0: 1, 2: 3, 4: 2, 6: 4 }[ct];
  if (!canales) throw new Error('tipo de color no soportado ' + ct);
  const raw = zlib.inflateSync(Buffer.concat(idat));
  const stride = w * canales;
  const out = Buffer.alloc(h * stride);
  for (let y = 0; y < h; y++) {
    const f = raw[y * (stride + 1)];
    const fila = raw.subarray(y * (stride + 1) + 1, (y + 1) * (stride + 1));
    for (let x = 0; x < stride; x++) {
      const a = x >= canales ? out[y * stride + x - canales] : 0;
      const u = y > 0 ? out[(y - 1) * stride + x] : 0;
      const c = x >= canales && y > 0 ? out[(y - 1) * stride + x - canales] : 0;
      let v = fila[x];
      if (f === 1) v += a; else if (f === 2) v += u; else if (f === 3) v += (a + u) >> 1;
      else if (f === 4) { const pp = a + u - c; const pa = Math.abs(pp - a); const pb = Math.abs(pp - u); const pc = Math.abs(pp - c); v += pa <= pb && pa <= pc ? a : pb <= pc ? u : c; }
      out[y * stride + x] = v & 255;
    }
  }
  return { w, h, canales, datos: out };
}
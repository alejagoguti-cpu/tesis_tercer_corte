import React from 'react';
import { MESETA, ESCUELA, VIVIENDAS, PARQUE, HUMEDAL, VIAS, CORREDORES, PROGRAMA, CRITERIOS, aMetros, elipse, PARQUE_RADIOS, HUMEDAL_RADIOS } from '../lib/plan.js';

const clamp01 = (x) => Math.max(0, Math.min(1, x));

/** pasos del plan maestro: cámara y capas que se encienden */
export const PLAN_PASOS = [
  { id: 'estrategia', corto: 'Estrategia', titulo: 'No luchar contra el mar: retirarse con orden', cam: 'plan_general' },
  { id: 'meseta', corto: 'La meseta', titulo: 'Suelo firme a +22 m', cam: 'plan_meseta' },
  { id: 'reubicar', corto: 'Reubicar', titulo: 'Las casas viajan a la meseta', cam: 'plan_general' },
  { id: 'vivienda', corto: 'Vivienda progresiva', titulo: 'Una vivienda que crece', cam: 'plan_meseta' },
  { id: 'escuela', corto: 'Colegio y agua', titulo: 'El techo del colegio recoge la lluvia', cam: 'plan_escuela' },
  { id: 'recorridos', corto: 'Recorridos', titulo: 'Vías y corredores ecológicos', cam: 'plan_vias' },
  { id: 'parque', corto: 'Parque ecológico', titulo: 'El borde se vuelve parque', cam: 'plan_parque' },
  { id: 'sintesis', corto: 'Síntesis', titulo: 'El plan completo', cam: 'plan_general' },
];

/** estado de la escena para el paso i, con avance local lf (0..1) dentro del paso */
export function planEstado(i, lf) {
  const g = (n) => (i > n ? 1 : 0);
  const e = { franja: 1, etiq: 1, meseta: i >= 1 ? 1 : 0 };
  e.vuelo = i === 2 ? clamp01(lf * 1.25) : i > 2 ? 1 : 0;
  e.viviendas = i === 3 ? clamp01(lf * 1.2) : i > 3 ? 1 : 0;
  e.escuela = i === 4 ? 1 : i > 4 ? 1 : 0;
  e.lluvia = i === 4 ? clamp01(lf * 1.7) : g(4);
  e.vias = i === 5 ? clamp01(lf * 2) : g(5);
  e.corredores = i === 5 ? clamp01(lf * 2 - 0.7) : g(5);
  e.parque = i >= 6 ? 1 : 0;
  e.humedal = i >= 6 ? 1 : 0;
  return e;
}

/* ---------- esquema básico en planta ---------- */
export function EsquemaPlan() {
  const pts = (arr) => arr.map(aMetros);
  const mes = pts(MESETA);
  const parque = elipse(PARQUE, PARQUE_RADIOS[0], PARQUE_RADIOS[1]);
  const hum = elipse(HUMEDAL, HUMEDAL_RADIOS[0], HUMEDAL_RADIOS[1]);
  // se recorta lo que sale del encuadre (la arterial y la colectora siguen fuera de la hoja)
  const XMAX = 300; const YMAX = 330;
  const recortar = (arr) => {
    const out = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
      const [ax, ay] = arr[i - 1]; const [bx, by] = arr[i];
      const t = Math.min(1, bx > XMAX ? (XMAX - ax) / (bx - ax) : 1, by > YMAX ? (YMAX - ay) / (by - ay) : 1);
      if (t <= 0) break;
      out.push([ax + (bx - ax) * t, ay + (by - ay) * t]);
      if (t < 1) break;
    }
    return out;
  };
  const vias = VIAS.map((v) => {
    let p = pts(v.pts);
    if (v.id === 'arterial') p = recortar([...p].reverse()).reverse(); // se dibuja desde el borde superior hacia el colegio
    else if (v.id === 'colectora') p = recortar(p);
    return { ...v, p };
  });
  const corr = CORREDORES.map((c) => ({ ...c, a: aMetros(c.desde), b: recortar([aMetros(c.desde), aMetros(c.hasta)])[1] }));
  const esc = aMetros(ESCUELA);
  const cen = mes.reduce((s, p) => [s[0] + p[0] / mes.length, s[1] + p[1] / mes.length], [0, 0]);
  const dentro = ([x, y]) => { let c = false; for (let i = 0, j = mes.length - 1; i < mes.length; j = i++) { const [xi, yi] = mes[i]; const [xj, yj] = mes[j]; if ((yi > y) !== (yj > y) && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) c = !c; } return c; };
  const casas = [];
  for (let r = -14; r <= 14; r++) for (let c = -14; c <= 14; c++) { const q = [cen[0] + c * 15, cen[1] + r * 15]; if (dentro(q) && Math.hypot(q[0] - esc[0], q[1] - esc[1]) > 55) casas.push(q); }
  casas.sort((a, b) => Math.hypot(a[0] - cen[0], a[1] - cen[1]) - Math.hypot(b[0] - cen[0], b[1] - cen[1]));
  casas.length = Math.min(casas.length, PROGRAMA.viviendas);
  const viv = [Math.min(...casas.map((q) => q[0])), Math.max(...casas.map((q) => q[1]))];
  const todos = [...mes, ...parque, ...vias.flatMap((v) => v.p), corr[1].b];
  const x0 = Math.min(...todos.map((p) => p[0])) - 40; const x1 = Math.max(...todos.map((p) => p[0])) + 60;
  const y0 = Math.min(...todos.map((p) => p[1])) - 40; const y1 = Math.max(...todos.map((p) => p[1])) + 50;
  const W = x1 - x0; const H = y1 - y0;
  const P = ([x, y]) => `${(x - x0).toFixed(1)},${(y1 - y).toFixed(1)}`;
  const poli = (arr) => arr.map(P).join(' ');
  const X = (x) => x - x0; const Y = (y) => y1 - y;
  const sx = 30; const sy = 62; // escala gráfica de 200 m

  return (
    <svg viewBox={`0 0 ${W.toFixed(0)} ${H.toFixed(0)}`} className="h-auto w-full" role="img" aria-label="Esquema básico en planta del plan maestro: meseta, vías, colegio, viviendas, parque ecológico y humedal">
      <rect width={W} height={H} fill="#e9e4da" />
      <text x="10" y="22" fill="#0b1015" opacity="0.5" fontSize="13" fontFamily="Geist Mono, monospace">← COSTA OESTE</text>
      <polygon points={poli(parque)} fill="#5e9c6b" opacity="0.5" stroke="#3b7a4b" strokeWidth="1.5" />
      <polygon points={poli(hum)} fill="#4a8fbf" opacity="0.7" stroke="#2f6f9f" strokeWidth="1.2" />
      <polygon points={poli(mes)} fill="#d8ccb4" stroke="#1d6f6a" strokeWidth="2.5" />
      {corr.map((c) => (
        <line key={c.id} x1={X(c.a[0])} y1={Y(c.a[1])} x2={X(c.b[0])} y2={Y(c.b[1])} stroke="#2f9a63" strokeWidth="3" strokeDasharray="9 6" />
      ))}
      {vias.map((v) => (
        <polyline key={v.id} points={poli(v.p)} fill="none" stroke="#b8791f" strokeWidth={v.id === 'anular' ? 3 : 4} strokeLinejoin="round" strokeDasharray={v.id === 'anular' ? '0' : '0'} />
      ))}
      {casas.map(([x, y], i) => <rect key={i} x={X(x) - 5} y={Y(y) - 4} width="10" height="8" fill="#c86d51" />)}
      <rect x={X(esc[0]) - 35} y={Y(esc[1]) - 12} width="70" height="24" fill="#0b1015" />
      <circle cx={X(esc[0] + 52)} cy={Y(esc[1] + 14)} r="11" fill="none" stroke="#0b1015" strokeWidth="2" />
      {/* rótulos */}
      <g fontFamily="Geist, sans-serif" fontSize="19" fontWeight="600" fill="#0b1015" stroke="#e9e4da" strokeWidth="4" paintOrder="stroke">
        <text x={X(viv[0]) + 10} y={Y(viv[1]) - 14}>120 viviendas</text>
        <text x={X(esc[0]) + 42} y={Y(esc[1]) + 40}>Complejo educativo</text>
        <text x={X(mes[0][0]) + 20} y={Y(mes[0][1]) - 16}>Meseta +22 m</text>
        <text x={X(aMetros(PARQUE)[0]) - 70} y={Y(aMetros(PARQUE)[1]) + 110} fill="#2b5e38">Parque ecológico</text>
        <text x={X(aMetros(HUMEDAL)[0]) + 56} y={Y(aMetros(HUMEDAL)[1]) + 6} fill="#1f5a86" fontSize="16">Humedal</text>
        <text x={X(vias[0].p[0][0]) + 14} y={Y(vias[0].p[0][1]) + 12} fill="#8a5a10" fontSize="16">↑ Vía arterial, desde el asentamiento</text>
        <text x={X(vias[2].p[vias[2].p.length - 1][0]) - 215} y={Y(vias[2].p[vias[2].p.length - 1][1]) + 30} fill="#8a5a10" fontSize="16">Vía colectora → Caño del Oro</text>
        <text x={X(corr[0].b[0]) - 160} y={Y(corr[0].b[1]) + 34} fill="#1f6b43" fontSize="16">Corredor ecológico</text>
      </g>
      {/* norte y escala */}
      <g transform={`translate(${W - 34},40)`}>
        <polygon points="0,-26 8,8 0,2 -8,8" fill="#0b1015" />
        <text y="26" textAnchor="middle" fontSize="14" fontFamily="Geist Mono, monospace" fill="#0b1015">N</text>
      </g>
      <g>
        <rect x={sx} y={sy} width="200" height="5" fill="#0b1015" />
        <rect x={sx + 100} y={sy} width="100" height="5" fill="#e9e4da" stroke="#0b1015" strokeWidth="1" />
        <text x={sx} y={sy - 8} fontSize="15" fontFamily="Geist Mono, monospace" fill="#0b1015">0</text>
        <text x={sx + 200} y={sy - 8} fontSize="15" textAnchor="end" fontFamily="Geist Mono, monospace" fill="#0b1015">200 m</text>
      </g>
    </svg>
  );
}

export function SeccionEsquema() {
  const leyenda = [
    ['#d8ccb4', 'Meseta segura +22 m', '#1d6f6a'],
    ['#c86d51', 'Viviendas reubicadas', null],
    ['#0b1015', 'Complejo educativo', null],
    ['#b8791f', 'Vías (arterial, anular, colectora)', null],
    ['#2f9a63', 'Corredores ecológicos', null],
    ['#5e9c6b', 'Parque ecológico (propuesta)', null],
    ['#4a8fbf', 'Humedal (propuesta)', null],
  ];
  return (
    <section id="esquema" className="relative bg-papel text-tinta">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-10 sm:py-28">
        <p className="etiqueta text-arcilla">06 · Plan maestro · Esquema y criterios</p>
        <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">El plan, en una sola planta.</h2>
        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,34rem)_1fr]">
          <figure>
            <div className="border border-tinta/20"><EsquemaPlan /></div>
            <figcaption className="mt-3 text-xs leading-relaxed text-tinta/60">
              Esquema básico, no a escala de proyecto. Polígono de la meseta, vías y puntos estratégicos tomados del código de la tesis; las 120 viviendas están dibujadas en una cuadrícula esquemática dentro de la meseta; el parque y el humedal son una propuesta de esta presentación y su tamaño es indicativo.
            </figcaption>
          </figure>
          <div>
            <ul className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
              {leyenda.map(([c, t, borde]) => (
                <li key={t} className="flex items-center gap-3 text-sm">
                  <i className="inline-block h-3 w-5 shrink-0" style={{ background: c, outline: borde ? `2px solid ${borde}` : 'none' }} />{t}
                </li>
              ))}
            </ul>
            <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-tinta/20 pt-5 sm:grid-cols-3">
              {[
                [`+${PROGRAMA.cotaM} m`, 'cota de implantación'],
                [`${PROGRAMA.viviendas}`, 'viviendas piloto'],
                [`${PROGRAMA.cubiertaM2.toLocaleString('es-CO')} m²`, 'cubierta captadora'],
                [`${(PROGRAMA.aljibeL / 1000).toLocaleString('es-CO')} m³`, 'aljibe (450.000 L)'],
                [`${PROGRAMA.estudiantes}`, 'estudiantes'],
                [`${PROGRAMA.usuariosFinDeSemana.toLocaleString('es-CO')}`, 'usuarios en fin de semana'],
              ].map(([v, t]) => (
                <div key={t}><dt className="num text-3xl font-semibold leading-none">{v}</dt><dd className="mt-1.5 text-xs text-tinta/60">{t}</dd></div>
              ))}
            </dl>
          </div>
        </div>

        <h3 className="etiqueta mt-20 text-tinta/55">Criterios de diseño</h3>
        <ol className="regla mt-4 grid gap-x-10 sm:grid-cols-2">
          {CRITERIOS.map((c) => (
            <li key={c.n} className="regla grid grid-cols-[2.5rem_1fr] gap-3 py-5 first:border-t-0 sm:[&:nth-child(2)]:border-t-0">
              <span className="etiqueta text-arcilla">{c.n}</span>
              <div>
                <p className="text-lg font-semibold leading-snug tracking-tight">{c.titulo}</p>
                <p className="mt-1.5 text-[15px] leading-relaxed text-tinta/80">{c.texto}</p>
                <p className="etiqueta mt-2 text-tinta/45">Fuente: {c.fuente}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

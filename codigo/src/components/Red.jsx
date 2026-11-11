import React, { useEffect, useMemo, useRef, useState } from 'react';

// Red conceptual interactiva: el centro está siempre; cada clic revela una relación.
// Los enlaces se dibujan, por ellos viajan partículas, los nodos flotan y el detalle se escribe.

export const ICONOS = {
  mar: 'M2 14c3-4 6-4 9 0s6 4 11 0M2 19c3-4 6-4 9 0s6 4 11 0M12 3v7m-3-3 3 3 3-3',
  borde: 'm3 19 5-6 4 2 4-8 5-3M3 7l5 2 4-2 4 3 5-1M3 22h18',
  casas: 'M3 21V10l6-4 6 4v11M15 21V5l6 3v13M7 13h2m-2 4h2m10-7h-1m1 4h-1M2 21h20',
  riesgo: 'M3 20h18M5 16l4-5 4 3 6-8M15 6h4v4M4 5h6',
  tejido: 'M8 8l3 3m2 2 3 3M16 8l-3 3m-2 2-3 3M11 9l2 6M6 4a2 2 0 100 4 2 2 0 000-4zM18 4a2 2 0 100 4 2 2 0 000-4zM6 16a2 2 0 100 4 2 2 0 000-4zM18 16a2 2 0 100 4 2 2 0 000-4z',
  suelo: 'M3 15c3-3 6-3 9 0s6 3 9 0M3 19c3-3 6-3 9 0s6 3 9 0M5 5l5 4-2 4 5 2 5-5 2 3',
  union: 'M9 11a3 3 0 100-6 3 3 0 000 6zM3 20c0-3 3-5 6-5s6 2 6 5M16 11a3 3 0 100-6M18 20c0-2-1-4-3-4.6',
  ruido: 'M4 9v6h4l5 4V5L8 9H4zM16 9a4 4 0 010 6M18.5 6.5a8 8 0 010 11',
  juego: 'M5 4h14v16H5zM5 12h14M9 8h.01M15 16h.01M9 16h.01M15 8h.01',
  bandera: 'M5 21V4M5 4h11l-2 4 2 4H5',
  cambio: 'M4 8h13l-3-3M20 16H7l3 3',
  lugar: 'M12 21s7-6 7-11a7 7 0 10-14 0c0 5 7 11 7 11zM12 12a2 2 0 100-4 2 2 0 000 4z',
  fiesta: 'M4 6h16v14H4zM4 10h16M8 3v4M16 3v4',
  barrio: 'M3 21V9l9-6 9 6v12M9 21v-7h6v7',
};

function Icono({ d, className = '' }) {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d={d} />
    </svg>
  );
}

const reduce = () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function Escribir({ texto }) {
  const [n, setN] = useState(reduce() ? texto.length : 0);
  useEffect(() => {
    if (reduce()) { setN(texto.length); return undefined; }
    setN(0);
    const id = setInterval(() => setN((x) => { if (x >= texto.length) { clearInterval(id); return x; } return x + 2; }), 16);
    return () => clearInterval(id);
  }, [texto]);
  return <>{texto.slice(0, n)}<span className="ml-0.5 inline-block h-[1em] w-px translate-y-[0.15em] bg-arcilla opacity-70" style={{ opacity: n < texto.length ? 0.9 : 0 }} /></>;
}

/** posiciones por defecto: anillo elíptico alrededor del centro */
function anillo(n) {
  return Array.from({ length: n }, (_, i) => {
    const a = -Math.PI / 2 + (i * 2 * Math.PI) / n + Math.PI / n;
    return [50 + 36 * Math.cos(a), 50 + 37 * Math.sin(a)];
  });
}

export default function Red({ etiqueta, titulo, centro, nodos, alFinal, textoFinal = 'Continuar ↓', textoInicio = 'Descubrir primera relación →' }) {
  const [vistos, setVistos] = useState(1);
  const [foco, setFoco] = useState(0);
  const posiciones = useMemo(() => nodos.map((n, i) => n.pos || anillo(nodos.length)[i]), [nodos]);
  const total = nodos.length + 1;
  const completo = vistos >= total;
  const refNodo = useRef(null);

  const revelar = () => {
    if (completo) return;
    setVistos((v) => v + 1);
    setFoco(vistos);
  };
  const detalle = foco === 0 ? centro.detalle : nodos[foco - 1].detalle;

  // el centro respira solo; los enlaces parten del centro
  const rutas = posiciones.map(([x, y]) => {
    const sx = 500; const sy = 300; const ex = x * 10; const ey = y * 6;
    const mx = (sx + ex) / 2; const my = (sy + ey) / 2;
    const k = 0.22; // curvatura
    return `M${sx} ${sy} Q${mx + (sy - ey) * k} ${my + (ex - sx) * k * 0.6} ${ex} ${ey}`;
  });

  return (
    <div className="mx-auto w-full max-w-5xl">
      {etiqueta && <p className="etiqueta text-arcilla">{etiqueta}</p>}
      {titulo && <h3 className="mt-3 max-w-2xl text-3xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">{titulo}</h3>}

      <div className="relative mt-6 h-[34rem] w-full sm:h-[36rem]" ref={refNodo}>
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1000 600" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id="g-red" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="1000" y2="0">
              <stop offset="0" stopColor="#c86d51" />
              <stop offset="1" stopColor="#e0917a" />
            </linearGradient>
          </defs>
          {rutas.map((d, i) => {
            const on = i + 1 < vistos;
            return (
              <g key={i}>
                <path d={d} className="red-enlace-base" />
                <path d={d} pathLength="1" className="red-enlace" style={{ strokeDashoffset: on ? 0 : 1, transitionDelay: on ? '0.05s' : '0s' }} stroke="url(#g-red)" />
                {on && !reduce() && [0, 1.6].map((b) => (
                  <circle key={b} r="3.2" fill="#fff" opacity="0.9">
                    <animateMotion dur="3.4s" begin={`${b}s`} repeatCount="indefinite" path={d} />
                  </circle>
                ))}
              </g>
            );
          })}
        </svg>

        {/* centro */}
        <button type="button" onClick={() => setFoco(0)} aria-pressed={foco === 0} className="red-nodo red-centro absolute left-1/2 top-1/2 z-10" style={{ '--mw': '6.5rem' }}>
          <span className="red-anillo" aria-hidden="true" /><span className="red-anillo red-anillo-2" aria-hidden="true" />
          <Icono d={ICONOS[centro.icono]} className="text-arcilla" />
          <strong>{centro.titulo}</strong>
          <small>{centro.sub}</small>
        </button>

        {nodos.map((n, i) => {
          const on = i + 1 < vistos;
          const [x, y] = posiciones[i];
          return (
            <button
              key={n.titulo}
              type="button"
              tabIndex={on ? 0 : -1}
              aria-hidden={!on}
              onClick={() => on && setFoco(i + 1)}
              aria-pressed={foco === i + 1}
              className={`red-nodo absolute z-10 ${on ? 'red-visto' : 'red-oculto'}`}
              style={{ left: `clamp(var(--mw), ${x}%, calc(100% - var(--mw)))`, top: `${y}%`, animationDelay: `${(i % 3) * 0.7}s`, '--mw': 'var(--mwnodo)' }}
            >
              <Icono d={ICONOS[n.icono]} className="text-arcilla" />
              <strong>{n.titulo}</strong>
              <small>{n.sub}</small>
            </button>
          );
        })}
      </div>

      <div className="mt-4 min-h-[5.5rem] border-t border-white/20 pt-4 sm:min-h-[4.5rem]">
        <p className="max-w-3xl text-base leading-relaxed text-white/90 sm:text-lg" aria-live="polite"><Escribir key={foco} texto={detalle} /></p>
      </div>
      <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
        <p className="etiqueta num text-white/50">{String(Math.min(vistos, total)).padStart(2, '0')} / {String(total).padStart(2, '0')} · {completo ? 'Diagrama completo' : 'Construyendo relaciones'}</p>
        {!completo ? (
          <button type="button" onClick={revelar} className="red-boton">{vistos === 1 ? textoInicio : 'Revelar siguiente relación →'}</button>
        ) : (
          <button type="button" onClick={alFinal} className="red-boton red-boton-fin">{textoFinal}</button>
        )}
      </div>
    </div>
  );
}

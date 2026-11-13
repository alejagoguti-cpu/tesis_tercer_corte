import React, { useMemo } from 'react';
import { BASE } from '../lib/arboles.js';

const clamp01 = (x) => Math.max(0, Math.min(1, x));
const fmt = (n) => n.toLocaleString('es-CO');

/** pasos de la vista de especies: qué grupo se enciende en cada uno */
export const ESP_PASOS = [
  { id: 'todas', corto: 'Todos los registros', titulo: 'Cada punto es un registro', cats: 'todas' },
  { id: 'aves', corto: 'Aves', titulo: 'Aves', cats: [0] },
  { id: 'flora', corto: 'Flora', titulo: 'Flora', cats: [1] },
  { id: 'insectos', corto: 'Insectos', titulo: 'Insectos', cats: [2] },
  { id: 'peces', corto: 'Peces', titulo: 'Peces', cats: [3] },
  { id: 'otros', corto: 'Otros grupos', titulo: 'Los demás grupos', cats: [4, 5, 6, 7, 8, 9] },
  { id: 'relaciones', corto: 'Relaciones', titulo: 'Quién se relaciona con quién', cats: 'todas', rel: true },
];

/** estado de la escena para el paso i y avance local lf (0..1) */
export function espEstado(i, lf) {
  const p = ESP_PASOS[i];
  const cats = Array.from({ length: 10 }, (_, k) => (p.cats === 'todas' || p.cats.includes(k) ? 1 : 0));
  return { cats, rel: p.rel ? clamp01(lf * 1.5) : 0 };
}

export function PanelEspecies({ paso, idx, esp, contenedor }) {
  const info = useMemo(() => {
    const cats = esp.cats;
    const nSp = cats.map(() => 0); const nObs = cats.map(() => 0);
    esp.species.forEach((s) => { nSp[s.cat]++; });
    esp.obs.forEach((o) => { nObs[esp.species[o[0]].cat]++; });
    const relPorTipo = esp.relTipos.map(() => 0);
    esp.rel.forEach((r) => { relPorTipo[r[2][0]]++; });
    return { nSp, nObs, relPorTipo };
  }, [esp]);

  const enPaso = (k) => paso.cats === 'todas' || paso.cats.includes(k);
  const top = useMemo(() => {
    if (paso.cats === 'todas') return [];
    return esp.species.filter((s) => paso.cats.includes(s.cat)).sort((a, b) => b.n - a.n || a.es.localeCompare(b.es)).slice(0, 3);
  }, [esp, paso]);
  const sp = paso.cats === 'todas' ? esp.species.length : paso.cats.reduce((n, k) => n + info.nSp[k], 0);
  const ob = paso.cats === 'todas' ? esp.obs.length : paso.cats.reduce((n, k) => n + info.nObs[k], 0);

  return (
    <aside className={contenedor} aria-live="polite">
      <p className="etiqueta text-arcilla">07 · Especies · {String(idx + 1).padStart(2, '0')} / {String(ESP_PASOS.length).padStart(2, '0')}</p>
      <h3 className="mt-2 text-2xl font-bold leading-tight sm:text-[1.7rem]">{paso.titulo}</h3>

      {paso.id === 'todas' && (
        <>
          <p className="mt-3 text-[13px] leading-relaxed text-white/80">
            {fmt(esp.species.length)} taxones y {fmt(esp.obs.length)} registros georreferenciados en la región de la isla. Cada punto brillante es un registro en su posición; los puntos tenues dibujan el relieve de Tierra Bomba.
          </p>
          <ul className="mt-4 grid grid-cols-2 gap-x-3 gap-y-1.5 border-t border-white/12 pt-3 text-[12.5px]">
            {esp.cats.map((c, k) => (
              <li key={c.nombre} className="flex items-center gap-2">
                <i className="inline-block h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: c.color, boxShadow: `0 0 8px ${c.color}` }} />
                <span className="flex-1 truncate">{c.nombre}</span>
                <span className="num text-white/55">{fmt(info.nObs[k])}</span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-[11px] leading-snug text-white/45">Registros de iNaturalist y bases abiertas compiladas en la red de especies de la isla. La posición de varios registros puede ser aproximada (nivel de localidad), no un punto medido en campo. A la derecha de cada nombre, número de registros.</p>
        </>
      )}

      {paso.id !== 'todas' && paso.id !== 'relaciones' && (
        <>
          <p className="mt-3 text-[13px] leading-relaxed text-white/80">
            {fmt(sp)} {sp === 1 ? 'taxón' : 'taxones'} y {fmt(ob)} registros. {paso.cats.length === 1 ? esp.cats[paso.cats[0]].sub + '.' : 'Moluscos, arácnidos, mamíferos, reptiles, anfibios y hongos.'}
          </p>
          <div className="mt-3 flex flex-wrap gap-2 border-t border-white/12 pt-3">
            {esp.cats.map((c, k) => enPaso(k) && (
              <span key={c.nombre} className="ficha !flex items-center gap-1.5 !px-2.5" style={{ borderColor: c.color + '99' }}>
                <i className="inline-block h-2 w-2 rounded-full" style={{ background: c.color }} />{c.nombre} · {fmt(info.nSp[k])}
              </span>
            ))}
          </div>
          <p className="etiqueta mt-4 text-white/50">Más registrados</p>
          <ul className="mt-2 space-y-2">
            {top.map((s) => (
              <li key={s.tid} className="flex items-center gap-3">
                <img src={`${BASE}assets/fotos/${s.tid}.webp`} alt="" loading="lazy" className="h-11 w-11 shrink-0 rounded-full border border-white/15 object-cover" onError={(e) => { e.currentTarget.style.visibility = 'hidden'; }} />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[13.5px] font-semibold leading-tight">{s.es}</p>
                  <p className="truncate text-[11.5px] italic text-white/50">{s.sci}</p>
                </div>
                <span className="num shrink-0 text-sm text-white/70">{s.n}</span>
              </li>
            ))}
          </ul>
        </>
      )}

      {paso.id === 'relaciones' && (
        <>
          <p className="mt-3 text-[13px] leading-relaxed text-white/80">
            {fmt(esp.rel.length)} relaciones entre las especies de la isla: depredación, polinización, dispersión de semillas, parasitismo, refugio. Cada arco une dos especies por su posición.
          </p>
          <ul className="mt-3 space-y-1.5 border-t border-white/12 pt-3 text-[12.5px]">
            {esp.relTipos.map((t, k) => (
              <li key={t} className="flex items-center gap-2.5">
                <i className="inline-block h-[3px] w-5 shrink-0 rounded-full" style={{ background: esp.relColores[k] }} />
                <span className="flex-1">{t}</span>
                <span className="num text-white/55">{fmt(info.relPorTipo[k])}</span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-[11px] leading-snug text-white/45">Relaciones documentadas en la literatura y en GloBI, en algún lugar del mundo: no se observaron necesariamente en la isla. Los arcos son una forma de dibujar la conexión, no una ruta.</p>
          <a href="https://anasoficasca-code.github.io/tierrabomba/" target="_blank" rel="noopener noreferrer" className="red-boton mt-4 inline-flex items-center">Ver la red completa ↗</a>
        </>
      )}
    </aside>
  );
}

export function IndiceEsp({ activo }) {
  return (
    <nav aria-label="Pasos de la vista de especies" className="fixed right-5 top-1/2 z-20 hidden -translate-y-1/2 lg:block">
      <ol className="flex flex-col items-end gap-1">
        {ESP_PASOS.map((p, i) => (
          <li key={p.id} title={p.corto} className="flex h-6 items-center">
            <span className={`block h-[2px] rounded-full transition-all duration-300 ${i === activo ? 'w-9 bg-arcilla' : 'w-4 bg-white/40'}`} />
          </li>
        ))}
      </ol>
    </nav>
  );
}

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { gradienteCSS } from '../lib/paleta.js';
import { GRUPOS_TIPO, TASA } from '../lib/escena.js';

const fmt = (n, d = 0) => n.toLocaleString('es-CO', { minimumFractionDigits: d, maximumFractionDigits: d });
const clamp01 = (x) => Math.max(0, Math.min(1, x));
const ease = (t) => (t < 0.5 ? 2 * t * t : 1 - ((-2 * t + 2) ** 2) / 2);

const PROBLEMA =
  'La pérdida paulatina de suelo costero por el aumento del mar amenaza con desplazar progresivamente a la población de Tierra Bomba y fragmentar sus modos de vida.';

const CAPITULOS = [
  { id: 'portada', n: '00', nombre: 'Portada' },
  { id: 'problema', n: '01', nombre: 'El problema' },
  { id: 'erosion', n: '02', nombre: 'Si no se frena la erosión' },
  { id: 'vias', n: '03', nombre: 'Las vías' },
  { id: 'sintaxis', n: '04', nombre: 'Sintaxis espacial' },
  { id: 'cierre', n: '05', nombre: 'Lo que sigue' },
];

const RADIOS = [
  ['n', 'Toda la isla'],
  ['1200', '1,2 km'],
  ['400', '400 m'],
];

const PASOS = [
  { id: 'metodo', corto: 'Método', grupo: 'Método', titulo: 'Cómo se lee una red', red: 'peatonal', capa: 'tipo' },
  { id: 'pea-int', corto: 'Peatonal · Integración', grupo: 'Red peatonal', titulo: 'Integración', red: 'peatonal', capa: 'nain', medida: 'nain' },
  { id: 'pea-ele', corto: 'Peatonal · Elección', grupo: 'Red peatonal', titulo: 'Elección', red: 'peatonal', capa: 'nach', medida: 'nach' },
  { id: 'mot-int', corto: 'Motos · Integración', grupo: 'Red de motos', titulo: 'Integración', red: 'motos', capa: 'nain', medida: 'nain' },
  { id: 'mot-ele', corto: 'Motos · Elección', grupo: 'Red de motos', titulo: 'Elección', red: 'motos', capa: 'nach', medida: 'nach' },
  { id: 'mu-dist', corto: 'Lanchas · Acceso a muelles', grupo: 'Lanchas', titulo: 'Acceso a los muelles', red: 'peatonal', capa: 'muelle_dist', rutas: 1 },
  { id: 'mu-ele', corto: 'Lanchas · Elección a muelles', grupo: 'Lanchas', titulo: 'Elección hacia los muelles', red: 'peatonal', capa: 'muelle_ch', rutas: 1 },
  { id: 'rutas', corto: 'Lanchas · Rutas', grupo: 'Lanchas', titulo: 'Rutas de lancha', red: 'peatonal', capa: 'tipo', calles: 0.22, rutas: 1, cam: 'lancha' },
  { id: 'riesgo', corto: 'La erosión sobre las redes', grupo: 'Erosión + redes', titulo: 'La erosión sobre las redes', capa: 'riesgo' },
];
const ALTO_PASO = 95; // svh por paso

/* ---------- utilidades de presentación ---------- */
function ScrollWords({ text, className = '' }) {
  const ref = useRef(null);
  const [p, setP] = useState(0);
  useEffect(() => {
    const on = () => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      setP(clamp01((vh * 0.9 - r.top) / (r.height + vh * 0.45)));
    };
    on();
    window.addEventListener('scroll', on, { passive: true });
    window.addEventListener('resize', on);
    return () => { window.removeEventListener('scroll', on); window.removeEventListener('resize', on); };
  }, []);
  const words = text.split(' ');
  return (
    <p ref={ref} className={className}>
      {words.map((w, i) => (
        <span key={i} className="transition-opacity duration-300" style={{ opacity: p * words.length * 1.15 > i ? 1 : 0.16 }}>{w} </span>
      ))}
    </p>
  );
}

function Leyenda({ izquierda = 'Menos', derecha = 'Más' }) {
  return (
    <div>
      <div className="h-2 w-full rounded-[2px]" style={{ background: gradienteCSS }} />
      <div className="etiqueta mt-1.5 flex justify-between text-white/55"><span>{izquierda}</span><span>{derecha}</span></div>
    </div>
  );
}

function Ranking({ titulo, items }) {
  if (!items?.length) return null;
  return (
    <div className="mt-4">
      <p className="etiqueta text-white/50">{titulo}</p>
      <ol className="mt-2 space-y-1.5">
        {items.slice(0, 4).map((it, i) => (
          <li key={it.nombre} className="flex items-baseline gap-3 border-t border-white/12 pt-1.5 text-[13px]">
            <span className="etiqueta w-4 text-white/40">{i + 1}</span>
            <span className="flex-1 truncate">{it.nombre}</span>
            <span className="num text-white/55">{fmt(it.valor, 2)}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

/* ---------- cabecera ---------- */
function Cabecera({ cap }) {
  const actual = CAPITULOS.find((c) => c.id === cap) || CAPITULOS[0];
  const claro = cap === 'cierre';
  return (
    <header className={`pointer-events-none fixed inset-x-0 top-0 z-30 pb-6 ${claro ? 'bg-papel/90 backdrop-blur-sm' : 'bg-gradient-to-b from-tinta/80 via-tinta/35 to-transparent'}`}>
      <div className={`flex items-start justify-between gap-4 px-4 pt-4 sm:px-8 sm:pt-5 ${claro ? 'text-tinta/70' : 'text-white/75 [text-shadow:0_1px_12px_rgba(0,0,0,.6)]'}`}>
        <p className="etiqueta">Tierra Bomba<span className="hidden sm:inline"> · Tercer corte</span></p>
        <p className="etiqueta truncate text-right">
          <span className="text-arcilla">{actual.n}</span>
          <span className="mx-2 opacity-40">/</span>
          {actual.nombre}
        </p>
      </div>
      <div className={`mt-3 h-[2px] w-full ${claro ? 'bg-tinta/10' : 'bg-white/10'}`}>
        <div className="progreso progreso-nativo h-full w-full bg-arcilla" />
      </div>
    </header>
  );
}

/* ---------- paneles flotantes ---------- */
const contenedorPanel =
  'vidrio fixed z-20 bottom-3 left-3 right-3 max-h-[58svh] overflow-y-auto p-4 sm:bottom-6 sm:left-8 sm:right-auto sm:max-h-[calc(100svh-7rem)] sm:w-[25rem] sm:p-5';

function PanelErosion({ stats, anio, modo }) {
  const casas = stats.casasAnio(anio);
  const ha = stats.haAnio(anio);
  const pct = stats.pctAnio(anio);
  const m = TASA * anio;
  return (
    <aside className={`${contenedorPanel} entra`} aria-live="polite">
      <p className="etiqueta text-arcilla">02 · Si no se frena la erosión</p>
      <div className="mt-3 flex items-end justify-between gap-4">
        <p className="num text-5xl font-semibold leading-none tracking-tight">
          {anio === 0 ? 'Hoy' : `+${anio}`}
          {anio > 0 && <span className="ml-2 text-base font-normal text-white/55">años</span>}
        </p>
        <p className="num text-right text-xs text-white/55">{fmt(m, 0)} m de<br />costa perdida</p>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-4 border-t border-white/14 pt-3">
        <div>
          <p className="num text-3xl font-semibold leading-none text-[#ff8a7a]">{fmt(casas)}</p>
          <p className="mt-1.5 text-xs leading-snug text-white/65">viviendas perdidas<br />de {fmt(stats.casas.total)}</p>
        </div>
        <div>
          <p className="num text-3xl font-semibold leading-none">{fmt(ha, ha < 10 ? 1 : 0)}</p>
          <p className="mt-1.5 text-xs leading-snug text-white/65">hectáreas de costa<br />({fmt(pct, 1)} % de la isla)</p>
        </div>
      </div>

      <div className="mt-4">
        <div className="relative h-[3px] bg-white/18">
          <div className="absolute inset-y-0 left-0 bg-arcilla" style={{ width: `${(anio / 30) * 100}%` }} />
          {[0, 10, 20, 30].map((y) => (
            <span key={y} className="absolute top-[-3px] h-[9px] w-px bg-white/50" style={{ left: `${(y / 30) * 100}%` }} />
          ))}
        </div>
        <div className="etiqueta num relative mt-2 h-3 text-white/45">
          {[0, 10, 20, 30].map((y) => (
            <span key={y} className="absolute -translate-x-1/2" style={{ left: `${(y / 30) * 100}%` }}>{y === 0 ? 'hoy' : y}</span>
          ))}
        </div>
      </div>

      <p className="mt-4 text-[13px] leading-relaxed text-white/80">
        {modo === 'despues'
          ? 'Así quedaría la isla: el mar ocupa la franja que se pierde y las viviendas dentro de ella desaparecen.'
          : anio === 0
            ? 'La línea de costa actual, según la silueta oficial de la isla. Desplázate: la costa empieza a retroceder.'
            : 'En rojo, la tierra que el mar ocupa. El frente naranja es la costa de ese año.'}
      </p>
      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-white/60">
        {[['#991b1b', 'hasta 10 años'], ['#dc2626', '10 a 20'], ['#f87171', '20 a 30']].map(([c, t]) => (
          <span key={t} className="flex items-center gap-1.5"><i className="inline-block h-2.5 w-2.5" style={{ background: c }} />{t}</span>
        ))}
      </div>
      <p className="mt-3 border-t border-white/12 pt-2.5 text-[11px] leading-snug text-white/45">
        Retroceso uniforme de {fmt(TASA, 1)} m/año (tasa máxima registrada); la erosión real varía por tramo. Construcciones del archivo de la tesis, con alturas de referencia.
      </p>
    </aside>
  );
}

function PanelVias({ stats, datos }) {
  const p = datos.peatonal;
  const km = stats.km.peatonal;
  const porGrupo = GRUPOS_TIPO.map((g) => ({ ...g, km: g.tipos.reduce((s, t) => s + (stats.porTipo.peatonal[t] || 0), 0) }));
  return (
    <aside className={`${contenedorPanel} entra`}>
      <p className="etiqueta text-arcilla">03 · Todas las vías</p>
      <p className="num mt-3 text-5xl font-semibold leading-none tracking-tight">{fmt(km, 1)}<span className="ml-2 text-base font-normal text-white/55">km</span></p>
      <p className="mt-2 text-[13px] text-white/70">de vías cartografiadas sobre la isla, en {fmt(p.segmentos)} tramos.</p>
      <ul className="mt-4 space-y-2 border-t border-white/14 pt-3">
        {porGrupo.map((g) => (
          <li key={g.id} className="flex items-center gap-3 text-[13px]">
            <i className="inline-block h-[3px] w-6" style={{ background: g.color }} />
            <span className="flex-1">{g.nombre}</span>
            <span className="num text-white/60">{fmt(g.km, 1)} km</span>
          </li>
        ))}
      </ul>
      <p className="mt-4 border-t border-white/12 pt-3 text-[11px] leading-snug text-white/45">
        {datos.meta.fuente_vias}, consultado el {datos.meta.fecha_vias}. Cobertura parcial: no es un inventario levantado en campo ni mide anchos.
      </p>
    </aside>
  );
}

function PanelSintaxis({ paso, datos, stats, ctrl, setCtrl }) {
  const red = paso.red ? datos[paso.red] : null;
  const mu = datos.muelles;
  const distValidas = mu.dist_m.filter((v) => v >= 0).sort((a, b) => a - b);
  const mediana = distValidas[Math.floor(distValidas.length / 2)] ?? 0;
  const maxim = distValidas[distValidas.length - 1] ?? 0;

  const encabezado = (
    <>
      <p className="etiqueta text-arcilla">04 · Sintaxis espacial · {paso.grupo}</p>
      <h3 className="mt-2 text-2xl font-semibold leading-tight tracking-tight sm:text-[1.7rem]">{paso.titulo}</h3>
    </>
  );

  const selectorRadio = paso.medida && (
    <div className="mt-4">
      <p className="etiqueta mb-2 text-white/50">Radio de análisis</p>
      <div className="flex flex-wrap gap-2">
        {RADIOS.map(([v, t]) => (
          <button key={v} type="button" className="ficha" aria-pressed={ctrl.radio === v} onClick={() => setCtrl((c) => ({ ...c, radio: v }))}>{t}</button>
        ))}
      </div>
    </div>
  );

  let cuerpo = null;
  if (paso.id === 'metodo') {
    cuerpo = (
      <>
        <p className="mt-3 text-[13px] leading-relaxed text-white/80">
          La sintaxis espacial mide qué tan accesible es cada tramo de calle respecto a todos los demás, contando los giros más que los metros.
          Cada vía se divide en tramos y se calcula, con el método angular de depthmapX, su integración y su elección.
        </p>
        <dl className="mt-4 space-y-3 border-t border-white/14 pt-3 text-[13px] leading-snug">
          <div><dt className="font-semibold">Integración (NAIN)</dt><dd className="text-white/65">Qué tan cerca, en giros, queda un tramo de todos los demás. Cálido: más integrado.</dd></div>
          <div><dt className="font-semibold">Elección (NACH)</dt><dd className="text-white/65">Cuántos de los recorridos más directos entre todos los pares de tramos pasan por él. Cálido: más elegido.</dd></div>
        </dl>
        <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-white/60">
          {GRUPOS_TIPO.map((g) => <li key={g.id} className="flex items-center gap-1.5"><i className="inline-block h-[3px] w-5" style={{ background: g.color }} />{g.nombre}</li>)}
        </ul>
      </>
    );
  } else if (paso.medida) {
    const esMotos = paso.red === 'motos';
    cuerpo = (
      <>
        <p className="mt-3 text-[13px] leading-relaxed text-white/80">
          {paso.medida === 'nain'
            ? 'Los tramos cálidos son aquellos desde los que se llega a todos los demás con menos giros.'
            : 'Los tramos cálidos concentran los recorridos más directos entre cualquier origen y destino de la red.'}
          {esMotos
            ? ' Red de motos: calles y caminos carreteables según OpenStreetMap, sin senderos, peatonales ni escaleras. Es una suposición de trabajo, no verificada en campo.'
            : ' Red peatonal: todas las vías cartografiadas.'}
        </p>
        {selectorRadio}
        <div className="mt-4"><Leyenda izquierda="Segregado" derecha={paso.medida === 'nain' ? 'Integrado' : 'Más elegido'} /></div>
        {ctrl.radio === 'n' ? (
          <Ranking
            titulo={paso.medida === 'nain' ? 'Ejes más integrados (toda la isla)' : 'Ejes más elegidos (toda la isla)'}
            items={paso.medida === 'nain' ? red.top_integracion : red.top_eleccion}
          />
        ) : (
          <p className="mt-4 text-[11px] text-white/45">El ranking por nombre se calcula con el radio de toda la isla.</p>
        )}
        <p className="mt-3 text-[11px] text-white/45">
          {fmt(red.segmentos)} tramos · {fmt(red.km, 1)} km · {red.componentes} {red.componentes === 1 ? 'componente' : 'componentes'} conectados. En gris, tramos sin conexión con la red principal.
        </p>
      </>
    );
  } else if (paso.id === 'mu-dist' || paso.id === 'mu-ele') {
    cuerpo = (
      <>
        <p className="mt-3 text-[13px] leading-relaxed text-white/80">
          {paso.id === 'mu-dist'
            ? `Se tomaron los ${mu.puntos.length} muelles y espolones de OpenStreetMap que quedan a menos de 120 m de la red peatonal. En color, la distancia por la red al muelle más cercano.`
            : 'Cuántos recorridos directos, desde todos los tramos de la isla hacia un muelle, pasan por cada tramo.'}
        </p>
        <div className="mt-4"><Leyenda izquierda={paso.id === 'mu-dist' ? 'Lejos' : 'Poco usado'} derecha={paso.id === 'mu-dist' ? 'Cerca' : 'Más usado'} /></div>
        {paso.id === 'mu-dist' && (
          <div className="mt-4 grid grid-cols-2 gap-4 border-t border-white/14 pt-3">
            <div><p className="num text-3xl font-semibold leading-none">{fmt(mediana)}<span className="ml-1 text-sm font-normal text-white/55">m</span></p><p className="mt-1.5 text-xs text-white/65">distancia mediana<br />a un muelle</p></div>
            <div><p className="num text-3xl font-semibold leading-none">{fmt(maxim)}<span className="ml-1 text-sm font-normal text-white/55">m</span></p><p className="mt-1.5 text-xs text-white/65">distancia máxima<br />a un muelle</p></div>
          </div>
        )}
        <p className="mt-3 text-[11px] leading-snug text-white/45">Las columnas de luz marcan los muelles mapeados. No hay otros datos de embarcaderos: faltan los que usa la comunidad.</p>
      </>
    );
  } else if (paso.id === 'rutas') {
    cuerpo = (
      <>
        <p className="mt-3 text-[13px] leading-relaxed text-white/80">
          Las únicas rutas de lancha del archivo son dos conexiones esquemáticas: Castillogrande a Punta Arena y La Bodeguita a Bocachica.
          No son trayectorias registradas ni derrotas de navegación.
        </p>
        <ul className="mt-4 space-y-2 border-t border-white/14 pt-3 text-[13px]">
          {datos.rutas_lanchas.map((r) => (
            <li key={r.id} className="flex items-center gap-3"><i className="inline-block h-px w-6 border-t border-dashed border-[#8fd3ee]" /><span>{r.nombre}</span></li>
          ))}
        </ul>
        <p className="mt-4 text-[13px] leading-relaxed text-white/80">
          Con dos líneas no hay red que analizar. Por eso el análisis de lanchas se hizo sobre el acceso a los muelles. Para una sintaxis marítima propia hace falta levantar las rutas reales. Las columnas de luz marcan los muelles de OpenStreetMap y los extremos de cada ruta.
        </p>
      </>
    );
  } else if (paso.id === 'riesgo') {
    const r = stats.riesgoRed[ctrl.redRiesgo];
    const y = ctrl.anioRiesgo;
    cuerpo = (
      <>
        <p className="mt-3 text-[13px] leading-relaxed text-white/80">
          Cada tramo se colorea según el año en que la costa lo alcanza con retroceso uniforme. Es el cruce entre la sintaxis y la erosión.
        </p>
        <div className="mt-4 space-y-2">
          <div className="flex items-center gap-2">
            <span className="etiqueta w-[4.6rem] text-white/45">Red</span>
            {[['peatonal', 'Peatonal'], ['motos', 'Motos']].map(([v, t]) => (
              <button key={v} type="button" className="ficha" aria-pressed={ctrl.redRiesgo === v} onClick={() => setCtrl((c) => ({ ...c, redRiesgo: v }))}>{t}</button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <span className="etiqueta w-[4.6rem] text-white/45">Horizonte</span>
            {[10, 20, 30].map((v) => (
              <button key={v} type="button" className="ficha" aria-pressed={ctrl.anioRiesgo === v} onClick={() => setCtrl((c) => ({ ...c, anioRiesgo: v }))}>{v} años</button>
            ))}
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4 border-t border-white/14 pt-3">
          <div>
            <p className="num text-3xl font-semibold leading-none text-[#ff8a7a]">{fmt(r.pct[y], 1)}<span className="ml-1 text-sm font-normal">%</span></p>
            <p className="mt-1.5 text-xs leading-snug text-white/65">de la red ({fmt(r.km_perdidos[y], 1)} de {fmt(r.km, 1)} km)<br />queda dentro de la franja</p>
          </div>
          <div>
            <p className="num text-3xl font-semibold leading-none">{r.altosLost[y]}<span className="ml-1 text-sm font-normal text-white/55">de {r.altos}</span></p>
            <p className="mt-1.5 text-xs leading-snug text-white/65">ejes de mayor elección<br />(10 % superior) afectados</p>
          </div>
        </div>
        <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-white/60">
          {[['#b3261e', '≤ 10 años'], ['#e0453a', '10 a 20'], ['#f58b7e', '20 a 30'], ['#aeb8bd', 'fuera de 30']].map(([c, t]) => (
            <li key={t} className="flex items-center gap-1.5"><i className="inline-block h-[3px] w-5" style={{ background: c }} />{t}</li>
          ))}
        </ul>
      </>
    );
  }

  return (
    <aside key={paso.id} className={`${contenedorPanel} entra`} aria-live="polite">
      {encabezado}
      {cuerpo}
      {paso.id !== 'riesgo' && paso.id !== 'rutas' && paso.id !== 'metodo' && (
        <p className="mt-3 border-t border-white/12 pt-3 text-[11px] leading-snug text-white/40">
          Método de depthmapX reimplementado en JavaScript; no se ejecutó la aplicación. Valores sin validar contra su salida.
        </p>
      )}
    </aside>
  );
}

/* ---------- índice lateral de la sintaxis ---------- */
function Indice({ activo, onIr }) {
  return (
    <nav aria-label="Pasos de la sintaxis espacial" className="fixed right-5 top-1/2 z-20 hidden -translate-y-1/2 lg:block">
      <ol className="flex flex-col items-end gap-1">
        {PASOS.map((p, i) => (
          <li key={p.id}>
            <button type="button" onClick={() => onIr(i)} title={p.corto} aria-label={p.corto} aria-current={i === activo ? 'step' : undefined} className="group flex h-6 items-center">
              <span className={`block h-[2px] rounded-full transition-all duration-300 ${i === activo ? 'w-9 bg-arcilla' : 'w-4 bg-white/40 group-hover:w-6 group-hover:bg-white'}`} />
            </button>
          </li>
        ))}
      </ol>
    </nav>
  );
}

/* ---------- cierre ---------- */
function Cierre({ api }) {
  const d = api?.datos;
  const s = api?.stats;
  const hallazgos = useMemo(() => {
    if (!d || !s) return [];
    const top = (red, k) => d[red][k]?.[0]?.nombre;
    const lista = [
      `Con retroceso uniforme de ${fmt(TASA, 1)} m/año, a 30 años se pierden ${fmt(s.ha[30], 0)} ha (${fmt(s.pct[30], 1)} % de la isla) y ${fmt(s.casas[30])} de las ${fmt(s.casas.total)} construcciones del archivo.`,
      (() => {
        const nombres = [top('peatonal', 'top_integracion'), top('peatonal', 'top_eleccion'), top('motos', 'top_integracion'), top('motos', 'top_eleccion')];
        return new Set(nombres).size === 1
          ? `«${nombres[0]}» es el eje más integrado y el más elegido, tanto en la red peatonal como en la de motos.`
          : `Red peatonal: integración en «${nombres[0]}», elección en «${nombres[1]}». Red de motos: integración en «${nombres[2]}», elección en «${nombres[3]}».`;
      })(),
      `A 30 años, ${fmt(s.riesgoRed.peatonal.pct[30], 1)} % de la red peatonal y ${fmt(s.riesgoRed.motos.pct[30], 1)} % de la red de motos quedan dentro de la franja que se pierde.`,
      `De los ${s.riesgoRed.peatonal.altos} ejes de mayor elección de la red peatonal, ${s.riesgoRed.peatonal.altosLost[30]} quedan dentro de esa franja a 30 años.`,
    ];
    return lista;
  }, [d, s]);

  return (
    <section id="cierre" className="relative bg-papel text-tinta">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-10 sm:py-32">
        <p className="etiqueta text-arcilla">05 · Lo que sigue</p>
        <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">Lo que muestran los números, y lo que falta.</h2>

        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          <div>
            <h3 className="etiqueta text-tinta/55">Resultados calculados</h3>
            <ol className="regla mt-4">
              {hallazgos.map((h, i) => (
                <li key={i} className="regla grid grid-cols-[2.5rem_1fr] gap-3 py-4 first:border-t-0">
                  <span className="etiqueta text-arcilla">{String(i + 1).padStart(2, '0')}</span>
                  <p className="leading-relaxed">{h}</p>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="etiqueta text-tinta/55">Límites de este análisis</h3>
            <ul className="regla mt-4">
              {[
                'La erosión se modela como un retroceso uniforme de toda la costa. No distingue tramos, mareas ni obras de defensa.',
                'Las vías vienen de OpenStreetMap con cobertura parcial. La red de motos es una suposición según la etiqueta de cada vía.',
                'La sintaxis es una reimplementación propia del método angular de depthmapX y no se comparó con su salida.',
                'No hay una red de lanchas con datos reales: solo dos rutas esquemáticas. Lo medido es el acceso a muelles mapeados.',
                'Las alturas de las construcciones son de referencia, no medidas.',
              ].map((t) => (
                <li key={t} className="regla py-3 leading-relaxed first:border-t-0">{t}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 grid gap-4 sm:grid-cols-2">
          {[
            ['Versión para la comunidad', 'Territorio, historia, riesgos y el nuevo barrio, para quienes habitan la isla.', 'https://alejagoguti-cpu.github.io/tesis/#/comunidad'],
            ['Tesis completa', 'La plataforma con el marco, los módulos técnicos y el visor 3D.', 'https://alejagoguti-cpu.github.io/tesis/'],
          ].map(([t, sub, href]) => (
            <a key={t} href={href} target="_blank" rel="noopener noreferrer" className="group block border border-tinta/20 p-6 transition-colors hover:border-tinta hover:bg-tinta hover:text-papel">
              <p className="etiqueta opacity-60">Enlace</p>
              <p className="mt-2 text-2xl font-semibold tracking-tight">{t} <span className="inline-block transition-transform group-hover:translate-x-1">→</span></p>
              <p className="mt-2 text-sm opacity-70">{sub}</p>
            </a>
          ))}
        </div>

        <footer className="mt-20 border-t border-tinta/20 pt-6 text-xs leading-relaxed text-tinta/60">
          <p>Alejandra Gómez · Ana Casas · Tesis de grado en Arquitectura y Urbanismo · 2026</p>
          <p className="mt-2">
            Fuentes: imagen satelital Esri World Imagery (Esri, Maxar, Earthstar Geographics y la comunidad GIS); relieve Terrain Tiles (Mapzen / AWS Open Data); vías y muelles © OpenStreetMap contributors (ODbL);
            árboles Island Tree 01 y 02, Poly Haven (CC0); método de sintaxis espacial de depthmapX (UCL Space Group, GPL-3.0).
          </p>
        </footer>
      </div>
    </section>
  );
}

/* ---------- relato ---------- */
export default function Relato({ api, sinEscena }) {
  const [cap, setCap] = useState('portada');
  const [pasoIdx, setPasoIdx] = useState(0);
  const [anio, setAnio] = useState(0);
  const [modo, setModo] = useState('perdida');
  const [ctrl, setCtrl] = useState({ radio: 'n', redRiesgo: 'peatonal', anioRiesgo: 30 });
  const ctrlRef = useRef(ctrl);
  ctrlRef.current = ctrl;
  const S = useRef({ cap: 'portada', pasoIdx: 0, p: 0 });
  const apiRef = useRef(api);
  apiRef.current = api;

  const aplicar = useCallback(() => {
    const a = apiRef.current;
    if (!a) return;
    const { cap: c, pasoIdx: pi, p } = S.current;
    const k = ctrlRef.current;
    const base = { cam: 'hero', year: 0, modo: 'perdida', red: null, capa: 'tipo', radio: 'n', calles: 0, casas: 1, dim: 0, rutas: 0 };
    let est = base;
    if (c === 'portada') est = base;
    else if (c === 'problema') est = { ...base, cam: 'problema', dim: 0.1 };
    else if (c === 'erosion') {
      const y = 30 * ease(clamp01((p - 0.08) / 0.76));
      est = { ...base, cam: p < 0.58 ? 'casco' : 'isla', year: y, modo: p > 0.9 ? 'despues' : 'perdida' };
    } else if (c === 'vias') est = { ...base, cam: 'vias', red: 'peatonal', capa: 'tipo', calles: 1, casas: 0, dim: 0.55 };
    else if (c === 'sintaxis') {
      const ps = PASOS[pi];
      est = {
        ...base, cam: ps.cam || 'vias', red: ps.red || k.redRiesgo, capa: ps.capa, radio: k.radio,
        calles: ps.calles ?? 1, casas: 0, dim: 0.55, rutas: ps.rutas || 0,
      };
      if (ps.id === 'riesgo') est = { ...est, year: k.anioRiesgo, modo: 'perdida', dim: 0.3, red: k.redRiesgo };
    } else est = { ...base, cam: 'isla', dim: 0.5 };
    a.set(est);
  }, []);

  // seguimiento del scroll
  useEffect(() => {
    let raf = 0;
    const calcular = () => {
      raf = 0;
      const vh = window.innerHeight;
      let actual = 'portada';
      for (const c of CAPITULOS) {
        const el = document.getElementById(c.id);
        if (el && el.getBoundingClientRect().top <= vh * 0.55) actual = c.id;
      }
      const el = document.getElementById(actual);
      const r = el.getBoundingClientRect();
      const total = Math.max(1, r.height - vh);
      const p = clamp01(-r.top / total);
      let pi = S.current.pasoIdx;
      if (actual === 'sintaxis') pi = Math.min(PASOS.length - 1, Math.floor(p * PASOS.length));
      S.current = { cap: actual, pasoIdx: pi, p };
      const tot = document.documentElement.scrollHeight - vh;
      document.documentElement.style.setProperty('--p', tot > 0 ? String(clamp01(window.scrollY / tot)) : '0');
      setCap((x) => (x === actual ? x : actual));
      setPasoIdx((x) => (x === pi ? x : pi));
      if (actual === 'erosion') {
        const y = Math.round(30 * ease(clamp01((p - 0.08) / 0.76)));
        setAnio((x) => (x === y ? x : y));
        setModo(p > 0.9 ? 'despues' : 'perdida');
      }
      aplicar();
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(calcular); };
    calcular();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); cancelAnimationFrame(raf); };
  }, [aplicar, api]);

  useEffect(() => { aplicar(); }, [ctrl, api, aplicar]);

  const irAPaso = (i) => {
    const el = document.getElementById('sintaxis');
    const vh = window.innerHeight;
    const top = window.scrollY + el.getBoundingClientRect().top + ((i + 0.5) / PASOS.length) * (el.offsetHeight - vh);
    window.scrollTo({ top, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  };

  const stats = api?.stats;
  const datos = api?.datos;

  return (
    <div className="relative z-10">
      <Cabecera cap={cap} />

      {/* 00 · portada */}
      <section id="portada" className="relative flex h-[100svh] min-h-[560px] items-end">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-tinta/75 to-transparent" />
        <div className="relative w-full px-5 pb-12 sm:px-12 sm:pb-16">
          <p className="etiqueta subir text-white/70" style={{ animationDelay: '0.2s' }}>Tesis de grado · Arquitectura y Urbanismo · Tercer corte</p>
          <h1 className="subir mt-4 text-[clamp(3.6rem,14vw,11.5rem)] font-semibold leading-[0.86] tracking-[-0.045em]" style={{ animationDelay: '0.35s' }}>
            Tierra<br className="sm:hidden" /> Bomba
          </h1>
          <div className="trazo mt-6 h-px w-24 bg-arcilla" />
          <p className="subir mt-5 max-w-xl text-lg font-light leading-snug text-white/90 sm:text-2xl" style={{ animationDelay: '0.6s' }}>
            Planificación y adaptación territorial frente a la pérdida de suelo costero
          </p>
          <div className="subir mt-8 flex flex-wrap items-end justify-between gap-6" style={{ animationDelay: '0.8s' }}>
            <p className="text-sm text-white/65">Alejandra Gómez · Ana Casas</p>
            <p className="etiqueta flex items-center gap-3 text-white/70">Desplázate <span className="flecha inline-block">↓</span></p>
          </div>
        </div>
      </section>

      {/* 01 · problema */}
      <section id="problema" className="relative flex min-h-[150svh] items-center">
        <div className="absolute inset-0 bg-tinta/45" />
        <div className="relative w-full max-w-[44rem] px-5 py-24 sm:px-12 lg:ml-[5vw]">
          <p className="etiqueta text-arcilla">01 · Formulación del problema</p>
          <ScrollWords text={PROBLEMA} className="mt-6 text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl" />
          {sinEscena && <p className="mt-8 text-sm text-white/60">Este dispositivo no pudo mostrar la vista 3D; se muestra la imagen satelital y los datos.</p>}
        </div>
      </section>

      {/* 02 · erosión (la escena la mueve el scroll) */}
      <section id="erosion" style={{ height: '520svh' }} aria-label="Simulación de la erosión a 10, 20 y 30 años" />
      {/* 03 · vías */}
      <section id="vias" style={{ height: '150svh' }} aria-label="Todas las vías de la isla" />
      {/* 04 · sintaxis */}
      <section id="sintaxis" style={{ height: `${PASOS.length * ALTO_PASO}svh` }} aria-label="Sintaxis espacial" />

      {/* paneles flotantes */}
      {api && cap === 'erosion' && <PanelErosion stats={stats} anio={anio} modo={modo} />}
      {api && cap === 'vias' && <PanelVias stats={stats} datos={datos} />}
      {api && cap === 'sintaxis' && (
        <>
          <PanelSintaxis paso={PASOS[pasoIdx]} datos={datos} stats={stats} ctrl={ctrl} setCtrl={setCtrl} />
          <Indice activo={pasoIdx} onIr={irAPaso} />
        </>
      )}

      <Cierre api={api} />
    </div>
  );
}

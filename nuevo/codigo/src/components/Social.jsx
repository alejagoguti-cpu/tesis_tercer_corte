import React, { useEffect, useRef, useState } from 'react';
import Red from './Red.jsx';

// =============================================================================
// Lo social: percepciones y datos locales en forma de diagramas.
// Todas las cifras son las entregadas por la autora; cada bloque cita su fuente.
// =============================================================================

const ARC = '#c86d51';
const MAR = '#5fb3a8';
const CIELO = '#8fd3ee';
const ARENA = '#e8e2d5';

function useVisto(umbral = 0.25) {
  const ref = useRef(null);
  const [v, setV] = useState(() => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  useEffect(() => {
    const el = ref.current;
    if (!el || v) return undefined;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setV(true); io.disconnect(); } }, { threshold: umbral });
    io.observe(el);
    return () => io.disconnect();
  }, [v, umbral]);
  return [ref, v];
}

function Bloque({ n, titulo, bajada, fuente, children }) {
  const [ref, visto] = useVisto(0.12);
  return (
    <section ref={ref} className={`border-t border-white/18 py-16 sm:py-24 transition-all duration-1000 ${visto ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
      <div className="grid gap-8 lg:grid-cols-[minmax(0,17rem)_1fr] lg:gap-16">
        <header>
          <p className="etiqueta text-arcilla">{n}</p>
          <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">{titulo}</h3>
          {bajada && <p className="mt-3 text-sm leading-relaxed text-white/60">{bajada}</p>}
          {fuente && <p className="mt-5 border-t border-white/12 pt-3 text-[11px] leading-snug text-white/40">Fuente: {fuente}</p>}
        </header>
        <div>{children}</div>
      </div>
    </section>
  );
}

/** barra apilada que crece al entrar en pantalla */
function Apilada({ partes, alto = 'h-9', etiquetas = true }) {
  const [ref, visto] = useVisto(0.4);
  return (
    <div ref={ref}>
      <div className={`flex ${alto} w-full gap-[2px] overflow-hidden rounded-[3px]`}>
        {partes.map((p, i) => (
          <div
            key={p.l}
            className="flex items-center overflow-hidden whitespace-nowrap px-2 text-[11px] font-medium text-[#0b1015] transition-[flex-grow,opacity] duration-1000 ease-out"
            style={{ flexGrow: visto ? p.v : 0.0001, flexBasis: 0, background: p.c || [ARC, MAR, CIELO, ARENA][i % 4], transitionDelay: `${i * 120}ms`, opacity: visto ? 1 : 0.2 }}
          >
            <span className="num">{p.v}{p.suf ?? ' %'}</span>
          </div>
        ))}
      </div>
      {etiquetas && (
        <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-[12px] text-white/70">
          {partes.map((p, i) => (
            <li key={p.l} className="flex items-center gap-1.5"><i className="inline-block h-2 w-2" style={{ background: p.c || [ARC, MAR, CIELO, ARENA][i % 4] }} />{p.l}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

function BarraSimple({ etiqueta, valor, max, texto, color = ARC, destacado = false }) {
  const [ref, visto] = useVisto(0.4);
  return (
    <div ref={ref} className="grid grid-cols-[8.5rem_1fr_auto] items-center gap-3 text-[13px] sm:grid-cols-[11rem_1fr_auto]">
      <span className={destacado ? 'font-semibold' : 'text-white/75'}>{etiqueta}</span>
      <div className="h-3 bg-white/10">
        <div className="h-full transition-[width] duration-1000 ease-out" style={{ width: visto ? `${(valor / max) * 100}%` : 0, background: color }} />
      </div>
      <span className="num w-16 text-right text-white/80">{texto}</span>
    </div>
  );
}

/* ---------------------------------------------------------------- 02.1 percepción */
const PERCEPCION = [
  { corto: 'Casas, iglesia y calles', t: 'La erosión había afectado gravemente las casas, la iglesia y las calles.', n: 215, p: '90,3', g: 0 },
  { corto: 'Agua dulce comunitaria', t: 'Había disminuido la calidad o disponibilidad del agua dulce para uso comunitario.', n: 213, p: '89,5', g: 0 },
  { corto: 'Turismo', t: 'La pérdida de playa había perjudicado el turismo.', n: 206, p: '86,6', g: 0 },
  { corto: 'Pesca y sustento', t: 'Habían cambiado los lugares de pesca y la abundancia de peces de los que dependía el sustento familiar.', n: 196, p: '82,4', g: 0 },
  { corto: 'Costumbres', t: 'La erosión había cambiado las costumbres de la población.', n: 101, p: '42,4', g: 1 },
  { corto: 'Actividades comunitarias', t: 'Las actividades comunitarias se realizaban con menor frecuencia.', n: 100, p: '42,0', g: 1 },
  { corto: 'Lugares de encuentro', t: 'El deterioro de los lugares de encuentro dificultaba mantener las actividades culturales.', n: 93, p: '39,1', g: 1 },
  { corto: 'Transmisión de saberes', t: 'La erosión dificultaba que una generación transmitiera sus saberes a la siguiente.', n: 57, p: '23,9', g: 1 },
];
const TOTAL = 238;
const COLS = 34;

function Percepcion() {
  const [sel, setSel] = useState(0);
  const [ref, visto] = useVisto(0.2);
  const it = PERCEPCION[sel];
  const col = it.g === 0 ? ARC : MAR;
  return (
    <div ref={ref}>
      <div className="flex flex-wrap gap-x-6 gap-y-1 text-[12px] text-white/70">
        <span className="flex items-center gap-2"><i className="inline-block h-2.5 w-2.5" style={{ background: ARC }} />Daño material y del sustento</span>
        <span className="flex items-center gap-2"><i className="inline-block h-2.5 w-2.5" style={{ background: MAR }} />Vida comunitaria y cultural</span>
      </div>

      <ul className="mt-5 space-y-1" role="listbox" aria-label="Percepciones de la erosión">
        {PERCEPCION.map((x, i) => (
          <li key={x.corto}>
            <button
              type="button"
              role="option"
              aria-selected={sel === i}
              onClick={() => setSel(i)}
              onMouseEnter={() => window.matchMedia('(hover: hover)').matches && setSel(i)}
              className={`grid w-full grid-cols-[7.6rem_1fr_3.3rem] items-center gap-3 rounded-[3px] px-2 py-1.5 text-left transition-colors sm:grid-cols-[11rem_1fr_3.6rem] ${sel === i ? 'bg-white/8' : 'hover:bg-white/5'}`}
            >
              <span className={`text-[13px] leading-tight ${sel === i ? 'font-semibold text-white' : 'text-white/70'}`}>{x.corto}</span>
              <span className="h-3.5 bg-white/8">
                <span className="block h-full transition-[width] duration-[1100ms] ease-out" style={{ width: visto ? `${(x.n / TOTAL) * 100}%` : 0, background: x.g === 0 ? ARC : MAR, transitionDelay: `${i * 90}ms`, opacity: sel === i ? 1 : 0.7 }} />
              </span>
              <span className="num text-right text-[13px] text-white/85">{x.p} %</span>
            </button>
          </li>
        ))}
      </ul>

      {/* 238 personas */}
      <div className="mt-8 border-t border-white/14 pt-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <p className="max-w-xl text-base leading-snug text-white/90 sm:text-lg" key={sel}>{it.t}</p>
          <p className="num text-right"><span className="text-4xl font-semibold leading-none" style={{ color: col }}>{it.n}</span><span className="ml-1 text-sm text-white/55">de {TOTAL} personas</span></p>
        </div>
        <div className="mt-4 grid gap-[3px]" style={{ gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))` }} aria-hidden="true">
          {Array.from({ length: TOTAL }, (_, i) => (
            <span key={i} className="aspect-square rounded-full transition-colors duration-500" style={{ background: i < it.n ? col : 'rgba(255,255,255,0.13)', transitionDelay: `${(i % COLS) * 8 + Math.floor(i / COLS) * 4}ms` }} />
          ))}
        </div>
        <p className="mt-3 text-[11px] text-white/40">Cada punto es una persona encuestada. Se cuentan quienes respondieron «de acuerdo» o «totalmente de acuerdo».</p>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- 02.2 convivencia */
const NODOS_VECINOS = [
  { titulo: 'Lo que valoran', sub: 'Unión entre familias', icono: 'union', pos: [20, 17], detalle: 'En talleres de memoria de la Universidad Tecnológica de Bolívar, personas mayores recordaron la unión entre familias, la pesca y el cultivo. Una participante resumió su postura: «mientras sigamos unidos y sin egoísmos, actuando como comunidad, resistiremos».' },
  { titulo: 'Lo que genera conflicto', sub: 'Picós, basura, luz', icono: 'ruido', pos: [80, 17], detalle: 'Residentes entrevistados señalaron dos problemas concretos: el volumen de los picós durante la noche y la basura que algunas personas dejaban junto a la vivienda vecina. También describieron diferencias de iluminación entre calles.' },
  { titulo: 'Dónde se encuentran', sub: 'Esquinas y mar', icono: 'juego', pos: [86, 55], detalle: 'Un reportaje de 2018 documentó partidas de dominó en las esquinas, música de champeta y niños que usaban el mar como lugar de juego.' },
  { titulo: 'Cómo se organizan', sub: 'JAC, Consejo y Comité', icono: 'bandera', pos: [76, 88], detalle: 'La memoria local registra la organización inicial mediante la Junta de Acción Comunal y, después, el Consejo Comunitario de Comunidades Negras de Tierra Bomba. El estudio sobre erosión también documentó un Comité Barrial de Emergencias que acompañó recorridos por el territorio.' },
  { titulo: 'Cómo cambió el barrio', sub: 'De Abajo a Arriba', icono: 'cambio', pos: [24, 88], detalle: 'Familias del Barrio Abajo, junto a la orilla, se trasladaron al Barrio Arriba después de perder construcciones por erosión. Los mayores describieron las calles de la parte alta como más estrechas que los callejones del antiguo barrio.' },
  { titulo: 'Lugares que recuerdan', sub: 'La calle Primera', icono: 'lugar', pos: [14, 55], detalle: 'Inelda Martínez, dueña de un restaurante de madera, relató en 2018 la desaparición de la calle Primera. Orlando Botero, lanchero, contó que el mar había destruido la casa de su abuela y la de su madre, y amenazaba la suya.' },
];

function Calendario() {
  const [ref, visto] = useVisto(0.4);
  const FIESTAS = [
    { f: 'San Antonio', d: '13 de junio', x: 12 / 61 },
    { f: 'San Juan', d: '24 de junio', x: 23 / 61, nota: 'regatas de botes de vela' },
    { f: 'Virgen del Carmen', d: '16 de julio', x: 45 / 61 },
  ];
  return (
    <div ref={ref} className="mt-10 border-t border-white/14 pt-6">
      <p className="etiqueta text-white/50">Lo que celebran juntos · fiestas que recordaban los mayores</p>
      <div className="relative mt-10 h-20">
        <div className="absolute inset-x-0 top-8 h-px bg-white/25" />
        <div className="absolute left-0 top-8 h-px bg-arcilla transition-[width] duration-[1600ms] ease-out" style={{ width: visto ? '100%' : 0 }} />
        <span className="etiqueta absolute left-0 top-11 text-white/35">1 jun</span>
        <span className="etiqueta absolute right-0 top-11 text-white/35">31 jul</span>
        {FIESTAS.map((x, i) => (
          <div key={x.f} className="absolute top-0 -translate-x-1/2 text-center transition-all duration-700" style={{ left: `${x.x * 100}%`, opacity: visto ? 1 : 0, transform: `translateX(-50%) translateY(${visto ? 0 : 10}px)`, transitionDelay: `${600 + i * 350}ms` }}>
            <p className="whitespace-nowrap text-[12px] font-semibold leading-tight">{x.f}</p>
            <p className="num whitespace-nowrap text-[11px] text-white/55">{x.d}</p>
            <i className="mx-auto mt-1 block h-2.5 w-2.5 rounded-full bg-arcilla" />
            {x.nota && <p className="absolute left-1/2 top-[4.6rem] -translate-x-1/2 whitespace-nowrap text-[10px] text-white/50">{x.nota}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

function Convivencia() {
  return (
    <div>
      <Red
        centro={{ titulo: 'Vida de barrio', sub: 'Tierra Bomba', icono: 'barrio', detalle: 'Lo que dicen los habitantes sobre convivir, encontrarse y organizarse. Toca cada nodo para leer el dato local.' }}
        nodos={NODOS_VECINOS}
        textoInicio="Descubrir el primer tema →"
        textoFinal="Ver los datos de escuela ↓"
        alFinal={() => document.getElementById('social-escuela')?.scrollIntoView({ behavior: 'smooth' })}
      />
      <Calendario />
    </div>
  );
}

/* ---------------------------------------------------------------- 02.3 escuela */
function Escuela() {
  const [ref, visto] = useVisto(0.15);
  return (
    <div ref={ref} className="space-y-12">
      <div>
        <p className="etiqueta text-white/50">Matrícula de referencia · Plan Anual de Contratación 2025</p>
        <p className="num mt-2 text-5xl font-semibold leading-none">886 <span className="text-base font-normal text-white/55">estudiantes en 42 grupos</span></p>
        <div className="mt-4">
          <Apilada
            alto="h-11"
            partes={[
              { v: 729, l: 'Sede Tierra Bomba · 34 grupos', c: ARC, suf: '' },
              { v: 157, l: 'Sede Punta Arena · 8 grupos', c: CIELO, suf: '' },
            ]}
          />
        </div>
      </div>

      <div>
        <p className="etiqueta text-white/50">Quiénes estudiaban en Tierra Bomba · matrícula reportada en 2022</p>
        <div className="mt-4 space-y-5">
          <div><p className="mb-1.5 text-[13px] text-white/70">Por sexo</p><Apilada alto="h-8" partes={[{ v: 46, l: 'Mujeres', c: ARC }, { v: 54, l: 'Hombres', c: ARENA }]} /></div>
          <div><p className="mb-1.5 text-[13px] text-white/70">Por nivel (porcentajes redondeados)</p><Apilada alto="h-8" partes={[{ v: 8, l: 'Preescolar', c: CIELO }, { v: 43, l: 'Primaria', c: ARC }, { v: 35, l: 'Secundaria', c: MAR }, { v: 13, l: 'Media', c: ARENA }]} /></div>
          <div>
            <p className="mb-1.5 text-[13px] text-white/70">Sede de Punta Arena, por nivel</p>
            <Apilada alto="h-8" partes={[{ v: 15, l: 'Preescolar', c: CIELO }, { v: 85, l: 'Primaria', c: ARC }]} />
            <p className="mt-2 text-[12px] leading-snug text-white/60">Para cursar sexto grado, los estudiantes de Punta Arena tenían que cambiar de sede.</p>
          </div>
        </div>
      </div>

      <div>
        <p className="etiqueta text-white/50">Deserción durante el año escolar · I.E. de Tierra Bomba</p>
        <div className="mt-4 space-y-2.5">
          <BarraSimple etiqueta="Tierra Bomba 2019" valor={2.6} max={4.2} texto="2,6 %" />
          <BarraSimple etiqueta="Tierra Bomba 2022" valor={0.9} max={4.2} texto="0,9 %" color={MAR} destacado />
          <BarraSimple etiqueta="Promedio distrital 2022" valor={3.9} max={4.2} texto="3,9 %" color="rgba(255,255,255,0.45)" />
        </div>
      </div>

      <div>
        <p className="etiqueta text-white/50">¿Había un deterioro educativo asociado a la erosión? · 238 habitantes encuestados</p>
        <div className="mt-4"><Apilada alto="h-8" partes={[{ v: 47.9, l: 'Lo percibía', c: ARC }, { v: 52.1, l: 'En desacuerdo', c: 'rgba(255,255,255,0.4)' }]} /></div>
        <p className="mt-2 text-[12px] leading-snug text-white/60">El estudio de 2017 documentó docentes que viajaban en lancha desde Cartagena; el oleaje alto dificultaba su llegada.</p>
      </div>

      <div className="border border-dashed border-white/30 p-5">
        <p className="etiqueta text-[#e0917a]">Dato que falta</p>
        <p className="mt-2 text-sm leading-relaxed text-white/80">
          <strong className="font-semibold text-white">¿Cuántos niños del poblado estudian en Cartagena continental?</strong> No hay una cifra pública verificada: los registros cuentan estudiantes por sede, y el aforo de lanchas cuenta pasajeros sin identificar cuántos son escolares residentes.
        </p>
      </div>
      <p className="text-[12px] leading-snug text-white/50">Colegio del poblado: Institución Etnoeducativa de Tierra Bomba, oficial, rural y mixta, con preescolar, primaria, secundaria y media, y educación para adultos.</p>
    </div>
  );
}

/* ---------------------------------------------------------------- 02.4 conexiones */
const DESTINOS = ['Hospital de Bocagrande', 'La Bodeguita', 'Bazurto', 'Sector del Hotel Hilton'];

function Conexiones() {
  const [ref, visto] = useVisto(0.15);
  const ys = [45, 112, 188, 255];
  return (
    <div ref={ref} className="space-y-14">
      <div>
        <p className="etiqueta text-white/50">Cuatro destinos desde Tierra Bomba · estudio de transporte de 2014</p>
        <svg viewBox="0 0 640 300" className="mt-3 w-full" role="img" aria-label="Tierra Bomba conectada con cuatro destinos de Cartagena continental">
          {ys.map((y, i) => {
            const d = `M120 150 C 260 150, 300 ${y}, 440 ${y}`;
            return (
              <g key={DESTINOS[i]}>
                <path d={d} fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" />
                <path d={d} fill="none" stroke={CIELO} strokeWidth="2" pathLength="1" strokeDasharray="1" strokeDashoffset={visto ? 0 : 1} style={{ transition: `stroke-dashoffset 1.4s ease ${i * 0.2}s` }} />
                {visto && <circle r="3.4" fill="#fff"><animateMotion dur="3.2s" begin={`${i * 0.5}s`} repeatCount="indefinite" path={d} /></circle>}
                <circle cx="440" cy={y} r="5" fill={ARC} />
                <text x="454" y={y + 4} fill="#f4f1ec" fontSize="14" fontFamily="Space Grotesk, system-ui, sans-serif">{DESTINOS[i]}</text>
              </g>
            );
          })}
          <circle cx="104" cy="150" r="30" fill="none" stroke={ARC} strokeWidth="1" opacity="0.5">
            {visto && <animate attributeName="r" values="30;46;30" dur="3.4s" repeatCount="indefinite" />}
            {visto && <animate attributeName="opacity" values="0.5;0;0.5" dur="3.4s" repeatCount="indefinite" />}
          </circle>
          <circle cx="104" cy="150" r="20" fill={ARC} />
          <text x="104" y="198" textAnchor="middle" fill="#f4f1ec" fontSize="14" fontWeight="600" fontFamily="Space Grotesk, system-ui, sans-serif">Tierra Bomba</text>
        </svg>
      </div>

      <div>
        <p className="etiqueta text-white/50">Embarcadero del Hospital de Bocagrande · 13 horas, de 6:00 a. m. a 7:00 p. m. · aforo de mayo de 2014</p>
        <div className="mt-4 space-y-3">
          <BarraSimple etiqueta="Tierra Bomba → Bocagrande" valor={614} max={614} texto="614" color={CIELO} destacado />
          <BarraSimple etiqueta="Bocagrande → Tierra Bomba" valor={407} max={614} texto="407" color={ARC} />
        </div>
        <p className="mt-2 text-[12px] text-white/55">Viajes de pasajeros registrados en cada sentido.</p>
      </div>

      <div>
        <p className="etiqueta text-white/50">Centro de Salud de Tierra Bomba · renovado en 2022</p>
        <div className="mt-4 space-y-3">
          <BarraSimple etiqueta="Área en uso, antes" valor={84} max={253} texto="84 m²" color="rgba(255,255,255,0.45)" />
          <BarraSimple etiqueta="Área en uso, después" valor={253} max={253} texto="253 m²" color={MAR} destacado />
        </div>
        <p className="mb-1.5 mt-5 text-[13px] text-white/70">Capacidad anunciada: 170 servicios semanales</p>
        <Apilada alto="h-8" partes={[{ v: 72, l: 'Medicina general', c: MAR, suf: '' }, { v: 48, l: 'Odontología y vacunación', c: CIELO, suf: '' }, { v: 50, l: 'Toma de muestras', c: ARENA, suf: '' }]} />
        <p className="mt-2 text-[12px] leading-snug text-white/60">Habitantes también reportaron viajes en lancha a Bocagrande para recibir atención médica.</p>
      </div>

      <div>
        <p className="etiqueta text-white/50">Vía entre los cuatro poblados · inaugurada en 2021</p>
        <div className="mt-4 flex gap-[3px]" aria-label="13 kilómetros, 4 intervenidos">
          {Array.from({ length: 13 }, (_, i) => (
            <span key={i} className="h-7 flex-1 transition-colors duration-700" style={{ background: visto && i < 4 ? ARC : 'rgba(255,255,255,0.16)', transitionDelay: `${300 + i * 90}ms` }} />
          ))}
        </div>
        <p className="num mt-2 text-sm text-white/85"><strong className="font-semibold">13 km</strong> de vía carreteable · <span style={{ color: '#e0917a' }}>4 km intervenidos</span> en puntos críticos</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {['Tierra Bomba', 'Punta Arena', 'Caño del Oro', 'Bocachica'].map((p) => <li key={p} className="border border-white/25 px-2.5 py-1 text-[12px] text-white/80">{p}</li>)}
        </ul>
        <p className="mt-3 text-[12px] leading-snug text-white/60">El diagnóstico distrital registra el uso de mototaxis para los desplazamientos internos.</p>
      </div>

      <div>
        <p className="etiqueta text-white/50">Equipamientos culturales y comunitarios del poblado</p>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          {['Casa de la Cultura Belmir Caraballo Díaz', 'Iglesia', 'Cementerio', 'Estación de Policía'].map((e) => (
            <li key={e} className="border-t border-white/18 pt-2 text-[13px] text-white/85">{e}</li>
          ))}
        </ul>
        <p className="mt-3 text-[12px] leading-snug text-white/60">El cementerio y la iglesia aparecen en testimonios e investigaciones sobre afectaciones del borde costero.</p>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- capítulo */
const FUENTES = [
  ['Encuesta a 238 habitantes (2016, publicada en 2017)', 'https://ridum.umanizales.edu.co/bitstreams/beb66fb6-d39b-4084-a84b-a0df044858c4/download'],
  ['Talleres de memoria, Universidad Tecnológica de Bolívar', 'https://repositorio.utb.edu.co/bitstream/20.500.12585/12577/1/Tierra%20Bomba.pdf'],
  ['Caracol Radio, 2018', 'https://caracol.com.co/emisora/2018/05/10/cartagena/1525960724_306675.html'],
  ['Plan Anual de Contratación del Servicio Educativo 2025, SED Cartagena', 'https://www.sedcartagena.gov.co/wp-content/uploads/2025/11/PACSE.CARTAGENA_2025.pdf'],
  ['Informe de Calidad de Vida 2022, Cartagena Cómo Vamos', 'https://cartagenacomovamos.org/wp-content/uploads/2023/10/Informe-de-Calidad-de-Vida-2022-Baru-y-Tierrabomba-CCV.pdf'],
  ['Informe distrital de octubre de 2022, ESE Cartagena de Indias', 'https://esecartagenadeindias.gov.co/wp-content/uploads/2022/10/INFORME-C.-Distrital-OCTUBRE-2022.pdf'],
  ['Reporteros Asociados, 2017', 'https://www.reporterosasociados.com.co/2017/02/tierra-bomba-de-tiempo/'],
  ['Armada Nacional: carreteable en la zona insular', 'https://www.armada.mil.co/es/content/pobladores-zona-insular-armada-colombia-y-gobernacion-bolivar-inauguran-carreteable-en-isla'],
  ['Estudio de transporte acuático de Cartagena, 2014', 'https://seguimientopot.cartagena.gov.co/sites/default/files/2025-04/2014%20Final%20Prefactibilidad%20-%20APP%20Acuatico%20Cartagena%20V2%20Limpia%20%20Rv%20PV%20%281%29.pdf'],
];

export default function Social() {
  return (
    <section id="social" className="relative bg-tinta text-papel">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-10 sm:py-28">
        <p className="etiqueta text-arcilla">02 · Lo social</p>
        <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.04] tracking-tight sm:text-6xl">Cómo lo viven quienes lo habitan.</h2>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70">
          Percepciones y datos locales reunidos de encuestas, talleres de memoria, prensa e informes oficiales. Son datos de años distintos y no describen la isla de hoy: sirven para entender qué está en juego además del suelo.
        </p>

        <div className="mt-16">
          <Bloque n="02.1" titulo="Qué percibían los habitantes" bajada="Encuesta a 238 habitantes de Tierra Bomba, realizada en 2016 y publicada en 2017." fuente="Universidad de Manizales (RIDUM). Los porcentajes reúnen a quienes respondieron «de acuerdo» o «totalmente de acuerdo».">
            <Percepcion />
          </Bloque>
          <Bloque n="02.2" titulo="Vecinos, convivencia y lugares de encuentro" bajada="Lo que dicen los mayores y los residentes, más lo que registró la prensa." fuente="Universidad Tecnológica de Bolívar (talleres de memoria) y Caracol Radio (2018).">
            <Convivencia />
          </Bloque>
          <div id="social-escuela" />
          <Bloque n="02.3" titulo="Niños, colegio y desplazamientos por estudio" bajada="Cuántos estudian, hasta qué grado y qué no se sabe." fuente="SED Cartagena (PACSE 2025), Cartagena Cómo Vamos (Informe de Calidad de Vida 2022) y encuesta de 2017.">
            <Escuela />
          </Bloque>
          <Bloque n="02.4" titulo="Equipamientos, vías y conexiones" bajada="Cómo se conecta la isla por dentro y con Cartagena continental." fuente="Estudio de transporte de 2014, ESE Cartagena de Indias (2022), Armada Nacional (2021) y Reporteros Asociados (2017).">
            <Conexiones />
          </Bloque>
        </div>

        <details className="mt-6 border-t border-white/18 pt-6 text-sm text-white/60">
          <summary className="etiqueta cursor-pointer text-white/70">Fuentes de este capítulo</summary>
          <ul className="mt-4 space-y-1.5">
            {FUENTES.map(([t, u]) => (
              <li key={u}><a href={u} target="_blank" rel="noopener noreferrer" className="underline decoration-white/25 underline-offset-4 hover:text-white">{t}</a></li>
            ))}
          </ul>
        </details>
      </div>
    </section>
  );
}

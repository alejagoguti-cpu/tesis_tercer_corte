// =============================================================================
// Plan maestro de Tierra Bomba: geometría y datos tomados de la tesis
// (repositorio alejagoguti-cpu/tesis: src/utils/cartagena3D.js y src/data/projectData.js).
// Lo que NO viene de la tesis y es propuesta de esta presentación está marcado con «propuesta».
// =============================================================================

// Meseta segura +22,00 m s.n.m. (polígono de la tesis, lon/lat)
export const MESETA = [
  [-75.57396, 10.37487], [-75.57534, 10.37523], [-75.57662, 10.37447], [-75.57731, 10.3732],
  [-75.57758, 10.37194], [-75.57727, 10.37113], [-75.57691, 10.37054], [-75.57638, 10.37134],
  [-75.57595, 10.37221], [-75.57516, 10.37264], [-75.5745, 10.37348], [-75.57408, 10.37419],
];

// Puntos estratégicos de la tesis
export const ESCUELA = [-75.5755, 10.3732]; // equipamiento educativo, dentro de la meseta
export const VIVIENDAS = [-75.5768, 10.3742]; // viviendas reubicadas en suelo firme
export const SENDEROS = [-75.5742, 10.3735]; // senderos peatonales y espacio colectivo
export const PARQUE = [-75.576, 10.3715]; // «Parque ecológico y barreras costeras»
// Humedal artificial / bio-retención entre el equipamiento y el parque (propuesta: ubicación indicativa)
export const HUMEDAL = [-75.5757, 10.3724];

// Red vial del plan maestro (tesis)
export const VIAS = [
  { id: 'arterial', nombre: 'Vía arterial', desc: 'Del asentamiento actual a la meseta y al colegio', pts: [[-75.5765, 10.3808], [-75.5762, 10.3795], [-75.5758, 10.3778], [-75.5755, 10.376], [-75.5754, 10.3745], [-75.5755, 10.3732]] },
  { id: 'anular', nombre: 'Vía anular', desc: 'Circunvala la meseta y conecta colegio y viviendas', pts: [[-75.5742, 10.3748], [-75.5753, 10.3752], [-75.5766, 10.3745], [-75.5772, 10.3732], [-75.5774, 10.372], [-75.5768, 10.3712], [-75.5758, 10.3722], [-75.5746, 10.3734], [-75.5742, 10.3748]] },
  { id: 'colectora', nombre: 'Vía colectora', desc: 'De la meseta al flanco oriental y Caño del Oro', pts: [[-75.5755, 10.3732], [-75.5725, 10.3728], [-75.569, 10.372], [-75.564, 10.3695]] },
];
// Corredores ecológicos (tesis)
export const CORREDORES = [
  { id: 'parque', nombre: 'Corredor ecológico', desc: 'De la meseta al parque ecológico central y la reserva', desde: [-75.5755, 10.3732], hasta: [-75.576, 10.3715] },
  { id: 'cano', nombre: 'Conexión productiva', desc: 'De la meseta a Caño del Oro: ecoturismo y pesca', desde: [-75.5745, 10.373], hasta: [-75.5685, 10.372] },
];

// Cifras del programa (tesis)
export const PROGRAMA = {
  cotaM: 22,
  viviendas: 120,
  cubiertaM2: 1850,
  aljibeL: 450000,
  tomas: 12,
  agoraM2: 400,
  estudiantes: 350,
  usuariosFinDeSemana: 1200,
};

// Criterios de diseño (tesis: estrategia territorial y bioclimática + red rizomática de la vivienda progresiva)
export const CRITERIOS = [
  { n: '01', titulo: 'Cota de impregnación cero', texto: 'Implantación en la meseta a +22,00 m s.n.m., fuera del alcance de la erosión y del aumento del nivel del mar para los próximos 100 años.', fuente: 'tesis' },
  { n: '02', titulo: 'Célula hídrica colectiva', texto: 'La cubierta del colegio funciona como un macro-embudo captador de agua de lluvia conectado a un aljibe modular de 450.000 L; un dispensario de 12 tomas reparte el agua.', fuente: 'tesis' },
  { n: '03', titulo: 'Materialidad caribeña resiliente', texto: 'Estructura en madera tratada, bloques de tierra comprimida (BTC) con áridos locales y celosías cerámicas para ventilación cruzada continua.', fuente: 'tesis' },
  { n: '04', titulo: 'Paisajismo fitodepurador', texto: 'Borduras de vegetación xerófila costera y vetiver que fijan el suelo y tratan las aguas grises antes de su infiltración.', fuente: 'tesis' },
  { n: '05', titulo: 'Vivienda progresiva', texto: 'Núcleo inicial con estructura preparada para crecer, ampliación básica por adición y condiciones de habitabilidad con mayor confort y continuidad espacial.', fuente: 'tesis (red rizomática)' },
  { n: '06', titulo: 'Borde vivo', texto: 'La franja que el mar alcanzará en 30 años no se vuelve a ocupar: se restaura como parque ecológico con vegetación costera, vetiver y manglar. Su efecto sobre la erosión no se midió en este trabajo.', fuente: 'propuesta de esta presentación' },
];

// Proyección local para esquemas en planta: x hacia el este, y hacia el norte, en metros
const LAT0 = 10.3725;
const LON0 = -75.5745;
const KX = 111320 * Math.cos((LAT0 * Math.PI) / 180);
const KY = 110574;
export const aMetros = ([lon, lat]) => [(lon - LON0) * KX, (lat - LAT0) * KY];

/** polígono de una elipse en metros alrededor de un punto lon/lat (para parque y humedal, propuesta) */
export const elipse = ([lon, lat], rx, ry, n = 48) => {
  const [cx, cy] = aMetros([lon, lat]);
  return Array.from({ length: n }, (_, i) => { const a = (i / n) * Math.PI * 2; return [cx + rx * Math.cos(a), cy + ry * Math.sin(a)]; });
};
export const PARQUE_RADIOS = [170, 120]; // m (propuesta)
export const HUMEDAL_RADIOS = [50, 32]; // m (propuesta)

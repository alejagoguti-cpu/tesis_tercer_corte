import * as THREE from 'three';

// Rampa de color de las capas de análisis, en el orden clásico de depthmapX: azul (bajo) → rojo (alto).
// Tonos algo apagados para que se lean sobre la foto satelital.
export const PARADAS = [
  [0.0, '#3f4cc4'],
  [0.25, '#2aa7d8'],
  [0.5, '#3cc27a'],
  [0.75, '#f2d14a'],
  [1.0, '#e8503a'],
];

const stops = PARADAS.map(([t, hex]) => [t, new THREE.Color(hex)]);
const tmp = new THREE.Color();

/** t en [0,1] -> THREE.Color en espacio lineal (para atributos de vértice) */
export function rampa(t, out = new THREE.Color()) {
  const x = Math.max(0, Math.min(1, t));
  for (let i = 0; i < stops.length - 1; i++) {
    const [t0, c0] = stops[i];
    const [t1, c1] = stops[i + 1];
    if (x <= t1) {
      tmp.copy(c0).lerp(c1, (x - t0) / (t1 - t0));
      return out.copy(tmp);
    }
  }
  return out.copy(stops[stops.length - 1][1]);
}

export const gradienteCSS = `linear-gradient(90deg, ${PARADAS.map(([t, c]) => `${c} ${t * 100}%`).join(', ')})`;

/** percentil p (0..1) de un arreglo numérico, ignorando valores <= 0 */
export function percentil(valores, p) {
  const v = Array.from(valores).filter((x) => x > 0 && Number.isFinite(x)).sort((a, b) => a - b);
  if (!v.length) return 0;
  return v[Math.min(v.length - 1, Math.max(0, Math.floor(p * (v.length - 1))))];
}

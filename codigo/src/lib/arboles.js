import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// Árboles reales: modelos escaneados Island Tree 01 y 02 (Poly Haven, CC0) colocados SOLO en las
// posiciones de copas detectadas en la foto satelital (vegetacion.json). No se inventa ninguna posición.

export const BASE = (() => {
  const b = import.meta.env.BASE_URL || './';
  return b.endsWith('/') ? b : `${b}/`;
})();

const loadGLB = (url) => new Promise((res, rej) => new GLTFLoader().load(url, res, undefined, rej));

function bakeParts(scene) {
  scene.updateMatrixWorld(true);
  const parts = [];
  scene.traverse((o) => {
    if (!o.isMesh) return;
    const g = o.geometry.clone();
    g.applyMatrix4(o.matrixWorld);
    parts.push({ geometry: g, material: Array.isArray(o.material) ? o.material[0] : o.material });
  });
  return parts;
}

export async function prepararEspecies() {
  const especies = [];
  for (const id of ['island_tree_01', 'island_tree_02']) {
    const [hojas, madera] = await Promise.all([
      loadGLB(`${BASE}assets/modelo/arboles/${id}_L1_hojas.glb`),
      loadGLB(`${BASE}assets/modelo/arboles/${id}_L1_madera.glb`),
    ]);
    const parts = [
      ...bakeParts(hojas.scene).map((p) => ({ ...p, kind: 'leaf' })),
      ...bakeParts(madera.scene).map((p) => ({ ...p, kind: 'wood' })),
    ];
    const box = new THREE.Box3();
    parts.forEach((p) => { p.geometry.computeBoundingBox(); box.union(p.geometry.boundingBox); });
    const h = box.max.y - box.min.y || 1;
    const norm = new THREE.Matrix4()
      .makeScale(1 / h, 1 / h, 1 / h)
      .multiply(new THREE.Matrix4().makeTranslation(-(box.min.x + box.max.x) / 2, -box.min.y, -(box.min.z + box.max.z) / 2));
    parts.forEach((p) => {
      p.geometry.applyMatrix4(norm);
      p.material = p.material.clone();
      p.material.side = THREE.DoubleSide;
      if (p.kind === 'leaf') {
        p.material.alphaTest = Math.max(p.material.alphaTest || 0, 0.4);
        p.material.color.multiplyScalar(1.9);
        p.material.envMapIntensity = 1.4;
      }
    });
    especies.push(parts);
  }
  return especies;
}

/** lista: [{x, y, z, rot, height, tone}] en coordenadas de mundo; celda = tamaño del bloque para el recorte por cámara */
export function instanciarArboles(especies, lista, celda = 60) {
  const bloques = new Map();
  lista.forEach((t, i) => {
    const sp = (Math.imul(i + 1, 2654435761) >>> 0) % especies.length;
    const key = `${sp}:${Math.floor(t.x / celda)}:${Math.floor(t.z / celda)}`;
    if (!bloques.has(key)) bloques.set(key, []);
    bloques.get(key).push(t);
  });
  const group = new THREE.Group();
  const m4 = new THREE.Matrix4();
  const q = new THREE.Quaternion();
  const up = new THREE.Vector3(0, 1, 0);
  const sc = new THREE.Vector3();
  const pos = new THREE.Vector3();
  const col = new THREE.Color();
  for (const [key, items] of bloques) {
    const sp = parseInt(key.split(':')[0], 10);
    especies[sp].forEach((part) => {
      const mesh = new THREE.InstancedMesh(part.geometry, part.material, items.length);
      items.forEach((t, k) => {
        q.setFromAxisAngle(up, t.rot);
        sc.set(t.height, t.height, t.height);
        pos.set(t.x, t.y, t.z);
        m4.compose(pos, q, sc);
        mesh.setMatrixAt(k, m4);
        if (part.kind === 'leaf') {
          const v = 0.82 + t.tone * 0.3;
          col.setRGB(v, v * (0.96 + t.tone * 0.08), v * 0.9);
          mesh.setColorAt(k, col);
        }
      });
      mesh.instanceMatrix.needsUpdate = true;
      if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
      mesh.receiveShadow = false;
      mesh.computeBoundingSphere();
      group.add(mesh);
    });
  }
  return group;
}

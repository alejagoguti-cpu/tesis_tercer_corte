// Representación en puntos: cualquier material estándar se dibuja como una retícula de puntos redondos
// alineada con la superficie. El paso de la retícula crece con la distancia a la cámara (≈ px píxeles por celda),
// así los puntos conservan un tamaño de pantalla parecido de lejos y de cerca, como una nube de puntos.
export function puntear(mat, { radio = 0.3, px = 5 } = {}) {
  if (!mat || mat.userData.punteado) return mat;
  mat.userData.punteado = true;
  const prev = mat.onBeforeCompile;
  const prevKey = mat.customProgramCacheKey ? mat.customProgramCacheKey() : '';
  mat.onBeforeCompile = (sh, r) => {
    if (prev) prev(sh, r);
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vWP;')
      .replace(
        '#include <project_vertex>',
        `#include <project_vertex>
        vec4 wpD = vec4(transformed, 1.0);
        #ifdef USE_INSTANCING
        wpD = instanceMatrix * wpD;
        #endif
        vWP = (modelMatrix * wpD).xyz;`
      );
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vWP;')
      .replace(
        '#include <clipping_planes_fragment>',
        `#include <clipping_planes_fragment>
        {
          vec3 nW = abs(cross(dFdx(vWP), dFdy(vWP)));
          float distP = length(cameraPosition - vWP);
          float cellP = exp2(floor(log2(max(distP * ${(px * 0.00101).toFixed(5)}, 0.2)) + 0.5));
          vec2 qP = (nW.y >= nW.x && nW.y >= nW.z) ? vWP.xz : ((nW.x >= nW.z) ? vWP.zy : vWP.xy);
          vec2 gP = qP / cellP;
          vec2 idP = floor(gP);
          vec2 jP = fract(sin(vec2(dot(idP, vec2(127.1, 311.7)), dot(idP, vec2(269.5, 183.3)))) * 43758.5453) - 0.5;
          if (length(fract(gP) - 0.5 - jP * ${(0.92 - 2 * radio).toFixed(3)}) > ${radio.toFixed(3)}) discard;
        }`
      )
      .replace('#include <dithering_fragment>', '#include <dithering_fragment>\n        gl_FragColor.rgb = min(gl_FragColor.rgb * 1.55, vec3(1.0));');
  };
  mat.customProgramCacheKey = () => `${prevKey}|puntos`;
  mat.needsUpdate = true;
  return mat;
}

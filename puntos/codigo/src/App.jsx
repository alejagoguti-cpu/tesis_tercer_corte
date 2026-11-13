import React, { useEffect, useRef, useState } from 'react';
import { crearEscena } from './lib/escena.js';
import { BASE } from './lib/arboles.js';
import Relato from './components/Relato.jsx';

function Cargando({ prog, visible }) {
  return (
    <div
      className={`fixed inset-0 z-40 flex items-end bg-tinta transition-opacity duration-1000 ${visible ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
      aria-hidden={!visible}
    >
      <div className="w-full px-5 pb-8 sm:px-12 sm:pb-12">
        <p className="etiqueta text-white/50">Tierra Bomba · Tesis</p>
        <p className="mt-3 text-sm text-white/70">{prog.msg}</p>
        <div className="mt-4 h-px w-full max-w-md bg-white/15">
          <div className="h-px bg-arcilla transition-[width] duration-500" style={{ width: `${Math.round(prog.p * 100)}%` }} />
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const mountRef = useRef(null);
  const [api, setApi] = useState(null);
  const [prog, setProg] = useState({ p: 0.02, msg: 'Preparando la isla' });
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelado = false;
    let escena = null;
    crearEscena(mountRef.current, { onProgreso: (p, msg) => setProg({ p, msg }) })
      .then((e) => {
        if (cancelado) { e?.dispose(); return; }
        escena = e;
        if (window.location.search.includes('debug')) window.__escena = e;
        setApi(e);
      })
      .catch((err) => {
        console.warn('Escena 3D no disponible:', err);
        if (!cancelado) setError(true);
      });
    return () => { cancelado = true; escena?.dispose(); };
  }, []);

  return (
    <>
      <div ref={mountRef} className="fixed inset-0 z-0 bg-tinta" />
      {error && (
        <img
          src={`${BASE}assets/texturas/tierrabomba_satelite.jpg`}
          alt="Vista satelital de la isla de Tierra Bomba"
          className="fixed inset-0 z-0 h-full w-full object-cover opacity-60"
        />
      )}
      <Cargando prog={prog} visible={!api && !error} />
      <Relato api={api} sinEscena={error} />
    </>
  );
}

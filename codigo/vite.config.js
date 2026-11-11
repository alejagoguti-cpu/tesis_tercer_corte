import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base relativa: funciona en https://<usuario>.github.io/tesis_tercer_corte/
export default defineConfig({
  plugins: [react()],
  base: './',
  build: { assetsDir: 'app', chunkSizeWarningLimit: 1800 },
});

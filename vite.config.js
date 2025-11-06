import { defineConfig } from 'vite';
export default defineConfig({
  base: './',
  build: { target: 'es2020' },           // good defaults
  server: {
    headers: {
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp'
    }
  }
});
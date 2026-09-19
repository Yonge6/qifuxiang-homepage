import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({ base: './', plugins: [react()], build: { outDir: 'dist/h5', rollupOptions: { input: 'h5.html' } } });

import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://vsmindustrial.cl',
  base: '/',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});

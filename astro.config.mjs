import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://pablogonzalezjara.github.io',
  base: '/vsmindustrial',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});

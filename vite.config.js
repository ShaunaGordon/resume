import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import PDF from 'vite-plugin-pdf';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    PDF({
      outDir: './',
      pages: '/'
    })
  ],
})

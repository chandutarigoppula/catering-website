import { defineConfig } from 'vite';

export default defineConfig({
  base: process.env.VITE_BASE_URL || '/',
  server: {
    proxy: {
      '/api': 'http://localhost:5000',
    },
  },
});

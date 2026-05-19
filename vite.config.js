import { defineConfig } from 'vite';

export default defineConfig({
  base: process.env.VITE_BASE_URL || '/',
  server: {
    host: '0.0.0.0',
    proxy: {
      '/api': {
        target: process.env.VITE_API_URL || 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },
});

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 3000,
  },
  preview: {
    host: true,
    port: 3000,
    allowedHosts: ['healthcheck.railway.app', 'writewaycursor-production.up.railway.app']
  },
  define: {
    'import.meta.env.VITE_APP_URL': JSON.stringify('https://writewaycursor-production.up.railway.app')
  }
})

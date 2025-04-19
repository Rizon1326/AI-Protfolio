import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: '0.0.0.0', // 👈 this is important for Render
    port: 5173,      // optional, can leave out if Render assigns $PORT
    allowedHosts: [
      'localhost',
      'mehrab-portfolio.onrender.com'
    ]
  }
})
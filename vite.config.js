import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.VITE_BACKEND_URL': JSON.stringify(
      process.env.NODE_ENV === 'production'
        ? 'https://infiniteblogbackend.onrender.com'
        : 'http://192.168.56.1:5000'
    ),
  }
})

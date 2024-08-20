import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Allow access on the local network
    port: 5173, // Ensure this matches your current port
  },
});

// export default defineConfig({
// })

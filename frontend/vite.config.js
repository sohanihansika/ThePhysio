import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'jspdf': 'jspdf/dist/jspdf.umd.js',
      'html2canvas': 'html2canvas/dist/html2canvas.js',
    },
  },
});

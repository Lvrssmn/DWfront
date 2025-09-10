import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// For GitHub Pages: base path is provided via BASE_PATH in CI (see workflow).
// Locally it's just '/'
export default defineConfig({
  plugins: [react()],
  base: process.env.BASE_PATH || '/'
})

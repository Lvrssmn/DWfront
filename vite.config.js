// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Жёсткая установка base под GitHub Pages:
// сайт будет доступен по https://<username>.github.io/DWfront/
export default defineConfig({
  plugins: [react()],
  base: '/DWfront/',   // <-- имя репозитория. Если переименуете — поменяйте и здесь.
})

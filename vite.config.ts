import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub project Pages: set VITE_BASE_PATH=/PortfolioWebsite/ in CI (see .github/workflows/deploy.yml)
  base: process.env.VITE_BASE_PATH ?? '/',
})

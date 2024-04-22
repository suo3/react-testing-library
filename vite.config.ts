import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    // add the line below to enable the Vite tests
    globals: true,
    environment: 'jsdom',
    setupFiles:["./setupTests.js"],
  }
})

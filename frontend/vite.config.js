import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],

  server: {
    host: '0.0.0.0',
    allowedHosts: [
      'chitinous-subthoracal-elianna.ngrok-free.dev'
    ]
    // Or, for development only:
    // allowedHosts: true
  }
})
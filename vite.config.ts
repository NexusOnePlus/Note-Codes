import { defineConfig, loadEnv } from 'vite'
import deno from '@deno/vite-plugin'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from 'tailwindcss'
import process from "node:process"
// https://vite.dev/config/
export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {

    plugins: [deno(), react()],
    css: {
      postcss: {
        plugins: [tailwindcss()],
      }
    },
    define: {
      'import.meta.env.VITE_API_URL': JSON.stringify(env.VITE_API_URL)
    }
  }
})

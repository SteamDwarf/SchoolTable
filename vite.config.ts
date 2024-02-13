import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr' 

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
  ],
  resolve: {
    alias: {
      src: "/src",
      pages: "/src/pages/",
      assets: "/src/assets/",
      app: "/src/app/",
      entities: "/src/entities/",
      components: "/src/components/",
      shared: "/src/shared"
    }
  }
})



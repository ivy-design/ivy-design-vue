import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  appType: 'custom',
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    lib: {
      entry: fileURLToPath(new URL('./src/index.ts', import.meta.url)),
      name: 'ivyDesign',
      fileName: (format) => {
        if (format === 'es') {
          return 'ivy-design.mjs'
        }
        return 'ivy-design.js'
      }
    },
    rollupOptions: {
      external: ['vue', 'vue-router'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue',
          'vue-router': 'VueRouter'
        }
      }
    }
  }
})

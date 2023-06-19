import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    lib: {
      entry: fileURLToPath(new URL('./src/components/index.ts', import.meta.url)),
      name: 'ivy-design',
      fileName: 'ivy-design'
    },
    rollupOptions: {
      external: ['vue', 'dayjs'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue',
          dayjs: 'dayjs'
        }
      }
    }
  }
})

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx';
import styleImport from 'vite-plugin-style-import'
import path from 'path'

const isProduction = process.env.NODE_ENV === 'production'

// https://vitejs.dev/config/
export default defineConfig({
  base: isProduction ? './' : '',
  resolve: {
    alias: {
      "@": path.resolve('src'),
      "components": path.resolve('src/components'),
      "views": path.resolve('src/views'),
      "utils": path.resolve('src/utils'),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        additionalData:  `@import "${path.resolve('src/styles/base.less')}";`,
        javascriptEnabled: true
      }
    }
  },
  plugins: [
    vue(),
    vueJsx(),
    styleImport({
      libs: [
        {
          libraryName: 'element-plus',
          esModule: true,
          resolveStyle: (name) => {
            return `element-plus/theme-chalk/${name}.css`;
          },
        }
      ]
    })
  ],
  server: {
    host: '0.0.0.0',
    proxy: {}
  },
})

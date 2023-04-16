import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import { resolve } from "path"
import vueJsxPlugin from "@vitejs/plugin-vue-jsx"

export default defineConfig({
  plugins: [vue(), vueJsxPlugin()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: [],
      },
    },
  },
  build: {
    rollupOptions: {},
  },
})

import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import { resolve } from "path"
import vueJsxPlugin from "@vitejs/plugin-vue-jsx"
//import { VitePWA } from "vite-plugin-pwa"

export default defineConfig({
  plugins: [
    vue(),
    vueJsxPlugin(),
    /* VitePWA({
      registerType: "autoUpdate",
      strategies: "injectManifest",
      workbox: {
        sourcemap: true,
      },
      srcDir: "src",
      filename: "sw.ts",
      injectManifest: {
        swSrc: resolve(__dirname, "src/sw.ts"),
        maximumFileSizeToCacheInBytes: 50 * 1024 * 1024,
        globPatterns: [
          "**!/!*.pdf",
          "**!/!*.png",
          "**!/!*.jpg",
          "**!/!*.js",
          "**!/!*.html",
          "**!/!*.svg",
        ],
      },
    }),*/
  ],
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
    target: "es2022",
  },
  esbuild: {
    target: "es2022",
  },
  optimizeDeps: {
    esbuildOptions: {
      target: "es2022",
    },
  },
  test: {
    // jest와 같은 전역 테스트 API 사용
    globals: true,
    // happy-dom으로 DOM 시뮬레이션
    // (피어 의존성으로 happy-dom을 설치해야 함)
    environment: "happy-dom",
  },
})

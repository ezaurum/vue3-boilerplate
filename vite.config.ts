import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import { resolve } from "path"
import Unocss from "unocss/vite"
import {
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
  transformerVariantGroup,
  transformerDirectives,
} from "unocss"

export default defineConfig({
  plugins: [
    vue(),
    Unocss({
      presets: [
        presetUno(),
        presetAttributify({
          /* options */
        }),
        presetWebFonts({
          provider: "google", // default provider
        }),
        presetIcons({
          /* options */
        }),
        transformerVariantGroup(),
      ],
      transformers: [transformerDirectives()],
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: [],
      },
    },
  },
})

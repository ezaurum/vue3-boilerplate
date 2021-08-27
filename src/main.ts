import { createApp } from "vue"
import { key, store } from "@/store"
import router from "@/router"
import "@/assets/tailwind.css"
import { createI18n } from "vue-i18n"
import App from "./App.vue"

const i18n = createI18n({
  locale: "ko",
  fallbackLocale: "en",
  messages: {
    ko: {
      message: {
        hello: "안녕 세계",
      },
    },
    en: {
      message: {
        hello: "hello world",
      },
    },
    ja: {
      message: {
        hello: "こんにちは、世界",
      },
    },
  },
})

const app = createApp(App)

// pass the injection key
app.use(store, key)
app.use(router)
app.use(i18n)

app.mount("#app")

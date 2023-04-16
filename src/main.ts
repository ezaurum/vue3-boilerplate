import { createApp } from "vue"
import router from "@/router"
import "@/assets/tailwind.css"
import { createI18n } from "vue-i18n"
import App from "./App.vue"
import {createPinia} from "pinia";

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

app.use(router)
app.use(i18n)
app.use(createPinia())

app.mount("#app")

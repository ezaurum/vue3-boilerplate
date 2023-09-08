import { createI18n, LocaleMessageDictionary, VueMessageType } from "vue-i18n"

const instance = createI18n({
  locale: "ko",
  fallbackLocale: "en",
  allowComposition: true,
  messages: {},
})

export const loadLocaleMessages = (
  messages: Record<string, LocaleMessageDictionary<VueMessageType>>
) => {
  Object.entries(messages).forEach((entry) => {
    const [key, value] = entry
    instance.global.mergeLocaleMessage(
      key,
      value as LocaleMessageDictionary<VueMessageType>
    )
  })
}

// i18n 로드
// https://vitejs.dev/guide/features.html#glob-import
const messages = import.meta.glob(
  ["/src/**/*-i18n.(j|t)s", "/src/**/i18n.(j|t)s"],
  { eager: true }
)
Object.values(messages).forEach((m) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  loadLocaleMessages(m.default)
})

export const i18n = instance
export const t = instance.global.t

export const usePrefixedT = (prefix: string) => (k: string) =>
  t(`${prefix}.${k}`)

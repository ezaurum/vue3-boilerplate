import "vue-i18n"
import { MessageContext } from "vue-i18n"

declare module "vue-i18n" {
  interface LocaleSchema {
    [key: string]:
      | ((args: MessageContext) => string)
      | DefaultLocaleMessageSchema
      | string
      | LocaleSchema
  }
}

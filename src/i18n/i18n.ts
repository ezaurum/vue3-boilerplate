import postposition from "cox-postposition"
import { LocaleSchema } from "vue-i18n"

const i18n: LocaleSchema = {
  ko: {
    test: "ok { confirm } { cancel }",
    confirm: "확인",
    cancel: "취소",
    create: ({ named }) => `새 ${named("domain")} 만들기`,
    management: ({ named }) => `${named("domain")} 관리`,
    inputRequired: ({ named }) =>
      postposition.parse(`${named("field")}[를*] 입력하세요.`),
    maxCharacterRequired: ({ named }) => `최대 ${named("count")}자`,
    minCharacterRequired: ({ named }) => `최소 ${named("count")}자`,
    errors: {
      mobileRequired: "휴대전화번호를 입력해주세요.",
      emailNotFound: "이메일을 찾을 수 없습니다.",
    },
  },
  en: {
    confirm: "Confirm",
    cancel: "Cancel",
    create: ({ named }) => `Create new ${named("domain")}`,
    management: ({ named }) => `${named("domain")} management`,
    inputRequired: ({ named }) => `Please enter ${named("field")}.`,
    maxCharacterRequired: ({ named }) => `Maximum ${named("count")} characters`,
    minCharacterRequired: ({ named }) => `Minimum ${named("count")} characters`,
    errors: {
      mobileRequired: "Please enter your mobile phone number.",
      emailNotFound: "Email not found.",
    },
  },
  ja: {
    confirm: "確認",
    cancel: "キャンセル",
    create: ({ named }) => `新しい${named("domain")}を作成する`,
    management: ({ named }) => `${named("domain")}管理`,
    inputRequired: ({ named }) => `${named("field")}を入力してください。`,
    maxCharacterRequired: ({ named }) => `最大${named("count")}文字`,
    minCharacterRequired: ({ named }) => `最小${named("count")}文字`,
    errors: {
      mobileRequired: "携帯電話番号を入力してください。",
      emailNotFound: "メールアドレスが見つかりません。",
    },
  },
}

export default i18n

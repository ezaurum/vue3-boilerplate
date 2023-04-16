/// <reference types="vite/client" />

interface ImportMetaEnv {
  // boolean not working
  readonly VITE_TITLE: string
  readonly VITE_API_HOST: string
  readonly VITE_PARTICIPANT_APP: string
  readonly VITE_ORGANIZER_APP: string
  readonly VITE_DEFAULT_EVENT_PATH: string
  readonly VITE_SEND_BUG: boolean | string
  readonly VITE_POPUP_BUG: boolean | string
  readonly VITE_USE_DUMMY: boolean | string
  readonly VITE_SESSION_HEADER: string
  readonly VITE_IGNORE_GRANT: boolean | string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

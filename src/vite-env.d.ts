/// <reference types="vite/client" />

interface ImportMetaEnv {
  // boolean not working
  readonly VITE_TITLE: string
  readonly VITE_API_HOST: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

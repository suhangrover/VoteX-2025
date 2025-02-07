/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SECRET_KEY: string
  readonly VITE_SALT: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
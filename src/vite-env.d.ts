/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Phone number shown on the downloadable CV. Set in .env.local (gitignored). */
  readonly VITE_CV_PHONE?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

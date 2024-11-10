/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_URL: string
    // más variables de entorno...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }
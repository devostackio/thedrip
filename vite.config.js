import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const root = dirname(fileURLToPath(import.meta.url))

/** @type {import('vite').UserConfig} */
export default defineConfig({
  // Keep asset and page links relative for static / intranet hosting.
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        about: resolve(root, 'about.html'),
        article: resolve(root, 'article.html'),
        deliver: resolve(root, 'deliver.html'),
        personas: resolve(root, 'personas.html'),
        repositories: resolve(root, 'repositories.html'),
      },
    },
  },
})

import { createReadStream, existsSync } from 'node:fs'
import { join } from 'node:path'
import { defineConfig, type Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'

// The CV PDFs only exist after `pnpm build` (scripts/generate-cv-pdfs.mjs).
// In dev, serve the last generated ones from dist/pdf/, instead of letting the
// SPA fallback answer /pdf/*.pdf with index.html.
function serveBuiltCvPdfs(): Plugin {
  return {
    name: 'serve-built-cv-pdfs',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use('/pdf', (req, res) => {
        const name = (req.url ?? '').split('?')[0].replace(/^\//, '')
        const file = join('dist', 'pdf', name)
        if (/^[a-z0-9-]+\.pdf$/.test(name) && existsSync(file)) {
          res.setHeader('Content-Type', 'application/pdf')
          createReadStream(file).pipe(res)
          return
        }
        server.config.logger.warn(`/pdf/${name} not found: run \`pnpm build\` to generate the CV PDFs.`)
        res.statusCode = 404
        res.end('CV PDFs not generated yet: run `pnpm build`.')
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), serveBuiltCvPdfs()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})

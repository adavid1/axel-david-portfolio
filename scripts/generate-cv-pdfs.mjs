// Prints the /cv page to one-page A4 PDFs with headless Chrome: one per
// language and ink-saver mode.
//
//   node scripts/generate-cv-pdfs.mjs             published PDFs, into dist/pdf/
//   node scripts/generate-cv-pdfs.mjs --personal  personal copies with the phone
//                                                 number, into private/cv/
//
// Expects a fresh `vite build` in dist/. Fails if a PDF is not exactly one page.
import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import puppeteer from 'puppeteer'
import { downloadBrowsers } from 'puppeteer/internal/node/install.js'
import { preview } from 'vite'

const personal = process.argv.includes('--personal')
const outDir = personal ? 'private/cv' : 'dist/pdf'
const variants = ['fr', 'en'].flatMap((locale) => [
  { locale, inkSaver: false },
  { locale, inkSaver: true },
])

// A4 height in CSS pixels (96 per inch).
const A4_HEIGHT_PX = (297 / 25.4) * 96

async function main() {
  // pnpm doesn't run Puppeteer's install script, so fetch Chrome's headless
  // shell here. It's a no-op once the browser is in the cache.
  await downloadBrowsers()
  await mkdir(outDir, { recursive: true })

  const server = await preview({ logLevel: 'warn' })
  const browser = await puppeteer.launch({
    headless: 'shell',
    // CI and Netlify containers can't provide Chrome's sandbox, and the only
    // page loaded is this local build. Disabling font hinting keeps glyph
    // widths, and therefore line breaks, the same on Linux as on Windows/macOS.
    args: ['--no-sandbox', '--font-render-hinting=none'],
  })

  try {
    const baseUrl = server.resolvedUrls?.local[0]
    if (!baseUrl) throw new Error('The preview server did not report its URL.')

    const files = []
    for (const variant of variants) {
      files.push(await printVariant(browser, baseUrl, variant))
    }
    if (!personal) {
      const manifest = { generatedAt: new Date().toISOString(), files }
      await writeFile(path.join(outDir, 'manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`)
    }
  } finally {
    await browser.close()
    await server.close()
  }
}

async function printVariant(browser, baseUrl, { locale, inkSaver }) {
  const label = `${locale}${inkSaver ? ', ink-saver' : ''}`
  const page = await browser.newPage()
  await page.setViewport({ width: 1280, height: 1800 })
  await page.evaluateOnNewDocument((value) => localStorage.setItem('locale', value), locale)
  await page.goto(new URL(inkSaver ? 'cv?ink=1' : 'cv', baseUrl).href, { waitUntil: 'networkidle0' })
  await page.emulateMediaType('print')
  await page.evaluate(async () => {
    await document.fonts.ready
  })

  const info = await page.evaluate(() => {
    const link = document.querySelector('[data-cv-pdf]')
    const sheet = document.querySelector('.cv-sheet')
    const family = getComputedStyle(sheet).fontFamily.split(',')[0].replace(/["']/g, '').trim()
    const top = sheet.getBoundingClientRect().top
    // Lowest content edge across the sidebar and the main column.
    const contentBottom = Math.max(
      ...[...sheet.children].map((column) => {
        const last = column.lastElementChild.getBoundingClientRect().bottom
        return last + parseFloat(getComputedStyle(column).paddingBottom) - top
      }),
    )
    return {
      lang: document.documentElement.lang,
      href: link.getAttribute('href'),
      filename: link.getAttribute('download'),
      fontLoaded: [...document.fonts].some(
        (face) => face.family.replace(/["']/g, '') === family && face.status === 'loaded',
      ),
      family,
      hasPhone: sheet.querySelector('a[href^="tel:"]') !== null,
      contentBottom,
    }
  })

  if (info.lang !== locale) throw new Error(`${label}: the page rendered in "${info.lang}".`)
  if (!info.fontLoaded) throw new Error(`${label}: the "${info.family}" font did not load.`)
  if (!/^\/pdf\/[a-z0-9-]+\.pdf$/.test(info.href)) throw new Error(`${label}: unexpected PDF link "${info.href}".`)
  if (personal && !info.hasPhone) {
    throw new Error('The phone number is missing: set VITE_CV_PHONE in .env.local, then run `pnpm cv:pdf` again.')
  }

  // The PDF's title metadata, shown by most PDF viewers.
  await page.evaluate((title) => { document.title = title }, info.filename.replace(/\.pdf$/, ''))
  const pdf = await page.pdf({ printBackground: true, preferCSSPageSize: true, tagged: true })
  await page.close()

  const pages = countPages(pdf)
  if (pages !== 1) {
    throw new Error(`${label}: the CV prints on ${pages} pages instead of 1. Shorten the content or tighten the layout.`)
  }

  const file = path.join(outDir, personal ? info.filename : path.basename(info.href))
  await writeFile(file, pdf)
  const fill = Math.round((info.contentBottom / A4_HEIGHT_PX) * 100)
  const phoneNote = !personal && info.hasPhone ? ', includes the phone number from VITE_CV_PHONE' : ''
  console.log(`${label}: ${file} (1 page, content fills ${fill}% of the height${phoneNote})`)
  return path.basename(file)
}

// Chrome writes one uncompressed "/Type /Page" dictionary per page.
function countPages(pdf) {
  return Buffer.from(pdf).toString('latin1').match(/\/Type\s*\/Page\b/g)?.length ?? 0
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error)
  process.exitCode = 1
})

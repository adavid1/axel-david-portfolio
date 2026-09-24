// Puppeteer only prints the CV PDFs at build time (scripts/generate-cv-pdfs.mjs),
// which needs Chrome's headless shell and nothing else. Keeping it inside
// node_modules lets CI and Netlify cache it with the dependencies.
module.exports = {
  cacheDirectory: `${__dirname}/node_modules/.cache/puppeteer`,
  chrome: { skipDownload: true },
  'chrome-headless-shell': { skipDownload: false },
}

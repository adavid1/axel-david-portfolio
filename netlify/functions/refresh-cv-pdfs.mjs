// Nightly check that the published CV PDFs are still current. They show an age
// and years of experience computed at build time: once either value differs
// from what it was when the PDFs were generated, trigger a production build
// through the build hook stored in CV_BUILD_HOOK_URL. If that build fails, the
// next run triggers another one.
import constants from '../../src/constants.ts'
import { yearsSince } from '../../src/utils.ts'

export default async (_request, context) => {
  const manifestUrl = new URL('/pdf/manifest.json', context.site.url)
  const manifest = await fetch(manifestUrl)
  if (!manifest.ok) {
    console.error(`Could not read ${manifestUrl} (HTTP ${manifest.status}).`)
    return new Response('CV PDF manifest unavailable', { status: 502 })
  }

  const generatedAt = new Date((await manifest.json()).generatedAt)
  const now = new Date()
  const outdated = [constants.careerStart, constants.birthDate].some(
    (date) => yearsSince(date, generatedAt) !== yearsSince(date, now),
  )
  if (!outdated) return new Response('The CV PDFs are up to date.')

  const buildHook = process.env.CV_BUILD_HOOK_URL
  if (!buildHook) {
    console.error('The CV PDFs are outdated, but CV_BUILD_HOOK_URL is not set.')
    return new Response('Build hook not configured', { status: 500 })
  }
  const build = await fetch(buildHook, { method: 'POST' })
  if (!build.ok) {
    console.error(`The build hook answered HTTP ${build.status}.`)
    return new Response('Build hook failed', { status: 502 })
  }
  console.log('The CV PDFs were outdated: triggered a production build.')
  return new Response('Build triggered.')
}

export const config = { schedule: '@daily' }

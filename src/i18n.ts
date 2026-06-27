import { createI18n } from 'vue-i18n'
import en from './locales/en'
import fr from './locales/fr'

export type AppLocale = 'fr' | 'en'

const STORAGE_KEY = 'locale'

function getInitialLocale(): AppLocale {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'fr' || stored === 'en') return stored

  // Default to French, but honour an English-speaking browser.
  const browser = navigator.language?.toLowerCase() ?? ''
  return browser.startsWith('en') ? 'en' : 'fr'
}

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: getInitialLocale(),
  fallbackLocale: 'en',
  messages: {
    en,
    fr
  }
})

export function setLocale(locale: AppLocale) {
  i18n.global.locale.value = locale
  localStorage.setItem(STORAGE_KEY, locale)
  document.documentElement.setAttribute('lang', locale)
}

// Keep the <html lang> attribute in sync from the start.
document.documentElement.setAttribute('lang', i18n.global.locale.value)

export default i18n

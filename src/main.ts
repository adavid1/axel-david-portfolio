import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import './style.css'
import App from './App.vue'
import en from './locales/en'
import fr from './locales/fr'

const i18n = createI18n({
  locale: 'en',
  messages: {
    en,
    fr
  }
})

createApp(App).use(i18n).mount('#app')

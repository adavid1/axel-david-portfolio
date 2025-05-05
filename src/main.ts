import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import './style.css'
import App from './App.vue'
import en from './locales/en'
import fr from './locales/fr'

import Particles from "@tsparticles/vue3";
import { loadSlim } from "@tsparticles/slim";

const i18n = createI18n({
  locale: 'en',
  messages: {
    en,
    fr
  }
})

const app = createApp(App)

app.use(i18n)

app.use(Particles, {
  init: async (engine) => {
    await loadSlim(engine)
  },
})

app.mount('#app')


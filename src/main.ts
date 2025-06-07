import { createApp } from 'vue'
import i18n from './i18n'
import router from './router'
import './style.css'
import App from './App.vue'

import Particles from "@tsparticles/vue3";
import { loadSlim } from "@tsparticles/slim";

const app = createApp(App)

app.use(i18n)
app.use(router)

app.use(Particles, {
  init: async (engine) => {
    await loadSlim(engine)
  },
})

app.mount('#app')


import { createRouter, createWebHistory } from 'vue-router'
import ExperienceComponent from '@/components/ExperienceComponent.vue'
import AboutComponent from '@/components/AboutComponent.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/timeline'
    },
    {
      path: '/timeline',
      name: 'timeline',
      component: ExperienceComponent
    },
    {
      path: '/about',
      name: 'about',
      component: AboutComponent
    }
  ]
})

export default router 
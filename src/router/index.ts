import { createRouter, createWebHistory } from 'vue-router'
import TimelineView from '@/pages/TimelineView.vue'
import AboutView from '@/pages/AboutView.vue'
import ProjectsView from '@/pages/ProjectsView.vue'

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
      component: TimelineView
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    }
  ]
})

export default router 
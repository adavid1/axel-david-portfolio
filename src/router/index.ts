import { createRouter, createWebHistory } from 'vue-router'
import TimelineView from '@/pages/TimelineView.vue'
import HomeView from '@/pages/HomeView.vue'
import ProjectsView from '@/pages/ProjectsView.vue'
import BreizhcardDetailView from '@/pages/BreizhcardDetailView.vue'
import ProjectDetailView from '@/pages/ProjectDetailView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      redirect: '/'
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
      path: '/projects/breizhcard',
      name: 'breizhcard-detail',
      component: BreizhcardDetailView
    },
    {
      path: '/projects/:slug',
      name: 'project-detail',
      component: ProjectDetailView,
      props: true
    }
  ]
})

export default router
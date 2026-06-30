import { createRouter, createWebHistory } from 'vue-router'
import TimelineView from '@/pages/TimelineView.vue'
import HomeView from '@/pages/HomeView.vue'
import ProjectsView from '@/pages/ProjectsView.vue'
import CvView from '@/pages/CvView.vue'
import BreizhcardDetailView from '@/pages/BreizhcardDetailView.vue'
import UnJourEnFranceDetailView from '@/pages/UnJourEnFranceDetailView.vue'
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
      path: '/cv',
      name: 'cv',
      component: CvView
    },
    {
      path: '/projects/breizhcard',
      name: 'breizhcard-detail',
      component: BreizhcardDetailView
    },
    {
      path: '/projects/un-jour-en-france',
      name: 'un-jour-en-france-detail',
      component: UnJourEnFranceDetailView
    },
    {
      path: '/projects/:slug',
      name: 'project-detail',
      component: ProjectDetailView,
      props: true
    }
  ],
  // Without this, the previous page's scroll position is carried over to the
  // next route (very visible now that the Home page is long).
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  }
})

export default router
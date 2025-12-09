import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '@/views/Homepage.vue'
import Generate from '@/views/Generate.vue'
import Explore from '@/views/Explore.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Homepage,
    },
    {
      path: '/generate',
      name: 'generate',
      component: Generate,
    },
    {
      path: '/explore',
      name: 'explore',
      component: Explore,
    }
  ]
})

export default router

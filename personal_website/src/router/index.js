import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '@/views/Homepage.vue'
import ContactMe from '@/views/ContactMe.vue'
import Aboutme from '@/views/Aboutme.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Homepage,
    },
    {
      path: '/about-me',
      name: 'about-me',
      component: Aboutme,
    },
    {
      path: '/contact-me',
      name: 'contact-me',
      component: ContactMe,
    },
  ],
})

export default router

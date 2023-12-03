import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: AboutView
    },
    {
      path: '/sitters',
      name: 'sitters',
      component: () => import('../pages/Sitters.vue')
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import('../pages/Contacts.vue')
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../pages/Services.vue'),
    },
    {
      path: '/services/:service',
      name: 'service',
      component: () => import('../pages/Service.vue'),
    },
    {
      path: '/reviews',
      name: 'reviews',
      component: () => import('../pages/Reviews.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../pages/NotFound.vue') 
    }

  ]
})

export default router

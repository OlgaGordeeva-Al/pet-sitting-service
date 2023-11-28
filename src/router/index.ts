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
      component: () => import('../views/SittersView.vue')
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import('../views/ContactsView.vue')
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../views/ServicesView.vue'),
    },
    {
      path: '/services/:service',
      name: 'service',
      component: () => import('../views/Service.vue'),
    },
    {
      path: '/reviews',
      name: 'reviews',
      component: () => import('../views/ReviewsView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/NotFound.vue') 
    }

  ]
})

export default router

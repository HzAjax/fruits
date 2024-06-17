import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CatalogPage from '../views/CatalogPage.vue'
import GenerationPage from '../views/GenerationPage.vue'
import AdminPage from '../views/AdminViews/AdminPage.vue'
import UserPage from '../views/UserPage.vue'
import Thanks from '../views/Thanks.vue'
import Auth from '../views/Auth.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/catalogPage',
      name: 'CatalogPage',
      component: CatalogPage
    },
    {
      path: '/generationPage',
      name: 'GenerationPage',
      component: GenerationPage
    },
    {
      path: '/admin',
      name: 'Admin',
      component: AdminPage
    },
    {
      path: '/user',
      name: 'User',
      component: UserPage
    },
    {
      path: '/thanks',
      name: 'Thanks',
      component: Thanks
    },
    {
      path: '/auth',
      name: 'Auth',
      component: Auth
    },
  ]
})

export default router

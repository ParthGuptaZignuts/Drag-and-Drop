import { createRouter, createWebHistory } from 'vue-router'
import mainDashboard from '@/components/mainDashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Hello',
      component:mainDashboard
    }
  ]
})

export default router

import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/components/home.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: 'home' },
  { path: '/home', component: Home },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router

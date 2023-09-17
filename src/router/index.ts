import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/components/home.vue'
import About from '@/components/about.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: 'home' },
  { path: '/home', component: Home },
  { path: '/about', component: About },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Registration from '../views/Registration'
import HomePage from '../views/HomePage'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Registration',
    component: Registration
  },
  {
    path: '/homePage',
    name: 'HomePage',
    component: HomePage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

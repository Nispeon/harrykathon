import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BoardView from '../views/BoardView.vue'
import LoginView from '../views/LoginView.vue'
import auth from '../middleware/auth'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    beforeEnter: auth
  },
  {
    path: '/board',
    name: 'board',
    component: BoardView,
    beforeEnter: auth
  },
  {
    path: '/create',
    name: 'create',
    component: () => import('../views/CreateView.vue'),
    beforeEnter: auth
  },
  {
    path: '/join',
    name: 'join',
    component: () => import('../views/JoinView.vue'),
    beforeEnter: auth
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import('../views/SettingsView.vue'),
    beforeEnter: auth
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

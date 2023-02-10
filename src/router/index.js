import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/auth',
    component: () => import('@/layouts/authorization/Authorization'),
    children: [
      {
        path: '',
        name: 'Authorization',
        component: () => import('@/views/authorization/Authorization.vue'),
      },
    ],
  },
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router

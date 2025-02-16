import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/home.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/about.vue'),
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import('../views/portfolio.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/contact.vue'),
    },
    {
      path: '/shows',
      children: [
        {
          path: 'hello-dolly',
          name: 'hello-dolly',
          component: () => import('../views/shows/hello-dolly.vue'),
        }
      ]
    }
  ],
})

export default router

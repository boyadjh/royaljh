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
      path: '/shows',
      name: 'shows',
      component: () => import('../views/shows.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/contact.vue'),
    },
    {
      path: '/shows',
      meta: {
        overlayHeader: true
      },
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

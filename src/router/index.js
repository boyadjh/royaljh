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
      path: '/shows/:showName',
      meta: {
        overlayHeader: true
      },
      props: true,
      component: () => import('../views/show.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/contact.vue'),
    }
  ],
})

export default router

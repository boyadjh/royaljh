import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/shows.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/about.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/contact.vue'),
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
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ],
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/albums',
      name: 'all-albums',
      component: () => import('../views/AlbumsView.vue'),
    },
    {
      path: '/albums/:albumCode',
      name: 'filtered-albums',
      component: () => import('../views/AlbumsView.vue'),
      props: true, // Передаем параметры маршрута как props
    },
    {
      path: '/:albumCode/:pageCode',
      name: 'album',
      component: () => import('../views/AlbumView.vue'),
      props: true,
    },
    {
      path: '/test-page',
      name: 'test-page',
      component: () => import('../views/TestView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router

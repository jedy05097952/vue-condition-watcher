import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Photos from './views/Photos.vue'

export const routerHistory = createWebHistory()
export const router = createRouter({
  history: routerHistory,
  strict: true,
  routes: [
    {
      path: '/',
      components: { default: Home },
    },
    {
      path: '/photos',
      components: { default: Photos },
    },
  ],
})

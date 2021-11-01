import { createRouter, createWebHistory } from 'vue-router'

import layoutDefault from '../layouts/Default.vue'

import pages from './routes/pages'
import errors from './routes/errors'

const routes = [
  {
    path: '/',
    name: 'DefaultLayout',
    component: layoutDefault,
    children: [
      ...pages,
      ...errors,
      {
        path: '*',
        redirect: 'error-404',
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

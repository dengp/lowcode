import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from 'views/Home.vue';
import Content from 'views/Content.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'home'
    }
  },
  {
    path: '/Content',
    name: 'Content',
    component: Content,
    meta: {
      title: 'content'
    }
  },
  {
    path: '/:patchMatch(.*)*',
    component: Home,
    meta: {
      title: 'home'
    }
  }
]
const router = createRouter({
  // createWebHashHistory:  hash模式
  // createWebHistory:  history模式
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  next()
})

export default router
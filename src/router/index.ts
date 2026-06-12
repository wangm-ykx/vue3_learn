import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/pages/layout/Layout.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Layout,
    },
    {
      // 基础
      path: '/basic',
      component: Layout,
      // 基础二级路由
      children: [
        {
          path: 'refAndReactive',
          component: () => import('@/pages/basic/RefAndReactive.vue'),
          meta: { title: 'ref和reactive基本使用' },
        },
        {
          path: 'toRefAndToRefs',
          component: () => import('@/pages/basic/ToRefAndToRefs.vue'),
          meta: { title: 'ToRef和ToRefs' },
        },
      ],
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ],
})

export default router

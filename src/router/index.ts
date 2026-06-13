import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/pages/layout/Layout.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/basic/refAndReactive'
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
             {
          path: 'optionsAndComposition',
          component: () => import('@/pages/basic/OptionsAndComposition.vue'),
          meta: { title: 'options api和composition api' },
        },
                  {
          path: 'computedAndWatch',
          component: () => import('@/pages/basic/ComputedAndWatch.vue'),
          meta: { title: 'computed和watch' },
        },
                    {
          path: 'vmodelAndMarkref',
          component: () => import('@/pages/basic/VmodelAndMarkref.vue'),
          meta: { title: 'vmodel和标签ref' },
        },
                            {
          path: 'propsEmits',
          component: () => import('@/pages/basic/PropsAndEmits.vue'),
          meta: { title: 'props和emits' },
        },
                                    {
          path: 'lifeCycle',
          component: () => import('@/pages/basic/LifeCycle.vue'),
          meta: { title: '生命周期' },
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

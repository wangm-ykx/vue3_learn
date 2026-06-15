import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/pages/layout/Layout.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/basic/refAndReactive',
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
          path: 'lifeCycle',
          component: () => import('@/pages/basic/LifeCycle.vue'),
          meta: { title: '生命周期' },
        },
        {
          path: 'hooks',
          component: () => import('@/pages/basic/Hooks.vue'),
          meta: { title: '自定义hooks' },
        },
      ],
    },
    {
      // 深入组件
      path: '/depth',
      component: Layout,
      // 基础二级路由
      children: [
        {
          path: 'vmodelAndMarkref',
          component: () => import('@/pages/depth/VmodelAndMarkref.vue'),
          meta: { title: 'vmodel和标签ref' },
        },
        {
          path: 'propsEmits',
          component: () => import('@/pages/depth/PropsAndEmits.vue'),
          meta: { title: 'props和emits' },
        },
        {
          path: 'slot',
          component: () => import('@/pages/depth/Slot.vue'),
          meta: { title: '插槽' },
        },
        {
          path: 'communication',
          component: () => import('@/pages/depth/Communication.vue'),
          meta: { title: '组件通信' },
        },
      ],
    },
    {
      // pinia
      path: '/pinia',
      component: Layout,
      // 基础二级路由
      children: [
        {
          path: 'index',
          component: () => import('@/pages/pinia/Index.vue'),
          meta: { title: 'pinia所有特性' },
        },
      ],
    },
    {
      // 其他
      path: '/other',
      component: Layout,
      // 基础二级路由
      children: [
        {
          path: 'customRef',
          component: () => import('@/pages/other/customRef.vue'),
          meta: { title: 'customRef(自定义响应式)' },
        },
        {
          path: 'toRawAndmarkRaw',
          component: () => import('@/pages/other/toRawAndmarkRaw.vue'),
          meta: { title: 'toRaw和markRaw' },
        },
        {
          path: 'shallowAndreadonly',
          component: () => import('@/pages/other/ShallowAndReadonly.vue'),
          meta: { title: 'shallow和readonly' },
        },
        {
          path: 'teleport',
          component: () => import('@/pages/other/Teleport.vue'),
          meta: { title: 'Teleport' },
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

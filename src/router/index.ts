import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import Layout from '@/pages/layout/Layout.vue'
import type { an } from 'vue-router/dist/router-CWoNjPRp.mjs'

const router = createRouter({
  history: createWebHistory(),
  // hash模式
  // history: createWebHashHistory(),
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
      // 路由
      path: '/route',
      component: Layout,
      children: [
        {
          path: 'index',
          component: () => import('@/pages/route/Index.vue'),
          meta: { title: '路由所有特性' },
          children: [
            {
              path: 'about',
              name: 'about',
              component: () => import('@/pages/route/About.vue'),
            },
            {
              path: 'news',
              name: 'news',
              component: () => import('@/pages/route/News.vue'),
            },
            {
              // path: 'news/:id',
              // content参数非必传
              path: 'news/:id/:content?',
              name: 'news',
              component: () => import('@/pages/route/News.vue'),
              // 相当于<News :id=id :content=content/>，将路由收到的一个个params参数转为一个个props传给组件，只能和params参数配合使用
              props: true,
              // 第二种写法，可以自己决定将什么作为props传给路由组件
              // props(route:any) {
              //   console.log(route,'可以拿到当前路由对象')
              //   return route.query
              // }
            },
            {
              path: 'home',
              name: 'home',
              component: () => import('@/pages/route/Home.vue'),
            },
          ],
        },
      ],
    },
    {
      // pinia
      path: '/pinia',
      component: Layout,
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
  ],
})

export default router

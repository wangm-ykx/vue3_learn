<!-- 核心布局，头部+左侧菜单+右侧内容 -->
<template>
  <div class="main">
    <div class="header">
      <h3>vue3知识点</h3>
    </div>
    <div class="content">
      <div class="nav">
        <el-menu class="el-menu-vertical-demo" router>
          <el-sub-menu v-for="item in menus" :index="item.to">
            <template #title>
              <span class="top-menu">{{ item.name }}</span>
            </template>
            <el-menu-item v-for="secondItem in item.children" :index="secondItem.to">
              <div class="menu-item" :title="secondItem.name">{{ secondItem.name }}</div>
            </el-menu-item>
          </el-sub-menu>

          <!-- <el-menu-item index="4">
            <el-icon><setting /></el-icon>
            <span>Navigator Four</span>
          </el-menu-item> -->
        </el-menu>
      </div>
      <div class="right-content">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="Home">
import { reactive } from 'vue'
const menus = reactive([
  {
    name: '基础',
    to: '/basic',
    children: [
      { name: 'ref和reactive', to: '/basic/refAndReactive' },
      { name: 'ToRef和ToRefs', to: '/basic/toRefAndToRefs' },
      { name: 'Options Api和Composition Api', to: '/basic/optionsAndComposition' },
      { name: '计算属性和侦听器', to: '/basic/computedAndWatch' },
      { name: '生命周期', to: '/basic/lifeCycle' },
      { name: '自定义hooks', to: '/basic/hooks' },
    ],
  },
  {
    name: '深入组件',
    to: '/depth',
    children: [
      { name: 'v-model和标签的ref属性', to: '/depth/vmodelAndMarkref' },
      { name: 'props和emits', to: '/depth/propsEmits' },
      { name: '插槽', to: '/depth/slot' },
      { name: '组件通信', to: '/depth/communication' },
    ],
  },
  {
    name: 'pinia',
    to: '/pinia',
    children: [{ name: '全部特性：读、写、getters、订阅、组合式写法', to: '/pinia/index' }],
  },
  {
    name: '路由',
    to: '/route',
    children: [
      {
        name: '全部特性：to的两种写法、命名路由、嵌套路由、路由参数、props配置、replace属性、编程式路由、重定向',
        to: '/route/index',
      },
    ],
  },
  {
    name: '其他',
    to: '/other',
    children: [
      { name: 'customRef(自定义响应式)', to: '/other/customRef' },
      { name: 'toRaw和markRaw', to: '/other/toRawAndmarkRaw' },
      { name: 'shallow和readonly', to: '/other/shallowAndreadonly' },
      { name: 'Teleport', to: '/other/teleport' },
    ],
  },
])
</script>

<style scoped lang="less">
.main {
  .header {
    background-color: skyblue;
    border-radius: 5px;
    padding: 1px;
    text-align: center;
    font-size: 20px;
  }
  .content {
    display: flex;
    margin-top: 10px;
    border-radius: 5px;
    .nav {
      width: 200px;
      border-radius: 5px;
      border: 2px solid skyblue;
    }
    .menu-item {
      width: 160px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    .top-menu {
      color: skyblue;
      font-weight: bold;
    }
    .right-content {
      padding: 10px;
      flex: 1;
      // background: #ccc;
      margin-left: 10px;
      border-radius: 5px;
      border: 2px solid skyblue;
    }
  }
}
</style>

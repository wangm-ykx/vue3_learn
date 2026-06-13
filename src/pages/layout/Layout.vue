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
              <el-icon><icon-menu /></el-icon>
              <span>{{ item.name }}</span>
            </template>
            <el-menu-item v-for="secondItem in item.children" :index="secondItem.to">
              <div class="menu-item">{{ secondItem.name }}</div>
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
import { reactive } from 'vue';
const menus = reactive([
  {
    name: '基础',
    to: '/basic',
    children: [
      {name: 'ref和reactive', to:'/basic/refAndReactive'},
      {name: 'ToRef和ToRefs', to:'/basic/toRefAndToRefs'},
      {name: 'Options Api和Composition Api', to:'/basic/optionsAndComposition'},
      {name: '计算属性和侦听器', to:'/basic/computedAndWatch'},
      {name: 'v-model和标签的ref属性', to:'/basic/computedAndWatch'},
    ]
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
      border: 1px solid black;
    }
    .menu-item {

    }
    .right-content {
      padding: 10px;
      flex: 1;
      // background: #ccc;
      margin-left: 10px;
      border-radius: 5px;
      border: 1px solid black;
    }
  }
}
</style>

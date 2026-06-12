<!-- 核心布局，头部+左侧菜单+右侧内容 -->
<template>
  <div class="main">
    <div class="header">
      <h3>vue3知识点</h3>
    </div>
    <div class="content">
      <div class="nav">
        <el-menu class="el-menu-vertical-demo" router>
          <el-sub-menu index="1">
            <template #title>
              <el-icon><icon-menu /></el-icon>

              <span>基础</span>
            </template>
            <el-menu-item index="/basic/refAndReactive">ref和reactive</el-menu-item>
            <el-menu-item index="/basic/toRefAndToRefs">ToRef和ToRefs</el-menu-item>
            <el-sub-menu index="1-4">
              <template #title>item four</template>
              <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-menu-item index="4">
            <el-icon><setting /></el-icon>
            <span>Navigator Four</span>
          </el-menu-item>
        </el-menu>
      </div>
      <div class="right-content">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="Home">
import MainContent from '@/components/MainContent.vue'
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

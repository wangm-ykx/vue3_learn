<template>
  <div>
    <div class="box">
      这是父组件

      <h4>
        Suspense：等待异步组件时候渲染一些额外内容，让应用有更好的用户体验(在浏览器控制台修改network-slow4G模拟网速慢来查看loading效果)
      </h4>
      <Suspense>
        <!-- 具有深层异步依赖的组件 -->
        <template #default>
          <Dashboard />
        </template>

        <!-- 在 #fallback 插槽中显示 “正在加载中” -->
        <template #fallback>
          <div class="loading">Loading...</div>
        </template>
      </Suspense>
      <b style="color: red">总结：在srcipt setup顶层 await 表达式会自动让该组件成为一个异步依赖</b>
    </div>
  </div>
</template>

<script setup lang="ts" name="">
import { Suspense } from 'vue'
import Dashboard from '@/components/other/Dashboard.vue'
</script>

<style scoped lang="css">
.loading {
  border: 2px solid skyblue;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
}
</style>

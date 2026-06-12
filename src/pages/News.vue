<template>
  <div class="main">
    <!-- 导航区 -->
    <ul class="nav-box">
      <li v-for="item in list" :key="item.id">
        <router-link :to="`/news/detail?id=${item.id}`"> {{ item.title }}</router-link>
      </li>
    </ul>
    <!-- 展示区 -->
    <div class="detail-area">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts" name="News">
import { reactive } from 'vue'
const list = reactive([
  { id: 'adiassiuwu1', content: '土豆', title: '一种抗癌食物' },
  { id: 'adiassiuwu2', content: '没有投简历', title: '糟了' },
  { id: 'adiassiuwu3', content: '没有来', title: '好消息' },
])
</script>

<style scoped lang="css">
.main {
  padding-top: 20px;
  color: blue;
  display: flex;
}
.nav-box {
  width: 200px;
}
.detail-area {
  flex: 1;
  border: 1px solid black;
  margin-right: 20px;
  border-radius: 5px;
}
</style>

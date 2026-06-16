<template>
  <div class="main">
    <span style="color: blue" v-show="query.id"> 获取路由query参数： {{ query.id }} </span>
    <span style="color: blue" v-show="params.id"> 获取路由params参数： {{ params.id }} </span>
    <br />
    <span style="color: blue" v-show="params.id">
      路由props配置+params参数： id-{{ id }}，content-{{ content }}
    </span>
    <ul class="nav-box">
      <li v-for="item in list" :key="item.id">
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts" name="News">
import { reactive, toRefs } from 'vue'
import { useRoute } from 'vue-router'
const list = reactive([
  { id: 'adiassiuwu1', content: '土豆', title: '一种抗癌食物' },
  { id: 'adiassiuwu2', content: '没有投简历', title: '糟了' },
  { id: 'adiassiuwu3', content: '没有来', title: '好消息' },
])
const route = useRoute()

// 解构后模板中就不用写route.query.id
let { query, params } = toRefs(route)

defineProps(['id', 'content'])
</script>

<style scoped lang="css">
.main {
  padding-top: 20px;
}
</style>

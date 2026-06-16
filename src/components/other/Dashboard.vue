<template>
  <div class="main">这是子组件，顶层setup中有await</div>
</template>

<script setup lang="ts" name="">
import axios from 'axios'

const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
console.log(response, 'Suspense的子组件dashboard接口请求返回')
</script>

<style scoped lang="css">
.main {
  border: 2px solid skyblue;
  border-radius: 5px;
  padding: 10px;
}
</style>

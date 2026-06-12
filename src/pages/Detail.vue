<template>
  <div>
    <ul>
      <li>编号:{{ route.query.id }}</li>
      <li>标题</li>
      <li>内容</li>
    </ul>
  </div>
</template>

<script setup lang="ts" name="">
import { useRoute } from 'vue-router'
const route = useRoute()

</script>

<style scoped lang="css">
li {
  list-style: none;
}

</style>

<template>
  <div class="child2">
    子组件2
    <h5>电脑：{{ computer }}</h5>
    <h5>书籍：{{ books }}</h5>
  </div>
</template>

<script setup lang="ts" name="">
import { ref } from 'vue'
const computer = ref('联想')
const books = ref(4)

// 向外部暴露数据
defineExpose({ computer, books })
</script>

<style scoped lang="css">
.child2 {
  background: yellowgreen;
  padding: 10px;
  border-radius: 5px;
}
</style>

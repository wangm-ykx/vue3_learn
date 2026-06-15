<template>
  <div class="child1">
    子组件1
    <h5>玩具：{{ toy }}</h5>
    <h5>书籍：{{ books }}</h5>
    <button @click="minusHouse($parent)">减少父亲的房产</button>
  </div>
</template>

<script setup lang="ts" name="">
import { ref } from 'vue'
const toy = ref('奥特曼')
const books = ref(4)

function minusHouse(parent: any) {
  parent.house -= 1
}

// 向外部暴露数据
defineExpose({ toy, books })
</script>

<style scoped lang="css">
.child1 {
  background: skyblue;
  padding: 10px;
  border-radius: 5px;
}
</style>

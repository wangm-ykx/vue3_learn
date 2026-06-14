<template>
  <div>
    <div class="title">水果列表</div>
    <slot :fruits="fruits"></slot>
  </div>
</template>

<script setup lang="ts" name="">
import { ref } from 'vue'
const fruits = ref(['苹果', '香蕉', '荔枝'])
</script>

<style scoped lang="css">
.title {
  background: yellow;
}
</style>

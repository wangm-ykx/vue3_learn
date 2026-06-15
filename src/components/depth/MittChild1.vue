<template>
  <div class="son1">
    <h5>子组件1</h5>
    <h5>玩具：{{ toy }}</h5>
    <button @click="emitter.emit('send-toy', toy)">玩具给弟弟</button>
  </div>
</template>

<script setup lang="ts" name="">
import { ref } from 'vue'
import emitter from '@/utils/emitter'
const toy = ref('奥特曼')
</script>

<style scoped lang="css">
.son1 {
  background: yellowgreen;
  padding: 1px 10px 10px 10px;
  border-radius: 5px;
}
</style>

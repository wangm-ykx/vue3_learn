<template>
  <div class="son">
    这是子组件
    <h5>玩具: {{ toy }}</h5>
    <h5>父给的车：{{ car }}</h5>
    <button @click="sendToy(toy)">把玩具给父亲</button>
  </div>
</template>

<script setup lang="ts" name="">
import { ref } from 'vue'
const toy = ref('奥特曼')

defineProps(['car', 'sendToy'])

// const props = defineProps(['car', 'sendToy'])
// props.sendToy(toy.value)
</script>

<style scoped lang="css">
.son {
  background: skyblue;
  padding: 10px;
  border-radius: 5px;
}
</style>

<template>
  <div class="son2">
    <h5>子组件2</h5>
    <h5>电脑：{{ computer }}</h5>
    <h5>弟弟给的玩具：{{ car }}</h5>
  </div>
</template>

<script setup lang="ts" name="">
import { ref, onMounted } from 'vue'
import emitter from '@/utils/emitter'
const computer = ref('联想')
let car = ref('')

// 给emitter绑定事件
emitter.on('send-toy', (value: any) => {
  console.log('send-toy被触发了')
  car.value = value
})

// 在组件卸载时解绑事件，对内存友好
onMounted(() => {
  emitter.off('send-toy')
})
</script>

<style scoped lang="css">
.son2 {
  background: skyblue;
  padding: 1px 10px;
  border-radius: 5px;
}
</style>

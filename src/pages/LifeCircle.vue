<template>
  <div>
    <h2>生命周期钩子</h2>
    求和:{{ sum }}，<button @click="sum += 10">sum+10</button>
  </div>
</template>

<script setup lang="ts" name="">
import { onBeforeMount, onMounted, 
onBeforeUpdate, onUpdated, 
onBeforeUnmount, onUnmounted, ref} from 'vue'
let sum = ref(0)

onBeforeMount(()=> {
  console.log('挂载之前')
})

onMounted(()=> {
  console.log('挂载后')
})

onBeforeUpdate(()=> {
  console.log('更新之前')
})

onUpdated(()=> {
  console.log('更新后')
})

onBeforeUnmount(()=> {
  console.log('卸载前')
})

onUnmounted(()=> {
  console.log('卸载后')
})
</script>

<style scoped lang="css">

</style>

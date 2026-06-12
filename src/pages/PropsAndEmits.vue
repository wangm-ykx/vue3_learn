<template>
  <div class="father">
    <h2>props</h2>
    <h2>这是父组件</h2>
    <child :name="name" :changeName="changeName" @child-change-name="changeName" />
  </div>
</template>

<script setup lang="ts" name="">
import { ref } from 'vue'
import Child from '@/components/Child.vue'
let name = ref('zhangsan')

function changeName(value: string) {
  name.value = value
}
</script>

<style scoped lang="css">
.father {
  border: 1px solid green;
  /* background: skyblue; */
  border-radius: 5px;
  padding: 20px;
}
</style>

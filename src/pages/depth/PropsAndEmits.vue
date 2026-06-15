<template>
  <div class="father box">
    <h2>props</h2>
    <h2>这是父组件</h2>
    显示名字：{{ name }}
    <PropsAndEmitsChild :name="name" :changeName="changeName" @child-change-name="changeName" />
    <span style="color: red">
      defineProps 是 Vue 3 的‌编译器宏‌，仅在script setup中可用，
      会在编译阶段被自动处理，‌不能显式导入会导致报错‌，所有以define开头的都禁止手动导入</span
    >
  </div>
</template>

<script setup lang="ts" name="">
import { ref } from 'vue'
import PropsAndEmitsChild from '@/components/depth/PropsAndEmitsChild.vue'
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

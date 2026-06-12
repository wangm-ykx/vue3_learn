<template>
  <div class="child">
    <h2>这是子组件</h2>
    接收的name: {{ props.name }}
    <br />
    <button @click="props.changeName('lisi')">通过父传的方法修改名字</button>
    <br />
    <button @click="changeName">通过emit修改名字</button>
  </div>
</template>

<script setup lang="ts" name="">
import { defineProps, defineEmits } from 'vue'

const props = defineProps(['name', 'changeName'])

const emits = defineEmits(['childChangeName'])

// defineProps<{name: String}>()
// withDefaults(defineProps(['name']), {
//     name:'默认名字'
// })

function changeName() {
  emits('childChangeName', '子改名字')
}
</script>

<style scoped lang="css">
.child {
  border: 1px solid blue;
  background: skyblue;
  border-radius: 5px;
  padding: 20px;
}
</style>

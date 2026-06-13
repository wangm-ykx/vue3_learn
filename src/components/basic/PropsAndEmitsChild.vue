<template>
  <div class="child">
    <h2>这是子组件</h2>
    接收的name: {{ props.name }}
    <br />
    <button @click="props.changeName('父传方法改名字')">通过父传的方法修改名字</button>
    <br />
    <button @click="changeName">通过emit修改名字</button>
  </div>
</template>

<script setup lang="ts" name="">
const props = defineProps(['name', 'changeName'])

const emits = defineEmits(['childChangeName'])

function changeName() {
  emits('childChangeName', '子改名字')
}
</script>

<style scoped lang="css">
.child {
  border: 1px solid blue;
  border-radius: 5px;
  padding: 20px;
}
</style>

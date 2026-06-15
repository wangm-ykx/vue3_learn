<template>
  <div>
    <input
      type="text"
      :value="modelValue"
      @input="emit('update:modelValue', (<HTMLInputElement>$event.target).value)"
    />
  </div>
</template>

<script setup lang="ts" name="">
// import { defineProps, defineEmits } from 'vue'
defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

// 修改modelValue，父组件中v-model:username="customInputValue"
// defineProps(['username'])
// const emit = defineEmits(['update:username'])
</script>

<style scoped lang="css">
input {
  border: 2px solid black;
  background: linear-gradient(45deg, red, yellow, green);
  height: 30px;
  font-size: 20px;
  color: white;
}
</style>

<template>
  <div>
    <input
      type="text"
      :value="modelValue"
      @input="emit('update:modelValue', $event.target?.value)"
    />
  </div>
</template>

<script setup lang="ts" name="">
// import { defineProps, defineEmits } from 'vue'
defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])
</script>

<style scoped lang="css"></style>

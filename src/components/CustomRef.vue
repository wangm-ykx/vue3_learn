<template>
  <div></div>
</template>

<script setup lang="ts" name="">
import { customRef } from 'vue'

let msg = customRef(() => {
  return {
    get() {},
    set() {},
  }
})
</script>

<style scoped lang="css"></style>

<template>
  <!-- 存在的目的，provide和inject不打扰该组件 -->
  <div class="child">
    子组件
    <ProvideGrandChild />
  </div>
</template>

<script setup lang="ts" name="">
import ProvideGrandChild from './ProvideGrandChild.vue'
</script>

<style scoped lang="css">
.child {
  background: yellowgreen;
  padding: 1px 10px 10px 10px;
  border-radius: 5px;
}
</style>

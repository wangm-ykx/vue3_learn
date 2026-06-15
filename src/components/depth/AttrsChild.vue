<template>
  <div class="child">
    子组件
    <h5>a:{{ a }}</h5>
    <h5>其他：{{ $attrs }}</h5>
    <AttrsGrandChild v-bind="$attrs" />
  </div>
</template>

<script setup lang="ts" name="">
import AttrsGrandChild from './AttrsGrandChild.vue'
defineProps(['a'])
</script>

<style scoped lang="css">
.child {
  background: yellowgreen;
  padding: 1px 10px 10px 10px;
  border-radius: 5px;
}
</style>

<template>
  <div class="grandchild">
    孙组件
    <h5>b:{{ b }}</h5>
    <h5>x:{{ x }}</h5>
    <h5>其他:{{ $attrs }}</h5>
    <button @click="updateA(6)">点我更新爷爷的a</button>
  </div>
</template>

<script setup lang="ts" name="">
defineProps(['b', 'x', 'updateA'])
</script>

<style scoped lang="css">
.grandchild {
  background: skyblue;
  padding: 1px 10px 10px 10px;
  border-radius: 5px;
}
</style>

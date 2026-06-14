<template>
  <div>
    <slot> 默认插槽内容 </slot>
    <hr />
    <slot name="header"></slot>
    <hr />
    <slot name="footer"></slot>
  </div>
</template>

<script setup lang="ts" name=""></script>

<style scoped lang="css"></style>

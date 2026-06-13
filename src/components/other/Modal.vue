<template>
  <div class="modal" v-show="isShow">
    <div class="content">这是一个左右居中弹窗</div>
    <div class="btn-box">
      <button @click="close">关闭弹窗</button>
    </div>
  </div>
</template>

<script setup lang="ts" name="">
const props = defineProps(['isShow', 'close'])
</script>

<style scoped lang="css">
.modal {
  background: pink;
  width: 350px;
  height: 200px;
  position: fixed;
  left: calc(50% - 175px);
  top: 50px;
  border-radius: 5px;
}
.content {
  text-align: center;
  padding: 20px;
}
.btn-box {
  text-align: center;
}
</style>

<template>
    <div class="modal" v-show="isShow">
          <div class="content">这是弹窗内容</div>
          <button @click="close">关闭弹窗</button>
        </div>
    </div>
</template>

<script setup lang="ts" name="">
import { defineProps } from 'vue'
const props = defineProps(['isShow', 'close'])

</script>

<style scoped lang="css">
.modal {
  background: pink;
  border: 1px solid red;
    width: 250px;
  height: 150px;
  position: fixed;
  left: calc(50% - 125px);
  top: 50px;
}
.content {
  text-align: center;
  padding: 20px;
}
</style>

<template>
  <div class="father">
    <h3>Teleport，添加了filter属性的父元素</h3>
    <Teleport to="body">
      <Modal :is-show="isShow" :close="close" />
    </Teleport>

    <img src="@/assets/xigua1.jpg" alt="" /><br />
    <button @click="isShow = true">打开弹窗</button><br />
  </div>
  <b style="color: red"
    >模态框使用position: fixed 能够相对于浏览器窗口放置有一个条件，那就是不能有任何祖先元素设置了
    transform、perspective 或者 filter 样式属性，
    如果，定位就会有问题，可以使用Teleport将模板传送到指定节点，使用to属性：可以是css选择器或html元素
  </b>
</template>

<script setup lang="ts" name="">
import Modal from '@/components/other/Modal.vue'
import { ref } from 'vue'
let isShow = ref(false)
function close() {
  isShow.value = false
}
</script>

<style scoped lang="css">
.father {
  border-radius: 5px;
  padding: 5px;
  filter: saturate(0);
}
img {
  width: 200px;
}
</style>

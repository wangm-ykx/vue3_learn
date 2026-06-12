<template>
  <div>


  </div>
</template>

<script setup lang="ts" name="">
import Modal from '@/components/Modal.vue';
import { ref } from 'vue'
let isShow = ref(false)
function close() {
  isShow.value = false
}

</script>

<style scoped lang="css">
.box {
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px;
  filter: saturate(0);
  width: 300px;
}
button {
  margin: 0 10px;
}
img{
  width: 200px;
}

</style>

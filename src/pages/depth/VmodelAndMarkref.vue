<template>
  <div>
    <div class="box">
      <h3>双向绑定v-model</h3>
      <input type="text" v-model="inputValue" />
      输入框绑定值：{{ inputValue }}
      <h3>自定义组件v-model</h3>
      <CustomInput v-model="customInputValue" />
      自定义vmodel输入框绑定值:{{ customInputValue }}
    </div>

    <div class="box">
      <h3>标签的ref属性</h3>
      <span ref="span1" style="color: red">带ref属性的标签</span>
      <button @click="changeSpanColor">通过ref获取标签修改标签颜色</button>
    </div>
  </div>
</template>

<script setup lang="ts" name="">
import { ref } from 'vue'
import CustomInput from '@/components/basic/CustomInput.vue'
const inputValue = ref('你好')

const customInputValue = ref('自定义的你好')

const span1 = ref()

function changeSpanColor() {
  const color = span1.value.style.color
  span1.value.style.color = color === 'blue' ? 'red' : 'blue'
}
</script>

<style scoped lang="css"></style>

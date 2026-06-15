<template>
  <div>
    <div class="box">
      <h3>双向绑定v-model</h3>
      <input type="text" v-model="inputValue" />
      <!-- 本质是如下，断言写法相当于$event.target as HTMLInputElement-->
      <!-- <input type="text" :value="inputValue" @input="inputValue = (<HTMLInputElement>$event.target).value" /> -->

      输入框绑定值：{{ inputValue }}
      <h3>自定义组件v-model，可以绑定多个v-model，加不同的名字v-model:username='xx'</h3>
      <CustomInput v-model="customInputValue" />
      自定义vmodel输入框绑定值:{{ customInputValue }}
      <!-- 相当于如下 -->
      <!-- <CustomInput :model-value="customInputValue" @update:model-value="customInputValue = $event"/> -->

      <!-- 修改modelValue，太长了难得看，子组件同步修改文本modelValue为username， 因此也可以绑定多个v-model -->
      <!-- <CustomInput v-model:username="customInputValue" v-model:password="customInputValue"/> -->

      <br />
      <b style="color: red">
        $event到底是啥？啥时能.target
        <ol>
          <li>对于原生事件，$event就是事件对象===能.target</li>
          <li>对于自定义事件，$event就是触发事件时，所传递的数据===不能.target</li>
        </ol>
      </b>
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
import CustomInput from '@/components/depth/CustomInput.vue'
const inputValue = ref('你好')

const customInputValue = ref('自定义的输入框')

const span1 = ref()

function changeSpanColor() {
  const color = span1.value.style.color
  span1.value.style.color = color === 'blue' ? 'red' : 'blue'
}
</script>

<style scoped lang="css"></style>

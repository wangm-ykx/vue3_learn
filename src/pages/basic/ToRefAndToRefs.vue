<template>
  <div>
    <div class="box">
      <h4>ToRefs</h4>
      一般解构的人(非响应式) 姓名:{{ name }}--年龄:{{ 18 }}
      <button @click="changeNameNo">修改-非响应式解构</button>
      <br />
      ToRefs解构的人(响应式) 姓名:{{ refsName }}--年龄:{{ refsAge }}
      <button @click="changeNameYes">修改-响应式解构</button>
    </div>
    <div class="box">
      <h4>ToRef</h4>
      ToRef解构的书(响应式) 姓名:{{ title }}
      <button @click="changeTitle">修改单个属性-响应式解构</button>
    </div>
    <div class="box">
      <h4>ToRefs与ToRef</h4>
      <ol>
        <li>
          接受一个由reactive定义的响应式对象，并将响应式对象中的每一组key-value都变成响应式，解构赋值后还得到响应式
        </li>
        <li>ToRefs是转整个对象，ToRef传参，第二个值是要解构的键</li>
      </ol>
    </div>
  </div>
</template>

<script setup lang="ts" name="ToRefAndToRefs">
import { reactive, toRefs, toRef } from 'vue'
let person = reactive({
  name: '张三',
  age: 18,
})
let book = reactive({ title: '巷里林泉' })
let { name, age } = person
let { name: refsName, age: refsAge } = toRefs(person)
let title = toRef(book, 'title')

function changeNameNo() {
  name = '李四'
  age = 19
}
function changeNameYes() {
  refsName.value = '王五' // 由于refsName是响应式引用，需要.value访问
  refsAge.value = 80
}

function changeTitle() {
  title.value = '幸得诸君慰平生'
}
</script>

<style scoped lang="css"></style>

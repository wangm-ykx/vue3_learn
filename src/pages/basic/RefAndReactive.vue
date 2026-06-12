<template>
  <div>
    <div class="box">
      <h4>ref定义基本数据类型</h4>
      当前求和: {{ sum }}
      <button @click="changeSum">求和+1</button>
      <h4>ref定义引用数据类型</h4>
      一个人 姓名:{{ people.name }}--年龄:{{ people.age }}
      <button @click="changePersonName">修改姓名</button>
      <button @click="changePeople">修改整个人</button>
    </div>
    <div class="box">
      <h4>reactive定义引用数据类型</h4>
      一本书 书名:{{ book.title }}--作者:{{ book.writer }}
      <button @click="changeBookName">修改书名</button>
      <button @click="changeBook">修改整本书</button>
    </div>
    <div class="box">
      <h4>ref与reactive区别</h4>
      <ol>
        <li>ref可以定义基本类型、对象类型的响应式数据；reactive只能定义对象类型的响应式数据</li>
        <li>在script中，ref定义的数据要用.value访问</li>
        <li>reactive全新分配一个对象，会失去响应式，可以用Object.assign替换整体而不失去响应式</li>
        <li>ref用于定义基本类型和层级不深的对象，reactive用于定义层级深的对象</li>
      </ol>
    </div>
  </div>
</template>

<script setup lang="ts" name="RefAndReactive">
import { timeUnits } from 'element-plus'
import { ref, reactive } from 'vue'
const sum = ref(0)
const people = ref({
  name: '张三',
  age: 18,
})
let book = reactive({
  title: '巷里林泉',
  writer: '杨云苏',
})

function changeSum() {
  sum.value++
}
function changePeople() {
  people.value = {
    name: '王五',
    age: 80,
  }
}
function changePersonName() {
  people.value.name = '李四'
}

function changeBookName() {
  book.title = '幸得诸君慰平生'
}
function changeBook() {
  // 这种写法不行，新对象并非响应式对象
  // book = {
  //   title: '东京八平米',
  //   writer: '吉井忍'
  // }
  // 这种写法不行，这是新的响应式对象，不是页面上的响应式对象
  // book = reactive({
  //   title: '东京八平米',
  //   writer: '吉井忍'
  // })
  Object.assign(book, {
    title: '东京八平米',
    writer: '吉井忍',
  })
}
</script>

<style scoped lang="css"></style>

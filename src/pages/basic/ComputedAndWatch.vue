<template>
  <div>
    <div class="box">
      <h2>计算属性</h2>
      姓:{{ firstName }}名:{{ lastName }}，全名：{{ fullName }}
      <button @click="lastName = '八'">修改名</button>
    </div>

    <div class="box">
      <h2>watch监视</h2>
      <h4>【ref】定义的【基本类型】</h4>
      refNum：{{ refNum }}，<button @click="refNum += 10">refNum+10</button>
      <hr />

      <h4>
        【ref】定义的【对象类型】，监听【地址值】，默认不监听对象属性(要监听需要开启deep:true)
      </h4>
      person：{{ person.name }}-{{ person.age }}，
      <button @click="changePerson">改整个人</button>
      <button @click="changePersonName">改人的名字</button>
      <hr />

      <h4>【reactive】定义的数据，默认深度监听对象的属性变化</h4>
      book：{{ book.title }}-{{ book.price }}，
      <button @click="changeBook">改整本书</button>
      <button @click="changeBookTitle">改书的名字</button>

      <hr />
      <h4>监听响应式对象的属性，属性不是对象，要用getter函数；是对象，也建议getter函数</h4>
      <h5>对象属性不是对象类型</h5>
      person：{{ person.name }}-{{ person.age }}，
      <button @click="changePersonName">改人的名字</button>
      <h5>对象属性是对象类型</h5>
      levelsObj.books:{{ levelsObj.books }}，
      <button @click="changeBooks">修改books</button>

      <hr />
      <h4>监听多个数据源</h4>
      打招呼:{{ hello }} <button @click="hello = 'hi'">修改打招呼语</button> 喜欢的水果:{{
        likes.fruit[0]
      }}
      <button @click="likes.fruit = ['荔枝']">修改喜欢的水果</button>
      <hr />
      <h4>watchEffect监听：回调默认会立即执行一次，同时响应式追踪，依赖变化时重新执行该函数</h4>
      喜欢的季节：{{ likesSeason }} <button @click="likesSeason = '夏天'">修改喜欢的季节</button>
    </div>
  </div>
</template>

<script setup lang="ts" name="">
import { he } from 'element-plus/es/locales.mjs'
import { ref, computed, watch, watchEffect, reactive } from 'vue'
let firstName = ref('zhang')
let lastName = ref('san')

// 计算属性
let fullName = computed(() => {
  return firstName.value + lastName.value
})

// watch监听
// ref定义的基本数据类型
let refNum = ref(10)
watch(refNum, () => {
  alert('refNum变化监听到了')
})

// ref定义的对象类型-监听整个对象的变化
let person = ref({ name: 'zhangsna', age: 18 })
function changePerson() {
  person.value = { name: 'lisi', age: 80 }
}
function changePersonName() {
  person.value.name = 'wangwu'
}
watch(person, () => {
  alert('person变化监听到了')
})

// reactive定义的对象类型
let book = reactive({ title: '骆驼祥子', price: 9.9 })
function changeBook() {
  Object.assign(book, { title: '旧骆驼祥子', price: 100 })
}
function changeBookTitle() {
  book.title = '新骆驼祥子'
}
watch(book, (nV, oV) => {
  alert('监听到book的变化')
})

// 监听响应式对象的属性
let levelsObj = reactive({
  books: {
    book1: '天才女友1',
  },
})
function changeBooks() {
  levelsObj.books = {
    book1: '天才女友2',
  }
}
watch(
  () => levelsObj.books,
  () => {
    alert('监听到books变化')
  },
)
watch(
  () => person.value.name,
  () => {
    alert('用getter函数，ref对象属性也能监听到')
  },
)

// 多个数据源的监听
const hello = ref('hello')
const likes = reactive({
  fruit: ['蓝莓'],
})

watch([hello, () => likes.fruit], () => {
  alert('多个数据源变化监听')
})

// watchEffect
const likesSeason = ref('冬天')
watchEffect(() => {
  if (likesSeason.value === '夏天') {
    alert('未写数据源，只写逻辑的监听')
  }
})
</script>

<style scoped lang="css">
.box {
  border: 1px solid black;
  border-radius: 5px;
  margin: 10px auto;
  padding: 5px;
}
button {
  margin: 0 10px;
}
</style>

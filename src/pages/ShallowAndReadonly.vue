<template>
  <div>
    <div class="box">
      <h3>shallowRef</h3>
      定义人-名字：{{ person.name }} 年龄：{{ person.age }}
      <button @click="changeName">修改名字失效</button>
      <button @click="changePerson">修改人可以</button>
    </div>
    <div class="box">
      <h3>shallowReactive</h3>
      定义车-品牌：{{ car.brand }} 配置的颜色：{{ car.options.color }}
      <button @click="changeBrand">修改品牌可以</button>
      <button @click="changeColor">修改配置的颜色失效</button>
    </div>

    <div class="box">
      <h3>readonly：ref和reactive定义的整个对象及深层都不能改，但源数据是响应式的</h3>
      源基本数据sum:{{ sum }} readonly基本数据sum1:{{ sum1 }}
      <button @click="changeSum">sum+1 可以</button>
      <button @click="changeSum1">sum1+10 不可以</button>
      <br />
      源对象数据book:{{ book }} readonly对象数据book1:{{ book1 }}
      <button @click="changeBook">book可以</button>
      <button @click="changeBook1">book1不可以</button>
    </div>

    <div class="box">
      <h3>shallowReadonly：ref和reactive定义的整个对象第一层不能改，深层可以改</h3>
      <br />
      源对象数据book:{{ book }} shallowReadonly对象数据book2:{{ book2 }}
      <button @click="changeBook2">book2深层可以改</button>
    </div>

    <b style="color: red"
      >总结：shallow对于基本数据类型就是数据本身，对于对象就是对象的第一层属性，不管是响应式还是禁用</b
    >
  </div>
</template>

<script setup lang="ts" name="ShallowAndReadonly">
import { ref, reactive, shallowReactive, shallowRef, readonly, shallowReadonly } from 'vue'
let person = shallowRef({ name: 'zhang', age: 18 })

function changeName() {
  person.value.name = 'lisi'
}
function changePerson() {
  person.value = { name: 'wangwu', age: 80 }
}

let car = shallowReactive({
  brand: ' 奔驰',
  options: {
    color: '黑色',
  },
})

function changeBrand() {
  car.brand = '宝马'
}
function changeColor() {
  car.options.color = '黄色'
}

let sum = ref(0)
let sum1 = readonly(sum)
function changeSum() {
  sum.value += 1
}
function changeSum1() {
  // sum1.value += 10
}

let book = reactive({ title: '骆驼祥子', owner: '老舍', options: { color: '黄色' } })
let book1 = readonly(book)
let book2 = shallowReadonly(book)
function changeBook() {
  book.title = '新骆驼翔子'
}
function changeBook1() {
  // book1.title = '旧骆驼翔子'
}
function changeBook2() {
  book2.options.color = '绿色'
}
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

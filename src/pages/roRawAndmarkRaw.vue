<template>
  <div>
    <div class="box">
      <h2>toRaw：获取响应式数据源对象-普通非响应式对象</h2>
      reactive对象car：{{ car.brand }} <br />
      car的toRaw对象car1：{{ car1.brand }} <br />
      <button @click="changeCar">改car会变化</button>
      <button @click="changeCar1">改car1不会变化</button>
    </div>

    <div class="box">
      <h2>markRaw-标记一个对象，使其永远不会变成响应式，标记返回的对象不能成为响应式</h2>
      markRaw对象car2：{{ car2.brand }} <br />
      car2的响应式car3: {{ car3.brand }}
      <button @click="changeCar3">car3用reactive定义但无响应式</button><br />
    </div>

    <b style="color: red"
      >结论：toRaw(传参响应式对象)，得到响应式对象的原始对象，改值不是响应式；
      markRaw(普通对象)，调用该函数得到的变量，后用reactive包裹也无法成为响应式
    </b>
  </div>
</template>

<script setup lang="ts" name="SuperTest">
import { reactive, toRaw, markRaw } from 'vue'
let car = reactive({ brand: '奔驰', price: 100 })

let car1 = toRaw(car)

function changeCar() {
  car.brand += 'car'
}
function changeCar1() {
  car1.brand += 1
  console.log(car1, '----')
}
let car2 = markRaw({ brand: '奥迪', price: 200 })
console.log(car2, '===car2')
let car3 = reactive(car2)

function changeCar3() {
  car3.brand += '3'
  console.log(car3, '==car3')
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

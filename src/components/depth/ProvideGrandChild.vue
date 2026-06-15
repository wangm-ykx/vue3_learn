<template>
  <div class="grandchild">
    孙组件
    <h5>钱：{{ money }}</h5>
    <h5>车：{{ car.brand }}, {{ car.price }}</h5>
    <button @click="updateMoney(5)">花爷爷的钱</button>
  </div>
</template>

<script setup lang="ts" name="">
import { inject } from 'vue'

let { money, updateMoney } = inject('moneyContext', {
  money: 0,
  updateMoney: (param: number) => {},
}) // 默认值
let car = inject('car', { brand: '未知', price: 0 }) // 默认值，隐式告诉结构
</script>

<style scoped lang="css">
.grandchild {
  background: skyblue;
  padding: 1px 10px 10px 10px;
  border-radius: 5px;
}
</style>

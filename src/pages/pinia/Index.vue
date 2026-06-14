<template>
  <div class="box">
    <h4>stores中数据的读取、storeToRefs(该store使用的组合式写法)</h4>
    <ul>
      <li v-for="item in addressList" :key="item">{{ item }}</li>
    </ul>
    <button @click="getAddress">获取一个地址</button><br />
    <b style="color: red"
      >读取方式可以store.state、store.$state.state、解构（直接解构会失去响应式，要借助storeToRefs）</b
    >
    <br />
    <b style="color: red"
      >storeToRefs和toRefs区别，storeToRefs只关注store中的数据，ToRefs会将对象所有属性转为响应式</b
    >
  </div>

  <div class="box">
    <h4>修改数据的三种方式</h4>
    方式一：.vue组件中摸到数据直接修改，store.state直接修改值<br />
    计数：{{ counterStore.sum }}
    <button @click="changeOne">计数+1</button>
    <br />
    方式二：批量修改<br />
    计数：{{ counterStore.sum }} ，颜色：{{ counterStore.color }}
    <button @click="changeTwo">批量修改值</button><br />
    方式三：借助actions，acitons可以加通用的逻辑<br />
    计数：{{ counterStore.sum }}
    <button @click="changeThree">计数+10</button>
  </div>

  <div class="box">
    <h4>getters的使用</h4>
    计数：{{ counterStore.sum }}，计数放大10倍：{{ counterStore.bigSum }}
    <button @click="counterStore.sum++">计数+1</button>
  </div>

  <div class="box">
    <h4>$subscrible订阅，可以监听pinia中数据修改，实现数据持久化存储</h4>
    <ul>
      <li v-for="item in addressList" :key="item">{{ item }}</li>
    </ul>
    <button @click="getAddress">获取一个地址</button><br />
  </div>
</template>

<script setup lang="ts" name="LoveTalk">
import { useCounterStore } from '@/stores/counter'
import { useAddressStore } from '@/stores/address'
import { storeToRefs } from 'pinia'
import { faker } from '@faker-js/faker'

const addressStore = useAddressStore()
const { addressList, getAnAddress } = addressStore
function getAddress() {
  getAnAddress()
}

const counterStore = useCounterStore()

// 非组合式写法的修改数据
// 方式一:组件中摸到数据直接改
function changeOne() {
  counterStore.sum += 1
}

// 方式二:批量修改
function changeTwo() {
  counterStore.$patch({
    sum: 888,
    color: '黄色',
  })
}

// 方式三：借助actions
function changeThree() {
  counterStore.increment(10)
}

addressStore.$subscribe((mutate, state) => {
  // mutate-本次修改信息，state-修改后的数据
  // 使用场景
  console.log('修改 了')
  localStorage.setItem('addressList', JSON.stringify(state.addressList))
})
</script>

<style scoped lang="css"></style>

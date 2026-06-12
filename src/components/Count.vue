<template>
  <div class="count">
    <h2>当前求和为{{ sum }}</h2>
    <select v-model.number="select">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </select>
    <button @click="add">加</button>
    <button @click="sub">减</button>
  </div>
</template>

<script setup lang="ts" name="Count">
import { ref} from 'vue'
import { useCounteStore } from "@/stores/count"
import { storeToRefs } from 'pinia'
const countStore = useCounteStore()
let { sum } = storeToRefs(countStore)
let select = ref(1)

function add() {
 sum.value += select.value
}
function sub() {
  sum.value -= select.value
  $parent
}
</script>

<style scoped lang="css">
.count{
    border: 1px solid black;
    padding: 20px;
    background: skyblue;
}
select,button {
  margin:0 5px;
  height: 25px;
  line-height: 20px;
}
</style>

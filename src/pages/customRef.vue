<template>
  <div>
    <h2>自定义Ref：自定义响应式，关键是track和trigger，在get和set中</h2>
    msg：{{ msg }}
    <input v-model="msg"/>
    <b style="color: red;">结论：一顿瞎蒙加笔记实现了</b>
  </div>
</template>

<script setup lang="ts" name="">
import { customRef } from 'vue';
let initValue = '你好'
    let timer

let msg = customRef((track, triiger) => {
    return {
        get() {
            track()
            return initValue
        },
        set(value: string) {
            clearTimeout(timer)
            setTimeout(() => {
                initValue = value
                triiger()
            }, 1500)        }
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

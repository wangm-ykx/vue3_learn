<template>
  <div class="box">
    <h4>自定义hooks</h4>
    用户名:{{ userName }}，用户年龄:{{ userAge }} <br />
    <button @click="setUserName('lisi')">修改用户名</button>
    <button @click="setUserAge(80)">修改用户年龄</button><br />
    <div style="margin-top: 10px">
      <b style="color: red">
        自定义hooks是一个非常有用的特性，允许你封装可重用的逻辑，使得代码更加模块化和易于维护。
        自定义hooks本质上是一个函数，它接收一些参数并返回一个响应式的对象（通常是一个响应式引用或一个响应式对象），这个对象包含了组件所需要使用的状态和可能的方法。
      </b>
      <br />
      <b>创建和使用过程</b>
      <ol>
        <li>
          ‌定义hook函数‌：这个函数可以接收一些参数（如果需要的话），并返回一个对象，该对象包含了一些响应式的数据和方法。
        </li>
        <li>‌在组件中导入并使用这个hook。</li>
      </ol>
    </div>
  </div>
</template>

<script setup lang="ts" name="">
import { useUser } from '@/hooks/useUser'

const { userAge, userName, setUserName, setUserAge } = useUser()
</script>

<style scoped lang="css">
button {
  margin: 0 10px;
}
</style>

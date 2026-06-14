<template>
  <RouterView />
</template>

<script setup lang="ts" name="App">
import { RouterView } from 'vue-router'
</script>

<style>
/* 通用样式，内容盒子、盒子中按钮 */
.box {
  border: 1px solid #666;
  border-radius: 5px;
  margin: 10px auto;
  padding: 5px;
  h4,
  h2 {
    /* color: skyblue; */
    background: #87ceeb;
    padding: 5px;
    padding-left: 10px;
  }
  button {
    margin: 0 10px;
  }
}

/* 路由导航测试样式
.title {
  border: 1px solid;
  background: burlywood;
  text-align: center;
  margin: 0 20px;
  border-radius: 5px;
}
.nav-box {
  margin-top: 15px;
  text-align: center;
}
.nav-box a {
  margin: 35px;
  border: 1px solid black;
  border-radius: 5px;
  padding: 3px 15px;
  text-decoration: none;
  color: black;
}
.nav-box .active {
  background: plum;
}
.nav-box button {
  margin: 0 100px;
}
.show-box {
  border: 1px solid black;
  min-height: 300px;
  margin: 0 20px;
  margin-top: 15px;
  border-radius: 5px;
} */
</style>

<template>
    <SuperTest/>
</template>

<script setup lang="ts" name="App">
import SuperTest from '@/pages/SuperTest.vue'
</script>

<style scoped>

/* 路由导航测试样式 */
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
}
</style>

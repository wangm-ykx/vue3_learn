<template>
  <div>
    <div class="header">
    <h2>路由</h2>

    </div>
    <div class="box">
      <div class="nav">菜单栏</div>
      <div class="content">内容区间</div>
    </div>
  </div>
</template>

<script setup lang="ts" name="">

</script>

<style scoped lang="css">
.header {
  height: 50px;
  background: skyblue;
  text-align: center;
  border-radius: 5px;
}
.box {
  display: flex;
  min-height: 300px;
}
.nav {
  width: 200px;
  border-right: 1px solid black;
}
</style>

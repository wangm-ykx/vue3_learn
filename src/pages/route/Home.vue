<template>
  <div class="main">
    夏天实在应该看《西瓜》<br />
    <div class="img-box">
      <img src="@/assets/xigua1.jpg" alt="" />
      <img src="@/assets/xigua2.jpeg" alt="" />
      <img src="@/assets/xigua3.jpeg" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts" name="Home"></script>

<style scoped lang="css">
.main {
  text-align: center;
  padding-top: 20px;
  color: red;
}
.img-box {
  display: flex;
  justify-content: space-around;
}
.img-box img {
  width: 150px;
}
</style>

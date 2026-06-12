<template>
  <div>
    用户名:{{ userName }}，用户年龄:{{ userAge }} <br />
    <button @click="setUserName('lisi')">修改用户名</button>
    <button @click="setUserAge(80)">修改用户年龄</button>
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

<template>
  <div class="love">
    <button @click="getName">获取一个名字</button>
    <ul>
      <li v-for="item in talkList" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts" name="LoveTalk">
import { faker } from '@faker-js/faker'
import { reactive } from 'vue'
import { useTalkStore } from '@/stores/talk'
import { storeToRefs } from 'pinia'

const talkStore = useTalkStore()

const { talkList } = storeToRefs(talkStore)

function getName() {
  talkStore.getATalk()
}
</script>

<style scoped lang="css">
.love {
  border: 1px solid black;
  padding: 20px;
  background: skyblue;
  margin-top: 20px;
}
</style>

import { defineStore } from 'pinia'
import { reactive } from 'vue'
import  { faker } from '@faker-js/faker'


export const useTalkStore = defineStore('talk', () =>{
  const talkList = reactive(['zhangsan','lisi'])

  function getATalk() {
    talkList.unshift(faker.person.fullName())
  }

  return {
    talkList, getATalk
  }
})

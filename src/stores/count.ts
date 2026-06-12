import { defineStore } from 'pinia'

export const useCounteStore = defineStore('counte', {
  state() {
    return {
      sum: 6,
      school: '大学'
    }
  }
})

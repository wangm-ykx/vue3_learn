import { defineStore } from 'pinia'

// store选项式写法
export const useCounterStore = defineStore('counter', {
  // 存储数据的地方
  state() {
    return {
      sum: 6,
      color: '红色',
    }
  },
  getters: {
    bigSum(state) {
      return state.sum * 10
      // 也可以用下面的写法
      // return this.sum * 10
    },
    // 箭头函数写法
    // bigSum: state => state.sum * 10
  },
  // 放置一个个方法，用于响应组件中的'动作'
  actions: {
    increment(value: number) {
      this.sum += value
    },
  },
})

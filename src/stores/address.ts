import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { faker } from '@faker-js/faker'

// store组合式写法
export const useAddressStore = defineStore('address', () => {
  const addressList = reactive(JSON.parse(localStorage.getItem('addressList') as string) || [])

  function getAnAddress() {
    addressList.unshift(faker.location.streetAddress())
  }

  return {
    addressList,
    getAnAddress,
  }
})

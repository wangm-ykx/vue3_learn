// 类似vue2的混入，抽取公共逻辑，取名useX，且用到了组合式API，将变量和对该变量的操作抽取防抖一个地方

import { ref } from 'vue'

export function useUser() {
    let userName = ref('zhangsan')
    let userAge = ref(18)

    function setUserName(name: string) {
        userName.value = name
    }

    function setUserAge(age: number) {
        userAge.value = age
    }
    return {
        userName,
        userAge,
        setUserName,
        setUserAge
    }

}
<template>
  <div class="main">
    <div class="box">
      <h4>1.props和自定义事件：直接父子互传，建议不要跨多层级</h4>
      <div class="father">
        这是父组件
        <h5>汽车：{{ car }}</h5>
        <h5>子给的玩具: {{ toy }}</h5>
        <!-- 给子组件绑定事件 -->
        <ChildPropseEmits :car="car" :sendToy="getToy" />
      </div>
      <b style="color: red"
        >props是使用频率最高的一种通信方式，父传子：属性值是非函数；子传父：属性值是函数；
      </b>
      <br />
      <b style="color: red">给子组件绑定事件，子组件定义emits发射，详见菜单【props和emits】</b>
    </div>

    <div class="box">
      <h4>2.mitt：可以实现任意组件通信</h4>
      <MittChild1 />
      <MittChild2 style="margin-top: 15px" />
      <br />
      <b style="color: red">接收数据的：提前绑定号事件；提供数据的：在合适的时候触发事件 </b>
    </div>

    <div class="box">
      <h4>3.v-model，详见菜单【v-model和标签的ref属性】，可以父子互传</h4>
    </div>

    <div class="box">
      <h4>4.$attrs：当前组件的父给子传(祖孙互传，需要中间组件父)</h4>
      <div class="father">
        父组件
        <h5>a：{{ a }}</h5>
        <h5>b：{{ b }}</h5>
        <h5>c：{{ c }}</h5>
        <!-- v-bind语法 -->
        <AttrsChild :a="a" :b="b" :c="c" v-bind="{ x: 100, y: 100 }" :updateA="updateA" />
      </div>
      <b style="color: red"
        >$attrs用于接收父组件传递给子组件但‌未被声明为 props 或 emits‌ 的所有属性（即“透传
        attribute”）。‌‌因此可以继续向孙传递</b
      >
    </div>

    <div class="box">
      <h4>5.$refs(用于父传子)与$parent(用于子传父)</h4>
      <div class="father">
        父组件
        <h5>房产：{{ house }}</h5>
        <button @click="changeChild1">修改child1的玩具</button>
        <button @click="changeChild2">修改child2的电脑</button>
        <button @click="getAllChild($refs)">获取所有子组件实例</button>
        <RefAndParentChild1 ref="c1" style="margin-top: 15px" />

        <RefAndParentChild2 ref="c2" style="margin-top: 15px" />
      </div>
    </div>

    <div class="box">
      <h4>6.provide和inject(祖孙互传，不需要中间组件)</h4>
      <div class="father">
        父组件
        <h5>钱：{{ money }}</h5>
        <h5>车：{{ car1 }}</h5>
        <ProvideChild />
        <b>传数据是祖->孙，传函数可以让孙调用则为孙->祖</b>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="">
// **************props*******************
import { reactive, ref, provide } from 'vue'
import ChildPropseEmits from '@/components/depth/ChildPropseEmits.vue'
import MittChild1 from '@/components/depth/MittChild1.vue'
import MittChild2 from '@/components/depth/MittChild2.vue'
import AttrsChild from '@/components/depth/AttrsChild.vue'
import RefAndParentChild1 from '@/components/depth/RefAndParentChild1.vue'
import RefAndParentChild2 from '@/components/depth/RefAndParentChild2.vue'
import ProvideChild from '@/components/depth/ProvideChild.vue'

const car = ref('奔驰')

const toy = ref('')

function getToy(value: string) {
  toy.value = value
}

// **************自定义事件*******************
function test(a: number, event: any) {
  console.log(event, '$event事件对象')
}

// **************$attrs*******************
const a = ref(1)
const b = ref(2)
const c = ref(3)

function updateA(value: number) {
  a.value += value
}

// **************$refs和$parent*******************
const house = ref(5)
const c1 = ref()
const c2 = ref()

function changeChild1() {
  c1.value.toy = '小猪佩奇'
}
function changeChild2() {
  c2.value.computer = '惠普'
}

// ****注意点****
const obj = reactive({
  a: 1,
  b: 2,
  c: ref(3),
})
// 访问时,c不需要加value，因为c在一个响应式对象中，会自动解包/拆包
// console(obj.a, obj.c)  obj.c.value是undefined不是3

function getAllChild(refs: { [key: string]: any }) {
  console.log(refs, '========$refs')
  for (let key in refs) {
    // 这里不用.value就是因为$refs是响应式对象，所以其属性中是响应式对象的可以直接访问，无需.value
    refs[key].books += 2
  }
}
// 向外部暴露数据
defineExpose({ house })

// **************provide和inject*******************
const car1 = reactive({
  brand: '奔驰',
  price: 100,
})

const money = ref(100)

function updateMoney(value: number) {
  money.value -= value
}

// 向后代提供数据
provide('car', car1)
// 这里不能传money.value，只传值过去后，会失去响应式
provide('moneyContext', { money, updateMoney })
</script>

<style scoped lang="css">
.father {
  border: 1px solid;
  padding: 10px;
  border-radius: 5px;
  background-color: #ccc;
}
</style>

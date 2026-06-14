<template>
  <div class="box">
    <h4>默认插槽</h4>
    <SlotDefine>
      <h5>这是父组件传给插槽的内容</h5>
      <b style="color: red">默认插槽</b>
    </SlotDefine>
  </div>
  <div class="box">
    <h4>具名插槽</h4>
    <SlotDefine>
      <template v-slot:header>
        <br />
        <span style="color: red">这是头部内容</span>
        <br />
        <el-avatar
          :size="32"
          class="mr-3"
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
      </template>
      <!-- 具名插槽简写 -->
      <template #footer>
        <span style="color: red">这是底部内容</span>
        <el-steps style="max-width: 600px" :active="3" finish-status="success">
          <el-step title="Step 1" />
          <el-step title="Step 2" />
          <el-step title="Step 3" />
        </el-steps>
      </template>
    </SlotDefine>
  </div>
  <div class="box">
    <h4>作用域插槽</h4>
    <div class="content">
      <SlotFruits>
        <!-- <template v-slot="{fruits}"> -->
        <!-- 作用域+具名插槽一起使用 -->
        <!-- <template v-slot:header="{fruits}"> -->
        <template v-slot:default="{ fruits }">
          <ul>
            <li v-for="(item, index) in fruits">{{ item }}</li>
          </ul>
        </template>
      </SlotFruits>
      <SlotFruits>
        <!-- <template v-slot="{fruits}"> -->
        <template v-slot:default="{ fruits }">
          <ol>
            <li v-for="(item, index) in fruits">{{ item }}</li>
          </ol>
        </template>
      </SlotFruits>
    </div>
    <b style="color: red"
      >数据在子组件，但根据数据生成的结构，由父组件决定；数据子维护，结构父决定;很多UI组件库的table、对话框、表格等，例如看到的#default</b
    >
  </div>
</template>

<script setup lang="ts" name="">
import SlotDefine from '@/components/depth/SlotDefine.vue'
import SlotFruits from '@/components/depth/SlotFruits.vue'
</script>

<style scoped lang="css">
.content {
  display: flex;
  justify-content: space-evenly;
}
</style>

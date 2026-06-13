<template>
  <div class="box">
    <h4>Options api(选项式)与Composition api(组合式)区别</h4>
        <ol>
      <li>选项式api，通过定义methods，computed，watch，data等属性与方法共同处理页面逻辑，
        多数情况下该方法有效，当组件变得复杂时，导致对应的属性列表会增长，导致组件难以阅读和理解，
        数据、方法分开放</li>
      <li>组合式api中，组件根据逻辑功能来组织，一个功能所定义的所有api会放在一起，更加高内聚、低耦合；</li>
    </ol>
    <img src="@/assets/optionsapi-compositionapi.gif" alt="">
    <h4>组合式api的优势</h4>
    逻辑组织
    <ol>
          <li>options api在处理一个大型组件时，内部的逻辑点容易碎片化，可能同事存在于method，computed，watch等api中，
      我们必须不断“跳转”相关代码的选项块，这种碎片化使得理解和维护复杂组件变得困难
    </li>
    <li>composition api将某个逻辑关注点相关代码全都放在一个函数里，这样，当需要修改一个功能时，无需跳来跳去</li>
    </ol>
    逻辑复用
    <ol>
      <li>在vue2中，当混入多个mixin会存在两个明显问题：命名冲突、数据来源不清晰</li>
      <li>而Composition api可以通过编写多个hooks函数很好解决</li>
    </ol>
  </div>
</template>

<script setup lang="ts" name="">

</script>

<style scoped lang="css">
img {
  width: 380px;
}

</style>

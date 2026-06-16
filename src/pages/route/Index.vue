<template>
  <div>
    <div class="box">
      <b style="color: red">
        注意：1.路由文件通常放在pages或views文件夹，一般组件放在components文件夹；
        路由组件：靠路由的规则渲染出来、一般组件：写标签方式使用<br />
        2.通过点击导航，视觉效果上‘消失’的路由组件，默认是销毁了，需要时再去挂载
      </b>
    </div>

    <div class="box">
      <h4>路由器工作模式：在router/index.ts中配置</h4>
      <ul>
        <li>
          history模式<br />
          优点：url中不带#，更美观，更接近传统的网站url <br />
          缺点：后期项目上线，需要服务端配合处理路径问题，否则会有404错误（可以用nginx配置）
        </li>
        <li>
          hash模式<br />
          优点：兼容性更好，因为不需要服务器端处理路径 <br />
          缺点：url带有#不太美观，且在seo优化方面相对较差
        </li>
      </ul>
    </div>

    <div class="box">
      <h4>to的两种写法:字符串和对象</h4>
      <h4>命名路由：在router/index.ts中给路由配置name属性，在to中可以通过name跳转</h4>
      <h4>嵌套路由：在router/index.ts中给路由配置children属性，在子路由挂载位置定义RouterView</h4>
      <RouterLink to="/route/index/home" active-class="active">首页</RouterLink>
      <RouterLink :to="{ path: '/route/index/news' }" active-class="active">新闻</RouterLink>
      <RouterLink :to="{ name: 'about' }" active-class="active">关于</RouterLink>
      <hr />

      <h4>路由：query参数和params参数(因为to的两种写法，传参也有两种写法)</h4>

      <RouterLink :to="`/route/index/news?id=${id}`" active-class="active"
        >query字符串-新闻</RouterLink
      >
      <RouterLink
        :to="{ path: '/route/index/news', query: { id: 'adiassiuwu1' } }"
        active-class="active"
        >query对象-新闻</RouterLink
      >

      <RouterLink :to="`/route/index/news/${id}`" active-class="active"
        >params字符串-新闻</RouterLink
      >
      <RouterLink :to="{ name: 'news', params: { id: 'adiassiuwu1' } }" active-class="active"
        >params对象-新闻</RouterLink
      >
      <RouterView />
      <b style="color: red"
        >params参数注意点，1.路由定义时要占位/news/:id(参数必传的话)
        2.to对象跳转时只能用name不能用path 3.传值不能是数组或对象
      </b>
    </div>

    <div class="box">
      <h4>路由props配置，路由定义props:true+路由组件中用defineProps接收</h4>
      <RouterLink
        :to="{ name: 'news', params: { id: 'adiassiuw100', content: '测试路由props' } }"
        active-class="active"
        >新闻</RouterLink
      >
      <RouterView />
    </div>

    <div class="box">
      <h4>
        路由replace属性，路由默认是push，会记录在历史栈里前进后退，给routerlink加replace属性，则替换当前栈中记录
      </h4>
      <RouterLink replace to="/route/index/home" active-class="active">首页</RouterLink>
      <RouterLink replace :to="{ name: 'about' }" active-class="active">关于</RouterLink>
    </div>

    <div class="box">
      <h4>编程式路由导航：脱离RouterLink实现路由跳转</h4>
      <button @click="jump">跳转基础页面</button>
    </div>

    <div class="box">
      <h4>路由重定向：让指定路径重新定位到另一个路径，路由规则中redirect配置</h4>
    </div>
  </div>
</template>

<script setup lang="ts" name="">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const id = ref('adiassiuwu2')
const router = useRouter()

function jump() {
  router.push({
    path: '/basic/refAndReactive',
  })
}
</script>

<style scoped lang="css">
a {
  margin: 10px;
}
.active {
  text-decoration: none;
  background-color: skyblue;
}
</style>

<template>
  <h2>App父级组件</h2>
  <button @click="isShow=!isShow">切换显示</button>
  <hr />
  <Child v-if="isShow" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
// 引入子级组件 Child
import Child from './components/Child.vue'

export default defineComponent({
    name: 'App',
    // 注册组件
    components: {
      Child
    },
    setup() {
      // 定义ref类型的数据
      const isShow = ref(true)
      return {
        isShow
      }
    }
})
</script>


<style>

</style>
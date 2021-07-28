<template>
  <h1>父组件</h1>
  <p>当前颜色: {{color}}</p>
  <button @click="color='red'" style="background: red">红</button>
  <button @click="color='yellow'" style="background: yellow">黄</button>
  <button @click="color='blue'" style="background: blue">蓝</button>
  
  <hr>
  <Son />
</template>
<script lang='ts'>
import { defineComponent, provide, ref } from 'vue'
/* 
provide 与 inject：
  1. provide和inject提供依赖注入，功能类似 2.x 的provide/inject
  2. 实现跨层级组件(祖孙)间通信
*/
import Son from './components/Son.vue'
export default defineComponent ({
  'name':'App',
  components: {
    Son
  },
  setup() {
    const color = ref('red')
    provide('color', color)
    return {
      color
    }
  }
  
})
</script>
<style lang='stylus' scoped>
button {
  margin 10px
  border-radius 50%
}
</style>
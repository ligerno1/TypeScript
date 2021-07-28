<template>
  <h2>App父级组件</h2>
  <h3>{{msg}}</h3>
  <button @click="msg += 'A'">更新数据</button>
  <hr />
  <Child :msg="msg" @test="test" />
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
      const msg = ref('what the fuck!')
      function test(val: string) {
        msg.value = val
      }
      return {
        msg,
        test
      }
    }
})
</script>


<style>

</style>
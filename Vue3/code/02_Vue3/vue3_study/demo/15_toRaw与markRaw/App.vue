<template>
  <h2>toRaw与markRaw</h2>
  <h3>state:{{state}}</h3>
  <hr>
  <button @click="testToRaw">测试toRaw</button>
  <button @click="testMarkRaw">测试markRaw</button>
</template>
<script lang='ts'>
import { defineComponent, reactive, toRaw, markRaw } from 'vue'
/* 
toRaw 与 markRaw
  1）toRaw
    1. 返回由 reactive 或 readonly 方法转换成响应式代理的普通对象。
    2. 这是一个还原方法，可用于临时读取，访问不会被代理/跟踪，写入时也不会触发界面更新。
  2）markRaw
    1. 标记一个对象，使其永远不会转换为代理。返回对象本身
    2. 应用场景:
      1. 有些值不应被设置为响应式的，例如复杂的第三方类实例或 Vue 组件对象。
      2. 当渲染具有不可变数据源的大列表时，跳过代理转换可以提高性能。

*/
interface UserInfo {
  name: string;
  age: number;
  likes?: string[];
}
export default defineComponent ({
  'name':'App',
  setup() {
    const state = reactive<UserInfo>({
      name: '萧峰',
      age: 31
    })
    const testToRaw = () => {
      console.log('testToRaw!');
      // 把代理对象变成普通对象，数据变化，页面不变化
      const user = toRaw(state)
      user.name += '=='
    }
    const testMarkRaw = () => {
      console.log('testToMarkRaw!');
      // if(state.likes) {
      //   state.likes[0] += '=='
      // } else {
      //   state.likes = ['吃', '喝', '嫖', '赌']
      // }
      const likes = ['吃', '喝', '嫖', '赌']
      state.likes = markRaw(likes)
      setInterval(()=>{
        console.log('timer');
        if (state.likes) {
          // markRaw 标记的对象数据，从此以后都不能再成为代理对象了，因此无法被修改和赋值
          state.likes[0] += '=='  // 没有生效
        }
      }, 1000)
      
    }
    return {
      state,
      testToRaw,
      testMarkRaw  
    }
  }
  
})
</script>
<style lang='stylus' scoped>

</style>
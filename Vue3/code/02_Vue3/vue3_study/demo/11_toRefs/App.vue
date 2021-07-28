<template>
  <h2>toRefs的使用</h2>
  <!-- <h3>name: {{ state.name }}</h3>
  <h3>age: {{ state.age }}</h3> -->
  <h3>name: {{ name }}</h3>
  <h3>age: {{ age }}</h3>
</template>
<script lang='ts'>
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent ({
  'name':'App',
  setup() {
    const state = reactive({
      name: '萧峰',
      age: 0
    })
    /* 
    toRefs:
      1. 把一个响应式对象转换成普通对象，该普通对象的每个 property 都是一个 ref
      2. 应用: 当从合成函数返回响应式对象时，toRefs 非常有用，这样消费组件就可以在不丢失响应式的情况下对返回的对象进行分解使用
      3. 问题: reactive 对象取出的所有属性值都是非响应式的
      4. 解决: 利用 toRefs 可以将一个响应式 reactive 对象的所有原始属性转换为响应式的 ref 属性
    */
    const state2 = toRefs(state)
    // 定时器，更新数据,(如果数据变化，界面也跟着变化，就是响应式的数据)
    let timer = setInterval(() => {
      console.log('t')
      state2.age.value += 1
      if (state.age >= 33) {
        clearInterval(timer)
      }
    }, 1000)
    return {
      // state
      // ...state // 结构数据不是响应式的数据 ---> 重新生成了新的 name 和 age 属性
      ...state2
    }
  }
})
</script>
<style lang='stylus' scoped>

</style>
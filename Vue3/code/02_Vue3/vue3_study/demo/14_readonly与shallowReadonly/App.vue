<template>
  <h2>readonly和shallowReadonly</h2>
  <h3>state:{{state3}}</h3>
  <button @click="update">更新数据</button>
</template>
<script lang='ts'>
import { defineComponent, reactive, readonly, shallowReadonly, shallowRef } from 'vue'
/* 
readonly 与 shallowReadonly：
  1) readonly:
    1. 深度只读数据
    2. 获取一个对象 (响应式或纯对象) 或 ref 并返回原始代理的只读代理。
    3. 只读代理是深层的：访问的任何嵌套 property 也是只读的。
  2) shallowReadonly:
    1. 浅只读数据
    2. 创建一个代理，使其自身的 property 为只读，但不执行嵌套对象的深度只读转换
  3) 应用场景:
    1. 在某些特定情况下, 我们可能不希望对数据进行更新的操作, 那就可以包装生成一个只读代理对象来读取数据, 而不能修改或删除
*/
export default defineComponent ({
  'name':'App',
  setup() {
    const state = reactive({
      name: '张三',
      age: 18,
      car: {
        name: '宝马'
      }
    })
    // const state2 = readonly(state) // 深度只读
    const state3 = shallowReadonly(state) // 浅只读
    const update = () => {
      // state2.name += '==='  // 报错，只读数据
      // state2.car.name += '===' // 报错，只读数据
      // state3.name += '==='  // 报错，只读数据
      state3.car.name += '==='  // 正常，
    }
    return {
      state3,
      update
    }
  }
  
})
</script>
<style lang='stylus' scoped>

</style>
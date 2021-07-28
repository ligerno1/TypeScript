<template>
  <h2>响应式数据的判断</h2>
</template>
<script lang='ts'>
import { defineComponent, isProxy, isReactive, isReadonly, isRef, reactive, readonly, ref } from 'vue'
/* 
响应式数据的判断:
  1. isRef: 检查一个值是否为一个 ref 对象
  2. isReactive: 检查一个对象是否是由 reactive 创建的响应式代理
  3. isReadonly: 检查一个对象是否是由 readonly 创建的只读代理
  4. isProxy: 检查一个对象是否是由 reactive 或者 readonly 方法创建的代理
*/
export default defineComponent ({
  'name':'App',
  setup() {
    const obj = {}
    // 1. isRef: 检查一个值是否为一个 ref 对象
    console.log(isRef(ref(obj)));
    console.log(isRef(obj));
    // 2. isReactive: 检查一个对象是否是由 reactive 创建的响应式代理
    console.log(isReactive(reactive(obj)));
    console.log(isReactive(readonly(obj)));
    // 3. isReadonly: 检查一个对象是否是由 readonly 创建的只读代理
    console.log(isReadonly(reactive(obj)));
    console.log(isReadonly(readonly(obj)));
    // 4. isProxy: 检查一个对象是否是由 reactive 或者 readonly 方法创建的代理
    console.log(isProxy(reactive(obj)));
    console.log(isProxy(readonly(obj)));
    console.log(isProxy(ref(obj)));
    return {
      
    }
  }
  
})
</script>
<style lang='stylus' scoped>

</style>
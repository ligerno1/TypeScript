<template>
  <h2>shallowReactive和shallowRef</h2>
  <h3>m1:{{m1}}</h3>
  <button @click.self="update1">更新m1数据</button>
  <h3>m2:{{m2}}</h3>
  <button @click.self="update2">更新m2数据</button>
  <h3>m3:{{m3}}</h3>
  <button @click.self="update3">更新m3数据</button>
  <h3>m4:{{m4}}</h3>
  <button @click.self="update4">更新m4数据</button>
  
</template>
<script lang='ts'>
import { defineComponent, reactive, ref, shallowReactive, shallowRef } from 'vue'
/* 
shallowReactive与shallowRef：
  1. shallowReactive : 只处理了对象内最外层属性的响应式(也就是浅响应式)
  2. shallowRef: 只处理了value的响应式, 不进行对象的reactive处理
  3. 什么时候用浅响应式呢?
    1. 一般情况下使用ref和reactive即可
    2. 如果有一个对象数据, 结构比较深, 但变化时只是外层属性变化 ===> shallowReactive
    3. 如果有一个对象数据, 后面会产生新的对象来替换 ===> shallowRef
*/
export default defineComponent ({
  'name':'App',
  setup() {
    const m1 = reactive({ // 深度劫持（深监视）--- 深度响应式
      name: '张三',
      age: 18,
      car: {
        name: '奥迪'
      }
    })
    const m2 = shallowReactive({ // 浅劫持（浅监视）--- 浅响应式
      name: '李四',
      age: 18,
      car: {
        name: '奔驰'
      }
    })
    const m3 = ref({ // 深度劫持（深监视）--- 深度响应式 
      name: '王五',
      age: 18,
      car: {
        name: '宝马'
      }
    })
    const m4 = shallowRef({
      name: '赵六',
      age: 18,
      car: {
        name: '本田'
      }
    })
    
    const update1 = () => {
      // m1.name += '=='
      m1.car.name += '=='
    }
    const update2 = () => {
      // m2.name += '=='
      m2.car.name += '=='
    }
    const update3 = () => {
      // m3.value.name += '=='
      m3.value.car.name += '=='
    }
    const update4 = () => {
      // m4.value.name += '=='
      m4.value.car.name += '=='
    }

    return {
      m1,m2,m3,m4,
      update1, update2, update3, update4
    }
  }
  
})
</script>
<style lang='stylus' scoped>

</style>
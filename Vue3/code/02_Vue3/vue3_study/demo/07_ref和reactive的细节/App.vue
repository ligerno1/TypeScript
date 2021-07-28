<template>
  <h2>reactive和ref的细节问题</h2>
  <p>m1: {{m1}}</p>
  <p>m2: {{m2}}</p>
  <p>m3: {{m3}}</p>
  <button @click="update">更新</button>
</template>
<script lang='ts'>
import { defineComponent, reactive, ref } from 'vue'


export default defineComponent ({
  'name':'App',
  setup () {
    /* reactive和ref的细节问题:
        1. 是Vue3的 composition API中2个最重要的响应式API(ref和reactive)
        2. ref用来处理基本类型数据, reactive用来处理对象(递归深度响应式)
        3. 如果用ref对象/数组, 内部会自动将对象/数组转换为reactive的代理对象
        4. ref内部: 通过给value属性添加getter/setter来实现对数据的劫持
        5. reactive内部: 通过使用Proxy来实现对对象内部所有数据的劫持, 并通过Reflect操作对象内部数据
        6. ref的数据操作: 在js中要.value, 在模板中不需要(内部解析模板时会自动添加.value)
    */
    const m1 = ref('周伯通')
    const m2 = reactive({name: '郭靖', wife: {name: '黄蓉'}})

    // 使用ref处理对象  ==> 对象会被自动reactive为proxy对象
    const m3 = ref({name: '杨过', wife: {name: '小龙女'}})
    console.log(m1, m2, m3)
    console.log(m3.value.wife) // 也是一个proxy对象

    function update() {
      m1.value += '--'
      m2.name += 1
      m2.wife.name += '++'

      m3.value = {name: '杨康', wife: {name: '穆念慈'}}
      m3.value.wife.name += '==' // reactive对对象进行了深度数据劫持
      console.log(m3.value.wife)
    }

    return {
      m1,
      m2,
      m3,
      update
    }
  }
})
</script>
<style lang='stylus' scoped>

</style>
<template>
  <h2>toRef</h2>
  <h3>state:{{state}}</h3>
  <h3>age:{{age}}</h3>
  <h3>money:{{money}}</h3>
  <hr>
  <button @click="update">更新数据</button>
  <hr>
  <Child :age="age" />
</template>
<script lang='ts'>
import { defineComponent, reactive, ref, toRef } from 'vue'
import Child from './components/Child.vue'
/* 
toRef:
  1. 为源响应式对象上的某个属性创建一个 ref对象, 二者内部操作的是同一个数据值, 更新时二者是同步的
  2. 区别ref: 拷贝了一份新的数据值单独操作, 更新时相互不影响
  3. 应用: 当要将 某个prop 的 ref 传递给复合函数时，toRef 很有用
*/
export default defineComponent ({
  'name':'App',
  components: {
    Child
  },
  setup() {
    const state = reactive({
      age: 8,
      money: 7
    })
    // 把响应式数据state对象中的某个属性age变成了ref对象
    const age = toRef(state, 'age')
    // 把响应式对象中的某个属性使用ref进行包装，变成了一个ref对象
    const money = ref(state.money)
    const update = () => {
      // state.age += 2 // age 和 state.age 同时更新
      age.value += 50 // age 和 state.age 同时更新
      // state.money += 3 // state.money 更新，money 没有更新
      // money.value += 3  // money 更新，state.money 没有更新
    }
    return {
      state,
      age,
      money,
      update
    }
  }
  
})
</script>
<style lang='stylus' scoped>

</style>
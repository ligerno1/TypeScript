<template>
  <h2>CustomRef</h2>
  <input type="text" v-model="keyword">
  <p>{{keyword}}</p>
</template>
<script lang='ts'>
import { customRef, defineComponent, ref } from 'vue'
/* 
customRef：
  1. 创建一个自定义的 ref，并对其依赖项跟踪和更新触发进行显式控制
  2. 需求: 使用 customRef 实现 debounce 的示例
*/


// 自定义hook防抖的函数
// value传入的数据，未知的数据类型用泛型，delay防抖的时间间隔，默认是200ms
function useDebounceRef<T>(value: T, delay = 200) {
  // 准备一个存储定时器的id的变量
  let timerId: number
  return customRef((track, trigger) => {
    return {
      get() { // 返回数据
        // 通知Vue追踪数据
        track()
        return value
      },
      set(newVal: T) {
        // 清理定时器
        clearTimeout(timerId)
        // 开启定时器
        timerId = setTimeout(() => {
          value = newVal
          // 通知Vue更新界面
          trigger()
        }, delay);
      }
    }
  })
}

export default defineComponent ({
  'name':'App',
  setup() {
    // const keyword = ref('abc')
    const keyword = useDebounceRef('abc', 500)
    return {
      keyword
    }
  }
  
})
</script>
<style lang='stylus' scoped>

</style>
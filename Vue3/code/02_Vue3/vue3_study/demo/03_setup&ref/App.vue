<template>
  <h2>setup和ref的基本使用</h2>
  <h3>/* 需求：页面打开有一个初始数值，点击按钮后，该数据按次递增 */</h3>
  <h3>{{count}}</h3>
  <button @click="update">更新数据</button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'App',
  /* 需求：页面打开有一个初始数值，点击按钮后，该数据按次递增 */
  // vue2 实现方式
  /* data() {
    return {
      count: 0
    }
  },
  methods: {
    update() {
      this.count++
    }
  } */
  // vue3 实现方式
  /* 
    setup: 
      新的option, 所有的组合API函数都在此使用, 只在初始化时执行一次函数如果返回对象, 对象中的属性或方法, 模板中可以直接使用
  */
  setup() { 
    /* 
      ref: 
        作用: 定义一个数据的响应式
        语法: const xxx = ref(initValue):
        创建一个包含响应式数据的引用(reference)对象
        js中操作数据: xxx.value
        模板中操作数据: 不需要.value
        一般用来定义一个基本类型的响应式数据
    
    */
    const count = ref(0)
    function update() {
      // this.count++  // 报错：count是一个reference对象,不能直接操作
      count.value++
    }
    return {
      count,
      update
    }
  }
});
</script>

<style lang="stylus">

</style>

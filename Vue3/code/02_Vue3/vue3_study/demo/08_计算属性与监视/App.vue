<template>
  <h2>计算属性和监视 computed and watch  </h2>
  <fieldset>
    <legend>姓名操作</legend>
    姓氏：<input type="text" placeholder="请输入姓氏" v-model="user.firstName" /> <br>
    名字：<input type="text" placeholder="请输入名字" v-model="user.lastName" /> <br>
  </fieldset>
  <fieldset>
    <legend>结果演示</legend>
    姓名<input type="text" placeholder="显示姓名" v-model="fullName1" />  <br>
    姓名<input type="text" placeholder="显示姓名" v-model="fullName2" />  <br>
    姓名<input type="text" placeholder="显示姓名" v-model="fullName3" />  <br>
  </fieldset>
</template>
<script lang='ts'>
import { computed, defineComponent, reactive, ref, watch, watchEffect } from 'vue'

/*
计算属性与监视
1. computed函数: 
  与computed配置功能一致
  只有getter
  有getter和setter
2. watch函数
  与watch配置功能一致
  监视指定的一个或多个响应式数据, 一旦数据变化, 就自动执行监视回调
  默认初始时不执行回调, 但可以通过配置immediate为true, 来指定初始时立即执行第一次
  通过配置deep为true, 来指定深度监视
3. watchEffect函数
  不用直接指定要监视的数据, 回调函数中使用的哪些响应式数据就监视哪些响应式数据
  默认初始时就会执行第一次, 从而可以收集需要监视的数据
  监视数据发生变化时回调
*/

export default defineComponent ({
  'name':'App',
  setup(props) {
    // 定义一个响应式对象
    const user = reactive({
      firstName: '李',
      lastName: '寻欢'
    }) 

    /* 
      computed计算属性：
        1. 通过计算属性的方式，实现第一个姓名的显示
        2. 计算属性的函数中，如果只传入一个回调函数，表示的是get
        3. 返回的是一个ref类型的对象
        4. 传入一个对象有2个回调函数get, set，表示 get 和 set。
    */
    // 第一个名字
    const fullName1 = computed(() => {
      return user.firstName + '_' + user.lastName
    })
    console.log(fullName1);

    // 第二个名字
    // 传入一个对象有2个回调函数get, set，表示 get 和 set。
    const fullName2 = computed({
      get() {
        return user.firstName + '_' + user.lastName
      },
      set(val: string) {
        const data = val.split('_')
        user.firstName = data[0]
        user.lastName = data[1]
      }
    })

    // 监视--监视指定的数据
    const fullName3 = ref('')
    // 监视1
    watch(user, ({firstName, lastName}) => {
      fullName3.value = firstName + '_' + lastName
    },{ // immediate：默认执行 deep：深度监视
      immediate: true,
      deep: true
    })

    // 监视2, watchEffect 不需要配置immediate，默认 immediate: true
    // watchEffect(() => {
    //   fullName3.value = user.firstName + '_' + user.lastName
    // })

    // 监视3，改变数据
    watchEffect(() => {
      const data = fullName3.value.split('_')
      user.firstName = data[0]
      user.lastName = data[1]
    })

    // 监视4，watch 可以监视多个数据，监视非响应数据
  /*   watch([user.firstName, user.lastName, fullName3], () => {
      // 这里的代码没有执行，fullName3是响应式数据，但user.firstName，user.lastName 不是响应式数据
      console.log('=====');
    }) */

    // 监视5，watch 可以监视多个数据
    watch([()=>user.firstName, ()=>user.lastName, fullName3], () => {
      // 这里的代码没有执行，fullName3是响应式数据，但user.firstName，user.lastName 不是响应式数据
      console.log('=====');
    })

    return  {
      user,
      fullName1,
      fullName2,
      fullName3
    }
  }
})
</script>
<style lang='stylus' scoped>

</style>
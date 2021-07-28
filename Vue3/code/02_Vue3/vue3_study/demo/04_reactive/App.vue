<template>
  <h2>reactive的使用</h2>
  <h3>需求：显示用户的相关信息，点击按钮，更新数据</h3>
  <div>姓名：{{user.name}}</div>
  <div>年龄：{{user.age}}</div>
  <div>性别：{{user.gender}}</div>
  <div>妻子：{{user.wife}}</div>
  <button @click="update">更新数据</button>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  name: 'App',
  /* 
    需求：显示用户的相关信息，点击按钮，更新数据
  */
  setup() {
    const USER_D = {
      name: 'Liger',
      age: '30',
      gender: 'Man',
      count: 0,
      wife: {
        name: '小富婆',
        age: '26',
        cars: ['法拉利', '保时捷', '兰博基尼']
      }
    }
    /* 
      reactive:
        作用: 定义多个数据的响应式
        const proxy = reactive(obj): 接收一个普通对象然后返回该普通对象的响应式代理器对象
        响应式转换是“深层的”：会影响对象内部所有嵌套的属性
        内部基于 ES6 的 Proxy 实现，通过代理对象操作源对象内部数据都是响应式的
    */
    const user = reactive<any>(USER_D)

    const update = () => {
      user.count += 1
      user.name = 'Liger_' + user.count
      user.age = '30_' + user.count
      user.gender = 'Man_' + user.count
      // 想要动态渲染，只能操作代理对象user
      if (user.count % 2 === 0) {
        delete user.age // 如果报错： The operand of a 'delete' operator must be optional. 要给代理对象加个类型注解 ，例如 reactive<any>
      } else {
        user.age = '30_' + user.count
      }

      // 修改对象数组属性-深度响应
      user.wife.cars[0] = '阿斯顿马丁'
      // 修改对象数组长度-深度相应
      user.wife.cars[3] = '法拉利'
    }

    return {
      user,
      update
    }
  }
});
</script>

<style lang="stylus">

</style>

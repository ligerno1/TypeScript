<template>
  <h2>自定义hook函数操作</h2>
  <h2>x:{{x}}, y:{{y}}</h2>
  <h3 v-if="loading">正在加载中...</h3>
  <h3 v-else-if="errorMsg">错误信息：{{errorMsg}}</h3>
  <ul v-else-if="urlIndex === 0">
    <li>id:{{data.id}}</li>
    <li>address:{{data.address}}</li>
    <li>name:{{data.name}}</li>
  </ul>
  <ul v-else-if="urlIndex === 1" v-for="item in data" :key="item.id">
    <li>id:{{item.id}}</li>
    <li>title:{{item.title}}</li>
    <li>price:{{item.price}}</li>
  </ul>
</template>
<script lang='ts'>
import { defineComponent, reactive, ref, watch } from 'vue'
// 引入自定义文件
import useMousePosition from './hooks/useMousePosition'
import useRequest from './hooks/useRequest'

interface AddressData {
  id: number;
  address: string;
  name: string;
}

interface ProductsData {
  id: number;
  title: string;
  price: number;
}

export default defineComponent ({
  'name':'App',
  /* 
    需求1：用户在页面中点击页面，把点击的位置的横纵坐标收集起来并展示出来
  */
  setup(props) {
    const {x, y} = useMousePosition()
    const urlIndex = ref(1) // 0:对象数据 1:数组数据
    // 发送请求
    const urls = reactive([
      'data/address.json', // 对象数据
      'data/products.json'  // 数组数据
    ])

    const {loading, data, errorMsg} = useRequest<ProductsData[]>(urls[urlIndex.value])

    // 监视
    watch(data, () => {
      if (data.value) {
        console.log('data.value.length==', data.value.length);
      }
    })

    return {
      x,y,
      urlIndex,
      loading, data, errorMsg
    }
  }
})
</script>
<style lang='stylus' scoped>

</style>
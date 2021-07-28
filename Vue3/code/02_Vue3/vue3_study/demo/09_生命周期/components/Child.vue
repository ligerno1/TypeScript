<template>
  <h2>Child子级组件</h2>
  <div>{{ msg }}</div>
  <button @click="update">更新数据</button>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref } from "vue";
/* 
与 2.x 版本生命周期相对应的组合式 API, 组合式API比生命周期钩子函数 先执行。
    beforeCreate -> 使用 setup()
    created -> 使用 setup()
    beforeMount -> onBeforeMount
    mounted -> onMounted
    beforeUpdate -> onBeforeUpdate
    updated -> onUpdated
    beforeDestroy -> onBeforeUnmount
    destroyed -> onUnmounted
    errorCaptured -> onErrorCaptured
*/
export default defineComponent({
  name: "Child",
  // vue2 的生命周期
  beforeCreate() {
    console.log("vue2 beforeCreate!");
  },
  created() {
    console.log("vue2 created!");
  },
  beforeMount() {
    console.log("vue2 beforeMount!");
  },
  mounted() {
    console.log("vue2 mounted!");
  },
  beforeUpdate() {
    console.log("vue2 beforeUpdate!");
  },
  updated() {
    console.log("vue2 updated!");
  },
  /*
    vue2 中的 beforeDestroy 和 destroyed 在 vue3 中替换成了 beforeUnmount 和 unmounted。
    beforeDestroy() {
        console.log('vue2 beforeDestroy!');
    },
    destroyed() {
        console.log('vue2 destroyed!');
    },
  */
  beforeUnmount() {
    console.log("vue3 beforeUnmount!");
  },
  unmounted() {
    console.log("vue3 unmounted!");
  },
  setup() {
    console.log("vue3 setup!");
    
    
    const msg = ref("S2");
    const update = () => {
      msg.value += "3";
    };


    onBeforeMount(() => {
      console.log("vue3 onBeforeMount!");
    });

    onMounted(() => {
      console.log("vue3 onMounted!");
    });

    onBeforeUpdate(() => {
      console.log("vue3 onBeforeUpdate!");
    });

    onUpdated(() => {
      console.log("vue3 onUpdated!");
    });

    onBeforeUnmount(() => {
      console.log("vue3 onBeforeUnmount!");
    });

    onUnmounted(() => {
      console.log("vue3 onUnmounted!");
    });

    return {
      msg,
      update,
    };
  },
});
</script>


<style>
</style>
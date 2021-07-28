<template>
  <div>好好学习，天天向上</div>
  <div>{{msg}}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  setup() { 
    let msg = 'Vue3 启动！';
    return {msg}
  }
});
</script>

<style lang="stylus">

</style>

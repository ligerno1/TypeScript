<template>
  <h2>Child子级组件</h2>
  <h3>{{msg}}</h3>
  <button @click="test">分发事件</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Child',
    // 接收传递过来的参数
    props: ['msg'],
    /* 
    setup 细节问题
        1）setup的执行时机
            1. setup在beforeCreate之前执行，且只执行一次。由此推断出组件还没创建，实例对象this无法使用
            2. this是undefined，无法通过this访问data/computed/methods/props中的相关内容
            3. 其实所有的composition API相关回调函数中也无法访问
        2）setup的返回值
            1. 一般都返回一个对象: 为模板提供数据, 也就是模板中可以直接使用此对象中的所有属性/方法
            2. 返回对象中的属性会与data函数返回对象的属性合并成为组件对象的属性
            3. 返回对象中的方法会与methods中的方法合并成为组件对象的方法
            4. 如果有重名, setup优先
            注意:
            一般不要混合使用: methods中可以访问setup提供的属性和方法, 但在setup方法中不能访问data和methods
            setup不能是一个async函数: 因为返回值不再是return的对象, 而是promise, 模板看不到return对象中的属性数据   
        3）setup的参数
            1. setup(props, context) / setup(props, {attrs, slots, emit})
            2. props: 包含props配置声明且传入了的所有属性的对象
            3. attrs: 包含没有在props配置中声明的属性的对象, 相当于 this.$attrs
            4. slots: 包含所有传入的插槽内容的对象, 相当于 this.$slots
            5. emit: 用来分发自定义事件的函数, 相当于 this.$emit
    */
    // 数据初始化的生命周期回调
    beforeCreate() {
        console.log('beforeCreate!');
    },
    setup(props, {attrs, emit, slots}) {
        console.log('setup!')

        /* 
        prop参数 
            1. 是一个对象，里面有父级组件向子级组件传递的数据，并且是在子级组件中使用props接收到的所有的属性
            2. 包含props配置声明且传入了的所有属性的对象
        context参数 context = {attrs, emit, slots}
            1. 是一个对象，里面有attrs对象（获取当前组件标签上的所有的属性的对象，但是该属性是在props中没有声明接收的所有的属性的对象），emit方法（分发事件），slots对象（插槽）
        */
        console.log(props);
        
        function test() {
            emit('test', 'are you kidding?')
        }


        return {
            // setup 中一般返回一个对象，对象中的属性和方法都可以在html模板中直接使用
            test
        }

    },
    // 界面渲染完毕
    mounted() {
        console.log('mounted!')
        console.log(this);
        
    }
})
</script>


<style>

</style>
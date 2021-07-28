<template>
    <h2>Child子组件</h2>
    <h3>age:{{age}}</h3>
    <h3>length:{{length}}</h3>
</template>
<script lang='ts'>
import { defineComponent, toRef, Ref, computed } from 'vue'
function useGetLength(val:Ref) {
    return computed(() => {
        return val.value.toString().length
    })
}
export default defineComponent ({
    'name':'App',
    props: {
        age: {
            type: Number,
            required: true 
        }
    },
    setup(props) {
        const length = useGetLength(toRef(props, 'age'))
        return {
            length
        }
    }
    
})
</script>
<style lang='stylus' scoped>

</style>
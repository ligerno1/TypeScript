import { onBeforeUnmount, onMounted, ref } from 'vue'

export default function() {
    const x = ref(-1)
    const y = ref(-1)
    
    // 点击时间的回调函数
    const clickHandler = (e:any) => {
      x.value = e.pageX
      y.value = e.pageY
    }
    // 页面加载完毕后，再进行点击的操作

    // 页面加载完毕的生命周期
    onMounted(() => { 
      // 挂载点击事件
      window.addEventListener('click', clickHandler)
    })
    // 页面卸载之前的生命周期
    onBeforeUnmount(() => {
      // 移除点击事件
      window.removeEventListener('click', clickHandler)
    })

    return {
        x,
        y
    }
}
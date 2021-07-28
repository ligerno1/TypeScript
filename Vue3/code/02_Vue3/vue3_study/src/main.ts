/* 
程序的主入口文件，因为使用的是ts开发，所以是 main.ts 反之main.js 
*/
import { createApp } from 'vue'  // 引入createApp函数，创建对应的应用，产生应用的实例对象
import App from './App.vue'  // 引入App组件（所有组件的父级组件）


createApp(App).mount('#app') // 创建App应用返回对应的实例对象，调用mount方法进行挂载

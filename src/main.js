import Vue from 'vue'
import App from './App.vue'
import router from './router'
//解决移动端单击延迟问题
import fastClick from 'fastclick'


//css样式重置文件
import './assets/css/reset.css'
//解决移动端1px问题
import './assets/css/border.css'


Vue.config.productionTip = false
fastClick.attach(document.body)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

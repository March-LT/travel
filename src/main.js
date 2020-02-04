import Vue from 'vue'
import App from './App.vue'
import router from './router'
//解决移动端单击延迟问题
import fastClick from 'fastclick'
//使用轮播插件
import VueAwesomeSwiper from 'vue-awesome-swiper'


//css样式重置文件
import './assets/css/reset.css'
//解决移动端1px问题
import './assets/css/border.css'
//字体图标
import './assets/css/iconfont.css'
//轮播css
import 'swiper/dist/css/swiper.css'


Vue.config.productionTip = false
fastClick.attach(document.body)

//使用插件
Vue.use(
  //轮播插件
  VueAwesomeSwiper
)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

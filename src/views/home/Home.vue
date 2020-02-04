<template>
  <div class="home">
    <h1>我是Home组件</h1>
    <home-header></home-header>
    <home-swiper></home-swiper>
  </div>
</template>

<script>
import HomeHeader from './components/HomeHeader'
import HomeSwiper from './components/HomeSwiper'

export default {
  name: "Home",
  components:{
    HomeHeader,
    HomeSwiper
  },
  data(){
    return {
    }
  },
}
</script>
<style scoped>
</style>
<template>
  <div class="home">
    <h1>我是Home组件</h1>
    <home-header></home-header>
  </div>
</template>

<script>
import HomeHeader from './components/HomeHeader'
export default {
  name: "Home",
  components:{
    HomeHeader
  },
  data(){
    return {
    }
  },
}
</script>
<style scoped>
</style>
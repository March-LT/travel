<template>
  <div class="header">
    <div class="header-left">
      <i class="iconfont">&#xe624;</i>
    </div>
    <div class="header-input">
      <i class="iconfont">&#xe632;</i>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      城市
      <i class="iconfont">&#xe64a;</i>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeHeader",
  components:{},
  data(){
    return {
    }
  },
}
</script>
<style lang="stylus" scoped>
  @import '~@/assets/css/varibles.styl';
  .header
    display flex
    height .86rem
    line-height .86rem
    background-color $bgColor
    color #fff
    .header-left
      width .64rem
      float left
      i
        display block
        text-align center
        font-size .4rem
    .header-input
      flex 1
      height .64rem
      line-height .64rem
      margin-top .12rem
      margin-left .2rem
      padding-left .2rem
      background-color #fff
      border-radius .1rem
      color: #ccc
    .header-right
      width 1.24rem
      float right 
      text-align center
      i 
        font-size .24rem
        margin-left -.04rem
</style>
<template>
  <div class="wrapper">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="item in list" :key="item.id">
        <img :src="item.url" class="swiper-img"/>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  components: {},
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop: true
      },
      list: [
        {
          id: "0001",
          url: "https://imgs.qunarzz.com/vc/6d/9f/35/b8ad5468f73fd60ec0ced086f6.jpg_92.jpg"
        },
        {
          id: "0002",
          url: "https://imgs.qunarzz.com/vc/ad/7c/fe/037d1a400372ff57b0030d1d1c.jpg_92.jpg"
        },
        {
          id: "0003",
          url: "https://imgs.qunarzz.com/vc/24/36/10/3fc94d042ae62de380581d4c98.jpg_92.jpg"
        },
        {
          id: "0004",
          url: "https://imgs.qunarzz.com/vc/44/e9/86/95bc36c9e1c06ebd68bdfe222e.jpg_92.jpg"
        }
      ]
    };
  }
};
</script>
<style lang="stylus" scoped>
  //样式穿透
  .wrapper >>> .swiper-pagination-bullet-active
    background-color #f00
  .wrapper
    overflow hidden
    width 100%
    height 0
    padding-bottom 31.25%
    background-color #eee
    .swiper-img
      width 100%

</style>
<template>
  <div class="container">
    <transition name="slide-fade" mode="out-in">
      <left-slide v-show="isShow" />
    </transition>
    <div class="main">
      <header-top class="header" :isShow = 'isShow' @toggleSide = 'showSide($event)'></header-top>
      <div class="content"></div>
    </div>
    <svg-sprite></svg-sprite>
  </div>
</template>

<script>
  import headerTop from 'components/HeaderTop'
  import SvgSprite from 'components/logo/SvgSprite'
  import LeftSlide from 'components/LeftSlide'

  export default {
    name: 'home',
    data () {
      return {
        isShow:true
      }
    },
    components: {
      headerTop,
      SvgSprite,
      LeftSlide
    },
    methods: {
      showSide (isShow) {        // 侧边栏展开函数
        this.isShow = isShow
      }
    }
  }
</script>

<style lang="scss">
  .slide-fade-enter-active {
    transition: all 0.38s ease;
  }
  .slide-fade-leave-active {
    transition: all 0.38s ease;
  }
  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(-200px);
    opacity: 0;
    transition: all 0.38s;
  }


</style>

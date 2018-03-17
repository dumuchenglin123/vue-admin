<template>
  <div class="container">
    <transition name="slide-fade" mode="out-in">
      <left-slide v-show="isShow" />
    </transition>
    <div class="main" :class="{ 'expand': !isShow }">
      <header-top class="header" :isShow = 'isShow' @toggleSide = 'showSide($event)'></header-top>
      <transition name="fade" mode="out-in">
        <router-view class="content" />
      </transition>
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
    transition: all 1.2s ease;
  }
  .slide-fade-leave-active {
    transition: all 1.2s ease;
  }
  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(-200px);
    opacity: 0;
    transition: all 1.2s;
  }

  .main {
      transition: all 1.2s;
    &.expand {
      left: 0;
    }
  }

</style>

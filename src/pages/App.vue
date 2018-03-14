<template>
  <div class="container">
    <transition name="slide">
      <div class="left-slide" v-show="isShow">dsfsafda</div>
    </transition>
    <div class="main">
      <header-top class="header" :isShow = 'isShow' @toggleSide = 'showSide($event)'></header-top>
      <!-- <div class="content"></div> -->
    </div>
  </div>
</template>

<script>
  import headerTop from 'components/HeaderTop'
  export default {
    name: 'home',
    data () {
      return {
        isShow:true
      }
    },
    components: {
      headerTop
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
    transition: all 13s ease;
  }
  .slide-fade-leave-active {
    transition: all 18s ease;
  }
  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(-10px);
    opacity: 1;
    transition: all 18s;
  }

  .container .header {
    background: tomato;
  }
  .container .main {
    background: transparent;
    // transition: all 8s ease;
  }

</style>

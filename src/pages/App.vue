<template>
  <div class="container">
    <left-slide v-show="sideBarShow" />
    <div class="main-container" :class="{ 'hideSidebar': !sideBarShow }">
      <navbar></navbar>
      <tabs-view></tabs-view>
      <app-main></app-main>
    </div>
    <svg-sprite></svg-sprite>
  </div>
</template>

<script>
  import Navbar from 'components/NavBar'
  import SvgSprite from 'components/logo/SvgSprite'
  import LeftSlide from 'components/LeftSlide'
  import TabsView from 'components/TabsView'
  import AppMain from 'components/AppMain'
  import {mapGetters} from 'vuex'

  export default {
    name: 'home',
    data () {
      return {
        isShow:true
      }
    },
    components: {
      SvgSprite,
      LeftSlide,
      Navbar,
      TabsView,
      AppMain
    },
    methods: {
      showSide (isShow) {        // 侧边栏展开函数
        this.isShow = isShow
      }
    },
    computed: {
      ...mapGetters(['sideBarShow']),
    },
    methods: {

    }
  }
</script>

<style lang="scss">

  .main-container {
      transition: all 0.9s;
    &.hideSidebar {
      left: 0;
    }
  }

</style>

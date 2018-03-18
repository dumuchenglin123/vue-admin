<template>
  <div class="container">
    <left-slide v-show="sideBarShow" />
    <div class="main-container" :class="{ 'hideSidebar': !sideBarShow }">
      <navbar class="header" :isShow = 'sideBarShow' @toggleSide = 'showSide($event)'></navbar>
      <app-main></app-main>
    </div>
    <svg-sprite></svg-sprite>
  </div>
</template>

<script>
  import Navbar from 'components/NavBar'
  import SvgSprite from 'components/logo/SvgSprite'
  import LeftSlide from 'components/LeftSlide'
  import AppMain from 'components/AppMain'
  import {mapState} from 'vuex'
  
  export default {
    name: 'home',
    data () {
      return {
        isShow:true
      }
    },
    components: {
      Navbar,
      SvgSprite,
      LeftSlide,
      AppMain
    },
    methods: {
      showSide (isShow) {        // 侧边栏展开函数
        console.log(this,6666)
        this.isShow = isShow
      }
    },
    computed: {
      ...mapState({
        sideBarShow: state => state.app.sideBarShow      
      })
      }
  }
</script>

<style lang="scss">

  .main-container {
      transition: all 1.2s;
    &.hideSidebar {
      left: 0;
    }
  }

</style>

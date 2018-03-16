<template>
  <section class="body-wrap">
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss" type="text/scss" rel="stylesheet/scss">
@import 'assets/scss/components/base';
@import 'assets/scss/components/layout';
@import "assets/iconfont";

.body-wrap {
  height: 100%;
}

.fade-enter-active,
  .fade-leave-active {
    transition: all .2s ease;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }
</style>

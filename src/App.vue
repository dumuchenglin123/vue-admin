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

<style lang="scss">
@import 'styles/base';
@import 'styles/layout';
@import "styles/transition";
@import "assets/iconfont";


</style>

<template>
  <div class="et-header-logo">
    <svg class="et-header-logo-icon">
      <use xlink:href='#icon-logo'></use>
    </svg>
    <span class="et-header-logo-name">ETFE</span>
  </div>
</template>

<script>
export default {
  name: 'HeaderNavLogo',
}
</script>

<style lang="scss">
.et-header-logo {
  font-size: 24px;
  user-select: none;
  width: 130px;
  color: #fff;
  height: 100%;
  cursor: pointer;

  .et-header-logo-icon {
    vertical-align: middle;
    width: 36px;
    height: 36px;
    color: #00defa;
  }
  .et-header-logo-name {
    vertical-align: middle;
    font-family: "Comic Sans MS", "Adele", "PingFang SC";
  }
}
</style>

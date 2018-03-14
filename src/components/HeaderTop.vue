<template>
  <section class="header">
    <div class="navicon-con">
      <a class="hamburger" :class="{'is-active':hamActive}" @click="actived()">
        <i class="iconfont">&#xe604;</i>
      </a>
    </div>
    <div class="header-middle">
      <a class="header-title ">
        {{ title }}
      </a>
    </div>
    <div class="header-right">
      <a class="user">用户</a>
      <div class="userimg">sfddsf</div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeaderTop",
  data () {
    return {
      hamActive: true,
      title: '后台管理系统'
    }
  },
  props: ['isShow'],
  methods: {
    actived () {
      this.hamActive = !this.hamActive;
      this.$emit("toggleSide", this.hamActive)
    }
  }
};
</script>

<style lang="scss" type="text/scss" rel="stylesheet/scss">
.header {
  position: relative;
  display: flex;
  .header-middle {
    text-align: center;
    .header-title {
      display: inline-block;
      height: 100%;
      line-height: 50px;
    }
  }
}
.navicon-con {
  // display: inline-block;
  margin-left: 10px;
  height: 100%;
  line-height: 50px;

  .hamburger {
    display: inline-block;
    cursor: pointer;
    transform: rotate(90deg);
    transition: 0.38s;
    transform-origin: 50% 50%;
  }
  .is-active {
    transform: rotate(0deg);
  }
}

.header-middle {
  // float: left;
  flex: 1;
  display: inline-block;
}

.header-right {
  // float: right;
  margin-right: 20px;
  height: 100%;
  .user {
    height: 100%;
    line-height: 50px;
  }
  .userimg {
    display: inline-block;
  }
}

@font-face {
  font-family: "iconfont";
  src: url("http://at.alicdn.com/t/font_590414_hjrwp4xdnohwipb9.eot?t=1521006705822"); /* IE9*/
  src: url("http://at.alicdn.com/t/font_590414_hjrwp4xdnohwipb9.eot?t=1521006705822#iefix")
      format("embedded-opentype"),
    url("http://data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAAVEAAsAAAAAB+AAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADMAAABCsP6z7U9TLzIAAAE8AAAARAAAAFZW7kgTY21hcAAAAYAAAABlAAABnM7gahJnbHlmAAAB6AAAAWAAAAGgeX2n7mhlYWQAAANIAAAALwAAADYQvPbYaGhlYQAAA3gAAAAcAAAAJAfeA4VobXR4AAADlAAAABAAAAAQD+kAAGxvY2EAAAOkAAAACgAAAAoBRgCQbWF4cAAAA7AAAAAfAAAAIAETAF1uYW1lAAAD0AAAAUUAAAJtPlT+fXBvc3QAAAUYAAAAKgAAAESD5wukeJxjYGRgYOBikGPQYWB0cfMJYeBgYGGAAJAMY05meiJQDMoDyrGAaQ4gZoOIAgCKIwNPAHicY2Bk/sU4gYGVgYOpk+kMAwNDP4RmfM1gxMjBwMDEwMrMgBUEpLmmMDgwVDxTZ27438AQw9zA0AAUZgTJAQAm5wyVeJzFkMENwCAIRT9CG9N0Dy89Nh2op47gxKxhAb04gd88hJ+fYASwAWDjMgSgDwTXay6FzzjCFzw2ZzvJ7qqipbWpc1EkcnTsSdqxTLRu9awz6j0m/+86sCeqdNzX0kH6AWZDEB8AAAB4nG2QvU7CYBSGz/k++sNfkf5T4CttgWqQJtaKgxEYXDQOJk4ODq5GXVlMxMHEwcHBKzAm3gSDk/EG3CE6egEOpFiNmph48r5PnuUsL3AAswkdURMUmIcl2IAdAORb6Eqkio4fBaSFmsNphipR3/MdwXMDuo6Gy6t62ImaBi/wBZSQ4bITdvyA+LgSdckahnoVsVS2duVGRabXmDF9dhFvkVvUbK9S6LbjzcWeGtYUcZCT5ZIsX4k8x4mEpAoSHht6mktn+PiOK1jayF4gNuZKvrW9l6+V5YPL6KTaMNKIwyEq5Zp03ytaxSSnlq7IJWEuL5pW3qurOHjNmkqu2nyB5OgXHsgkMQGyAIqjOcXv9unZ9PynZNyfQW8GfUgl+7zTN/KcvObAhDpAGt1m1Fl1GKq898cDjDrJCrrKC3gYjw3GDHr0yenN/4553GcBQ0wQP/7aE7K2bbcZwgeBlEdbeJxjYGRgYADix9X/9sXz23xl4GZhAIFr524WIuj/D1kYmCWAXA4GJpAoAHz0DLAAeJxjYGRgYG7438AQw8IAAkCSkQEVsAAARwoCbQQAAAAD6QAABAAAAAQAAAAAAAAAAHYAkADQAAB4nGNgZGBgYGEIZGBlAAEmIOYCQgaG/2A+AwAREgFxAHicZY9NTsMwEIVf+gekEqqoYIfkBWIBKP0Rq25YVGr3XXTfpk6bKokjx63UA3AejsAJOALcgDvwSCebNpbH37x5Y08A3OAHHo7fLfeRPVwyO3INF7gXrlN/EG6QX4SbaONVuEX9TdjHM6bCbXRheYPXuGL2hHdhDx18CNdwjU/hOvUv4Qb5W7iJO/wKt9Dx6sI+5l5XuI1HL/bHVi+cXqnlQcWhySKTOb+CmV7vkoWt0uqca1vEJlODoF9JU51pW91T7NdD5yIVWZOqCas6SYzKrdnq0AUb5/JRrxeJHoQm5Vhj/rbGAo5xBYUlDowxQhhkiMro6DtVZvSvsUPCXntWPc3ndFsU1P9zhQEC9M9cU7qy0nk6T4E9XxtSdXQrbsuelDSRXs1JErJCXta2VELqATZlV44RelzRiT8oZ0j/AAlabsgAAAB4nGNgYoAALgbsgIWRiZGZkYWRlYGxgjMjMS8pMR+IuOAsQwYGAHCTCBYAAA==")
      format("woff"),
    url("http://at.alicdn.com/t/font_590414_hjrwp4xdnohwipb9.ttf?t=1521006705822")
      format("truetype"),
    url("http://at.alicdn.com/t/font_590414_hjrwp4xdnohwipb9.svg?t=1521006705822#iconfont")
      format("svg"); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 20px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

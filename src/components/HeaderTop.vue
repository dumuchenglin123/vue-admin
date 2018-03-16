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
      <a class="user">{{ user }}</a>

      <el-dropdown trigger="click">
        <span class="el-dropdown-link ">
          <div class="userimg"></div>
        </span>
        <el-dropdown-menu slot="dropdown" class="dropdown-menu">
          <el-dropdown-item>个人信息</el-dropdown-item>
          <el-dropdown-item>设置</el-dropdown-item>
          <el-dropdown-item>安全退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeaderTop",
  data() {
    return {
      hamActive: true,
      title: "后台管理系统",
      user: "测试"
    };
  },
  props: ["isShow"],
  methods: {
    actived() {
      this.hamActive = !this.hamActive;
      this.$emit("toggleSide", this.hamActive);
    }
  }
};
</script>

<style lang="scss" type="text/scss" rel="stylesheet/scss">
.header {
  position: relative;
  display: flex;
  color: #6f6f6f;
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
    padding: 10px;
    height: 100%;
    line-height: 50px;
  }
  .userimg {
    display: inline-block;
    height: 40px;
    width: 40px;
    cursor: pointer;
    border-radius: 50%;
    vertical-align: middle;
    border: 1px solid #ddd;
  }
}

.dropdown-menu {
  top: 40px !important;
  width: 200px;

  .popper__arrow {
    display: none;
  }
}

</style>

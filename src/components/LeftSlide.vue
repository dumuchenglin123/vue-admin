<template>
  <div class="left-slide">
    <div class="logo">
      <nav-logo />
    </div>
    <div class="side-menu">
      <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="transparent"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-submenu index="1-4-2">
            <template slot="title">选项5</template>
            <el-menu-item-group>
              <template slot="title">分组五</template>
              <el-menu-item index="1-4-3">选项1</el-menu-item>
              <el-menu-item index="1-4-4">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
    </div>
  </div>
</template>

<script>
import NavLogo from "components/logo/NavLogo";

export default {
  name: "LeftSlide",
  components: {
    NavLogo
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="scss">
.el-menu-vertical-demo {
  height: 100%;
  width: 212px;
  border: none;
}
.left-slide {
  display: flex;
  flex-direction: column;
  color: #fff;
  .logo {
    height: 50px;
    padding: 0 35px;
  }
  .side-menu {
    flex: 1;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 8px;
      height: 8px;
      background-color: transparent;
    }
    /*定义滚动条的轨道，内阴影及圆角*/

    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      border-radius: 10px;
      background-color:transparent;
    }
    /*定义滑块，内阴影及圆角*/

    &::-webkit-scrollbar-thumb {
      /*width: 10px;*/
      height: 8px;
      border-radius: 10px;
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background-color: rgba(228, 227, 227, 0.4)
    }
    /*滑块效果*/

    &::-webkit-scrollbar-thumb:hover {
      border-radius: 5px;
      -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
      background: rgb(207, 207, 207);
    }
  }
}
</style>

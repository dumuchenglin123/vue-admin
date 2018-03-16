<template>
  <div class="left-slide">
    <div class="logo">
      <nav-logo />
    </div>
    <div class="side-menu">
      <el-menu
      router
      default-active="$route.path"
      class="el-menu-vertical-demo"

      background-color="transparent"
      text-color="#fff"
      active-text-color="#ffd04b">
      <div v-for="(item, index) in nav_menu_data" :key="index">
        <el-menu-item class="menu-list"
        v-if="typeof item.child === 'undefined' "
        :index="item.path">
          <i class="iconfont" v-html="item.unicode"></i>
          <span class="nav-text" slot="title">{{ item.title }}</span>
        </el-menu-item>
        <el-submenu
          :index="item.path"
          v-else>
          <template slot="title" class="menu-list">
            <i class="iconfont" v-html="item.unicode"></i>
            <span class="nav-text" slot="title" >{{ item.title }}</span>
          </template>
          <el-menu-item class="menu-list"
            v-for="(sub_item, sub_index) in item.child"
            :index="sub_item.path"
            :key="sub_index">
            <span class="nav-text" v-text="sub_item.title"></span>
          </el-menu-item>
        </el-submenu>
      </div>
    </el-menu>
    </div>
  </div>
</template>

<script>
import NavLogo from "components/logo/NavLogo";

export default {
  name: "LeftSlide",
  data() {
    return {
      nav_menu_data: [
        {
          title: "用户管理",
          path: "user",
          unicode: "&#xe66c;"
        },
        {
          title: "权限配置",
          path: "authority",
          unicode: "&#xe61a;",
          child: [
            {
              title: "角色管理",
              path: "/table/base"
            },
            {
              title: "角色权限分配",
              path: "/table/sort"
            },
            {
              title: "用户角色分配",
              path: "/table/sort"
            }
          ]
        },
        {
          title: "人员管理",
          path: "peopleManage",
          unicode: "&#xe66c;",
        },
        {
          title: "文件管理",
          path: "filesManage",
          unicode: "&#xe615;"
        },
        {
          title: "菜单管理",
          path: "menuManage",
          unicode: "&#xe7c0;"
        },
        {
          title: "日志管理",
          path: "logsManage",
          unicode: "&#xe62f;"
        }
      ]
    };
  },
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

  .nav-text {
    margin-left: 15px;
  }
}
.left-slide {
  display: flex;
  flex-direction: column;
  color: #fff;
  .logo {
    height: 30px;
    padding: 10px 35px;
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
      background-color: transparent;
    }
    /*定义滑块，内阴影及圆角*/

    &::-webkit-scrollbar-thumb {
      /*width: 10px;*/
      height: 8px;
      border-radius: 10px;
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background-color: rgba(228, 227, 227, 0.4);
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

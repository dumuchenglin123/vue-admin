<template>
  <transition name="slide-fade" mode="out-in">
    <div class="left-slide">
      <div class="logo">
        <nav-logo />
      </div>
      <div class="side-menu">
        <el-menu
        router
        :default-active="$route.path"
        class="nav-menu"
        background-color="#39435c"
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
  </transition>

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
            path: "/admin/user",
            unicode: "&#xe66c;"
          },
          {
            title: "权限配置",
            path: "/admin/authority",
            unicode: "&#xe61a;",
            child: [
              {
                title: "角色管理",
                path: "/admin/authority/test1"
              },
              {
                title: "角色权限分配",
                path: "/admin/authority/test2"
              },
              {
                title: "用户角色分配",
                path: "/admin/authority/test3"
              }
            ]
          },
          {
            title: "人员管理",
            path: "/admin/peopleManage",
            unicode: "&#xe66c;"
          },
          {
            title: "文件管理",
            path: "/admin/filesManage",
            unicode: "&#xe615;"
          },
          {
            title: "菜单管理",
            path: "/admin/menuManage",
            unicode: "&#xe7c0;"
          },
          {
            title: "日志管理",
            path: "/admin/logsManage",
            unicode: "&#xe62f;"
          },{
            title: "系统管理",
            path: "/admin/sysManage",
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
.nav-menu {
  height: 100%;
  width: 220px;
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
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>

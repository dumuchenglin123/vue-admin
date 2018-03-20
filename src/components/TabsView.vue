<template>
  <section class="tabs-container">
    <div class="tabs-wrapper" ref="tabsWrapper" @wheel.prevent="handleScroll">
      <ul class="tabsList" ref="tabsList" :style="{left: left + 'px'}">
        <router-link class="tab-item" v-for=" tab in tabViews" :class=" isActive(tab)? 'item-select':'' " :key="tab.path" :to="tab.path" tag="li" @click="isActive" @contextmenu.prevent.native="showMenu(tab, $event)"> {{ tab.title }}
          <i class="el-icon-close" @click.prevent.stop = 'closeSelectedTab(tab)'></i>
        </router-link>
      </ul>
    </div>
    <ul class="tabs-menu" v-show="visiable" :style="{left: menuLeft + 'px', top: top + 'px'}">
      <li class="menu-item">关闭自己</li>
      <li class="menu-item">关闭其他</li>
      <li class="menu-item">关闭所有</li>
    </ul>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "TabsView",
  data() {
    return {
      left: 0,
      menuLeft: 0,
      top: 0,
      visiable: false
    };
  },
  watch: {
    $route() {
      const route = this.generateRoute(this.$route);
      this.addVisitedViews(route);
    }
  },
  computed: {
    ...mapGetters(["tabViews"])
  },
  methods: {
    ...mapActions(["addVisitedViews"]),
    handleScroll(evt) {
      const eventDelta = evt.wheelDelta;
      const $containerWidth = this.$refs.tabsWrapper.offsetWidth;
      const $tabsListWidth = this.$refs.tabsList.offsetWidth;
      this.left += eventDelta;
      if (this.left > 0) {
        this.left = 0;
      } else {
        // 页签总宽度大于外部容器宽度时，left值重新计算
        if ($tabsListWidth > $containerWidth) {
          if ($tabsListWidth + this.left < $containerWidth) {
            this.left = $containerWidth - $tabsListWidth;
          }
          // 小于总宽度时 left为0
        } else {
          this.left = 0;
        }
      }
    },
    isActive(tab) {
      return tab.path === this.$route.path;
    },
    generateRoute(route) {
      /* if (route.name) {
        return route;
      } */
      return route;
    },
    closeSelectedTab(tab) {
      this.$store.dispatch("delVisitedViews", tab).then(views => {
        if (this.isActive(tab)) {
          const latestView = views.slice(-1)[0];
          if (latestView) {
            this.$router.push(latestView.path);
          } else {
            this.$router.push("/");
          }
        }
      });
    },
    showMenu (tab, evt) {
      console.log(tab ,evt ,8998)
      this.menuLeft = evt.clientX;
      this.top = evt.clientY;
      this.visiable = true;
    }
  }
};
</script>

<style lang="scss">
.tabs-container {
  .tabs-wrapper {
    position: relative;
    height: 36px;
    line-height: 36px;
    overflow: hidden;
    box-shadow: 1px 2px 5px -1px #e4e3e3;
    .tabsList {
      position: absolute;
      height: 100%;
      white-space: nowrap;
      .tab-item {
        display: inline-block;
        margin-left: 5px;
        padding: 0 8px;
        transition: all 0.3s;
        height: 24px;
        line-height: 24px;
        font-size: 13px;
        letter-spacing: 2px;
        cursor: pointer;
        border: 1px solid #e0e0e0;
        // &:first-child {
        //   margin-left: 15px;
        // }
        .el-icon-close:hover {
          border-radius: 100%;
          display: inline-block;
          width: 15px;
          height: 15px;
          background: #ccc;
        }
        &:hover {
          background: rgba(66, 185, 131, 0.7);
          color: #fff;
        }
        &.item-select {
          background: #42b983;
          color: #fff;
        }
      }
    }
  }

  .tabs-menu {
      position: absolute;
      width: 200px;
      background: #fff;
    }
}

</style>

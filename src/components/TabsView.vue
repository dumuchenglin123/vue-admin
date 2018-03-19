<template>
  <div class="tags-container" @wheel.prevent="handleScroll">
    <ul class="tagsList" :style="{left: left + 'px'}">
      <li class="tag-item item-select">首页 <i class="el-icon-close"></i></li>
      <li class="tag-item">人员管理 <i class="el-icon-close"></i></li>
      <li class="tag-item">人员管理 <i class="el-icon-close"></i></li>
      <li class="tag-item">材料管理 <i class="el-icon-close"></i></li>
      <li class="tag-item">相关管理 <i class="el-icon-close"></i></li>
      <li class="tag-item">人员管理 <i class="el-icon-close"></i></li>
      <li class="tag-item">材料管理 <i class="el-icon-close"></i></li>
      <li class="tag-item">相关管理 <i class="el-icon-close"></i></li>
      <li class="tag-item">人员管理 <i class="el-icon-close"></i></li>
      <li class="tag-item">材料管理 <i class="el-icon-close"></i></li>
      <li class="tag-item">相关管理 <i class="el-icon-close"></i></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TabsView",
  data () {
    return {
      left: 0
    }
  },
  methods: {
    handleScroll (evt) {
      const eventDelta = evt.wheelDelta;
      this.left += eventDelta;
    }
  }
};
</script>

<style lang="scss">
.tags-container {
  position: relative;
  height: 36px;
  line-height: 36px;
  overflow: hidden;
  box-shadow: 1px 2px 5px -1px #e4e3e3;
  .tagsList {
    position: absolute;
    height: 100%;
    white-space: nowrap;
    .tag-item {
      display: inline-block;
      padding: 0 8px;
      transition: all .3s;
      height: 24px;
      line-height: 24px;
      font-size: 13px;
      letter-spacing: 2px;
      cursor: pointer;
      border: 1px solid #e0e0e0;
      &:hover {
        background: #389aff;
        color: #fff;
      }
      &.item-select {
        background: #42b983;
         color: #fff;
      }
    }
  }
}
</style>

<template>
  <section class="user-manage">
    <div class="selects">
      <el-form label-width="80px" :model="formData">
        <el-row :gutter="5">
          <el-col :span="8" class="t-align-r">
            <el-form-item label="用户信息：">
              <el-input v-model="formData.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-input class="admin-input" size="medium" placeholder="请输入内容"></el-input>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="main-grid">
      <template>
        <el-table :data="tableData" stripe border style="width: 100%">
          <el-table-column prop="date" label="登录账号" width="180">
          </el-table-column>
          <el-table-column prop="name" label="用户昵称" width="180">
          </el-table-column>
          <el-table-column prop="address" label="用户类型">
          </el-table-column>
          <el-table-column prop="address" label="状态">
          </el-table-column>
          <el-table-column prop="address" label="IP地址">
          </el-table-column>
        </el-table>
      </template>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      formData: {
        name: null,
      }
    };
  }
};
</script>

<style lang="scss">
.user-manage {
}
.main-grid {
  // width: 98%;
  margin: 10px auto 0;
}

.admin-label {
  display: inline-block;
  height: 36px;
  line-height: 36px;
}
.t-align-r {
  text-align: right;
}
</style>

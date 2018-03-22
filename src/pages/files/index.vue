<template>
  <section class="user-manage">
    <div class="L-selects">
      <el-form label-width="85px" :inline="true" :model="formData">
        <el-row>
          <el-col :span="7">
            <el-form-item label="文件名称：">
              <el-input v-model="formData.name" size="medium"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item label="文件菜单：">
              <el-select v-model="typeValue" filterable default-first-option remote placeholder="请输入关键词" :remote-method="remoteMethod" :loading="loading" size="medium">
                <el-option v-for="item in typeOptions" :key="item.value" :label="item.text" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item label="文件模块：">
              <el-select v-model="typeValue" filterable default-first-option remote placeholder="请输入关键词" :remote-method="remoteMethod" :loading="loading" size="medium">
                <el-option v-for="item in typeOptions" :key="item.value" :label="item.text" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="5">
            <el-form-item>
              <el-button type="primary" icon="el-icon-search" size="small">查询</el-button>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" icon="el-icon-plus" size="small">添加</el-button>
            </el-form-item>
          </el-col>
          <!-- <el-col :span="4">
            <el-form-item>
              <el-radio v-model="radio8" label="1" border size="small">可用</el-radio>
              <el-radio v-model="radio8" label="2" border size="small">不可用</el-radio>
            </el-form-item>
          </el-col> -->

        </el-row>
      </el-form>
    </div>
    <div class="L-grid">
      <el-table :data="tableData" stripe border style="height: 100%" :header-cell-style="{textAlign: 'center'}">
        <el-table-column prop="date" label="文件名称" width="180">
        </el-table-column>
        <el-table-column prop="name" label="文件描述" width="180">
        </el-table-column>
        <el-table-column prop="address" label="所属文件菜单" width="180">
        </el-table-column>
        <el-table-column prop="address" label="是否可用" width="180">
        </el-table-column>
        <el-table-column prop="address" label="所属文件模块" width="180">
        </el-table-column>
        <el-table-column label="操作" align="center" min-width="180">
          <template slot-scope="scope">
            <el-button size="mini" type="primary" @click="handleEdit(scope)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <update-add-dailog :isShow='showDialog' @toggleShow="changeState"></update-add-dailog>
  </section>
</template>

<script>
import UpdateAddDailog from "./update-add";
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
        name: null
      },
      remoteOptions: [
        {
          text: "HTML",
          value: "HTML"
        },
        {
          text: "css",
          value: "css"
        },
        {
          text: "JavaScript",
          value: "JavaScript"
        }
      ],
      typeOptions: [],
      typeValue: [],
      loading: false,
      showDialog: false,
      radio8: '1'
    };
  },
  components: {
    UpdateAddDailog
  },
  methods: {
    remoteMethod(query) {
      if (query !== "") {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.typeOptions = this.remoteOptions.filter(item => {
            return item.text.toLowerCase().indexOf(query.toLowerCase()) > -1;
          });
        }, 200);
      } else {
        this.typeOptions = this.remoteOptions;
      }
    },
    handleEdit(scope) {
      this.showDialog = true;
    },
    handleDelete() {},
    changeState() {
      this.showDialog = false;
    }
  }
};
</script>

<style lang="scss">
.user-manage {
}
</style>

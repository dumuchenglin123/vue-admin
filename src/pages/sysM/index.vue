<template>
  <section class="user-manage">
    <div class="L-selects">
      <el-form label-width="85px" :inline="true" :model="listQuery">
        <el-form-item>
          <el-button type="primary" icon="el-icon-search" size="small" @click="queryList">查询</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-plus" size="small" @click="openDialog()">添加</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="L-grid">
      <el-table :data="tableData" stripe border height='100%' v-loading="tabLoading" :header-cell-style="{textAlign: 'center'}">
        <el-table-column prop="name" label="系统名称" width="200px">
        </el-table-column>
        <el-table-column prop="descript" label="系统描述" width="250px">
        </el-table-column>
        <el-table-column label="操作" align="center" min-width="180">
          <template slot-scope="scope">
            <el-button size="mini" type="primary" @click="openDialog(scope)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <update-add-dailog :isShow='showDialog' :operation='operate' :rowData='rowData' @toggleShow="changeState"></update-add-dailog>
  </section>
</template>

<script>
import UpdateAddDailog from "./update-add";
import { fetchList, addData, DelData } from "@/api/sysManage";

export default {
  data() {
    return {
      // tableData: [
      //   {
      //     menuName: "select",
      //     desc: "范德萨发三",
      //     module: "sys",
      //     fileColumns: [
      //       {
      //         filename: "etSelect",
      //         filedesc: "下拉框组件",
      //         fileEnable: "0"
      //       },
      //       {
      //         filename: "etSelect",
      //         filedesc: "下拉框组件",
      //         fileEnable: "0"
      //       },
      //       {
      //         filename: "etSelect",
      //         filedesc: "下拉框组件",
      //         fileEnable: "0"
      //       },
      //       {
      //         filename: "etSelect",
      //         filedesc: "下拉框组件",
      //         fileEnable: "0"
      //       }
      //     ]
      //   },
      //   {
      //     menuName: "select",
      //     desc: "范德萨发三",
      //     module: "sys",
      //     fileColumns: [
      //       {
      //         filename: "etSelect",
      //         filedesc: "下拉框组件",
      //         fileEnable: "0"
      //       },
      //       {
      //         filename: "etSelect",
      //         filedesc: "下拉框组件",
      //         fileEnable: "0"
      //       },
      //       {
      //         filename: "etSelect",
      //         filedesc: "下拉框组件",
      //         fileEnable: "0"
      //       },
      //       {
      //         filename: "etSelect",
      //         filedesc: "下拉框组件",
      //         fileEnable: "0"
      //       }
      //     ]
      //   },
      //   {
      //     menuName: "select",
      //     desc: "范德萨发三",
      //     module: "sys",
      //     fileColumns: [
      //       {
      //         filename: "etSelect",
      //         filedesc: "下拉框组件",
      //         fileEnable: "0"
      //       },
      //       {
      //         filename: "etSelect",
      //         filedesc: "下拉框组件",
      //         fileEnable: "0"
      //       },
      //       {
      //         filename: "etSelect",
      //         filedesc: "下拉框组件",
      //         fileEnable: "0"
      //       },
      //       {
      //         filename: "etSelect",
      //         filedesc: "下拉框组件",
      //         fileEnable: "0"
      //       }
      //     ]
      //   }
      // ],
      tableData: [],
      listQuery: {
        filename: ""
        // curPage: 1,
        // pageSize: 20,
        // importance: undefined,
        // title: undefined,
        // type: undefined,
      },
      tabLoading: false,
      showDialog: false,
      operate: "", // 决定弹出窗口是添加也还是修改页的变量
      rowData: null // 行数据
    };
  },
  components: {
    UpdateAddDailog
  },
  methods: {
    openDialog(scope) {
      if (!scope) {
        this.operate = "add";
      } else {
        this.operate = "update";
        this.rowData = scope;
      }
      this.showDialog = true;
    },
    handleDelete(index, data) {
      this.tabLoading = true;
      DelData(data._id, data).then(res => {
        this.tableData.splice(index, 1);
        this.$message({
          message: "数据删除完毕",
          type: "success"
        });
        this.tabLoading = false;
      }).catch ( error => {
        this.tabLoading = false;
      });
    },
    changeState() {
      this.showDialog = false;
    },
    // 查询表格数据
    queryList() {
      this.tabLoading = true;
      fetchList().then(response => {
        console.log(response);
        this.tableData = response.data;
        // this.total = response.data.total;
        this.tabLoading = false;
      }).catch( error => {
        this.tabLoading = false;
      });
    }
  }
};
</script>

<style lang="scss">

</style>

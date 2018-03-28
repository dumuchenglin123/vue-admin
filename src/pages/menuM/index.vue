<template>
  <section class="user-manage">
    <div class="L-selects">
      <el-form label-width="85px" :inline="true" :model="listQuery">
        <el-row>
          <!-- <el-col :span="7"> -->
            <el-form-item label="菜单名称：">
              <el-input v-model="listQuery.filename" size="medium"></el-input>
            </el-form-item>
          <!-- </el-col> -->
          <!-- <el-col :span="7"> -->
            <el-form-item label="所属模块：">
              <el-select v-model="typeValue" filterable default-first-option remote placeholder="请输入关键词" :remote-method="selectGetData" :loading="inputLoading" size="medium">
                <el-option v-for="item in typeOptions" :key="item.value" :label="item.text" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          <!-- </el-col> -->
          <!-- <el-col :span="7"> -->
            <!-- <el-form-item label="文件模块：">
              <el-select v-model="typeValue" filterable default-first-option remote placeholder="请输入关键词" :remote-method="selectGetData" :loading="inputLoading" size="medium">
                <el-option v-for="item in typeOptions" :key="item.value" :label="item.text" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item> -->
          <!-- </el-col> -->
        <!-- </el-row>
        <el-row> -->
          <!-- <el-col :span="5"> -->
            <el-form-item>
              <el-button type="primary" icon="el-icon-search" size="small" @click="queryList">查询</el-button>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" icon="el-icon-plus" size="small" @click="openDialog">添加</el-button>
            </el-form-item>
          <!-- </el-col> -->
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
      <el-table :data="tableData" stripe border height='100%' v-loading="tabLoading" :header-cell-style="{textAlign: 'center'}">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-table :data="props.row.fileColumns" stripe border :header-cell-style="{textAlign: 'center'}">
              <el-table-column prop="filename" label="文件名称" width="140">
              </el-table-column>
              <el-table-column prop="filedesc" label="文件描述" width="120">
              </el-table-column>
              <el-table-column prop="fileEnable" label="是否可用" width="140">
              </el-table-column>
            </el-table>
          </template>
        </el-table-column>
        <el-table-column prop="menuName" label="菜单名称" width="180">
        </el-table-column>
        <el-table-column prop="desc" label="菜单描述" width="180">
        </el-table-column>
        <!-- <el-table-column prop="fileMenu" label="所属文件菜单" width="180">
        </el-table-column> -->
        <!-- <el-table-column prop="enable" label="系统模块" width="180">
          <template slot-scope="scope">
            <span v-if="scope.row.enable != 0">可用</span>
            <span v-else>不可用</span>
          </template>
        </el-table-column> -->
        <el-table-column prop="module" label="系统模块" width="180">
        </el-table-column>
        <el-table-column label="操作" align="center" min-width="180">
          <template slot-scope="scope">
            <el-button size="mini" type="primary" @click="openDialog(scope)">上传</el-button>
            <!-- <el-button size="mini" type="danger" @click="deleteData(scope.$index, scope.row)">删除</el-button> -->
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-pagination
      class="L-pag"
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="sizes, prev, pager, next"
      :total="1000"
      >
    </el-pagination>
    <!-- <update-add-dailog :isShow='showDialog' :operation='operate' @toggleShow="changeState"></update-add-dailog> -->
  </section>
</template>

<script>
// import UpdateAddDailog from "./update-add";
import { queryData, addData } from "@/api/filesManage";

export default {
  data() {
    return {
      tableData: [{
        menuName: 'select',
        desc: '范德萨发三',
        module: 'sys',
        fileColumns: [{
          filename: 'etSelect',
          filedesc: '下拉框组件',
          fileEnable: '0'
        },{
          filename: 'etSelect',
          filedesc: '下拉框组件',
          fileEnable: '0'
        },{
          filename: 'etSelect',
          filedesc: '下拉框组件',
          fileEnable: '0'
        },{
          filename: 'etSelect',
          filedesc: '下拉框组件',
          fileEnable: '0'
        }]
      },{
        menuName: 'select',
        desc: '范德萨发三',
        module: 'sys',
        fileColumns: [{
          filename: 'etSelect',
          filedesc: '下拉框组件',
          fileEnable: '0'
        },{
          filename: 'etSelect',
          filedesc: '下拉框组件',
          fileEnable: '0'
        },{
          filename: 'etSelect',
          filedesc: '下拉框组件',
          fileEnable: '0'
        },{
          filename: 'etSelect',
          filedesc: '下拉框组件',
          fileEnable: '0'
        }]
      },{
        menuName: 'select',
        desc: '范德萨发三',
        module: 'sys',
        fileColumns: [{
          filename: 'etSelect',
          filedesc: '下拉框组件',
          fileEnable: '0'
        },{
          filename: 'etSelect',
          filedesc: '下拉框组件',
          fileEnable: '0'
        },{
          filename: 'etSelect',
          filedesc: '下拉框组件',
          fileEnable: '0'
        },{
          filename: 'etSelect',
          filedesc: '下拉框组件',
          fileEnable: '0'
        }]
      }],
      tabParam: {},
      listQuery: {
        filename: '',
        // curPage: 1,
        // pageSize: 20,
        // importance: undefined,
        // title: undefined,
        // type: undefined,
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
      tabLoading: false,
      inputLoading: false,
      showDialog: false,
      operate: "", // 决定弹出窗口是添加也还是修改页的变量
      radio8: "1"
    };
  },
  // components: {
  //   UpdateAddDailog
  // },
  methods: {
    selectGetData(query) {
      if (query !== "") {
        this.inputLoading = true;
        setTimeout(() => {
          this.inputLoading = false;
          this.typeOptions = this.remoteOptions.filter(item => {
            return item.text.toLowerCase().indexOf(query.toLowerCase()) > -1;
          });
        }, 200);
      } else {
        this.typeOptions = this.remoteOptions;
      }
    },
    openDialog(scope) {
      if (!scope) {
        this.operate = "add";
      } else {
        this.operate = "update";
      }
      this.showDialog = true;
    },
    //  分页器 设置每页发送多少数据的方法
    handleSizeChange (val) {
      console.log(val,34343)
      this.listQuery.pageSize = val
      this.queryList()
    },
    // 分页器 设置当前第几页刷新
    handleCurrentChange (val) {
      console.log(val,322222)
      this.listQuery.curPage = val
      this.queryList()
    },
    deleteData() {},
    queryList() {  // 查询表格数据
      this.tabLoading = true;
      queryData().then(response => {
        this.tableData = response.data.data;
        // this.total = response.data.total;
        this.tabLoading = false;
      });
    },
    changeState() {
      this.showDialog = false;
    }
  }
};
</script>

<style lang="scss">


</style>

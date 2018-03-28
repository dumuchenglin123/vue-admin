<template>
  <section class="user-manage">
    <div class="L-selects">
      <el-form label-width="85px" :inline="true" :model="listQuery">
        <el-row>
          <el-form-item label="文件名称：">
            <el-input v-model="listQuery.filename" size="medium"></el-input>
          </el-form-item>
          <!-- </el-col> -->
          <!-- <el-col :span="7"> -->
          <!-- <el-form-item label="文件菜单：">
              <el-select v-model="typeValue" filterable default-first-option remote placeholder="请输入关键词" :remote-method="selectGetData" :loading="inputLoading" size="medium">
                <el-option v-for="item in typeOptions" :key="item.value" :label="item.text" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item> -->
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
            <el-button type="primary" icon="el-icon-search" size="small" >查询</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" icon="el-icon-plus" size="small" @click="openDialog()">添加</el-button>
          </el-form-item>
          <el-form-item>
            <el-upload class="upload-demo" ref="upload" :before-upload="beforeUpload" :on-success="filesUpLoaded" :on-error="filesUnloaded" action="http://192.168.1.127:3000/manage/file/upload" :show-file-list='false' :auto-upload="true" :multiple='true'>
              <el-button slot="trigger" size="small" type="primary" :disabled="uploading">选取文件</el-button>
            </el-upload>
          </el-form-item>
        </el-row>
      </el-form>
    </div>
    <div class="L-grid">
      <el-table :data="tableData" stripe border height='100%' v-loading="tabLoading" :header-cell-style="{textAlign: 'center'}">
        <el-table-column type="index" width="50">
        </el-table-column>
        <el-table-column prop="name" label="文件名称" width="180">
        </el-table-column>
        <el-table-column prop="descript" label="文件描述" width="180">
          <template slot-scope="scope">
            <template v-if="scope.row.edit">
              <el-input type="text" v-model="scope.row.descript"></el-input>
            </template>
            <span v-else>{{scope.row.descript}}</span>
          </template>
        </el-table-column>
        <!-- <el-table-column prop="fileMenu" label="所属文件菜单" width="180">
        </el-table-column> -->
        <el-table-column prop="enable" label="是否可用" width="180">
          <template slot-scope="scope">
            <span v-if="scope.row.enable != 0">可用</span>
            <span v-else>不可用</span>
          </template>
        </el-table-column>
        <el-table-column prop="createDate" label="文件上传日期" width="180">
          <template slot-scope="scope">
            <span>{{scope.row.createDate| moment("YYYY-MM-DD HH:mm:ss")}}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center" min-width="180">
          <template slot-scope="scope">
            <el-button v-if="scope.row.edit" type="success" size="small"  icon="el-icon-circle-check-outline">Ok</el-button>
            <el-button v-else type="primary" @click='scope.row.edit=!scope.row.edit' size="small" icon="el-icon-edit">Edit</el-button>
          </template>
          <!-- <template slot-scope="scope">
            <el-button size="mini" type="primary" @click="openDialog(scope)">编辑</el-button>
            <el-button size="mini" type="danger" @click="deleteData(scope.$index, scope.row)">删除</el-button>
          </template> -->
        </el-table-column>
      </el-table>
    </div>
    <el-pagination class="L-pag" background @size-change="handleSizeChange" @current-change="handleCurrentChange" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="sizes, prev, pager, next" :total="1000">
    </el-pagination>
    <update-add-dailog v-bind="{isShow: showDialog, operation: operate, rowData: rowData}" @toggleShow="changeState"></update-add-dailog>
  </section>
</template>

<script>
import UpdateAddDailog from "./update-add";
import { queryData, DelData } from "@/api/filesManage";

export default {
  data() {
    return {
      uploading: false,
      tableData: [{
        name: '1111',
        descript: '33333',
        enable: 1,
        edit: false
      },{
        name: '1111',
        descript: '33333',
        enable: 1,
        edit: false
      },{
        name: '1111',
        descript: '33333',
        enable: 1,
        edit: false
      },{
        name: '1111',
        descript: '33333',
        enable: 1,
        edit: false
      }],
      tabParam: {},
      listQuery: {
        filename: ""
        // curPage: 1,
        // pageSize: 20,
        // importance: undefined,
        // title: undefined,
        // type: undefined,
      },
      remoteSelectOptions: [
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
      rowData: null, //切换修改页时传过来的行数据
      radio8: "1"
    };
  },
  components: {
    UpdateAddDailog
  },
  methods: {
    selectGetData(query) {
      if (query !== "") {
        this.inputLoading = true;
        setTimeout(() => {
          this.inputLoading = false;
          this.typeOptions = this.remoteSelectOptions.filter(item => {
            return item.text.toLowerCase().indexOf(query.toLowerCase()) > -1;
          });
        }, 200);
      } else {
        this.typeOptions = this.remoteSelectOptions;
      }
    },
    openDialog(scope) {
      if (!scope) {
        this.operate = "add";
      } else {
        this.operate = "update";
        this.rowData = scope;
      }
      this.showDialog = true;
    },
    //  分页器 设置每页发送多少数据的方法
    handleSizeChange(val) {
      console.log(val, 34343);
      this.listQuery.pageSize = val;
      this.queryList();
    },
    // 分页器 设置当前第几页刷新
    handleCurrentChange(val) {
      console.log(val, 322222);
      this.listQuery.curPage = val;
      this.queryList();
    },
    deleteData(index, data) {
      this.tabLoading = true;
      DelData(data._id, data)
        .then(res => {
          this.tableData.splice(index, 1);
          this.tabLoading = false;
        })
        .catch(error => {
          this.tabLoading = false;
        });
    },
    queryList() {
      // 查询表格数据
      this.tabLoading = true;
      queryData()
        .then(response => {
          this.tableData = response.data;
          this.tabLoading = false;
        })
        .catch(error => {
          this.tabLoading = false;
        });
    },
    changeState() {
      this.showDialog = false;
    },
    beforeUpload() {
      // this.
    },
    filesUpLoaded(path) {
      // console.log("uploaded success", this.$refs.upload);
      this.$refs.upload.clearFiles();
      const newData = {
        path: "",
        name: ""
      };
      this.tableData.push(newData);
      // this.form.path = path;
    },
    filesUnloaded() {
      console.log("filesloaded error");
    }
  }
};
</script>

<style lang="scss">
.user-manage {
}
.L-pag {
  margin-top: 10px;
}
</style>

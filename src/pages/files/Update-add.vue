<template>
  <el-dialog :visible.sync="isShow" :before-close='closeDialog' width="40%" :close-on-click-modal='false'>
    <span slot="title">{{title}}</span>
    <el-form :model="form" v-loading="formDataloading" ref="Form" :rules="rules" status-icon>
      <el-form-item label="文件名称：" :label-width="formLabelWidth" class="form-item" prop="name">
        <el-input v-model="form.name" auto-complete="off" size="medium"></el-input>
      </el-form-item>
      <!-- <el-form-item label="文件菜单：" :label-width="formLabelWidth" class="form-item">
        <el-select v-model="form.menus" filterable default-first-option remote placeholder="请输入关键词" size="medium">
          <el-option v-for="item in typeOptions" :key="item.value" :label="item.text" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item> -->
      <el-form-item label="过期日期：" :label-width="formLabelWidth" class="form-item" prop="setTime">
        <el-date-picker v-model="form.setTime" type="datetime" placeholder="选择过期日期时间" size="medium">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="是否可用：" :label-width="formLabelWidth">
        <el-radio-group v-model="form.enable">
          <el-radio label="1">是</el-radio>
          <el-radio label="0">否</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="文件描述：" :label-width="formLabelWidth" style="width: 350px;height: 68px" prop="desc">
        <el-input type="textarea" v-model="form.desc"  size="medium"></el-input>
      </el-form-item>
      <el-form-item prop="fileList">
        <el-upload class="upload-demo" ref="upload" :on-success="filesUpLoaded" :on-error="filesUnloaded" action="https://jsonplaceholder.typicode.com/posts/" :file-list="fileList" :show-file-list='true'  :auto-upload="false" :multiple='false'>
          <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
          <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="closeDialog">取 消</el-button>
      <el-button type="primary" @click="submitDailog">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { fetchList, addData } from "@/api/filesManage";

export default {
  name: "Update-add",
  props: ["isShow", "operation"],
  data() {
    return {
      formLabelWidth: "95px",
      formDataloading: false,
      form: {
        name: "",
        menus: "",
        modules: "",
        enable: "0",
        desc: "",
        setTime: "",

      },
      fileList: [
          // {
          //   name: "food.jpeg",
          //   url:
          //     "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
          // },
          // {
          //   name: "food.jpeg",
          //   url:
          //     "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
          // },
          // {
          //   name: "food.jpeg",
          //   url:
          //     "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
          // },
          // {
          //   name: "food2.jpeg",
          //   url:
          //     "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
          // }
        ],
      typeOptions: [
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
      rules: {
        name: { required: true, message: "请输入文件名称", trigger: "blur" },
        setTime: { required: true, message: "请输入过期日期", trigger: "blur" },
        desc: [
          { required: true, message: '请输入描述信息' },
          { min: 6, max: 30, message: '长度在 6 到 30 个字符' }
        ]
      }
    };
  },
  computed: {
    title() {
      if (this.operation === "add") {
        return "添加页";
      } else {
        return "修改页";
      }
    }
  },
  methods: {
    closeDialog() {
      this.$refs.Form.resetFields();
      this.$emit("toggleShow");
    },
    submitUpload() {
      this.$refs.upload.submit();
    },
    submitDailog() {
      // 提交前先验证
      // if (!this.submitForm()) {
      //   return false;
      // }
      this.formDataloading = true;
      if (this.operation === "add") {
        const newData = this.form;
        addData(newData).then(res => {

          this.formDataloading = false;
          // 父组件表格添加数据
          this.$parent.tableData.push(newData);

          this.$message({
            message: "数据添加完毕",
            type: "success"
          });

          setTimeout(() => {
            this.closeDialog();
          }, 1000);
        });
      } else {
        this.closeDialog();
      }
    },
    submitForm() {
      // 检测文件是否提交待上传
      // if (!this.fileList.length) {
      //   this.$message({
      //       message: "上传文件为空",
      //       type: "error"
      //     });
      //     return false;
      // }
      this.$refs.Form.validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    filesUpLoaded () {
      console.log(arguments,4444)
    },
    filesUnloaded () {
      console.log(arguments,5555)
    }
  }
};
</script>

<style>
.form-item {
  width: 300px;
}
</style>

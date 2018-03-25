<template>
  <el-dialog :visible.sync="isShow" :before-close='closeDialog' width="40%" >
    <template slot="title">{{title}}</template>
    <el-form :model="form">
      <el-form-item label="文件名称：" :label-width="formLabelWidth" class="form-item">
        <el-input v-model="form.name" auto-complete="off" size="medium"></el-input>
      </el-form-item>
      <!-- <el-form-item label="文件菜单：" :label-width="formLabelWidth" class="form-item">
        <el-select v-model="form.menus" filterable default-first-option remote placeholder="请输入关键词" size="medium">
          <el-option v-for="item in typeOptions" :key="item.value" :label="item.text" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item> -->
      <el-form-item label="过期日期：" :label-width="formLabelWidth" class="form-item">
        <el-date-picker v-model="setTime" type="datetime" placeholder="选择过期日期时间" size="medium">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="是否可用：" :label-width="formLabelWidth">
        <el-radio-group v-model="form.enable">
          <el-radio label="是"></el-radio>
          <el-radio label="否"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="文件描述：" :label-width="formLabelWidth" style="width: 350px;height: 68px">
        <el-input type="textarea" v-model="form.desc" size="medium"></el-input>
      </el-form-item>
      <el-form-item>
        <el-upload class="upload-demo" ref="upload" action="https://jsonplaceholder.typicode.com/posts/" :file-list="fileList" :auto-upload="false">
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
      form: {
        name: "",
        menus: "",
        modules: "",
        enable: "是",
        desc: ""
      },
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
      formLabelWidth: "85px",
      typeValue: "",
      setTime: '',
      fileList: [
        {
          name: "food.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        },
        {
          name: "food.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        },
        {
          name: "food.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        },
        {
          name: "food2.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        }
      ]
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
  mounted() {},
  methods: {
    closeDialog() {
      this.$emit("toggleShow");
    },
    submitUpload() {
      this.$refs.upload.submit();
    },
    submitDailog() {
      if (this.operation === "add") {
        addData(this.form).then(res => {
          console.log(res,34343);
          
        })
      } else {
      }
      this.closeDialog();
    }
  }
};
</script>

<style>
.form-item {
  width: 300px;
}
</style>

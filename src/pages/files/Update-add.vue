<template>
  <el-dialog :visible.sync="isShow" :before-close='closeDialog'>
     <template slot="title">{{title}}</template>
    <el-form :model="form">
      <el-form-item label="文件名称：" :label-width="formLabelWidth" class="form-item">
        <el-input v-model="form.name" auto-complete="off" size="medium"></el-input>
      </el-form-item>
      <el-form-item label="文件描述：" :label-width="formLabelWidth" class="form-item">
        <el-input v-model="form.name" auto-complete="off" size="medium"></el-input>
      </el-form-item>
      <el-form-item label="文件菜单：" :label-width="formLabelWidth" class="form-item">
        <el-select v-model="typeValue" filterable default-first-option remote placeholder="请输入关键词"  size="medium">
          <el-option v-for="item in typeOptions" :key="item.value" :label="item.text" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="文件模块：" :label-width="formLabelWidth" class="form-item">
        <el-select v-model="typeValue" filterable default-first-option remote placeholder="请输入关键词"  size="medium">
          <el-option v-for="item in typeOptions" :key="item.value" :label="item.text" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="是否可用：" :label-width="formLabelWidth">
        <el-radio-group v-model="form.resource">
          <el-radio label="是"></el-radio>
          <el-radio label="否"></el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="closeDialog">取 消</el-button>
      <el-button type="primary" @click="closeDialog">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: "Update-add",
  props: ["isShow"],
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
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
      title: '修改页',
      typeValue: ''
    };
  },
  mounted() {
    console.log(this);
  },
  methods: {
    closeDialog() {
      console.log(3333);
      this.$emit("toggleShow");
    }
  }
};
</script>

<style>
  .form-item {
    width: 300px;
  }
</style>

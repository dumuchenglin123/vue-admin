<template>
  <div id="page" style="border-style:dashed;border-color:#e4e4e4;line-height:30px;background:url(sorry.png) no-repeat right;">
    <h1>抱歉，找不到此页面~</h1>
    <h2>Sorry, the site now can not be accessed. </h2>
    <font color="#666666">你请求访问的页面，暂时找不到，我们建议你返回首页官网进行浏览，谢谢！</font><br /><br />
    <el-button type="primary" @click="back">退回前页</el-button>
    <el-button type="primary" @click="goHome">进入首页</el-button>
  </div>
</template>

<script>
export default {
  name: "noPage",
  watch: {
    $route() {
      console.log(arguments);
    }
  },
  mounted() {
    console.log("mounted", this);
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    goHome() {
      this.$router.push("/admin");
    }
  }
};
</script>

<style scoped>
body {
  margin: 0px;
  padding: 0px;
  font-family: "微软雅黑", Arial, "Trebuchet MS", Verdana, Georgia, Baskerville,
    Palatino, Times;
  font-size: 16px;
}
div {
  margin-left: auto;
  margin-right: auto;
}
a {
  text-decoration: none;
  color: #1064a0;
}
a:hover {
  color: #0078d2;
}
img {
  border: none;
}
h1,
h2,
h3,
h4 {
  margin: 0;
  font-weight: normal;
  font-family: "微软雅黑", Arial, "Trebuchet MS", Helvetica, Verdana;
}
h1 {
  font-size: 44px;
  color: #0188de;
  padding: 20px 0px 10px 0px;
}
h2 {
  color: #0188de;
  font-size: 16px;
  padding: 10px 0px 40px 0px;
}

#page {
  width: 910px;
  padding: 20px 20px 40px 20px;
  margin-top: 80px;
}
.button {
  width: 180px;
  height: 28px;
  margin-left: 0px;
  margin-top: 10px;
  background: #009cff;
  border-bottom: 4px solid #0188de;
  text-align: center;
}
.button a {
  width: 180px;
  height: 28px;
  display: block;
  font-size: 14px;
  color: #fff;
}
.button a:hover {
  background: #5bbfff;
}
</style>


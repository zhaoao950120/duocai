<template>
  <div class="header">
    <div class="w1200">
      <h1 class="fl">
        <img src="../assets/image/logo1.png" alt>
      </h1>
      <ul class="fr">
        <li @click="shouye">首页</li>
        <li @click="gupiao">股票</li>
        <li>期货</li>
        <li @click="qihuo">贷款</li>
        <li>信用卡</li>
        <li>P2P</li>
      </ul>
      <div class="clear"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: ""
    };
  },
  mounted() {},
  methods: {
    shouye() {
      this.$router.push({ name: "home" });
    },
    gupiao() {
      this.$router.push({ name: "equities" });
    },
    qihuo() {
      this.$router.push({ name: "loans" });
    }
    // daikuan() {
    //   this.$router.push({ name: "loans" });
    // }
  }
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
  list-style: none;
}

.header {
  width: 100%;
  height: 70px;
}

.w1200 {
  width: 1200px;
  margin: auto;
  height: 70px;
}

h1 {
  font-size: 35px;
  font-family: SourceHanSerifSC-Bold;
  font-weight: bold;
  color: rgba(39, 93, 205, 1);
  /* line-height: 70px;
  height: 70px; */
  margin-top: 10px;
  float: left;
}

.header ul {
  width: 500px;
  display: flex;
  margin: 0;
  float: right;
}

.header ul li {
  margin-top: 14px;
  box-sizing: border-box;
  flex: 1;
  width: 95px;
  height: 56px;
  text-align: center;
  line-height: 56px;
  cursor: pointer;
  font-size: 16px;
}

/* .header ul li:nth-child(1) {
  background-color: #275dcd;
  color: #fff;
  border-radius: 5px 5px 0px 0px;
} */
.header ul li:nth-child(1) {
  background-color: #275dcd;
  color: #fff;
  border-radius: 5px 5px 0px 0px;
  cursor: pointer;
  background: url(../assets/image/home.png) no-repeat 16px 16px #275dcd;
  background-size: 20px 20px;
  text-indent: 27px;
}
img {
  width: 140px;
  vertical-align: middle;
}
</style>




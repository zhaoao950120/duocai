<template>
  <div class="box">
    <!-- 左侧 -->
    <div class="left fl">
      <h2>贷款</h2>
      <button class="btn1">消费</button>
      <!-- <button class="btn2">购车</button>
      <button class="btn3">购房</button>-->
      <span>更多></span>
    </div>
    <!-- 列表 -->
    <div class="middle fl">
      <ul>
        <li v-for="(item,index) in list" :key="index">
          <div class="top">
            <div class="fl">
              <img src="../../assets/image/jie.png" alt>
            </div>
            <div class="fl">
              <p class="p1">{{item.title}}</p>
              <p class="p2">{{item.info}}</p>
            </div>
            <div class="clear"></div>
          </div>
          <!-- 中 -->
          <div class="p2">
            <p class="fl">
              <span>额度范围：</span>
              <span>10000-40000</span>
            </p>
            <p class="fl" style="margin-left:15px">
              <span>贷款期限：</span>
              <span>6-12月</span>
            </p>
            <div class="clear"></div>
          </div>

          <div class="p3">
            <button>放款快</button>
            <button>范围广</button>
            <button>借款期限长</button>
            <button>借贷利率低</button>
          </div>
        </li>

        <div class="clear"></div>
      </ul>
    </div>
    <div class="solid fl"></div>
    <!-- 表单 -->
    <div class="right fl form">
      <h2>快速申请贷款</h2>
      <!-- <form action="http://www.dc.com/api/cdk" method="post"> -->
      <div class="name">
        <label for>您的姓名</label>
        <input type="text" placeholder="请输入您的姓名" class="input" v-model="username" name="name">
      </div>
      <div class="name">
        <label for>联系方式</label>
        <input type="text" placeholder="请输入手机号" class="input" v-model="usertel" name="amount">
      </div>
      <div class="name">
        <label for>贷款金额</label>
        <input type="text" placeholder="请输入贷款金额" class="input" v-model="money" name="amount">
      </div>
      <div class="name">
        <label for>资产状况</label>
        <input type="text" placeholder="资产状况" class="input" v-model="zichan" name="dc_zc">
      </div>
      <div class="name">
        <label for>婚姻状况</label>
        <input type placeholder="婚姻状况" class="input" v-model="hunyin" name="dc_hy">
      </div>
      <!-- <input type="submit" value="确定"> -->
      <button @click="submit">下一步</button>
      <!-- </form> -->
    </div>
    <div class="clear"></div>
    <img src="../../assets/image/icon_10.png" alt>
    <!-- 弹框二维码 -->
    <el-dialog
      title="快速贷款"
      :visible.sync="dialogFormVisible1"
      width="20%"
      top="20vh"
      center="center"
      class="dialog"
    >
      <p>
        <i class="el-icon-success" style="color:green"></i>恭喜您，您提交的贷款资料 已初审通过！
      </p>
      <!-- </el-form> -->
      <div slot="footer" class="dialog-footer">
        <!-- <p>二维码</p> -->
        <img class="image613" src alt>
        <!-- <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>-->
      </div>
    </el-dialog>
  </div>
</template>
<script>
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";
export default {
  data() {
    return {
      username: "",
      usertel: "",
      money: "",
      zichan: "",
      hunyin: "",
      dialogFormVisible1: false,
      list: []
    };
  },
  created() {
    // 贷款数据
    this.$http.get("http://www.dc.com/").then(res => {
      this.list = res.data.data.jinxuandaikuan;
      console.log(res.data.data.jinxuandaikuan);
    });
  },
  methods: {
    submit() {
      console.log(
        this.username,
        this.usertel,
        this.money,
        this.zichan,
        this.hunyin
      );
      this.dialogFormVisible1 = true;
      // this.$http
      //   .post("http://www.dc.com/api/cdk", {
      //     params: {
      //       name: this.username,
      //       tel: this.usertel,
      //       amount: this.money,
      //       dc_zc: this.zichan,
      //       dc_hy: this.hunyin,
      //       classId: 3
      //     }
      //     headers: { "Content-Type": "application/x-www-form-urlencoded" }
      //   })
      //   .then(res => {
      //     console.log(res.data);
      //   });

      // 贷款表单提交
      $.ajax({
        type: "POST",
        url: "http://www.dc.com/api/cdk",
        header: { "Content-Type": "application/x-www-form-urlencoded" },
        data: {
          name: this.username,
          tel: this.usertel,
          amount: this.money,
          dc_zc: this.zichan,
          dc_hy: this.hunyin,
          class_id: 3
        },
        dataType: "json",
        success: function(data) {
          console.log(data);
          $(".image613").attr(
            "src",
            "https://www.dc.com/static/upload/qr/timg.jpg"
          );
        }
      });

      //      register() {
      // this.$http
      //   .post("http://59.110.241.166:1810/vue/register", {
      //     params: {
      //       username: this.username,
      //       email: this.email,
      //       password: this.password,
      //       password1: this.password1,
      //       phone: this.phone
      //     }
      //   })
      //   .then(res => {
      //     if (res.data.code == 200) {
      //       // Toast({
      //       //   message: res.data.msg,
      //       //   position: "middle",
      //       //   duration: 2000
      //       // });
      //       MessageBox("提示", "注册成功");
      //       this.$router.push({ name: "login" });
      //     } else {
      //       Toast({
      //         message: res.data.msg,
      //         position: "middle",
      //         duration: 2000
      //       });
      //     }
      //   });
    }
  }
};
</script>

<style scoped>
.box {
  width: 1200px;
  height: 400px;
  margin: auto;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 21px 0px rgba(0, 0, 0, 0.08);
  margin-top: 50px;
  position: relative;
}
.box .left {
  width: 204px;
  height: 412px;
  background-color: rgba(125, 90, 255, 1);
  overflow: hidden;
  background: url(../../assets/image/icon_dt1.png) no-repeat 0 120px
    rgba(125, 90, 255, 1);
  transform: translateY(-12px);
}
.box .left h2 {
  width: 119px;
  height: 52px;
  background: #9882ff;
  text-align: center;
  /* opacity: 0.2; */
  line-height: 52px;
  color: #fff;
  margin-top: 24px;
}
.box .left button {
  width: 127px;
  height: 42px;
  background: rgba(255, 255, 255, 1);
  border-radius: 10px;
  font-size: 18px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(246, 97, 92, 1);
  line-height: 27px;
  border: none;
  border: 1px solid rgba(255, 255, 255, 1);
  cursor: pointer;
}
.box .left .btn1 {
  margin: 39px 0 0 93px;
}
.box .left .btn2 {
  margin: 20px 0 0 93px;
  background: rgba(0, 0, 0, 0);
  color: #fff;
}
.box .left .btn3 {
  margin: 20px 0 0 93px;
  background: rgba(0, 0, 0, 0);
  color: #fff;
}
.box .left span {
  font-size: 14px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 27px;
  margin: 45px 0 0 140px;
  display: inline-block;
}

.box .middle {
  width: 735px;
  padding: 35px 0 0 30px;
  box-sizing: border-box;
  height: 400px;
}
.box .middle .p2 {
  font-size: 14px;
}
.box .middle .p3 {
  color: rgba(179, 179, 179, 1);
}
.box .middle ul li {
  margin-bottom: 20px;
  width: 352px;
  float: left;
}
.box .middle ul li .p2 {
  line-height: 26px;
}
.box .middle ul li .top .p1 {
  font-size: 18px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
}
.box .middle ul li .top .p2 {
  font-size: 14px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(128, 128, 128, 1);
}
.box .middle ul li .top img {
  margin-right: 10px;
}
.box .middle ul li .p2 .fl span:nth-child(1) {
  color: #808080;
}
.box .middle ul li .p2 .fl span:nth-child(2) {
  color: #f35454;
}
.box .middle ul li .p3 button {
  /* width: 49px; */
  height: 23px;
  border: 1px solid rgba(220, 220, 220, 1);
  border-radius: 6px;
  background-color: #fff;
  padding: 0 10px;
  color: rgba(179, 179, 179, 1);
}
.form {
  width: 260px;
  height: 388px;
  padding-left: 18px;
  box-sizing: border-box;
}
.form h2 {
  font-size: 18px;
  font-family: MicrosoftYaHei-Bold;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
  line-height: 60px;
  text-align: center;
}
.form .input {
  width: 150px;
  height: 39px;
  border: 1px solid rgba(230, 230, 230, 1);
  border-radius: 6px;
  margin: 8px 0;
  padding-left: 10px;
  box-sizing: border-box;
}
.form .radio label {
  font-size: 14px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(128, 128, 128, 1);
  line-height: 27px;
}
.solid {
  width: 1px;
  height: 348px;
  background: rgba(230, 230, 230, 1);
  margin-top: 20px;
}
.form button {
  width: 161px;
  height: 40px;
  background: rgba(77, 128, 234, 1);
  border-radius: 20px;
  margin-left: 15px;
  border: none;
  color: #fff;
  cursor: pointer;
  outline: none;
}
.box > img {
  position: absolute;
  top: -12px;
  left: 204px;
}
/* 表单 */
form button {
  cursor: pointer;
}
.image613 {
  width: 163px;
  height: 163px;
}
</style>


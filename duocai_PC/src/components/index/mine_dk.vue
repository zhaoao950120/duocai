<template>
  <div class="box">
    <!-- 左侧 -->
    <div class="left fl">
      <h2>贷款</h2>
      <button class="btn1">精选贷款</button>
      <!-- <button class="btn2">购车</button>
      <button class="btn3">购房</button>-->
      <span @click="daikuan">更多></span>
    </div>
    <!-- 列表 -->
    <div class="middle fl">
      <ul>
        <li v-for="(item,index) in list" :key="index" @click="detile(item.pid)">
          <div class="top" style="overflow:hidden; margin-right:10px">
            <div class="fl">
              <img
                :src="'http://api.duocai.jiaxunmedia.com/'+item.logo"
                alt
                style="width:48px;height:48px"
              >
            </div>
            <div class="fl">
              <p class="p1">{{item.title}}</p>
              <p class="p2">{{item.slogan}}</p>
            </div>
            <div class="clear"></div>
          </div>
          <!-- 中 -->
          <div class="p2">
            <p class="fl">
              <span>额度范围：</span>
              <span>{{item.quota_amount}}</span>
            </p>
            <p class="fl" style="margin-left:15px;">
              <span>贷款期限：</span>
              <span>{{item.ew}}</span>
            </p>
            <div class="clear"></div>
          </div>

          <div class="p3" style="max-height: 28px;max-width: 320px;
    overflow: hidden;">
            <button
              v-show="item1"
              v-for="(item1,index1) in item.ys[0]"
              :key="index1"
              style="margin:3px 5px"
            >{{item1}}</button>
            <!-- <button>{{list_ys[1]}}</button>
            <button>借款期限长</button>
            <button>借贷利率低</button>-->
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
        <!-- <input type placeholder="婚姻状况" class="input" v-model="hunyin" name="dc_hy"> -->
        <el-select v-model="marital1" placeholder="请选择" style="width:62%;margin-bottom:10px; margin: 8px 6px;">
          <el-option value="未婚"></el-option>
          <el-option value="已婚"></el-option>
          <el-option value="离异"></el-option>
        </el-select>
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
      list: [],
      list_ys: [],
      marital1: "",
      list_ys1: []
    };
  },
  created() {
    // 贷款数据
    this.$http.get("http://duocai.jiaxunmedia.com/duocaiapi/").then(res => {
      this.list = res.data.data.jinxuandaikuan;
    });
  },
  methods: {
    submit() {
      if (this.marital1 == "未婚") {
        this.hunyin = 0;
      }
      if (this.marital1 == "已婚") {
        this.hunyin = 1;
      }
      if (this.marital1 == "离异") {
        this.hunyin = 3;
      }
      console.log(
        this.username,
        this.usertel,
        this.money,
        this.zichan,
        this.hunyin
      );

      // 贷款表单提交
      var usernameReg = /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/; //姓名
      var usertelReg = /^1[3456789][0-9]{9}$/gi; //手机号码
      var that = this;
      if (usernameReg.test(this.username)) {
        // console.log(this.usertel);
        if (usertelReg.test(this.usertel)) {
          $.ajax({
            type: "POST",
            url: "http://api.duocai.jiaxunmedia.com/api/cdk",
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

              if (data.code == 200) {
                $(".image613").attr("src", data.data.qrCode);
                that.dialogFormVisible1 = true;
              } else {
                that.$message({
                  showClose: true,
                  message: data.message,
                  type: "error"
                });
              }
            }
          });
        } else {
          this.$message({
            showClose: true,
            message: "请输入有效的电话号码",
            type: "error"
          });
        }
      } else {
        this.$message({
          showClose: true,
          message: "请输入合法的姓名",
          type: "error"
        });
      }
    },
    detile(id) {
      console.log(id);
      this.$router.push({
        name: "loansDetail",
        params: { id: id }
      });
    },
    daikuan() {
      this.$router.push({
        name: "loans"
      });
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
  font-size: 24px;
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
  margin: 25px 0 0 140px;
  display: inline-block;
  cursor: pointer;
}

.box .middle {
  width: 735px;
  padding: 28px 0 0 30px;
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
  line-height: 29px;
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
  overflow: hidden;
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
  line-height: 42px;
  text-align: center;
  margin-top: 12px;

}
.form .input {
  width: 150px;
  height: 39px;
  border: 1px solid rgba(230, 230, 230, 1);
  border-radius: 6px;
  margin: 8px 6px;
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
  height: 366px;

  background: rgba(230, 230, 230, 1);
  margin-top: 20px;
}
.form button {
  width: 161px;
  height: 40px;
  background: rgba(77, 128, 234, 1);
  border-radius: 20px;
  margin: 9px 0 0 27px;
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


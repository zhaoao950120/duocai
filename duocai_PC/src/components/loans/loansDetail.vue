<template>
  <div class="box">
    <div class="banner"></div>
    <div class="w1200">
      <div class="mine">
        <div class="left fl">
          <!-- 头部框 -->
          <div class="left_top">
            <div class="logo fl">
              <img :src="list.logo" alt style="width:79px;height:79px">
            </div>
            <div class="details fl">
              <div class="title">
                <h2>{{list.title}}</h2>
                <span style="margin-left:15px">{{list.slogan}}</span>
              </div>
              <div class="mine" style="margin-bottom: 10px;">
                <span>额度范围：</span>
                <span>{{list.quota_amount}}</span>
                <span style="margin-left: 15px;">借款期限：</span>
                <span>{{list.ew}}</span>
              </div>
              <div class="entry">
                <!-- <span v-for="(item,index) in list.ys.slice(0,2)" :key="index">{{item}}</span> -->
                <span v-for="(item,index) in getys(list)" :key="index">{{item}}</span>

                <!-- <span>范围广</span> -->
              </div>
            </div>
            <div class="btn fr">
              <p>
                <span>{{list.number}}人</span>申请成功
              </p>
              <button @click="jiekuan_box">立即借款</button>
            </div>
            <div class="clear"></div>
          </div>

          <!-- 文本框 -->
          <div class="left_text">
            <h3>基本信息</h3>
            <div class="text_content">
              <p v-html="list.content">list.content</p>
              <!-- <h4>申请条件</h4>
              <p>申请条件，申请条件申请条件申请条件申请条件</p>
              <h4>所需材料</h4>
              <p>所需材料，所需材料，所需材料，所需材料</p>
              <h4>审核说明</h4>
              <p>系统审核</p>
              <h4>平台介绍</h4>
              <p>新平台，下款稳</p>-->
            </div>
          </div>
        </div>
        <!-- 推荐产品 -->
        <div class="right fl">
          <h2>相关产品</h2>
          <ul>
            <li v-for="(item,index) in list1" :key="index" @click="tuijian(item.pid)">
              <div class="list_top">
                <div class="image fl">
                  <img
                    :src="'http://api.duocai.jiaxunmedia.com/'+item.logo"
                    alt
                    style="width:60px;height:60px"
                  >
                </div>
                <div class="content fl">
                  <h3 style="width: 141px;overflow: hidden;height: 40px;">{{item.title}}</h3>
                  <p
                    style="width: 141px;height:15px;overflow:hidden;white-space：nowrap;text-overflow：ellipsis"
                  >{{item.slogan}}</p>
                </div>
                <div class="clear"></div>
              </div>
              <div class="list_bottom" style="margin-top: 6px;">
                <span>范围：</span>
                <span>{{item.quota_amount}}</span>
                <span>期限：</span>
                <span>{{item.ew}}</span>
              </div>
              <div class="border"></div>
            </li>
          </ul>
        </div>
        <div class="clear"></div>
      </div>
    </div>
    <!-- 借款弹框1 -->
    <el-dialog
      title="快速贷款"
      :visible.sync="dialogFormVisible"
      width="16%"
      top="15vh"
      center="center"
      class="dialog"
    >
      <input type="text" v-model="money" placeholder="贷款金额（万元）">
      <input type="text" v-model="username" placeholder="您的姓名">
      <input type="text" v-model="usertel" placeholder="请输入您的联系方式">
      <input type="text" v-model="asset" placeholder="资产状况">
      <el-select
        v-model="marital1"
        placeholder="请选择"
        style="width:80%;margin-bottom:10px;margin-left: 10%;"
      >
        <el-option value="未婚"></el-option>
        <el-option value="已婚"></el-option>
        <el-option value="离异"></el-option>
      </el-select>
      <!-- </el-form> -->
      <!-- <button>立即借款</button> -->
      <el-button id="btn_jk" @click="jiekuan1">立即借款</el-button>
    </el-dialog>
    <!-- 弹框二维码 -->
    <el-dialog
      title="快速贷款"
      :visible.sync="dialogFormVisible1"
      width="284px"
      top="20vh"
      center="center"
      class="dialog"
    >
      <div style="    display: flex;">
        <i class="chenggong fl"></i>
        <p class="fl" style="line-height: 25px;padding: 0 6px;">恭喜您，您提交的贷款资料 已初审通过！</p>
        <div class="clear"></div>
      </div>
      <div slot="footer" class="dialog-footer" style="margin-top:-30px">
        <!-- <p>二维码</p> -->
        <img class="image613" src alt>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialogFormVisible: false,
      dialogFormVisible1: false,
      money: "",
      username: "",
      usertel: "",
      asset: "",
      marital1: "",

      pid: "",
      list: "",
      list1: "",
      youshi: []
    };
  },
  created() {
    this.pid = this.$route.params.id;
    console.log(this.pid);
    this.$http
      .get("http://api.duocai.jiaxunmedia.com/api/product/Productinfo?", {
        params: {
          pid: this.pid
        }
      })
      .then(res => {
        this.list = res.data.data.list;
        console.log(res.data.data.list);
        this.list1 = res.data.data.recommend;
      });
  },
  methods: {
    // 借款提交1
    jiekuan1() {
      //   console.log(
      //     this.money,
      //     this.username,
      //     this.usertel,
      //     this.asset,
      //     this.marital
      //   );
      //   this.dialogFormVisible = false;
      //   this.dialogFormVisible1 = true;
      //   this.$http
      //     .post("http://api.duocai.jiaxunmedia.com/api/cdk", {
      //       params: {
      //         amount: this.money,
      //         name:this.username,
      //         tel:this.usertel,
      //         asset:this.asset,
      //         dc_hy:this.marital
      //       }
      //     })
      //     .then(res => {
      //       this.list = res.data.data;
      //       console.log(res.data.data);
      // });
      // 贷款表单提交
      if (this.marital == "未婚") {
        this.marital = 0;
      }
      if (this.marital == "已婚") {
        this.marital = 1;
      }
      if (this.marital == "离异") {
        this.marital = 2;
      }
      console.log(
        this.money,
        this.username,
        this.usertel,
        this.asset1,
        this.marital
      );
      var usernameReg = /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/; //姓名
      var usertelReg = /^1[3456789][0-9]{9}$/gi; //手机号码
      var that = this;
      if (usernameReg.test(this.username)) {
        console.log(this.usertel);
        if (usertelReg.test(this.usertel)) {
          $.ajax({
            type: "POST",
            url: "http://api.duocai.jiaxunmedia.com/api/cdk",
            header: { "Content-Type": "application/x-www-form-urlencoded" },
            data: {
              name: this.username,
              tel: this.usertel,
              amount: this.money,
              dc_zc: this.asset,
              dc_hy: this.marital,
              class_id: 3
            },
            dataType: "json",
            success: function(data) {
              console.log(data);
              if (data.code == 200) {
                console.log(666);

                that.$message({
                  showClose: true,
                  message: "提交成功",
                  type: "success"
                });
                $(".image613").attr("src", data.data.qrCode);
                that.dialogFormVisible1 = true; //二维码弹框
                that.dialogFormVisible = false;
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

    jiekuan_box(e) {
      e.stopPropagation();
      this.dialogFormVisible = true;
    },
    tuijian(id) {
      // this.$router.push({
      //   name: "loansDetail",
      //   params: { id: id }
      // });
      this.$http
        .get("http://api.duocai.jiaxunmedia.com/api/product/Productinfo?", {
          params: {
            pid: id
          }
        })
        .then(res => {
          this.list = res.data.data.list;
          console.log(res.data.data.list);
          // this.list1 = res.data.data.recommend;
        });
    },
    getys(obj) {
      console.log(obj.ys);
      let arr = JSON.parse(JSON.stringify(obj.ys));
      console.log(arr);
      return arr.slice(0, 2);
    }
  }
};
</script>
<style scoped>
.box {
  width: 100%;
}
.chenggong {
  background: url(../../assets/image/chenggong.png) no-repeat;
  width: 42px;
  height: 42px;
  display: block;
  background-size: 100%;
}
.box .banner {
  background: url(../../assets/image/banner3.png);
  width: 100%;
  height: 203px;
}
.w1200 > .mine {
  /* position: absolute;
    
  top: 90px; */
  transform: translateY(-100px);
}
.left_top {
  width: 910px;
  height: 152px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 21px 0px rgba(0, 0, 0, 0.08);
  border-radius: 6px;
  padding: 30px 30px 0;
  box-sizing: border-box;
}

/* top框 */
.btn {
  width: 165px;
}
.btn p {
  font-size: 14px;
  font-family: MicrosoftYaHei;
  font-weight: 400;

  margin: 20px 0 0 10px;
}
.btn span {
  color: rgba(243, 84, 84, 1);
}
.box .left .left_top {
  /* width: 885px; */
  height: 152px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 21px 0px rgba(0, 0, 0, 0.08);
  border-radius: 6px;
  margin-bottom: 32px;
  padding: 25px;
  box-sizing: border-box;
  position: relative;
}
.box .left .left_top img {
  margin-right: 12px;
}
.box .left .left_top .title h2 {
  font-size: 20px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  display: inline;
  line-height: 38px;
}
.box .left .left_top .title span {
  width: 126px;
  height: 14px;
  font-size: 14px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(128, 128, 128, 1);
}
.box .left .left_top .mine span {
  font-size: 14px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 33px;
  display: inline-block;
}

.box .left .left_top .mine span:nth-child(2n) {
  color: #f35454;
}
.box .left .left_top .entry span {
  width: 49px;
  height: 23px;
  border: 1px solid rgba(220, 220, 220, 1);
  border-radius: 6px;
  color: rgba(179, 179, 179, 1);
  padding: 3px;
  margin-top: 5px;
}
.box .left .left_top .entry span:nth-child(2) {
  margin-left: 10px;
}
.box .left .left_top button {
  width: 161px;
  height: 40px;
  background: rgba(243, 84, 84, 1);
  border-radius: 20px;
  border: none;
  color: #ffffff;
  position: absolute;
  top: 80px;
  right: 38px;
  outline: none;
  cursor: pointer;
}
/* 文本框 */
.left_text {
  width: 909px;
  height: 407px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 21px 0px rgba(0, 0, 0, 0.08);
  border-radius: 6px;
}

.left_text h3 {
  font-size: 16px;
  font-family: MicrosoftYaHei-Bold;
  font-weight: bold;
  color: rgba(39, 93, 205, 1);
  line-height: 50px;
  border-bottom: solid 1px rgba(230, 230, 230, 1);
  text-indent: 20px;
  box-sizing: border-box;
}
.text_content p ul li p {
  margin-top: 15px !important;
}
.left_text .text_content {
  padding: 23px;
  box-sizing: border-box;
}
/* .left_text .text_content h4 div {
  width: 5px;
  height: 5px;
  background: rgba(39, 93, 205, 1);
  border-radius: 50%;
} */
.left_text .text_content h4 {
  font-size: 16px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 50px;
}
.left_text .text_content p {
  font-size: 14px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(128, 128, 128, 1);
  line-height: 27px;
}

/* right框 */
.mine .right {
  width: 260px;
  height: 591px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 21px 0px rgba(0, 0, 0, 0.08);
  border-radius: 6px;
  margin-left: 30px;
  padding: 10px 20px;
  box-sizing: border-box;
}
.mine .right h2 {
  text-align: center;
  font-size: 18px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(128, 128, 128, 1);
  line-height: 49px;
}
.mine .right ul li {
  height: 136px;
  /* width: 260px; */
  padding: 13px 0 0 0;
  box-sizing: border-box;
  cursor: pointer;
}
.mine .right ul li img {
  margin-right: 10px;
}
.mine .right ul li h3 {
  font-size: 18px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 35px;
}
.mine .right ul li .content p {
  font-size: 14px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(128, 128, 128, 1);
  /* line-height: 49px; */
}
.mine .right ul li .list_bottom span {
  font-size: 14px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(128, 128, 128, 1);
  line-height: 25px;
}
.mine .right ul li .list_bottom span:nth-child(2n) {
  color: #f35454;
}
.mine .right ul li .border {
  width: 219px;
  height: 1px;
  background: rgba(230, 230, 230, 1);
  margin-top: 17px;
}
.mine .right ul li:nth-child(4) .border {
  height: 0;
}
/* 弹框 */
.dialog {
  text-align: center;
}
.dialog input {
  width: 80%;
  margin-left: 10%;
  height: 39px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(230, 230, 230, 1);
  border-radius: 6px;
  margin-bottom: 15px;
  padding-left: 12px;
  box-sizing: border-box;
}
.dialog input:last-child {
  margin-bottom: 0;
}
.dialog #btn_jk {
  width: 60%;
  height: 40px;
  background: rgba(243, 84, 84, 1);
  border-radius: 20px;
  color: rgba(255, 255, 255, 1);
  border: none;
  margin: auto;
  text-align: center;
  display: inline-block;
  margin-left: 20%;
}
.image613 {
  width: 163px;
  height: 163px;
}
</style>



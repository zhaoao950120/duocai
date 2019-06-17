<template>
  <div class="box">
    <div class="banner"></div>
    <div class="w1200">
      <div class="mine">
        <div class="left fl">
          <!-- 头部框 -->
          <div class="left_top">
            <div class="logo fl">
              <img src="../../assets/image/icon_daikuan.png" alt>
            </div>
            <div class="details fl">
              <div class="title">
                <h2>XX贷款</h2>
                <span style="margin-left:15px">超低利率，极速审批</span>
              </div>
              <div class="mine" style="margin-bottom: 10px;">
                <span>额度范围：</span>
                <span>3000-8000</span>
                <span style="margin-left: 15px;">借款期限：</span>
                <span>1-3个月</span>
              </div>
              <div class="entry">
                <span>放款快</span>
                <span>范围广</span>
              </div>
            </div>
            <div class="btn fr">
              <p>
                <span>9999人</span>申请成功
              </p>
              <button @click="jiekuan_box">立即借款</button>
            </div>
            <div class="clear"></div>
          </div>

          <!-- 文本框 -->
          <div class="left_text">
            <h3>基本信息</h3>
            <div class="text_content">
              <h4>申请条件</h4>
              <p>申请条件，申请条件申请条件申请条件申请条件</p>
              <h4>所需材料</h4>
              <p>所需材料，所需材料，所需材料，所需材料</p>
              <h4>审核说明</h4>
              <p>系统审核</p>
              <h4>平台介绍</h4>
              <p>新平台，下款稳</p>
            </div>
          </div>
        </div>
        <!-- 推荐产品 -->
        <div class="right fl">
          <h2>相关产品</h2>
          <ul>
            <li>
              <div class="list_top">
                <div class="image fl">
                  <img src="../../assets/image/douyin.jpg" alt>
                </div>
                <div class="content fl">
                  <h3>抖音贷款</h3>
                  <p>这里是slogan</p>
                </div>
                <div class="clear"></div>
              </div>
              <div class="list_bottom">
                <span>范围：</span>
                <span>3000-8000</span>
                <span>期限：</span>
                <span>1-3个月</span>
              </div>
              <div class="border"></div>
            </li>
            <li>
              <div class="list_top">
                <div class="image fl">
                  <img src="../../assets/image/douyin.jpg" alt>
                </div>
                <div class="content fl">
                  <h3>抖音贷款</h3>
                  <p>这里是slogan</p>
                </div>
                <div class="clear"></div>
              </div>
              <div class="list_bottom">
                <span>范围：</span>
                <span>3000-8000</span>
                <span>期限：</span>
                <span>1-3个月</span>
              </div>
              <div class="border"></div>
            </li>
            <li>
              <div class="list_top">
                <div class="image fl">
                  <img src="../../assets/image/douyin.jpg" alt>
                </div>
                <div class="content fl">
                  <h3>抖音贷款</h3>
                  <p>这里是slogan</p>
                </div>
                <div class="clear"></div>
              </div>
              <div class="list_bottom">
                <span>范围：</span>
                <span>3000-8000</span>
                <span>期限：</span>
                <span>1-3个月</span>
              </div>
              <div class="border"></div>
            </li>
            <li>
              <div class="list_top">
                <div class="image fl">
                  <img src="../../assets/image/douyin.jpg" alt>
                </div>
                <div class="content fl">
                  <h3>抖音贷款</h3>
                  <p>这里是slogan</p>
                </div>
                <div class="clear"></div>
              </div>
              <div class="list_bottom">
                <span>范围：</span>
                <span>3000-8000</span>
                <span>期限：</span>
                <span>1-3个月</span>
              </div>
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
        <p>二维码</p>
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
      marital1: ""
    };
  },
  created() {},
  methods: {
    // 借款提交1
    jiekuan1() {
      console.log(
        this.money,
        this.username,
        this.usertel,
        this.asset,
        this.marital
      );
      this.dialogFormVisible = false;
      this.dialogFormVisible1 = true;
      // this.$http
      //   .post("https://www.dc.com/api/getBanner?swiper=3&class_id=1", {
      //     params: {
      //       money: this.money,
      //       username:this.username,
      //       usertel:this.usertel,
      //       asset:this.asset,
      //       marital:this.marital
      //     }
      //   })
      //   .then(res => {
      //     this.list = res.data.data;
      //     console.log(res.data.data);
      //   });
    },

    jiekuan_box(e) {
      e.stopPropagation();
      this.dialogFormVisible = true;
    }
  }
};
</script>
<style scoped>
.box {
  width: 100%;
  height: 712px;
  position: relative;
}
.box .banner {
  background: url(../../assets/image/banner3.png);
  width: 100%;
  height: 203px;
}
.w1200 > .mine {
  position: absolute;
  top: 90px;
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

.left_text .text_content {
  padding-left: 28px;
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
  padding: 20px;
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
  margin-top: 20px;
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



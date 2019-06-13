<template>
  <div class="box">
    <div class="header"></div>
    <!-- 列表 -->
    <div class="content w1200">
      <ul class="list fl">
        <li>
          <div class="logo fl">
            <img src="../assets/image/icon_daikuan.png" alt>
          </div>
          <div class="details fl">
            <div class="title">
              <h2>XX贷款</h2>
              <span>超低利率，极速审批</span>
            </div>
            <div class="mine">
              <span>额度范围：</span>
              <span>3000-8000</span>
              <span>借款期限：</span>
              <span>1-3个月</span>
            </div>
            <div class="entry">
              <span>放款快</span>
              <span>范围广</span>
            </div>
          </div>
          <div class="btn fl">
            <el-button type="text" @click="dialogFormVisible = true">立即借款</el-button>
          </div>

          <div class="clear"></div>
        </li>
        <li>
          <div class="logo fl">
            <img src="../assets/image/icon_daikuan.png" alt>
          </div>
          <div class="details fl">
            <div class="title">
              <h2>XX贷款</h2>
              <span>超低利率，极速审批</span>
            </div>
            <div class="mine">
              <span>额度范围：</span>
              <span>3000-8000</span>
              <span>借款期限：</span>
              <span>1-3个月</span>
            </div>
            <div class="entry">
              <span>放款快</span>
              <span>范围广</span>
            </div>
          </div>
          <div class="btn fl">
            <button>立即借款</button>
          </div>
          <div class="clear"></div>
        </li>
        <li>
          <div class="logo fl">
            <img src="../assets/image/icon_daikuan.png" alt>
          </div>
          <div class="details fl">
            <div class="title">
              <h2>XX贷款</h2>
              <span>超低利率，极速审批</span>
            </div>
            <div class="mine">
              <span>额度范围：</span>
              <span>3000-8000</span>
              <span>借款期限：</span>
              <span>1-3个月</span>
            </div>
            <div class="entry">
              <span>放款快</span>
              <span>范围广</span>
            </div>
          </div>
          <div class="btn fl">
            <button>立即借款</button>
          </div>
          <div class="clear"></div>
        </li>
        <li>
          <div class="logo fl">
            <img src="../assets/image/icon_daikuan.png" alt>
          </div>
          <div class="details fl">
            <div class="title">
              <h2>XX贷款</h2>
              <span>超低利率，极速审批</span>
            </div>
            <div class="mine">
              <span>额度范围：</span>
              <span>3000-8000</span>
              <span>借款期限：</span>
              <span>1-3个月</span>
            </div>
            <div class="entry">
              <span>放款快</span>
              <span>范围广</span>
            </div>
          </div>
          <div class="btn fl">
            <button>立即借款</button>
          </div>
          <div class="clear"></div>
        </li>
        <li>
          <div class="logo fl">
            <img src="../assets/image/icon_daikuan.png" alt>
          </div>
          <div class="details fl">
            <div class="title">
              <h2>XX贷款</h2>
              <span>超低利率，极速审批</span>
            </div>
            <div class="mine">
              <span>额度范围：</span>
              <span>3000-8000</span>
              <span>借款期限：</span>
              <span>1-3个月</span>
            </div>
            <div class="entry">
              <span>放款快</span>
              <span>范围广</span>
            </div>
          </div>
          <div class="btn fl">
            <button>立即借款</button>
          </div>
          <div class="clear"></div>
        </li>
        <li>
          <div class="logo fl">
            <img src="../assets/image/icon_daikuan.png" alt>
          </div>
          <div class="details fl">
            <div class="title">
              <h2>XX贷款</h2>
              <span>超低利率，极速审批</span>
            </div>
            <div class="mine">
              <span>额度范围：</span>
              <span>3000-8000</span>
              <span>借款期限：</span>
              <span>1-3个月</span>
            </div>
            <div class="entry">
              <span>放款快</span>
              <span>范围广</span>
            </div>
          </div>
          <div class="btn fl">
            <button>立即借款</button>
          </div>
          <div class="clear"></div>
        </li>
        <li>
          <div class="logo fl">
            <img src="../assets/image/icon_daikuan.png" alt>
          </div>
          <div class="details fl">
            <div class="title">
              <h2>XX贷款</h2>
              <span>超低利率，极速审批</span>
            </div>
            <div class="mine">
              <span>额度范围：</span>
              <span>3000-8000</span>
              <span>借款期限：</span>
              <span>1-3个月</span>
            </div>
            <div class="entry">
              <span>放款快</span>
              <span>范围广</span>
            </div>
          </div>
          <div class="btn fl">
            <button>立即借款</button>
          </div>
          <div class="clear"></div>
        </li>
        <li>
          <div class="logo fl">
            <img src="../assets/image/icon_daikuan.png" alt>
          </div>
          <div class="details fl">
            <div class="title">
              <h2>XX贷款</h2>
              <span>超低利率，极速审批</span>
            </div>
            <div class="mine">
              <span>额度范围：</span>
              <span>3000-8000</span>
              <span>借款期限：</span>
              <span>1-3个月</span>
            </div>
            <div class="entry">
              <span>放款快</span>
              <span>范围广</span>
            </div>
          </div>
          <div class="btn fl">
            <button>立即借款</button>
          </div>
          <div class="clear"></div>
        </li>
      </ul>
      <!-- 表单 -->
      <form action class="fl">
        <h3>快速贷款</h3>
        <input type="text" placeholder="贷款金额（万元）" v-model="money1">
        <input type="text" placeholder="您的姓名" v-model="username1">
        <input type="text" placeholder="请输入您的联系方式" v-model="usertel1">
        <input type="text" placeholder="资产状况" v-model="asset1">
        <input type="text" placeholder="婚姻状况" v-model="marital1">
        <el-button @click="jiekuan">立即借款</el-button>
      </form>
      <div class="clear"></div>
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
      <input type="text" v-model="marital" placeholder="婚姻状况">
      <!-- </el-form> -->
      <!-- <button>立即借款</button> -->
      <el-button id="btn_jk" @click="jiekuan1">立即借款</el-button>
      <!-- <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>-->
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
    <bottom></bottom>
    <!-- 客服 -->
    <div class="livechat-girl animated">
      <img class="girl" src="../assets/image/en_3.png">
      <div
        class="livechat-hint rd-notice-tooltip rd-notice-type-success rd-notice-position-left single-line show_hint"
      >
        <div class="rd-notice-content">嘿，我来帮您！</div>
      </div>
      <div class="animated-circles">
        <div class="circle c-1"></div>
        <div class="circle c-2"></div>
        <div class="circle c-3"></div>
      </div>
    </div>
  </div>
</template>
<script>
import bottom from "@/components/bottom";

export default {
  components: {
    bottom
  },
  data() {
    return {
      list: [],
      dialogFormVisible: false,
      dialogFormVisible1: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
        center: "true"
      },
      formLabelWidth: "120px",
      money: "",
      username: "",
      usertel: "",
      asset: "",
      marital: "",
      money1: "",
      username1: "",
      usertel1: "",
      asset1: "",
      marital1: ""
    };
  },
  mounted() {},
  methods: {
    jiekuan() {
      this.dialogFormVisible1 = true;
      console.log(
        this.money1,
        this.username1,
        this.usertel1,
        this.asset1,
        this.marital1
      );
      // 贷款表单提交
      $.ajax({
        type: "POST",
        url: "http://www.dc.com/api/cdk",
        header: { "Content-Type": "application/x-www-form-urlencoded" },
        data: {
          name: this.username1,
          tel: this.usertel1,
          amount: this.money1,
          dc_zc: this.asset1,
          dc_hy: this.marital1,
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
    },
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
    }
    // detail() {
    //   // alert(11);
    //   this.$router.push({
    //     name: "loansDetail"
    //     // params: { goodsid: id }
    //   });
    // }
  }
};
</script>
<style scoped>
.box {
  position: relative;
}
.box .header {
  width: 100%;
  height: 759px;
  background: url(../assets/image/banner2.png);
}
.box .content {
  position: relative;
  top: -148px;
}
.box .content .list {
  /* overflow: hidden; */
}
.box .content .list li {
  width: 885px;
  height: 134px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 21px 0px rgba(0, 0, 0, 0.08);
  border-radius: 6px;
  margin-bottom: 15px;
  padding: 25px;
  box-sizing: border-box;
  position: relative;
  cursor: pointer;
}
.box .content .list li img {
  margin-right: 12px;
}
.box .content .list li .title h2 {
  font-size: 20px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  display: inline;
}
.box .content .list li .title span {
  width: 126px;
  height: 14px;
  font-size: 14px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(128, 128, 128, 1);
}
.box .content .list li .mine span {
  font-size: 14px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 25px;
}

.box .content .list li .mine span:nth-child(2n) {
  color: #f35454;
}
.box .content .list li .entry span {
  width: 49px;
  height: 23px;
  border: 1px solid rgba(220, 220, 220, 1);
  border-radius: 6px;
  color: rgba(179, 179, 179, 1);
}
.box .content .list li button {
  width: 161px;
  height: 40px;
  background: rgba(243, 84, 84, 1);
  border-radius: 20px;
  border: none;
  color: #ffffff;
  position: absolute;
  top: 45px;
  right: 38px;
}
.box .content form {
  width: 284px;
  height: 381px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 21px 0px rgba(0, 0, 0, 0.08);
  border-radius: 6px;
  margin-left: 30px;
  /* padding: 0 0 0 24px; */
  box-sizing: border-box;
  text-align: center;
}
.box .content form h3 {
  font-size: 16px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 50px;
}
.box .content form input {
  width: 241px;
  height: 39px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(230, 230, 230, 1);
  border-radius: 6px;
  margin-bottom: 15px;
  padding-left: 12px;
  box-sizing: border-box;
}
.box .content form button {
  width: 161px;
  height: 40px;
  background: rgba(243, 84, 84, 1);
  border-radius: 20px;
  color: rgba(255, 255, 255, 1);
  border: none;
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



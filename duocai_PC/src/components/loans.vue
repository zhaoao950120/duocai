<template>
  <div class="box">
    <!-- <div class="header"></div> -->
    <top></top>
    <!-- 列表 -->
    <div class="content w1200">
      <ul class="list fl">
        <li @click="detail(item.pid)" v-for="(item,index) in list" :key="index">
          <div class="logo fl">
            <img :src="item.logo" alt style="width:80px;height:80px">
          </div>
          <div class="details fl">
            <div class="title">
              <h2>{{item.title}}</h2>
              <span>{{item.slogan}}</span>
            </div>
            <div class="mine">
              <span>额度范围：</span>
              <span>{{item.quota_amount}}</span>
              <span>借款期限：</span>
              <span>{{item.ew}}</span>
            </div>
            <div class="entry">
              <span
                v-for="(item1,index) in item.ys.slice(0,2)"
                :key="index"
                style="margin:0 5px"
              >{{item1}}</span>
              <!-- <span>范围广</span> -->
            </div>
          </div>
          <div class="btn fl">
            <el-button type="text" @click.stop.prevent="jiekuan_box(item.pid)">立即借款</el-button>
          </div>

          <div class="clear"></div>
        </li>
      </ul>
      <!-- 客服 -->
      <div
        id="ec--cs-wrapper"
        style="z-index: 99999; position: fixed; top: 452.8px; right: 23.44px; width: 180px;"
      >
        <div id="ec--cs-root">
          <div class="cs-list default">
            <div class="list-main">
              <div class="title" style="position:relative;background:#2580e6;">
                <div class="title-main">
                  <span>在线客服</span>
                  <a class="icon icon-close-small close" href="javascript:;" @click="close"></a>
                </div>
                <div class="title-bg"></div>
              </div>
              <ul class="main" style="max-height: 860px;">
                <li class="group" id="group1">
                  <p class="list" style="display: block;margin-top:0">
                    <a
                      class="cs-item"
                      target="_blank"
                      href="http://wpa.qq.com/msgrd?v=3&uin=3619369570&site=qq&menu=yes"
                    >
                      <i class="icon icon-qq1-2 cs-icon-left"></i>
                      <span class="cs-name" title="亿媒界-橙橙">加客服领红包</span>
                      <i class="icon icon-cs1-2 cs-icon-right female"></i>
                    </a>
                    <!-- <a
                      class="cs-item"
                      target="_blank"
                      href="http://wpa.qq.com/msgrd?v=3&uin=1834331906&site=qq&menu=yes"
                    >
                      <i class="icon icon-qq1-2 cs-icon-left"></i>
                      <span class="cs-name" title="亿媒界-九九">中亿嘉讯-九九</span>
                      <i class="icon icon-cs1-2 cs-icon-right female"></i>
                    </a>-->
                  </p>
                </li>
                <li style="text-align:center">
                  <p>扫码加微信</p>
                  <img src="../assets/image/kefu1.jpg" alt style="width:150px;height:150px">
                  <p>wxid_qppnl0dz1yso22</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- 表单 -->
      <form action class="fl">
        <h3>快速贷款1</h3>
        <input type="text" placeholder="贷款金额（万元）" v-model="money1">
        <input type="text" placeholder="您的姓名" v-model="username1">
        <input type="text" placeholder="请输入您的联系方式" v-model="usertel1">
        <input type="text" placeholder="资产状况" v-model="asset1">
        <!-- <input type="text" placeholder="婚姻状况" v-model="marital1"> -->
        <el-select v-model="marital1" placeholder="请选择" style="width:241px;margin-bottom:10px">
          <el-option value="未婚"></el-option>
          <el-option value="已婚"></el-option>
          <el-option value="离异"></el-option>
        </el-select>
        <el-button @click="jiekuan">立即借款</el-button>
      </form>
      <div class="clear"></div>
      <!-- 分页 -->
      <div class="fenye" style="width:100%;text-align:center;margin-top:20px">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="total"
          @current-change="handleCurrentChange"
          :page-size="pageSize"
        ></el-pagination>
      </div>
    </div>
    <!-- 借款弹框1 -->
    <el-dialog
      title="快速贷款2"
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
        v-model="marital"
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

    <!-- 客服 -->
    <!-- <div class="livechat-girl animated">
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
    </div>-->
    <bottom></bottom>
    <!-- <div class="div" style="height:65px"></div> -->
  </div>
</template>
<script>
import bottom from "@/components/bottom";
import top from "@/components/loans/top";

export default {
  components: {
    bottom,
    top
  },
  data() {
    return {
      list: [],
      dialogFormVisible: false,
      dialogFormVisible1: false,
      click_id: "",
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
      marital1: "",
      // 分页

      // 总数据
      tableData: [],

      // 默认显示第几页
      currentPage: 1,

      // 总条数，根据接口获取数据长度(注意：这里不能为空)
      total: 1,

      // 默认每页显示的条数（可修改）
      pageSize: 10,
      ys: []
    };
  },
  mounted() {
    this.$http
      .get("http://api.duocai.jiaxunmedia.com/api/product?class_id=3", {
        params: {
          pageIndex: this.currentPage
        }
      })
      .then(res => {
        this.list = res.data.data.list;
        this.total = res.data.data.dataCount;
        console.log(this.list[0].ys);
      });
  },
  methods: {
    jiekuan() {
      if (this.marital1 == "未婚") {
        this.marital1 = 0;
      }
      if (this.marital1 == "已婚") {
        this.marital1 = 1;
      }
      if (this.marital1 == "离异") {
        this.marital1 = 2;
      }
      console.log(
        this.money1,
        this.username1,
        this.usertel1,
        this.asset1,
        this.marital1
      );
      // 贷款表单提交
      var usernameReg = /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/; //姓名
      var usertelReg = /^1[3456789][0-9]{9}$/gi; //手机号码
      var that = this;
      if (usernameReg.test(this.username1)) {
        console.log(this.usertel);
        if (usertelReg.test(this.usertel1)) {
          $.ajax({
            type: "POST",
            url: "http://api.duocai.jiaxunmedia.com/api/cdk",
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
              if (data.code == 200) {
                console.log(666);

                that.$message({
                  showClose: true,
                  message: "提交成功",
                  type: "success"
                });
                $(".image613").attr("src", data.data.qrCode);
                that.dialogFormVisible1 = true; //二维码弹框
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
    // 借款提交1
    jiekuan1() {
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
        this.asset,
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
              class_id: 3,
              pid: this.click_id
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
                that.dialogFormVisible = false;
                that.dialogFormVisible1 = true; //二维码弹框
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
    detail(id) {
      console.log(id);
      // alert(11);
      this.$router.push({
        name: "loansDetail",
        params: { id: id }
      });
    },
    jiekuan_box(id) {
      // e.stopPropagation();
      this.dialogFormVisible = true;
      this.click_id = id;
    },
    // 分页
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
      this.$http
        .get("http://api.duocai.jiaxunmedia.com/api/product?class_id=3", {
          params: {
            pageIndex: this.currentPage
          }
        })
        .then(res => {
          this.list = res.data.data.list;
          this.total = res.data.data.dataCount;
        });
    },
    close() {
      $("#ec--cs-wrapper").css("display", "none");
    }
  }
};
</script>

<style scoped>
.box {
  position: relative;
}
.chenggong {
  background: url(../assets/image/chenggong.png) no-repeat;
  width: 42px;
  height: 42px;
  display: block;
  background-size: 100%;
}
.box .header {
  width: 100%;
  height: 759px;
  background: url(../assets/image/banner2.png);
}
.box .content {
  position: relative;
  top: -38px;
  z-index: 100;
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
.box .content .list li:hover {
  transition: 0.3s;
  transform: translateY(-3px);
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
  margin-left: 15px;
}
.box .content .list li .mine {
  margin-bottom: 5px;
}
.box .content .list li .mine span {
  font-size: 14px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 35px;
}

.box .content .list li .mine span:nth-child(2n) {
  color: #f35454;
}
.box .content .list li .mine span:nth-child(3) {
  margin-left: 15px;
}
.box .content .list li .entry span {
  width: 49px;
  height: 23px;
  border: 1px solid rgba(220, 220, 220, 1);
  border-radius: 6px;
  color: rgba(179, 179, 179, 1);
  padding: 5px;
  margin-top: 5px;
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
  margin-top: 6px;
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
/* 客服 */
@charset "UTF-8";
#ec--cs-root {
  background: transparent;
  width: 260px;
  height: auto;
}
#ec--cs-root .unread-num {
  position: absolute;
  min-width: 16px;
  width: auto;
  height: 16px;
  line-height: 16px;
  padding: 0 4px;
  border-radius: 8px;
  background: #ff5946;
  color: #fff;
  font-weight: normal;
  font-size: 12px;
  box-sizing: border-box;
  margin: 0;
}
#ec--cs-root .cs-list {
  display: inline-block;
  vertical-align: bottom;
  min-width: 170px;
  max-width: 260px;
  margin: 0;
  position: relative;
  border: none;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}
#ec--cs-root .cs-list.color .list-main {
  position: relative;
}
#ec--cs-root .cs-list.color .main .group .group-name {
  color: #fff;
}
#ec--cs-root .cs-list.color .main .group .group-name .ecIcon {
  font-size: 12px;
}
#ec--cs-root .cs-list.color .main .group .list .cs-item {
  color: #fff;
}
#ec--cs-root .cs-list.color .main .group .list .cs-item:hover {
  background: rgba(255, 255, 255, 0.2);
}
#ec--cs-root .cs-list.color .main .group .list .cs-item.selected {
  background: rgba(255, 255, 255, 0.2);
}
#ec--cs-root .cs-list.color .main .group .list .cs-item .unread-num {
  left: 18px;
}
#ec--cs-root .cs-list.color .chat-tools.inlist.vertical li a {
  color: #fff;
}
#ec--cs-root .cs-list.color .chat-tools.inlist.vertical li:hover {
  background: rgba(255, 255, 255, 0.2);
}
#ec--cs-root .cs-list.color .title,
#ec--cs-root .cs-list.color .main,
#ec--cs-root .cs-list.color .tools-wrapper {
  position: relative;
  z-index: 1;
}
#ec--cs-root .cs-list.color .cloud {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 78px;
  background: url(data:image/png;base64,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)
    100% no-repeat;
  opacity: 0.25;
  filter: alpha(opacity=25);
}
#ec--cs-root .cs-list.color .icon-cs1-2 {
  width: 29px;
  height: 29px;
}
#ec--cs-root .cs-list.color .icon-cs1-2.male {
  background: url(data:image/png;base64,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)
    center no-repeat;
}
#ec--cs-root .cs-list.color .icon-cs1-2.female {
  background: url(data:image/png;base64,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)
    center no-repeat;
}
#ec--cs-root .cs-list.border .list-main {
  border: 5px solid;
  border-radius: 5px;
}
#ec--cs-root .cs-list.border .list-main .title {
  border-radius: 0;
}
#ec--cs-root .cs-list.mini {
  width: 56px;
  min-width: auto;
  min-height: auto;
}
#ec--cs-root .cs-list .list-main {
  background: #fff;
  border-radius: 2px;
}
#ec--cs-root .cs-list .list-main .offline .cs-name {
  opacity: 0.3;
  filter: alpha(opacity=30);
}
#ec--cs-root .cs-list.theme-custom .list-main {
  background: none;
}
#ec--cs-root
  .cs-list.theme-custom
  .main
  .group
  .list
  .cs-item.offline
  .cs-name {
  opacity: 0.3;
  filter: alpha(opacity=30);
}
#ec--cs-root .cs-list.theme-custom .main .group .group-name {
  color: #2580e6;
}
#ec--cs-root .cs-list.theme-custom .main .group .group-name .group-arrow {
  color: #2580e6;
  border-left: 4px solid #2580e6;
}
#ec--cs-root .cs-list.theme-custom .main .group .list .cs-item .cs-name {
  color: #2d2b31;
}
#ec--cs-root .cs-list.theme-custom .main .group .list .cs-item:before,
#ec--cs-root .cs-list.theme-custom .main .group .list .cs-item i {
  color: #2d2b31;
}
#ec--cs-root .cs-list.autohide {
  border: none;
  box-shadow: none;
}
#ec--cs-root .cs-list.theme-custom .main .group .list .cs-item:hover {
  background: rgba(0, 0, 0, 0.2);
}
#ec--cs-root .cs-list .ie-background-fix {
  display: none;
}
#ec--cs-root .cs-list .title {
  width: auto;
  height: 38px;
  line-height: 38px;
  padding-left: 10px;
  background-color: #2580e6;
  border-bottom: none;
  border-radius: 2px 2px 0 0;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
}
#ec--cs-root .cs-list .title .title-main {
  position: relative;
  z-index: 1;
}
#ec--cs-root .cs-list .title .title-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
}
#ec--cs-root .cs-list .title .close {
  position: absolute;
  top: 12px;
  right: 12px;
  font-size: 16px;
  font-weight: normal;
  color: #fff;
}
#ec--cs-root .cs-list.border .title {
  color: #262626;
}
#ec--cs-root .cs-list.border .title .close {
  color: #262626;
}
#ec--cs-root .cs-list .main {
  overflow-y: auto;
  padding: 10px 6px;
  border-radius: 0 0 2px 2px;
  background-size: cover;
  /* min-height: 160px; */
}
#ec--cs-root .cs-list .main .group {
  line-height: 24px;
  width: 186px;
}
#ec--cs-root .cs-list .main .group .group-name {
  max-width: 232px;
  position: relative;
  margin-left: 10px;
  display: block;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #484848;
}
#ec--cs-root .cs-list .main .group .group-name .icon {
  font-size: 10px;
  margin-right: 6px;
  -webkit-transform: scale(0.7);
  transition: 0.5s;
}
#ec--cs-root .cs-list .main .group .list {
  overflow: hidden;
}
#ec--cs-root .cs-list .main .group .list .cs-item {
  position: relative;
  display: block;
  width: 100%;
  height: 38px;
  padding-left: 26px;
  margin-bottom: 4px;
}
#ec--cs-root .cs-list .main .group .list .cs-item:hover {
  background: rgba(0, 0, 0, 0.2);
}
#ec--cs-root .cs-list .main .group .list .cs-item .cs-name {
  display: inline-block;
  width: auto;
  height: 38px;
  line-height: 38px;
  max-width: 140px;
  min-width: 60px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0 8px;
  color: #484848;
}
#ec--cs-root .cs-list .main .group .list .cs-item .unread-num {
  font-size: 10px;
  -webkit-transform: scale(0.8);
  left: 8px;
  top: -5px;
}
#ec--cs-root .cs-list .main .group .list .cs-item i {
  display: inline-block;
  top: 4.5px;
  font-family: "iconfont" !important;
  vertical-align: top;
}
#ec--cs-root .cs-list .main .group .list .cs-item i.cs-icon-right {
  position: absolute;
  right: 30px;
}
#ec--cs-root .cs-list .main .group .list .cs-item.offline:before,
#ec--cs-root .cs-list .main .group .list .cs-item.offline i.icon-cs1-2 {
  opacity: 0.3;
  filter: alpha(opacity=30);
}
#ec--cs-root .cs-list .main .group .list .cs-item.selected {
  background: rgba(0, 0, 0, 0.2);
  font-weight: 600;
}
#ec--cs-root .icon-customer-service {
  display: inline-block;
  vertical-align: middle;
  font-size: 38px;
  color: #fff;
}
#ec--cs-root .icon-cs1-2 {
  position: relative;
  display: inline-block;
  vertical-align: text-bottom;
  width: 20px;
  height: 25px;
}
#ec--cs-root .icon-cs1-2.male {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAcCAYAAACUJBTQAAAAAXNSR0IArs4c6QAABENJREFUSA3dVVtMHFUY/s7swu7OsixUINBCKsillBaF2oJtk9aEhrRq0mhsjBqjiSHaB5998GFNY30gvpjUNtG0vHgraTQhaorRKJiuBVG5VIrU5dayhRURGHf2MnOO52wzm9lhdtvEN0+ye/7L9/3fuQ/wf2nkXibS0dHh31ATb4ChjQGNAOMdmZTAfigs8Jzu7+//J1edu4rs33/oEZ2xXga2zbYQQcjhJMeDAwPjtnkelLIlRLyrqytPA+3JKiBADDU0yd5njGUdcE6RsYmpl3mRelErV+Nr19Z+4NGnsmFyilDGDmcjbooTmhXr3AQ2BYr83oNUp7RtT5M2uxCWpkM3M/Cyx8VamuuS4fCKtLquHDJRM8wMUkaGO9ForLQ7cFJ6aFddvsjNzIUxOT0HJaqivHQL9rU0Erc7Pz+qxvHcK2/eZ+Ubvq3IycCZAqyuN0bCv0S4wFYDXL29AuJnbXxGaKirnqipf3tvWbF3KhB4bd2Msd2TCnnLeU2nQxVVO6kZnMsuKqkkguMrqfnYirMV4Ue2UgBllydmJWTz3S5v9E6ObbdibEU4KHWD3bKcMW0r2ex7vfKa8BmIYo4L23ZPaCJxCgTxvU1bhzmm1Uqy8+NRdSkeV+Pra6unrPmst1QA2cp4VUzX560kqz89G2Gvn75E4HC0f3npzFVrPqeIAKvLo4Nc7qBBnLi+wI/xLRT6fNAoxdWREOZurcZVNXas77Nz3xo4c2+7XGYA8vECSeJX/u4WivgnnwcRHJlG64O1aKjdhseONCvRaLLt2PETv2XwTM5dZyKwschog5aMf+Nw5qdeYk3T4XQ6QGky5PDInW5/0w1TzU1mttOVBgYCTOruW3lyRXWX/fXnPJTVRcQ2liDslahc3N0beUJg0gQbI2fy6AXWPpC8MvX1F4NvKbo/L+ndDTVJoCaApLwbawm5uP+r794ZSAz+LrA29VMhW5GnLzJP53n2nq7RK5qyVMtASe/lcUgOD/vj5wGERoOQnB7We3kMoDrRlNsPCKzgCK5VbJNIZw9r2lAwzG/Vq0SSiLO0VhRCcHiSlZYUk5sLM3ypliHsH3+a4p8SBkdxNQRWcARX1DALZYgc7WEHiI4hfpLSIP32ZAof3VgjI9fm8XBjJZp3VGFobBaqsp46OHTpDkYABVfUELUMoQwRRnGWD002kqLPqzsMePyp0LmPvqcV/Ikqcyn44CK/PrwRlw95DUdStvEnaohahp8pAlQZCaN3FJTBve95TvNjPjRHFhaXsbAYxlxoHnD74OI5R2G5AU/3XChdy3oZ3+WoZ/ka1HBQegCSrxyu1mcQH/mUnB3bpTDJwZjb7XPtOQHJn/7cpAQ4l/J3b4bzPzQUbS/jixeYexnYwUE7deB+DvJx26dFbhTlTfe1UEaoXv/4KD8Uf/M9UPhoNviQZgnDtTLges9L5J4/EcZA/nP/L7dPrLEOLpZVAAAAAElFTkSuQmCC)
    center no-repeat;
}
#ec--cs-root .icon-cs1-2.female {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAcCAYAAACUJBTQAAAAAXNSR0IArs4c6QAABKdJREFUSA3dVmtMHFUU/u7s7MJ2oTx2EWyWKhiWIoVWfAB1Ma34wKhotNSYFozRpvwxQkzUojXE2MZoYjDaaNLYmqYx/rCxWltsgkBRxNZiqtVCwVYWumF5LlCWhdmZe72zMMs+RmziP28ye8983znn495z5l6A/8sg17MQp7PcIStSLSXkVoDlEYZZEHKBgHTGm8hH7e3t8kp5VhRhjJFi5+Y6QuleBph1ExFyzkgMOzo72y7p8hxcUaTk7nu2U8qO/FNwCCe4bE1KyG9ubl4IYWGGIcyOMEurqsx0xneMg0kRhP5Lql+S/e4h1/d6tKAHqhh1j24FY5lLPC8Hr8RKg7KXGxsbdfPpgsFchBVqOR3ZmcJr9dXEbI7TIJ2ZJZ1qbc3XISDqgSrGKFuvcTVPVaCspBC3F+biux+60XNpAN7pWQyPTmBk1AtKadCVyaSEGxe0OG2OKXx9/XtmwWT61OXqeWzQ9Vtc9dYH8Hz1o5p/zOzhQgc/O4FTbT8jK/u2EbvdcdqWnFK7e/d2r+YcsxLRbMojRNyWaluDDKuyooCaJOMGKxrqahAIUEz609INoriNmMwnOHVYE4mpiUwMIeFHHtyk+f3rfP/mO0I+/PuKD71wI0aEMWGIEMhUUZgoxtDhsRG2IBDejFRWY3knngknY7I07ds1vDDrX9v7R4dvYmwq3HdFu6v7L3g8HtE7Orbu1Zee+DXcObQ14eDcXM+4JC1Yev8cRGU4oWOPjM2g42w/fjrvxvhof8vxo/svR7vpivT29mZwR9LRdR7P7XgY1pTlj/7AkVa0/XgRFksCRKMR8wsy8nMyMDc9ABqQEqIF1HddkUCA3aiS12b9ePeDz7Hv9Z0QhMWdLchbC0mSkZdrx/rcTP4HrELDWwcwc009mIlNjYseMd+J6lC8qexJRvGF5pznuBlv79mJ5KTVGhScJ71TaNj7CXr6BpZw4jvTdTox+gjSXQlXLgo/qEZ4A0gzV+H1x0E0LXanLM1jeGQcbs9kmDCzOJ33OjgQcezHdJcawRjuCkaKcXi69hV8c/xLpNg3QqEKFvwzwYfypeZu3IJvT36Fymfq+MYvnmsBSouCsWE/MUd9aWmVmV98TUZ7cVziQ+9gIrEIziwCW2oa5FXZmJ6TWMBoJak3lWF1cjoGpwgOu/iFmXUf6PQg2Ix72n3V9XWYRuyl5azc9aKxoKrJlF0e8rPzUrzPe9li4vtw8RdJFI3CLY4CccoPvMDTjflCrpCutMkknq1r3VMeauWIwlccYncyRW4BESMrzHNsyQY288fb/sa82mjp5W/GH/0dODu0LLBssQmDkVScrCHnVCyy8Az79QRUx7YrQNcgUAWbAQrwcQvgkyiYElDp4BCW6sI/Masi40MOqkd/lAgQukOCUVE/8/x/kinRRigEMsdzM0XBrKdfvXxgMMbDkqE21uLg92iBZkeshLdtHyc2aKTePMWsRGZicJsF0QhLeg4UaQ5Gc+QOMxLMFUwRURMVefwQS5YFOBSGHKbwB1jD28PCHS2ctuST7jQFIutlG8b5u4/zPs7NgmGYGNBvIOgXKfqOPUuu/3RVhf/r+BtMF6Sc2mZ9rwAAAABJRU5ErkJggg==)
    center no-repeat;
}
#ec--cs-root .icon-cs1-2 .icon-cell-phone {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 8px;
  height: 12px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAMCAYAAABfnvydAAAAAXNSR0IArs4c6QAAAEZJREFUGBljVCi7sZWB4b8XA1bAuI0FJHm4SgOrtG3bDS8mrDJIgsNDAaNC2fX/SL7CYKJ4836nBgMIIwOgCbiDmpGRYSsAdTQSfTtw7sYAAAAASUVORK5CYII=)
    center no-repeat;
}
#ec--cs-root .icon-qq1-2 {
  position: relative;
  display: inline-block;
  vertical-align: text-bottom;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAZCAYAAAAxFw7TAAAAAXNSR0IArs4c6QAAA+NJREFUOBHNVEtMXFUY/u5z5g4zzAOmw0gfrooO1RopBLUtRuOiGY0PsBAXatzUBjUxaeLGpWm6si5sfDQxxoWxsRHd2HRg0RJhoZZYECnGVjqALe0MM4UZeof7OP7nTu/ghZpq4sI/+e5/zv/4zvnPf84F/mOR7sAXkmX5sVAo9CzFdViWFSJ9jbB6h7yNbkmSXiTrBQJbh0ma9xD+lbxK0euJ/jq3yH/gnzLeR4FlTtjb28sGBwdZIpFgyWSSDQ0NOTbuEwSBx6QIHhE9s+rkIKkAH/b392NmZgapVApdXV1QVRXpdBqiKIIxFiDNYz2ynjBI3n1uxJWrVxGoC2JpuYz8YhH33JuCruuczAmxbZvHOou7Oeu73EqOQwRaSMC5sfNIxusxevYUri9kUS6V8OHxT1Eo5N18voEvCDnXILgDrqmz3XQ1TgqCiINpDX17TET8FUTDGp0aQ2FJR1H34fOzCj46VXZ3+gSlDrk8npKJzM8dvKSJrIkrRQkN0QDiYWBTWEQsEsAfBZl8hkvGw8m7JvLaEDieTMTP6RX8SPh53ETfuIVovYhEjJ+ZgIVFvkuGKNW1S9PQofmwM+BrPjC3UKOplcza2pSlYv6MXxQeLtqUaNnI2RYWTRvLVrUJIUlATBbRKEmIUqejooAVZg2HN2cfF87A5Kw1wnebGjr2+rSRrbIko1KBoKjO9RCpfMF0Yp0yqbOwCOQE/D5ctmzju9LNzjdzuTFOWCv50LVCT0goyq2hID5+43U0ff0VzKVlIBiEuGULjwWoTDEag2/bVszRgq8cPoKplRWlZLE+8jqEThx9eDP4G2X+cJj9NjHB8p272MJdCZbrfobZhlEFdcuVS/PzTK2rc58jz3Ua6nZ5BxlaCNAUBQqdHVu5CbrFgGFAkOUqeMAtUekoNLLfku2knXzX8iAZ+CUvGpVKxKBjVJ7rBi5dhNzK19ooFTpngxYjKRCiBB54ngD+Rm+Q+p7wNj16NjI66lRmu/XdRg8PD/MfBC+5n/BDJBKZJs2fmCMf0PclwgnKrWROn3aMtSvgzLyfTCbDu14i6wDhZXoUn3gj1mbHEk3NbHZ29jb7qpouZ7MsvinJd/feWtrfjJ5/qD7WslmZbu/cw6Yu/LqBdHJqmrW1P8K2N8u/pHeH+dl5xFOV/k2oxScan5UrwgOHT6yqmclGtO9+EqkdO+n3zeg5/oSxkW+x7/4c3tqvmgFVHF+1xRf8Ty8758eZPYSFgcjdgfC2I4rIegV9Htf1Brw/8PvRY18aF+lt4J3X4o/u39vQ0+jLw1pV5kzzxlEmqie1pwpZzzb/15M/Af7O1dGOIu43AAAAAElFTkSuQmCC)
    center no-repeat;
  width: 20px;
  height: 25px;
}
#ec--cs-root .cs-btn {
  display: inline-block;
  vertical-align: top;
  -webkit-tap-highlight-color: transparent;
}
#ec--cs-root .cs-btn .tools-wrapper {
  background: none;
}
#ec--cs-root .cs-shape-wrapper .unread-num {
  left: -7px;
  top: -5px;
}
#ec--cs-root .cs-shape-wrapper .unread-num.top {
  top: -10px;
  bottom: auto;
}
#ec--cs-root .cs-shape-wrapper .unread-num.bottom {
  top: auto;
  bottom: -10px;
}
#ec--cs-root .cs-shape-wrapper .unread-num.left {
  left: -14px;
  right: auto;
}
#ec--cs-root .cs-shape-wrapper .unread-num.right {
  left: auto;
  right: -14px;
}
#ec--cs-root .cs-shape-wrapper .cs-shape {
  display: block;
  text-align: center;
  font-size: 16px;
  color: #fff;
  box-sizing: border-box;
  position: relative;
}
#ec--cs-root .cs-shape-wrapper .cs-shape .shape-ele {
  border-radius: 5px;
  width: 100%;
  height: 100%;
}
#ec--cs-root .cs-shape-wrapper .cs-shape.shape-square {
  width: 66px;
  height: 66px;
}
#ec--cs-root
  .cs-shape-wrapper
  .cs-shape.shape-square
  .icon.icon-customer-service {
  margin-top: 13px;
}
#ec--cs-root .cs-shape-wrapper .cs-shape.shape-rect-h {
  text-align: left;
  width: 178px;
  height: 56px;
  line-height: 56px;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
}
#ec--cs-root .cs-shape-wrapper .cs-shape.shape-rect-h .icon-customer-service {
  margin-left: 15px;
}
#ec--cs-root .cs-shape-wrapper .cs-shape.shape-rect-h .zh {
  letter-spacing: 6px;
}
#ec--cs-root .cs-shape-wrapper .cs-shape.shape-rect-v {
  width: 56px;
  height: 165px;
}
#ec--cs-root .cs-shape-wrapper .cs-shape.shape-rect-v .text {
  -webkit-writing-mode: tb-rl;
  -ms-writing-mode: tb-rl;
  writing-mode: tb-rl;
  -webkit-writing-mode: vertical-rl;
  writing-mode: vertical-rl;
  line-height: 56px;
  margin-top: 10px;
  text-align: justify;
}
#ec--cs-root .cs-shape-wrapper .cs-shape.shape-rect-v .text.zh {
  letter-spacing: 6px;
}
#ec--cs-root .cs-shape-wrapper .cs-shape.shape-rect-v .text.en {
  margin-top: 4px;
}
#ec--cs-root .cs-shape-wrapper .cs-shape.shape-rect-v .text p {
  height: 105px;
}
#ec--cs-root .cs-shape-wrapper .cs-shape.shape-rect-v .icon-customer-service {
  margin-top: 8px;
}
#ec--cs-root .cs-shape-wrapper .cs-shape.shape-circle {
  width: 66px;
  height: 66px;
  line-height: 66px;
  margin: 0 auto;
}
#ec--cs-root .cs-shape-wrapper .cs-shape.shape-circle .shape-ele {
  border-radius: 50%;
}
#ec--cs-root .cs-shape-wrapper .cs-shape.shape-circle .icon-customer-service {
  position: relative;
  top: -1px;
}
#ec--cs-root .cs-shape-wrapper .cs-shape.shape-circle .unread-num {
  top: 4px;
  left: 2px;
  right: auto;
}
#ec--cs-root .cs-shape-wrapper .cs-shape.shape-custom {
  width: auto;
  height: auto;
  border-radius: 0px;
  text-align: left;
}
#ec--cs-root .cs-shape-wrapper.pc-cs-shape-wrapper .cs-shape.shape-square,
#ec--cs-root .cs-shape-wrapper.pc-cs-shape-wrapper .cs-shape.shape-rect-h,
#ec--cs-root .cs-shape-wrapper.pc-cs-shape-wrapper .cs-shape.shape-rect-v,
#ec--cs-root .cs-shape-wrapper.pc-cs-shape-wrapper .cs-shape.shape-custom {
  margin: 0;
}
#ec--cs-root .top {
  margin-top: 5px;
  margin-bottom: 0;
}
#ec--cs-root .bottom {
  margin-top: 0;
  margin-bottom: 5px;
}
#ec--cs-root .left {
  margin-left: 7px;
  margin-right: 0;
}
#ec--cs-root .right {
  margin-left: 0;
  margin-right: 7px;
}
#ec--cs-root .tools-wrapper {
  border-radius: 0 0 2px 2px;
}
#ec--cs-root .chat-tools li a {
  display: block;
  height: 100%;
}
#ec--cs-root .chat-tools li a img {
  display: block;
  width: 100%;
  height: 100%;
}
#ec--cs-root .chat-tools.inlist {
  margin: 0 13px;
  padding: 0 7px 10px;
  border-top: 1px dashed #eee;
}
#ec--cs-root .chat-tools.inlist.vertical li {
  margin-top: 10px;
  height: 30px;
  line-height: 30px;
}
#ec--cs-root .chat-tools.inlist.vertical li a {
  position: relative;
  padding-left: 40px;
}
#ec--cs-root .chat-tools.inlist.vertical li a img {
  width: 30px;
  height: 30px;
  position: absolute;
  left: 0;
  top: 0;
}
#ec--cs-root .chat-tools.inlist.vertical li:hover {
  background: rgba(0, 0, 0, 0.2);
}
#ec--cs-root .chat-tools.inlist.horizen {
  overflow: hidden;
  padding-top: 10px;
}
#ec--cs-root .chat-tools.inlist.horizen li {
  float: left;
  width: 30px;
  height: 30px;
  margin-right: 15px;
}
#ec--cs-root .chat-tools.inlist.horizen li .name {
  display: none;
}
#ec--cs-root .chat-tools.inbtn li {
  margin-top: 14px;
}
#ec--cs-root .chat-tools.inbtn li .name {
  display: none;
}
#ec--cs-root .chat-tools.inbtn.shape-square li {
  width: 66px;
  height: 66px;
}
#ec--cs-root .chat-tools.inbtn.shape-rect-h li {
  width: 178px;
  height: 56px;
}
#ec--cs-root .chat-tools.inbtn.shape-rect-v li {
  width: 56px;
  height: 56px;
}
#ec--cs-root .chat-tools.inbtn.shape-circle li {
  width: 66px;
  height: 66px;
}
.preview {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
}
.preview #ec--cs-root {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
}
.preview #ec--cs-root .cs-list {
  box-shadow: 0 0 10px rgba(48, 50, 50, 0.2);
}
.preview #ec--cs-root .cs-list.mini {
  box-shadow: none;
}
@font-face {
  font-family: "iconfont";
  src: url("//at.alicdn.com/t/font_256629_8gim64zt8fpkqpvi.eot?t=1519612452000");
  /* IE9*/
  src: url("//at.alicdn.com/t/font_256629_8gim64zt8fpkqpvi.eot?t=1519612452000#iefix")
      format("embedded-opentype"),
    /* IE6-IE8 */
      url("data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAABksAAsAAAAAJJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADMAAABCsP6z7U9TLzIAAAE8AAAAQwAAAFZW9kkvY21hcAAAAYAAAAFnAAAD5iq8pBtnbHlmAAAC6AAAEt4AABmESVGswGhlYWQAABXIAAAAMQAAADYRo2pCaGhlYQAAFfwAAAAgAAAAJAjwBN5obXR4AAAWHAAAACQAAACcnxP//GxvY2EAABZAAAAAUAAAAFB6yoCEbWF4cAAAFpAAAAAfAAAAIAE4AJFuYW1lAAAWsAAAAUUAAAJtPlT+fXBvc3QAABf4AAABNAAAAf+kIwP5eJxjYGRgYOBikGPQYWB0cfMJYeBgYGGAAJAMY05meiJQDMoDyrGAaQ4gZoOIAgCKIwNPAHicY2BkEWGcwMDKwMHUyXSGgYGhH0IzvmYwYuRgYGBiYGVmwAoC0lxTGBwYKp4rMTf8b2CIYW5n6AAKM4LkANzkC7sAeJzF0s1OWlEUxfH/RQFRRKWUfkIBFSeNxknTWEemoaaDPo+P2kHHi8ewa7NIk07qyPSe/C7cm51z9s1eQBvYsY+2C60Bjf/R7Plts3m/w/7m/S6//Dzzch0PaqmroUYaa6oLXelat7rT/Xq2Xjw+biva6m0qJprr0hU3rlj9qfjX1WxOmnHGp836zFdWXt+9fnhVRXV2QN/9HDLgiGNO/D1DXrDHiBYv6TLmFa95S4d3vGfKB+85Z8Epb7z3OUt6TLxZ54l+nvFq/t/Rf1/9ujU/t09Le9hyi2pFpUXtqGSoE54E6kbtpF5UWrQfnhM6CE8M9cOzQ4fhKaJBeJ7oKCqpOg7PGJ2Ep42G4bmjUVC/46B6n4RTgaZB9TsPqnYRzgw6DacHnYVzhM6D+u5lOFvoIpwydBnUOVfh5KHrcAbRTVDnfwnq/Nugzr8LZxWtgurlW1C93EfNaz0LZ5r1Ipj8BhbTen0AeJxlWAmYFOWZru//6+izuuvuY7p7unu6unua6Zm+Z2CYGQSGBWU4RA6JoEJckDAQjGIUcORINKgLmMNVN4aAbhKjGBVv0QSyT0zUlSQmcU3c3Nn4JHk0u8+yCdPFflXdg5jMVP9H/UfV/x3v937FcAxz7hf0BRpiFCbHlJg5zGKGAb4AKZHEIJmtFkkBtCSnGapIs+lsUkininQmGCle1cv1qmnwAh8AEeJQSZbr2SLJQq06RGZAWY8BhKORS+VMh0wPgCeUje+zFpAvg5ZIdwSGeqz504bVcqfi2u6T5bAs3+HiOc5FCBsQYbOhuzm3h7eOcoGI9kIiTxLgC2cjl6zyd0blq26rjscyhhtgYgKUaKf4r8NSRMJrR0RX5LAQ9LtCEX+6S4Xtv/aGFF/M/BWDfwTP+l16N53JVJi9DMMVIctnRRCwrtYb2C5CYwga2WqjhlUcjBIeASsdj5gV4qCJkC0beNByvVE17dl1nB+3F2EnazbqtSqWNWzjrpou8Jpq6AK2ed3QhwALey8RtNYedb3cIPd2zw8HA5H53YvXkWiYxOPT/JovJYNKv3bLxNeoKqW8mr+QiEM4AuvfdPHKcGb6QhIOeTg+6OMNUXFLguRNBlwEJBbowc0fO0iBDQIIwZRHFmS3Ihq8LyDwHiMMC6ebQ4qgqt46qDKArALMLIXyAaJ55JvnpOqy20zDxMOUPjyRznrkWmrOzbJHI4F8qDTzUj4gmx2BqIfVXKruJZKfCitndPYFXF4XH4vyAjd+kNKD45zAR2O84HUFSp0zVgrULxGPrro11hMVY6Yc4AFQFyzq4pv0G3SY0ZgNzI3MzQyTKdvSr5uCLe90EWomj8KGVKklTxEcZbQ0gzMNW+T1YUA5NuqVstFoaarEqwmo2DvphqPbtAiqbi9zrplQdBSOQ2a2tRcP/UBYXugse8FDoaskiukk66KBMuyGzn+77Y5XOsKdkI0HOzzG5YMsYUGa62fN+PHphsARnlJQKy7BqBIKlNYXqcFY+Mh1QkKNpNMRLSHsez6khiC3tuvwtRsPd7Gs/tXtN3zVYK2Fu4DNJziOg6ibkABQngt3wH23fhml/ynOjO6P5wBE39CaKE+A+K68OFXjuzw1fxdPIbphaM7GPsLhQHztYIj/x5s8kgapSgrAkH2HbnKljTvjudzaTwBct4Zltx2i5OA23roKXRvlfpr+ivyFkRlGMQDlGAcB/TdLHeu/5RekFwoRNyc3n4H+/CQVw54cHHiCUKrLfDLaXMan8rCMlAwXz7T0yDB0N7mb8TFhJs104SNElKkt8WzdzEoo65aYUeINEVJmtV7WjRJhXn2KkKdebZWjVxByxWirXArF0SJeQA5J70nnL2v++RlYPpi2pxTTjI1ff2YZmsanT2NqzBAzD99gymLQaY22L2tYFSHTuscLuu2Azi2urKu8/VpcCwpqSXRm+yVVnh7P/PHIkT9k8MSwYCD1+h37X01PvxggZ+XvPknJPZ/Uk3o4Nze86zBlT1qvS4aR0nXYSjYvXbqZwO4uSddThgHfvv8lSl+6TxrJD4zB2U+hgh/Ya5FL+vPDb9NH9nz8SChp8J0d6kOf2PPI1+0dUsZhXI+7CAvA3iClO3pDOb9MbmFU9BTdNnpA9E0JbjARig3Q4Z1gOsCysE8xy6r1kPWYUs7IsMN1u4t40UYn7K71MCyQMyXZul2wt0PZHaJn6SbGywSYiI37jKAzRp1pmIxA01ThUw7KoSyIeNp6F21VP30adI6z3r3bWGRs02eoGujKUI5ei7dOXzDli1YB3mzuVjV5WFayg86zJugb9BZmjFnDrL1ARzF0z4puqyjeglEbGFvOig2j7mAm73i08SGXbikQzQwBN2C7tckLUy6N7rSv48eHPv+WnunKd1b06CWyXgVtQHFFEuWN2XjKzQU4VgFuTITFMgGYv8yveNTw19f6OpJmOp3pStN//mwupgI7wl3Vc99H1jxWDIdenNj5FcPlcpHZtz9G6aP73dnwyWQOwnMu94l+Grx6cfc/uHiqqTm/EA24eEIvuenyw0FC1FtHYwFu4wElHIJpjR4IhXIH9rlSiZNVHebfuB7go9tDO49S+uAOLy+04tTr9C1aRu8KoKSkZJ1wLcPF4yXJUrjZd4N18/H3Oe794081eWuMlq29GswUuN89+sjvOPbHhx15/5neRUXGQK8s4C7pWlpI1tIaCk+QcKsk7oXeybVc03FTSKKzoHfSWv9lYB2/omqWAcomudaprQdLFxFyUckpodKcdD1x1xMucnzV6tWroJxp/qk9WzZLB2B2qWxPK5dmWz2FWWNjs87H36doHe2tw8GJ9pGKCH6pXjCzrcdrBtob89wZjjvznFOaUkEaDwAkigm4IkjrU/exbD4fDG4OGm8biYRxao1UYNp2/T79BA0wLkay7Vqxj1zBw55vGFONMz2D5E0Y/GnPIPywVb1JBuE+MthjfQuGsHs9DPY0x8jjPYNftFt/JErPYPssTfoAZZE3RfEsGTOtJVO8Y8xJrdzI1KsozaSEP3rvOYYTrFd9waAPqgIHDNcsgWrthD3WH+Azb7DXSb77/NJ17BucFwLjk3/d0j7DafoSrTC9zAwb0zL1hjnlFaaAV9F2HkMkuhF38Fbnbc0itWiUUaAXCtdApdfStUqtolXgJHQRQdWBpjlwQzC2SttfMXwSCKzfy/o4pFNsB129h/Kv71owOq0K8vq9hOxdv24vpXu1q81168yrn5s34AlGS17o7kpJpPw4nxIW5tcXCcn1iTzykP50tEO+rN5oZIk3tR5yuHy9vRzL/7na3qItv+/R47SGCJ5zbLyWztIULzSygtFAW6yct0ubmmlTZ4FXQDpCq4vuGtDmDf6nurK4fc6Bl1n25QMHXqZAribsmWefPcOyZ0jaem/zEZCqvYuV3wwtDE0rUXuOPVMUXbLsTMKp7Rh27m16lGaw5UeL0RjGjcEKFDMVQKrR0mQDf+Q6K9n/Gvx8R+eyziVfGEs0z8Ipa/BbQCyL3GYlXxuAn4MUjy85NJa8dPLMyO6R1t6v0Ptpw8FYBb2RAXTCpFaRklKlRtFCQEpLkJYqZOlR66kG+W7jQUuGP1l/Ggd5fJy8Mj4+3hwnd2/GIoMDT1vz7d8Un/05/RLtZNz43kzGsTbcFjWbBVpqfhH2Wn46ssV6CF5abY0uIldvmXwZXngYnl5iLcD1CDXn/kJ/RQVGZxKohQFmNrMQ8ZmBstFCZ5S60LDJasNE18xORUphKkDC+WkIxgZqLWOPVOwh43xLIA8HpciJWw9+k4V5s1LbO/s7g0EvPTJDNYxcPP62mkjkdJ18j/3KDTuPUHpkZ7gSWROpzrYm/Krqx0lfadcqiZCNewg9vGP0umnXDAoeSGW2fWGtkdX1rHEZYIFN670N+yndv2HjfuIRKpeZ69aDGtG0CFLddu1whr/SdynPJJlRZhHzUWYcz2wTevswfJs3SNVGK5jomuSYXtbMmpgV2ZxeRL7G6wnQK7Y7OjWtmtyUWAw8tM1fbcrvcM+akyacpxUPsaTvnUOH3ukjbKILYO4MKJ345CdPlGDGXICu3xf6p9+ybUVfnHJyyO8WiMsT60w3Ahwl85ePbFve12dtUEKhTCj0WlehO0NZn5dGI5EI6/XSWa0BeItwuw9T+qU9HFGGzcFFBHRKNuwiZNcGQq13yaJBc3h5TyhcWnX9rHmz+ER3EpOvIKVuCAiUQA+UVl6/+/rnIJwJ41Vj85QWWN7LszztICSGrFfw9bZHHax6C+0wjFYYYbIoy6QNr412hKEipJO22TSSKASV/6BD5zW3mSV4jNSxhPJbiM/WQ6KCKH25qNyInaLT+b6o0BCUzGbkHih0EmKWrDU40KEAKPdPNdp+/N/01xjzQhhfOh0umuYJqqKhO1whzZsNpV42FJ2HpJa03VqxAfr4x8nnXw+wPs+1BmVhPCMr/+HJuP4odk2uh59aXTDTOgkza9ZdsA3uWWg9r5AwDx+9Lb6oANEElD0e6/mYFy7aZP3fJuvOTS3s/hZi95Dj84m/iXQIxAoCsuYAci2JdZIwJ85y3NkTTvmZFSuOrbD/rLMr4Uk6xE2++OIky9rl5G+XQ++KRx9d8ejKY+0Y8SydpH34nBRzTes5U3wbnBMjl0KDtvNXDAN2pMig9Woq9tGYs6259da/nZwarRyq7QWaXRfBGbNn4BJnM3oxPHHwnx4n9PEDB79hvazovQvCHpZKPt/Cpasu9XVg8EldaT0rUlESeErEFCYyfVkvGfjS/KXfu2t2nLjTBQLJpEsg3Q8IPCS0jpQrpHUYAn9vJrzr5tXrvr8+R+DGPS+y3Av79j7Pci9a9xHq7surRpAlXBwXc1wgpFb6fjmAqZdE2aCkiMSNIaTBg+drS0xOPDS6xk1cpUxnzUfdrievxMJA24kXTMEd5NhVj9z5+/68J/TsxcudnOg79Bnaj3JkIIvY7wbDDQ2gT19jHbOOXQNLnAKWYJecxsJpfTDQxuIn6Gt0Idpel4OgtihVR5Qph9ZWW/q4gGITZmx07sZYPB7bOHf0/g+aY6esSeTR7KlTwCLVniTNv53Rai7GsVMXzJ2KCY877+HFSPYhRg/ZhgEGYf5md+u33561F7pm0YWcdfbk1OBJ4JqXnbIHRtq5h0A+3ZKPgBEaYzRGacrPfOWVqYvMv6Dj2OaNnEY/jbEpgxyGgTriqMpnMxJKoWoz9qwpkgSKJw7lYZRVuV7NYihEUdlwS2qd+Xyn9TO6Y6veOxTesiU8VAR961Ydiq1erz6pPp2tAFSydKuhm5MbTU3/GclZr20JDaOxb7lw6lZnE/hy8ydQNWGbWYWpuH8j+wd8R9tL80zFZlnBrJNPoersD1zG+X7Q6X9witL5V6U3rF+v9efUwUE13/jRk0+qAzn1zjuxbSmJbvsM7de8YxPIm5R8Qxs5OqI38sdegvdeUrsb2uesic9hnz5/wSk+9KK2fb5D3qfX2uzBbX9rI5j9tfJrjMA2BSQlTD993s6eQhCuEn2U+kTrgWChp9Pnl+Co9brd9CLLuyrQpaqYBF/VnszAuclzu1iW3srU8UFookXobf9Szne9gL0/RjgDI16cDEO9bIe78hDpxQBXb/TRpZ+VfVIuciJkepb7evp7fCs8GeNENCt5lc8ZAGlWnVYPHdX6lK9qIS0T9dIU6wuA7x61XElyMRLRnwnHYuHntDCJcclKWb03lPb8JFpKUP9Kv2e1T+rMqf9O9FywhXefob+hixiTWcJ8rJVDptKIYbVqNu1Eb423SSOVuEa5BWtKPVsXqI1aGamNdfja6Jx4Ck3lS2le0Gx2WUk6mSaGrKpZABOpNOoZzzkD7DvZUlqhbwR7Y4T+l0/0gGdmoTQdgNu5GsiwJ2gEOkSWrACgA1dwHsHV/MUlH4txHAskLRlJoBSpdpiFsAz+oEfhPZO/9EuSfx6hkmEgeI36AgHfdAKnomGA1JhZLuarAKNVjr9yr986Yf0vgNutxngBDghCLmot92ISAfBWcuViSY+oWjIGJCdrSrQzVevFqZIbwOMJgoQPhJBkuWQDgqEgwA8YhkcZPow52ARGjAJzMbOCWcdgvgEpgTcqVftDGlKWVsiIQaVWbcWGGkI/rbfZn+J8JamaGMd5R0hJXUi2fQGDusElbZLTivIG0njV/prstO37rTY1lhR7YEY4OtBXQY6pDAb9g6I3XPbGoHvapUq0IxONToS9EiSM5k12bgc/MU0rV5wJMLNIPoV1cy0c8wYCXmuJLb0f/30Bp8u9i/sTmUox0eGW66mOjCzHw6o2Tcz1zcnmrCpEzAheJBXied+f9VhMb/brsUgYBqaR7xRQvdML2wJGAK/D0K4DRhCVPZVjTrA70W90pmgjh/LhtDqLx8eMNp1BYSScj+M2pcQ5bUlR5B3a5wv9AP0FuqR7AGCg29qfmdOhxEzrHEBHRVO0SgdcP7KMkGUjk8ec2sd6zr5Dx3BNc1prLdmOayNhKVxWZUlRcGrz9tYS8sORZda2crmFH3tR51swk2RsKuR8RmkRkkqrqrY/htpB3k650KEa5wmxwQuG86lmeSCvyYNIWclH5g6v9KieVUNzP0IyiVjOreUDmhDRyjogGRP4e/btu4d3AdqfXtYiwlZXMnVxw28aNhJ2p1LdNh4apj96USaVdPk3zanN9fBCPsEqgf3HWfb4fllN5EX33NqcTW38u4W9HW12vp0ptoWo2OZWdki4LVtkmQJSqnK9pjim6UjftlBqWyjeRi6CltcGMBFSWbIDGnlrNN8AQup56Naz4ognAGfwBsWRU6f8ClX8lrt13/qRKBNZhOf8yhfcUdX9fU+H+wduTJfdMM/6l5YCaT8qRZEW+2Cg0JyP7dnISp5Bhoq3FHHyO6Ki+mH1UY8S9fzGg1dU8eDx/h9KIN2kAAB4nGNgZGBgAGLTH6dZ4/ltvjJwszCAwLWdk5Vh9P8//ytYRZnbgVwOBiaQKABO+wxYAAAAeJxjYGRgYG7438AQw2r1/8//P6yiDEARFKAOAKe2Btd4nGNhYGBgfsnAwMJAX8xqBaTfwPj//8DlaqB0BwMDABBqBasAAAAAAHYBPAH4AiACYALUAv4DNAPKA+wENgRqBJwEzAU8BYIFsAXeBf4GegciB2YHqgfeCIIIpAjoCRIJLAl+CdIKAApWCvgLnAvyDFIMwnicY2BkYGBQZ2hlYGcAASYg5gJCBob/YD4DABoFAcoAeJxlj01OwzAQhV/6B6QSqqhgh+QFYgEo/RGrblhUavdddN+mTpsqiSPHrdQDcB6OwAk4AtyAO/BIJ5s2lsffvHljTwDc4Acejt8t95E9XDI7cg0XuBeuU38QbpBfhJto41W4Rf1N2MczpsJtdGF5g9e4YvaEd2EPHXwI13CNT+E69S/hBvlbuIk7/Aq30PHqwj7mXle4jUcv9sdWL5xeqeVBxaHJIpM5v4KZXu+Sha3S6pxrW8QmU4OgX0lTnWlb3VPs10PnIhVZk6oJqzpJjMqt2erQBRvn8lGvF4kehCblWGP+tsYCjnEFhSUOjDFCGGSIyujoO1Vm9K+xQ8Jee1Y9zed0WxTU/3OFAQL0z1xTurLSeTpPgT1fG1J1dCtuy56UNJFezUkSskJe1rZUQuoBNmVXjhF6XNGJPyhnSP8ACVpuyAAAAHicbZBbc4IwEIU5Ciqi1Vq19/vFvuSl/yiGVTIGIklQ/PcVtDOd2n3InM35zuwmXsM7VNf7v2ZooAkfAVpoo4MQXUTooY8zDDDEOUa4wBgTTHGJK1zjBre4wz0e8IgnPOMFr3jDOz4ww6eHspHnY1FYp1MyzJLZSEHMbXUgEhKrJu1oemonhsiP9TYbUSkUT7mTOmNCGqFocoIvdGHCtSQmEm5cx2pVVHxPKC1Wx1Q45+bgt6hc6z1W7OOMx3H/gHFj9JZpn2LpWjEpchRWmhkSrrUlWcps+Hd0OyVr+ZK6C24rcq12g7wg+2vd08frjIL9TEvtIqs/oVefRz6qLWZTrlS00VWgvglqHR3WNHKZON86bkKXFOncsmLd/xmccWkoWEhFX+08Z3uh/KrzvG9dKJVT")
      format("woff"),
    url("//at.alicdn.com/t/font_256629_8gim64zt8fpkqpvi.ttf?t=1519612452000")
      format("truetype"),
    /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
      url("//at.alicdn.com/t/font_256629_8gim64zt8fpkqpvi.svg?t=1519612452000#iconfont")
      format("svg");
  /* iOS 4.1- */
}
.icon {
  font-family: "iconfont" !important;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  line-height: 1;
  vertical-align: baseline;
  text-align: center;
  text-transform: none;
  display: inline-block;
}
.icon:before {
  display: block;
}
.icon-qq:before {
  content: "\E616";
}
.icon-customer-service-two:before {
  content: "\E602";
}
.icon-check:before {
  content: "\E609";
}
.icon-eye:before {
  content: "\E60F";
}
.icon-customer-service-three:before {
  content: "\E625";
}
.icon-down:before {
  content: "\E61E";
}
.icon-exclamation-circle:before {
  content: "\E612";
}
.icon-customer-service-four:before {
  content: "\E720";
}
.icon-pie-chart:before {
  content: "\E605";
}
.icon-solution:before {
  content: "\E606";
}
.icon-clock-circle:before {
  content: "\E607";
}
.icon-bar-chart:before {
  content: "\E60A";
}
.icon-export:before {
  content: "\E60B";
}
.icon-user-add:before {
  content: "\E60C";
}
.icon-clock-arrow-o:before {
  content: "\E60D";
}
.icon-edit:before {
  content: "\E60E";
}
.icon-delete:before {
  content: "\E610";
}
.icon-edit-rect:before {
  content: "\E611";
}
.icon-weixin:before {
  content: "\E614";
}
.icon-customer-service:before {
  content: "\E61D";
}
.icon-message:before {
  content: "\E621";
}
.icon-fast-reply:before {
  content: "\E622";
}
.icon-question-circle:before {
  content: "\E623";
}
.icon-customer-service-one:before {
  content: "\E642";
}
.icon-close:before {
  content: "\E624";
}
.icon-uncheck:before {
  content: "\E626";
}
.icon-check-circle:before {
  content: "\E627";
}
.icon-close-small:before {
  content: "\E722";
}
.icon-voice-close:before {
  content: "\E62E";
}
.icon-voice:before {
  content: "\E62F";
}
.icon-arrow-right:before {
  content: "\E631";
}
.icon-star:before {
  content: "\E63A";
}
.icon-thumbs-up:before {
  content: "\E63B";
}
.icon-questionnaire:before {
  content: "\E63C";
}
.icon-file2:before {
  content: "\E646";
}
.icon-qq-fill:before {
  content: "\E647";
}
.icon-file:before {
  content: "\E648";
}
.title-main .close {
  background: none !important;
}
.zhuan {
  transform: rotate(270deg) !important;
}
</style>



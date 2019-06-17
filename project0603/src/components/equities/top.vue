<template>
  <div class="box">
    <!-- <div class="image">
      <img src="../../assets/image/banner1.png" alt>
    </div>-->
    <!-- <div class="right">
        <img src alt>
    </div>-->
    <!-- <el-carousel :interval="3000" arrow="always">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
    </el-carousel>-->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in list" :key="index">
          <img :src="item.uri_path" alt>
        </div>
        <!-- <div class="swiper-slide">
          <img src="//www.dc.com/static/upload/banner/2.PNG" alt>
        </div>
        <div class="swiper-slide">
          <img src="//www.dc.com/static/upload/banner/1.PNG" alt>
        </div>-->
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

      <!-- 如果需要导航按钮 -->
      <!-- <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>-->
    </div>
    <form action>
      <h2>预约开户</h2>
      <input type="text" placeholder="请输入您的姓名" style="color:#fff" v-model="username">
      <input type="text" placeholder="请输入您的手机号" v-model="usertel">
      <button @click="kaihu">立即预约开户</button>
    </form>
    <div class="yun">
      <img src="../../assets/image/cloud.png" alt>
    </div>
  </div>
</template>
<script>
// import axios from "axios";
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
export default {
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      list: [],
      username: "",
      usertel: ""
    };
  },
  created() {
    this.$http
      .get("https://www.dc.com/api/getBanner?swiper=3&class_id=1", {
        params: {
          // second_category_name: "文学"
        }
      })
      .then(res => {
        this.list = res.data.data;
        console.log(res.data.data);
      });
  },
  mounted() {
    setTimeout(() => {
      new Swiper(".swiper-container", {
        // autoplay: true, //可选选项，自动滑动
        autoplay: {
          delay: 2000, //1秒切换一次
          disableOnInteraction: false,
          speed: 100,
          loop: true
        },

        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        // 如果需要前进后退按钮
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }

        // nextButton: ".swiper-button-next",
        // prevButton: ".swiper-button-prev",
        // // 如果需要滚动条
        // scrollbar: ".swiper-scrollbar",
        // initialSlide: 1
        // virtualTranslate: true
      });
    }, 200);
  },

  methods: {
    kaihu() {
      var usernameReg = /\w{4}/gi; //姓名
      var usertelReg = /^1[3456789][0-9]{9}$/gi; //手机号码
      if (usernameReg.test(this.username)) {
        console.log(this.usertel);
        if (usertelReg.test(this.usertel)) {
          var that = this;
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
              // this.$message({
              //   showClose: true,
              //   message: "恭喜你，预约开户成功",
              //   type: "success"
              // });
              that.$message({
                title: "成功",
                message: "恭喜您，预约开户成功",
                type: "success"
              });
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
    }
  }
};
</script>
<style scoped>
.box {
  width: 100%;
  height: 540px;
  position: relative;
}
.box img {
  width: 100%;
  height: 540px;
}
.box form {
  width: 265px;
  height: 250px;
  background: rgba(0, 0, 0, 0.5);
  /* opacity: 0.5; */
  border-radius: 6px;
  position: absolute;
  left: 1293px;
  top: 172px;
  text-align: center;
  z-index: 2;
}
.box form h2 {
  font-size: 20px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(204, 204, 204, 1);
  line-height: 49px;
  margin-top: 10px;
  text-align: center;
}
.box form input {
  width: 206px;
  height: 36px;
  background: #8293ae;
  /* border: 1px solid rgba(221, 221, 221, 1); */
  border: none;
  border-radius: 6px;
  opacity: 1;
  color: #ffffff;
  margin-bottom: 20px;
}
.box form button {
  width: 206px;
  height: 36px;
  background: rgba(0, 153, 255, 1);
  border-radius: 18px;
  border: none;
  color: #ffffff;
  cursor: pointer;
  outline: none;
}
.box .yun {
  width: 100%;
  height: 264px;
  position: absolute;
  left: 0;
  bottom: -65px;
  z-index: 1;
}
.box .yun img {
  width: 100%;
  height: 264px;
}
/* .swiper-pagination {
  position: absolute;
  z-index: 1000;
} */
</style>



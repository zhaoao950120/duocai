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
        <div class="swiper-slide">
          <img src="//www.dc.com/static/upload/banner/1.PNG" alt>
        </div>
        <div class="swiper-slide">
          <img src="//www.dc.com/static/upload/banner/1.PNG" alt>
        </div>
        <div class="swiper-slide">
          <img src="//www.dc.com/static/upload/banner/1.PNG" alt>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

      <!-- 如果需要导航按钮 -->
      <!-- <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>-->
    </div>
    <form action>
      <h2>预约开户</h2>
      <input type="text" placeholder="请输入您的姓名" style="color:#fff">
      <input type="text" placeholder="请输入您的手机号">
      <button>立即预约开户</button>
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
      list: []
    };
  },
  // created() {
  //   this.$http
  //     .get("https://www.dc.com/api/getBanner?swiper=3&class_id=1", {
  //       params: {
  //         // second_category_name: "文学"
  //       }
  //     })
  //     .then(res => {
  //       this.list = res.data.data;
  //       console.log(res.data.data);
  //     });
  // },
  mounted() {
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
  },

  methods: {}
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
  border: 1px solid rgba(221, 221, 221, 1);
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
</style>



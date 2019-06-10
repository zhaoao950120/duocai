<template>
  <div class="box">
    <div class="w1200">
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
            <img src="//www.dc.com/static/upload/banner/2.PNG" alt>
          </div>
          <div class="swiper-slide">
            <img src="//www.dc.com/static/upload/banner/3.PNG" alt>
          </div>
          <div class="swiper-slide">
            <img src="//www.dc.com/static/upload/banner/1.PNG" alt>
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
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
  height: 332px;
  background: rgba(39, 93, 205, 1);
  padding-top: 20px;
  box-sizing: border-box;
}
.left ul li {
  width: 98px;
  height: 94px;
  background-color: #fff;
  border-radius: 6px;
  text-align: center;
  color: rgba(39, 93, 205, 1);
  margin-bottom: 5px;
}
.left ul li:nth-child(2),
.left ul li:nth-child(3) {
  background-color: #93aee6;
  color: #fff;
}

.left ul li i {
  width: 29px;
  height: 32px;
  margin-top: 19px;
  background: url(../../assets/image/icon_gp.png);
  display: inline-block;
  background-size: 100% 100%;
}
.left ul li:nth-child(2) i {
  background-image: url(../../assets/image/icon_dk1.png);
}
.left ul li:nth-child(3) i {
  background-image: url(../../assets/image/icon_gp1.png);
}
.left ul li:hover {
  background-color: #fff;
  color: rgba(39, 93, 205, 1);
}
/* .left ul li:nth-child(2):hover {
  background-image: url(../../assets/image/icon_dk.png);
} */
.moddie {
  width: 376px;
  height: 292px;
  background-color: #fff;
  margin-left: 5px;
  border-radius: 6px;
}
.right {
  width: 1200px;
  height: 292px;
  background: rgba(255, 255, 255, 1);
  border-radius: 6px;
  /* margin-left: 5px; */
}

.swiper-container {
  width: 1200px;
  height: 292px;
  /* margin: 20px auto; */
}
img {
  width: 100%;
}
</style>



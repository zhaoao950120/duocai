<template>
  <div class="box">
    <div class="lunbo">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in list" :key="index">
            <img :src="item.uri_path" alt>
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

        <!-- 如果需要导航按钮 -->
        <!-- <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>-->
      </div>
      <div class="yun">
        <img src="../../assets/image/cloud.png" alt>
      </div>
    </div>

    <form action>
      <h2>预约开户</h2>
      <input type="text" placeholder="请输入您的姓名" style="color:#fff" v-model="username">
      <input type="text" placeholder="请输入您的手机号" v-model="usertel">
      <button @click="kaihu">立即预约开户</button>
    </form>
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
      .get(
        "http://api.duocai.jiaxunmedia.com/api/getBanner?swiper=3&class_id=1",
        {
          params: {
            // second_category_name: "文学"
          }
        }
      )
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
      var usernameReg = /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/; //姓名
      var usertelReg = /^1[3456789][0-9]{9}$/gi; //手机号码
      if (usernameReg.test(this.username)) {
        if (usertelReg.test(this.usertel)) {
          console.log(this.usertel, this.username);
          var that = this;
          $.ajax({
            type: "POST",
            url: "http://api.duocai.jiaxunmedia.com/api/cdk",
            header: { "Content-Type": "application/x-www-form-urlencoded" },
            data: {
              name: this.username,
              tel: this.usertel,
              // amount: this.money1,
              // dc_zc: this.asset1,
              // dc_hy: this.marital1,
              class_id: 1
            },
            dataType: "json",
            success: function(data) {
              console.log(data);
              if (data.code == 200) {
                that.$message({
                  title: "成功",
                  message: "恭喜您，预约开户成功",
                  type: "success"
                });
              } else {
                that.$message({
                  title: "成功",
                  message: data.message,
                  type: "error"
                });
              }
              // this.$message({
              //   showClose: true,
              //   message: "恭喜你，预约开户成功",
              //   type: "success"
              // });
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
  /* height: 540px; */
  position: relative;
}
.box img {
  width: 100%;
  /* height: 540px; */
}
.box form {
  width: 265px;
  height: 250px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 6px;
  position: absolute;
  right: 180px;
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
  margin-top: 4px;
  margin-bottom: 17px;
  background: #8293ae;
  /* border: 1px solid rgba(221, 221, 221, 1); */
  border: none;
  border-radius: 6px;
  opacity: 1;
  color: #ffffff;
  padding-left: 8px;
}
.box form input::-webkit-input-placeholder {
  color: rgb(200, 200, 200);
}
.box form input::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: rgb(200, 200, 200);
}
.box form input:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: rgb(200, 200, 200);
}
.box form input:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: rgb(200, 200, 200);
}
.box form button {
  margin-top: 7px;
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
.lunbo {
  position: relative;
}
</style>



<template>
  <div class="box">
    <div class="w1200">
      <!-- 股票 -->
      <div class="top">
        <div class="title">
          <h2>股票</h2>
          <p>广告语</p>
        </div>
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <ul>
                <li v-for="(item,index) in list.slice(0, 3)" :key="index" @click="gupiao">
                  <div class="top">
                    <img :src="'http://www.dc.com/'+item.logo" alt>
                  </div>
                  <div class="content" style="padding:0 35px;box-sizing:box-border">
                    <div class="content_left fl" style="  margin-top: 20px;margin-left:25px">
                      <img
                        :src="'http://www.dc.com/'+item.vis_img"
                        alt
                        style="width:74px;height:74px"
                      >
                    </div>
                    <div class="content_right fl" style="margin-left:25px;text-align:left">
                      <!-- <p>{{item.title}}</p> -->
                      <p>{{list_ys[0]}}</p>
                      <p>{{list_ys[1]}}</p>
                      <p>{{list_ys[2]}}</p>
                    </div>
                    <div class="clear"></div>
                  </div>
                  <!-- <p>股市直播免费看</p> -->
                  <button>我要开户</button>
                </li>
                <div class="clear"></div>
                <!-- <div class="left"></div>
                <div class="right"></div>-->
              </ul>
            </div>
            <div class="swiper-slide">
              <ul>
                <li v-for="(item,index) in list.slice(3, 6)" :key="index" @click="gupiao">
                  <div class="top">
                    <img :src="'http://www.dc.com/'+item.logo" alt>
                  </div>
                  <div class="content" style="padding:0 35px;box-sizing:box-border">
                    <div class="content_left fl" style="  margin-top: 20px;margin-left:25px">
                      <img
                        :src="'http://www.dc.com/'+item.vis_img"
                        alt
                        style="width:74px;height:74px"
                      >
                    </div>
                    <div class="content_right fl" style="margin-left:25px;text-align:left">
                      <!-- <p>{{item.title}}</p> -->
                      <p>{{list_ys[0]}}</p>
                      <p>{{list_ys[1]}}</p>
                      <p>{{list_ys[2]}}</p>
                    </div>
                    <div class="clear"></div>
                  </div>
                  <!-- <p>股市直播免费看</p> -->
                  <button>我要开户</button>
                </li>
                <div class="clear"></div>
                <!-- <div class="left"></div>
                <div class="right"></div>-->
              </ul>
            </div>
            <div class="swiper-slide">
              <ul>
                <li v-for="(item,index) in list.slice(6, 9)" :key="index" @click="gupiao">
                  <div class="top">
                    <img :src="'http://www.dc.com/'+item.logo" alt>
                  </div>
                  <div class="content" style="padding:0 35px;box-sizing:box-border">
                    <div class="content_left fl" style="  margin-top: 20px;margin-left:25px">
                      <img
                        :src="'http://www.dc.com/'+item.vis_img"
                        alt
                        style="width:74px;height:74px"
                      >
                    </div>
                    <div class="content_right fl" style="margin-left:25px;text-align:left">
                      <!-- <p>{{item.title}}</p> -->
                      <p>{{list_ys[0]}}</p>
                      <p>{{list_ys[1]}}</p>
                      <p>{{list_ys[2]}}</p>
                    </div>
                    <div class="clear"></div>
                  </div>
                  <!-- <p>股市直播免费看</p> -->
                  <button>我要开户</button>
                </li>
                <div class="clear"></div>
                <!-- <div class="left"></div>
                <div class="right"></div>-->
              </ul>
            </div>
            <div class="swiper-slide" v-if="list[9]">
              <ul>
                <li v-for="(item,index) in list.slice(9, 12)" :key="index" @click="gupiao">
                  <div class="top">
                    <img :src="'http://www.dc.com/'+item.logo" alt>
                  </div>
                  <div class="content" style="padding:0 35px;box-sizing:box-border">
                    <div class="content_left fl" style="  margin-top: 20px;margin-left:25px">
                      <img
                        :src="'http://www.dc.com/'+item.vis_img"
                        alt
                        style="width:74px;height:74px"
                      >
                    </div>
                    <div class="content_right fl" style="margin-left:25px;text-align:left">
                      <!-- <p>{{item.title}}</p> -->
                      <p>{{list_ys[0]}}</p>
                      <p>{{list_ys[1]}}</p>
                      <p>{{list_ys[2]}}</p>
                    </div>
                    <div class="clear"></div>
                  </div>
                  <!-- <p>股市直播免费看</p> -->
                  <button>我要开户</button>
                </li>
                <div class="clear"></div>
                <!-- <div class="left"></div>
                <div class="right"></div>-->
              </ul>
            </div>
          </div>
          <div class="swiper-button-prev left_btn swiper-button-black"></div>
          <!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
          <div class="swiper-button-next right_btn swiper-button-black"></div>
          <!--右箭头。如果放置在swiper-container外面，需要自定义样式。-->
          <div class="swiper-pagination"></div>
          <!--分页器。如果放置在swiper-container外面，需要自定义样式。-->
        </div>
      </div>
      <!-- 期货 -->
      <div class="top">
        <div class="title">
          <h2>期货</h2>
          <p>广告语</p>
        </div>
        <ul>
          <li v-for="(item,index) in list1.slice(0, 3)" :key="index">
            <div class="top">
              <img :src="'http://www.dc.com/'+item.logo" alt>
            </div>
            <div class="content" style="padding:0 35px;box-sizing:box-border">
              <div class="content_left fl" style="  margin-top: 20px;">
                <img :src="'http://www.dc.com/'+item.vis_img" alt style="width:74px;height:74px">
              </div>
              <div class="content_right fl" style="margin-left:10px;text-align:left">
                <p>{{list_ys[0]}}</p>
                <p>{{list_ys[1]}}</p>
                <p>{{list_ys[2]}}</p>
              </div>
              <div class="clear"></div>
            </div>
            <!-- <p>股市直播免费看</p> -->
            <button>我要开户</button>
            <!-- <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <li v-for="(item,index) in list1" :key="index">
                  <img src="../../assets/image/qihuo.png" alt>
                  <p>{{item.title}}</p>
                  <p>{{item.add_date}}</p>
                  <p>股市直播免费看</p>
                  <button>我要开户</button>
                </li>
                <li>
                  <img src="../../assets/image/qihuo.png" alt>
                  <p>万2.5佣金</p>
                  <p>公募基金全线1折</p>
                  <p>股市直播免费看</p>
                  <button>我要开户</button>
                </li>
              </div>
            </div>
            <div class="swiper-pagination"></div>
            </div>-->

            <!-- <li>
            <img src="../../assets/image/qihuo.png" alt>
            <p>万2.5佣金</p>
            <p>公募基金全线1折</p>
            <p>股市直播免费看</p>
            <button>我要开户</button>
            </li>-->
            <div class="clear"></div>
            <div class="left"></div>
            <div class="right"></div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
export default {
  data() {
    return {
      list: [],
      list1: [],
      list_ys: [],
      list_img: []
    };
  },
  mounted() {
    // 传统写法
    // this.$http
    //   .get(
    //     "https://www.baidu.com/sugrec?pre=1&p=3&ie=utf-8&json=1&prod=pc&from=pc_web&sugsid=1431,28939,21099,29135,28519,29098,29134,28838,28585,26350,29072&wd=%20&req=2&csor=1&pwd=%20&cb=jQuery110208164778836201727_1559640043595&_=1559640043599"
    //   )
    //   .then(
    //     function(response) {
    //       // 响应成功回调
    //       console.log("成功");
    //     },
    //     function(response) {
    //       // 响应错误回调
    //       console.log("失败");
    //     }
    //   );
    this.$http
      .get("http://www.dc.com/", {
        params: {
          // second_category_name: "文学"
        }
      })
      .then(res => {
        this.list = res.data.data.gupiao;
        this.list1 = res.data.data.qihuo.slice(0, 3);
        this.list_ys = eval(res.data.data.gupiao[0].ys);
        // console.log(this.list_ys);
        // console.log(eval(this.list[0]));
      });

    setTimeout(() => {
      new Swiper(".swiper-container", {
        // autoplay: true, //可选选项，自动滑动
        // slidesPerView: 2,
        // spaceBetween: 30,
        autoplay: {
          delay: 3000 //1秒切换一次
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
    gupiao() {
      this.$router.push({
        name: "equities"
        // params: { goodsid: id }
      });
    }
  }
};
</script>
<style scoped>
.box {
  background: url(../../assets/image/side1_bg.png);
  height: 1022px;
  width: 100%;
  background-color: rgba(255, 255, 255, 1);
}
.box .top {
  padding: 10px 0;
  box-sizing: border-box;
}
.box .top .title {
  margin: auto;
  width: 356px;
  height: 70px;
  background: url(../../assets/image/shares.png);
  margin-bottom: 30px;
  text-align: center;
}
.box .top .title h2 {
  font-size: 24px;
  font-family: SourceHanSansSC-Bold;
  font-weight: bold;
  color: rgba(39, 93, 205, 1);
  line-height: 50px;
}
.box .top .title p {
  font-size: 14px;
  font-family: SourceHanSansSC-Regular;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
}
.box .top ul {
  position: relative;
}
.box .top ul li img {
  width: 213px;
  height: 73px;
}
.box .top ul li {
  /* flex: 1; */
  width: 335px;
  height: 317px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 21px 0px rgba(0, 0, 0, 0.08);
  border-radius: 6px;
  padding: 21px 0;
  text-align: center;
  font-size: 16px;
  font-family: MicrosoftYaHeiLight;
  font-weight: 300;
  color: rgba(51, 51, 51, 1);
  line-height: 45px;
  box-sizing: border-box;
  float: left;
  margin: 0 32px;
}
/* .box .top ul li:nth-child(3) {
  margin: 0;
} */
.box .top ul li button {
  width: 185px;
  height: 41px;
  background: rgba(243, 84, 84);
  border-radius: 20px;
  border: 0;
  color: #ffffff;
}
.box .top ul li p {
  font-size: 16px;
}
.box .top .left {
  width: 16px;
  height: 27px;
  background: url(../../assets/image/icon_1.png);
  position: absolute;
  left: 0;
  top: 135px;
  cursor: pointer;
  z-index: 100;
}
.box .top .right {
  width: 16px;
  height: 27px;
  background: url(../../assets/image/icon_2.png);
  position: absolute;
  right: 0;
  top: 135px;
  cursor: pointer;
  z-index: 100;
}
.content_right p {
  font-size: 15px;
}
.content {
  box-sizing: border-box;
}
.content_right {
  white-space: nowrap;
}
.left_btn {
  transform: translate(-10px);
}
.right_btn {
  transform: translate(10px);
}
</style>



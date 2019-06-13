<template>
  <div class="box">
    <div class="w1200">
      <!-- 股票 -->
      <div class="top">
        <div class="title">
          <h2>股票</h2>
          <p>广告语</p>
        </div>
        <ul>
          <li v-for="(item,index) in list" :key="index">
            <img src="../../assets/image/pingan.png" alt>
            <p>{{item.title}}</p>
            <p>{{item.info}}</p>
            <p>股市直播免费看</p>
            <button>我要开户</button>
          </li>
          <!-- <li>
            <img src="../../assets/image/pingan.png" alt>
            <p>万2.5佣金</p>
            <p>公募基金全线1折</p>
            <p>股市直播免费看</p>
            <button>我要开户</button>
          </li>
          <li>
            <img src="../../assets/image/pingan.png" alt>
            <p>万2.5佣金</p>
            <p>公募基金全线1折</p>
            <p>股市直播免费看</p>
            <button>我要开户</button>
          </li>
          <li>
            <img src="../../assets/image/pingan.png" alt>
            <p>万2.5佣金</p>
            <p>公募基金全线1折</p>
            <p>股市直播免费看</p>
            <button>我要开户</button>
          </li>-->
          <div class="clear"></div>
          <div class="left"></div>
          <div class="right"></div>
        </ul>
      </div>
      <!-- 期货 -->
      <div class="top">
        <div class="title">
          <h2>期货</h2>
          <p>广告语</p>
        </div>
        <ul>
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
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [],
      list1: []
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
        this.list1 = res.data.data.qihuo;
        // console.log(res.data.data.gupiao);
      });
  },

  methods: {}
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
  padding: 32px 0;
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
.box .top .left {
  width: 16px;
  height: 27px;
  background: url(../../assets/image/icon_1.png);
  position: absolute;
  left: 0;
  top: 135px;
}
.box .top .right {
  width: 16px;
  height: 27px;
  background: url(../../assets/image/icon_2.png);
  position: absolute;
  right: 0;
  top: 135px;
}
</style>



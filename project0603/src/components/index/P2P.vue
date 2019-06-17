<template>
  <div class="box">
    <!-- 左侧 -->
    <div class="left fl">
      <h2>P2P</h2>
      <button class="btn1">精选推荐</button>
      <!-- <button class="btn2">购车</button>
      <button class="btn3">购房</button>-->
      <span>更多></span>
    </div>
    <ul class="fl">
      <li v-for="(item,index) in list" :key="index">
        <div class="top">
          <img :src="'http://www.dc.com/'+item.logo" alt style="width:180px;height:52px">
          <p class="p1">恒信易贷 第3期首次出借活动</p>
          <button>借贷利率低</button>
          <p class="p2">666.66元</p>
          <p class="p3">返利红包</p>
        </div>
        <div class="bottom">
          <div class="left_box fl">
            <p class="p1">10.75-40.72%</p>
            <p class="p2">返利红包</p>
          </div>
          <div class="border fl"></div>
          <div class="right_box fl">
            <p class="p1">10000元</p>
            <p class="p2">最低出错</p>
          </div>
          <div class="clear"></div>
        </div>
        <button class="btn2">查看详情</button>
      </li>
      <!-- <li>
        <div class="top">
          <img src="../../assets/image/p2p.png" alt>
          <p class="p1">玖富普惠</p>
          <button>借贷利率低</button>
          <p class="p2">666.66元</p>
          <p class="p3">返利红包</p>
        </div>
        <div class="bottom">
          <div class="left_box fl">
            <p class="p1">10.75-40.72%</p>
            <p class="p2">返利红包</p>
          </div>
          <div class="border fl"></div>
          <div class="right_box fl">
            <p class="p1">10000元</p>
            <p class="p2">最低出错</p>
          </div>
          <div class="clear"></div>
        </div>
        <button class="btn2">查看详情</button>
      </li>
      <li>
        <div class="top">
          <img src="../../assets/image/p2p.png" alt>
          <p class="p1">玖富普惠</p>
          <button>借贷利率低</button>
          <p class="p2">666.66元</p>
          <p class="p3">返利红包</p>
        </div>
        <div class="bottom">
          <div class="left_box fl">
            <p class="p1">10.75-40.72%</p>
            <p class="p2">返利红包</p>
          </div>
          <div class="border fl"></div>
          <div class="right_box fl">
            <p class="p1">10000元</p>
            <p class="p2">最低出错</p>
          </div>
          <div class="clear"></div>
        </div>
        <button class="btn2">查看详情</button>
      </li>-->
    </ul>
    <div class="clear"></div>
    <img src="../../assets/image/icon_12.png" alt>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: []
    };
  },
  created() {
    // p2p数据
    this.$http.get("http://www.dc.com/").then(res => {
      this.list = res.data.data.jinxuantuijian.slice(0, 3);
      // console.log(res.data.data.jinxuantuijian);
    });
  }
};
</script>

<style scoped>
.box {
  width: 1200px;
  /* height: 400px; */
  margin: auto;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 21px 0px rgba(0, 0, 0, 0.08);
  margin-top: 50px;
  position: relative;
}
.box .left {
  width: 204px;
  height: 320px;
  background-color: rgba(255, 108, 88, 1);
  overflow: hidden;
  transform: translateY(-12px);
  background: url(../../assets/image/icon_30.png) no-repeat -50px 120px rgba(255, 108, 88, 1);
}
.box .left h2 {
  width: 119px;
  height: 52px;
  background: #ff8f7b;
  text-align: center;
  /* opacity: 0.2; */
  line-height: 52px;
  color: #fff;
  margin-top: 24px;
  font-size: 24px;
}
.box .left button {
  width: 127px;
  height: 42px;
  background: rgba(255, 255, 255, 1);
  border-radius: 10px;
  font-size: 18px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(246, 97, 92, 1);
  line-height: 27px;
  border: none;
  border: 1px solid rgba(255, 255, 255, 1);
  cursor: pointer;
}
.box .left .btn1 {
  margin: 39px 0 0 93px;
}
.box .left .btn2 {
  margin: 20px 0 0 93px;
  background: rgba(0, 0, 0, 0);
  color: #fff;
}
.box .left .btn3 {
  margin: 20px 0 0 93px;
  background: rgba(0, 0, 0, 0);
  color: #fff;
}
.box .left span {
  font-size: 14px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 27px;
  margin: 25px 0 0 140px;
  display: inline-block;
  cursor: pointer;
}

/*  */
.box ul {
  /* padding: 20px 70px 0; */
  box-sizing: border-box;
  overflow: hidden;
}
.top .p1 {
  font-size: 14px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  text-align: center;
  line-height: 28px;
}
.box .top button {
  width: 74px;
  height: 23px;
  border: 1px solid rgba(220, 220, 220, 1);
  border-radius: 6px;
  background-color: #fff;
  color: rgba(179, 179, 179, 1);
}
.box .top .p2 {
  font-size: 20px;
  font-family: MicrosoftYaHei-Bold;
  font-weight: bold;
  color: rgba(243, 84, 84, 1);
  line-height: 40px;
}
.box .top .p3 {
  font-size: 12px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(179, 179, 179, 1);
  line-height: 26px;
}
.box ul li .bottom {
  display: inline-block;
}
.box ul li .bottom .left_box {
  /* margin: 10px; */
  width: 165px;
}
.box ul li .bottom .right_box {
  /* margin: 10px; */
  width: 165px;
}
.box ul li .bottom .left_box .p1 {
  font-size: 14px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
}
.box ul li .bottom .left_box .p2 {
  font-size: 12px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(179, 179, 179, 1);
  line-height: 22px;
}
.box ul li .bottom .right_box .p2 {
  font-size: 12px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(179, 179, 179, 1);
  line-height: 22px;
}
.box ul li .bottom .border {
  width: 1px;
  height: 34px;
  background: rgba(230, 230, 230, 1);
}
.box ul li button {
  width: 186px;
  height: 41px;
  background: rgba(243, 84, 84, 1);
  border-radius: 21px;
  border: none;
  color: #fff;
}
.box ul li .btn2 {
  margin-top: 17px;
}
.box ul li {
  text-align: center;
  padding: 27px 0 0 0;
  width: 332px;
  height: 320px;
  float: left;
  box-sizing: border-box;
}
.box > img {
  position: absolute;
  top: -12px;
  left: 204px;
}
</style>


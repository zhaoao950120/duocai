<template>
  <div class="box">
    <!-- 左侧 -->
    <div class="left fl">
      <h2>信用卡</h2>
      <button class="btn1">热门推荐</button>
      <!-- <button class="btn2">购车</button>
      <button class="btn3">购房</button>-->
      <span>更多></span>
    </div>
    <!-- 列表 -->
    <ul>
      <li v-for="(item,index) in list" :key="index">
        <img
          :src="'http://api.duocai.jiaxunmedia.com/'+item.logo"
          alt
          style="width:197px;height:123px;    margin-bottom: 7px;"
        >
        <p
          style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;width: 194px;"
        >{{item.title}}</p>
        <p
          style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;width: 194px;"
        >{{item.slogan}}</p>
      </li>
    </ul>
    <img src="../../assets/image/icon_11.png" alt>
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
    // 信用卡数据
    this.$http.get("http://duocai.jiaxunmedia.com/duocaiapi/").then(res => {
      this.list = res.data.data.Recommended;
      console.log(this.list);
    });
  }
};
</script>

<style scoped>
.box {
  width: 1200px;
  height: 400px;
  margin: auto;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 21px 0px rgba(0, 0, 0, 0.08);
  margin-top: 50px;
  position: relative;
}
.box .left {
  width: 204px;
  height: 412px;
  /* background: linear-gradient(
    0deg,
    rgba(129, 159, 255, 1) 0%,
    rgba(125, 90, 255, 1) 100%
  ); */
  background: linear-gradient(
    0deg,
    rgba(122, 191, 255, 1) 0%,
    rgba(58, 164, 254, 1) 100%
  );
  overflow: hidden;
  transform: translateY(-12px);
  /* background: url(../../assets/image/icon_dt1.png) no-repeat 0 120px
    rgba(58, 164, 254, 1); */
  background: url(../../assets/image/icon_30.png) no-repeat -50px 120px rgba(58, 164, 254, 1);
}
.box .left h2 {
  width: 119px;
  height: 52px;
  background: #65b8fe;
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
  height: 406px;
  padding: 24px 0 0 38px;
  box-sizing: border-box;
  overflow: hidden;
  /* display: flex; */
}
.box ul li {
  width: 230px;
  
  float: left;
  font-size: 14px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 20px;
  margin-bottom: 17px;
  margin-right: 9px;
}
.box ul li p:nth-child(3) {
  color: rgba(128, 128, 128, 1);
}
.box > img {
  position: absolute;
  top: -12px;
  left: 204px;
}
</style>


<template>
  <div class="box">
    <div class="w1200">
      <ul class="list">
        <li v-for="(item,index) in list" :key="index">
          <div class="top">
            <img :src="'http://www.dc.com/'+item.logo" alt>
          </div>
          <div class="middle">
            <p style="height:104px">介绍：{{item.descript}}</p>
            <p style="height:31px;overflow:hidden">
              服务优势：
              <span
                v-for="(item1,index) in item.ys"
                :key="index"
                style="margin: 0 5px;"
              >{{item1}}</span>
            </p>
            <!-- <span>无资金要求万一开户</span>
            <span>股票两融佣金万一</span>-->
          </div>
          <div class="bottom">
            <div class="left fl">
              <ul style="width:226px;height:260px">
                <li class="fl" v-for="(item2,index) in item.image" :key="index">
                  <img :src="item2" alt>
                  <p>XXXXXXXX</p>
                </li>
                <!-- <li class="fl">
                  <div></div>
                  <p>XXXXXXXX</p>
                </li>
                <li class="fl">
                  <div></div>
                  <p>XXXXXXXX</p>
                </li>
                <li class="fl">
                  <div></div>
                  <p>XXXXXXXX</p>
                </li>-->
                <div class="clear"></div>
              </ul>
            </div>
            <div class="right fl">
              <img :src="item.qr_code" alt>
              <p>扫码开户</p>
            </div>
            <div class="clear"></div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [],
      list_ys: []
    };
  },
  created() {
    this.$http
      .get("http://api.duocai.jiaxunmedia.com/api/product?class_id=1", {
        params: {
          // second_category_name: "文学"
        }
      })
      .then(res => {
        this.list = res.data.data.list;
        console.log(this.list);
      });
  }
};
</script>
<style scoped>
.box {
  width: 100%;
}
.box .list {
  margin-top: 20px;
  position: relative;
  overflow: hidden;
}
.box .list > li {
  width: 542px;
  height: 514px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 21px 0px rgba(0, 0, 0, 0.08);
  border-radius: 6px;
  float: left;
  margin: 20px 20px 40px;
  padding: 22px 45px 0;
  box-sizing: border-box;
  position: relative;
  z-index: 100;
}
.box .list > li:nth-child(2n) {
  margin-left: 52px;
}
.box .list > li > .top {
  text-align: center;
}
.box .list > li img {
  width: 195px;
  height: 75px;
}
/*  */
.box .list > li > .middle {
}
.box .list > li > .middle p:nth-child(1) {
  font-size: 14px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(128, 128, 128, 1);
  line-height: 26px;
}
/* .box .list > li > .middle span:nth-child(2) {
  width: 64px;
  font-size: 14px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(128, 128, 128, 1);
} */
.box .list > li > .middle p span {
  /* width: 111px;   */
  /* height: 29px; */
  padding: 0 10px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(245, 112, 112, 1);
  border-radius: 6px;
  font-size: 12px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(245, 112, 112, 1);
  display: inline-block;
  text-align: center;
  line-height: 29px;
}
/*  */
.box .list > li > .bottom {
  padding-top: 20px;
}
.box .list > li > .bottom > .left {
  width: 50%;
  /* height: 215px; */
}
.box .list > li > .bottom > .right {
  /* width: 199px;
  height: 199px; */
  /* box-shadow: 0px 0px 21px 0px rgba(0, 0, 0, 0.16); */
  margin: 20px 0 0 20px;
}
.box .list > li > .bottom > .right > img {
  box-shadow: 0px 0px 21px 0px rgba(0, 0, 0, 0.16);
}
.box .list > li > .bottom > .right img {
  width: 199px;
  height: 199px;
  box-shadow: 0px 0px 21px 0px rgba(0, 0, 0, 0.16);
}
.box .list > li > .bottom > .right p {
  font-size: 16px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  text-align: center;
  line-height: 35px;
}
/*  */
.list li .bottom ul li {
  margin: 10px;
  text-align: center;
}
.list li .bottom ul li > img {
  width: 90px;
  height: 90px;
  background: rgba(243, 84, 84, 1);
  border-radius: 10px;
}
.list li .bottom ul li > p {
  line-height: 20px;
}
</style>



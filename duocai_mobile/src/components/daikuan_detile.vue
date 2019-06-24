<template>
  <div class="box">
    <div class="header"></div>
    <div class="box_1">
      <div class="top">
        <div class="left fl">
          <img :src="list.logo" alt>
        </div>
        <div class="right fl">
          <span>{{list.title}}</span>
          <span style="margin-left:0.2rem">{{list.number}}</span>
          <span>人申请</span>
          <p style>
            <span v-for="(item,index) in list.ys.slice(0,2)" :key="index" v-show="item">{{item}}</span>
            <!-- <span>借款期限长</span>
            <span>借款期限长</span>-->
          </p>
        </div>
        <div class="clear"></div>
      </div>
      <p class="p1">
        <span>额度范围：</span>
        <span>{{list.quota_amount}}</span>
        <span>借款期限：</span>
        <span>{{list.ew}}</span>
      </p>
      <p class="p2">{{list.slogan}}</p>
      <a :href="list.link">
        <button>立即申请</button>
      </a>
    </div>
    <div class="text">
      <div class="border fl"></div>
      <h2 class="fl">基本信息</h2>
      <div class="clear"></div>
      <p v-html="list.content"></p>
      <!-- <p>申请条件，申请条件申请条件申请条件申请条件</p> -->
    </div>
    <!-- 相关推荐 -->
    <div class="tuijian">
      <div class="border fl"></div>
      <h2 class="fl">相关推荐</h2>
      <div class="clear"></div>
      <ul>
        <li v-for="(item,index) in list1" :key="index" @click="tuijian(item.pid)">
          <div class="top">
            <img :src="'http://api.duocai.jiaxunmedia.com/'+item.logo" alt class="fl">
            <div class="right fl">
              <h3>{{item.title}}</h3>
              <p>{{item.slogan}}</p>
            </div>
            <div class="clear"></div>
          </div>
          <div class="bottom">
            <p class="fl" style="    width: 2.5rem;">
              <span>额度范围：</span>
              <span>{{item.quota_amount}}</span>
            </p>
            <p class="fl">
              <span>借款期限：</span>
              <span>{{item.ew}}</span>
            </p>
            <div class="clear"></div>
          </div>
        </li>
      </ul>
    </div>
    <!-- footer -->
    <footer>
      <p class="p1">
        中亿多财仅为信息发布平台，并不对第三方发布的金融服务信息的真实性及准确性负责，
        且不提供金融投资服务。
      </p>
      <p>市场有风险，投资需谨慎！</p>
      <p class="p3">2014-2019湖北中亿嘉讯传媒有限公司 未经书面授权禁止转载</p>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: "",
      pid: "",
      list1: []
    };
  },
  created() {
    this.pid = this.$route.params.id;
    // console.log(this.pid);
    this.$http
      .get("http://api.duocai.jiaxunmedia.com/api/product/Productinfo?", {
        params: {
          pid: this.pid
        }
      })
      .then(res => {
        this.list = res.data.data.list;
        console.log(res.data.data.list);
        this.list1 = res.data.data.recommend;
        // console.log(this.list1);
      });
  },
  mounted() {},
  methods: {
    tuijian(id) {
      console.log(id);
      this.$http
        .get("http://api.duocai.jiaxunmedia.com/api/product/Productinfo?", {
          params: {
            pid: id
          }
        })
        .then(res => {
          this.list = res.data.data.list;
          console.log(this.list);
        });
    }
  }
};
</script>
<style scoped>
.box {
  background-color: #fff;
}
.header {
  width: 100%;
  height: 3.09rem;
  background: url(../assets/banner11.png) no-repeat;
  background-size: auto;
  position: relative;
}
h1 {
  float: left;
  font-size: 0.4rem;
  font-family: SourceHanSerifSC-Regular;
  font-weight: 400;
  color: rgba(39, 93, 205, 1);
  margin-left: 0.37rem;
  margin-top: 0.27rem;
}
.box_1 {
  width: 6.87rem;
  /* height: 3.1rem; */
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.09);
  border-radius: 10px;
  margin: auto;
  padding: 0.3rem;
  box-sizing: border-box;
  /* position: absolute;
  top: 1.05rem;
  left: 0.3rem; */
  transform: translateY(-90px);
}
.box_1 img {
  width: 1.04rem;
  height: 1.04rem;
}
.box_1 .right {
  margin-left: 0.15rem;
}
.box_1 .right > span:nth-child(1) {
  font-size: 0.3rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 0.5rem;
}
.box_1 .right > span:nth-child(2) {
  font-size: 0.2rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(231, 78, 80, 1);
}

.box_1 .right > span:nth-child(3) {
  color: #808080;
  font-size: 0.2rem;
}
.box_1 .right p > span {
  border: 1px solid rgba(179, 179, 179, 1);
  border-radius: 6px;
  font-size: 0.16rem;
  color: rgba(153, 153, 153, 1);
  padding: 0 0.08rem;
  margin: 0 0.05rem;
}
.box_1 .p1 {
  font-size: 0.2rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(128, 128, 128, 1);
  line-height: 0.3rem;
  line-height: 0.8rem;
}
.box_1 .p1 span:nth-child(2n) {
  font-size: 0.2rem;
  font-weight: 400;
  color: #f35454;
}
.box_1 .p2 {
  height: 0.44rem;
  background: rgba(223, 233, 255, 1);
  font-size: 0.2rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(90, 142, 250, 1);
  text-align: center;
  line-height: 0.44rem;
}
.box_1 button {
  width: 4.5rem;
  height: 0.6rem;
  background: rgba(64, 124, 248, 1);
  box-shadow: 0px 4px 12px 1px rgba(64, 124, 248, 0.31);
  border-radius: 0.3rem;
  font-size: 0.2rem;
  color: rgba(255, 255, 255, 1);
  border: none;
  margin: auto;
  display: block;
  margin-top: 0.2rem;
}
.text {
  /* height: 6.6rem; */
  padding: 0 0.3rem 0;
  box-sizing: border-box;
  margin-top: -1rem;
}
.text .border {
  width: 0.06rem;
  height: 0.3rem;
  background: rgba(39, 93, 205, 1);
  border-radius: 3px;
  margin-top: 0.06rem;
  margin-right: 0.08rem;
}
.text h2 {
  display: inline;
}
.text p {
  font-size: 0.24rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 0.4rem;
}
/* 推荐 */
/* .tuijian {
  padding: 0 0.3rem;
} */
.tuijian .border {
  width: 0.06rem;
  height: 0.3rem;
  background: rgba(39, 93, 205, 1);
  border-radius: 3px;
  margin-top: 0.06rem;
  margin-right: 0.08rem;
  margin-left: 0.3rem;
}
.tuijian h2 {
  display: inline;
  /* margin-left: 10px; */
}
.tuijian ul li {
  width: 6.89rem;
  height: 1.73rem;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.09);
  border-radius: 0.1rem;
  margin-left: 0.3rem;
  padding: 0.3rem 0 0 0.3rem;
  box-sizing: border-box;
  margin-top: 0.15rem;
}
.tuijian ul li img {
  width: 0.79rem;
  height: 0.79rem;
  margin-right: 0.15rem;
}
.tuijian ul li h3 {
  font-size: 0.24rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 0.4rem;
}
.tuijian ul li p {
  font-size: 0.18rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(128, 128, 128, 1);
  line-height: 0.3rem;
}
.tuijian ul li .bottom p {
  font-size: 0.2rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(128, 128, 128, 1);
  line-height: 0.6rem;
}
.tuijian ul li .bottom p:nth-child(2) {
  margin-left: 1rem;
}
.tuijian ul li .bottom p span:nth-child(2) {
  color: #f35454;
}
footer {
  width: 7.5rem;
  /* height: 1rem; */
  background: rgba(51, 51, 51, 1);
  text-align: center;
  padding: 0 0.2rem;
  box-sizing: border-box;
}
footer p {
  font-size: 0.14rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(179, 179, 179, 1);
  line-height: 0.4rem;
}
.box_1 .right p {
  /* overflow: hidden; */
  text-overflow: ellipsis;
  /* white-space: nowrap; */
  max-width: 4.6rem;
}
.box_1 .right p span {
  /* padding: 0.05rem 0; */
  display: inline-block;
  margin: 0.05rem;
}
</style>



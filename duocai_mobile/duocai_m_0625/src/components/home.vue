<template>
  <div class="box">
    <div class="header">
      <h1>
        <img src="../assets/logo1.png" alt style="width:1.7rem">
      </h1>
      <div class="icon" @click="nav">
        <img src="../assets/icon_1.png" alt>
      </div>
    </div>
    <!-- 轮播图 -->
    <div class="lunbo">
      <mt-swipe :auto="2000">
        <mt-swipe-item v-for="(item,index) in list1" :key="index">
          <img :src="item.uri_path" alt style="height:3.42rem">
        </mt-swipe-item>
        <!-- <mt-swipe-item>
          <img src="http://img50.ddimg.cn/9003260117115410.jpg" alt style="height:100%">
        </mt-swipe-item>
        <mt-swipe-item>
          <img
            src="http://img61.ddimg.cn/upload_img/00678/zsts/750x315_dl_0531-1560153450.jpg"
            alt
            style="height:100%"
          >
        </mt-swipe-item>-->
      </mt-swipe>
    </div>
    <!-- 股票 -->
    <div class="gupiao">
      <div class="title">
        <div class="border"></div>
        <h3>股票</h3>
        <router-link :to="{name: 'gupiao'}">
          <span>更多 ></span>
        </router-link>
        <div class="clear"></div>
      </div>
      <ul>
        <li v-for="(item,index) in gupiao.slice(0,2)" :key="index" @click="goto_gupiao">
          <div class="top" style="margin-bottom: 0.1rem;">
            <img :src="'http://api.duocai.jiaxunmedia.com/'+item.logo" alt>
          </div>
          <div
            class="middle"
            v-for="(item1,index) in item.ys[0].slice(0,3)"
            :key="index"
            style="height:25px"
          >
            <p
              style="overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;margin:0 0.3rem"
            >{{item1}}</p>
            <!-- <p>万2.5佣金</p>
            <p>万2.5佣金</p>-->
          </div>
          <a :href="item.link">
            <mt-button style="margin-top: 0.1rem;" type="danger" size="small">立即开户</mt-button>
          </a>
        </li>
        <!-- <li>
          <div class="top">
            <img src="../assets/icon_3.png" alt>
          </div>
          <div class="middle">
            <p>万2.5佣金</p>
            <p>万2.5佣金</p>
            <p>万2.5佣金</p>
          </div>
          <mt-button type="danger" size="small">立即开户</mt-button>
        </li>-->
        <div class="clear"></div>
      </ul>
    </div>
    <!-- 期货 -->
    <div class="gupiao">
      <div class="title">
        <div class="border"></div>
        <h3>期货</h3>
        <span>更多 ></span>
        <div class="clear"></div>
      </div>
      <ul>
        <li v-for="(item,index) in qihuo.slice(0,2)" :key="index">
          <div class="top" style="margin-bottom: 0.1rem;">
            <img :src="'http://api.duocai.jiaxunmedia.com/'+item.logo" alt>
          </div>
          <div
            class="middle"
            v-for="(item1,index) in item.ys[0].slice(0,3)"
            :key="index"
            style="height:25px"
          >
            <p>{{item1}}</p>
            <!-- <p>万2.5佣金</p>
            <p>万2.5佣金</p>-->
          </div>
          <a :href="item.link">
            <mt-button style="margin-top: 0.1rem;" type="danger" size="small">立即开户</mt-button>
          </a>
        </li>
        <!-- <li>
          <div class="top">
            <img src="../assets/icon_3.png" alt>
          </div>
          <div class="middle">
            <p>万2.5佣金</p>
            <p>万2.5佣金</p>
            <p>万2.5佣金</p>
          </div>
          <mt-button type="danger" size="small">立即开户</mt-button>
        </li>-->
        <div class="clear"></div>
      </ul>
    </div>
    <!-- 贷款 -->
    <div class="daikuan">
      <div class="title">
        <div class="border"></div>
        <h3>贷款</h3>
        <router-link :to="{name: 'daikuan'}">
          <span>更多 ></span>
        </router-link>
        <div class="clear"></div>
      </div>
      <ul>
        <li v-for="(item,index) in daikuan.slice(0,4)" :key="index" @click="goto_dk(item.pid)">
          <div class="top" style="margin-bottom: 0.2rem;">
            <div class="top_left fl">
              <img :src="'http://api.duocai.jiaxunmedia.com/'+item.logo" alt>
            </div>
            <div class="top_right fl">
              <h4>{{item.title}}</h4>
              <p>{{item.slogan}}</p>
            </div>
            <div class="clear"></div>
          </div>
          <div class="middle">
            <div class="middle_left fl">
              <p>{{item.quota_amount}}</p>
              <p>额度范围</p>
            </div>
            <div class="middle_right fl">
              <p>1-3个月</p>
              <p>借款期限</p>
            </div>
            <div class="clear"></div>
          </div>
          <div class="bottom">
            <span>22.5万人申请</span>
            <button @click="goto_kaihu(item.link)">立即开户</button>
          </div>
        </li>
        <div class="clear"></div>
      </ul>
    </div>
    <!-- 信用卡 -->
    <div class="xinyongka">
      <div class="title">
        <div class="border"></div>
        <h3>信用卡</h3>
        <span>更多 ></span>
        <div class="clear"></div>
      </div>
      <ul>
        <li v-for="(item,index) in xinyongka.slice(0,4)" :key="index">
          <div class="left fl">
            <img :src="'http://api.duocai.jiaxunmedia.com/'+item.logo" alt>
          </div>
          <div class="right fl">
            <h3>{{item.title}}</h3>
            <p v-for="(item,index) in item.ys[0].slice(0,3)" :key="index">{{item}}</p>
            <!-- <p>新宿高岛屋百货公司每日5万</p>
            <p>尊享中国大陆机场贵宾厅免费服务</p>-->
            <div class="bottom">
              <button>立即申请</button>
              <p>
                <span>22.5万</span>人申请
              </p>
            </div>
          </div>
          <div class="clear"></div>
        </li>
        <div class="clear"></div>
      </ul>
    </div>
    <!-- p2p -->
    <div class="p2p">
      <div class="title">
        <div class="border"></div>
        <h3>P2P</h3>
        <span>更多 ></span>
        <div class="clear"></div>
      </div>
      <ul>
        <li v-for="(item,index) in p2p.slice(0,4)" :key="index">
          <div class="top">
            <div class="left fl">
              <img
                :src="'http://api.duocai.jiaxunmedia.com/'+item.logo"
                alt
                style="margin:0 0.1rem;"
              >
            </div>
            <div class="right fl" style="margin-top: -0.07rem;">
              <h3 class>{{item.title}}</h3>
              <p class>
                <span v-show="item.z_one" style="padding:0 0.1rem">{{item.z_one}}</span>
                <span v-show="item.z_two" style="padding:0 0.1rem">{{item.z_two}}</span>
              </p>

              <div class="clear"></div>
            </div>
            <div class="clear"></div>
          </div>
          <!-- <div class="div1"></div>
          <div class="div2"></div>-->
          <div class="bottom">
            <div class="bottom_left fl">
              <p>返利红包（元）</p>
              <p>{{item.gift}}</p>
            </div>
            <div class="bottom_middle fl">
              <p>出借门槛</p>
              <p style="line-height:0.6rem">{{item.mk}}（元）</p>
            </div>
            <div class="bottom_right fl">
              <p>投资回报率</p>
              <p style="line-height:0.6rem">{{item.rate}}</p>
            </div>
            <div class="clear"></div>
          </div>
          <div class="clear"></div>
        </li>
        <div class="clear"></div>
      </ul>
    </div>
    <!-- footer -->
    <footer>
      <p class="p1">
        中亿多财仅为信息发布平台，并不对第三方发布的金融服务信息的真实性及准确性负责，
        且不提供金融投资服务。市场有风险，投资需谨慎！2014-2019湖北中亿嘉讯传媒有限公司 未经书面授权禁止转载
      </p>
    </footer>
    <div class="zhezhao" v-if="showNav" @click="zhezhao"></div>
    <div class="nav" v-if="showNav">
      <h2>
        <img src="../assets/logo1.png" alt>
      </h2>
      <ul>
        <li @click="shouye">
          <i class="iconfont icon-xiazai45"></i>
          <span>首页</span>
          <span>></span>
        </li>
        <li @click="goto_gupiao">
          <i class="iconfont icon-gupiao"></i>
          <span>股票</span>
          <span>></span>
        </li>
        <li @click="goto_qihuo">
          <i class="iconfont icon-qihuo"></i>
          <span>期货</span>
          <span>></span>
        </li>
        <li @click="goto_daikuan">
          <i class="iconfont icon-weibiaoti5"></i>
          <span>贷款</span>
          <span>></span>
        </li>
        <li @click="goto_xinyongka">
          <i class="iconfont icon-xinyongqia1"></i>
          <span>信用卡</span>
          <span>></span>
        </li>
        <li @click="goto_p2p">
          <i class="iconfont icon-hangqing"></i>
          <span>P2P</span>
          <span>></span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showNav: false,
      list: [],
      gupiao: [],
      qihuo: [],
      daikuan: [],
      xinyongka: [],
      p2p: [],
      list1: []
    };
  },
  created() {
    this.$http
      .get("http://duocai.jiaxunmedia.com/duocaiapi/", {
        params: {}
      })
      .then(res => {
        this.list = res.data.data;
        console.log(this.list);
        this.gupiao = this.list.gupiao;
        this.qihuo = this.list.qihuo.slice(0, 2);
        this.daikuan = this.list.jinxuandaikuan;
        this.xinyongka = this.list.Recommended;
        this.p2p = this.list.jinxuantuijian;
      });
    // 轮播图
    this.$http
      .get(
        "http://api.duocai.jiaxunmedia.com/api/getBanner?swiper=3&class_id=0&client=1",
        {
          params: {}
        }
      )
      .then(res => {
        this.list1 = res.data.data;
        // console.log(this.list1);
      });
  },
  methods: {
    nav: function() {
      this.showNav = true;
    },
    zhezhao() {
      this.showNav = false;
    },
    goto_dk(id) {
      console.log(id);
      this.$router.push({
        name: "daikuan_detile",
        params: { id: id }
      });
    },
    shouye() {
      this.$router.go(0);
    },
    goto_gupiao() {
      this.$router.push({
        name: "gupiao"
      });
    },
    goto_qihuo() {},
    goto_daikuan() {
      this.$router.push({
        name: "daikuan"
      });
    },
    goto_xinyongka() {},
    goto_p2p() {},
    goto_kaihu(url) {
      window.location.href = url;
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
  height: 0.9rem;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.05);
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
.icon {
  float: right;
  margin: 0.34rem 0.3rem 0 0;
  cursor: pointer;
}
.icon img {
  width: 0.34rem;
  height: 0.28rem;
}
.lunbo {
  height: 3.42rem;
  width: 6.9rem;
  margin: auto;
  margin-top: 0.3rem;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  /* margin-bottom: 0.4rem; */
}
.lunbo img {
  width: 100%;
}
.gupiao {
  padding: 0 0.3rem;
}
.gupiao .title .border {
  width: 0.06rem;
  height: 0.3rem;
  background: rgba(39, 93, 205, 1);
  border-radius: 0.03rem;
  float: left;
  margin-top: 0.35rem;
  margin-right: 0.12rem;
}
.gupiao .title h3 {
  font-size: 0.3rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  float: left;
  line-height: 1rem;
}
.gupiao .title span {
  float: right;
  font-size: 0.24rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
  line-height: 1rem;
}
.gupiao ul li {
  width: 3.31rem;
  /* height: 2.98rem; */
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.09);
  border-radius: 10px;
  float: left;
  text-align: center;
}
.gupiao ul li:nth-child(1) {
  margin-right: 0.27rem;
}

.gupiao ul li .top img {
  width: 1.95rem;
  height: 0.75rem;
  margin: auto;
  margin-top: 0.2rem;
}
.gupiao ul li p {
  font-size: 0.2rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 0.4rem;
}
.gupiao ul li button {
  width: 3.31rem;
  height: 0.53rem;
  background: rgba(243, 84, 84, 1);
  border-radius: 0 0 0.1rem 0.1rem;
}
/* 贷款 */
.daikuan {
  padding: 0 0.3rem;
}
.daikuan .title .border {
  width: 0.06rem;
  height: 0.3rem;
  background: rgba(39, 93, 205, 1);
  border-radius: 0.03rem;
  float: left;
  margin-top: 0.35rem;
  margin-right: 0.12rem;
}
.daikuan .title h3 {
  font-size: 0.3rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  float: left;
  line-height: 1rem;
}
.daikuan .title span {
  float: right;
  font-size: 0.24rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
  line-height: 1rem;
}
.daikuan ul li:nth-child(2n) {
  margin-left: 0.27rem;
}
.daikuan ul li {
  width: 3.31rem;
  /* height: 2.79rem; */
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.09);
  border-radius: 10px;
  float: left;
  padding: 0.26rem 0 0 0.26rem;
  box-sizing: border-box;
  margin-bottom: 0.25rem;
}
.daikuan ul li img {
  width: 0.79rem;
  height: 0.79rem;
  margin-right: 0.15rem;
}
.daikuan ul li .top_right h4 {
  font-size: 0.24rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 0.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 2rem;
}
.daikuan ul li .top_right p {
  font-size: 0.18rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(128, 128, 128, 1);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 2rem;
}
.daikuan ul li .middle .middle_left {
  width: 50%;
  font-size: 0.2rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(243, 84, 84, 1);
  line-height: 0.4rem;
  text-align: center;
}
.daikuan ul li .middle .middle_left > p:nth-child(2) {
  color: #808080;
}
.daikuan ul li .middle .middle_right {
  width: 50%;
  font-size: 0.2rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(243, 84, 84, 1);
  line-height: 0.4rem;
  text-align: center;
}
.daikuan ul li .middle .middle_right > p:nth-child(2) {
  color: #808080;
}
.daikuan ul li .bottom {
  margin: 0.2rem 0;
  overflow: hidden;
}
.daikuan ul li .bottom span {
  font-size: 0.16rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(128, 128, 128, 1);
  line-height: 0.5rem;
  float: left;
}
.daikuan ul li .bottom button {
  width: 1.31rem;
  height: 0.48rem;
  background: rgba(243, 84, 84, 1);
  border-radius: 0.24rem;
  font-size: 0.2rem;
  color: #fff;
  border: none;
  float: right;
  margin-right: 0.1rem;
}
/* 信用卡 */
.xinyongka {
  padding: 0 0.3rem;
}
.xinyongka .title .border {
  width: 0.06rem;
  height: 0.3rem;
  background: rgba(39, 93, 205, 1);
  border-radius: 0.03rem;
  float: left;
  margin-top: 0.35rem;
  margin-right: 0.12rem;
}
.xinyongka .title h3 {
  font-size: 0.3rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  float: left;
  line-height: 1rem;
}
.xinyongka .title span {
  float: right;
  font-size: 0.24rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
  line-height: 1rem;
}
.xinyongka ul li {
  width: 6.89rem;
  /* height: 2.36rem; */
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.09);
  border-radius: 10px;
  padding: 0.26rem 0 0.2rem 0.26rem;
  box-sizing: border-box;
  margin-bottom: 0.2rem;
}
.xinyongka ul li img {
  width: 2.94rem;
  height: 1.84rem;
  margin-right: 0.25rem;
}
.xinyongka ul li .left {
  width: 48%;
}
.xinyongka ul li .right {
  width: 50%;
}
.xinyongka ul li .right h3 {
  font-size: 0.24rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  margin-bottom: 0.08rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 3.2rem;
}
.xinyongka ul li .right p {
  font-size: 0.16rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(128, 128, 128, 1);
  line-height: 0.25rem;
  height: 0.32rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 3.2rem;
}
.xinyongka ul li button {
  width: 1.3rem;
  height: 0.4rem;
  background: rgba(243, 84, 84, 1);
  border-radius: 24px;
  border: none;
  color: #fff;
  font-size: 0.2rem;
}
.xinyongka ul li .bottom p {
  font-size: 0.16rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  display: inline;
  margin-left: 0.27rem;
}
.xinyongka ul li .bottom p span {
  color: rgba(243, 84, 84, 1);
}
/* p2p */
.p2p {
  padding: 0 0.3rem;
}
.p2p .title .border {
  width: 0.06rem;
  height: 0.3rem;
  background: rgba(39, 93, 205, 1);
  border-radius: 0.03rem;
  float: left;
  margin-top: 0.35rem;
  margin-right: 0.12rem;
}
.p2p .title h3 {
  font-size: 0.3rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  float: left;
  line-height: 1rem;
}
.p2p .title span {
  float: right;
  font-size: 0.24rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
  line-height: 1rem;
}
.p2p ul li img {
  width: 2.16rem;
  height: 0.73rem;
}
.p2p ul li {
  width: 6.89rem;
  height: 2.32rem;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.09);
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 0.2rem;
}
/*  */
.p2p ul li .top {
  margin-top: 0.2rem;
  height: 49px;
}
.p2p ul li .right h3 {
  font-size: 0.24rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 0.4rem;
}
.p2p ul li .right p span {
  border: 1px solid rgba(243, 84, 84, 1);
  border-radius: 6px;
  font-weight: 400;
  color: rgba(243, 84, 84, 1);
  font-size: 0.14rem;
}
.p2p ul li .bottom > .bottom_left :nth-child(1) {
  border-right: 0;
}
.p2p ul li .bottom > div {
  width: 33%;
  /* height: 1rem; */
  text-align: center;
  border-left: 0.01rem solid rgba(230, 230, 230, 1);
  margin-top: 0.1rem;
}
.p2p ul li .bottom > div:nth-child(3) {
  border-right: 0;
}
.p2p ul li .fl > p:nth-child(1) {
  font-size: 0.18rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(128, 128, 128, 1);
  line-height: 0.3rem;
}

.p2p ul li .fl > p:nth-child(2) {
  font-size: 0.2rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 0.5rem;
}
.p2p ul li .bottom_left > p:nth-child(2) {
  font-size: 0.42rem;
  font-family: MicrosoftYaHei-Bold;
  font-weight: bold;
  color: rgba(243, 84, 84, 1);
  line-height: 0.65rem;
}
footer {
  width: 7.5rem;
  /* height: 1rem; */
  background: rgba(51, 51, 51, 1);
  text-align: center;
  padding: 0.2rem;
  box-sizing: border-box;
  margin-top: 0.2rem;
}
footer p {
  font-size: 0.14rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(179, 179, 179, 1);
  line-height: 0.4rem;
}
/* 导航 */
.zhezhao {
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.5;
  position: fixed;
  top: 0;
  right: 0;
}
.nav {
  width: 50%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  background-color: #fff;
}
.nav h2 img {
  width: 3.01rem;
  height: 1.01rem;
  margin: 0.81rem 0 0.8rem 0.46rem;
}
.nav ul li span {
  font-size: 0.3rem;
  font-family: SourceHanSansSC-Regular;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  margin-left: 0.2rem;
}
.nav ul li {
  padding: 10%;
  box-sizing: border-box;
  cursor: pointer;
}

.nav ul li span:nth-child(3) {
  float: right;
}
</style>



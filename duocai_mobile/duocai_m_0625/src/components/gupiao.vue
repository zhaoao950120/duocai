<template>
  <div class="box">
    <div class="top"></div>
    <ul>
      <li v-for="(item,index) in list.slice(0,3)" :key="index">
        <div class="title">
          <img :src="item.logo" alt>
        </div>
        <div class="content">
          <span>介绍：</span>
          <span>{{item.descript}}</span>
        </div>
        <div class="youshi">
          <div>
            <div class="title fl">
              <span style="    line-height: 0.6rem;">服务优势：</span>
            </div>
            <div class="ys_list fl">
              <span v-for="(item1,index) in item.ys.slice(0,2)" :key="index" style>{{item1}}</span>
            </div>
            <div class="clear"></div>
          </div>
        </div>
        <dl>
          <dd v-for="(item2,index) in item.image" :key="index" style="text-align:center">
            <img :src="item2" alt style="width:0.9rem;height:0.71rem;display:inline-block">
            <p>XXXXXXXX</p>
          </dd>
        </dl>
        <div class="btn">
          <a :href="item.link">
            <button>立即开户</button>
          </a>
        </div>
      </li>
    </ul>
    <footer>
      <p class="p1">
        中亿多财仅为信息发布平台，并不对第三方发布的金融服务信息的真实性及准确性负责，
        且不提供金融投资服务。市场有风险，投资需谨慎！2014-2019湖北中亿嘉讯传媒有限公司 未经书面授权禁止转载
      </p>
    </footer>
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
    this.$http
      .get("http://api.duocai.jiaxunmedia.com/api/product?class_id=1", {
        params: {}
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
  /* height: 20rem; */
  background-color: #766;
  background: url(../assets/banner10.png) no-repeat;
  background-size: 100%;
  overflow: hidden;
}
.box ul {
  width: 100%;
  margin-top: 8.3rem;
  background-color: #fb1e17;
  padding-bottom: 0.5rem;
}
.box ul li {
  width: 6.6rem;
  /* height: 6.1rem; */
  background-color: #fff;
  box-shadow: 0px 0px 21px 0px rgba(109, 3, 0, 0.16);
  border-radius: 6px;
  margin-left: 0.48rem;
  margin-bottom: 0.5rem;
  padding: 0 0.3rem;
  box-sizing: border-box;
}
.box ul li:nth-last-child(1) {
  margin-bottom: 0;
}
.box ul li .title {
  text-align: center;
}
.box ul li .title img {
  width: 3.09rem;
  height: 1.19rem;
  display: inline-block;
  margin-top: 0.3rem;
}
.box ul li .content {
  font-size: 0.2rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(128, 128, 128, 1);
  /* line-height: 0.32rem; */
  /* display: -webkit-box; */
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  /* overflow: hidden; */
}
.box ul li .content span:nth-child(2) {
  color: #333333;
}
.box ul li .youshi {
  font-size: 0.19rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(128, 128, 128, 1);
}
.box ul li .youshi span:nth-child(1) {
  display: inline-block;
}
.youshi > div > span {
  height: 0.39rem;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(245, 112, 112, 1);
  border-radius: 6px;
  font-size: 0.16rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(245, 112, 112, 1);
  /* padding: 0.05rem; */
  padding-left: 0.08rem;
  padding-right: 0.08rem;
  line-height: 0.42rem;
  display: inline-block;
  margin-top: 0.1rem;
}
.box ul li .youshi span:nth-child(2) {
  height: 0.39rem;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(245, 112, 112, 1);
  border-radius: 6px;
  font-size: 0.16rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(245, 112, 112, 1);
  /* padding: 0.05rem; */
  padding-left: 0.08rem;
  padding-right: 0.08rem;
  line-height: 0.42rem;
  display: inline-block;
  margin-top: 0.1rem;
}
.box ul li .youshi span:nth-child(3) {
  height: 0.39rem;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(245, 112, 112, 1);
  border-radius: 6px;
  font-size: 0.16rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(245, 112, 112, 1);
  /* padding: 0.05rem; */
  padding-left: 0.08rem;
  padding-right: 0.08rem;
  line-height: 0.42rem;
  margin-left: 0.2rem;
  display: inline-block;
  margin-top: 0.1rem;
}
.box ul li .youshi span:nth-child(4) {
  height: 0.39rem;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(245, 112, 112, 1);
  border-radius: 6px;
  font-size: 0.16rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(245, 112, 112, 1);
  padding: 0.05rem;
  padding-left: 0.08rem;
  padding-right: 0.08rem;
  margin: 0.2rem;
  /* box-sizing: border-box; */
}
.box ul li .youshi p {
  margin: 0.2rem 0;
}
.box ul li dl {
  display: flex;
  justify-content: space-around;
  height: 103px;
}
.box ul li dl dd {
  flex: 0.3;
  margin: 0.2rem 0;
  text-align: center;
}
.box ul li dl dd .img {
  width: 0.9rem;
  height: 0.71rem;
  background: rgba(243, 84, 84, 1);
  border-radius: 0.1rem;
  margin: auto;
}
.box ul li dl dd p {
  font-size: 0.14rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  margin: 0.2rem 0;
}
.btn {
  text-align: center;
}
.box ul li button {
  width: 3.33rem;
  height: 0.65rem;
  border-radius: 1rem;
  background-color: #ff850c;
  border: 0;
  color: #fff;
  margin: auto;
  display: inline-block;
  margin-bottom: 0.3rem;
}
h4 {
  font-size: 0.18rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(255, 181, 37, 1);
  line-height: 0.26rem;
  padding: 0 0.5rem;
  margin-top: 1rem;
  line-height: 0.3rem;
}
footer {
  width: 7.5rem;
  /* height: 1rem; */
  background: rgba(51, 51, 51, 1);
  text-align: center;
  padding: 0.2rem;
  box-sizing: border-box;
  /* margin-top: 0.2rem; */
}
footer p {
  font-size: 0.1rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(179, 179, 179, 1);
  line-height: 0.4rem;
}
ul li .youshi > div > .title {
  text-align: left;
}
.ys_list span {
  height: 0.39rem;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(245, 112, 112, 1);
  border-radius: 6px;
  font-size: 0.16rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(245, 112, 112, 1);
  /* padding: 0.05rem; */
  padding-left: 0.08rem;
  padding-right: 0.08rem;
  line-height: 0.42rem;
  margin-left: 0.2rem;
  display: inline-block;
  margin-top: 0.1rem;
}
.ys_list span:nth-child(1) {
  margin-left: 0;
}
</style>



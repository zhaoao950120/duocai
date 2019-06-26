<template>
  <div class="box">
    <img src="../assets/banner_daikuan.png" alt>
    <ul>
      <li v-for="(item,index) in list" :key="index" @click="goto(item.pid)">
        <div class="top">
          <img :src="item.logo" alt class="fl">
          <div class="top_middle fl">
            <div class="top_middle_t">
              <h2
                class="fl"
                style="width:1rem;overflow:hidden;
text-overflow:ellipsis;
white-space:nowrap;"
              >{{item.title}}</h2>

              <div class="clear"></div>
            </div>
            <div class="top_middle_b">
              <div class="b_left fl">
                <p>{{item.quota_amount}}</p>
                <p>额度范围</p>
              </div>
              <div class="b_right fl">
                <p style="height:15px">{{item.ew}}</p>
                <p>借款期限</p>
              </div>
            </div>
          </div>
          <div class="top_right fl">
            <span>{{item.number}}人申请</span>
            <a :href="item.link">
              <button @click.stop.prevent="goto_kaihu(item.link)">立即开户</button>
            </a>
          </div>
          <div class="clear"></div>
        </div>
        <p class="youshi">
          <span v-for="(item1,index) in item.ys.slice(0,2)" :key="index" v-show="item1">{{item1}}</span>
          <!-- <span>{{item.ys[0]}}</span> -->
          <!-- <span>范围广</span> -->
        </p>
        <div class="buttom">
          <p>{{item.slogan}}</p>
        </div>
      </li>
      <li @click="add">加载更多</li>
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
      list: [],
      pageIndex: 1
    };
  },
  created() {
    this.$http
      .get("http://api.duocai.jiaxunmedia.com/api/product?class_id=3", {
        params: {}
      })
      .then(res => {
        this.list = res.data.data.list;
        console.log(res.data.data);
      });
  },
  methods: {
    goto(id) {
      console.log(id);
      this.$router.push({
        name: "daikuan_detile",
        params: { id: id }
      });
    },
    add() {
      // var _this = this;
      // var index = 1;
      // index++;
      // ++index;
      // index = index + 1;
      this.pageIndex++;
      console.log(this.pageIndex);
      this.$http
        .get("http://api.duocai.jiaxunmedia.com/api/product?class_id=3", {
          params: {
            pageIndex: this.pageIndex
          }
        })
        .then(res => {
          this.list1 = res.data.data.list;
          console.log(this.list1);

          this.list = this.list.concat(this.list1);
          // window.location.reload();
        });
    },
    goto_kaihu(url) {
      window.location.href = url;
    }
  }
};
</script>
<style scoped>
.box {
  background-color: #0084ff;
}
.box img {
  width: 100%;
}
.box ul {
  /* text-align: center; */
  margin-top: -1.2rem;
  position: relative;
}
.box ul li {
  width: 6.91rem;
  /* height: 2.05rem; */
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 0.2rem 0px rgba(0, 0, 0, 0.09);
  border-radius: 0.1rem;
  margin: 0 auto;
  margin-bottom: 0.2rem;
}
.box ul li .top {
  display: flex;
  padding: 0.25rem 0 0 0.25rem;
  box-sizing: border-box;
}
.top_middle {
  flex: 0.7;
}
.top_right {
  flex: 0.3;
}
.box ul li .top > img {
  width: 1.05rem;
  height: 1.05rem;
  margin-right: 0.17rem;
}
.top_middle_t h2 {
  font-size: 0.24rem;
  font-family: MicrosoftYaHei;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
  line-height: 0.5rem;
}
.top_middle_t p {
  margin: 0.08rem 0.2rem;
}
.top_middle_t span {
  border: 1px solid rgba(220, 220, 220, 1);
  border-radius: 6px;
  font-size: 0.18rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(179, 179, 179, 1);
}

.top_middle_b {
  display: flex;
}
.b_left {
  flex: 0.4;
  border-right: 1px solid rgba(230, 230, 230, 1);
  text-align: left;
}
.b_right {
  flex: 0.5;
}
.b_left p {
  font-size: 0.2rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(243, 84, 84, 1);
  line-height: 0.3rem;
}
.b_left p:nth-child(2) {
  color: #808080;
}
.b_right p {
  font-size: 0.2rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(243, 84, 84, 1);
  line-height: 0.3rem;
  text-align: center;
}
.b_right p:nth-child(2) {
  color: #808080;
}
.top_right span {
  font-size: 0.16rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(128, 128, 128, 1);
  margin: 0.1rem 0;
  display: block;
}
.top_right {
  text-align: center;
  transform: translateY(0.19rem);
}
.top_right button {
  width: 1.31rem;
  height: 0.43rem;
  background: rgba(243, 84, 84, 1);
  border-radius: 22px;
  color: #ffffff;
  border: none;
  font-size: 0.2rem;
}
.box ul li .buttom {
  border-top: 1px dashed rgba(230, 230, 230, 1);
  margin-top: 0.2rem;
}
.box ul li .buttom p {
  font-size: 0.18rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(128, 128, 128, 1);
  line-height: 0.5rem;
  text-indent: 0.2rem;
}
.box ul li:nth-last-child(1) {
  height: 0.48rem;
  text-align: center;
  font-size: 0.2rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  line-height: 0.48rem;
  color: rgba(128, 128, 128, 1);
}
.box > p {
  font-size: 0.18rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 0.26rem;
  opacity: 0.5;
  text-align: center;
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

/* 优势 */
.youshi {
  /* overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis; */
  margin-top: 0.2rem;
  margin-left: 0.2rem;
}
.youshi span {
  margin: 0 0.05rem;
  /* overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; */
  /* width: 0.5rem; */
  font-size: 0.2rem;
  color: #808080;
  border: 1px solid rgba(179, 179, 179, 1);
  border-radius: 6px;
  display: inline-block;
  margin: 0.05rem;
  padding: 0 0.1rem;
}
</style>



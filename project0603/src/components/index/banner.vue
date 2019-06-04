<template>
  <div class="box">
    <div class="w1200">
      <div class="left fl">
        <ul>
          <li>
            <i></i>
            <p>股票</p>
          </li>
          <li>
            <i></i>
            <p>贷款</p>
          </li>
          <li>
            <i></i>
            <p>P2P</p>
          </li>
        </ul>
      </div>
      <div class="moddie fl">
        <!-- <h2>筛选条件</h2>
      <div>
        <ul>
          <li>上证A股</li>
          <li>深证股</li>
        </ul>
        </div>-->
      </div>
      <div class="right fl">
        <img src alt>
      </div>
      <div class="clear"></div>
    </div>
  </div>
</template>
<script>
// import axios from "axios";
export default {
  data() {
    return {};
  },
  mounted() {
    // var url = "https://www.dc.com/";
    // var params = {};
    // axios({
    //   method: "get",
    //   url: url,
    //   data: params
    // })
    //   .then(res => {
    //     console.log("成功");
    //   })
    //   .catch(err => {
    //     console.log("失败");
    //   });

    // this.$ajax
    //   .get("https://www.dc.com/", {
    //     params: {}
    //   })
    //   .then(res => {
    //     console.log(res.data);
    //   });
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
        this.list = res.data.result;
        console.log(res.data);
      });
  },

  methods: {}
};
</script>
<style scoped>
.box {
  width: 100%;
  height: 332px;
  background: rgba(39, 93, 205, 1);
  padding-top: 20px;
  box-sizing: border-box;
}
.left ul li {
  width: 98px;
  height: 94px;
  background-color: #fff;
  border-radius: 6px;
  text-align: center;
  color: rgba(39, 93, 205, 1);
  margin-bottom: 5px;
}
.left ul li:nth-child(2),
.left ul li:nth-child(3) {
  background-color: #93aee6;
  color: #fff;
}

.left ul li i {
  width: 29px;
  height: 32px;
  margin-top: 19px;
  background: url(../../assets/image/icon_gp.png);
  display: inline-block;
  background-size: 100% 100%;
}
.left ul li:nth-child(2) i {
  background-image: url(../../assets/image/icon_dk1.png);
}
.left ul li:nth-child(3) i {
  background-image: url(../../assets/image/icon_gp1.png);
}
.left ul li:hover {
  background-color: #fff;
  color: rgba(39, 93, 205, 1);
}
/* .left ul li:nth-child(2):hover {
  background-image: url(../../assets/image/icon_dk.png);
} */
.moddie {
  width: 376px;
  height: 292px;
  background-color: #fff;
  margin-left: 5px;
  border-radius: 6px;
}
.right {
  width: 711px;
  height: 292px;
  background: rgba(255, 255, 255, 1);
  border-radius: 6px;
  margin-left: 5px;
}
</style>



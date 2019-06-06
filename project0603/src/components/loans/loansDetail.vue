<template>
  <div class="box">
    <div class="banner"></div>
    <div class="w1200">
      <div class="mine">
        <div class="left fl">
          <!-- 头部框 -->
          <div class="left_top">
            <div class="logo fl">
              <img src="../../assets/image/icon_daikuan.png" alt>
            </div>
            <div class="details fl">
              <div class="title">
                <h2>XX贷款</h2>
                <span>超低利率，极速审批</span>
              </div>
              <div class="mine">
                <span>额度范围：</span>
                <span>3000-8000</span>
                <span>借款期限：</span>
                <span>1-3个月</span>
              </div>
              <div class="entry">
                <span>放款快</span>
                <span>范围广</span>
              </div>
            </div>
            <div class="btn fr">
              <p>
                <span>9999人</span>申请成功
              </p>
              <button>立即借款</button>
            </div>
            <div class="clear"></div>
          </div>

          <!-- 文本框 -->
          <div class="left_text">
            <h3>基本信息</h3>
            <div class="text_content">
              <h4>申请条件</h4>
              <p>申请条件，申请条件申请条件申请条件申请条件</p>
              <h4>所需材料</h4>
              <p>所需材料，所需材料，所需材料，所需材料</p>
              <h4>审核说明</h4>
              <p>系统审核</p>
              <h4>平台介绍</h4>
              <p>新平台，下款稳</p>
            </div>
          </div>
        </div>
        <!-- 推荐产品 -->
        <div class="right fl">
          <h2>相关产品</h2>
          <ul>
            <li>
              <div class="list_top">
                <div class="image fl">
                  <img src="../../assets/image/douyin.jpg" alt>
                </div>
                <div class="content fl">
                  <h3>抖音贷款</h3>
                  <p>这里是slogan</p>
                </div>
                <div class="clear"></div>
              </div>
              <div class="list_bottom">
                <span>范围：</span>
                <span>3000-8000</span>
                <span>期限：</span>
                <span>1-3个月</span>
              </div>
              <div class="border"></div>
            </li>
            <li>
              <div class="list_top">
                <div class="image fl">
                  <img src="../../assets/image/douyin.jpg" alt>
                </div>
                <div class="content fl">
                  <h3>抖音贷款</h3>
                  <p>这里是slogan</p>
                </div>
                <div class="clear"></div>
              </div>
              <div class="list_bottom">
                <span>范围：</span>
                <span>3000-8000</span>
                <span>期限：</span>
                <span>1-3个月</span>
              </div>
              <div class="border"></div>
            </li>
            <li>
              <div class="list_top">
                <div class="image fl">
                  <img src="../../assets/image/douyin.jpg" alt>
                </div>
                <div class="content fl">
                  <h3>抖音贷款</h3>
                  <p>这里是slogan</p>
                </div>
                <div class="clear"></div>
              </div>
              <div class="list_bottom">
                <span>范围：</span>
                <span>3000-8000</span>
                <span>期限：</span>
                <span>1-3个月</span>
              </div>
              <div class="border"></div>
            </li>
            <li>
              <div class="list_top">
                <div class="image fl">
                  <img src="../../assets/image/douyin.jpg" alt>
                </div>
                <div class="content fl">
                  <h3>抖音贷款</h3>
                  <p>这里是slogan</p>
                </div>
                <div class="clear"></div>
              </div>
              <div class="list_bottom">
                <span>范围：</span>
                <span>3000-8000</span>
                <span>期限：</span>
                <span>1-3个月</span>
              </div>
            </li>
          </ul>
        </div>
        <div class="clear"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.box {
  width: 100%;
  height: 712px;
  position: relative;
}
.box .banner {
  background: url(../../assets/image/banner3.png);
  width: 100%;
  height: 203px;
}
.w1200 > .mine {
  position: absolute;
  top: 90px;
}
.left_top {
  width: 910px;
  height: 152px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 21px 0px rgba(0, 0, 0, 0.08);
  border-radius: 6px;
  padding: 30px 30px 0;
  box-sizing: border-box;
}

/* top框 */
.btn {
  width: 165px;
}
.btn p {
  font-size: 14px;
  font-family: MicrosoftYaHei;
  font-weight: 400;

  margin: 20px 0 0 10px;
}
.btn span {
  color: rgba(243, 84, 84, 1);
}
.box .left .left_top {
  /* width: 885px; */
  height: 152px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 21px 0px rgba(0, 0, 0, 0.08);
  border-radius: 6px;
  margin-bottom: 32px;
  padding: 25px;
  box-sizing: border-box;
  position: relative;
}
.box .left .left_top img {
  margin-right: 12px;
}
.box .left .left_top .title h2 {
  font-size: 20px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  display: inline;
  line-height: 38px;
}
.box .left .left_top .title span {
  width: 126px;
  height: 14px;
  font-size: 14px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(128, 128, 128, 1);
}
.box .left .left_top .mine span {
  font-size: 14px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 33px;
  display: inline-block;
}

.box .left .left_top .mine span:nth-child(2n) {
  color: #f35454;
}
.box .left .left_top .entry span {
  width: 49px;
  height: 23px;
  border: 1px solid rgba(220, 220, 220, 1);
  border-radius: 6px;
  color: rgba(179, 179, 179, 1);
}
.box .left .left_top button {
  width: 161px;
  height: 40px;
  background: rgba(243, 84, 84, 1);
  border-radius: 20px;
  border: none;
  color: #ffffff;
  position: absolute;
  top: 80px;
  right: 38px;
}
/* 文本框 */
.left_text {
  width: 909px;
  height: 407px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 21px 0px rgba(0, 0, 0, 0.08);
  border-radius: 6px;
}

.left_text h3 {
  font-size: 16px;
  font-family: MicrosoftYaHei-Bold;
  font-weight: bold;
  color: rgba(39, 93, 205, 1);
  line-height: 50px;
  border-bottom: solid 1px rgba(230, 230, 230, 1);
  text-indent: 20px;
  box-sizing: border-box;
}

.left_text .text_content {
  padding-left: 28px;
  box-sizing: border-box;
}
/* .left_text .text_content h4 div {
  width: 5px;
  height: 5px;
  background: rgba(39, 93, 205, 1);
  border-radius: 50%;
} */
.left_text .text_content h4 {
  font-size: 16px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 50px;
}
.left_text .text_content p {
  font-size: 14px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(128, 128, 128, 1);
  line-height: 27px;
}

/* right框 */
.mine .right {
  width: 260px;
  height: 591px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 21px 0px rgba(0, 0, 0, 0.08);
  border-radius: 6px;
  margin-left: 30px;
  padding: 20px;
  box-sizing: border-box;
}
.mine .right h2 {
  text-align: center;
  font-size: 18px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(128, 128, 128, 1);
  line-height: 49px;
}
.mine .right ul li {
  height: 136px;
  /* width: 260px; */
  padding: 13px 0 0 0;
  box-sizing: border-box;
}
.mine .right ul li img {
  margin-right: 10px;
}
.mine .right ul li h3 {
  font-size: 18px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 35px;
}
.mine .right ul li .content p {
  font-size: 14px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(128, 128, 128, 1);
  /* line-height: 49px; */
}
.mine .right ul li .list_bottom span {
  font-size: 14px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(128, 128, 128, 1);
}
.mine .right ul li .list_bottom span:nth-child(2n) {
  color: #f35454;
}
.mine .right ul li .border {
  width: 219px;
  height: 1px;
  background: rgba(230, 230, 230, 1);
  margin-top: 20px;
}
</style>



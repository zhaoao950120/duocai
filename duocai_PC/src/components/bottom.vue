<template>
  <div class="box">
    <p>
      中亿·多财郑重提醒：市场有风险，投资需谨慎！ |
      <span @click="mianze" class="mianze">免责声明</span>
    </p>
    <p>©2014-2019©湖北中亿嘉讯传媒有限公司 未经书面授权禁</p>
  </div>
</template>
<script>
export default {
  methods: {
    mianze() {
      this.$alert(
        "<p class='text_p'>在您浏览或选购理财产品前，敬请仔细阅读如下声明：</br></br>1.您所浏览或选择的理财产品均由第三方负责提供，中亿·多财仅为第三方提供展示平台或网页链接服务，所有与理财产品有关的咨询或问题请您直接与理财产品的供应方联系，中亿·多财不提供任何理财服务。</br></br>2.中亿·多财向您所展示的内容，并不构成中亿·多财对您购买、持有、出售或处理相关理财产品的建议或暗示，也不应被理解为中亿·多财向您承诺任何有关保本或者盈利的保障。中亿·多财不对您提供任何形式的担保或保证。</br></br>3.您应当知悉并同意，所有投资均有风险，投资需谨慎。您的所有行为应当基于独立的思考和判断并自行完成，由此产生的任何盈亏均由您自行承担，中亿·多财不对您的投资行为及其产生的任何争议或纠纷承担任何法律责任。您继续浏览或选购的行为将被视为您已仔细阅读并接受上述声明。</p>",
        "免责声明",
        {
          dangerouslyUseHTMLString: true
        }
      );
    }
  }
};
</script>
<style scoped>
.box {
  width: 100%;
  height: 80px;
  background: rgba(51, 51, 51, 1);
  padding-top: 15px;
  box-sizing: border-box;
  position: relative;
  bottom: 0;
}
.box p {
  font-size: 14px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(179, 179, 179, 1);
  line-height: 30px;
  text-align: center;
}
.mianze {
  cursor: pointer;
}

.el-message-box__btns {
  text-align: center;
}
.text_p {
  text-align: left;
}
</style>



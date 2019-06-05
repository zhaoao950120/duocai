<template>
  <div class="box">
    <div class="image">
      <img src="../../assets/image/banner1.png" alt>
    </div>
    <form action>
      <h2>预约开户</h2>
      <input type="text" placeholder="请输入您的姓名">
      <input type="text" placeholder="请输入您的手机号">
      <button>立即预约开户</button>
    </form>
    <div class="yun">
      <img src="../../assets/image/cloud.png" alt>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.box {
  width: 100%;
  height: 540px;
  position: relative;
}
.box .image img {
  width: 100%;
  height: 540px;
}
.box form {
  width: 265px;
  height: 250px;
  background: rgba(0, 0, 0, 1);
  opacity: 0.4;
  border-radius: 6px;
  position: absolute;
  left: 1293px;
  top: 172px;
  text-align: center;
}
.box form h2 {
  font-size: 20px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(204, 204, 204, 1);
  line-height: 49px;
  margin-top: 10px;
  text-align: center;
}
.box form input {
  width: 206px;
  height: 36px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(221, 221, 221, 1);
  border-radius: 6px;
  opacity: 0.5;
  color: #ffffff;
  margin-bottom: 20px;
}
.box form button {
  width: 206px;
  height: 36px;
  background: rgba(0, 153, 255, 1);
  border-radius: 18px;
  border: none;
}
.box .yun {
  width: 100%;
  height: 264px;
  position: absolute;
  left: 0;
  bottom: -65px;
}
.box .yun img {
  width: 100%;
  height: 264px;
}
</style>



<template>
  <div class="box">
    <div class="header">
      <h1>中亿·多财</h1>
      <div class="icon">
        <img src="../assets/icon_1.png" alt>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
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
</style>



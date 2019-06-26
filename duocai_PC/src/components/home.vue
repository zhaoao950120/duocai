<template>
  <div class="box">
    <top id="top"></top>
    <banner></banner>
    <mine id="gupiao"></mine>
    <mine-dk id="daikuan"></mine-dk>
    <mine-xyk id="xinyongka"></mine-xyk>
    <p2p id="p2p"></p2p>
    <foot></foot>
    <!-- 电梯 -->
    <div class="xuanfu">
      <ul>
        <li>
          <a href="#gupiao">
            <p>股票</p>
          </a>
        </li>
        <li>
          <a href="#gupiao">
            <p>期货</p>
          </a>
        </li>
        <li>
          <a href="#daikuan">
            <p>贷款</p>
          </a>
        </li>
        <li>
          <a href="#xinyongka">
            <p>信用卡</p>
          </a>
        </li>
        <li>
          <a href="#p2p">
            <p>P2P</p>
          </a>
        </li>
        <li>
          <a href="#top">
            <img src="../assets/image/icon_20.png" alt>
            <h5>返回顶部</h5>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import top from "@/components/top.vue";
import banner from "@/components/index/banner";
import mine from "@/components/index/mine1";
import mineDk from "@/components/index/mine_dk";
import mineXyk from "@/components/index/mine_xyk";
import p2p from "@/components/index/P2P";
import foot from "@/components/foot.vue";

// $(function() {
//   alert("234");
// });

export default {
  components: {
    top,
    banner,
    mine,
    mineDk,
    mineXyk,
    p2p,
    foot
  }
};
</script>
<style scoped>
.xuanfu {
  width: 66px;
  /* height: 316px; */
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  position: fixed;
  top: 405px;
  right: 180px;
}
.xuanfu ul li {
  text-align: center;
  cursor: pointer;
}
.xuanfu ul li:hover {
  background: rgb(82, 82, 255);
}
.xuanfu ul li:hover a {
  color: #ffffff;
}
.xuanfu ul li p {
  height: 54px;
  line-height: 54px;
  text-align: center;
  border-bottom: 1px dashed rgba(238, 238, 238, 1);
}
.xuanfu ul li > img {
  margin-top: 17px;
}
.xuanfu ul li h5 {
  font-size: 12px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
  line-height: 23px;
}
.leirong {
  background-color: blue;
}
</style>



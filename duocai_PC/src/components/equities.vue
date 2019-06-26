<template>
  <div class="box">
    <top></top>
    <list></list>
    <bottom></bottom>
    <!-- 客服 -->
    <!-- <div class="livechat-girl animated">
      <img class="girl" src="../assets/image/en_3.png">
      <div
        class="livechat-hint rd-notice-tooltip rd-notice-type-success rd-notice-position-left single-line show_hint"
      >
        <div class="rd-notice-content">嘿，我来帮您！</div>
      </div>
      <div class="animated-circles">
        <div class="circle c-1"></div>
        <div class="circle c-2"></div>
        <div class="circle c-3"></div>
      </div>
    </div>-->
  </div>
</template>
<script>
import top from "@/components/equities/top";
import list from "@/components/equities/list";
import bottom from "@/components/bottom";

export default {
  components: {
    top,
    list,
    bottom
  }
};
</script>
<style scoped>
</style>



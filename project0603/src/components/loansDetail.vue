<template>
  <div class="box">
    <top></top>
    <loansDetail></loansDetail>
    <bottom></bottom>
  </div>
</template>
<script>
import top from "@/components/top.vue";
import loansDetail from "@/components/loans/loansDetail.vue";
import bottom from "@/components/bottom.vue";

export default {
  components: {
    top,
    loansDetail,
    bottom
  }
};
</script>
<style scoped>
/* .box {
  width: 100%;
  height: 80px;
  background: rgba(51, 51, 51, 1);
  padding-top: 15px;
  box-sizing: border-box;
} */
</style>



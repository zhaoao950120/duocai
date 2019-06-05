<template>
  <div class="box">
    <top></top>
    <banner></banner>
    <!-- <mine></mine> -->
    <mine-dk></mine-dk>
    <mine-xyk></mine-xyk>
    <p2p></p2p>
    <foot></foot>
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
</style>



<template>
  <div class="box">
    <top></top>
    <list></list>
    <bottom></bottom>
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



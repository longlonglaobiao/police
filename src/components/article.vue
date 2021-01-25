<template>
  <div class="content">
    <controller></controller>
    <div class="main">详情页</div>
  </div>
</template>
<script>
import controller from "@/components/controller.vue";
export default {
  components: { controller },
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
@import "@/assets/style/common.less";
</style>
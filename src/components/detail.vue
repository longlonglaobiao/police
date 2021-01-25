<template>
  <div class="content">
    <controller></controller>
    <div class="main">
      <div id="main" style="width: 600px; height: 400px"></div>
    </div>
  </div>
</template>
<script>
import controller from "@/components/controller.vue";
export default {
  components: { controller },
  data() {
    return {};
  },
  methods: {
    myEcharts() {},
  },
  mounted() {
    this.myEcharts();
  },
};
</script>
<style lang="less" scoped>
@import "@/assets/style/common.less";
</style>
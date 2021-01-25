<template>
  <div class="content">
    <controller></controller>
    <div class="main">
      <div class="all">
        <div style="margin-right: 150px">
          <img style="height: 300px; width: 200px" :src="man" alt="" />
        </div>
        <div class="steps">
          <div class="arrangr box-shadow">第一步</div>
          <img :src="arrow" alt="" />
          <div class="arrangr box-shadow">第二步</div>
          <img :src="arrow" alt="" />
          <div class="arrangr box-shadow">第三步</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import arrow from "@/assets/imgs/arrow.png";
import man from "@/assets/imgs/man.png";
import controller from "@/components/controller.vue";
export default {
  components: { controller },
  data() {
    return {
      arrow: arrow,
      man: man,
    };
  },
};
</script>
<style lang="less" scoped>
@import "@/assets/style/common.less";
.arrangr {
  padding: 15px 30px;
  font-size: 30px;
  border-radius: 8px;
  color: white;
  display: inline-block;
}
.all {
  display: flex;
  width: 500px;
  margin: 0 auto;
  position: relative;
  left: -100px;
}
</style>
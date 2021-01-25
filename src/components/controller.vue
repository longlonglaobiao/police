<template>
  <div class="controller">
    <div class="police-btns">
      <router-link to="/home">
        <div class="police-btn">
          <img :src="yellow" alt="" />
          <span>首页</span>
        </div>
      </router-link>
      <div @click="$router.back(-1)" class="police-btn">
        <img :src="yellow" alt="" />
        <span>上一页</span>
      </div>
    </div>
  </div>
</template>
<script>
import btn1 from "@/assets/imgs/btn1.png";
import yellow from "@/assets/imgs/yellow-btn.png";
import red from "@/assets/imgs/red-btn.png";
export default {
  data() {
    return {
      yellow: yellow,
      red: red,
      btn1: btn1,
    };
  },
};
</script>
<style lang="less" scoped>
@import "@/assets/style/common.less";
</style>
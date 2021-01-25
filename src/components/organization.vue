<template>
  <div class="content">
    <div class="police-btns">
      <router-link to="/home">
        <div class="police-btn">
          <img :src="blue" alt="" />
          <span>首页</span>
        </div>
      </router-link>
      <div @click="backPage" class="police-btn">
        <img :src="blue" alt="" />
        <span>上一页</span>
      </div>
    </div>
    <div class="main">
      <div class="ceng">
        <div>
          <router-link to="/placeman?cls=所领导">
            <div class="arrangr box-shadow" style="width: 200px; height: 120px">
              所领导
            </div>
          </router-link>
        </div>
        <div>
          <router-link to="/placeman?cls=勤务指挥室">
            <div class="arrangr box-shadow" style="height: 80px">
              勤务指挥室
            </div></router-link
          >
          <router-link to="/placeman?cls=案件办理队,案件队,禁毒">
            <div class="arrangr box-shadow">案件办理队</div>
          </router-link>
        </div>
        <div>
          <router-link to="/placeman?cls=勤务指挥室">
            <div class="arrangr box-shadow">巡逻防控队</div>
          </router-link>

          <router-link to="/placeman?cls=社区,户政">
            <div class="arrangr box-shadow">基层基础队</div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import blue from "@/assets/imgs/btn-blue.png";

import controller from "@/components/controller.vue";
export default {
  data() {
    return {
      blue: blue,
    };
  },
  components: { controller },
  methods: {
    backPage() {
      this.$router.go(-1);
    },
  },
};
</script>
<style lang="less" scoped>
@import "@/assets/style/common.less";
</style>
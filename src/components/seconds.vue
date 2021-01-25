<template>
  <div class="content">
    <controller></controller>
    <div class="main">
      <div class="plane-menus">
        <router-link
          v-for="(item, i) in MF[findex].child[index].child"
          :key="`seconds${i}`"
          to=""
        >
          <div class="menu-item">
            <div class="flex-col-center">
              <img :src="btn1" alt="" />
            </div>
            <div class="menu-name">
              <span>{{ item.title }}</span>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import banli from "@/assets/imgs/banli.png";
import churu from "@/assets/imgs/churu.png";
import btn1 from "@/assets/imgs/btn1.png";
import hukou from "@/assets/imgs/hukou.png";
import jiaot from "@/assets/imgs/jiaot.png";
import controller from "@/components/controller.vue";
export default {
  components: { controller },
  data() {
    return {
      banli: banli,
      churu: churu,
      hukou: hukou,
      jiaot: jiaot,
      btn1: btn1,
      MF: this.$store.state.MF,
      index: this.$route.query.index,
      findex: this.$route.query.findex,
    };
  },
  mounted() {
    console.log("seconds", this.MF[this.findex].child[this.index].child);
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
</style>
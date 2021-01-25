<template>
  <div class="header">
    <div>
      <img class="logo" :src="logo" alt="" />
      <span class="logo-title">将军路派出所</span>
    </div>
    <div>
      <span style="font-size: 40px"> 奉公执法, 身正廉洁 </span>
    </div>
    <div ondblclick="closeWin()">
      <span style="font-size: 20px">{{ date }}</span>
    </div>
  </div>
</template>
<script>
import utils from "@/assets/utils/common.js";
import logo from "@/assets/imgs/logo.png";
export default {
  data() {
    return {
      logo: logo,
    };
  },
  computed: {
    date() {
      return utils.formatDate(new Date(), "yyyy年MM月dd日 hh:mm:ss");
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  display: flex;
  justify-content: space-between;
  padding: 0 50px;
  /* background-color: rgba(43, 132, 255, 0.8);*/
  background-color: white;

  /*background-color: rgba(28, 55, 136, 0.9);*/
  align-items: center;
  font-size: 30px;
  border-bottom: 1px solid #bbb;
  height: 100px;
  color: red;
  & > div {
    display: flex;
    align-items: center;
  }
  .logo {
    width: 100px;
    height: 100px;
  }
  .logo-title {
    margin-left: 20px;
    font-size: 50px;
  }
}
</style>
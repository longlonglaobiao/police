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
      <div class="policeman" id="policeman">
        <div class="man" v-for="(item, i) in people" :key="`people${i}`">
          <img
            :src="`/src/assets/data/man/${item.img}.jpg`"
            onerror="javascript:this.src='/src/assets/data/man/default.png'"
            alt=""
          />
          <div class="man-info">
            <span> 姓名 : {{ item[0] }} </span>
            <span> 职务 : {{ item[3] }} </span>
            <span> 警号 : {{ item[4] == "#" ? "" : item[4] }} </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import blue from "@/assets/imgs/btn-blue.png";
import user from "@/assets/imgs/user.jpg";
import controller from "@/components/controller.vue";
import xlsx from "xlsx";
import axios from "axios";
import utils from "@/assets/utils/common.js";

export default {
  components: { controller },
  data() {
    return {
      // 图片类型
      // picType: ["jpg", "png", "jpeg"],
      user: user,
      content: {},
      cls: this.$route.query.cls,
      blue: blue,
      people: [],
    };
  },
  created() {},
  async mounted() {
    this.content = await this.loadMan("src/assets/data/man/data.xlsx");
    this.content = this.content.splice(1);

    let arr = this.cls.split(",");
    this.people = this.content.filter((v) => {
      return arr.findIndex((a) => a === v[5]) != -1;
    });
    this.people = this.people.map((v) => {
      let img = v[0].replaceAll("　", "");
      console.log(img, v[0]);
      return {
        ...v,
        img: img,
      };
    });
    console.log("people", this.people);
  },
  methods: {
    backPage() {
      this.$router.go(-1);
    },
    async loadMan(url) {
      let res = await axios.get(url, {
        responseType: "arraybuffer",
      });

      var data = new Uint8Array(res.data);
      var wb = xlsx.read(data, { type: "array" });
      var sheets = wb.Sheets;
      console.log("人员信息 sheets", sheets["人员信息"]);

      return utils.transformSheets(sheets);
    },
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
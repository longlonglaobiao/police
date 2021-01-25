<template>
  <div>
    <div class="content flex-row-between">
      <div class="left">
        <div class="top">
          <div class="header-title">
            <img :src="leader" alt="" />
            <span>值班领导</span>
          </div>
          <div class="user flex-col-center" id="duty_leader">
            <div class="user-img flex-row-center">
              <img
                id="leader_img"
                :src="`./src/assets/data/man/${user.img}.jpg`"
                onerror="javascript:this.src='./src/assets/data/man/default.png'"
              />
            </div>
            <div class="user-info">
              <span>姓名 : {{ user.name }}</span>
              <span>职务 : {{ user.zhi }}</span>
              <span>警号 : {{ user.code }}</span>
            </div>
          </div>
        </div>
        <div class="bottom">
          <div class="header-title">
            <img :src="law" alt="" />
            <span>值班组</span>
          </div>
          <div style="padding: 0 20px">
            <h3>{{ duty.name }}</h3>
            <p>{{ duty.desc }}</p>
          </div>
        </div>
      </div>
      <div class="right flex-center">
        <div class="menus">
          <router-link to="/organization">
            <div class="menu-item">
              <div class="flex-col-center mybtn">
                <img :src="s01" alt="" />
              </div>
              <div class="menu-name">
                <span>内部机构</span>
              </div>
            </div>
          </router-link>
          <router-link
            v-for="(item, index) in MF.slice(1)"
            :to="`/process?index=${index + 1}`"
            :key="`process${index + 1}`"
          >
            <div class="menu-item">
              <div class="flex-col-center mybtn">
                <img :src="`/src/assets/imgs/${item.icon}`" alt="" />
              </div>
              <div class="menu-name">
                <span>{{ item.title }}</span>
              </div>
            </div>
          </router-link>
          <!--router-link to="/open">
            <div class="menu-item">
              <div class="flex-col-center">
                <img :src="btn1" />
              </div>
              <div class="menu-name">
                <span>警务公开</span>
              </div>
            </div>
          </router-link>
          <router-link to="/law">
            <div class="menu-item">
              <div class="flex-col-center">
                <img :src="btn1" />
              </div>
              <div class="menu-name">
                <span>执法办案</span>
              </div>
            </div>
          </router-link> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import btn1 from "@/assets/imgs/btn1.png";
import s01 from "@/assets/imgs/s01.png";
import s02 from "@/assets/imgs/s02.png";
import s03 from "@/assets/imgs/s03.png";
import s04 from "@/assets/imgs/s04.png";
import leader from "@/assets/imgs/leader.png";
import law from "@/assets/imgs/law.png";
import hejun from "@/assets/data/man/何俊.jpg";
import axios from "axios";
import xlsx from "xlsx";
import utils from "@/assets/utils/common.js";
export default {
  data() {
    return {
      s01: s01,
      s02: s02,
      s03: s03,
      s04: s04,
      leader: leader,
      law: law,
      hejun: hejun,
      btn1: btn1,
      content: [],
      user: { name: "", zhi: "", code: "", img: "" },
      MF: this.$store.state.MF,
      duty: { name: "", desc: "" },
    };
  },
  async mounted() {
    console.log("loadMan");
    await this.loadMan("src/assets/data/man/data.xlsx");
    // this.content = this.content.splice(1);

    // console.log("contentcontent", this.content);
  },
  methods: {
    async loadMan(url) {
      let res = await axios.get(url, {
        responseType: "arraybuffer",
      });
      var data = new Uint8Array(res.data);
      var wb = xlsx.read(data, { type: "array" });
      var sheets = wb.Sheets;

      console.log("commit");
      this.$store.commit("setDataXlsx", sheets);

      setTimeout(() => {
        console.log("state");
        console.log(this.$store.state);
      }, 1000 * 3);

      console.log("sheets", sheets["值班领导"]);

      //this.$nextTick(() => {
      this.user.name = sheets["值班领导"]["A2"]["v"];
      this.user.zhi = sheets["值班领导"]["D2"]["v"];
      this.user.code = sheets["值班领导"]["E2"]["v"];
      this.user.img = sheets["值班领导"]["A2"]["v"].replaceAll("　", "");

      this.duty.name = sheets["值班组"]["A2"]["v"];
      this.duty.desc = sheets["值班组"]["B2"]["v"];
      //});

      console.log("sheets", sheets["值班组"]);
      // return utils.transformSheets(sheets["值班领导"]);
    },
  },
};
</script>
<style lang="less" scoped>
@import "@/assets/style/common.less";

.menus {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: space-between;
  width: 60%;
  height: 85%;
  color: white;
  margin: 30px auto;
  font-size: 30px;
  text-align: center;
}

.menus a {
  color: white;
  text-decoration: none;
}
/*
.menus .menu-item {
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
/*
.menus .menu-item img {
  width: 300px !important;
  height: 300px !important;
}

.menus .menu-item .menu-name {
  width: 100%;
  font-size: 30px;
  height: 50px;
  line-height: 50px;
  margin-top: -50px;
  position: relative;
  top: -30px;
}

.menus .menu-item .icon {
  height: 200px;
  border-radius: 20px;
  width: 100%;
  background-color: #016699;
}*/
</style>
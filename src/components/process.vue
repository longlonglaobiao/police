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
      <div class="plane-menus" v-if="curtent.length > 1">
        <div
          v-for="(item, i) in curtent"
          :key="`seconds${i}`"
          class="menu-item"
          @click="to(i)"
        >
          <div class="flex-col-center mybtn">
            <img :src="`/src/assets/imgs/${item.icon}`" alt="" />
          </div>
          <div class="menu-name">
            <span>{{ item.title }}</span>
          </div>
        </div>
      </div>
      <div
        v-else
        ref="neirong"
        class="neirong"
        id="neirong"
        style="color: white; font-size: 20px"
        v-show="!xNei"
      >
        暂无内容，敬请期待！
      </div>
      <div v-show="xNei" class="neirong">
        <div id="wedit" ref="wedit"></div>
      </div>
    </div>
  </div>
</template>
<script>
import E from "wangeditor";
import yellow from "@/assets/imgs/yellow-btn.png";
import red from "@/assets/imgs/red-btn.png";
import banli from "@/assets/imgs/banli.png";
import blue from "@/assets/imgs/btn-blue.png";

import churu from "@/assets/imgs/churu.png";
import btn1 from "@/assets/imgs/btn1.png";
import hukou from "@/assets/imgs/hukou.png";
import jiaot from "@/assets/imgs/jiaot.png";
import controller from "@/components/controller.vue";
import path from "path";

export default {
  components: { controller },
  data() {
    return {
      banli: banli,
      churu: churu,
      hukou: hukou,
      blue: blue,
      jiaot: jiaot,
      btn1: btn1,
      yellow: yellow,
      red: red,
      curtent: [],
      lasttent: [],
      xNei: false,
      level: 1,
      result: null,
      MF: this.$store.state.MF,
      editor: {},
      dirCache: {},
      db: null,
      history: [],
      index: this.$route.query.index,
    };
  },
  mounted() {
    this.history = [];
    this.initDB("police", "info");

    setTimeout(() => {
      this.update("info");
    }, 1000 * 5);

    this.curtent = this.MF[this.index].child;
    let that = this;
    that.editor = new E("#wedit");
    that.editor.create();
    document.onkeydown = function (e) {
      if (that.curtent.length > 1) return;

      console.log(">>", that.curtent);
      //事件对象兼容
      let e1 =
        e || event || window.event || arguments.callee.caller.arguments[0];
      console.log("e1", e1);
      if (e1.ctrlKey && e1.code == "KeyA") {
        that.xNei = true;
      }
      if (e1.ctrlKey && e1.code == "KeyS") {
        e1.preventDefault();
        that.xNei = false;
        let html = that.editor.txt.html();

        console.log(html);
      }
    };
  },

  methods: {
    initData() {},
    backPage() {
      if (this.history.length == 0) {
        this.$router.push("/home");
      }
      this.curtent = this.history.pop();
    },
    update(table) {
      var request = this.db
        .transaction([table], "readwrite")
        .objectStore(table)
        .put({
          id: 1,
          name: "李四",
          age: 35,
          email: "lisi@example.com",
        });

      request.onsuccess = function (event) {
        console.log("数据更新成功");
      };

      request.onerror = function (event) {
        console.log("数据更新失败");
      };
    },
    remove(databaseName, table, key = 1) {
      var request = this.db
        .transaction([table], "readwrite")
        .objectStore(table)
        .delete(key);

      request.onsuccess = function (event) {
        console.log("数据删除成功");
      };
    },
    read(table, key = 1) {
      let that = this;
      var transaction = this.db.transaction([table]);
      var objectStore = transaction.objectStore(table);
      console.log("objectStore", objectStore);
      var request = objectStore.get(key);

      console.log("request", request);

      request.onerror = function (event) {
        console.log("事务失败");
      };

      request.onsuccess = function (event) {
        console.log("succes", request.result);
        that.result = request.result;
      };
    },
    add(table, obj) {
      console.log("xxx", this.db);
      var request = this.db
        .transaction([table], "readwrite")
        .objectStore(table)
        .add(obj);

      request.onsuccess = function (event) {
        console.log("数据写入成功");
      };

      request.onerror = function (event) {
        console.log("数据写入失败");
      };
    },
    to(i) {
      this.history.push(this.curtent);
      this.curtent = this.curtent[i].child;
    },
    initDB(databaseName, table) {
      let that = this;
      var request = indexedDB.open(databaseName);
      request.onerror = function (event) {
        console.log("数据库打开报错");
      };
      request.onsuccess = function (event) {
        that.db = request.result;
        console.log("数据库打开成功", that.db);
      };
      request.onupgradeneeded = function (event) {
        that.db = event.target.result;
        console.log("...");
        var objectStore;
        if (!that.db.objectStoreNames.contains(table)) {
          objectStore = that.db.createObjectStore(table, {
            autoIncrement: true,
          });
        }
      };
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
.neirong {
  width: 80%;
  margin: 0 auto;
  color: #333;
}
</style>
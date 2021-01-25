import Vue from "vue";
import App from "./app.vue";
import router from './router/router'
import store from './store/store'

// import ECharts from 'vue-echarts'

// Vue.prototype.$echarts = ECharts
let root = document.createElement("div");
document.body.appendChild(root);
// console.log("MMMMMM", ECharts)
// console.log("<<<<<<<<<<<", Vue.prototype.$echarts)
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount(root);

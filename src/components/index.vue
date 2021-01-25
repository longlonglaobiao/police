<template>
  <div style="height: 100vh" class="flex-col">
    <police-head></police-head>
    <router-view style="height: calc(100vh - 100px)"></router-view>
  </div>
</template>
<script>
import PoliceHead from "@/components/header.vue";
export default {
  components: { PoliceHead },
};
</script>

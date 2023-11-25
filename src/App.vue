<template>
  <div>
    <navbar />
    <router-view />
  </div>
</template>
<script>
import navbar from "@/components/Header.vue";

export default {
  name: "homePage",
  components: {
    navbar,
  },
};
</script>
<style></style>

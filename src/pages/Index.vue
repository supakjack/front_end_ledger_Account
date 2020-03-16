<template>
  <q-page class="flex flex-center">
    <img alt="Quasar logo" src="~assets/fondao-mae.gif" />
  </q-page>
</template>

<script>
import $store from "../store/State";
export default {
  name: "PageIndex",
  mounted() {
    setTimeout(() => this.$router.push({ path: "/authen" }), 3000);
  }
};
</script>

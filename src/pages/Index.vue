<template>
  <q-page class="flex flex-center">
    <img alt="Quasar logo" src="~assets/fondao-mae.gif" />
  </q-page>
</template>

<script>
export default {
  name: "PageIndex",
  mounted() {
    setTimeout(() => this.$router.push({ path: "/home" }), 3000);
  }
};
</script>

<template>
  <div id="app" md-theme="default-app" class="background">
    <Navigation />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";

export default {
  components: {
    Navigation
  }
};
</script>

<style lang="scss">
html {
  height: auto;
  background-color: #bdbdbd;
}
@import "~vue-material/dist/theme/engine";
@include md-register-theme(
  "default-app",
  (
    primary: md-get-palette-color(cyan, 800),
    accent: md-get-palette-color(brown, 500)
  )
);
@import "~vue-material/dist/theme/all";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  min-height: 100vh;
}

#nav {
  margin-top: 40px;
}
</style>

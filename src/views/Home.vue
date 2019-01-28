<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <md-card md-theme="home">
      <md-card-header>
        <div class="md-title">Material Design with Vue.js 2 Demo</div>
        <div class="md-subhead">by CodingTheSmartWay.com</div>
        <md-button class="md-raised md-primary">Test Button</md-button>
      </md-card-header>
    </md-card>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>

<style lang="scss" scoped>
@import "~vue-material/dist/theme/engine";
@include md-register-theme(
  "home",
  (
    primary: md-get-palette-color(cyan, 800),
    accent: md-get-palette-color(brown, 500),
    theme: light
  )
);
@import "~vue-material/dist/theme/all";
.md-card {
  width: 500px;
  display: inline-block;
}
.md-content {
  padding: 16px;
}
</style>

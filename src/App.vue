<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/pets">Pets</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "~vue-material/dist/theme/engine";
@include md-register-theme(
  "default",
  (
    background: md-get-palette-color(grey, 400)
  )
);
@import "~vue-material/dist/theme/all";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>

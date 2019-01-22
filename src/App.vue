<template>
  <div id="app" md-theme="default-app" class="background">
    <div id="nav">
      <md-button md-theme="default-app" class="md-flat md-primary">
        <router-link to="/">Home</router-link>
      </md-button>
      <md-button md-theme="default-app" class="md-flat md-primary">
        <router-link to="/about">About</router-link>
      </md-button>
      <md-button md-theme="default-app" class="md-flat md-primary">
        <router-link to="/pets">Pets</router-link>
      </md-button>
      <md-button md-theme="default-app" class="md-flat md-primary">
        <router-link to="/shelters">Shelters</router-link>
      </md-button>
    </div>
    <router-view/>
  </div>
</template>

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

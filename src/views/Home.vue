<template>
  <div class="home md-layout-column">
    <md-toolbar md-theme="default-app" class="md-primary">
      <md-button class="md-icon-button" @click="showNavigation = true">
        <md-icon>menu</md-icon>
      </md-button>
      <span class="md-title">Pawws</span>
    </md-toolbar>

    <md-drawer :md-active.sync="showNavigation" md-theme="home">
      <md-toolbar  md-elevation="0">
        <span class="md-title">Navigation</span>
      </md-toolbar>

      <md-list>
        <md-list-item>
          <md-icon>home</md-icon>
          <span class="md-list-item-text">
            <router-link to="/home" active-class="active">Home</router-link>
          </span>
        </md-list-item>

        <md-list-item>
          <md-icon>school</md-icon>
          <span class="md-list-item-text">
            <router-link to="/about" active-class="active">About</router-link>
          </span>
        </md-list-item>

        <md-list-item>
          <md-icon>location_city</md-icon>
          <span class="md-list-item-text">
            <router-link to="/shelters" active-class="active">Shelters</router-link>
          </span>
        </md-list-item>

        <md-list-item>
          <md-icon>pets</md-icon>
          <span class="md-list-item-text">
            <router-link to="/pets" class="nav-link">Pets</router-link>
          </span>
        </md-list-item>
      </md-list>
    </md-drawer>
    <md-content>
      <img alt="Vue logo" src="../assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
      <md-card md-theme="home">
        <md-card-header>
          <div class="md-title">Material Design with Vue.js 2 Demo</div>
          <div class="md-subhead">by CodingTheSmartWay.com</div>
          <md-button md-theme="default-app" class="md-raised md-primary">Test Button</md-button>
        </md-card-header>
      </md-card>
    </md-content>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  data: () => ({
    showNavigation: false
  })
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
@import "~vue-material/dist/components/MdCard/theme";
@import "~vue-material/dist/components/MdDrawer/theme";
.nav-link {
  text-decoration: none;
}
.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}
.md-card {
  width: 500px;
  display: inline-block;
}
.md-content {
  padding: 16px;
}
</style>

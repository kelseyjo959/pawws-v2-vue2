<template>
  <div class="nav md-layout-column">
    <md-toolbar md-theme="default-app" class="md-primary">
      <md-button class="md-icon-button" @click="showNavigation = true">
        <md-icon>menu</md-icon>
      </md-button>
      <span class="md-title">Pawws</span>
    </md-toolbar>

    <md-drawer :md-active.sync="showNavigation" md-theme="nav">
      <md-toolbar  md-elevation="0">
        <span class="md-title">Navigation</span>
      </md-toolbar>

      <md-button>
        <md-icon>home</md-icon>
        <router-link to="/">Home</router-link>
      </md-button>

      <md-list>
        <md-list-item>
          <router-link exact to="/">
            <md-icon class="md-primary">person</md-icon>
            <span>My Profile</span>
          </router-link>
        </md-list-item>

        <md-list-item>
          <md-icon>home</md-icon>
          <span class="md-list-item-text">
            <router-link to="/" active-class="active">Home</router-link>
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
            <router-link to="/pets" class="md-button"><a>Pets</a></router-link>
          </span>
        </md-list-item>
      </md-list>
    </md-drawer>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data: () => ({
    showNavigation: false
  })
};
</script>

<style lang="scss" scoped>
@import "~vue-material/dist/theme/engine";
@include md-register-theme(
  "nav",
  (
    primary: md-get-palette-color(cyan, 800),
    accent: md-get-palette-color(brown, 500),
    theme: light
  )
);
@import "~vue-material/dist/components/MdDrawer/theme";
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

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

    <md-list>
      <!-- with icons but not happy -->
      <md-list-item>
      <md-button>
        <md-icon class="icon-link">home</md-icon>
        <router-link to="/" active-class="active">Home</router-link>
      </md-button>
      </md-list-item>

      <md-list-item>
       <md-button>
        <md-icon class="icon-link">school</md-icon>
        <router-link to="/about">About</router-link>
      </md-button>
      </md-list-item>

      <md-list-item>
       <md-button>
        <md-icon class="icon-link">location_city</md-icon>
        <router-link to="/shelters">Shelters</router-link>
      </md-button>
      </md-list-item>

      <md-list-item>
        <span>
        <md-button>
          <md-icon class="icon-link">pets</md-icon>
          <router-link to="/pets">Pets</router-link>
        </md-button>

        </span>
      </md-list-item>
    </md-list>

      <md-list>
        <!-- happy -->
        <md-list-item >
          <span md-theme="nav" class="md-list-item-text md-button md-primary">
            <router-link to="/" active-class="active" class="link md-button">Home</router-link>
          </span>
        </md-list-item>

        <md-list-item>
          <span class="md-list-item-text md-button">
            <router-link to="/about" class="link md-button">About</router-link>
          </span>
        </md-list-item>

        <md-list-item>
          <span class="md-list-item-text md-button">
            <router-link to="/shelters" class="link md-button">Shelters</router-link>
          </span>
        </md-list-item>

        <md-list-item>
          <span class="md-list-item-text md-button">
            <router-link to="/pets" class="link md-button">Pets</router-link>
          </span>
        </md-list-item>

        <md-list-item>
          <!-- unhappy -->
          <router-link to="/pets">
            <md-button>Pets</md-button>
          </router-link>
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
.md-list-item-text {
  display: flex;
  align-content: center;
}
.icon-link {
  padding-right: 50px;
}
.link {
  display: flex;
  justify-content: center;
  align-self: center;
}
</style>

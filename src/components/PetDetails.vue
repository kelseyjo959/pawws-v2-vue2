<template>
  <div class="pet">
    <md-card md-with-hover md-theme="default-card" class="md-primary">
      <md-card-media>
        <img v-bind:src="pet.img_url" />
      </md-card-media>

      <md-card-header>
        <div class="md-title">{{ pet.name }}</div>
        <div class="md-subhead">{{ pet.species }}</div>
        <div class="md-subhead">{{ pet.breed }}</div>
        <div class="md-subhead">{{ pet.gender }}</div>
        <div class="md-subhead">{{ pet.age }}</div>

      </md-card-header>

      <md-card-expand>
        <div>
          <md-button v-bind:href="pet.profile_url" md-theme="default-card" class="md-accent md-raised">Adopt me!</md-button>
        </div>
      </md-card-expand>
    </md-card>
  </div>
</template>
<script>
export default {
  name: "PetDetails",
  props: {
    pet: Object
  }
};
</script>

<style lang="scss">
@import "~vue-material/dist/theme/engine";
@include md-register-theme(
  "default-card",
  (
    primary: md-get-palette-color(cyan, 800),
    accent: md-get-palette-color(brown, 500)
  )
);
@import "~vue-material/dist/theme/all";
.pet {
  display: flex;
  justify-content: center;
}

.md-card {
  width: 320px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}
</style>

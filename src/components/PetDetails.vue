<template>
  <div class="pet-details">
    <md-card md-with-hover md-theme="default-card" class="md-primary">
      <md-card-media>
        <img v-bind:src="pet.img_url" />
      </md-card-media>

      <md-card-area md-inset>
        <md-card-header>
          <div class="md-title">{{ pet.name }}</div>
          <div class="md-body-1">{{ pet.species }}</div>
          <div class="md-body-1">{{ pet.breed }}</div>
          <div class="md-body-1">{{ pet.gender }}</div>
          <div class="md-body-1">{{ pet.age }}</div>
        </md-card-header>
      </md-card-area>
      <md-button v-bind:href="pet.profile_url" class="md-accent md-raised">Adopt me!</md-button>
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

<style lang="scss" scoped>
@import "~vue-material/dist/theme/engine";
@include md-register-theme(
  "default-card",
  (
    primary: md-get-palette-color(cyan, 800),
    accent: md-get-palette-color(brown, 500)
  )
);
@import "~vue-material/dist/theme/all";
.pet-details {
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

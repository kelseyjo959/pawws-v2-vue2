<template>
  <div class="pet">
    <md-card>
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
          <md-button>Adopt me!</md-button>
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

<style scoped>
.pet {
  height: 480px;
}

.md-card {
  width: 320px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}
</style>

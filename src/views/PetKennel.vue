<template>
  <div class="pet-kennel">
    <md-content>
    <h1>This the pets page</h1>
    <div class="pet-container">
      <PetDetails v-for="pet in pets" :key="pet.name" :pet="pet" />
    </div>
    </md-content>
  </div>
</template>

<script>
import PetDetails from "../components/PetDetails.vue";
export default {
  name: "PetKennel",
  components: {
    PetDetails
  },
  mounted() {
    this.$store.dispatch("getPets");
  },
  computed: {
    pets() {
      return this.$store.state.pets;
    }
  }
};
</script>

<style lang="scss">
.pet-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>

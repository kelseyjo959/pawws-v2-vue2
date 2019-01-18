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
import axios from "axios";
import PetDetails from "../components/PetDetails.vue";
export default {
  name: "pet-kennel",
  components: {
    PetDetails
  },
  data() {
    return {
      pets: []
    };
  },
  created() {
    axios
      .get("http://localhost:3000/getPets", {
        headers: {
          screenSize: window.width,
          shelter: "",
          count: 0
        }
      })
      .then(response => {
        this.pets = response.data;
      })
      .catch(error => console.log(error));
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

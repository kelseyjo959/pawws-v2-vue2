<template>
  <div class="pet-kennel">
    <h1>This the pets page</h1>
    <button v-on:click="getPets">Click for pets</button>
    <PetDetails v-for="pet in pets" :key="pet.name" :pet="pet" />
  </div>
</template>

<script>
import axios from 'axios';
import PetDetails from '../components/PetDetails.vue'
export default {
  name: 'pet-kennel',
  components: {
    PetDetails
  },
  data () {
    return {
      pets: []
    }
  },
  methods: {
    getPets: function () {
      console.log('I was clicked')
      return axios.get('http://localhost:3000/getPets', {
        headers: {
          "screenSize": window.width,
          "shelter": "",
          "count": 0,
        }
      })
        .then((response) => {
          console.log("I was set");
          this.pets = response.data;
        }) 
        .catch(error => console.log(error));
    }
  }
}
</script>
<template>
  <div class="shelters">
    <md-tabs md-theme="default-app" class="md-accent" md-alignment="centered">
      <md-tab md-label="Stray Rescue"> 
        <StrayRescue />
      </md-tab>
      <md-tab md-label="Young At Heart">
        <YoungAtHeart />
      </md-tab>
      <md-tab md-label="NYC Shelter Buddy">
        <NYCShelterBuddy />
      </md-tab>
    </md-tabs>
  </div>
</template>

<script>
import StrayRescue from "../components/StrayRescue.vue";
import YoungAtHeart from "../components/YoungAtHeart.vue";
import NYCShelterBuddy from "../components/NYCShelterBuddy";

export default {
  name: "Shelters",
  components: {
    StrayRescue,
    YoungAtHeart,
    NYCShelterBuddy
  }
};
</script>

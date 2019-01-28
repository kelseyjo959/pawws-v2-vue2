<template>
  <div class="shelters">
    <md-tabs md-theme="default-app" class="md-primary" md-alignment="centered">
      <md-tab md-label="Stray Rescue"> 
        Content 0
        <StrayRescue />
      </md-tab>
      <md-tab md-label="Young At Heart">
        Content 1
      </md-tab>
      <md-tab md-label="New York">
        Content 2
      </md-tab>
    </md-tabs>
  </div>
</template>

<script>
import StrayRescue from "../components/StrayRescue.vue";

export default {
  name: "Shelters",
  components: {
    StrayRescue
  }
};
</script>

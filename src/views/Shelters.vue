<template>
  <div class="shelters">
    <p>This is the shelter page</p>
    <StrayRescue />
    <HelloWorld msg="Hello" />
  </div>
</template>

<script>
import StrayRescue from "../components/StrayRescue.vue";
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Shelters",
  components: {
    HelloWorld,
    StrayRescue
  }
};
</script>

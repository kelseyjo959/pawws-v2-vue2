<template>
  <div class="pet">
    <img v-bind:src="pet.img_url"/>
    <h4>{{ pet.name }}</h4>
    <h5>{{ pet.age }}</h5>
  </div>
</template>

<script>
export default {
  name: 'PetDetails',
  props: {
    pet: Object
  }
}
</script>
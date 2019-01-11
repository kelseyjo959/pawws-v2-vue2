<template>
  <div class="pet">
    <h4>{{ pet.name }}</h4>
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
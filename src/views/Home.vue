<template>
  <div class="home">
    <div class="container">
      <div v-for="i in 6" :key="i">s</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',

  components: {},

  methods: {

  },
};
</script>

<style scoped lang="scss">
.container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: $gutter;
}
</style>

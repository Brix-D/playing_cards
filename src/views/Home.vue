<template>
  <div class="home">
    <div class="container">
      <CCard
        v-for="i in 6"
        :key="i"
        front-image="card_queen.png"
        shirt-image="card_wrapper.jpg"
      >
        s
      </CCard>
    </div>
  </div>
</template>

<script>
import CCard from '@/components/CCard';
export default {
  name: 'Home',

  components: {
    CCard,
  },

  methods: {},
};
</script>

<style scoped lang="scss">
.container {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  column-gap: $gutter;
}
</style>

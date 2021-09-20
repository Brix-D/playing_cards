<template>
  <div class="home">
    <div class="container">
      <CCardColumn
        v-for="item in COLUMNS"
        :key="item.id"
        :cards-list="item.data"
        :column-id="item.id"
       />

    </div>
    <button @click="newGame">Новая игра</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import CCardColumn from '@/components/CCardColumn';
export default {
  name: 'Home',

  components: {
    CCardColumn,
  },

  // все масти:
  // spades - пики
  // hearts - черви
  // diamonds - бубны
  // clubs - трефы

  data() {
    return {
    };
  },

  computed: {
    ...mapState({
      COLUMNS: (state) => state.field.items,
    }),
  },
  methods: {
    ...mapActions({
      NEW_GAME: 'field/GENERATE_FIELD',
    }),
    newGame() {
      this.NEW_GAME({});
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  column-gap: $gutter;
}
</style>

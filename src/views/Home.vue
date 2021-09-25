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
    <div class="actions">
      <button @click="newGame">Новая игра</button>
      <button @click="resetGame">Начать с начала</button>
    </div>
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
      RESET_GAME: 'field/RESET_FIELD',
    }),
    newGame() {
      this.NEW_GAME({suitsInGame: 1});
    },
    resetGame() {
      this.RESET_GAME();
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

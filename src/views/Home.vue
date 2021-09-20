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
  </div>
</template>

<script>
import { mapState } from 'vuex';
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

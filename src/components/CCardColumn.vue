<template>
  <div class="column">
    <template v-for="(item, index) in cardsList">
      <CCard
        v-if="flippedLastCard && isLastCard(index)"
        flipped
        :key="index"
        :column-index="index"
        @flip="onFlipCard"
        :front-image="item.front"
        :shirt-image="item.back"
        class="column__card"
        :style="'top:' + getIndent(index)"
      />
      <CCard
          v-else
          :column-index="index"
          :key="index"
          @flip="onFlipCard"
          :front-image="item.front"
          :shirt-image="item.back"
          class="column__card"
          :style="'top:' + getIndent(index)"
      />
    </template>
  </div>
</template>

<script>
import CCard from '@/components/CCard';

export default {
  name: 'CColumn',

  data() {
    return {
      baseIndent: 24,
      flippedLastCard: false,
    }
  },

  components: {
    CCard,
  },
  props: {
    cardsList: [],
  },
  computed: {

  },
  methods: {
    getIndent(index) {
      return `${index * this.baseIndent}px`;
    },
    onFlipCard(event) {
      if (this.isLastCard(event.index)) {
        this.flippedLastCard = event.value;
      }
    },
    isLastCard(index) {
      return this.cardsList.length-1 === index;
    }
  },
};
</script>

<style scoped lang="scss">

.column {
  display: flex;
  flex-direction: column;
  position: relative;

  &__card {
    position: absolute;
  }
}
</style>

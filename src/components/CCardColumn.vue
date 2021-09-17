<template>
  <div class="column">
    <template v-for="(item, index) in cardsList">
      <CCard
        v-bind="item"
        :column-index="columnId"
        :key="item.id"
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
    }
  },

  components: {
    CCard,
  },
  props: {
    columnId: {
      type: Number,
      required: true
    },
    cardsList: {
      type: Array,
      required: true,
    },
  },
  // mounted() {
  //   console.log('column', this.cardsList);
  // },
  computed: {

  },
  methods: {
    getIndent(index) {
      return `${index * this.baseIndent}px`;
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

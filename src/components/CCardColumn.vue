<template>
  <div class="column" @drop="onDrop($event, columnId)"
  @dragenter.prevent
  @dragover.prevent>
    <template v-for="(item, index) in cardsList">
      <CCard
        v-bind="item"
        :column-index="columnId"
        :key="item.id"
        class="column__card"
        :style="'top:' + getIndent(index)"
        :draggable="item.flipped"
        @dragstart.native="onDragStart($event, index)"
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
    },

    onDrop(event, columnId) {
      const draggingData = event.dataTransfer.getData('text/plain');
      const draggingCards = JSON.parse(draggingData);
    },

    onDragStart(event, index) {
      event.dataTransfer.dropEffect = 'move';
      event.dataTransfer.effectAllowed = 'move';
      const cardsToDrag = this.cardsList.slice(index);
      console.log('cardsToDrag', cardsToDrag);
      event.dataTransfer.setData('text/plain', JSON.stringify(cardsToDrag));
    },
  },
};
</script>

<style scoped lang="scss">

.column {
  display: flex;
  flex-direction: column;
  position: relative;
  height: 90vh;

  &__card {
    position: absolute;

  }
}
</style>

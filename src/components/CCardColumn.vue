<template>
  <div class="column" @drop="onDrop($event, columnId)"
  @dragenter.prevent
  @dragover.prevent>
    <template v-for="(item, index) in cardsList">
      <CCard
        v-bind="item"
        :column-index="columnId"
        :key="String(columnId) + index"
        class="column__card"
        :style="'top:' + getIndent(index)"
        :draggable="item.flipped"
        @dragstart.native="onDragStart($event, index, columnId)"
        @click.native="onFlipCard($event, columnId, index)"
      />
    </template>
  </div>
</template>

<script>
import CCard from '@/components/CCard';
import { mapMutations } from 'vuex'

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
  computed: {

  },
  methods: {
    ...mapMutations({
      REMOVE_FROM_COLUMN: 'field/REMOVE_FROM_COLUMN',
      ADD_TO_COLUMN: 'field/ADD_TO_COLUMN',
      FLIP_CARD: 'field/FLIP_CARD',
    }),

    getIndent(index) {
      return `${index * this.baseIndent}px`;
    },

    isLastCard(index) {
      return this.cardsList.length-1 === index;
    },

    onDrop(event, idColumn) {
      const draggingData = event.dataTransfer.getData('text/plain');
      const draggingDataParsed = JSON.parse(draggingData);
      console.log('draggingDataParsed', draggingDataParsed);
      this.REMOVE_FROM_COLUMN({
        indexRow: draggingDataParsed.originColumnRowIndex,
        idColumn: draggingDataParsed.originColumnIndex,
      });
      this.ADD_TO_COLUMN({ idColumn, items: draggingDataParsed.cardsToDrag});
    },

    onDragStart(event, originColumnRowIndex, originColumnIndex) {
      event.dataTransfer.dropEffect = 'move';
      event.dataTransfer.effectAllowed = 'move';
      const cardsToDrag = this.cardsList.slice(originColumnRowIndex);

      const dragData = {
        originColumnRowIndex,
        originColumnIndex,
        cardsToDrag
      };
      event.dataTransfer.setData('text/plain', JSON.stringify(dragData));
    },
    onFlipCard($event, idColumn, rowIndex) {
      this.FLIP_CARD({ idColumn, idCard: rowIndex});
    }
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

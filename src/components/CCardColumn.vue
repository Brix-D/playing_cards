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
import deck from '@/utils/deck';

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
  mounted() {
    this.flipLastCard();
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

    isCardsDroppable(draggingCards) {
      const lengthColumn = this.cardsList.length;
      const lastColumnCard = this.cardsList[lengthColumn - 1];
      // Если вы колонке 0 карт, то туда можно положить любую карту
      if (!lastColumnCard) {
        return true;
      }
      const draggingCardsOrder = [draggingCards[0].card, lastColumnCard.card];
      return deck.join(',').includes(draggingCardsOrder.join(','));
    },

    onDrop(event, idColumn) {
      const draggingData = event.dataTransfer.getData('text/plain');
      const draggingDataParsed = JSON.parse(draggingData);
      if (this.isCardsDroppable(draggingDataParsed.cardsToDrag)) {
        this.REMOVE_FROM_COLUMN({
          indexRow: draggingDataParsed.originColumnRowIndex,
          idColumn: draggingDataParsed.originColumnIndex,
        });
        this.ADD_TO_COLUMN({idColumn, items: draggingDataParsed.cardsToDrag});
      } else {
        event.preventDefault();
        console.log('Карту нельзя положить на это место');
      }
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
    },
    flipLastCard() {
      const length = this.cardsList.length;
      const lastCard = this.cardsList[length - 1];
      if(lastCard) {
        if (!lastCard.flipped) {
          this.FLIP_CARD({idColumn: this.columnId, idCard: length - 1});
        }
      }
    },
  },

  watch: {
    /**
     * следит за списком карт в столбце и переворачивает последнюю карту, если она не перевернута
     */
    cardsList() {
      this.flipLastCard();
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

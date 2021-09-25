import deck from '@/utils/deckValues';

export default {
  methods: {

    isCardsDroppable(draggingCards) {
      const lengthColumn = this.cardsList.length;
      const lastColumnCard = this.cardsList[lengthColumn - 1];
      // Если вы колонке 0 карт, то туда можно положить любую карту
      if (!lastColumnCard) {
        return true;
      }
      const draggingCardsOrder = [draggingCards[0].value, lastColumnCard.value];
      return deck.join(',').includes(draggingCardsOrder.join(','));
    },

    isDragRightOrder(cardsToDrag) {
      const columnCards = cardsToDrag.map((item) => item.value).reverse().join(',');
      return deck.join(',').includes(columnCards);
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
      } else if (idColumn === draggingDataParsed.originColumnIndex) {
        event.preventDefault();
        console.log('Карта возвращена на место');
      } else {
        event.preventDefault();
        console.log('Карту нельзя положить на это место');
      }
    },

    onDragStart(event, originColumnRowIndex, originColumnIndex) {
      event.dataTransfer.dropEffect = 'move';
      event.dataTransfer.effectAllowed = 'move';
      const cardsToDrag = this.cardsList.slice(originColumnRowIndex);

      if (!this.isDragRightOrder(cardsToDrag)) {
        console.log('Порядок карт неправильный');
        event.preventDefault();
        return;
      }

      const dragData = {
        originColumnRowIndex,
        originColumnIndex,
        cardsToDrag
      };
      event.dataTransfer.setData('text/plain', JSON.stringify(dragData));
    },
  }
};
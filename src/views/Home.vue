<template>
  <div class="home">
    <div class="container">
      <CCardColumn
        v-for="(item, index) in columns"
        :key="index"
        :cards-list="item"
      >
        s
      </CCardColumn>
    </div>
  </div>
</template>

<script>
// import CCard from '@/components/CCard';
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
      columns: [
        // 1
        [
          {
            cardValue: 'Queen',
            suit: 'heart',
            front: 'card_queen.png',
            back: 'card_wrapper.jpg',
          },
          {
            cardValue: 'Queen',
            suit: 'heart',
            front: 'card_queen.png',
            back: 'card_wrapper.jpg',
          },
          {
            cardValue: 'Queen',
            suit: 'heart',
            front: 'card_queen.png',
            back: 'card_wrapper.jpg',
          },
        ],
        // 2
        [
          {
            cardValue: 'Queen',
            suit: 'heart',
            front: 'card_queen.png',
            back: 'card_wrapper.jpg',
          },
          {
            cardValue: 'Queen',
            suit: 'heart',
            front: 'card_queen.png',
            back: 'card_wrapper.jpg',
          },
        ],
        // 3
        [
          {
            cardValue: 'Queen',
            suit: 'heart',
            front: 'card_queen.png',
            back: 'card_wrapper.jpg',
          },
          {
            cardValue: 'Queen',
            suit: 'heart',
            front: 'card_queen.png',
            back: 'card_wrapper.jpg',
          },
          {
            cardValue: 'Queen',
            suit: 'heart',
            front: 'card_queen.png',
            back: 'card_wrapper.jpg',
          },
        ],
        // 4
        [
          {
            cardValue: 'Queen',
            suit: 'heart',
            front: 'card_queen.png',
            back: 'card_wrapper.jpg',
          },
          {
            cardValue: 'Queen',
            suit: 'heart',
            front: 'card_queen.png',
            back: 'card_wrapper.jpg',
          },
        ],
        // 5
        [
          {
            cardValue: 'Queen',
            suit: 'heart',
            front: 'card_queen.png',
            back: 'card_wrapper.jpg',
          },
          {
            cardValue: 'Queen',
            suit: 'heart',
            front: 'card_queen.png',
            back: 'card_wrapper.jpg',
          },
        ],
        // 6
        [
          {
            cardValue: 'Queen',
            suit: 'heart',
            front: 'card_queen.png',
            back: 'card_wrapper.jpg',
          },
          {
            cardValue: 'Queen',
            suit: 'heart',
            front: 'card_queen.png',
            back: 'card_wrapper.jpg',
          },
          {
            cardValue: 'Queen',
            suit: 'heart',
            front: 'card_queen.png',
            back: 'card_wrapper.jpg',
          },
          {
            cardValue: 'Queen',
            suit: 'heart',
            front: 'card_queen.png',
            back: 'card_wrapper.jpg',
          },
        ],
        // 7
        [
          {
            cardValue: 'Queen',
            suit: 'heart',
            front: 'card_queen.png',
            back: 'card_wrapper.jpg',
          },
          {
            cardValue: 'Queen',
            suit: 'heart',
            front: 'card_queen.png',
            back: 'card_wrapper.jpg',
          },
          {
            cardValue: 'Queen',
            suit: 'heart',
            front: 'card_queen.png',
            back: 'card_wrapper.jpg',
          },
        ],
        // 8
        [
          {
            cardValue: 'Queen',
            suit: 'heart',
            front: 'card_queen.png',
            back: 'card_wrapper.jpg',
          },
          {
            cardValue: 'Queen',
            suit: 'heart',
            front: 'card_queen.png',
            back: 'card_wrapper.jpg',
          },
          {
            cardValue: 'Queen',
            suit: 'heart',
            front: 'card_queen.png',
            back: 'card_wrapper.jpg',
          },
          {
            cardValue: 'Queen',
            suit: 'heart',
            front: 'card_queen.png',
            back: 'card_wrapper.jpg',
          },
        ],
      ],
    };
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

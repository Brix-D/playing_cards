export const state = () => ({
  field: [
    {
      id: 1,
      // 1
      data: [
        {
          id: 1,
          cardValue: 'Queen',
          suit: 'heart',
          front: 'card_queen.png',
          back: 'card_wrapper.jpg',
          flipped: false,
        },
        {
          id: 2,
          cardValue: 'Queen',
          suit: 'heart',
          front: 'card_queen.png',
          back: 'card_wrapper.jpg',
          flipped: false,
        },
        {
          id: 3,
          cardValue: 'Queen',
          suit: 'heart',
          front: 'card_queen.png',
          back: 'card_wrapper.jpg',
          flipped: false,
        },
      ],
    },
    // 2
    {
      id: 2,
      data: [
        {
          id: 1,
          cardValue: 'Queen',
          suit: 'heart',
          front: 'card_queen.png',
          back: 'card_wrapper.jpg',
          flipped: false,
        },
        {
          id: 2,
          cardValue: 'Queen',
          suit: 'heart',
          front: 'card_queen.png',
          back: 'card_wrapper.jpg',
          flipped: false,
        },
      ],
    },
    // 3
    {
      id: 3,
      data: [
        {
          id: 1,
          cardValue: 'Queen',
          suit: 'heart',
          front: 'card_queen.png',
          back: 'card_wrapper.jpg',
          flipped: false,
        },
        {
          id: 2,
          cardValue: 'Queen',
          suit: 'heart',
          front: 'card_queen.png',
          back: 'card_wrapper.jpg',
          flipped: false,
        },
        {
          id: 3,
          cardValue: 'Queen',
          suit: 'heart',
          front: 'card_queen.png',
          back: 'card_wrapper.jpg',
          flipped: false,
        },
      ],
    },
    // 4
    {
      id: 4,
      data: [
        {
          id: 1,
          cardValue: 'Queen',
          suit: 'heart',
          front: 'card_queen.png',
          back: 'card_wrapper.jpg',
          flipped: false,
        },
        {
          id: 2,
          cardValue: 'Queen',
          suit: 'heart',
          front: 'card_queen.png',
          back: 'card_wrapper.jpg',
          flipped: false,
        },
      ],
    },
    // 5
    {
      id: 5,
      data: [
        {
          id: 1,
          cardValue: 'Queen',
          suit: 'heart',
          front: 'card_queen.png',
          back: 'card_wrapper.jpg',
          flipped: false,
        },
        {
          id: 2,
          cardValue: 'Queen',
          suit: 'heart',
          front: 'card_queen.png',
          back: 'card_wrapper.jpg',
          flipped: false,
        },
      ],
    },
    // 6
    {
      id: 6,
      data: [
        {
          id: 1,
          cardValue: 'Queen',
          suit: 'heart',
          front: 'card_queen.png',
          back: 'card_wrapper.jpg',
          flipped: false,
        },
        {
          id: 2,
          cardValue: 'Queen',
          suit: 'heart',
          front: 'card_queen.png',
          back: 'card_wrapper.jpg',
          flipped: false,
        },
        {
          id: 3,
          cardValue: 'Queen',
          suit: 'heart',
          front: 'card_queen.png',
          back: 'card_wrapper.jpg',
          flipped: false,
        },
        {
          id: 4,
          cardValue: 'Queen',
          suit: 'heart',
          front: 'card_queen.png',
          back: 'card_wrapper.jpg',
          flipped: false,
        },
      ],
    },
    // 7
    {
      id: 7,
      data: [
        {
          id: 1,
          cardValue: 'Queen',
          suit: 'heart',
          front: 'card_queen.png',
          back: 'card_wrapper.jpg',
          flipped: false,
        },
        {
          id: 2,
          cardValue: 'Queen',
          suit: 'heart',
          front: 'card_queen.png',
          back: 'card_wrapper.jpg',
          flipped: false,
        },
        {
          id: 3,
          cardValue: 'Queen',
          suit: 'heart',
          front: 'card_queen.png',
          back: 'card_wrapper.jpg',
          flipped: false,
        },
      ],
    },
    // 8
    {
      id: 8,
      data: [
        {
          id: 1,
          cardValue: 'Queen',
          suit: 'heart',
          front: 'card_queen.png',
          back: 'card_wrapper.jpg',
          flipped: false,
        },
        {
          id: 2,
          cardValue: 'Queen',
          suit: 'heart',
          front: 'card_queen.png',
          back: 'card_wrapper.jpg',
          flipped: false,
        },
        {
          id: 3,
          cardValue: 'Queen',
          suit: 'heart',
          front: 'card_queen.png',
          back: 'card_wrapper.jpg',
          flipped: false,
        },
        {
          id: 4,
          cardValue: 'Queen',
          suit: 'heart',
          front: 'card_queen.png',
          back: 'card_wrapper.jpg',
          flipped: false,
        },
      ],
    },
  ],
});

export const mutations = {
  FLIP_CARD(state, { idColumn, idCard }) {
    let card;
    try {
      card = state.field
        .find((column) => column.id === idColumn)
        .data.find((card) => card.id === idCard);
    } catch (e) {
      console.log('column not found', idColumn);
    }
    if (card) {
      card.flipped = !card.flipped;
    } else {
      console.log('card not found', idCard);
    }
  },

  REMOVE_FROM_COLUMN(state, { idColumn, indexRow }) {
    state.field.find((column) => column.id === idColumn).data.splice(indexRow);
  },

  ADD_TO_COLUMN(state, { idColumn, items }) {
    state.field.find((column) => column.id === idColumn).data.push(...items);
  },
};

export const actions = {};

export const getters = {};

export default { namespaced: true, state, mutations, actions, getters };

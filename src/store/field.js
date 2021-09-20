import deck from '../utils/deck';
import shuffle from '../utils/shuffle';
import copyObject from '../utils/copyObject';

export const state = () => ({
  /**
   * начальное состояние поля
   */
  initial: [],
  /**
   * текущее состояние поля
   */
  items: [
    // {
    //   id: 1,
    //   // 1
    //   data: [
    //     {
    //       id: 1,
    //       card: 'king',
    //       suit: 'spades',
    //       flipped: false,
    //     },
    //     {
    //       id: 2,
    //       card: 'king',
    //       suit: 'spades',
    //       flipped: false,
    //     },
    //     {
    //       id: 3,
    //       card: 'king',
    //       suit: 'spades',
    //       flipped: false,
    //     },
    //   ],
    // },
    // // 2
    // {
    //   id: 2,
    //   data: [
    //     {
    //       id: 1,
    //       card: 'king',
    //       suit: 'spades',
    //       flipped: false,
    //     },
    //     {
    //       id: 2,
    //       card: 'king',
    //       suit: 'spades',
    //       flipped: false,
    //     },
    //   ],
    // },
    // // 3
    // {
    //   id: 3,
    //   data: [
    //     {
    //       id: 1,
    //       cardValue: 'Queen',
    //       suit: 'heart',
    //       front: 'card_queen.png',
    //       back: 'card_wrapper.jpg',
    //       flipped: false,
    //     },
    //     {
    //       id: 2,
    //       cardValue: 'Queen',
    //       suit: 'heart',
    //       front: 'card_queen.png',
    //       back: 'card_wrapper.jpg',
    //       flipped: false,
    //     },
    //     {
    //       id: 3,
    //       cardValue: 'Queen',
    //       suit: 'heart',
    //       front: 'card_queen.png',
    //       back: 'card_wrapper.jpg',
    //       flipped: false,
    //     },
    //   ],
    // },
    // // 4
    // {
    //   id: 4,
    //   data: [
    //     {
    //       id: 1,
    //       cardValue: 'Queen',
    //       suit: 'heart',
    //       front: 'card_queen.png',
    //       back: 'card_wrapper.jpg',
    //       flipped: false,
    //     },
    //     {
    //       id: 2,
    //       cardValue: 'Queen',
    //       suit: 'heart',
    //       front: 'card_queen.png',
    //       back: 'card_wrapper.jpg',
    //       flipped: false,
    //     },
    //   ],
    // },
    // // 5
    // {
    //   id: 5,
    //   data: [
    //     {
    //       id: 1,
    //       cardValue: 'Queen',
    //       suit: 'heart',
    //       front: 'card_queen.png',
    //       back: 'card_wrapper.jpg',
    //       flipped: false,
    //     },
    //     {
    //       id: 2,
    //       cardValue: 'Queen',
    //       suit: 'heart',
    //       front: 'card_queen.png',
    //       back: 'card_wrapper.jpg',
    //       flipped: false,
    //     },
    //   ],
    // },
    // // 6
    // {
    //   id: 6,
    //   data: [
    //     {
    //       id: 1,
    //       cardValue: 'Queen',
    //       suit: 'heart',
    //       front: 'card_queen.png',
    //       back: 'card_wrapper.jpg',
    //       flipped: false,
    //     },
    //     {
    //       id: 2,
    //       cardValue: 'Queen',
    //       suit: 'heart',
    //       front: 'card_queen.png',
    //       back: 'card_wrapper.jpg',
    //       flipped: false,
    //     },
    //     {
    //       id: 3,
    //       cardValue: 'Queen',
    //       suit: 'heart',
    //       front: 'card_queen.png',
    //       back: 'card_wrapper.jpg',
    //       flipped: false,
    //     },
    //     {
    //       id: 4,
    //       cardValue: 'Queen',
    //       suit: 'heart',
    //       front: 'card_queen.png',
    //       back: 'card_wrapper.jpg',
    //       flipped: false,
    //     },
    //   ],
    // },
    // // 7
    // {
    //   id: 7,
    //   data: [
    //     {
    //       id: 1,
    //       cardValue: 'Queen',
    //       suit: 'heart',
    //       front: 'card_queen.png',
    //       back: 'card_wrapper.jpg',
    //       flipped: false,
    //     },
    //     {
    //       id: 2,
    //       cardValue: 'Queen',
    //       suit: 'heart',
    //       front: 'card_queen.png',
    //       back: 'card_wrapper.jpg',
    //       flipped: false,
    //     },
    //     {
    //       id: 3,
    //       cardValue: 'Queen',
    //       suit: 'heart',
    //       front: 'card_queen.png',
    //       back: 'card_wrapper.jpg',
    //       flipped: false,
    //     },
    //   ],
    // },
    // // 8
    // {
    //   id: 8,
    //   data: [
    //     {
    //       id: 1,
    //       cardValue: 'Queen',
    //       suit: 'heart',
    //       front: 'card_queen.png',
    //       back: 'card_wrapper.jpg',
    //       flipped: false,
    //     },
    //     {
    //       id: 2,
    //       cardValue: 'Queen',
    //       suit: 'heart',
    //       front: 'card_queen.png',
    //       back: 'card_wrapper.jpg',
    //       flipped: false,
    //     },
    //     {
    //       id: 3,
    //       cardValue: 'Queen',
    //       suit: 'heart',
    //       front: 'card_queen.png',
    //       back: 'card_wrapper.jpg',
    //       flipped: false,
    //     },
    //     {
    //       id: 4,
    //       cardValue: 'Queen',
    //       suit: 'heart',
    //       front: 'card_queen.png',
    //       back: 'card_wrapper.jpg',
    //       flipped: false,
    //     },
    //   ],
    // },
  ],
});

export const mutations = {
  SET_FIELD(state, items) {
    state.items = [...items];
  },

  SET_INIT_FIELD(state, items) {
    state.initial = [...items];
  },

  FLIP_CARD(state, { idColumn, idCard }) {
    let card;
    try {
      card = state.items.find((column) => column.id === idColumn).data[idCard];
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
    state.items.find((column) => column.id === idColumn).data.splice(indexRow);
  },

  ADD_TO_COLUMN(state, { idColumn, items }) {
    state.items.find((column) => column.id === idColumn).data.push(...items);
  },
};

export const actions = {
  GENERATE_FIELD({ commit }, { suitsInGame = 1 }) {
    let spades;
    switch (suitsInGame) {
    case 1: {
      spades = [
        ...deck,
        ...deck,
        ...deck,
        ...deck,
        ...deck,
        ...deck,
        ...deck,
        ...deck,
      ];
      break;
    }
    default: {
      spades = [];
      console.log('Невозможно начать игру с таким количеством мастей');
      throw 'Невозможно начать игру с таким количеством мастей';
    }
    }
    if (spades.length > 0) {
      let shuffledArray = shuffle(spades);
      let indexColumn = 0;
      const deck = shuffledArray.reduce((acc, item) => {

        // если колонка не существует - создать колонку
        if (!acc[indexColumn]) {
          acc.push({
            id: indexColumn + 1,
            data: [],
          });
          console.log('создана колонка', indexColumn + 1);
        }
        // Если колонка существует - добавить в список ее карт новую из перемешанной колоды
        let columnData = acc[indexColumn].data;
        columnData.push({
          id: columnData.length + 1,
          card: item,
          // TODO  добавить поддержку двух мастей
          suit: 'spades',
          flipped: false,
        });
        // каждые десять итераций индекс колонки должен сбрасыватся на ноль
        indexColumn = (indexColumn + 11) % 10 === 0 ? 0 : indexColumn+1 ;
        return acc;
      }, []);
      console.log('generated deck', deck);
      commit('SET_INIT_FIELD', deck);
      commit('SET_FIELD', deck);
    }
  },

  RESET_FIELD({ commit, state }) {
    commit('SET_FIELD', state.initial);
  },
};

export const getters = {
};

export default { namespaced: true, state, mutations, actions, getters };

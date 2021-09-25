import deck from '../utils/deckValues';
import shuffle from '../utils/shuffle';
import copyObject from '../utils/copyObject';
import Deck from '../classes/Deck'


export const state = () => ({
  /**
   * начальное состояние поля
   */
  initial: [],
  /**
   * текущее состояние поля
   */
  items: [
    // example
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
  ],
  // TODO Колода из которой раздаются дополнительные карты в процессе игры
  initDeck: {},
  deck: {},
});

export const mutations = {
  SET_FIELD(state, items) {
    state.items = copyObject(items);
  },

  SET_INIT_FIELD(state, items) {
    state.initial = copyObject(items);
  },

  SET_DECK(state, items) {
    state.deck = copyObject(items);
  },
  SET_INIT_DECK(state, items) {
    state.initDeck = copyObject(items);
  },
  /**
   * Переворачивает карточку с нужным id в нужной колонке
   * @param state
   * @param idColumn {Number} id столбца от 1 до 10
   * @param idCard {Number} индекс карты в столбце
   */
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

  DEAL_CARDS(state) {
    console.log('rest deck', state.deck);
    console.log('rest deck length', state.deck.length);
    const deck = state.deck;
    const field = state.items;

    field.forEach((column) => {
      const card = deck.pop();
      if (card) {
        card.id = column.data.length + 1;
        card.flipped = !card.flipped;
        column.data.push(card);
      }
    });
  },

};

export const actions = {
  GENERATE_FIELD({ commit }, { suitsInGame = 1 }) {
    // создать колоду карт
    let gameDeck = new Deck(suitsInGame);
    // перемешать
    gameDeck.shuffleDeck();
    // разделить на колоду и поле
    const fieldCards = gameDeck.divideDeck();
    commit('SET_INIT_DECK', gameDeck.deck);
    commit('SET_DECK', gameDeck.deck);
    // раздать начальные карты
    const field = gameDeck.dealCardsInit(fieldCards);
    commit('SET_INIT_FIELD', field);
    commit('SET_FIELD', field);
    // }
  },

  RESET_FIELD({ commit, state }) {
    commit('SET_FIELD', state.initial);
    commit('SET_DECK', state.initDeck);
  },


};

export const getters = {
};

export default { namespaced: true, state, mutations, actions, getters };

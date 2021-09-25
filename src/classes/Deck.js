import shuffle from '../utils/shuffle';
import deckValues from '../utils/deckValues';
import randomChoice from '../utils/randomChoice';
import Card from './Card';

export class Deck {
  constructor(numberOfSuits) {
    this._NUMBER_CARDS_ON_START_FIELD = 54;
    this.deck = this.generateDeck(numberOfSuits);
  }

  generateDeck(numberOfSuits) {
    let cardValues;
    switch (numberOfSuits) {
    case 1: {
      cardValues = {
        'spades': [
          ...deckValues,
          ...deckValues,
          ...deckValues,
          ...deckValues,
          ...deckValues,
          ...deckValues,
          ...deckValues,
          ...deckValues,
        ]
      };
      break;
    }
    case 2: {
      cardValues = {
        'spades': [
          ...deckValues,
          ...deckValues,
          ...deckValues,
          ...deckValues,
        ],
        'hearts': [
          ...deckValues,
          ...deckValues,
          ...deckValues,
          ...deckValues,
        ]
      };
      break;
    }
    default: {
      cardValues = [];
      console.log('Невозможно начать игру с таким количеством мастей');
      throw 'Невозможно начать игру с таким количеством мастей';
    }
    }
    const gameSuits = Object.keys(cardValues);
    // общая длинна всей колоды все масти
    const summaryDeckLength = gameSuits.reduce((acc, suit) => {
      return acc + cardValues[suit].length;
    }, 0);

    // проходится по всем значением карт и рандомно выбирает для них масть

    let gameDeck = [];

    for (let i = 0; i < summaryDeckLength;) {
      const randomSuit = randomChoice(gameSuits);
      const cardSuitValues = cardValues[randomSuit];
      if (cardSuitValues.length > 0) {
        gameDeck.push(new Card(cardSuitValues.pop(), randomSuit));
        i++;
      }
    }

    return gameDeck;
  }

  shuffleDeck() {
    this.deck = shuffle(this.deck);
  }

  divideDeck() {
    return this.deck.splice(0, this._NUMBER_CARDS_ON_START_FIELD);
  }

  dealCardsInit(cardsToDeal) {
    let indexColumn = 0;
    return cardsToDeal.reduce((acc, card) => {

      // если колонка не существует - создать колонку
      if (!acc[indexColumn]) {
        acc.push({
          id: indexColumn + 1,
          data: [],
        });
      }
      // Если колонка существует - добавить в список ее карт новую из перемешанной колоды
      let columnData = acc[indexColumn].data;
      card.setCardId(columnData.length + 1);
      columnData.push(card);
      // каждые десять итераций индекс колонки должен сбрасыватся на ноль
      indexColumn = (indexColumn + 11) % 10 === 0 ? 0 : indexColumn+1 ;
      return acc;
    }, []);
  }

  dealCardsAdditional(currentField) {

  }
}

export default Deck;
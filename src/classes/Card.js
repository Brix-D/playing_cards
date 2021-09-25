export class Card {
  constructor(value, suit, flipped = false) {
    this.value = value;
    this.suit = suit;
    this.flipped = flipped;
  }

  setCardId(id) {
    this.id = id;
  }

  flipCard() {
    this.flipped = !this.flipped;
  }
}

export default Card;
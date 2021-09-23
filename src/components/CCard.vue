<template>
  <div class="card" >
    <div class="card__shirt" :class="{ 'card__shirt--flipped': flipped }">
      <img :src="getShirtImage" class="card__image" alt="рубашка"/>
    </div>
    <div class="card__front" :class="{ 'card__front--flipped': flipped }">
      <img :src="getCardImage(suit, card)" class="card__image" alt="карта"/>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CCard',
  props: {
    id: {
      type: Number,
      required: true,
    },
    suit: {
      type: String,
      required: true,
    },
    card: {
      type: String,
      required: true,
    },
    flipped: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      baseImage: 'assets',

    };
  },
  computed: {
    getShirtImage() {
      return require(`@/${this.baseImage}/card_wrapper.jpg`);
    }
  },
  methods: {
    getCardImage(suit, name) {
      return require(`@/${this.baseImage}/cards/${suit}/${name}.png`);
    },

  },
};
</script>

<style scoped lang="scss">
.card {
  position: relative;
  width: 100%;
  transform-style: preserve-3d;
  cursor: pointer;
  user-select: none;


  &__shirt {
    position: absolute;
    top: 0;
    backface-visibility: hidden;
    transition: transform 0.5s;

    &--flipped {
      transform: rotateY(180deg);
    }
  }

  &__front {
    backface-visibility: hidden;
    transform: rotateY(180deg);
    transition: transform 0.5s;
    &--flipped {
      transform: rotateY(0deg);
    }
  }

  &__image {
    width: 100%;
    height: auto;
    pointer-events: none;
  }
}
</style>

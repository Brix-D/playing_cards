<template>
  <div class="card" @click="flipCard">
    <div class="card__shirt" :class="{ 'card__shirt--flipped': flipped }">
      <img :src="getImage(shirtImage)" class="card__image" alt="рубашка" />
    </div>
    <div class="card__front" :class="{ 'card__front--flipped': flipped }">
      <img :src="getImage(frontImage)" class="card__image" alt="карта" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CCard',
  props: {
    shirtImage: {
      type: String,
      required: true,
    },
    frontImage: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      baseImage: 'assets',
      flipped: false,
    };
  },
  computed: {},
  methods: {
    getImage(name) {
      return require(`@/${this.baseImage}/${name}`);
    },
    flipCard() {
      this.flipped = !this.flipped;
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
  }
}
</style>

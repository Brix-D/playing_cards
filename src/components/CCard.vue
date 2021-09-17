<template>
  <div class="card" @click="flipCard" >
    <div class="card__shirt" :class="{ 'card__shirt--flipped': flipped }">
      <img :src="getImage(back)" class="card__image" alt="рубашка"/>
<!--      @dragstart="onDragStart($event)" -->
    </div>
    <div class="card__front" :class="{ 'card__front--flipped': flipped }">
      <img :src="getImage(front)" class="card__image" alt="карта"/>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'CCard',
  props: {
    columnIndex: {
      type: Number,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    back: {
      type: String,
      required: true,
    },
    front: {
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
  computed: {},
  methods: {
    getImage(name) {
      return require(`@/${this.baseImage}/${name}`);
    },
    ...mapMutations({
      FLIP_CARD: 'field/FLIP_CARD',
    }),
    flipCard() {
      this.FLIP_CARD({ idColumn: this.columnIndex, idCard: this.id});
    },

    // onDragStart(event) {
    //   this.$emit('dragstart', event);
    // },
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
    pointer-events: none;
  }
}
</style>

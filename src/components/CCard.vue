<template>
  <div class="card">
    <div class="card__shirt">
      <img :src="shirtImage" alt="рубашка" />
    </div>
    <div class="card__front">
      <img :src="frontImage" alt="карта" />
    </div>
  </div>
</template>

<script>
export default {
  name: "CCard",
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
};
</script>

<style scoped lang="scss">
.card {
  &__shirt {
  }

  &__front {
  }
}
</style>

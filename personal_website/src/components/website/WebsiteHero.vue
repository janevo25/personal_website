<script setup>
const props = defineProps({
  thumbnail: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: [String,Number],
    required: true,
  },
})
</script>

<template>
  <div class="item-card">
    <!-- IMAGE -->
    <div class="hero" :style="`background-image: url(/src/assets/${props.thumbnail})`"></div>

    <!-- TEXT BELOW IMAGE -->
    <div class="item-info">
      <div class="item-name">{{ props.title }}</div>
      <div class="item-price">{{ props.price }}</div>
    </div>
  </div>
</template>

<style scoped>
.hero {
  height: 450px;
  min-width: 200px;
  flex-grow: 1;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

/* TEXT BELOW IMAGE */
.item-info {
  display: flex;
  justify-content: space-between;
  margin-top: 0.8rem;
  padding: 0 4px;
  font-family: Helvetica, sans-serif;
}
.item-name {
  font-size: 1rem;
  font-weight: 600;
  color: black;
}

.item-price {
  font-size: 1rem;
  font-weight: 400;
  color: black;
}
</style>

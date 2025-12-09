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
  hoverThumbnail: {
    type: String,
    required: true,
  }
})
</script>

<template>
  <div class="item-card">
    <!-- IMAGE -->
    <div
      class="hero"
      :style="`
    --img: url(/src/assets/${props.thumbnail});
    --img-hover: url(/src/assets/${props.hoverThumbnail});
  `"
    ></div>

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
  background-image: var(--img);
  flex-direction: column;
  justify-content: flex-end;
  transition: background-image 0.3s ease;
}
.hero:hover {
  background-image: var(--img-hover);
}

/* TEXT BELOW IMAGE */
.item-info {
  display: flex;
  justify-content: space-between;
  margin-top: 0.8rem;
  padding: 0 4px;
}
.item-name {
  font-size: 1rem;
  color: black;
  font-family: Helvetica, sans-serif;
  font-weight: normal;
}

.item-price {
  font-size: 1rem;
  font-weight: 400;
  color: black;
}
</style>

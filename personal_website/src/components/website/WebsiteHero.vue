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
  },
  link:{
    type: String,
    required: true,
  }
})
</script>

<template>
  <a :href="props.link" target="_blank" rel="noopener" class="item-card">
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
  </a>
</template>


<style scoped>
.hero {
  height: 420px;
  min-width: 200px;
  max-width: 100%;
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
  text-decoration: none;
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
.item-card {
  text-decoration: none;
  color: inherit;
  display: block;
}
.item-card:hover {
  text-decoration: none;
}

.item-card:visited {
  color: inherit;
}

.item-card:active {
  text-decoration: none;
}
</style>

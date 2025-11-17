<script setup>
const props = defineProps({
  thumbnail: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  }
})
</script>

<template>
  <div class="hero" :style="`background-image: url(./src/assets/${props.thumbnail})`">
    <div class="opaque-footer">{{ props.title}}</div>
  </div>
</template>

<style scoped>
.hero {
  border: 1px solid black;
  border-radius: 15px;
  min-height: 250px;
  min-width: 300px;
  max-width: 100%;
  flex-grow: 1;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: white;

  .opaque-footer {
    background-color: black;
    color: white;
    padding: 16px;
    text-transform: uppercase;
    opacity: 0.7;
    border-radius: 0 0 15px 15px;
    font-family: Arial, Helvetica, sans-serif;
  }
}
</style>

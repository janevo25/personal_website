<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <h1 v-text="data.question"/>
  <div class="options">
    <div class="option" v-for="(element, index) in props.data.options" :key="index">
      <input :type="props.data.type" :id="element" :name="props.data.name" :value="element" />
      <label :for="element">{{ element }}</label>
    </div>
  </div>
</template>

<style scoped>
div.options {
  display: flex;
  gap: 1rem;
}
</style>

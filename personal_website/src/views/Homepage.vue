<script setup>
import HeroContainer from '@/components/website/HeroContainer.vue'
import ItemData from '@/Data/ItemData.json'
</script>

<template>
  <hero-container :is-responsive="true" :items="ItemData" />
</template>

<style scoped>
</style>

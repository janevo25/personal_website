<script setup>
import HeroContainer from '@/components/website/HeroContainer.vue'
import ItemData from '@/Data/ItemData.json'
import HeroImage from '@/components/website/HeroImage.vue'
</script>

<template>
  <header>
    <HeroImage/>
  </header>
  <hero-container :is-responsive="true" :items="ItemData" />
</template>

<style scoped>
* {
  font-family: 'Helvetica Neue', sans-serif;
  font-weight: normal;
}
</style>

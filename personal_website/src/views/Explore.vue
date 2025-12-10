<script setup>
import HeroContainer from '@/components/website/HeroContainer.vue'
import ItemData from '@/Data/ItemData.json'
import HeroImage2 from '@/components/website/HeroImage2.vue'
</script>

<template>
  <header>
    <HeroImage2/>
  </header>
  <hero-container :is-responsive="true" :items="ItemData" />
</template>

<style scoped>
* {
  font-family: 'Helvetica Neue', sans-serif;
  font-weight: normal;
}
</style>

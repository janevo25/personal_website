<script setup>
import portfolioData from '@/data/portfolio.json'
import HeroContainer from '@/components/website/HeroContainer.vue'

const featuredItems = [portfolioData[0], portfolioData[1]]
</script>

<template>
  Hello!
  <hero-container :is-responsive="true" :items="featuredItems"/>
</template>

<style scoped>
</style>

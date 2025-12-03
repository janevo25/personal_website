<script setup>
import PortfolioHero from './WebsiteHero.vue'

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  isResponsive: {
    type: Boolean,
    required: true,
  },
})
</script>

<template>
  <div v-if="items.length > 0" class="all-items" :class="{ 'non-responsive': !isResponsive }">
    <portfolio-hero
      v-for="item in props.items"
      :key="item.id"
      :thumbnail="item.thumbnail"
      :title="item.title"
    />
  </div>

  <p v-else>You gotta give me something to work with!</p>
</template>

<style scoped>
</style>

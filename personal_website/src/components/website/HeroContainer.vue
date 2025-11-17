<script setup>
import WebsiteHero from '@/components/website/WebsiteHero.vue'

const props = defineProps({
  items: {
    type: Array,
    required: true
  },
  isResponsive: {
    type: Boolean,
    required: true
  }
})
</script>

<template>
  <div class="all-items">
    <website-hero
      v-for="item in props.items"
      :key="item.id"
      :title="item.title"
      :thumbnail="item.thumbnail"/>
  </div>
</template>

<style scoped>
div.all-items {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>

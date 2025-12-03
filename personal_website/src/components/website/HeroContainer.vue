<script setup>
import WebsiteHero from './WebsiteHero.vue'


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
  <div class="section-title">
  <h2 class="category-text">TOP TRENDING GIFTS NOW</h2>
  </div>
  <div v-if="items.length > 0" class="all-items" :class="{ 'non-responsive': !isResponsive }">
    <website-hero
      v-for="item in props.items"
      :key="item.id"
      :thumbnail="item.thumbnail"
      :title="item.title"
    />
  </div>

  <p v-else>You gotta give me something to work with!</p>
</template>

<style scoped>
.all-items {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* desktop */
  gap: 2rem;
  max-width: 1100px;
  margin: 0 auto;
}

.section-title{
  font-family: "Helvetica Neue",sans-serif;
  font-weight: 400;
}
/* Tablets */
@media (max-width: 992px) {
  .all-items {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Phones */
@media (max-width: 600px) {
  .all-items {
    grid-template-columns: 1fr; /* one column */
    gap: 1.5rem;
  }
}


div.non-responsive {
  overflow: scroll;
  flex-wrap: nowrap;
}
</style>

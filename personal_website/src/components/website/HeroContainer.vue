<script setup>
import WebsiteHero from './WebsiteHero.vue'
import { ref, computed } from 'vue'

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
const selectedGender = ref('all')
const filteredItems = computed(() => {
  if (selectedGender.value === 'all') return props.items
  return props.items.filter(item => item.gender === selectedGender.value)
})
</script>

<template>
  <div class="filter-menu">
    <div class="filter-buttons">
      <button :class="{ active: selectedGender === 'all' }" @click="selectedGender = 'all'">ALL</button>
      <button :class="{ active: selectedGender === 'male' }" @click="selectedGender = 'male'">GIFT FOR HIM</button>
      <button :class="{ active: selectedGender === 'female' }" @click="selectedGender = 'female'">GIFT FOR HER</button>
    </div>
  </div>

  <div v-if="filteredItems.length > 0" class="all-items" :class="{ 'non-responsive': !isResponsive }">
    <website-hero
      v-for="item in filteredItems"      :key="item.id"
      :thumbnail="item.thumbnail"
      :hover-thumbnail="item.hoverThumbnail"
      :title="item.title"
      :price="item.price"
      :link="item.link"
    />
  </div>

  <div class="see-all-button">
    <router-link :to="{ name: 'explore' }" class="see-all-btn">
      SEE ALL
    </router-link>
  </div>

</template>

<style scoped>
* {
  font-family: 'Helvetica Neue', sans-serif;
  font-weight: normal;
}
/* ================== FILTER MENU ================== */
.filter-menu {
  display: flex;
  justify-content: center;
  gap: 5rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  padding-top: 3rem;
}

/* -------- Desktop / Tablet Buttons -------- */
.filter-buttons button {
  font-family: 'Helvetica Neue', sans-serif;
  padding: 10px 20px;
  border: 1px solid black;
  background-color: white;
  font-size: 1rem;
  font-weight: normal;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 0 20px;
  align-items: center;
}


/* Hover effect */
.filter-buttons button:hover {
  background-color: lightpink;
  color: black;
  transform: scale(1.05);       /* subtle hover scale */
}

/* Active state */
.filter-buttons button.active {
  background-color: lightpink;
  color: black;
  border-color: black;
}
.all-items {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* desktop */
  gap: 2rem;
  max-width: 1100px;
  margin: 0 auto;
}
.section-title{
  font-family: "Helvetica Neue",sans-serif;
  font-weight: normal;
  text-align: center;
  margin-bottom: 3rem;
  margin-top: 3rem;
  font-size: 1.5rem;

}
.see-all-button {
  text-align: center;
  margin-top: 30px;
  margin-bottom: 40px;
  font-family: "Helvetica Neue", sans-serif;
  font-weight: normal;
}

.see-all-btn {
  display: inline-block;
  padding: 12px 24px;
  text-decoration: none;
  font-size: 1rem;
  color: black;
  transition: 0.2s ease;
}

.see-all-btn:hover {
  background-color: lightpink;
  color: black;
}

/* Tablets */
@media (max-width: 992px) {
  .all-items {
    grid-template-columns: repeat(2, 1fr);
  }

  .filter-buttons button {
    font-size: 0.95rem;
    padding: 10px 20px;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
  }
}

/* Phones */
@media (max-width: 600px) {
  .filter-menu {
    padding-top: 2rem;
    margin-bottom: 1.5rem;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
  }

  .filter-buttons {
    gap: 0.75rem;
    width: 100%;
  }

  .filter-buttons button {
    font-size: 0.85rem;
    padding: 10px 16px;
    flex: 1 1 auto;
    min-width: fit-content;
  }

  .all-items {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

div.non-responsive {
  overflow: scroll;
  flex-wrap: nowrap;
}
</style>

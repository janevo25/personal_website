<template>
  <div class="results-container">
    <div class="results-content">

      <!-- Header -->
      <div class="results-header">
        <h1 class="results-title">Here Are Your Perfect Gifts! 🎁</h1>
        <p class="results-subtitle">
          Based on your answers, we found {{ filteredGifts.length }} amazing gift ideas
        </p>
        <button @click="startOver" class="restart-button">Start Over</button>
      </div>

      <!-- Gift Cards -->
      <div class="gifts-grid">
        <div
          v-for="gift in filteredGifts"
          :key="gift.id"
          class="gift-card"
        >
          <div class="gift-image">
            <img :src="gift.image" :alt="gift.name" />
          </div>

          <div class="gift-details">
            <h3 class="gift-name">{{ gift.name }}</h3>
            <p class="gift-price">{{ gift.price }}</p>

            <a
              :href="gift.link"
              target="_blank"
              class="buy-button"
            >
              Buy Now
            </a>
          </div>
        </div>
      </div>

      <!-- No Results -->
      <div v-if="filteredGifts.length === 0" class="no-results">
        <p>No gifts found matching your criteria. Try adjusting your preferences!</p>
        <button @click="startOver" class="restart-button">Try Again</button>
      </div>

    </div>
  </div>
</template>

<script>
import giftsData from '../Data/portfolio.json';

export default {
  name: 'ResultsPage',
  data() {
    return {
      gifts: giftsData.gifts,
      userAnswers: {}
    };
  },
  computed: {
    filteredGifts() {
      const answers = this.userAnswers;
      const selectedTags = [];

      // Flatten all selected answers into a single array
      Object.values(answers).forEach(answer => {
        if (Array.isArray(answer)) {
          selectedTags.push(...answer);
        } else {
          selectedTags.push(answer);
        }
      });

      // Match gifts based on overlapping tags
      return this.gifts.filter(gift =>
        gift.tags.some(tag => selectedTags.includes(tag))
      );
    }
  },
  mounted() {
    const answersParam = this.$route.params.answers;
    if (answersParam) {
      this.userAnswers = JSON.parse(answersParam);
    }
  },
  methods: {
    startOver() {
      this.$router.push({ name: 'Quiz' });
    }
  }
};
</script>

<style scoped>
.results-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #fef3c7 0%, #fed7aa 100%);
  padding: 40px 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

.results-content {
  max-width: 1200px;
  margin: 0 auto;
}

.results-header {
  text-align: center;
  margin-bottom: 48px;
}

.results-title {
  font-size: 42px;
  font-weight: bold;
  color: #111827;
  margin-bottom: 16px;
}

.results-subtitle {
  font-size: 18px;
  color: #4b5563;
  margin-bottom: 24px;
}

.restart-button {
  padding: 12px 24px;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 50px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 16px;
}

.restart-button:hover {
  background: #2563eb;
  transform: translateY(-2px);
}

.gifts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
  margin-top: 32px;
}

.gift-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
}

.gift-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

.gift-image {
  width: 100%;
  height: 250px;
  overflow: hidden;
}

.gift-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.gift-details {
  padding: 20px;
}

.gift-name {
  font-size: 20px;
  font-weight: bold;
  color: #111827;
  margin-bottom: 8px;
}

.gift-price {
  font-size: 18px;
  color: #3b82f6;
  font-weight: 600;
  margin-bottom: 16px;
}

.buy-button {
  display: inline-block;
  width: 100%;
  padding: 12px;
  background: #3b82f6;
  color: white;
  text-decoration: none;
  text-align: center;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.2s;
}

.buy-button:hover {
  background: #2563eb;
}

.no-results {
  text-align: center;
  padding: 60px 20px;
}

.no-results p {
  font-size: 18px;
  color: #4b5563;
  margin-bottom: 24px;
}

@media (max-width: 768px) {
  .results-title {
    font-size: 32px;
  }

  .gifts-grid {
    grid-template-columns: 1fr;
  }
}
</style>

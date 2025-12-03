<template>
  <div class="loading-container">
    <div class="loading-content">

      <div class="gift-icon">🎁</div>
      <h1 class="loading-title">Finding Perfect Gifts...</h1>
      <p class="loading-text">We're analyzing your preferences to suggest the best gifts</p>
      <div class="loading-spinner">

        <div class="spinner"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoadingPage',
  mounted() {
    setTimeout(() => {
      this.$router.push({
        name: 'Results',
        params: { answers: this.$route.params.answers }
      });
    }, 3000); // 3 seconds loading
  }
};
</script>

<style scoped>
.loading-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #fef3c7 0%, #fed7aa 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  font-family: Poppins, sans-serif;
}

.loading-content {
  text-align: center;
}

.gift-icon {
  font-size: 80px;
  margin-bottom: 24px;
  animation: bounce 1s infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

.loading-title {
  font-size: 36px;
  font-weight: bold;
  color: #111827;
  margin-bottom: 16px;
}

.loading-text {
  font-size: 18px;
  color: #4b5563;
  margin-bottom: 32px;
}

.loading-spinner {
  display: flex;
  justify-content: center;
}

.spinner {
  width: 50px;
  height: 50px;
  border: 4px solid #e5e7eb;
  border-top: 4px solid #3b82f6;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>

<script setup>

import questions from '@/Data/Questions.json'
import ShowQuestion from '@/components/Questions/ShowQuestion.vue'
import HeroImage3 from '@/components/website/HeroImage3.vue'

</script>

<template>
  <header>
    <HeroImage3/>
  </header>
  <show-question v-for="(question, index) in questions" :key="index" :data="questions[index]" />
</template>

<style scoped>
* {
  font-family: 'Helvetica Neue', sans-serif;
  font-weight: normal;
}
.welcome-line{
  margin-top: 40px;
  text-align: center;
  font-size: 1.5rem;
}
.welcome-line p {
  margin-top: 10px;
  text-align: center;
  font-size: 1rem;
}
/* Tablet */
@media (max-width: 992px) {
  .welcome-line {
    font-size: 1.3rem;
    padding: 0 1.5rem;
  }

  .welcome-line p {
    font-size: 0.95rem;
    padding: 0 1.5rem;
  }
}

/* Phone */
@media (max-width: 600px) {
  .welcome-line {
    font-size: 1.1rem;
    padding: 0 1rem;
  }

  .welcome-line p {
    font-size: 0.9rem;
    padding: 0 1rem;
  }
}
</style>

<script setup>

import questions from '@/Data/Questions.json'
import ShowQuestion from '@/components/Questions/ShowQuestion.vue'

</script>

<template>
  <div class="welcome-line">
    SHARE A LITTLE ABOUT WHO YOU’RE GIFTING.<br />
    Answer a few quick questions and we’ll match you with the perfect gift ideas!
  </div>
  <show-question v-for="(question, index) in questions" :key="index" :data="questions[index]" />
</template>

<style scoped>
* {
  font-family: 'Helvetica Neue', sans-serif;
  font-weight: normal;
}
.welcome-line{
  text-align: center;
  font-size: 1.5rem;
}
</style>

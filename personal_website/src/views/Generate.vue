<script setup>

import questions from '@/Data/Questions.json'
import ShowQuestion from '@/components/Questions/ShowQuestion.vue'

</script>

<template>
  <!-- question 1, a radio button -->
  <show-question :data="questions[0]"/>

  <!-- question 2, a checkbox button -->
  <show-question :data="questions[1]"/>

  <!-- question 3, a radio button -->
  <show-question :data="questions[2]"/>

  <!-- question 4, a radio button -->
  <show-question :data="questions[3]"/>

</template>

<style scoped></style>

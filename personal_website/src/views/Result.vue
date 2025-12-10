<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()

// Retrieve answers
const answers = JSON.parse(route.query.data)
</script>

<template>
  <div class="result-wrapper">
    <h1>Your Gift Matches</h1>

    <pre>{{ answers }}</pre>

    <!-- You will later generate gift ideas here -->
  </div>
</template>

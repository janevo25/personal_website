<script setup>
import NavBar from '@/components/website/NavBar.vue'
</script>

<template>
  <section class="container">
    <header>
      <nav-bar/>
    </header>

    <section class="content">
      <router-view></router-view>
    </section>

    <footer>Made by Jane</footer>
  </section>
</template>


<style scoped></style>

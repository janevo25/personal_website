<script setup>
import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <section class="content">
    <header>
      <nav-bar></nav-bar>
    </header>

    <section>
      <router-view></router-view>
    </section>

    <footer>Made by Jane</footer>
  </section>
</template>

<style scoped>
section.container {
    display: flex;
    flex-direction: column;
    gap: 10px;

    > * {
      border: 1px solid black;
    }

    .content {
      background-color: white;
      color: black;
      padding: 10px;
      border-radius: 10px;

      p {
        &:first-of-type {
          margin-top:0;
          }

          &:last-of-type {
            margin-top:0;}
      }

    }
  }
</style>

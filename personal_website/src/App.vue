<script setup>
import NavBar from '@/components/website/NavBar.vue'
import HeroImage from '@/components/website/HeroImage.vue'
</script>

<template>

  <section class="container">
    <header>
      <nav-bar/>
    </header>

    <section class="page-container">
      <header>
        <HeroImage/>
      </header>
    </section>

    <section class="content">
      <router-view>
      </router-view>
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
    border: 1px solid white;
  }

  .page-container {
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }


  .content {
    background-color: white;
    color: black;
    padding: 10px;
    border-radius: 10px;

    p {
      &:first-of-type {
        margin-top: 0;
      }

      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }

  footer {
    text-align: center;
    padding: 10px;
  }
}
</style>

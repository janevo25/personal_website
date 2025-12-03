<script setup>
</script>

<template>
  <div class="container">
    <div class="logo">
    <img src="/src/assets/gift_logo.png" alt="Gift Giving Club Logo"/>
    </div>
    <div class="links">
      <router-link :to="{name: 'home'}">Home</router-link>

      <router-link :to="{name: 'generate'}">Generate</router-link>

      <router-link :to="{name: 'explore'}">Explore</router-link>
    </div>
  </div>
</template>

<style scoped>

div.container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;

  div.logo {
    display: flex;
    height: 80px;
    width: 50px;
  }

  div.links {
    display: flex;
    flex-direction: column;
    gap: 10px;

    a {
      color: black;
      text-decoration: none;
      border: 1px solid white;
      padding: 5px;

      &:hover {
        background-color: white;
        color: saddlebrown;
      }
    }

    @media (width > 600px) {
      /* Overrides the flex-direction of column on div.links */
      flex-direction: row;
    }
  }
}
</style>

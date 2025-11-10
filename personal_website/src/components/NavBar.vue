<script setup lang="ts">
</script>

<template>
  <div class="container">
<div class="logo"></div>

  <div class="links">

    <router-link :to="{name: 'home'}">Home</router-link>

    <router-link :to="{name: 'about-me'}">About Me</router-link>

    <router-link :to="{name: 'contact-me'}">Contact Me</router-link>


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
    height: 300px;
    width: 400px;
    background-color: white;
    border-radius: 50px;
  }

  div.links{
    display: flex;
    flex-direction: column;

    a {
      color: white;
      text-decoration: none;
      border: 1px solid white;
      padding: 10px;


      &:hover{
        background-color: white;
        color: black;
      }
    }

    @media (width > 600px) {
      flex-direction: row;
    }
  }
}
</style>

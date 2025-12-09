<script setup>
</script>

<template>
  <div class="nav-wrapper">
      <div class="logo text-logo">Gift Giving Club</div>
    <div class="nav-row">
      <router-link :to="{ name: 'home' }">Home</router-link>

      <router-link :to="{ name: 'generate' }">Generate</router-link>

      <router-link :to="{ name: 'explore' }">Explore</router-link>
    </div>
  </div>
</template>

<style scoped>

.nav-wrapper {
  text-align: center;
  padding-top: 20px;
  padding-bottom: 0;
}

.text-logo{
  height: 80px;
  margin-bottom: 10px;
  margin-top: 10px;
  font-family: 'Clash Display', sans-serif;
  font-weight: 500;
  font-size: 3rem;
  text-align: center;
  color: #612928;
}

.nav-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
}

.nav-row a {
  padding: 16px 0;
  font-family: "Helvetica Neue",sans-serif;
  font-size: 14px;
  text-decoration: none;
  color: black;
  border-right: 1px solid black;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 500;
}

/* remove last right border */
.nav-row a:last-child {
  border-right: none;
}

/* hover effect */
.nav-row a:hover {
  background-color: lightpink;
}
.nav-row a.router-link-active {
  background-color: lightpink;
  font-weight: 600;
}
</style>

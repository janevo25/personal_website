<script setup>
</script>

<template>
  <div class="page-container">

    <section class="hero-image2">
      <div class="hero-text2">
        <h1>DISCOVER THE PERFECT GIFTS</h1>
        <p>We're here to make gift shopping easier</p>
      </div>
    </section>

  </div>
</template>

<style scoped>
.page-container {
  margin-top: 0;
  padding-top: 0;
}
.hero-image2 {
  background-image: url("https://glacier.org/wp-content/uploads/2020/10/Glacier-Desktop-Wallpaper-by-Cole-Buckovich-6-scaled.jpg");
  background-size: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-position: center; /* keeps subject centered */
  background-repeat: no-repeat;
  margin: 0;
  gap: 0;

  .hero-text2 {
    text-align: center;
    color: white;
    font-size: 1.7rem;
    font-family:'Helvetica Neue',sans-serif;
    font-weight: 400;
  }
  .hero-text2 p{
    font-size: 1.5rem;
  }
}


/* Tablet */
@media (max-width: 768px) {
  .hero-image2 {
    height: 35vh;
  }
  .hero-text h1 {
    font-size: 2rem;
  }
  .hero-text p {
    font-size: 1rem;
  }
}

/* Phone */
@media (max-width: 480px) {
  .hero-image {
    height: 30vh;
  }
  .hero-text h1 {
    font-size: 1.6rem;
  }
  .hero-text p {
    font-size: 0.9rem;
  }
}
</style>

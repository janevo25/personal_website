<script setup>
</script>

<template>
  <div class="page-container">
    <section class="hero-image2">
      <div class="hero-text2">
        <h1> <span class="highlight">EXPLORE SOME MORE GIFT OPTIONS </span></h1>
        <p>Shop our full selection here.</p>
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
  background-image:
    url('src/assets/polkadot_bg.webp');  display: flex;
  justify-content: center;
  align-items: center;
  height: 30vh;
  margin: 0;
  gap: 0;

  .hero-text2 {
    text-align: center;
    color: white;
    font-family: 'Helvetica Neue', sans-serif;
  }
  .highlight {
    background: #612928;
    padding: 0 0.2em;
    box-decoration-break: clone;
  }
  .hero-text2 h1 {
    font-size: 2.5rem;
    font-weight: 400;
    margin: 0 0 0.5rem 0;
    color: white;
  }

  .hero-text2 p {
    font-size: 1.2rem;
    margin-top: 0; /* Remove space above p */
    color: black;
  }
}
/* Tablet */
@media (max-width: 768px) {
  .hero-image2 {
    height: 40vh;
  }
  .hero-text2 h1 {
    font-size: 1.5rem;
  }
  .hero-text2 p {
    font-size: 1rem;
  }
}

/* Phone */
@media (max-width: 480px) {
  .hero-image2 {
    height: 35vh;
  }
  .hero-text2 h1 {
    font-size: 1.5rem;
  }
  .hero-text2 p {
    font-size: 1rem;
  }
}
</style>

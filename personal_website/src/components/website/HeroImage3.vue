<script setup>
</script>

<template>
  <div class="page-container">
    <section class="hero-image3">
      <div class="hero-text3">
        <h1> <span class="highlight">SHARE A LITTLE ABOUT WHO YOU’RE GIFTING </span></h1>
        <p>Answer a few quick questions and we’ll match you with the perfect gift ideas!</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page-container {
  margin-top: 0;
  padding-top: 0;
}
.hero-image3 {
  background-image:
    url('https://i5.walmartimages.com/seo/Chesapeake-Kiki-Light-Green-Monkeys-Wallpaper-20-9-in-by-33-ft_22b05723-b9d4-4da0-9045-c8e3178b926e.4764b76bd423b2631300b8516644e0fc.jpeg?odnHeight=573&odnWidth=573&odnBg=FFFFFF');  display: flex;
  justify-content: center;
  align-items: center;
  height: 30vh;
  margin: 0;
  gap: 0;

  .hero-text3 {
    text-align: center;
    color: white;
    font-family: 'Helvetica Neue', sans-serif;
  }
  .highlight {
    background: lightblue;
    padding: 0 0.2em;
    box-decoration-break: clone;
  }
  .hero-text3 h1 {
    font-size: 2.5rem;
    font-weight: 400;
    margin: 0 0 0.5rem 0;
    color: black;
  }

  .hero-text3 p {
    font-size: 1.2rem;
    margin-top: 0; /* Remove space above p */
    color: black;
  }
}
/* Tablet */
@media (max-width: 768px) {
  .hero-image3 {
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
  .hero-image3 {
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

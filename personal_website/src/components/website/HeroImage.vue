<script setup>
</script>

<template>
    <div class="page-container">

      <section class="hero">
        <img src="https://glacier.org/wp-content/uploads/2020/10/Glacier-Desktop-Wallpaper-by-Cole-Buckovich-6-scaled.jpg" class="hero-img" alt="hero" />
        <div class="hero-text">
          <h1>Discover the Perfect Gift</h1>
          <p>Find gifts that bring joy</p>
        </div>
      </section>

    </div>
  </template>

<style scoped>
.hero{
  width: 100%;
  height: 100%;
}
/* TEXT ON TOP */
.hero-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  padding: 0 1rem;
}

.hero-text h1 {
  font-size: 3rem;
  margin: 0;
}

.hero-text p {
  margin-top: 10px;
  font-size: 1.3rem;
}

/* Tablet */
@media (max-width: 768px) {
  .hero {
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
  .hero {
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

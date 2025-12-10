<script setup>
import HeroImage from '@/components/website/HeroImage.vue'
import GenerateIntro from '@/components/website/GenerateIntro.vue'


const images = [
  '/src/assets/jelltcat_front.png',
  '/src/assets/glossier.png',
  '/src/assets/notebook.png',
  '/src/assets/pot.jpg',
  '/src/assets/lamp.webp',
  '/src/assets/toy_keychain.webp',
  '/src/assets/notebook.png',
  '/src/assets/glossier.png',
]
const duplicatedImages = [...images, ...images] // needed for infinite loop

</script>

<template>
  <!-- Hero Image -->
  <header>
    <HeroImage/>
  </header>

  <!-- Headline -->
  <div class="welcome-line">TOP TRENDING GIFTS NOW</div>

  <!-- Auto-Scrolling Image Slider -->
  <section class="slider">
    <div class="slide-track">
      <div class="slide" v-for="(img, i) in duplicatedImages" :key="i">
        <img :src="img" />
      </div>
    </div>
  </section>

  <div class="see-more-button">
    <router-link :to="{ name: 'explore' }" class="see-more-btn">
      SEE MORE
    </router-link>
  </div>

  <GenerateIntro />

</template>

<style scoped>

.welcome-line{
  font-family: "Helvetica Neue", sans-serif;
  font-size: 2rem;
  margin-top: 3rem;
  text-align: center;
}

.slider {
  height: 400px;
  overflow: hidden;
  width: 100%;
  margin: 40px 0;        /* spacing under hero */
  position: relative;
}

/* TRACK  */
.slide-track {
  display: flex;
  animation: scroll 20s linear infinite;  /* speed */
}

/*  EACH SLIDE */
.slide {
  width: 340px;          /* image width */
  height: 400px; /* image height */
  flex-shrink: 0;
  margin-right: 20px;
}

.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  padding: 10px;
}
@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%); /* move half of the track length */
  }
}

/*/ Button */
.see-more-button {
    text-align: center;
    margin-top: 30px;
    margin-bottom: 40px;
    font-family: "Helvetica Neue", sans-serif;
    font-weight: normal;
  }

  .see-more-btn {
    display: inline-block;
    padding: 12px 24px;
    text-decoration: none;
    font-size: 1rem;
    color: black;
    transition: 0.2s ease;
  }
.see-more-btn:hover {
  background-color: lightpink;
  color: black;
}
/* Tablets */
@media (max-width: 900px) {
  .welcome-line {
    font-size: 1.6rem;
  }

  .slider {
    height: 300px;
  }

  .slide {
    width: 260px;
    height: 300px;
  }
}

/* Phones */
@media (max-width: 600px) {
  .welcome-line {
    font-size: 1.3rem;
    margin-top: 2rem;
  }

  .slider {
    height: 250px;
    margin: 20px 0;
  }

  .slide {
    width: 200px;
    height: 250px;
    margin-right: 12px;
  }

  .see-more-btn {
    padding: 10px 20px;
    font-size: 0.9rem;
  }
}
</style>

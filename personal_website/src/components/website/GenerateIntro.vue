<script setup lang="ts">
</script>

<template>
  <section class="info-section">
    <div class="info-image">
      <img src="/src/assets/info-image.gif" alt="Gift section" />
    </div>

    <div class="info-text">
      <h2>HAVING TROUBLE CHOOSING A GIFT?</h2>
      <p>
        Let our generator narrow it down for you.
        With personalized suggestions, we’ll recommend meaningful ideas
        tailored to the person you’re shopping for.
      </p>

      <router-link to="/generate" class="info-button">
        GENERATE NOW
      </router-link>
    </div>
  </section>
</template>

<style scoped>
/* MAIN LAYOUT */
.info-section {
  display: flex;
  width: 100%;
  height: auto;
  max-width: 100vw; /* Prevents overflow beyond viewport */
  overflow: hidden; /* Prevents any content from spilling out */
}

/* LEFT IMAGE SIDE */
.info-image {
  flex: 1;
  min-width: 0; /* Allows flex item to shrink below content size */
}

.info-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* RIGHT TEXT SIDE */
.info-text {
  flex: 1;
  background: #fffae5; /* cream background */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
  min-width: 0; /* Allows flex item to shrink */
}

.info-text h2 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  font-family: "Helvetica Neue", sans-serif;
  font-weight: 400;
}

.info-text p {
  font-size: 1.25rem;
  max-width: 500px;
  margin-bottom: 2rem;
  font-family: "Helvetica Neue", sans-serif;
  font-weight: 400;
}

/* BUTTON */
.info-button {
  background: lightpink;
  padding: 0.6rem 1.4rem;
  text-decoration: none;
  color: black;
  border: 1px solid black;
  font-size: 1rem;
  transition: 0.3s;
  font-family: "Helvetica Neue", sans-serif;
  font-weight: 400;
}

.info-button:hover {
  opacity: 0.8;
  background-color: #fffae5 ;
}
/* TABLET - width 768px to 1024px */
@media (max-width: 1024px) {

  .info-section {
    flex-direction: column; /* stack image and text vertically */
    height: auto; /* height adjusts to content */
  }

  .info-image,
  .info-text {
    max-width: 100%;
    flex: unset;
  }

  .info-text {
    padding: 1.5rem; /* smaller padding for tablet */
  }
  .info-text h2 {
    max-width: 100%;
    min-width: 0;

  }
}

/* MOBILE - width below 768px */
@media (max-width: 768px) {

  .info-text h2 {
    font-size: 1.5rem; /* smaller heading on mobile */
  }

  .info-text p {
    font-size: 1rem; /* smaller paragraph */
  }

  .info-button {
    padding: 0.5rem 1rem; /* smaller button */
    font-size: 0.9rem;
  }
}

/* SMALL MOBILE - width below 480px */
@media (max-width: 480px) {
  .info-text {
    padding: 1rem; /* minimal padding */
  }

  .info-text h2 {
    font-size: 1.25rem;
  }

  .info-text p {
    font-size: 0.9rem;
  }

  .info-button {
    padding: 0.4rem 0.8rem;
    font-size: 0.85rem;
  }
}

</style>

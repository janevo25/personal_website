<script setup>
import NavBar from '@/components/website/NavBar.vue'
</script>

<template>
  <section class="container">
    <header>
      <nav-bar />
    </header>

    <section class="page-container"></section>

    <section class="content">
      <router-view> </router-view>
    </section>

    <footer class="site-footer">
      <div class="footer-left">Gift Giving Club</div>
      <div class="footer-right">&copy; 2025 Made by Jane</div>
      <link
        href="https://api.fontshare.com/v2/css?f[]=clash-display@600&display=swap"
        rel="stylesheet"
      />
    </footer>
  </section>
</template>

<style scoped>
section.container {
  display: flex;
  flex-direction: column;
  gap: 0;
  margin:0;

  .page-container {
    position: relative;
    width: 100vw;
    overflow: hidden;
  }

  .content {
    background-color: white;
    color: black;
    padding: 0;
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

  .site-footer {
    background-color: lightpink;
    color: #612928;
    padding: 3rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
    box-sizing: border-box;
  }

  .footer-left {
    font-family: 'Clash Display', sans-serif;
    font-weight: 500;
    font-size: 7rem;
    line-height: 0.9;
    padding: 0;
  }

  .footer-right {
    font-size: 1.4rem;
    font-family: 'Helvetica Neue', sans-serif;
    text-align: right;
    white-space: nowrap;
  }

  /* Tablets */
  @media (max-width: 992px) {
    .site-footer {
      padding: 2rem 1.5rem;
    }

    .footer-left {
      font-size: 4rem;
    }

    .footer-right {
      font-size: 1.1rem;
    }
  }

  @media (max-width: 600px) {
    .site-footer {
      flex-direction: column;
      align-items: flex-start;
      padding: 2rem 1.5rem 1.5rem 1.5rem; /* More padding on top, less on bottom */
      gap: 0.3rem;
      min-height: 120px; /* Ensures footer has minimum height */
      justify-content: flex-end; /* Pushes content to bottom */
    }

    .footer-left {
      font-size: 3rem; /* Bigger text */
      line-height: 0.9;
    }

    .footer-right {
      font-size: 1rem; /* Bigger text */
      text-align: left;
      margin-top: 0;
    }
  }
}
</style>

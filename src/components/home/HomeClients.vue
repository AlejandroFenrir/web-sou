<template>
  <!-- Portfolio 2 -->
  <section class="clients bg-darkbrown">
    <div class="container">
      <div class="section-linetitle">
        <div class="d-flex align-items-center">
          <div class="leter">
            <h4>{{ clients.sectionLetter }}</h4>
          </div>
          <div class="line"></div>
        </div>
        <div class="title">
          <h6 class="sub-title">{{ clients.sectionSubtitle }}</h6>
        </div>
      </div>
    </div>
    <!-- Scrolling -->
    <div class="scrolling scrolling-ticker bg-darkbrown">
      <div class="wrapper feather-shadow2">
        <div class="content">
          <span v-for="(logo, index) in clients.logos" :key="`logo-a-${index}`">
            <img class="client-logo" :src="logo.src" :alt="logo.alt" loading="lazy" />
          </span>
        </div>
        <div class="content">
          <span v-for="(logo, index) in clients.logos" :key="`logo-b-${index}`">
            <img class="client-logo" :src="logo.src" :alt="logo.alt" loading="lazy" />
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import clients from '../../data/home/HomeClients.js';
</script>

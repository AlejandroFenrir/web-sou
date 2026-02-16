<template>
  <!-- Services Details -->
  <div class="service-details section-padding pb-0">
    <div class="container">
      <div class="row mb-60">
        <div class="col-lg-7 col-md-12">
          <p class="mb-60"><span class="first-letter">IE</span>{{ intro.intro }}</p>
        </div>
        <div class="col-lg-4 offset-lg-1 col-md-12">
          <blockquote class="vert-move">
            <p>{{ intro.quote.text }}</p>
            <cite>{{ intro.quote.cite }}</cite>
          </blockquote>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import intro from '../../data/service-details/ServiceDetailsIntro.js';
</script>

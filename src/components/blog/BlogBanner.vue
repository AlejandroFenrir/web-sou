<template>
  <!-- Header Banner -->
  <div
    class="banner-header section-padding valign bg-img bg-imgfixed"
    :data-overlay-dark="banner.overlayDark"
    :data-background="banner.background"
  >
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center">
          <h3>{{ banner.title }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import banner from '../../data/blog/BlogBanner.js';
</script>

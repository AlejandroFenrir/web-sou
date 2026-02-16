<template>
  <!-- Header Banner -->
  <div
    class="banner-header middle-height section-padding valign bg-img bg-imgfixed"
    :data-overlay-dark="banner.overlayDark"
    :data-background="banner.background"
  >
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center">
          <h3>{{ banner.title }}</h3>
          <div class="post">
            <div class="author">
              <img :src="banner.author.avatar" alt="" class="avatar" />
              <span>{{ banner.author.name }}</span>
            </div>
            <div class="date-comment"><i class="ti-calendar"></i> {{ banner.date }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import banner from '../../data/post/PostBanner.js';
</script>

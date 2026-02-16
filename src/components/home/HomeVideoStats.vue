<template>
  <!-- Testimonials 2 -->
  <section class="testimonials2 pt-80 mt-100 mb-0">
    <div class="container">
      <div class="bg-img bg-imgfixed" :data-background="videoStats.background" :data-overlay-dark="videoStats.overlayDark">
        <div class="play-button">
          <a :href="videoStats.video.href" class="btn vid">
            <svg width="100px" height="100px" viewBox="0 0 100 100" preserveAspectRatio="none">
              <circle class="circle" cx="50" cy="50" r="48" stroke="white" stroke-width="2" fill="none" />
            </svg>
            <i class="fa-solid fa-play"></i>
          </a>
          <div class="text"><span>{{ videoStats.video.text }}</span></div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-5 col-md-12 mb-60">
          <div class="item-cover animate-box" data-animate-effect="fadeInLeft">
            <div class="owl-carousel owl-theme">
              <div class="item">
                <div class="cont">
                  <h2>
                    <span class="plus">{{ videoStats.stat.prefix }}</span>{{ videoStats.stat.value }}
                    <span class="meters2">{{ videoStats.stat.unit }}</span>
                  </h2>
                  <p>{{ videoStats.stat.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Ornava text -->
    <div class="ornava-text">{{ videoStats.ornavaText }}</div>
  </section>
</template>

<script setup>
import videoStats from '../../data/home/HomeVideoStats.js';
</script>

<template>
  <!-- Parallax Image -->
  <div
    class="banner-header full-height valign bg-img bg-imgfixed"
    :data-overlay-dark="hero.overlayDark"
    :data-background="hero.background"
  >
    <video class="banner-video" autoplay muted loop playsinline>
      <source :src="hero.video" type="video/mp4" />
    </video>
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-7">
          <h6>{{ hero.eyebrow }}</h6>
          <h2>{{ hero.title }}</h2>
          <p>{{ hero.description }}</p>
          <a :href="hero.cta.href" class="durubtn4">
            <span class="text-wrapper">
              <span class="text slide-up">{{ hero.cta.text }}</span>
              <span class="text slide-down">{{ hero.cta.text }}</span>
            </span>
          </a>
        </div>
        <div class="col-md-3 offset-md-2 text-center">
          <a :href="hero.circle.href" class="hover-this circle-button-overlay">
            <div class="circle-button in-bord hover-anim">
              <div class="rotate-circle">
                <svg class="textcircle safari-fix" viewBox="0 0 500 500">
                  <defs>
                    <path id="textcircle" d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"></path>
                  </defs>
                  <text>
                    <textPath xlink:href="#textcircle" startOffset="0">
                      {{ hero.circle.text }}
                    </textPath>
                  </text>
                </svg>
              </div>
              <div class="in-circle text-center">
                <i :class="hero.circle.iconClass"></i>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
    <!-- button scroll -->
    <a href="#" :data-scroll-nav="hero.scroll.target" class="mouse smoothscroll">
      <span class="mouse-icon"><span class="mouse-wheel"></span> </span>
    </a>
  </div>
</template>

<script setup>
import hero from '../../data/home/HomeHero.js';
</script>

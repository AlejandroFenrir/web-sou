<template>
  <!-- Gallery Scroll Image -->
  <section class="galleryscroll section-padding pt-0">
    <div class="container">
      <div class="section-linetitle">
        <div class="d-flex align-items-center">
          <div class="leter"><h4>{{ gallery.sectionLetter }}</h4></div>
          <div class="line"></div>
        </div>
        <div class="title"><h6 class="sub-title">{{ gallery.sectionSubtitle }}</h6></div>
      </div>
    </div>
    <div class="container-fluid p-0 box-right-7">
      <div class="row">
        <div class="col-md-12">
          <div class="owl-carousel owl-theme">
            <div v-for="(image, index) in gallery.images" :key="index" class="item">
              <a :href="image" title="" class="img-zoom">
                <div class="img">
                  <img :src="image" class="img-fluid mx-auto d-block" alt="" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import gallery from '../../data/portfolio-single/PortfolioSingleGallery.js';
</script>

<template>
  <!-- Services -->
  <section class="services section-padding">
    <div class="container">
      <div class="section-linetitle">
        <div class="d-flex align-items-center">
          <div class="leter">
            <h4>{{ services.sectionLetter }}</h4>
          </div>
          <div class="line"></div>
        </div>
        <div class="title">
          <h6 class="sub-title">{{ services.sectionSubtitle }}</h6>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-12">
          <div class="owl-carousel owl-theme">
            <div v-for="(item, index) in services.services" :key="index" class="item mb-25">
              <a :href="item.link"><span class="arrow fa-thin fa-arrow-up-right"></span></a>
              <div class="icon"><img :src="item.icon" :alt="item.alt" /></div>
              <h5>{{ item.title }}</h5>
              <p v-if="item.description">{{ item.description }}</p>
              <ul v-else-if="item.bullets" class="dot-list">
                <li v-for="(bullet, bIndex) in item.bullets" :key="bIndex">{{ bullet }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="dots-half bg-img bg-imgfixed"
      :data-overlay-dark="services.background.overlayDark"
      :data-background="services.background.image"
    ></div>
  </section>
</template>

<script setup>
import services from '../../data/home/HomeServices.js';
</script>

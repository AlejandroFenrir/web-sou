<template>
  <!-- Portfolio 2 -->
  <section class="portfolio2 section-padding bg-darkbrown">
    <div class="container">
      <div class="section-linetitle">
        <div class="d-flex align-items-center">
          <div class="leter">
            <h4>{{ portfolio.sectionLetter }}</h4>
          </div>
          <div class="line"></div>
        </div>
        <div class="title">
          <h6 class="sub-title">{{ portfolio.sectionSubtitle }}</h6>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="portfolio2-container">
            <div class="owl-carousel owl-theme">
              <div v-for="(item, index) in portfolio.items" :key="index" class="item mb-25">
                <div class="img"><img :src="item.image" alt="" /></div>
                <div class="icon-wrapper">
                  <i class="ti-arrow-top-right default-icon"></i>
                  <a :href="item.link" class="hover-icon-link" title="Ver proyecto">
                    <i class="ti-arrow-top-right hover-icon"></i>
                  </a>
                </div>
                <div class="con">
                  <p>{{ item.category }}</p>
                  <h5>{{ item.title }}</h5>
                  <div class="line"></div>
                  <div class="details">
                    <span v-for="(detail, dIndex) in item.details" :key="dIndex">
                      <i :class="detail.icon"></i> {{ detail.text }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import portfolio from '../../data/home/HomePortfolio.js';
</script>

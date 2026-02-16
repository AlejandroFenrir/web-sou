<template>
  <!-- FAQs -->
  <section class="faqs section-padding bg-darkbrown">
    <div class="container">
      <div class="section-linetitle">
        <div class="d-flex align-items-center">
          <div class="leter">
            <h4>{{ faqs.sectionLetter }}</h4>
          </div>
          <div class="line"></div>
        </div>
        <div class="title">
          <h6 class="sub-title">{{ faqs.sectionSubtitle }}</h6>
        </div>
      </div>
      <div class="row align-items-center">
        <div class="col-lg-5 col-md-12 mb-30">
          <div class="section-title mb-25">{{ faqs.title }}</div>
          <ul class="accordion-box clearfix">
            <li v-for="(item, index) in faqs.faqs" :key="index" class="accordion block">
              <div class="acc-btn">
                <span class="count">{{ index + 1 }}.</span> {{ item.question }}
              </div>
              <div class="acc-content">
                <div class="content">
                  <p>{{ item.answer }}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="col-lg-3 col-md-6 mb-60 position-relative z-2">
          <img class="animation-float1 float-overlap" :src="faqs.images.main" alt="" />
        </div>
        <div class="col-lg-4 col-md-6 mb-20 position-relative z-1">
          <img class="animation-float2" :src="faqs.images.secondary" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import faqs from '../../data/home/HomeFaqs.js';
</script>

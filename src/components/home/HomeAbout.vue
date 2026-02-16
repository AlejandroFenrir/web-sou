<template>
  <!-- About -->
  <section class="about section-padding" data-scroll-index="1">
    <div class="container">
      <div class="section-linetitle">
        <div class="d-flex align-items-center">
          <div class="leter">
            <h4>{{ about.sectionLetter }}</h4>
          </div>
          <div class="line"></div>
        </div>
        <div class="title">
          <h6 class="sub-title">{{ about.sectionSubtitle }}</h6>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-5 col-md-12 mb-30">
          <div class="section-title">{{ about.title }}</div>
          <p>{{ about.description }}</p>
          <a :href="about.cta.href" class="durubtn">
            <span class="text-wrapper">
              <span class="text slide-up">{{ about.cta.text }}</span>
              <span class="text slide-down">{{ about.cta.text }}</span>
            </span>
          </a>
        </div>
        <div class="col-lg-5 offset-lg-2 col-md-12">
          <div class="year15 line vert-move">
            <div class="txt">{{ about.yearsLabel }}</div>
            <span>{{ about.yearsValue }}</span>
          </div>
          <img :src="about.image" class="img-fluid" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import about from '../../data/home/HomeAbout.js';
</script>

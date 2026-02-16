<template>
  <!-- Team -->
  <section class="team section-padding">
    <div class="container">
      <div class="section-linetitle">
        <div class="d-flex align-items-center">
          <div class="leter">
            <h4><span v-html="team.sectionLetterHtml"></span></h4>
          </div>
          <div class="line"></div>
        </div>
        <div class="title">
          <h6 class="sub-title">{{ team.sectionSubtitle }}</h6>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-12 mb-30">
          <div class="section-title" v-html="team.titleHtml"></div>
          <p class="mb-30">{{ team.description }}</p>
          <a :href="team.cta.href" class="durubtn">
            <span class="text-wrapper">
              <span class="text slide-up">{{ team.cta.text }}</span>
              <span class="text slide-down">{{ team.cta.text }}</span>
            </span>
          </a>
        </div>
        <div class="col-lg-6 offset-lg-1 col-md-12">
          <div class="team-container">
            <div class="owl-carousel owl-theme">
              <div v-for="(slide, index) in team.slides" :key="index" class="item">
                <div class="img">
                  <img :src="slide.image" class="fluid" alt="" loading="lazy" />
                </div>
                <div class="bg"></div>
                <div class="con">
                  <a :href="slide.link">
                    <div class="title"><span>{{ slide.title }}</span></div>
                    <div class="subtitle"><span>{{ slide.subtitle }}</span></div>
                  </a>
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
import team from '../../data/home/HomeTeam.js';
</script>

<template>
  <!-- Portfolio 2 -->
  <section class="portfolio2 section-padding">
    <div class="container">
      <div class="section-linetitle">
        <div class="d-flex align-items-center">
          <div class="leter">
            <h4>{{ projects.sectionLetter }}</h4>
          </div>
          <div class="line"></div>
        </div>
        <div class="title">
          <h6 class="sub-title">{{ projects.sectionSubtitle }}</h6>
        </div>
      </div>
      <div class="row">
        <div v-for="(item, index) in projects.items" :key="index" class="col-lg-6 col-md-12">
          <div class="item mb-25">
            <div class="img"><img :src="item.image" alt="" /></div>
            <div class="icon-wrapper">
              <i class="ti-arrow-top-right default-icon"></i>
              <a :href="item.link" class="hover-icon-link" title="View Project">
                <i class="ti-arrow-top-right hover-icon"></i>
              </a>
            </div>
            <div class="con">
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
  </section>
</template>

<script setup>
import projects from '../../data/proyectos/ProyectosEstructura.js';
</script>

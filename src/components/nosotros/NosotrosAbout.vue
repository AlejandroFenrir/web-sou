<template>
  <!-- About 2 -->
  <section class="about section-padding bg-darkbrown">
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
      <div class="row justify-content-center align-items-center">
        <div class="col-lg-6 col-md-12 animate-box" data-animate-effect="fadeInLeft">
          <div class="image-wrapper" style="position: relative;">
            <img class="img" :src="about.image" alt="" />
            <a :href="about.circle.href" class="hover-this wow zoomIn circle-button-overlay" data-wow-delay=".7s">
              <div class="circle-button in-bord hover-anim">
                <div class="rotate-circle">
                  <svg class="textcircle" viewBox="0 0 500 500">
                    <defs>
                      <path
                        id="textcircle"
                        d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
                      ></path>
                    </defs>
                    <text>
                      <textPath xlink:href="#textcircle" startOffset="0">
                        {{ about.circle.text }}
                      </textPath>
                    </text>
                  </svg>
                </div>
                <div class="in-circle text-center"><img :src="about.circle.icon" alt="" /></div>
              </div>
            </a>
          </div>
        </div>
        <div class="col-lg-5 offset-lg-1 col-md-12 animate-box" data-animate-effect="fadeInRight">
          <div class="section-title">{{ about.title }}</div>
          <p>{{ about.description }}</p>
          <ul class="page-list list-unstyled mb-25">
            <li v-for="(item, index) in about.bullets" :key="index">
              <div class="page-list-icon"><span class="ti-check"></span></div>
              <div class="page-list-text">
                <p>{{ item }}</p>
              </div>
            </li>
          </ul>
          <div class="about-bottom mt-30">
            <img :src="about.signature.image" alt="" class="image about-signature" />
            <div class="about-name-wrapper">
              <div class="about-rol">{{ about.signature.role }}</div>
              <div class="about-name">{{ about.signature.name }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import about from '../../data/nosotros/NosotrosAbout.js';
</script>

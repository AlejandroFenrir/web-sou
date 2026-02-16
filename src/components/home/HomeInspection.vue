<template>
  <!-- Pricing -->
  <section class="price section-padding">
    <div class="container">
      <div class="section-linetitle">
        <div class="d-flex align-items-center">
          <div class="leter">
            <h4>{{ inspection.sectionLetter }}</h4>
          </div>
          <div class="line"></div>
        </div>
        <div class="title">
          <h6 class="sub-title">{{ inspection.sectionSubtitle }}</h6>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-12 mb-30">
          <img class="aws-logo" :src="inspection.logo" alt="AWS" />
          <div class="section-title">{{ inspection.title }}</div>
          <p class="mb-30">{{ inspection.description }}</p>
          <div class="section-info">
            <div class="tag"><i class="icon" :class="inspection.info.iconClass"></i></div>
            <div class="desc">
              {{ inspection.info.text }}
              <span class="text-decoration-line-bottom">{{ inspection.info.linkText }}</span>
            </div>
          </div>
        </div>
        <div class="col-lg-7 offset-lg-1 col-md-12">
          <div class="row">
            <div v-for="(plan, index) in inspection.plans" :key="index" class="col-md-12">
              <div class="item bg-dark d-flex" :class="{ 'mb-30': index === 0 }">
                <div class="type">
                  <h5>{{ plan.title }}</h5>
                </div>
                <div class="cont ml-30">
                  <ul class="dot-list rest">
                    <li v-for="(bullet, bIndex) in plan.bullets" :key="bIndex">{{ bullet }}</li>
                  </ul>
                </div>
                <div class="mount ml-auto text-center">
                  <h3 class="text-light"><span></span>{{ plan.cta.text }}</h3>
                  <div>
                    <a :href="plan.cta.href" class="durubtn">
                      <span class="text-wrapper">
                        <span class="text slide-up">{{ plan.cta.text }}</span>
                        <span class="text slide-down">{{ plan.cta.text }}</span>
                      </span>
                    </a>
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
import inspection from '../../data/home/HomeInspection.js';
</script>

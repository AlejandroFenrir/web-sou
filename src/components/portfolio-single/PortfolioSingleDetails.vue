<template>
  <!-- Portfolio Single -->
  <section class="portfolio-single section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-7 col-md-12 mb-30">
          <h4>Descripción</h4>
          <p class="mb-30">{{ details.description }}</p>
          <ul class="page-list list-unstyled">
            <li v-for="(feature, index) in details.features" :key="index">
              <div class="page-list-icon"><span class="ti-check"></span></div>
              <div class="page-list-text">
                <p>{{ feature }}</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="col-lg-4 offset-lg-1 col-md-12">
          <div class="cont">
            <div v-for="(item, index) in details.info" :key="index" class="item">
              <div class="icon" :class="{ 'status-completed': item.status === 'completed' }">
                <i :class="item.icon"></i>
              </div>
              <div class="title">{{ item.title }}</div>
              <div class="value" :class="{ 'status-completed': item.status === 'completed' }">
                {{ item.value }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import details from '../../data/portfolio-single/PortfolioSingleDetails.js';
</script>

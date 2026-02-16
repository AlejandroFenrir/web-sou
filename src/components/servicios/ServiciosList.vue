<template>
  <!-- Services 2 -->
  <section class="services2 section-padding">
    <div class="container">
      <div class="row">
        <div v-for="(service, index) in services.services" :key="index" class="col-md-4">
          <div class="item" :class="index < 2 ? 'mb-45' : 'mb-25'">
            <div class="img"><img :src="service.image" alt="" /></div>
            <div class="icon-wrapper">
              <i :class="service.iconClass + ' default-icon'"></i>
              <a :href="service.link" class="hover-icon-link" title="View Project">
                <i class="ti-arrow-top-right hover-icon"></i>
              </a>
            </div>
            <div class="con">
              <h5>{{ service.title }}</h5>
              <div class="line"></div>
              <div class="permalink" v-html="service.description"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import services from '../../data/servicios/ServiciosList.js';
</script>

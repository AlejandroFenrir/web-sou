<template>
  <!-- Contact Box -->
  <div class="contact-box">
    <div class="container">
      <div class="row">
        <div
          v-for="(item, index) in box.items"
          :key="index"
          class="col-lg-4 col-md-6 animate-box"
          data-animate-effect="fadeInUp"
        >
          <div class="item" :class="{ active: item.active }">
            <span class="icon" :class="item.iconClass"></span>
            <h5>{{ item.title }}</h5>
            <p>{{ item.text }}</p>
            <i class="numb" :class="item.bigIconClass"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import box from '../../data/contacto/ContactoBox.js';
</script>

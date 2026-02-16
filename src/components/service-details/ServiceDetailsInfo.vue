<template>
  <!-- Services Details -->
  <section class="service-details section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-5 col-md-12 mb-30">
          <h4>{{ info.scopeTitle }}</h4>
          <ul class="list-unstyled list">
            <li v-for="(item, index) in info.scope" :key="index">
              <div class="list-icon"><span class="ti-check"></span></div>
              <div class="list-text">
                <p>{{ item }}</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="col-lg-6 offset-lg-1 col-md-12">
          <h4>{{ info.faqTitle }}</h4>
          <ul class="accordion-box clearfix">
            <li v-for="(faq, index) in info.faqs" :key="index" class="accordion block">
              <div class="acc-btn"><span class="count">{{ index + 1 }}.</span> {{ faq.question }}</div>
              <div class="acc-content">
                <div class="content">
                  <div class="text">{{ faq.answer }}</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import info from '../../data/service-details/ServiceDetailsInfo.js';
</script>

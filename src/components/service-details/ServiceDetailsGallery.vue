<template>
  <!-- Gallery Scroll Image -->
  <div class="galleryscroll">
    <div class="container-fluid p-0 box-right-7">
      <div class="row">
        <div class="col-md-12">
          <div class="owl-carousel owl-theme">
            <div v-for="(image, index) in gallery.images" :key="index" class="item">
              <a :href="image" title="" class="img-zoom">
                <div class="img">
                  <img :src="image" class="img-fluid mx-auto d-block" alt="" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import gallery from '../../data/service-details/ServiceDetailsGallery.js';
</script>

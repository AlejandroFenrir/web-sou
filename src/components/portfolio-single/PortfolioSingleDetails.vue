<template>
  <!-- Portfolio Single -->
  <section class="portfolio-single section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-7 col-md-12 mb-30">
          <h4>Descripcion</h4>
          <p class="mb-30">{{ descriptionText }}</p>
          <ul v-if="features.length" class="page-list list-unstyled">
            <li v-for="(feature, index) in features" :key="index">
              <div class="page-list-icon"><span class="ti-check"></span></div>
              <div class="page-list-text">
                <p>{{ feature }}</p>
              </div>
            </li>
          </ul>
          <p v-else class="mb-30">No hay caracteristicas</p>
        </div>
        <div class="col-lg-4 offset-lg-1 col-md-12">
          <div v-if="info.length" class="cont">
            <div v-for="(item, index) in info" :key="index" class="item">
              <div class="icon" :class="{ 'status-completed': item.status === 'completed' }">
                <i :class="item.icon"></i>
              </div>
              <div class="title">{{ item.title }}</div>
              <div class="value" :class="{ 'status-completed': item.status === 'completed' }">
                {{ item.value }}
              </div>
            </div>
          </div>
          <div v-else class="cont">
            <div class="item">
              <div class="title">Informacion</div>
              <div class="value">No hay informacion</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  details: {
    type: Object,
    default: null,
  },
});

const descriptionText = computed(() => {
  const text = props.details?.description?.trim();
  return text ? text : 'No hay descripcion';
});

const features = computed(() => (props.details?.features?.length ? props.details.features : []));
const info = computed(() => (props.details?.info?.length ? props.details.info : []));
</script>

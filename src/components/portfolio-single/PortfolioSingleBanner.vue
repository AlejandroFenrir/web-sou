<template>
  <!-- Header Banner -->
  <div
    class="banner-header middle-height section-padding valign bg-img bg-imgfixed"
    :data-overlay-dark="overlayDark"
    :data-background="background"
    :style="backgroundStyle"
  >
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center">
          <h3>{{ title }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  banner: {
    type: Object,
    default: null,
  },
});

const title = computed(() => props.banner?.title || 'Sin título');
const background = computed(() => props.banner?.background || null);
const overlayDark = computed(() => props.banner?.overlayDark ?? 0);
const backgroundStyle = computed(() =>
  background.value ? { backgroundImage: `url(${background.value})` } : {}
);
</script>

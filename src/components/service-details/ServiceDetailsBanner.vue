<template>
  <!-- Header Banner -->
  <div
    class="banner-header middle-height section-padding valign bg-img bg-imgfixed"
    :data-overlay-dark="banner.overlayDark"
    :data-background="banner.background"
    :style="backgroundStyle"
  >
    <video v-if="banner.video" class="banner-video" autoplay muted loop playsinline>
      <source :src="banner.video" type="video/mp4" />
    </video>
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center">
          <h3>{{ banner.title }}</h3>
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
    default: () => ({
      title: '',
      background: '',
      overlayDark: 5,
    }),
  },
});

const banner = computed(() => props.banner || {});
const backgroundStyle = computed(() =>
  banner.value?.background ? { backgroundImage: `url(${banner.value.background})` } : {}
);
</script>

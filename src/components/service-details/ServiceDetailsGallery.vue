<template>
  <!-- Gallery Scroll Image -->
  <div v-if="hasImages" ref="galleryRoot" class="galleryscroll">
    <div class="container-fluid p-0 box-right-7">
      <div class="row">
        <div class="col-md-12">
          <div class="owl-carousel owl-theme" :key="galleryKey">
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
import { computed, nextTick, onMounted, ref, watch } from 'vue';
import { destroyOwl, refreshOwl } from '../../utils/theme';

const props = defineProps({
  gallery: {
    type: Object,
    default: () => ({
      images: [],
    }),
  },
});

const galleryRoot = ref(null);

const gallery = computed(() => ({
  images: Array.isArray(props.gallery?.images) ? props.gallery.images : [],
}));

const hasImages = computed(() => gallery.value.images.length > 0);
const galleryKey = computed(() => `${props.gallery?.key || ''}|${gallery.value.images.join('|')}`);

let refreshToken = 0;

const waitForImages = async () => {
  const root = galleryRoot.value;
  if (!root) return;
  const images = Array.from(root.querySelectorAll('img'));
  if (!images.length) return;
  await Promise.all(
    images.map(
      (img) =>
        img.complete
          ? Promise.resolve()
          : new Promise((resolve) => {
              const done = () => resolve();
              img.addEventListener('load', done, { once: true });
              img.addEventListener('error', done, { once: true });
            })
    )
  );
};

const refreshGallery = async () => {
  if (!hasImages.value) return;
  const token = ++refreshToken;
  destroyOwl('.galleryscroll .owl-carousel');
  await nextTick();
  await waitForImages();
  if (token !== refreshToken) return;
  refreshOwl('.galleryscroll .owl-carousel');
};

onMounted(refreshGallery);
watch(
  () => galleryKey.value,
  () => refreshGallery()
);
</script>

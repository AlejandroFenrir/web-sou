<template>
  <!-- Services Details -->
  <div class="service-details section-padding pb-0">
    <div class="container">
      <div class="row mb-60">
        <div class="col-lg-7 col-md-12">
          <div class="flex items-center justify-center">
            <span class="first-letter">{{ intro.letter }}</span>
            <p class="mb-60">
              {{ intro.intro }}
            </p>
          </div>
        </div>
        <div class="col-lg-4 offset-lg-1 col-md-12">
          <blockquote class="vert-move">
            <p>{{ intro.quote.text }}</p>
            <cite>{{ intro.quote.cite }}</cite>
          </blockquote>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  intro: {
    type: Object,
    default: () => ({
      letter: '',
      intro: '',
      quote: {
        text: '',
        cite: '',
      },
    }),
  },
});

const intro = computed(() => props.intro || {});
</script>

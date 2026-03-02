<template>
  <main>
    <PortfolioSingleBanner :banner="banner" />
    <PortfolioSingleDetails :details="details" />
    <PortfolioSingleGallery :gallery="gallery" />
    <PortfolioSingleNav :nav="nav" />
  </main>
</template>

<script setup>
import { computed, nextTick, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import PortfolioSingleBanner from '../components/portfolio-single/PortfolioSingleBanner.vue';
import PortfolioSingleDetails from '../components/portfolio-single/PortfolioSingleDetails.vue';
import PortfolioSingleGallery from '../components/portfolio-single/PortfolioSingleGallery.vue';
import PortfolioSingleNav from '../components/portfolio-single/PortfolioSingleNav.vue';
import { getPortfolioProject, getPortfolioProjects } from '../services/portfolio';
import { runThemeInit } from '../utils/theme';

const route = useRoute();
const router = useRouter();

const project = ref(null);

const banner = computed(() => project.value?.banner || null);
const details = computed(() =>
  project.value
    ? {
        description: project.value.description,
        features: project.value.features,
        info: project.value.info,
      }
    : null
);
const gallery = computed(() =>
  project.value
    ? {
        images: project.value.gallery,
        sectionLetter: project.value.section?.letter || '',
        sectionSubtitle: project.value.section?.subtitle || '',
        key: project.value.slug,
      }
    : null
);
const nav = computed(() => project.value?.nav || null);

const loadProject = async (slug) => {
  if (!slug) {
    const projects = await getPortfolioProjects();
    if (projects && projects.length) {
      const target = projects[0].link || `/portfolio/${projects[0].slug}`;
      if (target) {
        router.replace(target);
      }
    }
    return;
  }

  const data = await getPortfolioProject(slug);
  project.value = data || null;
  await nextTick();
  runThemeInit();
};

watch(
  () => route.params.slug,
  (slug) => {
    const normalized = Array.isArray(slug) ? slug[0] : slug;
    loadProject(normalized);
  },
  { immediate: true }
);
</script>

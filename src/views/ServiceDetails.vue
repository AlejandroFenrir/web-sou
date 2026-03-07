<template>
  <main>
    <ServiceDetailsBanner :banner="banner" />
    <ServiceDetailsIntro :intro="intro" />
    <ServiceDetailsGallery :gallery="gallery" />
    <ServiceDetailsInfo :info="info" />
    <ServiceDetailsNav :nav="nav" />
  </main>
</template>

<script setup>
import { computed, nextTick, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import ServiceDetailsBanner from '../components/service-details/ServiceDetailsBanner.vue';
import ServiceDetailsIntro from '../components/service-details/ServiceDetailsIntro.vue';
import ServiceDetailsGallery from '../components/service-details/ServiceDetailsGallery.vue';
import ServiceDetailsInfo from '../components/service-details/ServiceDetailsInfo.vue';
import ServiceDetailsNav from '../components/service-details/ServiceDetailsNav.vue';
import servicesCatalog, { getServiceBySlug } from '../data/servicios/ServiciosData.js';
import { applySeo, buildBreadcrumbSchema, buildServiceSchema, buildWebPageSchema } from '../utils/seo';
import { runThemeInit } from '../utils/theme';

const route = useRoute();
const router = useRouter();

const service = ref(null);

const fallbackBanner = { title: '', background: '', overlayDark: 5 };
const fallbackIntro = { intro: '', quote: { text: '', cite: '' } };
const fallbackGallery = { images: [] };
const fallbackInfo = { scopeTitle: '', scope: [], faqTitle: '', faqs: [] };

const banner = computed(() => service.value?.banner || fallbackBanner);
const intro = computed(() => service.value?.intro || fallbackIntro);
const gallery = computed(() =>
  service.value?.gallery
    ? { ...service.value.gallery, key: service.value.slug }
    : fallbackGallery
);
const info = computed(() => service.value?.info || fallbackInfo);

const buildNav = (current) => {
  if (!current || !servicesCatalog.length) return null;
  const index = servicesCatalog.findIndex((item) => item.slug === current.slug);
  if (index < 0) return null;
  const prevIndex = (index - 1 + servicesCatalog.length) % servicesCatalog.length;
  const nextIndex = (index + 1) % servicesCatalog.length;
  const prev = servicesCatalog[prevIndex];
  const next = servicesCatalog[nextIndex];

  return {
    prev: {
      href: `/servicios/${prev.slug}`,
      title: prev.title,
      image: prev.image || prev.banner?.background,
    },
    next: {
      href: `/servicios/${next.slug}`,
      title: next.title,
      image: next.image || next.banner?.background,
    },
    all: {
      href: '/servicios',
    },
  };
};

const fallbackNav = {
  prev: { href: '/servicios', title: '', image: '' },
  next: { href: '/servicios', title: '', image: '' },
  all: { href: '/servicios' },
};

const nav = computed(() => buildNav(service.value) || fallbackNav);

const applyServiceSeo = (current) => {
  const description = current.short || current.intro?.intro || `Detalle del servicio ${current.title}.`;

  applySeo({
    title: `${current.title} | Servicios | SOU Ingeniería e Inspección`,
    description,
    image: current.banner?.background || current.image || null,
    path: `/servicios/${current.slug}`,
    structuredData: [
      buildServiceSchema({
        name: current.title,
        description,
        path: `/servicios/${current.slug}`,
      }),
      buildWebPageSchema({
        name: current.title,
        description,
        path: `/servicios/${current.slug}`,
        image: current.banner?.background || current.image || null,
      }),
      buildBreadcrumbSchema([
        { name: 'Inicio', path: '/' },
        { name: 'Servicios', path: '/servicios' },
        { name: current.title, path: `/servicios/${current.slug}` },
      ]),
    ],
  });
};

const loadService = async (slug) => {
  if (!slug) {
    const first = servicesCatalog[0];
    if (first) {
      router.replace(`/servicios/${first.slug}`);
    }
    return;
  }

  const current = getServiceBySlug(slug);
  if (!current) {
    router.replace('/servicios');
    return;
  }

  service.value = current;
  applyServiceSeo(current);
  await nextTick();
  runThemeInit();
};

watch(
  () => route.params.slug,
  (slug) => {
    const normalized = Array.isArray(slug) ? slug[0] : slug;
    loadService(normalized);
  },
  { immediate: true }
);
</script>

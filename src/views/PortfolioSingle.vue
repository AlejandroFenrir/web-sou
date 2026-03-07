<template>
  <main>
    <template v-if="isLoading">
      <section class="portfolio-single-loading section-padding">
        <div class="portfolio-single-loading__hero shimmer"></div>
        <div class="container">
          <div class="row">
            <div class="col-lg-7 col-md-12">
              <div class="portfolio-single-loading__line shimmer"></div>
              <div class="portfolio-single-loading__line shimmer"></div>
              <div class="portfolio-single-loading__line portfolio-single-loading__line--short shimmer"></div>
            </div>
            <div class="col-lg-4 offset-lg-1 col-md-12">
              <div class="portfolio-single-loading__card shimmer"></div>
            </div>
          </div>
        </div>
      </section>
    </template>
    <template v-else-if="project">
      <PortfolioSingleBanner :banner="banner" />
      <PortfolioSingleDetails :details="details" />
      <PortfolioSingleGallery :gallery="gallery" />
      <PortfolioSingleNav :nav="nav" />
    </template>
    <section v-else class="portfolio-single-empty section-padding">
      <div class="container text-center">
        <h2>Proyecto no disponible</h2>
        <p>Este proyecto no existe, fue movido o no se pudo cargar en este momento.</p>
        <a href="/proyectos" class="butn-dark"><span>Volver a proyectos</span></a>
      </div>
    </section>
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
import { applySeo, buildBreadcrumbSchema, buildWebPageSchema } from '../utils/seo';
import { runThemeInit } from '../utils/theme';

const route = useRoute();
const router = useRouter();

const project = ref(null);
const isLoading = ref(true);
let activeRequestId = 0;

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
        title: project.value.title,
      }
    : null
);
const nav = computed(() => project.value?.nav || null);

const applyProjectSeo = (data) => {
  applySeo({
    title: `${data.title} | Proyectos | SOU Ingeniería e Inspección`,
    description:
      data.description || `Revisa el proyecto ${data.title} desarrollado por SOU Ingeniería e Inspección.`,
    image: data.banner?.background || data.gallery?.[0] || null,
    path: `/proyectos/${data.slug}`,
    type: 'website',
    structuredData: [
      buildWebPageSchema({
        name: data.title,
        description:
          data.description || `Detalle del proyecto ${data.title} desarrollado por SOU.`,
        path: `/proyectos/${data.slug}`,
        image: data.banner?.background || data.gallery?.[0] || null,
      }),
      buildBreadcrumbSchema([
        { name: 'Inicio', path: '/' },
        { name: 'Proyectos', path: '/proyectos' },
        { name: data.title, path: `/proyectos/${data.slug}` },
      ]),
    ],
  });
};

const loadProject = async (slug) => {
  const requestId = ++activeRequestId;
  isLoading.value = true;
  project.value = null;

  if (!slug) {
    const projects = await getPortfolioProjects();
    if (requestId !== activeRequestId) return;

    if (projects && projects.length) {
      const target = projects[0].link || `/proyectos/${projects[0].slug}`;
      if (target) {
        router.replace(target);
      }
    } else {
      isLoading.value = false;
    }
    return;
  }

  const data = await getPortfolioProject(slug, { force: true });
  if (requestId !== activeRequestId) return;

  project.value = data || null;
  isLoading.value = false;

  if (data) {
    applyProjectSeo(data);
  } else {
    applySeo({
      title: 'Proyecto no disponible | SOU Ingeniería e Inspección',
      description: 'El proyecto solicitado no existe o no se pudo cargar.',
      path: `/proyectos/${slug}`,
      noindex: true,
    });
  }

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

<style scoped>
.portfolio-single-loading__hero,
.portfolio-single-loading__line,
.portfolio-single-loading__card {
  border-radius: 16px;
}

.portfolio-single-loading__hero {
  min-height: 420px;
  margin-bottom: 4rem;
}

.portfolio-single-loading__line {
  height: 18px;
  margin-bottom: 1rem;
}

.portfolio-single-loading__line--short {
  max-width: 65%;
}

.portfolio-single-loading__card {
  min-height: 240px;
}

.portfolio-single-empty p {
  max-width: 42rem;
  margin: 0.75rem auto 2rem;
}

.shimmer {
  background: linear-gradient(
    90deg,
    rgba(235, 235, 235, 0.7) 25%,
    rgba(245, 245, 245, 0.95) 50%,
    rgba(235, 235, 235, 0.7) 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.4s ease-in-out infinite;
}

@keyframes shimmer {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
</style>

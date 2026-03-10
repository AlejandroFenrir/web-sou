<template>
  <div>
    <AppLoader />
    <div class="cursor js-cursor"></div>
    <div class="progress-wrap cursor-pointer">
      <svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
      </svg>
    </div>

    <Navbar />
    <RouterView />
    <Footer />
  </div>
</template>

<script setup>
import { nextTick, onBeforeUnmount, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import AppLoader from './components/AppLoader.vue';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import { endRouteTransition, useAppLoader } from './stores/appLoader';
import { applySeo, getRouteSeo } from './utils/seo';

const route = useRoute();
const router = useRouter();
const { isVisible: isAppLoading } = useAppLoader();

const applyRouteSeo = () => {
  const seo = getRouteSeo(route.name);
  if (!seo) return;

  applySeo({
    ...seo,
    path: route.fullPath,
  });
};

const runPageInit = async () => {
  await nextTick();
  if (window.SOUTheme && typeof window.SOUTheme.initPage === 'function') {
    window.SOUTheme.initPage();
  }
};

const shouldHandleLink = (href) => {
  if (!href || href.startsWith('#')) return false;
  if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) return false;
  if (href.startsWith('/img/') || href.startsWith('/css/') || href.startsWith('/js/') || href.startsWith('/fonts/')) return false;
  if (/\.(png|jpe?g|gif|svg|webp|mp4|pdf)$/i.test(href)) return false;
  return href.startsWith('/');
};

const onDocumentClick = (event) => {
  const target = event.target instanceof Element ? event.target.closest('a') : null;
  if (!target) return;
  const href = target.getAttribute('href');
  if (!shouldHandleLink(href)) return;
  const resolved = router.resolve(href);
  if (resolved.fullPath === route.fullPath) return;
  event.preventDefault();
  router.push(href);
};

onMounted(async () => {
  document.addEventListener('click', onDocumentClick);
  await nextTick();
  applyRouteSeo();
  if (window.SOUTheme && typeof window.SOUTheme.init === 'function') {
    window.SOUTheme.init();
  } else {
    await runPageInit();
  }
  endRouteTransition();
});

onBeforeUnmount(() => {
  document.removeEventListener('click', onDocumentClick);
  document.body.classList.remove('app-loading-active');
});

watch(
  () => route.fullPath,
  async () => {
    applyRouteSeo();
    await runPageInit();
    endRouteTransition();
  }
);

watch(
  isAppLoading,
  (loading) => {
    document.body.classList.toggle('app-loading-active', loading);
  },
  { immediate: true }
);
</script>

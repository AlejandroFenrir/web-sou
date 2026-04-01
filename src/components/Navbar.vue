<template>
  <nav class="navbar navbar-expand-lg" :class="{ 'mobile-menu-open': isMobileMenuOpen }">
    <div class="container">
      <div class="logo-wrapper">
        <RouterLink
          v-if="nav.logo.href.startsWith('/')"
          class="logo"
          :to="nav.logo.href"
          @click="closeNavbarIfMobile"
        >
          <img :src="nav.logo.src" class="logo-img" :alt="nav.logo.alt" />
        </RouterLink>
        <a
          v-else
          class="logo"
          :href="nav.logo.href"
          :target="nav.logo.target"
          :rel="nav.logo.rel"
          @click="closeNavbarIfMobile"
        >
          <img :src="nav.logo.src" class="logo-img" :alt="nav.logo.alt" />
        </a>
      </div>
      <button
        ref="togglerRef"
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbar"
        aria-controls="navbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"><i :class="nav.togglerIconClass"></i></span>
      </button>
      <div ref="collapseRef" class="collapse navbar-collapse" id="navbar">
        <ul class="navbar-nav ms-auto">
          <li v-for="(link, index) in nav.links" :key="index" class="nav-item">
            <RouterLink
              v-if="link.type === 'route'"
              class="nav-link"
              :to="link.href"
              :class="{ active: route.path === link.href }"
              @click="closeNavbarIfMobile"
            >
              <span class="rolling-text">{{ link.label }}</span>
            </RouterLink>
            <a
              v-else
              class="nav-link"
              :href="link.href"
              :target="link.target"
              :rel="link.rel"
              @click="closeNavbarIfMobile"
            >
              <span class="rolling-text">{{ link.label }}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import nav from '../data/navbar/Navbar.js';

const route = useRoute();
const collapseRef = ref(null);
const togglerRef = ref(null);
const isMobileMenuOpen = ref(false);

const syncMobileMenuState = () => {
  const collapseEl = collapseRef.value;
  isMobileMenuOpen.value = Boolean(
    collapseEl?.classList.contains('show') && window.matchMedia('(max-width: 991.98px)').matches
  );
};

const hideNavbar = () => {
  const collapseEl = collapseRef.value;
  if (!collapseEl?.classList.contains('show')) return;

  const collapseApi = window.bootstrap?.Collapse;

  if (collapseApi) {
    collapseApi.getOrCreateInstance(collapseEl, { toggle: false }).hide();
  } else {
    collapseEl.classList.remove('show');
  }

  togglerRef.value?.setAttribute('aria-expanded', 'false');
  isMobileMenuOpen.value = false;
};

const closeNavbarIfMobile = () => {
  if (typeof window === 'undefined') return;
  if (!window.matchMedia('(max-width: 991.98px)').matches) return;

  hideNavbar();
};

onMounted(() => {
  const collapseEl = collapseRef.value;
  if (!collapseEl) return;

  collapseEl.addEventListener('shown.bs.collapse', syncMobileMenuState);
  collapseEl.addEventListener('hidden.bs.collapse', syncMobileMenuState);
  syncMobileMenuState();
});

onBeforeUnmount(() => {
  const collapseEl = collapseRef.value;
  if (!collapseEl) return;

  collapseEl.removeEventListener('shown.bs.collapse', syncMobileMenuState);
  collapseEl.removeEventListener('hidden.bs.collapse', syncMobileMenuState);
});

watch(
  () => route.fullPath,
  async () => {
    await nextTick();
    closeNavbarIfMobile();
  }
);
</script>

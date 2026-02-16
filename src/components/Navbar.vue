<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <div class="logo-wrapper">
        <RouterLink v-if="nav.logo.href.startsWith('/')" class="logo" :to="nav.logo.href">
          <img :src="nav.logo.src" class="logo-img" :alt="nav.logo.alt" />
        </RouterLink>
        <a v-else class="logo" :href="nav.logo.href" :target="nav.logo.target" :rel="nav.logo.rel">
          <img :src="nav.logo.src" class="logo-img" :alt="nav.logo.alt" />
        </a>
      </div>
      <button
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
      <div class="collapse navbar-collapse" id="navbar">
        <ul class="navbar-nav ms-auto">
          <li v-for="(link, index) in nav.links" :key="index" class="nav-item">
            <RouterLink
              v-if="link.type === 'route'"
              class="nav-link"
              :to="link.href"
              :class="{ active: route.path === link.href }"
            >
              <span class="rolling-text">{{ link.label }}</span>
            </RouterLink>
            <a
              v-else
              class="nav-link"
              :href="link.href"
              :target="link.target"
              :rel="link.rel"
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
import { useRoute } from 'vue-router';
import nav from '../data/navbar/Navbar.js';

const route = useRoute();
</script>

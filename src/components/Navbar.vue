<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <div class="logo-wrapper">
        <RouterLink class="logo" to="/">
          <img src="/img/logo-dark.svg" class="logo-img" alt="SOU" />
        </RouterLink>
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
        <span class="navbar-toggler-icon"><i class="ti-menu"></i></span>
      </button>
      <div class="collapse navbar-collapse" id="navbar">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/" :class="{ active: route.path === '/' }">
              <span class="rolling-text">Inicio</span>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/nosotros" :class="{ active: route.path === '/nosotros' }">
              <span class="rolling-text">Nosotros</span>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/servicios" :class="{ active: route.path === '/servicios' }">
              <span class="rolling-text">Servicios</span>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/proyectos" :class="{ active: route.path === '/proyectos' }">
              <span class="rolling-text">Proyectos</span>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/contacto" :class="{ active: route.path === '/contacto' }">
              <span class="rolling-text">Contacto</span>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/zona-sismica" :class="{ active: route.path === '/zona-sismica' }">
              <span class="rolling-text">Zona Sísmica</span>
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

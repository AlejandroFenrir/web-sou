<template>
  <transition name="app-loader-fade">
    <div v-if="isVisible" class="app-loader" aria-live="polite" aria-busy="true">
      <div class="app-loader__backdrop"></div>
      <div class="app-loader__content">
        <img class="app-loader__logo" src="/img/logo-dark.svg" alt="SOU" />
      </div>
    </div>
  </transition>
</template>

<script setup>
import { useAppLoader } from '../stores/appLoader';

const { isVisible } = useAppLoader();
</script>

<style scoped>
:global(body.app-loading-active) {
  overflow: hidden !important;
}

.app-loader {
  position: fixed;
  inset: 0;
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: all;
}

.app-loader__backdrop {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at center, rgba(39, 129, 98, 0.16), transparent 42%),
    rgba(23, 23, 23, 0.96);
  backdrop-filter: blur(4px);
}

.app-loader__content {
  position: relative;
  z-index: 1;
  width: min(18rem, 58vw);
}

.app-loader__logo {
  display: block;
  width: 100%;
  height: auto;
  transform-origin: center;
  animation: app-loader-pulse 1.35s ease-in-out infinite;
  filter: drop-shadow(0 0 24px rgba(39, 129, 98, 0.28));
}

.app-loader-fade-enter-active,
.app-loader-fade-leave-active {
  transition: opacity 0.32s ease;
}

.app-loader-fade-enter-from,
.app-loader-fade-leave-to {
  opacity: 0;
}

@keyframes app-loader-pulse {
  0%,
  100% {
    opacity: 0.78;
    transform: scale(0.96);
  }

  50% {
    opacity: 1;
    transform: scale(1.04);
  }
}
</style>

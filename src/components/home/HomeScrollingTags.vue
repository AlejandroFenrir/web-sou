<template>
  <!-- Scrolling -->
  <div class="scrolling scrolling-ticker">
    <div class="wrapper feather-shadow2">
      <div class="content">
        <span v-for="(tag, index) in tags.tags" :key="`tag-a-${index}`">
          <img src="/img/asterisk-icon.svg" alt="" loading="lazy" />{{ tag }}
        </span>
      </div>
      <div class="content">
        <span v-for="(tag, index) in tags.tags" :key="`tag-b-${index}`">
          <img src="/img/asterisk-icon.svg" alt="" loading="lazy" />{{ tag }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import tags from '../../data/home/HomeScrollingTags.js';
</script>

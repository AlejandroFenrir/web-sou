<template>
  <!-- Next & Prev -->
  <section v-if="showNav" class="nex-prv">
    <div class="container">
      <div class="row">
        <div class="col-md-5 rest">
          <div v-if="nav.prev" class="prv">
            <div class="img bg-img" :data-background="nav.prev.image" :style="getBgStyle(nav.prev.image)">
              <div class="text-left ontop">
                <h5><a :href="nav.prev.href">{{ nav.prev.title }}</a></h5>
              </div>
              <div class="overly"></div>
            </div>
          </div>
        </div>
        <div class="col-md-2 text-center rest">
          <a v-if="nav.all?.href" :href="nav.all.href" class="all-works d-flex align-items-center">
            <span class="icon full-width ti-layout-grid3"></span>
          </a>
        </div>
        <div class="col-md-5 rest">
          <div v-if="nav.next" class="nxt">
            <div class="img bg-img" :data-background="nav.next.image" :style="getBgStyle(nav.next.image)">
              <div class="text-right ontop">
                <h5><a :href="nav.next.href">{{ nav.next.title }}</a></h5>
              </div>
              <div class="overly"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  nav: {
    type: Object,
    default: null,
  },
});

const nav = computed(() => props.nav || {});
const showNav = computed(() => !!(nav.value?.prev || nav.value?.next || nav.value?.all));
const getBgStyle = (image) => (image ? { backgroundImage: `url(${image})` } : {});
</script>

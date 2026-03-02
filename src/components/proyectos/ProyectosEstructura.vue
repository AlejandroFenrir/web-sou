<template>
  <!-- Portfolio 2 -->
  <section class="portfolio2 section-padding">
    <div class="container">
      <div class="section-linetitle">
        <div class="d-flex align-items-center">
          <div class="leter">
            <h4>{{ projects.sectionLetter }}</h4>
          </div>
          <div class="line"></div>
        </div>
        <div class="title">
          <h6 class="sub-title">{{ projects.sectionSubtitle }}</h6>
        </div>
      </div>
      <div class="row">
        <template v-if="displayItems.length">
          <div v-for="(item, index) in displayItems" :key="index" class="col-lg-6 col-md-12">
            <div class="item mb-25">
              <div class="img">
                <img v-if="item.image" :src="item.image" alt="" />
                <div v-else class="img-placeholder">No hay imagen</div>
              </div>
              <div class="icon-wrapper">
                <i class="ti-arrow-top-right default-icon"></i>
                <a :href="item.link" class="hover-icon-link" title="View Project">
                  <i class="ti-arrow-top-right hover-icon"></i>
                </a>
              </div>
              <div class="con">
                <h5>{{ item.title || 'Sin titulo' }}</h5>
                <div class="line"></div>
                <div v-if="item.details && item.details.length" class="details">
                  <span v-for="(detail, dIndex) in item.details" :key="dIndex">
                    <i :class="detail.icon"></i> {{ detail.text }}
                  </span>
                </div>
                <div v-else class="details details-empty">No hay detalles</div>
              </div>
            </div>
          </div>
        </template>
        <div v-else class="col-12">
          <p class="text-center py-5 mb-0">No hay proyectos</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import { getPortfolioSections } from '../../services/portfolio';

const projects = ref({
  sectionLetter: '',
  sectionSubtitle: '',
  items: [],
});

const displayItems = computed(() => projects.value?.items || []);

const normalizeValue = (value) => {
  if (!value) return '';
  return value
    .toString()
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
};

const findSection = (sections, key, keywords = []) => {
  const normalizedKey = normalizeValue(key);
  const byKey = sections.find((item) => normalizeValue(item.key) === normalizedKey);
  if (byKey) return byKey;

  const bySubtitle = sections.find((item) => {
    const subtitle = normalizeValue(item.sectionSubtitle || item.subtitle);
    return keywords.some((keyword) => subtitle.includes(keyword));
  });
  if (bySubtitle) return bySubtitle;

  return sections.find((item) => normalizeValue(item.sectionLetter) === normalizedKey.charAt(0));
};

onMounted(async () => {
  const sections = await getPortfolioSections();
  if (!sections || sections.length === 0) return;
  const section = findSection(sections, 'estructura', ['estructura', 'estructural']);
  if (section) {
    projects.value = section;
  }
});
</script>

<template>
  <!-- Portfolio 2 -->
  <section class="portfolio2 section-padding bg-darkbrown">
    <div class="container">
      <div class="section-linetitle">
        <div class="d-flex align-items-center">
          <div class="leter">
            <h4>{{ portfolio.sectionLetter }}</h4>
          </div>
          <div class="line"></div>
        </div>
        <div class="title">
          <h6 class="sub-title">{{ portfolio.sectionSubtitle }}</h6>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="portfolio2-container">
            <div v-if="portfolio.items.length" class="owl-carousel owl-theme">
              <div v-for="(item, index) in portfolio.items" :key="index" class="item mb-25">
                <div class="img">
                  <img
                    v-if="item.image"
                    :src="item.image"
                    :alt="item.title ? `Proyecto ${item.title}` : 'Proyecto SOU'"
                  />
                  <div v-else class="img-placeholder">No hay imagen</div>
                </div>
                <div class="icon-wrapper">
                  <i class="ti-arrow-top-right default-icon"></i>
                  <a :href="item.link" class="hover-icon-link" title="Ver proyecto">
                    <i class="ti-arrow-top-right hover-icon"></i>
                  </a>
                </div>
                <div class="con">
                  <p>{{ item.category || 'Sin categoria' }}</p>
                  <h5>{{ item.title || 'Sin título' }}</h5>
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
            <div v-else class="text-center py-5">No hay proyectos</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { nextTick, onMounted, ref } from 'vue';
import { getPortfolioProjects } from '../../services/portfolio';
import { refreshOwl } from '../../utils/theme';

const portfolio = ref({
  sectionLetter: 'P',
  sectionSubtitle: 'Proyectos.',
  items: [],
});

const hydratePortfolio = async () => {
  const projects = await getPortfolioProjects({ force: true });
  if (!projects || projects.length === 0) {
    portfolio.value.items = [];
    return;
  }

  const featured = projects.filter((item) => item.is_featured);
  portfolio.value.items = featured.length ? featured : projects;

  if (!portfolio.value.items.length) return;

  await nextTick();
  refreshOwl('.portfolio2 .owl-carousel');
};

onMounted(hydratePortfolio);
</script>

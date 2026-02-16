<template>
  <footer class="footer">
    <div
      class="background banner-img bg-img bg-imgfixed bg-position-top"
      :data-background="footer.background.image"
      :data-overlay-dark="footer.background.overlayDark"
    >
      <div class="container">
        <div class="top">
          <div class="row align-items-center">
            <div class="col-md-4">
              <div class="item">
                <div class="logo mb-30">
                  <img :src="footer.brand.logo" alt="" />
                </div>
                <p class="mb-15" v-html="footer.brand.description.replace(/\n/g, '<br />')"></p>
                <div class="social-icons mb-30">
                  <ul class="list-inline">
                    <li v-for="(item, index) in footer.brand.social" :key="index">
                      <a :href="item.href"><i :class="item.iconClass"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-md-8">
              <div class="item text-end-left">
                <h3 class="mb-30">{{ footer.contact.title }}</h3>
                <p class="mb-5">{{ footer.contact.location }}</p>
                <div class="phone mb-5">
                  <a :href="footer.contact.phoneHref">{{ footer.contact.phone }}</a>
                </div>
                <div class="mail">
                  <a :href="footer.contact.emailHref">{{ footer.contact.email }}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bottom">
          <div class="row">
            <div class="col-lg-8 col-md-12">
              <div class="links">
                <ul>
                  <li v-for="(link, index) in footer.links" :key="index">
                    <RouterLink v-if="link.type === 'route'" :to="link.href">{{ link.label }}</RouterLink>
                    <a v-else :href="link.href" :target="link.target" :rel="link.rel">{{ link.label }}</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4 col-md-12 text-end">
              <p>{{ footer.copyright }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import footer from '../data/footer/Footer.js';
</script>

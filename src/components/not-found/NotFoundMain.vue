<template>
  <!-- Not found -->
  <section class="notfound section-padding text-center">
    <div class="v-middle">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6 col-md-12">
            <h2>{{ notFound.code }}</h2>
            <h3>{{ notFound.title }}</h3>
            <p>{{ notFound.description }}</p>
            <form>
              <input type="text" name="search" :placeholder="notFound.searchPlaceholder" required />
              <button><i class="fa-light fa-arrow-up-right"></i></button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import notFound from '../../data/not-found/NotFoundMain.js';
</script>

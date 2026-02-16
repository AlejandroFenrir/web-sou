<template>
  <!-- Post -->
  <section class="post section-padding">
    <div class="container">
      <div class="row mb-60">
        <div class="col-lg-7 col-md-12">
          <p>
            <span class="first-letter">{{ content.intro.firstLetter }}</span>{{ content.intro.text }}
          </p>
        </div>
        <div class="col-lg-4 offset-lg-1 col-md-12 mb-30">
          <blockquote class="vert-move">
            <p>{{ content.quote.text }}</p>
            <cite>{{ content.quote.cite }}</cite>
          </blockquote>
        </div>
      </div>
      <div class="row mb-60">
        <div class="col-md-12">
          <img :src="content.heroImage" alt="" class="img-fluid" />
        </div>
      </div>
      <div class="row justify-content-center mb-45">
        <div class="col-md-5">
          <p>{{ content.columns[0] }}</p>
        </div>
        <div class="col-md-5 offset-md-1">
          <p>{{ content.columns[1] }}</p>
        </div>
      </div>
      <div class="row">
        <div v-for="(image, index) in content.gallery" :key="index" class="col-md-4">
          <img :src="image" class="mb-30 rounded-3" alt="" />
        </div>
      </div>
      <div class="post-comment-section">
        <div class="row justify-content-center">
          <div class="col-lg-10 col-md-12">
            <div class="row">
              <!-- Comment -->
              <div class="col-md-5 mb-30">
                <div class="post-comment-wrap">
                  <div class="post-user-comment"><img :src="content.comment.avatar" alt="" /></div>
                  <div class="post-user-content">
                    <h5>{{ content.comment.name }} <span>[ {{ content.comment.role }} ]</span></h5>
                    <p>{{ content.comment.text }} <i class="fa-solid fa-thumbs-up"></i></p>
                  </div>
                </div>
              </div>
              <!-- Contact Form -->
              <div class="col-md-6 offset-md-1">
                <h5 class="mb-30">{{ content.form.title }}</h5>
                <form method="post">
                  <div class="row">
                    <div v-for="(field, index) in content.form.fields" :key="index" :class="`col-md-${field.col}`">
                      <div class="form-group" :class="{ 'form-textarea': field.type === 'textarea' }">
                        <span class="form-icon"><i :class="field.iconClass"></i></span>
                        <input
                          v-if="field.type !== 'textarea'"
                          :type="field.type"
                          :name="field.name"
                          :id="field.name"
                          :placeholder="field.placeholder"
                          required
                        />
                        <textarea
                          v-else
                          :name="field.name"
                          :id="field.name"
                          cols="30"
                          :rows="field.rows || 3"
                          :placeholder="field.placeholder"
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <button class="durubtn">
                        <span class="text-wrapper">
                          <span class="text slide-up">{{ content.form.submitText }}</span>
                          <span class="text slide-down">{{ content.form.submitText }}</span>
                        </span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import content from '../../data/post/PostContent.js';
</script>

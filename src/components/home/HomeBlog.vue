<template>
  <!-- Blog -->
  <section class="blog section-padding">
    <div class="container">
      <div class="section-linetitle">
        <div class="d-flex align-items-center">
          <div class="leter">
            <h4>{{ blog.sectionLetter }}</h4>
          </div>
          <div class="line"></div>
        </div>
        <div class="title">
          <h6 class="sub-title">{{ blog.sectionSubtitle }}</h6>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="owl-carousel owl-theme">
            <div v-for="(post, index) in blog.posts" :key="index" class="item mt-10 mb-30">
              <div class="img">
                <img :src="post.image" class="img-fluid" alt="" />
              </div>
              <div class="cont">
                <h4><a :href="post.link">{{ post.title }}</a></h4>
                <p>{{ post.excerpt }}</p>
                <div class="author">
                  <div>
                    <h5><i class="fa-light fa-calendar"></i>{{ post.date }}</h5>
                    <h5>
                      <i class="fa-light fa-user"></i>by
                      <a href="#" class="text-decoration-line-bottom">{{ post.author }}</a>
                    </h5>
                  </div>
                </div>
              </div>
              <div class="more">
                <a :href="post.link">
                  <span class="icon-wrap">
                    <span class="icon"><i class="ti-arrow-top-right"></i></span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import blog from '../../data/home/HomeBlog.js';
</script>

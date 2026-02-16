<template>
  <!-- Blog -->
  <section class="blog section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-12">
          <div class="row">
            <div v-for="(post, index) in content.posts" :key="index" class="col-md-6">
              <div class="item mt-10 mb-30">
                <div class="img"><img :src="post.image" class="img-fluid" alt="" /></div>
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
                    <span class="icon-wrap"><span class="icon"><i class="ti-arrow-top-right"></i></span></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <!-- pagination -->
          <div class="row">
            <div class="col-md-12 text-center mt-30 mb-30">
              <ul class="pagination-wrap">
                <li v-for="(item, index) in content.pagination" :key="index">
                  <a :href="item.href" :class="{ active: item.active }">
                    <i v-if="item.iconClass" :class="item.iconClass"></i>
                    <span v-else>{{ item.label }}</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- Sidebar -->
        <div class="col-lg-4 col-md-12">
          <div class="blog-sidebar row">
            <div class="col-md-12">
              <div class="widget search">
                <form>
                  <input type="text" name="search" :placeholder="content.sidebar.searchPlaceholder" />
                  <button type="submit"><i class="fa-light fa-magnifying-glass" aria-hidden="true"></i></button>
                </form>
              </div>
            </div>
            <div class="col-md-12">
              <div class="widget">
                <div class="widget-title">
                  <h6>Recent Posts</h6>
                </div>
                <ul class="recent">
                  <li v-for="(recent, index) in content.sidebar.recentPosts" :key="index">
                    <div class="thum"><img :src="recent.image" class="img-fluid" alt="" /></div>
                    <a :href="recent.link">{{ recent.title }}</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-12">
              <div class="widget">
                <div class="widget-title">
                  <h6>Archives</h6>
                </div>
                <ul>
                  <li v-for="(archive, index) in content.sidebar.archives" :key="index">
                    <a href="#">{{ archive }}</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-12">
              <div class="widget">
                <div class="widget-title">
                  <h6>Categories</h6>
                </div>
                <ul>
                  <li v-for="(category, index) in content.sidebar.categories" :key="index">
                    <a href="#"><i class="fa-light fa-angle-right"></i>{{ category }}</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-12">
              <div class="widget">
                <div class="widget-title">
                  <h6>Tags</h6>
                </div>
                <ul class="tags">
                  <li v-for="(tag, index) in content.sidebar.tags" :key="index"><a href="#">{{ tag }}</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import content from '../../data/blog/BlogContent.js';
</script>

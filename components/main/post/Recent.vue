<template>
  <section>
    <div class="row">
      <div class="col-md-12">
        <div class="section-title">
          <h2>Recent Posts</h2>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-8">
        <div class="row">
          <!-- post -->
          <div class="col-md-12">
            <div class="post post-thumb">
              <nuxt-link class="post-img" :to="'/post/' + mainPost._id"
                ><img :src="mainPost.imageUrl" alt=""
              /></nuxt-link>
              <div class="post-body">
                <div class="post-meta">
                  <!-- <a class="post-category cat-3" href="category.html">Jquery</a> -->
                  <span class="post-date">{{ mainPost.date | date() }}</span>
                </div>
                <h3 class="post-title">
                  <nuxt-link :to="'/post/' + mainPost._id">{{
                    mainPost.title
                  }}</nuxt-link>
                </h3>
              </div>
            </div>
          </div>
          <!-- /post -->

          <!-- post -->
          <div class="articles">
            <div
              v-for="post in posts"
              :key="post._id"
              class="col-md-6 post_main-page"
            >
              <div class="post">
                <nuxt-link
                  class="post-img post-img_small"
                  :to="'/post/' + post._id"
                >
                  <img :src="post.imageUrl" alt="" />
                </nuxt-link>
                <div class="post-body">
                  <div class="post-meta">
                    <!-- <a class="post-category cat-4" href="category.html">Css</a> -->
                    <span class="post-date">{{ post.date | date() }}</span>
                  </div>
                  <h3 class="post-title">
                    <nuxt-link :to="'/post/' + post._id">
                      {{ post.title }}
                    </nuxt-link>
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <!-- /post -->

          <!-- <div class="col-md-12">
            <div class="section-row">
              <button class="primary-button center-block">Load More</button>
            </div>
          </div> -->
        </div>
      </div>

      <div class="col-md-4">
        <AppMostReadPostWidget :most-read-posts="mostReadPosts" />

        <!-- <AppFeaturedPostWidget /> -->

        <!-- ad -->
        <div class="aside-widget text-center">
          <a href="#" style="display: inline-block;margin: auto;">
            <img class="img-responsive" src="/legacy/ad-1.jpg" alt="" />
          </a>
        </div>
        <!-- /ad -->
      </div>
    </div>
  </section>
</template>

<script>
import AppMostReadPostWidget from '@/components/main/post/MostReadWidget'
// import AppFeaturedPostWidget from '@/components/main/post/FeaturedWidget'

export default {
  components: {
    AppMostReadPostWidget
    // AppFeaturedPostWidget
  },
  props: {
    posts: {
      type: Array,
      required: false,
      default: () => []
    },
    mainPost: {
      type: Object,
      required: false,
      default: () => []
    },
    mostReadPosts: {
      type: Array,
      required: false,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.post-img img {
  max-height: 450px;
}

.post-img_small img {
  max-height: 216px;
}

.post_main-page {
  max-height: 308px;
}
</style>

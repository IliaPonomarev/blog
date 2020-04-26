<template>
  <div>
    <!-- section -->
    <section class="section">
      <!-- container -->
      <div class="container">
        <!-- row -->
        <div class="row">
          <!-- post -->
          <div class="col-md-6">
            <div class="post post-thumb">
              <a class="post-img" href="blog-post.html"
                ><img src="/legacy/post-1.jpg" alt=""
              /></a>
              <div class="post-body">
                <div class="post-meta">
                  <a class="post-category cat-2" href="category.html"
                    >JavaScript</a
                  >
                  <span class="post-date">March 27, 2018</span>
                </div>
                <h3 class="post-title">
                  <a href="blog-post.html"
                    >Chrome Extension Protects Against JavaScript-Based CPU
                    Side-Channel Attacks</a
                  >
                </h3>
              </div>
            </div>
          </div>
          <!-- /post -->

          <!-- post -->
          <div class="col-md-6">
            <div class="post post-thumb">
              <a class="post-img" href="blog-post.html"
                ><img src="/legacy/post-2.jpg" alt=""
              /></a>
              <div class="post-body">
                <div class="post-meta">
                  <a class="post-category cat-3" href="category.html">Jquery</a>
                  <span class="post-date">March 27, 2018</span>
                </div>
                <h3 class="post-title">
                  <a href="blog-post.html"
                    >Ask HN: Does Anybody Still Use JQuery?</a
                  >
                </h3>
              </div>
            </div>
          </div>
          <!-- /post -->
        </div>
        <!-- /row -->

        <AppRecentPost />
      </div>
      <!-- /container -->
    </section>
    <!-- /section -->

    <AppFeaturedPost />

    <AppMostReadPost />
  </div>
</template>

<script>
// import AppPost from '@/components/main/Post'
import AppRecentPost from '@/components/main/post/Recent'
import AppFeaturedPost from '@/components/main/post/Featured'
import AppMostReadPost from '@/components/main/post/MostRead'

export default {
  components: {
    // AppPost,
    AppRecentPost,
    AppFeaturedPost,
    AppMostReadPost
  },
  async asyncData({ store }) {
    const posts = await store.dispatch('post/fetch')

    return { posts }
  },
  head() {
    return {
      title: `Main | ${process.env.appName}`
    }
  }
}
</script>

<style>
.post-list {
  flex-wrap: wrap;
}
</style>

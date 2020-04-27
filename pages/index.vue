<template>
  <div>
    <!-- section -->
    <section class="section">
      <!-- container -->
      <div class="container">
        <!-- row -->
        <!-- <div class="row">
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
        </div> -->
        <!-- /row -->

        <AppRecentPost :posts="posts" />
      </div>
      <!-- /container -->
    </section>
    <!-- /section -->
  </div>
</template>

<script>
// import AppPost from '@/components/main/Post'
import AppRecentPost from '@/components/main/post/Recent'

export default {
  components: {
    // AppPost,
    AppRecentPost
  },
  async asyncData({ store }) {
    const posts = await store.dispatch('post/fetch')

    return { posts }
  },
  mounted() {
    console.log(this.posts)
  },
  head() {
    return {
      title: `Main | ${process.env.appName}`
    }
  }
}
</script>

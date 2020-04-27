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

          <!-- post -->
          <div class="articles">
            <div v-for="post in posts" :key="post._id" class="col-md-6">
              <div class="post">
                <a class="post-img" href="blog-post.html"
                  ><img src="/legacy/post-1.jpg" alt=""
                /></a>
                <div class="post-body">
                  <div class="post-meta">
                    <a class="post-category cat-4" href="category.html">Css</a>
                    <span class="post-date">{{ post.date | date() }}</span>
                  </div>
                  <h3 class="post-title">
                    <a href="blog-post.html">{{ post.title }}</a>
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <!-- /post -->

          <div class="col-md-12">
            <div class="section-row">
              <button class="primary-button center-block">Load More</button>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <AppMostReadPostWidget />

        <AppFeaturedPostWidget />

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
import AppFeaturedPostWidget from '@/components/main/post/FeaturedWidget'

export default {
  components: {
    AppMostReadPostWidget,
    AppFeaturedPostWidget
  },
  props: {
    posts: Array
  },
  mounted() {
    console.log(this.posts)
  }
}
</script>

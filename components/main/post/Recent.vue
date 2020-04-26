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
          <div class="col-md-6">
            <div class="post">
              <a class="post-img" href="blog-post.html"
                ><img src="/legacy/post-1.jpg" alt=""
              /></a>
              <div class="post-body">
                <div class="post-meta">
                  <a class="post-category cat-4" href="category.html">Css</a>
                  <span class="post-date">March 27, 2018</span>
                </div>
                <h3 class="post-title">
                  <a href="blog-post.html">CSS Float: A Tutorial</a>
                </h3>
              </div>
            </div>
          </div>
          <!-- /post -->

          <!-- post -->
          <div class="col-md-6">
            <div class="post">
              <a class="post-img" href="blog-post.html"
                ><img src="/legacy/post-2.jpg" alt=""
              /></a>
              <div class="post-body">
                <div class="post-meta">
                  <a class="post-category cat-1" href="category.html"
                    >Web Design</a
                  >
                  <span class="post-date">March 27, 2018</span>
                </div>
                <h3 class="post-title">
                  <a href="blog-post.html"
                    >Tell-A-Tool: Guide To Web Design And Development Tools</a
                  >
                </h3>
              </div>
            </div>
          </div>
          <!-- /post -->

          <div class="clearfix visible-md visible-lg"></div>

          <!-- post -->
          <div class="col-md-6">
            <div class="post">
              <a class="post-img" href="blog-post.html"
                ><img src="/legacy/post-4.jpg" alt=""
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
            <div class="post">
              <a class="post-img" href="blog-post.html"
                ><img src="/legacy/post-5.jpg" alt=""
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

          <div class="clearfix visible-md visible-lg"></div>

          <!-- post -->
          <div class="col-md-6">
            <div class="post">
              <a class="post-img" href="blog-post.html"
                ><img src="/legacy/post-3.jpg" alt=""
              /></a>
              <div class="post-body">
                <div class="post-meta">
                  <a class="post-category cat-1" href="category.html"
                    >Web Design</a
                  >
                  <span class="post-date">March 27, 2018</span>
                </div>
                <h3 class="post-title">
                  <a href="blog-post.html"
                    >Pagedraw UI Builder Turns Your Website Design Mockup Into
                    Code Automatically</a
                  >
                </h3>
              </div>
            </div>
          </div>
          <!-- /post -->

          <!-- post -->
          <div class="col-md-6">
            <div class="post">
              <a class="post-img" href="blog-post.html"
                ><img src="/legacy/post-4.jpg" alt=""
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
  }
}
</script>

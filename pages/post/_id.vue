<template>
  <article class="post">
    <section class="section">
      <!-- container -->
      <div class="container">
        <!-- row -->
        <div class="row">
          <!-- Post content -->
          <div class="col-md-8">
            <div class="section-row ">
              <div class="main-post">
                <h3>{{ post.title }}</h3>
                {{ post.description }}
                <figure class="figure-img">
                  <img class="img-responsive" :src="post.imageUrl" alt="" />
                  <figcaption>
                    So Lorem Ipsum is bad (not necessarily)
                  </figcaption>
                </figure>
                <div v-html="post.text"></div>
              </div>
              <AppPostShares />
            </div>

            <!-- ad -->
            <!--<div class="section-row text-center">
              <a href="#" style="display: inline-block;margin: auto;">
                <img class="img-responsive" src="/legacy/ad-2.jpg" alt="" />
              </a>
            </div> -->
            <!-- ad -->

            <!-- <AppPostAuthor /> -->

            <!-- <AppComment />

            <AppCommentForm /> -->
          </div>
          <!-- /Post content -->

          <!-- aside -->
          <div class="col-md-4">
            <!-- ad -->
            <!-- <div class="aside-widget text-center">
              <a href="#" style="display: inline-block;margin: auto;">
                <img class="img-responsive" src="/legacy/ad-1.jpg" alt="" />
              </a>
            </div> -->
            <!-- /ad -->

            <AppMostReadPostWidget :most-read-posts="mostReadPosts" />

            <!-- <AppFeaturedPostWidget /> -->

            <!-- <AppCategoriesWidget />

            <AppArchivePostWidget /> -->
          </div>
          <!-- /aside -->
        </div>
        <!-- /row -->
      </div>
      <!-- /container -->
    </section>
  </article>
</template>

<script>
import AppMostReadPostWidget from '@/components/main/post/MostReadWidget'
// import AppFeaturedPostWidget from '@/components/main/post/FeaturedWidget'
// import AppCategoriesWidget from '@/components/main/post/CategoriesWidget'
// import AppArchivePostWidget from '@/components/main/post/ArchiveWidget'
// import AppPostAuthor from '@/components/main/post/Author'
// import AppCommentForm from '@/components/main/comment/Form'
// import AppComment from '@/components/main/comment/index'

import AppPostShares from '@/components/main/partials/PostShares'

export default {
  components: {
    AppMostReadPostWidget,
    // AppFeaturedPostWidget,
    // AppCategoriesWidget,
    // AppArchivePostWidget,
    // AppCommentForm,
    // AppComment,
    // AppPostAuthor,
    AppPostShares
  },
  async asyncData({ store, params }) {
    const post = await store.dispatch('post/fetchById', params.id)
    await store.dispatch('post/addView', post)
    const mostReadPosts = await store.dispatch('post/fetchMostReadPosts')

    return {
      post: { ...post, views: ++post.views },
      mostReadPosts
    }
  },
  head() {
    return {
      title: `${this.post.title} | ${process.env.appName}`
    }
  },
  validate({ params }) {
    return Boolean(params.id)
  }
}
</script>


<style lang="scss" scoped>
.post img{
  max-width: 100%;
  width: 100%;
}
</style>
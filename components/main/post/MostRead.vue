<template>
  <section class="section">
    <!-- container -->
    <div class="container">
      <!-- row -->
      <div class="row">
        <div class="col-md-8">
          <div class="row">
            <div class="col-md-12">
              <div class="section-title">
                <h2>Most Read</h2>
              </div>
            </div>
            <div v-for="(post, id) in mostReadPosts" :key="id" class="posts">
              <div class="col-md-12">
                <div class="post post-row">
                  <nuxt-link class="post-img" :to="'/post/' + post._id">
                    <img :src="post.imageUrl" alt="" />
                  </nuxt-link>
                  <div class="post-body">
                    <div class="post-meta">
                      <!-- <a class="post-category cat-2" href="category.html"
                        >JavaScript</a
                      > -->
                      <span class="post-date">{{ post.date | date() }}</span>
                    </div>
                    <h3 class="post-title">
                      <nuxt-link :to="'/post/' + post._id">
                        {{ post.title }}
                      </nuxt-link>
                    </h3>
                    <p>
                      {{ post.description }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <!-- post -->

            <!-- /post -->

            <!-- <div class="col-md-12">
              <div class="section-row">
                <button class="primary-button center-block">Load More</button>
              </div>
            </div> -->
          </div>
        </div>

        <div class="col-md-4">
          <!-- ad -->
          <div class="aside-widget text-center">
            <a href="#" style="display: inline-block;margin: auto;">
              <img class="img-responsive" src="/legacy/ad-1.jpg" alt="" />
            </a>
          </div>
          <!-- /ad -->
          <!-- Lorem ipsum dolor, sit amet consectetur adipisicing elit. -->

          <!-- Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus accusamus corrupti dolores debitis. -->

          <!-- Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error fugit officiis doloribus obcaecati voluptatibus molestiae maiores illo dicta, veritatis natus dolorum necessitatibus cumque nam voluptate ullam! Error at deserunt ratione quaerat sit deleniti et commodi quidem accusamus itaque magni quas consequuntur sequi asperiores ipsam hic voluptas, iste placeat cumque tempora. -->
          <!-- <AppCategoriesWidget /> -->
        </div>
      </div>
      <!-- /row -->
    </div>
    <!-- /container -->
  </section>
</template>

<script>
// import AppCategoriesWidget from '@/components/main/post/CategoriesWidget'

export default {
  components: {
    // AppCategoriesWidget
  },
  props: {
    mostReadPosts: {
      type: Array,
      required: false,
      default: () => []
    }
  }
}
</script>

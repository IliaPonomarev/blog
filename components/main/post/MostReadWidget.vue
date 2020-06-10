<template>
  <div class="aside-widget">
    <div class="section-title">
      <h2>Most Read</h2>
    </div>

    <div v-for="(post, id) in mostReadPosts" :key="id" class="posts">
      <div class="post post-widget">
        <nuxt-link class="post-img" :to="'/post/' + post._id">
          <img :src="post.imageUrl" alt="" />
        </nuxt-link>
        <div class="post-body">
          <h3 class="post-title">
            <nuxt-link :to="'/post/' + post._id">
              {{ post.title }}
            </nuxt-link>
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    mostReadPosts: {
      type: Array,
      required: false,
      default: () => []
    }
  }
}
</script>

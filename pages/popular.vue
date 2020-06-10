<template>
  <div>
    <AppMostReadPost :most-read-posts="mostReadPosts" />
    <!-- <AppFeaturedPost /> -->
  </div>
</template>

<script>
// import AppFeaturedPost from '@/components/main/post/Featured'
import AppMostReadPost from '@/components/main/post/MostRead'

export default {
  components: {
    // AppFeaturedPost,
    AppMostReadPost
  },
  async asyncData({ store }) {
    const mostReadPosts = await store.dispatch('post/fetchMostReadPosts')

    return { mostReadPosts }
  }
}
</script>

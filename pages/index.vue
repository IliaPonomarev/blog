<template>
  <div>
    <section class="section">
      <div class="container">
        <AppRecentPost
          :posts="posts"
          :main-post="mainPost"
          :most-read-posts="mostReadPosts"
        />
      </div>
    </section>
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
    const posts = await store.dispatch('post/fetchPostsWithoutMainPost')
    const mostReadPosts = await store.dispatch('post/fetchMostReadPosts')
    const mainPost = await store.dispatch('post/fetchMainPost')

    return { posts, mainPost, mostReadPosts }
  },
  head() {
    return {
      title: `Main | ${process.env.appName}`
    }
  }
}
</script>

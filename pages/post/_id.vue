<template>
  <article class="post">
    <header class="post__header">
      <div class="post__title">
        <h1>{{ post.title }}</h1>
        <nuxt-link to="/">
          <i class="el-icon-back"></i>
        </nuxt-link>
      </div>
      <div class="post__info">
        <small>
          <i class="el-icon-time"></i>
          {{ post.date | date }}
        </small>
        <small>
          <i class="el-icon-view"></i>
          {{ post.views }}
        </small>
      </div>
      <div class="post__img">
        <img :src="post.imageUrl" alt="post img" />
      </div>
    </header>
    <main class="post__content">
      <vue-markdown>{{ post.text }}</vue-markdown>
    </main>
    <footer>
      <app-comment-form
        v-if="canAddComment"
        :post-id="post._id"
        @created="createCommentHandler"
      />
      <div v-if="post.comments.length" class="comments">
        <div>Comments</div>
        <app-comment
          v-for="comment in post.comments"
          :key="comment._id"
          :comment="comment"
        />
      </div>
      <div v-else class="text-center">Комментариев пока нет</div>
    </footer>
  </article>
</template>

<script>
import AppComment from '@/components/main/Comment'
import AppCommentForm from '@/components/main/CommentForm'

export default {
  validate({ params }) {
    return Boolean(params.id)
  },
  components: {
    AppComment,
    AppCommentForm
  },
  async asyncData({ store, params }) {
    const post = await store.dispatch('post/fetchById', params.id)
    await store.dispatch('post/addView', post)
    return {
      post: { ...post, views: ++post.views }
    }
  },
  data() {
    return {
      canAddComment: true
    }
  },
  methods: {
    createCommentHandler(comment) {
      this.post.comments.unshift(comment)
      this.canAddComment = false
    }
  },
  head() {
    return {
      title: `${this.post.title} | ${process.env.appName}`
    }
  }
}
</script>

<style lang="scss" scoped>
.post {
  max-width: 900px;
  margin: 0 auto;

  &__img {
    img {
      width: 100%;
      height: auto;
    }
  }

  &__title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    align-items: center;
  }

  &__info {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    align-items: center;
  }

  &__header {
    margin-bottom: 1.5rem;
  }

  &__content {
    margin-bottom: 2rem;
  }
}
</style>

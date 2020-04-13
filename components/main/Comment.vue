<template>
  <el-card class="comment">
    <div class="comment__header">
      <span class="name">{{ updatedComment.name }}</span>
      <span>
        <i class="el-icon-time"></i>
        {{ updatedComment.date | date }}
      </span>
    </div>
    <div class="comment__text">{{ updatedComment.text }}</div>
    <div>{{ updatedComment.rating }}</div>
    <button :disabled="loading" @click="like">Like</button>
    <button :disabled="loading" @click="dislike">Dislike</button>
  </el-card>
</template>

<script>
export default {
  props: ['comment'],
  data() {
    return {
      updatedComment: this.comment,
      loading: false
    }
  },
  mounted() {
    console.log(this.comment)
  },
  methods: {
    async like() {
      try {
        const formdata = {
          id: this.comment._id,
          rating: this.updatedComment.rating
        }

        this.loading = true
        this.updatedComment = await this.$store.dispatch(
          'comment/like',
          formdata
        )
        this.loading = false
      } catch (e) {
        this.$message({
          message: e,
          type: 'error'
        })
      }
    },
    async dislike() {
      console.log('dislike')
      try {
        const formdata = {
          id: this.comment._id,
          rating: this.updatedComment.rating
        }

        this.loading = true
        this.updatedComment = await this.$store.dispatch(
          'comment/dislike',
          formdata
        )
        this.loading = false
      } catch (e) {
        this.$message({
          message: e,
          type: 'error'
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.comment {
  margin-bottom: 1rem;

  &__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    font-size: 0.8rem;
  }

  &__text {
    white-space: pre-line;
  }
}
</style>

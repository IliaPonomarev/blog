<template>
  <el-card class="comment">
    <div class="comment__header">
      <span class="name">{{ comment.name }}</span>
      <span>
        <i class="el-icon-time"></i>
        {{ comment.date | date }}
      </span>
    </div>
    <div class="comment__text">{{ comment.text }}</div>
    <div>{{ comment.rating }}</div>
    <button @click="like">Like</button>
    <button @click="dislike">Dislike</button>
  </el-card>
</template>

<script>
export default {
  props: ['comment'],
  mounted() {
    console.log(this.comment)
  },
  methods: {
    async like() {
      try {
        const formdata = {
          id: this.comment._id,
          rating: this.comment.rating
        }

        await this.$store.dispatch('comment/like', formdata)
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
        await this.$store.dispatch('comment/dislike')
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

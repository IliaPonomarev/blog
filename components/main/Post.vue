<template>
  <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
    <el-card shadow="hover" :body-style="{ padding: 0 }">
      <div class="post">
        <div class="post__content">
          <h3 class="post__title">{{ post.title }}</h3>
          <div class="post__description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam
            laborum voluptate quisquam corrupti, accusamus tempore repellendus
            quo iusto eum temporibus ea! Quas natus perferendis possimus?
          </div>
          <div style="display: flex; justify-content: space-between">
            <div class="post__author">
              Jackson Smith
            </div>
            <div>
              <small>
                <i class="el-icon-time"></i>
                {{ post.date | date() }}
              </small>
              <span>
                <i class="el-icon-message"></i>
                {{ post.comments.length }}
              </span>
            </div>
          </div>

          <el-button @click="openPost">Открыть</el-button>
        </div>
        <div class="post__img-wrapper">
          <img :src="post.imageUrl" alt="post img" class="post__img" />
        </div>
      </div>
    </el-card>
  </el-col>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  methods: {
    openPost() {
      const id = this.post._id
      this.$router.push(`/post/${id}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.post {
  margin-bottom: 1.5rem;

  display: flex;

  &__title {
    font-size: 22px;
  }

  &__img {
    width: 152px;
    height: auto;
  }

  &__description {
    margin-top: 8px;
    font-weight: 300;
    margin-bottom: 16px;
    font-size: 18px;
    color: rgba(0, 0, 0, 0.54);
  }
}
</style>

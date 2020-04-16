<template>
  <!-- <el-row type="flex" justify="center">
    <el-col :xs="24" :sm="18" :md="16" :lg="14">
      <app-post v-for="post in posts" :key="post._id" :post="post"> </app-post>
    </el-col>
  </el-row> -->
  <!-- <el-row :gutter="20">
    <el-col :span="6" :xs="8"
      ><div class="grid-content bg-purple"></div
    ></el-col>
    <el-col :span="6" :xs="8"
      ><div class="grid-content bg-purple"></div
    ></el-col>
    <el-col :span="6" :xs="8"
      ><e class="grid-content bg-purple"></div
    ></el-col>
  </el-row> -->
  <el-row :gutter="20" type="flex" justify="center" class="post-list">
    <app-post v-for="post in posts" :key="post._id" :post="post"> </app-post>
  </el-row>
</template>

<script>
import AppPost from '@/components/main/Post'

export default {
  components: {
    AppPost
  },
  async asyncData({ store }) {
    const posts = await store.dispatch('post/fetch')

    return { posts }
  },
  head() {
    return {
      title: `Main | ${process.env.appName}`
    }
  }
}
</script>

<style>
.post-list {
  flex-wrap: wrap;
}
</style>

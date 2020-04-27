<template>
  <div>
    <AppMostReadPost />
    <AppFeaturedPost />
  </div>
</template>

<script>
import AppFeaturedPost from '@/components/main/post/Featured'
import AppMostReadPost from '@/components/main/post/MostRead'

export default {
  components: {
    AppFeaturedPost,
    AppMostReadPost
  }
}
</script>

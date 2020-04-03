<template>
  <div>
    <h2>Аналитика по постам</h2>
    <AppAnalyticsChart
      title="Количество просмотров"
      :labels="views.labels"
      :data="views.data"
    />
    <AppAnalyticsChart
      title="Количество комментариев"
      :labels="comments.labels"
      :data="comments.data"
    />
  </div>
</template>

<script>
import AppAnalyticsChart from '@/components/admin/AnalyticsChart'

export default {
  layout: 'admin',
  middleware: ['admin-auth'],
  components: {
    AppAnalyticsChart
  },
  async asyncData({ store }) {
    const { views, comments } = await store.dispatch('post/getAnalytics')
    return { views, comments }
  }
}
</script>

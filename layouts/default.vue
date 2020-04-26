<template>
  <div class="body">
    <!-- Bootstrap -->
    <link type="text/css" rel="stylesheet" href="/css/bootstrap.min.css" />

    <!-- Font Awesome Icon -->
    <link rel="stylesheet" href="/css/font-awesome.min.css" />

    <!-- Custom stlylesheet -->
    <link type="text/css" rel="stylesheet" href="/css/style.css" />

    <AppHeader />

    <nuxt />

    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '@/components/main/Header.vue'
import AppFooter from '@/components/main/Footer.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style lang="scss">
@import '~/assets/styles/style';
</style>

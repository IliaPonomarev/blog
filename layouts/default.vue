<template>
  <!-- <el-container>
    <el-header><app-navigation /></el-header>
    <el-main
      ref="scrollTarget"
      class="page-component__scroll"
      style="overflow: auto"
    >
      <div>
        <nuxt />
        <el-backtop target=".page-component__scroll"></el-backtop>
      </div>

    </el-main>
    <el-footer class="footer">Footer</el-footer>
  </el-container> -->
  <div class="body">
    <!-- Google font -->
    <link
      href="https://fonts.googleapis.com/css?family=Nunito+Sans:700%7CNunito:300,600"
      rel="stylesheet"
    />

    <!-- Bootstrap -->
    <link type="text/css" rel="stylesheet" href="/css/bootstrap.min.css" />

    <!-- Font Awesome Icon -->
    <link rel="stylesheet" href="/css/font-awesome.min.css" />

    <!-- Custom stlylesheet -->
    <link type="text/css" rel="stylesheet" href="/css/style.css" />

    <AppHeader />

    <nuxt />

    <AppFooter />

    <!-- jQuery Plugins -->
    <script src="/js/jquery.min.js"></script>
    <script src="/js/bootstrap.min.js"></script>
    <script src="/js/main.js"></script>
  </div>
</template>

<script>
// import AppNavigation from '@/components/main/Navigation.vue'
import AppHeader from '@/components/main/Header.vue'
import AppFooter from '@/components/main/Footer.vue'

export default {
  name: 'App',
  components: {
    // AppNavigation
    AppHeader,
    AppFooter
  }
}
</script>

<style lang="scss">
// .footer {
//   background-color: rgba(0, 0, 0, 0.9);
// }
@import '~/assets/styles/style';
</style>

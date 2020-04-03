<template>
  <el-container>
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
      <!-- <div ref="scrollTarget" class="test-scroll"  style="height: 100px; overflow: auto">
          <div style="height: 10000px; width: 100%">
            <el-backtop target=".test-scroll">
            </el-backtop>
          </div>
        </div> -->
    </el-main>
    <el-footer class="footer">Footer</el-footer>
  </el-container>
</template>

<script>
import AppNavigation from '@/components/main/Navigation.vue'

export default {
  name: 'App',
  components: {
    AppNavigation
  }
}
</script>

<style lang="scss" scoped>
.footer {
  background-color: rgba(0, 0, 0, 0.9);
}
</style>

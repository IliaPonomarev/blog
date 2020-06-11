<template>
  <div class="admin-layout">
    <el-container :style="{ height: '100%' }">
      <!-- <el-aside width="250px">
        <app-aside />
      </el-aside> -->
      <el-button
        type="primary"
        style="margin-left: 0px;"
        @click="drawer = true"
      >
        open
      </el-button>
      <el-drawer
        title="I am the title"
        :visible.sync="drawer"
        :with-header="false"
      >
        <app-aside />
      </el-drawer>
      <el-main>
        <nuxt />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import AppAside from '@/components/admin/Aside'

export default {
  components: {
    AppAside
  },
  data() {
    return {
      drawer: false
    }
  },
  computed: {
    error() {
      return this.$store.getters.error
    }
  },
  watch: {
    error(value) {
      this.$message.error(value.response.data.message)
    }
  }
}
</script>

<style lang="scss" scoped>
.admin-layout {
  width: 100%;
  height: 100vh;
}
</style>

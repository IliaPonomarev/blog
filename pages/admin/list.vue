<template>
  <el-table :data="posts" style="width: 100%">
    <el-table-column prop="title" label="Название" />

    <el-table-column label="Date" width="180">
      <template slot-scope="{ row: { date } }">
        <span style="margin-left: 10px">{{
          new Date(date).toLocaleString()
        }}</span>
      </template>
    </el-table-column>

    <el-table-column prop="views" label="Просмотры" width="180">
      <template slot-scope="{ row: { views } }">
        <i class="el-icon-view"></i>
        <span style="margin-left: 10px">{{ views }}</span>
      </template>
    </el-table-column>

    <el-table-column prop="comments" label="Комментарии" width="180">
      <template slot-scope="{ row: { comments } }">
        <i class="el-icon-message"></i>
        <span style="margin-left: 10px">{{ comments.length }}</span>
      </template>
    </el-table-column>

    <el-table-column label="Operations">
      <template slot-scope="{ row }">
        <el-tooltip effect="dark" content="Make the main" placement="top">
          <el-button
            v-if="isItMainPost(row._id)"
            icon="el-icon-paperclip"
            type="success"
            @click="unMakeMain(row._id)"
          />
          <el-button
            v-else
            icon="el-icon-paperclip"
            type="info"
            @click="makeMain(row._id)"
          />
        </el-tooltip>
        <el-tooltip effect="dark" content="Edit post" placement="top">
          <el-button
            icon="el-icon-edit"
            type="primary"
            @click="open(row._id)"
          />
        </el-tooltip>
        <el-tooltip effect="dark" content="Delete post" placement="top">
          <el-button
            icon="el-icon-delete"
            type="danger"
            @click="remove(row._id)"
          />
        </el-tooltip>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  layout: 'admin',
  middleware: ['admin-auth'],
  async asyncData({ store }) {
    const posts = await store.dispatch('post/fetchAdmin')
    return {
      posts
    }
  },
  computed: {
    isMainPostExist() {
      return this.posts.some((post) => post.isMain === true)
    },
    mainPost() {
      return this.posts.find((post) => post.isMain === true)
    }
  },
  methods: {
    open(id) {
      this.$router.push(`/admin/post/${id}`)
    },
    isItMainPost(id) {
      if (this.isMainPostExist === false) {
        return false
      }
      return id === this.mainPost._id
    },
    async remove(id) {
      try {
        await this.$confirm('Вы уверены?', 'Внимание!', {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          type: 'warning'
        })

        await this.$store.dispatch('post/remove', id)

        this.posts = this.posts.filter((item) => item._id !== id)

        this.$message.success('Пост удален')
      } catch (e) {}
    },
    async makeMain(id) {
      try {
        if (this.isMainPostExist) {
          return this.$message.error('Главный пост может быть только один')
        }

        await this.$store.dispatch('post/makeMain', id)

        this.posts = this.posts.map((post) => {
          if (post._id === id) {
            post.isMain = true
          }
          return post
        })

        this.$message.success('Успешно обновлено!')
      } catch (e) {}
    },
    async unMakeMain(id) {
      try {
        await this.$store.dispatch('post/unMakeMain', id)

        this.posts = this.posts.map((post) => {
          if (post._id === id) {
            post.isMain = false
          }
          return post
        })

        this.$message.success('Успешно обновлено!')
      } catch (e) {}
    }
  }
}
</script>

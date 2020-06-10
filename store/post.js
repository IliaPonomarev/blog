export const state = () => ({})

export const mutations = {}

export const actions = {
  async fetchAdmin({ commit }) {
    try {
      return await this.$axios.$get('/api/post/admin')
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  },

  async fetch({ commit }) {
    try {
      return await this.$axios.$get('/api/post')
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  },

  async fetchPostsWithoutMainPost({ commit }) {
    try {
      return await this.$axios.$get('/api/post/get/withoutmainpost')
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  },

  async remove({ commit }, id) {
    try {
      return await this.$axios.$delete(`/api/post/admin/${id}`)
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  },

  async update({ commit }, { text, id }) {
    try {
      return await this.$axios.$put(`/api/post/admin/${id}`, { text })
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  },

  async create({ commit }, { title, description, text, image, seo }) {
    try {
      const fd = new FormData()

      fd.append('title', title)
      fd.append('description', description)
      fd.append('text', text)
      fd.append('seoTitle', seo.title)
      fd.append('seoDescription', seo.description)
      fd.append('seoKeywords', seo.keywords)
      fd.append('image', image, image.name)

      return await this.$axios.$post('/api/post/admin', fd)
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  },

  async fetchAdminById({ commit }, id) {
    try {
      return await this.$axios.$get(`/api/post/admin/${id}`)
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  },

  async fetchById({ commit }, id) {
    try {
      return await this.$axios.$get(`/api/post/${id}`)
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  },

  async fetchMainPost({ commit }) {
    try {
      return await this.$axios.$get(`/api/post/get/mainpost`)
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  },

  async fetchMostReadPosts({ commit }) {
    try {
      return await this.$axios.$get(`/api/post/get/getmostreadposts`)
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  },

  async makeMain({ commit }, id) {
    try {
      return await this.$axios.$put(`/api/post/makemain/${id}`)
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  },

  async unMakeMain({ commit }, id) {
    try {
      return await this.$axios.$put(`/api/post/unmakemain/${id}`)
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  },

  async addView({ commit }, { views, _id }) {
    try {
      return await this.$axios.$put(`/api/post/add/view/${_id}`, { views })
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  },
  async getAnalytics({ commit }) {
    try {
      return await this.$axios.$get(`/api/post/admin/get/analytics`)
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  }
}

export const getters = {}

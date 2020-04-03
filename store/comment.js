export const mutations = {}

export const actions = {
  async create({ commit }, formData) {
    try {
      return await this.$axios.$post('/api/comment/create', formData)
    } catch (e) {
      commit('setError', e, { root: true })
    }
  },
  async like({ commit }, formData) {
    try {
      console.log('like')
      return await this.$axios.$post('/api/comment/like', formData)
    } catch (e) {
      commit('setError', e, { root: true })
    }
  },
  async dislike({ commit }, formData) {
    try {
      return await this.$axios.$post('/api/comment/dislike', formData)
    } catch (e) {
      commit('setError', e, { root: true })
    }
  }
}

export const getters = {}

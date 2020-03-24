export const mutations = {

}

export const actions = {
	async create({commit}, formData) {
		try {
			return await this.$axios.$post('/api/comment/create', formData)
		} catch(e) {
			commit('setError', e, {root: true})
		}
	}
}

export const getters = {
	
}
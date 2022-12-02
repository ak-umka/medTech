export const state = () => ({
    token: null,
})

export const getters = {
}

export const mutations = {
    setToken(state, token) {
        state.token = token
    }
}

export const actions = {
    async signin({ commit }, { email, password }) {
        try {
            const { data } = await this.$axios.post('/api/v0/signin', { email, password })
            return data     
        } catch (error) {
            console.log(error)
            return error
        }
    },

    async signup({ commit }, { firstname, lastname, email, password, role }) {
        try {
            const { data } = await this.$axios.post('/api/v0/signup', { firstname, lastname, email, password, role })
            return data
        } catch (error) {
            console.log(error)
            return error
        }
    },
}
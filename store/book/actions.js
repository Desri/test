export default {

  async fetchListBook({commit}) {
    let token = localStorage.getItem("auth._token.local")
    try {
      const response = await this.$axios.$get(`api/books?token=${token}`)
      commit('SET_LIST_BOOK', response.data.books)
    } catch(error) {
      throw error
    }
  },

  async fetchDetailBook({commit}, id) {
    let token = localStorage.getItem("auth._token.local")
    try {
      const response = await this.$axios.$get(`api/books/detail?token=${token}&id=${id}`)
      commit('SET_DETAIL_BOOK', response.data)
    } catch(error) {
      throw error
    }
  },

  async fetchEditBook({commit}, payload) {
    let token = localStorage.getItem("auth._token.local")
    try {
      const response = await this.$axios.$post(`api/books/edit?token=${token}`, payload)
      commit('SET_EDIT_BOOK', response.data)
    } catch(error) {
      throw error
    }
  },

  async fetchAddBook({commit}, payload) {
    let token = localStorage.getItem("auth._token.local")
    try {
      const response = await this.$axios.$post(`api/books/insert?token=${token}`, payload)
      commit('SET_ADD_BOOK', response.data)
    } catch(error) {
      throw error
    }
  },

};
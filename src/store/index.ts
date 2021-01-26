import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { RootState, Book, Books, Favorites } from '@/types'
import Axios from 'axios'

Vue.use(Vuex)

let bookInfoAPI = "https://www.googleapis.com/books/v1/volumes/"

const store: StoreOptions<RootState> = {
  state: {
    book: new Book(),
    books: [],
    favorites: []
  },
  mutations: {
    FETCH_BOOK(state, { res } ){
      console.log(res.data)
      state.book = res.data
    },
    UPDATE_FAVORITES(state, book: Book) {
      state.favorites.push(book)
    },
    SET_BOOKS(state, books) {
      state.books = books
    }
  },
  actions: {
    async fetch_book({ commit }, payload) {
      await Axios.get(bookInfoAPI + payload)
      .then(res => commit("FETCH_BOOK", { res }))
        .catch(err => alert(err));
    },
    set_books({ commit }, payload) {
      commit('SET_BOOKS', payload)
    }
  },
  getters: {
    //bookinfo(state, id: string): Book {
    //  return state.books.filter(item => item.id == id)
    //}
    book: state => state.book
  },
  modules: {
  }
}

export default new Vuex.Store<RootState>(store)

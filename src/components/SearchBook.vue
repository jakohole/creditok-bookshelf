<template>
    <v-card>
      <v-card-title>
        <v-text-field
          v-model.lazy="book.title"
          prepend-icon="mdi-magnify"
          label="Search for books"
          single-line
          hide-details
          v-on:keyup.enter="getSearchBooks"
        ></v-text-field>
      </v-card-title>
        <!--<v-toolbar-title>{{books}}</v-toolbar-title>-->
      <v-list three-line>
      <template v-for="(item, index) in books.items">
        <v-list-item
          :key="item.id"
        >
          <!--<v-list-item-avatar>
            <v-img :src="item.volumeInfo.imageLinks.smallThumbnail"></v-img>
          </v-list-item-avatar>-->
          
            <v-img :src="item.volumeInfo.imageLinks.smallThumbnail" contain :aspect-ratio="16/9" height="90" ></v-img>
          
          <v-list-item-content>
              
            <router-link :to="{name: 'BookInfo', params: {id: item.id }}">
            <v-list-item-title v-html="item.volumeInfo.title"></v-list-item-title>
            </router-link>
            <v-list-item-subtitle v-html="item.volumeInfo.authors"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        
      </template>
    </v-list>
    </v-card>
</template>
<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import { Book, Books } from '@/types'
export default Vue.extend({
    name: 'SearchBook' as string,

    data: () => ({
        book: {} as Book,
        //books: [] as Books
    }),

    computed: {
        books() {
            return this.$store.state.books
        }
    },

    methods: {
        printTitle(): string {
            console.log(this.book.title)
            return this.book.title
        },
        async getSearchBooks() {
            await axios.get('https://www.googleapis.com/books/v1/volumes?q='+this.book.title)
                .then(response => {
                    //commit('SET_BOOKS', response.data)
                    //this.books = response.data
                    //console.log(response.data)
                    this.$store.dispatch("set_books", response.data);
                    
                })
            }
    }
})
</script>
<template>
  <v-sheet class="pa-2" color="gret lighten-3">
    <v-sheet elevation="elevation" class="mx-auto">
      <v-container>
        <v-row no-gutters>
          <v-col md="5">
            <v-list-item-avatar tile size="400" color="grey lighten-2">
              <v-img
                :src="book.volumeInfo.imageLinks.smallThumbnail"
                contain
                :aspect-ratio="16 / 9"
                height="400"
              ></v-img>
            </v-list-item-avatar>
          </v-col>
          <v-col>
            <!--<div
              :class="[text-1]"
              v-text="book.volumeInfo.title"
            ></div>-->
            <h2 class="v-heading text-h4">{{ book.volumeInfo.title }}</h2>
            <span class="v-text"> By {{ book.volumeInfo.authors }} </span>
            <div class="v-text">
              Published {{ book.volumeInfo.publishedDate }}
            </div>
            <v-divider> </v-divider>
            <v-subheader> Synopsis </v-subheader>
            <!-- Contain book basic information such as title, authors, published date, description, page count, and industry identifiers.-->

            <v-sheet color="white" elevation="1">
              <span v-html="shortText"></span>
              <span v-if="readMore"></span>
              <span v-else>...</span>
              <span v-show="readMore" v-html="longText"></span>
              <a class="btn btn-success" @click="readMore = !readMore" href="#">
                <span v-if="readMore">Read Less</span>
                <span v-else>Read More</span>
              </a>
            </v-sheet>
            <v-btn icon><v-icon color="pink">mdi-heart-outline</v-icon></v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </v-sheet>
</template>

<script lang="ts">
import Vue from "vue";
import { Book } from "@/types";
import Axios from "axios";
import { mapState } from "vuex";

export default Vue.extend({
  name: "BookInfo" as string,
  props: ["id"],
  data: () => ({
    readMore: false,
    //shortText: ''
    // book: {} as Book,
    //books: [] as Books
  }),
  computed: {
    shortText(): string {
      return this.book.volumeInfo.description.slice(0, 300);
    },
    longText(): string {
      return this.book.volumeInfo.description.slice(299);
    },
    ...mapState(["book"]),
    /* shortText() {
      return this.book.volumeInfo.description.slice(0, 200)
    },
    longText() {
      return this.book.volumeInfo.description.slice(200)
    } */
  },
  methods: {
    fetchBook() {
      this.$store.dispatch("fetch_book", this.id);
      //console.log('test: '+ this.id)
      //await Axios.get("https://www.googleapis.com/books/v1/volumes/" + this.id)
      //.then(res => console.log(res.data))
      //.catch(err => alert(err));
    }
  },
  created() {
    console.log(this.id);
    //Axios.get("https://www.googleapis.com/books/v1/volumes/" + this.id)
    //  .then(res => {
    //    this.book = res.data
    //    console.log(res.data)
    //  })
    //  .catch(err => alert(err));

    //this.$store.dispatch("fetchBook", this.id);
    this.fetchBook();
  },
  watch: {
    // call again the method if the route changes
    $route: "fetchBook",
  },
});
</script>
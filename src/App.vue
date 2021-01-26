<template>
  <v-app id="inspire">

    <v-app-bar app color="white">
      <!--<v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>-->
      <div class="d-flex align-center">
        <v-img
          alt="CreditOK Logo"
          class="shrink mr-1"
          contain
          src="https://www.creditok.co/img/creditok.svg"
          transition="scale-transition"
          width="120"
        />
        <v-divider
  vertical
></v-divider>

      

      <v-btn icon><v-icon>mdi-home</v-icon><router-link :to="{name: 'Home'}"></router-link></v-btn>
      <v-btn icon><v-icon>mdi-magnify</v-icon>
        <router-link :to="{name: 'About'}"></router-link>
      </v-btn>

      <v-btn icon><v-icon>mdi-heart</v-icon></v-btn>
        
        
      </div>
    </v-app-bar>

    <!--<v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
    >
      
    </v-navigation-drawer>-->

    <v-main class="grey lighten-2">
      <v-container>
        <router-view></router-view>
        
        <!--<book-category /> -->
        <!--<v-row>
          <template v-for="n in 4">
            <v-col
              :key="n"
              class="mt-2"
              cols="12"
            >
              <strong>Category {{ n }}</strong>
            </v-col>

            <v-col
              v-for="j in 6"
              :key="`${n}${j}`"
              cols="6"
              md="2"
            >
              <v-sheet height="150"></v-sheet>
            </v-col>
          </template>
        </v-row>-->
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import BookCategory from './components/BookCategory.vue';

//import HelloWorld from './components/HelloWorld.vue';
//import Home from './views/Home.vue';

export default Vue.extend({
  name: 'App',

  components: {
    HelloWorld,
    BookCategory
    
    //Home
    //HelloWorld,
  },

  data: () => ({
    drawer: null
  }),
});
</script>
<style>
  .link{
    
    color: #000;  
      cursor: pointer;
    }
</style>
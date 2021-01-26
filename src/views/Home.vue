<template>
  <div class="home">
    <search-book/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import SearchBook from '../components/SearchBook.vue'

export default Vue.extend({
  name: 'Home',
  components: {
    HelloWorld,
    SearchBook
  },
});
</script>
